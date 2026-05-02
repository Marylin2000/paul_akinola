'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Plus,
  Search,
  Upload,
  Trash2,
  Edit2,
  X,
  Loader2,
  Check,
  Grid2X2,
  List,
  AlertCircle,
  Image as ImageIcon,
} from 'lucide-react';
import { api } from '@/lib/api';
import { cn } from '@/lib/utils';

const springConfig = { type: 'spring', stiffness: 300, damping: 25 } as const;

export function MediaLibrary({ initialMedia }: { initialMedia: any[] }) {
  const [media, setMedia] = useState(initialMedia);
  const [isUploading, setIsUploading] = useState(false);
  const [editingItem, setEditingItem] = useState<any>(null);
  const [isSaving, setIsSaving] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [error, setError] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    setError(null);

    try {
      const data = new FormData();
      data.append('file', file);
      data.append('_payload', JSON.stringify({ alt: file.name.split('.')[0] }));

      const res = await api.media.upload(data);
      setMedia([res.doc, ...media]);
    } catch (err: any) {
      setError('Upload failed: ' + err.message);
    } finally {
      setIsUploading(false);
      if (fileInputRef.current) fileInputRef.current.value = '';
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to permanently delete this item?')) return;

    setError(null);

    try {
      await api.media.delete(id);
      setMedia(media.filter((m) => m.id !== id));
    } catch (err: any) {
      setError('Delete failed: ' + err.message);
    }
  };

  const handleUpdateMetadata = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    setError(null);

    try {
      const res = await api.media.update(editingItem.id, { alt: editingItem.alt });
      setMedia(media.map((m) => (m.id === editingItem.id ? res.doc : m)));
      setEditingItem(null);
    } catch (err: any) {
      setError('Update failed: ' + err.message);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ...springConfig }}
      className="space-y-8"
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="font-serif text-4xl font-bold text-foreground">
            Media Library
          </h1>
          <p className="text-foreground/60 mt-2">Upload and manage your visual assets.</p>
        </div>
        <motion.button
          onClick={() => fileInputRef.current?.click()}
          disabled={isUploading}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={springConfig}
          className="flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white px-6 py-3 font-semibold transition-all disabled:opacity-50"
        >
          {isUploading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Plus className="w-5 h-5" />}
          {isUploading ? 'Uploading...' : 'Upload Asset'}
        </motion.button>
        <input type="file" ref={fileInputRef} onChange={handleUpload} className="hidden" accept="image/*" />
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

      {/* Toolbar */}
      <div className="flex items-center justify-between gap-4 bg-paper border border-rule p-4">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/40" />
          <input
            type="text"
            placeholder="Search filenames..."
            className="w-full bg-foreground/5 border border-foreground/10 py-2.5 pl-11 pr-4 outline-none focus:border-primary/50 text-sm transition-all"
          />
        </div>
        <div className="flex p-1 bg-foreground/5 border border-foreground/10">
          <motion.button
            onClick={() => setViewMode('grid')}
            whileTap={{ scale: 0.95 }}
            transition={springConfig}
            className={cn(
              'p-2 transition-all',
              viewMode === 'grid' ? 'bg-primary text-white' : 'text-foreground/40 hover:text-foreground'
            )}
          >
            <Grid2X2 className="w-4 h-4" />
          </motion.button>
          <motion.button
            onClick={() => setViewMode('list')}
            whileTap={{ scale: 0.95 }}
            transition={springConfig}
            className={cn(
              'p-2 transition-all',
              viewMode === 'list' ? 'bg-primary text-white' : 'text-foreground/40 hover:text-foreground'
            )}
          >
            <List className="w-4 h-4" />
          </motion.button>
        </div>
      </div>

      {/* Grid View */}
      {viewMode === 'grid' ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6"
        >
          {media.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.03, ...springConfig }}
              whileHover={{ y: -4 }}
              className="group relative aspect-square bg-foreground/5 border border-foreground/10 overflow-hidden"
            >
              <img src={item.url} alt={item.alt} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-foreground/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-3">
                <div className="flex justify-end gap-1.5">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setEditingItem(item)}
                    className="p-1.5 bg-foreground/20 hover:bg-foreground/30"
                  >
                    <Edit2 className="w-3.5 h-3.5 text-foreground" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => handleDelete(item.id)}
                    className="p-1.5 bg-red-500/20 hover:bg-red-500/40"
                  >
                    <Trash2 className="w-3.5 h-3.5 text-red-400" />
                  </motion.button>
                </div>
                <div>
                  <p className="text-[10px] font-mono truncate mb-0.5">{item.filename}</p>
                  <p className="text-[10px] text-foreground/40 uppercase tracking-tighter font-bold">
                    {item.width}x{item.height} • {Math.round(item.filesize / 1024)}KB
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="bg-paper border border-rule overflow-hidden"
        >
          <table className="w-full text-left">
            <thead className="text-[10px] font-bold text-foreground/40 uppercase tracking-widest border-b border-foreground/10">
              <tr>
                <th className="px-6 py-4">Asset</th>
                <th className="px-6 py-4">Format</th>
                <th className="px-6 py-4">Dimensions</th>
                <th className="px-6 py-4">Size</th>
                <th className="px-6 py-4 w-10"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-foreground/5">
              {media.map((item) => (
                <motion.tr
                  key={item.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  whileHover={{ backgroundColor: 'rgba(var(--foreground), 0.02)' }}
                  className="transition-colors"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 border border-foreground/10 overflow-hidden">
                        <img src={item.url} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold truncate max-w-[200px]">{item.filename}</p>
                        <p className="text-xs text-foreground/40 italic">alt: {item.alt}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-xs font-mono text-foreground/40 uppercase">
                    {item.mimeType?.split('/')[1]}
                  </td>
                  <td className="px-6 py-4 text-xs text-foreground/40">{item.width} x {item.height}</td>
                  <td className="px-6 py-4 text-xs text-foreground/40">{Math.round(item.filesize / 1024)} KB</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setEditingItem(item)}
                        className="p-2 text-foreground/40 hover:text-foreground transition-colors"
                      >
                        <Edit2 className="w-4 h-4" />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => handleDelete(item.id)}
                        className="p-2 text-foreground/40 hover:text-red-500 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </motion.button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      )}

      {/* Edit Dialog */}
      <AnimatePresence>
        {editingItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/80 backdrop-blur-sm"
            onClick={() => setEditingItem(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={springConfig}
              className="w-full max-w-lg bg-paper border border-rule p-8"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-serif text-2xl font-bold">Edit Asset Details</h2>
                <button
                  onClick={() => setEditingItem(null)}
                  className="p-2 hover:bg-foreground/5 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <form onSubmit={handleUpdateMetadata} className="space-y-6">
                <div className="aspect-video w-full border border-foreground/10 overflow-hidden bg-foreground/5">
                  <img src={editingItem.url} className="w-full h-full object-contain" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-foreground/40 ml-1 uppercase tracking-wider">
                    Alt Text (Accessibility)
                  </label>
                  <input
                    type="text"
                    value={editingItem.alt}
                    onChange={(e) => setEditingItem({ ...editingItem, alt: e.target.value })}
                    className="w-full bg-foreground/5 border border-foreground/10 py-3 px-4 outline-none focus:border-primary/50 transition-all"
                    placeholder="Describe this image..."
                  />
                </div>
                <div className="flex gap-4 pt-4">
                  <motion.button
                    type="button"
                    onClick={() => setEditingItem(null)}
                    whileTap={{ scale: 0.98 }}
                    transition={springConfig}
                    className="flex-1 py-3 border border-foreground/20 hover:bg-foreground/5 transition-all font-semibold"
                  >
                    Cancel
                  </motion.button>
                  <motion.button
                    type="submit"
                    disabled={isSaving}
                    whileTap={{ scale: 0.98 }}
                    transition={springConfig}
                    className="flex-1 py-3 bg-primary hover:bg-primary/90 text-white font-semibold flex items-center justify-center gap-2 transition-all disabled:opacity-50"
                  >
                    {isSaving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Check className="w-4 h-4" />}
                    Save Changes
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
