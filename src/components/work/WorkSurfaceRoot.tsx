// WorkSurfaceRoot.tsx
"use client";

import { motion } from "framer-motion";

export default function WorkSurfaceRoot({ data }: { data?: any }) {
  const tb = data?.tabs?.[1] || {};
  const surfaceLabel = tb.surfaceLabel || "Surface vs Root Cause";
  const surfaceTitle = tb.surfaceTitle || "What you're seeing is only part of the picture.";
  const surfaceDesc = tb.surfaceDesc || "Most of what shapes performance, growth, and decision-making sits underneath — in how things are structured, how signals move, and how work actually connects.";

  return (
    <section className="relative overflow-hidden border-t border-stone-200/60 bg-white py-24 transition-colors duration-500 dark:border-stone-700/60 dark:bg-stone-900 md:py-32">
      {/* Background accent */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-60 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-gradient-to-br from-primary/5 via-amber-500/5 to-transparent blur-7xl" />
      </div>

      <div className="container-responsive relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            {surfaceLabel}
          </div>
          
          <h2 className="mb-6 font-serif text-3xl font-medium tracking-tight text-stone-900 dark:text-white sm:text-4xl md:text-5xl lg:text-6xl">
            {surfaceTitle}
          </h2>
          
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-stone-500 dark:text-stone-400 sm:text-xl">
            {surfaceDesc}
          </p>
        </motion.div>
      </div>
    </section>
  );
}