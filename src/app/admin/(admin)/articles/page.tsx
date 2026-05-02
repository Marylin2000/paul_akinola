'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Search, Filter, Calendar, Tag, ChevronRight, FileText } from 'lucide-react';
import { api } from '@/lib/api';

const springConfig = { type: 'spring', stiffness: 300, damping: 25 } as const;

export default function ArticlesPage() {
  const [articles, setArticles] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    async function fetchArticles() {
      try {
        const data = await api.articles.list();
        setArticles(data.docs || []);
      } catch (error) {
        console.error('Failed to fetch articles:', error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchArticles();
  }, []);

  const filteredArticles = articles.filter((article) =>
    article.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    article.excerpt?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ...springConfig }}
      className="space-y-8 pb-12"
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="font-serif text-4xl font-bold text-foreground">
            Articles
          </h1>
          <p className="text-foreground/60 mt-2">Manage your thoughts and writings.</p>
        </div>
        <motion.a
          href="/admin/articles/new"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={springConfig}
          className="flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white px-6 py-3 font-semibold transition-all"
        >
          <Plus className="w-5 h-5" />
          Create New Article
        </motion.a>
      </div>

      {/* Toolbar */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1 group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/40 group-focus-within:text-primary transition-colors" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search articles..."
            className="w-full bg-foreground/5 border border-foreground/10 focus:border-primary/50 focus:ring-4 focus:ring-primary/10 py-3 pl-12 pr-4 outline-none transition-all text-foreground placeholder:text-foreground/30"
          />
        </div>
        <motion.button
          whileTap={{ scale: 0.98 }}
          transition={springConfig}
          className="flex items-center gap-2 bg-foreground/5 border border-foreground/10 px-4 py-3 hover:bg-foreground/10 transition-all text-foreground/60 hover:text-foreground"
        >
          <Filter className="w-4 h-4" />
          Filter
        </motion.button>
      </div>

      {/* Grid */}
      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="aspect-[4/5] glass animate-pulse" />
          ))}
        </div>
      ) : filteredArticles.length === 0 ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="py-20 text-center glass"
        >
          <FileText className="w-12 h-12 text-foreground/20 mx-auto mb-4" />
          <p className="text-foreground/50">
            {searchQuery ? 'No articles match your search.' : 'No articles found. Start by creating one!'}
          </p>
        </motion.div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredArticles.map((article, idx) => (
            <motion.a
              key={article.id}
              href={`/admin/articles/${article.id}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05, ...springConfig }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="group glass overflow-hidden flex flex-col"
            >
              {/* Image Preview */}
              <div className="relative aspect-[16/10] overflow-hidden border-b border-foreground/10">
                {article.image?.url ? (
                  <img
                    src={article.image.url}
                    alt={article.image.alt || article.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full bg-foreground/5 flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-secondary/10" />
                    <FileText className="w-12 h-12 text-foreground/20" />
                  </div>
                )}

                {/* Status badge */}
                <div className="absolute top-4 right-4">
                  <span
                    className={`px-3 py-1 text-xs font-bold uppercase tracking-wider border ${
                      article._status === 'published'
                        ? 'bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20'
                        : 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20'
                    }`}
                  >
                    {article._status || 'Draft'}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4 flex-1 flex flex-col">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-wider">
                    <Tag className="w-3 h-3" />
                    {article.tag}
                  </div>
                  <h3 className="font-serif text-xl font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                </div>

                <p className="text-foreground/60 text-sm line-clamp-2 flex-1">
                  {article.excerpt}
                </p>

                <div className="pt-4 mt-auto border-t border-foreground/10 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-foreground/40 text-xs font-medium">
                    <Calendar className="w-4 h-4" />
                    {article.date || 'No date'}
                  </div>
                  <ChevronRight className="w-5 h-5 text-foreground/30 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      )}
    </motion.div>
  );
}
