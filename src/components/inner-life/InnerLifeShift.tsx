// InnerLifeShift.tsx
"use client";

import { motion } from "framer-motion";
import { Compass } from "lucide-react";

export default function InnerLifeShift() {
  return (
    <section className="relative overflow-hidden border-y border-stone-200/60 bg-stone-100/50 py-24 transition-colors duration-500 dark:border-stone-700/60 dark:bg-stone-900/50 md:py-40">
      {/* Background texture */}
      <div className="pointer-events-none absolute inset-0 bg-texture opacity-30 dark:opacity-20" />
      
      {/* Ambient orbs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-40 top-0 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-primary/6 via-amber-500/4 to-transparent blur-7xl" />
        <div className="absolute -left-40 bottom-0 h-[600px] w-[600px] rounded-full bg-gradient-to-tr from-amber-500/6 via-primary/4 to-transparent blur-7xl" />
      </div>

      {/* Horizontal accent line */}
      <div className="absolute left-1/2 top-0 h-px w-24 -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      
      <div className="container-responsive relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-4xl text-center"
        >
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-5 py-2 backdrop-blur-sm">
            <Compass className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">The Shift</span>
          </div>
          
          <h2 className="mb-8 font-serif text-3xl font-light leading-[1.15] text-stone-900 dark:text-white sm:text-4xl md:text-5xl lg:text-6xl">
            What you're experiencing{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-primary via-amber-600 to-orange-700 bg-clip-text text-transparent dark:from-orange-400 dark:via-primary dark:to-amber-300">
                is not random.
              </span>
              <span className="absolute -inset-x-2 bottom-1 h-3 bg-gradient-to-r from-primary/15 via-amber-300/15 to-orange-400/15 blur-sm" />
            </span>
          </h2>
          
          <div className="mx-auto max-w-xl">
            <p className="font-serif text-lg italic leading-relaxed text-stone-600 dark:text-stone-300 sm:text-xl">
              There are systems within you shaping how you think, respond, and move. 
              When you begin to see them, things start to make more sense.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}