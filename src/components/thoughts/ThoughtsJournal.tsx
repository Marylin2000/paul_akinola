"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { thoughts } from "@/data/thoughts";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function JournalContent() {
  const searchParams = useSearchParams();
  const categoryFilter = searchParams.get("category");

  const filteredThoughts = categoryFilter 
    ? thoughts.filter(t => t.tag.toLowerCase() === categoryFilter.toLowerCase())
    : thoughts;

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, x: -10 },
    show: { opacity: 1, x: 0 },
  };

  return (
    <section className="py-24 px-6 bg-stone-50 dark:bg-stone-900/30 transition-colors">
      <div className="max-w-3xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-sm font-medium text-stone-400 dark:text-stone-600 uppercase tracking-widest mb-4">
              Notes and Reflections
            </h2>
            <p className="text-stone-600 dark:text-stone-400">
              {categoryFilter ? `Showing reflections tagged with "${categoryFilter}"` : "Ongoing reading, observations, and inquiries."}
            </p>
          </div>
          
          {categoryFilter && (
            <Link 
              href="/thoughts" 
              className="text-xs font-medium text-stone-900 dark:text-stone-100 hover:underline decoration-stone-300 underline-offset-4"
            >
              Clear filter
            </Link>
          )}
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-12"
        >
          {filteredThoughts.map((thought) => (
            <motion.div 
              key={thought.slug} 
              variants={item}
              className="group border-b border-stone-100 dark:border-stone-800 pb-12 last:border-0"
            >
              <Link href={`/thoughts/${thought.slug}`} className="block">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[10px] font-bold text-stone-400 dark:text-stone-500 uppercase tracking-widest px-2 py-0.5 border border-stone-200 dark:border-stone-800 rounded">
                    {thought.tag}
                  </span>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-serif text-stone-900 dark:text-stone-100 mb-4 group-hover:text-stone-600 dark:group-hover:text-stone-300 transition-colors leading-tight">
                  {thought.title}
                </h3>
                
                <p className="text-stone-500 dark:text-stone-400 text-base md:text-lg leading-relaxed mb-6 line-clamp-2">
                  {thought.excerpt}
                </p>
                
                <span className="inline-flex items-center text-xs font-medium text-stone-900 dark:text-stone-100 group-hover:translate-x-1 transition-transform">
                  Read reflection <ArrowRight className="ml-2 w-3 h-3" />
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
        
        {filteredThoughts.length === 0 && (
          <div className="py-20 text-center border border-dashed border-stone-200 dark:border-stone-800 rounded-lg">
            <p className="text-stone-400">No reflections found in this category.</p>
            <Link href="/thoughts" className="text-stone-900 dark:text-stone-100 text-sm mt-4 inline-block hover:underline">Show all</Link>
          </div>
        )}
      </div>
    </section>
  );
}

export default function ThoughtsJournal() {
  return (
    <Suspense fallback={<div className="py-24 text-center">Loading journal...</div>}>
      <JournalContent />
    </Suspense>
  );
}
