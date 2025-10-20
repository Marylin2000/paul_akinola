"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, Clock, ArrowLeft, ArrowRight, User, Tag } from "lucide-react";
import Link from "next/link";
import { BlogPost as BlogPostType } from "@/lib/blog";

interface BlogPostProps {
  post: BlogPostType;
  relatedPosts: BlogPostType[];
}

export default function BlogPost({ post, relatedPosts }: BlogPostProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  // Convert markdown to HTML (simplified - in production, use a proper markdown parser)
  const renderContent = (content: string) => {
    return content.split('\n').map((paragraph, index) => {
      if (paragraph.startsWith('# ')) {
        return <h1 key={index} className="text-3xl font-bold mb-6 mt-8">{paragraph.slice(2)}</h1>;
      }
      if (paragraph.startsWith('## ')) {
        return <h2 key={index} className="text-2xl font-bold mb-4 mt-6">{paragraph.slice(3)}</h2>;
      }
      if (paragraph.startsWith('### ')) {
        return <h3 key={index} className="text-xl font-bold mb-3 mt-4">{paragraph.slice(4)}</h3>;
      }
      if (paragraph.startsWith('- ')) {
        return <li key={index} className="ml-6 mb-2">{paragraph.slice(2)}</li>;
      }
      if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
        return <p key={index} className="font-bold mb-4">{paragraph.slice(2, -2)}</p>;
      }
      if (paragraph.trim() === '') {
        return <br key={index} />;
      }
      return <p key={index} className="mb-4 leading-relaxed">{paragraph}</p>;
    });
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 pt-12"
        >
          <Link href="/blog">
            <button className="flex items-center text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Blog
            </button>
          </Link>
        </motion.div>

        {/* Article Header */}
        <motion.header
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className={`h-64 bg-gradient-to-br ${post.gradient} rounded-2xl mb-8 relative overflow-hidden`}>
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <span className="bg-white/90 text-gray-900 px-3 py-1 rounded-full text-sm font-medium">
                {post.category[0].charAt(0).toUpperCase() + post.category[0].slice(1)}
              </span>
            </div>
            {post.featured && (
              <div className="absolute top-6 right-6">
                <span className="bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-bold">
                  Featured Article
                </span>
              </div>
            )}
          </div>

          <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
            {post.title}
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            {post.description}
          </p>

          <div className="flex flex-wrap items-center gap-6 text-gray-500 dark:text-gray-400 mb-8">
            <div className="flex items-center">
              <User className="w-5 h-5 mr-2" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center">
              <Calendar className="w-5 h-5 mr-2" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-5 h-5 mr-2" />
              <span>{post.readTime}</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {post.tags.map((tag) => (
              <span key={tag} className="flex items-center bg-gray-100 dark:bg-slate-700 px-3 py-1 rounded-full text-sm">
                <Tag className="w-3 h-3 mr-1" />
                {tag}
              </span>
            ))}
          </div>
        </motion.header>

        {/* Article Content */}
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="prose prose-lg dark:prose-invert max-w-none mb-16"
        >
          {renderContent(post.content)}
        </motion.article>

        {/* Author Bio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-r from-slate-50 to-blue-50 dark:from-slate-800 dark:to-slate-700 p-8 rounded-2xl mb-16"
        >
          <div className="flex items-start gap-6">
            <img
              src="/images/3.png"
              alt="Paul Akinola"
              className="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <h3 className="text-xl font-bold mb-2">About {post.author}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Growth Systems + GTM Architect with 7+ years of experience building scalable 
                revenue operations and data-driven growth engines. Expert in PLG motion, 
                AI-powered GTM systems, and customer expansion strategies.
              </p>
              <div className="flex gap-4">
                <Link href="/about" className="text-primary hover:text-primary/80 font-medium">
                  View Profile
                </Link>
                <Link href="/contact" className="text-primary hover:text-primary/80 font-medium">
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Link key={relatedPost.id} href={`/blog/${relatedPost.slug}`}>
                  <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all group">
                    <div className={`h-32 bg-gradient-to-br ${relatedPost.gradient}`}>
                      <div className="absolute inset-0 bg-black/20"></div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold mb-2 group-hover:text-primary transition-colors">
                        {relatedPost.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                        {relatedPost.description.slice(0, 100)}...
                      </p>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span>{relatedPost.date}</span>
                        <span>{relatedPost.readTime}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </motion.section>
        )}

        {/* Newsletter CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-gradient-to-r from-primary to-secondary p-8 rounded-2xl text-white text-center mb-12"
        >
          <h3 className="text-2xl font-bold mb-4">Enjoyed this article?</h3>
          <p className="text-lg opacity-90 mb-6">
            Subscribe to get the latest insights on growth systems and GTM strategies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-3 rounded-lg text-gray-900 flex-1"
            />
            <button className="bg-white text-primary hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors">
              Subscribe
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}