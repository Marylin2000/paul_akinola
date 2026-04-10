"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { thoughts } from "@/data/thoughts";

export default function ThoughtsFeatured() {
  // Use the four "Featured" thoughts as per spec
  const featuredSlugs = [
    "pipeline-volume-hides-weak-signal",
    "inconsistency-rarely-real-problem",
    "start-seeing-systems",
    "clarity-not-end-goal"
  ];

  const featuredThoughts = featuredSlugs
    .map(slug => thoughts.find(t => t.slug === slug))
    .filter(Boolean);

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
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-24 px-6 bg-white dark:bg-stone-950 transition-colors">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-sm font-medium text-stone-400 dark:text-stone-600 uppercase tracking-widest mb-12">
          A few thoughts to start with
        </h2>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {featuredThoughts.map((thought) => (
            <motion.div key={thought?.slug} variants={item}>
              <Link 
                href={`/thoughts/${thought?.slug}`}
                className="group block h-full p-8 bg-stone-50 dark:bg-stone-900 border border-stone-100 dark:border-stone-800 hover:border-stone-300 dark:hover:border-stone-700 transition-all duration-300 relative overflow-hidden"
              >
                <div className="relative z-10 transition-transform duration-500 group-hover:-translate-y-1">
                  <span className="text-[10px] font-bold text-stone-400 dark:text-stone-500 uppercase tracking-widest mb-4 block">
                    {thought?.tag}
                  </span>
                  <h3 className="text-xl font-serif text-stone-900 dark:text-stone-100 mb-4 leading-snug group-hover:text-stone-600 dark:group-hover:text-stone-300 transition-colors">
                    {thought?.title}
                  </h3>
                  <p className="text-stone-500 dark:text-stone-400 text-sm leading-relaxed mb-8 line-clamp-3">
                    {thought?.excerpt}
                  </p>
                  <span className="flex items-center text-xs font-medium text-stone-900 dark:text-stone-100 opacity-0 group-hover:opacity-100 transition-opacity">
                    Read thought <ArrowUpRight className="ml-1 w-3 h-3" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
