// WorkGoDeeper.tsx
"use client";

import { motion } from "framer-motion";
import { ArrowRight, BookOpen } from "lucide-react";
import Link from "next/link";

export default function WorkGoDeeper() {
  return (
    <section className="relative overflow-hidden border-t border-stone-200/60 bg-stone-50 py-24 transition-colors duration-500 dark:border-stone-700/60 dark:bg-stone-950 md:py-32">
      {/* Ambient light */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-primary/8 via-amber-500/5 to-transparent blur-7xl" />
      </div>
      
      <div className="container-responsive relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
            <BookOpen className="h-4 w-4" />
            Go Deeper
          </div>
          
          <h2 className="mb-6 font-serif text-3xl font-light leading-[1.2] text-stone-900 dark:text-white sm:text-4xl md:text-5xl">
            If this resonates, the next step is not to do more.
          </h2>
          
          <p className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-stone-500 dark:text-stone-400">
            It is to understand what is actually shaping these outcomes.
          </p>
          
          <Link
            href="/thoughts"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-stone-900 px-8 py-4 font-medium text-white shadow-lg shadow-stone-900/10 transition-all hover:shadow-xl hover:shadow-primary/20 dark:bg-gradient-to-r dark:from-stone-800 dark:to-stone-900"
          >
            <span className="relative z-10 flex items-center gap-2">
              Go deeper into Work
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
            </span>
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-primary via-primary to-orange-700 transition-transform duration-500 group-hover:translate-x-0" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}