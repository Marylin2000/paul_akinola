
'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { 
  ChevronLeft, 
  Save, 
  Image as ImageIcon, 
  Upload, 
  X, 
  Loader2, 
  AlertCircle,
  Eye,
  Trash2
} from 'lucide-react';
import Link from 'next/link';
import { payload } from '@/lib/payload/api';
import { cn } from '@/lib/utils';

export function ArticleEditor({ articleId, initialData }: { articleId: string; initialData?: any }) {
  const router = useRouter();
  const [isSaving, setIsSaving] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const [formData, setFormData] = useState({
    title: initialData?.title || '',
    slug: initialData?.slug || '',
    tag: initialData?.tag || 'Work',
    excerpt: initialData?.excerpt || '',
    date: initialData?.date || '',
    content: initialData?.content ? JSON.stringify(initialData.content, null, 2) : '', // Lexical JSON as string for now
    image: initialData?.image || { url: '', alt: '' },
    _status: initialData?._status || 'draft',
  });

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    setError(null);

    const token = document.cookie.split('; ').find(row => row.startsWith('payload-token='))?.split('=')[1];

    if (!token) {
      setError('Not authenticated');
      setIsUploading(false);
      return;
    }

    try {
      const data = new FormData();
      data.append('file', file);
      data.append('alt', formData.title || 'Article image');

      const res = await payload.uploadMedia(data, token);
      setFormData(prev => ({
        ...prev,
        image: {
          url: res.doc.url,
          alt: res.doc.alt
        }
      }));
    } catch (err: any) {
      setError(err.message || 'Upload failed');
    } finally {
      setIsUploading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    setError(null);

    const token = document.cookie.split('; ').find(row => row.startsWith('payload-token='))?.split('=')[1];

    if (!token) {
      setError('Not authenticated');
      setIsSaving(false);
      return;
    }

    try {
      const submissionData = {
        ...formData,
        content: formData.content ? JSON.parse(formData.content) : {}, // Try to parse back to JSON
      };

      if (articleId === 'new') {
        await payload.createArticle(submissionData, token);
      } else {
        await payload.updateArticle(articleId, submissionData, token);
      }

      router.push('/admin/articles');
      router.refresh();
    } catch (err: any) {
      setError(err.message || 'Save failed. Make sure content is valid JSON if provided.');
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8 pb-20">
      {/* Header */}
      <div className="flex items-center justify-between gap-4 border-b border-white/5 pb-8">
        <div className="flex items-center gap-4">
          <Link 
            href="/admin/articles"
            className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors"
          >
            <ChevronLeft className="w-5 h-5 text-neutral-400" />
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-white">
              {articleId === 'new' ? 'New Article' : 'Edit Article'}
            </h1>
            <p className="text-neutral-500 text-sm mt-1">
              {articleId === 'new' ? 'Drafting a new thought...' : `Editing: ${formData.title}`}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            className="px-4 py-2 rounded-xl text-neutral-400 hover:text-white hover:bg-white/5 transition-colors font-medium flex items-center gap-2"
          >
            <Eye className="w-4 h-4" />
            Preview
          </button>
          <button
            type="submit"
            disabled={isSaving}
            className="bg-purple-600 hover:bg-purple-500 text-white px-6 py-2.5 rounded-xl font-semibold flex items-center gap-2 transition-all active:scale-[0.98] shadow-lg shadow-purple-500/20 disabled:opacity-50"
          >
            {isSaving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
            {isSaving ? 'Saving...' : 'Save Article'}
          </button>
        </div>
      </div>

      {error && (
        <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-4 flex items-start gap-3 text-red-400">
          <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
          <p className="text-sm font-medium">{error}</p>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-neutral-400 ml-1">Article Title</label>
              <input
                type="text"
                required
                value={formData.title}
                onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                className="w-full bg-neutral-800/40 border border-white/5 focus:border-purple-500/50 rounded-xl py-4 px-5 outline-none transition-all text-white text-xl font-semibold placeholder:text-neutral-700"
                placeholder="Enter a compelling title..."
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-neutral-400 ml-1">Slug</label>
                <input
                  type="text"
                  required
                  value={formData.slug}
                  onChange={(e) => setFormData(prev => ({ ...prev, slug: e.target.value }))}
                  className="w-full bg-neutral-800/40 border border-white/5 focus:border-purple-500/50 rounded-xl py-3 px-4 outline-none transition-all text-white font-mono text-sm"
                  placeholder="my-article-slug"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-neutral-400 ml-1">Tag / Category</label>
                <select
                  value={formData.tag}
                  onChange={(e) => setFormData(prev => ({ ...prev, tag: e.target.value }))}
                  className="w-full bg-neutral-800/40 border border-white/5 focus:border-purple-500/50 rounded-xl py-3 px-4 outline-none transition-all text-white appearance-none"
                >
                  <option value="Work">Work</option>
                  <option value="Inner Life">Inner Life</option>
                  <option value="Core">Core</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-neutral-400 ml-1">Excerpt</label>
              <textarea
                required
                value={formData.excerpt}
                onChange={(e) => setFormData(prev => ({ ...prev, excerpt: e.target.value }))}
                rows={3}
                className="w-full bg-neutral-800/40 border border-white/5 focus:border-purple-500/50 rounded-xl py-4 px-5 outline-none transition-all text-white resize-none"
                placeholder="Brief summary for list views..."
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-neutral-400 ml-1">Content (Lexical JSON)</label>
              <textarea
                value={formData.content}
                onChange={(e) => setFormData(prev => ({ ...prev, content: e.target.value }))}
                rows={12}
                className="w-full bg-neutral-800/50 border border-white/5 focus:border-purple-500/50 rounded-xl py-4 px-5 outline-none transition-all text-white font-mono text-sm leading-relaxed"
                placeholder='{"root": {"children": [], ...}}'
              />
              <p className="text-xs text-neutral-600 ml-1 italic">Payload Lexical content is stored as JSON. For this bespoke editor, it must be valid JSON strings.</p>
            </div>
          </div>
        </div>

        {/* Sidebar / Metadata */}
        <div className="space-y-6">
          {/* Featured Image */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 space-y-4">
            <h3 className="font-semibold text-lg flex items-center gap-2">
              <ImageIcon className="w-5 h-5 text-purple-400" />
              Featured Image
            </h3>
            
            <div 
              className={cn(
                "relative aspect-video rounded-2xl overflow-hidden border border-dashed flex flex-col items-center justify-center transition-all group cursor-pointer",
                formData.image.url ? "border-transparent" : "border-white/10 hover:border-purple-500/50 bg-white/2"
              )}
              onClick={() => !formData.image.url && fileInputRef.current?.click()}
            >
              {formData.image.url ? (
                <>
                  <img 
                    src={formData.image.url} 
                    alt="Preview" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                    <button 
                      type="button"
                      onClick={(e) => { e.stopPropagation(); fileInputRef.current?.click(); }}
                      className="p-2 rounded-lg bg-white/20 hover:bg-white/30 text-white transition-colors"
                    >
                      <Upload className="w-5 h-5" />
                    </button>
                    <button 
                      type="button"
                      onClick={(e) => { e.stopPropagation(); setFormData(prev => ({ ...prev, image: { url: '', alt: '' } })); }}
                      className="p-2 rounded-lg bg-red-500/40 hover:bg-red-500/60 text-white transition-colors"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </>
              ) : (
                <>
                  {isUploading ? (
                    <Loader2 className="w-8 h-8 animate-spin text-purple-500" />
                  ) : (
                    <>
                      <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                        <Upload className="w-6 h-6 text-neutral-500" />
                      </div>
                      <p className="text-sm font-medium text-neutral-500">Click to upload</p>
                      <p className="text-xs text-neutral-700 mt-1">PNG, JPG, WebP</p>
                    </>
                  )}
                </>
              )}
            </div>
            <input 
              type="file" 
              ref={fileInputRef}
              onChange={handleImageUpload}
              className="hidden" 
              accept="image/*"
            />
          </div>

          {/* Publishing */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 space-y-4">
            <h3 className="font-semibold text-lg flex items-center gap-2">
              <Calendar className="w-5 h-5 text-blue-400" />
              Settings
            </h3>
            
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-xs font-medium text-neutral-500 ml-1">Publish Date</label>
                <input
                  type="text"
                  value={formData.date}
                  onChange={(e) => setFormData(prev => ({ ...prev, date: e.target.value }))}
                  className="w-full bg-neutral-800/40 border border-white/5 rounded-xl py-2.5 px-4 outline-none text-white text-sm"
                  placeholder="e.g. October 2023"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-medium text-neutral-500 ml-1">Status</label>
                <div className="flex p-1 bg-neutral-900 rounded-xl border border-white/5">
                  {['draft', 'published'].map((status) => (
                    <button
                      key={status}
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, _status: status }))}
                      className={cn(
                        "flex-1 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all",
                        formData._status === status 
                          ? "bg-purple-600 text-white shadow-lg shadow-purple-500/20" 
                          : "text-neutral-500 hover:text-white"
                      )}
                    >
                      {status}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
