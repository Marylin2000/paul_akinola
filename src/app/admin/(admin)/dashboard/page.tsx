'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, ImageIcon, Users, ChevronRight, TrendingUp } from 'lucide-react';
import { api } from '@/lib/api';

const springConfig = { type: 'spring', stiffness: 300, damping: 25 } as const;

interface Stats {
  articlesCount: number;
  mediaCount: number;
  usersCount: number;
  recentArticles: any[];
}

export default function DashboardPage() {
  const [stats, setStats] = useState<Stats>({
    articlesCount: 0,
    mediaCount: 0,
    usersCount: 0,
    recentArticles: [],
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchStats() {
      try {
        const [articles, media, users] = await Promise.all([
          api.articles.list(),
          api.media.list(),
          api.users.list(),
        ]);

        setStats({
          articlesCount: articles.totalDocs || 0,
          mediaCount: media.totalDocs || 0,
          usersCount: users.totalDocs || 0,
          recentArticles: articles.docs?.slice(0, 3) || [],
        });
      } catch (error) {
        console.error('Failed to fetch dashboard stats:', error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchStats();
  }, []);

  const statCards = [
    { label: 'Total Articles', value: stats.articlesCount, trend: 'Published thoughts', icon: FileText, color: 'text-primary' },
    { label: 'Media Items', value: stats.mediaCount, trend: 'Assets in library', icon: ImageIcon, color: 'text-secondary' },
    { label: 'Admin Users', value: stats.usersCount, trend: 'System access', icon: Users, color: 'text-accent' },
  ];

  return (
    <motion.div
      suppressHydrationWarning
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ...springConfig }}
      className="space-y-8"
    >
      {/* Header */}
      <div>
        <h1 className="font-serif text-4xl font-bold text-foreground">
          Welcome back
        </h1>
        <p className="text-foreground/60 mt-2">Here's what's happening with your portfolio.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {statCards.map((stat, idx) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1, ...springConfig }}
            whileHover={{ y: -4 }}
            className="bg-paper border border-rule p-6 group cursor-pointer"
          >
            <div className="flex items-center justify-between mb-4">
              <p className="text-xs font-bold text-foreground/40 uppercase tracking-wider">
                {stat.label}
              </p>
              <stat.icon className={`w-5 h-5 ${stat.color}`} />
            </div>
            <motion.h3
              className="font-serif text-4xl font-bold text-foreground group-hover:text-primary transition-colors"
              transition={springConfig}
            >
              {isLoading ? '-' : stat.value}
            </motion.h3>
            <p className="text-xs text-foreground/50 mt-2 font-medium">{stat.trend}</p>
          </motion.div>
        ))}
      </div>

      {/* Recent Activity & Status */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Articles */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, ...springConfig }}
          className="bg-paper border border-rule p-6"
        >
          <h4 className="font-serif font-semibold mb-6 text-lg flex items-center gap-2">
            <span className="w-1.5 h-6 bg-primary" />
            Recent Articles
          </h4>
          <div className="grid gap-3">
            {stats.recentArticles.length > 0 ? (
              stats.recentArticles.map((article: any) => (
                <motion.a
                  key={article.id}
                  href={`/admin/articles/${article.id}`}
                  whileHover={{ x: 4 }}
                  transition={springConfig}
                  className="flex items-center gap-4 p-3 border border-transparent hover:border-foreground/10 hover:bg-foreground/5 transition-all"
                >
                  <div className="w-12 h-12 border border-foreground/10 flex-shrink-0 overflow-hidden">
                    {article.image?.url ? (
                      <img
                        src={article.image.url}
                        className="w-full h-full object-cover"
                        alt={article.image.alt || article.title}
                      />
                    ) : (
                      <div className="w-full h-full bg-foreground/5 flex items-center justify-center">
                        <FileText className="w-5 h-5 text-foreground/20" />
                      </div>
                    )}
                  </div>
                  <div className="flex-1">
                    <p className="font-serif font-medium text-foreground group-hover:text-primary transition-colors text-sm">
                      {article.title}
                    </p>
                    <p className="text-[10px] text-foreground/40 uppercase tracking-tighter">
                      {article._status} • {new Date(article.updatedAt).toLocaleDateString()}
                    </p>
                  </div>
                  <ChevronRight className="w-4 h-4 text-foreground/30" />
                </motion.a>
              ))
            ) : (
              <p className="text-sm text-foreground/50 italic">No articles found.</p>
            )}
          </div>
        </motion.div>

        {/* System Status */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, ...springConfig }}
          className="bg-paper border border-rule p-6"
        >
          <h4 className="font-serif font-semibold mb-6 text-lg flex items-center gap-2">
            <span className="w-1.5 h-6 bg-green-500" />
            System Status
          </h4>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 border border-green-500/20 bg-green-500/5">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 animate-pulse" />
                <span className="text-green-600 dark:text-green-400 text-sm font-medium">
                  Payload API Online
                </span>
              </div>
              <span className="text-xs text-foreground/40 font-mono">v3.0.0</span>
            </div>
            <div className="flex items-center justify-between p-4 border border-blue-500/20 bg-blue-500/5">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-500" />
                <span className="text-blue-600 dark:text-blue-400 text-sm font-medium">
                  Database Connected
                </span>
              </div>
              <span className="text-xs text-foreground/40 font-mono">MongoDB</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, ...springConfig }}
        className="bg-paper border border-rule p-6"
      >
        <h4 className="font-serif font-semibold mb-4 text-lg flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-primary" />
          Quick Actions
        </h4>
        <div className="flex flex-wrap gap-3">
          <motion.a
            href="/admin/articles/new"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={springConfig}
            className="px-6 py-3 bg-primary text-white font-semibold border border-primary/20 hover:bg-primary/90 transition-colors"
          >
            New Article
          </motion.a>
          <motion.a
            href="/admin/media"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={springConfig}
            className="px-6 py-3 border border-foreground/20 hover:bg-foreground/5 transition-colors font-semibold"
          >
            Upload Media
          </motion.a>
          <motion.a
            href="/admin/globals/hero"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={springConfig}
            className="px-6 py-3 border border-foreground/20 hover:bg-foreground/5 transition-colors font-semibold"
          >
            Edit Hero
          </motion.a>
        </div>
      </motion.div>
    </motion.div>
  );
}
