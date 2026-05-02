'use client';

import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import {
  ChevronLeft,
  Save,
  Image as ImageIcon,
  Upload,
  Loader2,
  AlertCircle,
  Eye,
  Trash2,
  Calendar,
  Tag,
} from 'lucide-react';
import Link from 'next/link';
import { api } from '@/lib/api';
import { cn } from '@/lib/utils';
import { LexicalEditor } from './LexicalEditor';

const springConfig = { type: 'spring', stiffness: 300, damping: 25 };

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
    content: initialData?.content ? JSON.stringify(initialData.content, null, 2) : '',
    image: initialData?.image || { url: '', alt: '' },
    _status: initialData?._status || 'draft',
  });

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    setError(null);

    try {
      const data = new FormData();
      data.append('file', file);
      data.append('_payload', JSON.stringify({ alt: formData.title || 'Article image' }));

      const res = await api.media.upload(data);
      setFormData((prev) => ({
        ...prev,
        image: {
          url: res.doc.url,
          alt: res.doc.alt,
        },
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

    try {
      const submissionData = {
        ...formData,
        content: formData.content ? JSON.parse(formData.content) : {},
      };

      if (articleId === 'new') {
        await api.articles.create(submissionData);
      } else {
        await api.articles.update(articleId, submissionData);
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
      <div className="flex items-center justify-between gap-4 border-b border-foreground/10 pb-8">
        <div className="flex items-center gap-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={springConfig}
          >
            <Link
              href="/admin/articles"
              className="w-10 h-10 flex items-center justify-center border border-foreground/10 hover:bg-foreground/5 transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-foreground/60" />
            </Link>
          </motion.div>
          <div>
            <h1 className="font-serif text-3xl font-bold text-foreground">
              {articleId === 'new' ? 'New Article' : 'Edit Article'}
            </h1>
            <p className="text-foreground/60 text-sm mt-1">
              {articleId === 'new' ? 'Drafting a new thought...' : `Editing: ${formData.title}`}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <motion.button
            type="button"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={springConfig}
            className="px-4 py-2 border border-foreground/20 hover:bg-foreground/5 transition-colors font-semibold flex items-center gap-2 text-foreground/60 hover:text-foreground"
          >
            <Eye className="w-4 h-4" />
            Preview
          </motion.button>
          <motion.button
            type="submit"
            disabled={isSaving}
            whileTap={{ scale: 0.98 }}
            transition={springConfig}
            className="bg-primary hover:bg-primary/90 text-white px-6 py-2.5 font-semibold flex items-center gap-2 transition-all disabled:opacity-50"
          >
            {isSaving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
            {isSaving ? 'Saving...' : 'Save Article'}
          </motion.button>
        </div>
      </div>

      {error && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={springConfig}
          className="bg-red-500/10 border border-red-500/20 p-4 flex items-start gap-3 text-red-500"
        >
          <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
          <p className="text-sm font-medium">{error}</p>
        </motion.div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, ...springConfig }}
            className="bg-paper border border-rule p-8 space-y-6"
          >
            <div className="space-y-2">
              <label className="text-xs font-bold text-foreground/40 ml-1 uppercase tracking-wider">
                Article Title
              </label>
              <input
                type="text"
                required
                value={formData.title}
                onChange={(e) => setFormData((prev) => ({ ...prev, title: e.target.value }))}
                className="w-full bg-foreground/5 border border-foreground/10 focus:border-primary/50 py-4 px-5 outline-none transition-all text-foreground text-xl font-serif font-semibold placeholder:text-foreground/30"
                placeholder="Enter a compelling title..."
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-foreground/40 ml-1 uppercase tracking-wider">
                  Slug
                </label>
                <input
                  type="text"
                  required
                  value={formData.slug}
                  onChange={(e) => setFormData((prev) => ({ ...prev, slug: e.target.value }))}
                  className="w-full bg-foreground/5 border border-foreground/10 focus:border-primary/50 py-3 px-4 outline-none transition-all text-foreground font-mono text-sm"
                  placeholder="my-article-slug"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-foreground/40 ml-1 uppercase tracking-wider">
                  Tag / Category
                </label>
                <div className="relative">
                  <Tag className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/40" />
                  <select
                    value={formData.tag}
                    onChange={(e) => setFormData((prev) => ({ ...prev, tag: e.target.value }))}
                    className="w-full bg-foreground/5 border border-foreground/10 focus:border-primary/50 py-3 pl-11 pr-4 outline-none transition-all text-foreground appearance-none"
                  >
                    <option value="Work">Work</option>
                    <option value="Inner Life">Inner Life</option>
                    <option value="Core">Core</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-foreground/40 ml-1 uppercase tracking-wider">
                Excerpt
              </label>
              <textarea
                required
                value={formData.excerpt}
                onChange={(e) => setFormData((prev) => ({ ...prev, excerpt: e.target.value }))}
                rows={3}
                className="w-full bg-foreground/5 border border-foreground/10 focus:border-primary/50 py-4 px-5 outline-none transition-all text-foreground resize-none"
                placeholder="Brief summary for list views..."
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-foreground/40 ml-1 uppercase tracking-wider">
                Content (Rich Text)
              </label>
              <LexicalEditor 
                initialJson={formData.content} 
                onChange={(json) => setFormData((prev) => ({ ...prev, content: json }))} 
              />
            </div>
          </motion.div>
        </div>

        {/* Sidebar / Metadata */}
        <div className="space-y-6">
          {/* Featured Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, ...springConfig }}
            className="bg-paper border border-rule p-6 space-y-4"
          >
            <h3 className="font-serif font-semibold text-lg flex items-center gap-2">
              <ImageIcon className="w-5 h-5 text-primary" />
              Featured Image
            </h3>

            <div
              className={cn(
                'relative aspect-video border flex flex-col items-center justify-center transition-all group cursor-pointer',
                formData.image.url
                  ? 'border-transparent'
                  : 'border-dashed border-foreground/20 hover:border-primary/50 bg-foreground/5'
              )}
              onClick={() => !formData.image.url && fileInputRef.current?.click()}
            >
              {formData.image.url ? (
                <>
                  <img src={formData.image.url} alt="Preview" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-foreground/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                    <motion.button
                      type="button"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        fileInputRef.current?.click();
                      }}
                      className="p-2 bg-foreground/20 hover:bg-foreground/30 transition-colors"
                    >
                      <Upload className="w-5 h-5 text-foreground" />
                    </motion.button>
                    <motion.button
                      type="button"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        setFormData((prev) => ({ ...prev, image: { url: '', alt: '' } }));
                      }}
                      className="p-2 bg-red-500/40 hover:bg-red-500/60 transition-colors"
                    >
                      <Trash2 className="w-5 h-5 text-red-400" />
                    </motion.button>
                  </div>
                </>
              ) : (
                <>
                  {isUploading ? (
                    <Loader2 className="w-8 h-8 animate-spin text-primary" />
                  ) : (
                    <>
                      <motion.div
                        className="w-12 h-12 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform border border-foreground/20"
                        whileHover={{ scale: 1.1 }}
                      >
                        <Upload className="w-6 h-6 text-foreground/40" />
                      </motion.div>
                      <p className="text-sm font-medium text-foreground/60">Click to upload</p>
                      <p className="text-xs text-foreground/40 mt-1">PNG, JPG, WebP</p>
                    </>
                  )}
                </>
              )}
            </div>
            <input type="file" ref={fileInputRef} onChange={handleImageUpload} className="hidden" accept="image/*" />
          </motion.div>

          {/* Publishing */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, ...springConfig }}
            className="bg-paper border border-rule p-6 space-y-4"
          >
            <h3 className="font-serif font-semibold text-lg flex items-center gap-2">
              <Calendar className="w-5 h-5 text-secondary" />
              Settings
            </h3>

            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-xs font-bold text-foreground/40 ml-1 uppercase tracking-wider">
                  Publish Date
                </label>
                <input
                  type="text"
                  value={formData.date}
                  onChange={(e) => setFormData((prev) => ({ ...prev, date: e.target.value }))}
                  className="w-full bg-foreground/5 border border-foreground/10 py-2.5 px-4 outline-none text-foreground text-sm"
                  placeholder="e.g. October 2023"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-foreground/40 ml-1 uppercase tracking-wider">
                  Status
                </label>
                <div className="flex p-1 bg-foreground/5 border border-foreground/10">
                  {['draft', 'published'].map((status) => (
                    <motion.button
                      key={status}
                      type="button"
                      whileTap={{ scale: 0.98 }}
                      transition={springConfig}
                      onClick={() => setFormData((prev) => ({ ...prev, _status: status }))}
                      className={cn(
                        'flex-1 py-2 text-xs font-bold uppercase tracking-wider transition-all',
                        formData._status === status
                          ? 'bg-primary text-white'
                          : 'text-foreground/40 hover:text-foreground'
                      )}
                    >
                      {status}
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </form>
  );
}
