"use client";

import { use } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ChevronRight, Clock, Tag } from "lucide-react";
import { thoughts } from "@/data/thoughts";
import Navigation from "@/components/ui/Navigation";
import Footer from "@/components/ui/Footer";
import { useTheme } from "@/context/ThemeContext";

export default function ThoughtPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const { theme } = useTheme();
  
  const thought = thoughts.find((t) => t.slug === slug);

  if (!thought) {
    return (
      <main className="min-h-screen bg-stone-50 dark:bg-stone-950 flex items-center justify-center p-6">
        <div className="text-center">
          <h1 className="text-4xl font-serif text-stone-900 dark:text-stone-100 mb-4">Thought not found</h1>
          <p className="text-stone-600 dark:text-stone-400 mb-8">This reflection appears to have drifted away.</p>
          <Link 
            href="/thoughts"
            className="inline-flex items-center text-stone-900 dark:text-stone-100 font-medium hover:gap-2 transition-all"
          >
            <ArrowLeft className="mr-2 w-4 h-4" /> Return to Thoughts
          </Link>
        </div>
      </main>
    );
  }

  // Find related thoughts (same tag, excluding current)
  const related = thoughts
    .filter((t) => t.tag === thought.tag && t.slug !== thought.slug)
    .slice(0, 2);

  return (
    <main className="min-h-screen bg-white dark:bg-stone-950 transition-colors duration-500">
      <Navigation />
      
      <article className="pt-32 pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          {/* Breadcrumbs */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-sm text-stone-500 dark:text-stone-400 mb-12"
          >
            <Link href="/thoughts" className="hover:text-stone-900 dark:hover:text-stone-100 transition-colors">Thoughts</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-stone-400 dark:text-stone-600 truncate">{thought.title}</span>
          </motion.div>

          {/* Header */}
          <header className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="px-3 py-1 rounded-full bg-stone-100 dark:bg-stone-900 text-stone-600 dark:text-stone-400 text-xs font-medium tracking-wide uppercase">
                  {thought.tag}
                </span>
                {thought.date && (
                  <span className="flex items-center gap-1.5 text-xs text-stone-400 dark:text-stone-500">
                    <Clock className="w-3 h-3" />
                    {thought.date}
                  </span>
                )}
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-stone-900 dark:text-stone-100 leading-tight mb-8">
                {thought.title}
              </h1>

              {thought.question && (
                <p className="text-xl md:text-2xl text-stone-500 dark:text-stone-400 font-serif italic leading-relaxed border-l-2 border-stone-200 dark:border-stone-800 pl-6 my-10">
                  {thought.question}
                </p>
              )}
            </motion.div>
          </header>

          {/* Body */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="prose prose-stone dark:prose-invert prose-lg max-w-none"
          >
            <div className="space-y-8 text-stone-800 dark:text-stone-200 leading-relaxed font-sans subpixel-antialiased">
              {thought.content.split('\n\n').map((paragraph, idx) => {
                if (paragraph.startsWith('###')) {
                  return (
                    <h3 key={idx} className="text-2xl font-serif text-stone-900 dark:text-stone-100 mt-12 mb-6">
                      {paragraph.replace('### ', '')}
                    </h3>
                  );
                }
                if (paragraph.match(/^\d+\./)) {
                  // Handle numbered lists if any
                  return (
                    <div key={idx} className="pl-4 space-y-4 my-6">
                      {paragraph.split('\n').map((line, lIdx) => (
                        <p key={lIdx} className="relative pl-6">
                          <span className="absolute left-0 text-stone-400 dark:text-stone-600 font-serif">{line.split('.')[0]}.</span>
                          {line.split('.').slice(1).join('.').trim()}
                        </p>
                      ))}
                    </div>
                  );
                }
                return (
                  <p key={idx} className="text-lg md:text-xl">
                    {paragraph}
                  </p>
                );
              })}
            </div>
          </motion.div>

          {/* Footer Navigation */}
          <footer className="mt-24 pt-16 border-t border-stone-100 dark:border-stone-900">
            <h2 className="text-sm font-medium text-stone-400 dark:text-stone-600 uppercase tracking-widest mb-12">
              Keep Reading
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {related.map((rel) => (
                <Link 
                  key={rel.slug}
                  href={`/thoughts/${rel.slug}`}
                  className="group block"
                >
                  <span className="text-xs text-stone-400 dark:text-stone-500 mb-2 block uppercase tracking-wide">Next in {rel.tag}</span>
                  <h3 className="text-xl font-serif text-stone-900 dark:text-stone-100 group-hover:text-stone-600 dark:group-hover:text-stone-300 transition-colors leading-snug">
                    {rel.title}
                  </h3>
                </Link>
              ))}
            </div>

            <div className="mt-20 flex justify-center">
              <Link 
                href="/thoughts"
                className="inline-flex items-center px-6 py-3 rounded-full border border-stone-200 dark:border-stone-800 text-stone-600 dark:text-stone-400 hover:bg-stone-50 dark:hover:bg-stone-900 transition-colors text-sm font-medium"
              >
                <ArrowLeft className="mr-2 w-4 h-4" /> All Thoughts
              </Link>
            </div>
          </footer>
        </div>
      </article>

      {/* <Footer transitionLine="Clarity on the systems that shape how we live, lead, and grow." /> */}
    </main>
  );
}
