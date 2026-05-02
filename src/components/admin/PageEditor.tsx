'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, FileText, Plus } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { GlobalEditor } from './GlobalEditor';
import { globalSchemas } from './schemas';

const springConfig = { type: 'spring', stiffness: 300, damping: 25 };

const pageMap: Record<string, { title: string; description: string; globals: string[]; showArticlesCTA?: boolean }> = {
  home: {
    title: 'Home Page',
    description: 'Manage the landing page contents',
    globals: ['hero', 'offerings', 'recognition', 'personal-anchor'],
  },
  work: {
    title: 'Work Page',
    description: 'Manage the systems at work page',
    globals: ['work'],
  },
  'inner-life': {
    title: 'Inner Life Page',
    description: 'Manage the inner life page',
    globals: ['inner-life'],
  },
  thoughts: {
    title: 'Thoughts Page',
    description: 'Manage the thoughts page contents and articles',
    globals: ['thoughts-page'], 
    showArticlesCTA: true,
  },
  about: {
    title: 'About Page',
    description: 'Manage the about page',
    globals: ['about'],
  },
  together: {
    title: 'Together Page',
    description: 'Manage the working together page',
    globals: ['together'],
  },
  build: {
    title: 'Build Page',
    description: 'Manage the building systems page',
    globals: ['build'],
  },
};

export function PageEditor({ pageSlug }: { pageSlug: string }) {
  const [activeTab, setActiveTab] = useState(0);
  const pageConfig = pageMap[pageSlug];

  if (!pageConfig) return null;

  const hasGlobals = pageConfig.globals.length > 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ...springConfig }}
      className="space-y-8 pb-20"
    >
      {/* Header */}
      <div className="flex items-center justify-between gap-4 border-b border-foreground/10 pb-8">
        <div className="flex items-center gap-4">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={springConfig}>
            <Link
              href="/admin/dashboard"
              className="w-10 h-10 flex items-center justify-center border border-foreground/10 hover:bg-foreground/5 transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-foreground/60" />
            </Link>
          </motion.div>
          <div>
            <h1 className="font-serif text-3xl font-bold text-foreground">{pageConfig.title}</h1>
            <p className="text-foreground/60 text-sm mt-1">{pageConfig.description}</p>
          </div>
        </div>
      </div>

      {pageConfig.showArticlesCTA && (
        <div className="bg-paper border border-rule p-8 space-y-4">
          <h2 className="font-serif text-2xl font-bold flex items-center gap-2">
            <FileText className="w-6 h-6 text-primary" />
            Articles Collection
          </h2>
          <p className="text-foreground/60 max-w-2xl leading-relaxed">
            The Thoughts page dynamically renders your articles. Manage your written content in the dedicated Articles collection to see them appear here.
          </p>
          <div className="flex gap-4 pt-2">
            <Link
              href="/admin/articles"
              className="px-6 py-3 border border-foreground/20 hover:bg-foreground/5 transition-colors font-semibold"
            >
              View All Articles
            </Link>
            <Link
              href="/admin/articles/new"
              className="px-6 py-3 bg-primary hover:bg-primary/90 text-white font-semibold flex items-center gap-2 transition-all"
            >
              <Plus className="w-4 h-4" />
              Write New Article
            </Link>
          </div>
        </div>
      )}

      {hasGlobals && (
        <div className="space-y-8">
          {/* Section Tabs */}
          {pageConfig.globals.length > 1 && (
            <div className="flex flex-wrap p-1 bg-foreground/5 border border-foreground/10 w-fit">
              {pageConfig.globals.map((globalSlug, idx) => {
                const schema = globalSchemas[globalSlug];
                return (
                  <motion.button
                    key={globalSlug}
                    type="button"
                    onClick={() => setActiveTab(idx)}
                    whileTap={{ scale: 0.98 }}
                    transition={springConfig}
                    className={cn(
                      'px-6 py-2.5 text-sm font-bold transition-all',
                      activeTab === idx
                        ? 'bg-primary text-white'
                        : 'text-foreground/40 hover:text-foreground'
                    )}
                  >
                    {schema?.label || globalSlug}
                  </motion.button>
                );
              })}
            </div>
          )}

          {/* Active Global Editor */}
          <div className="max-w-4xl">
            <AnimatePresence mode="wait">
              {pageConfig.globals.map((globalSlug, idx) => {
                if (idx !== activeTab) return null;
                const schema = globalSchemas[globalSlug];
                if (!schema) return null;

                return (
                  <motion.div
                    key={globalSlug}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <GlobalEditor
                      slug={globalSlug}
                      label={schema.label}
                      config={schema}
                      hideHeader={true}
                    />
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      )}
    </motion.div>
  );
}
