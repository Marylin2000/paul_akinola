// WorkHero.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowDown } from "lucide-react";

export default function WorkHero() {
  return (
    <section className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-stone-50 transition-colors duration-500 dark:bg-stone-950">
      {/* Ambient gradient orbs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-40 top-0 h-[700px] w-[700px] rounded-full bg-gradient-to-br from-primary/15 via-amber-500/8 to-transparent blur-7xl" />
        <div className="absolute -left-40 bottom-0 h-[600px] w-[600px] rounded-full bg-gradient-to-tr from-amber-500/10 via-primary/8 to-transparent blur-7xl" />
      </div>

      {/* Subtle grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.15] dark:opacity-[0.08]"
        style={{
          backgroundImage: `
            linear-gradient(var(--rule) 1px, transparent 1px),
            linear-gradient(90deg, var(--rule) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
        }}
        aria-hidden
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="text-center lg:text-left"
          >
            <div className="mb-6 inline-flex items-center gap-3">
              <div className="h-px w-8 bg-gradient-to-r from-primary/60 to-transparent" />
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary/70">
                Systems at Work
              </span>
            </div>
            
            <h1 className="mb-6 font-serif text-4xl font-medium leading-[1.1] tracking-tight text-stone-900 dark:text-stone-50 sm:text-5xl md:text-6xl lg:text-7xl">
              Something{" "}
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-primary via-amber-600 to-orange-700 bg-clip-text text-transparent dark:from-orange-400 dark:via-primary dark:to-amber-300">
                  isn't adding up.
                </span>
                <span className="absolute -inset-x-2 bottom-1 h-3 bg-gradient-to-r from-primary/15 via-amber-300/15 to-orange-400/15 blur-sm" />
              </span>
            </h1>
            
            <div className="mx-auto max-w-lg space-y-4 text-lg leading-relaxed text-stone-600 dark:text-stone-300 sm:text-xl lg:mx-0">
              <p>You're putting in the work. The team is active. Things are moving.</p>
              <p className="font-serif text-2xl italic text-stone-400 dark:text-stone-500 sm:text-3xl">
                But the results don't fully reflect it.
              </p>
            </div>

            {/* Scroll indicator - mobile only */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="mt-12 flex justify-center lg:hidden"
            >
              <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-stone-400">
                <span>Scroll</span>
                <ArrowDown className="h-3 w-3 animate-bounce" />
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative hidden lg:block"
          >
            <div className="group relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary/20 via-amber-500/10 to-transparent opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
              
              <div className="relative overflow-hidden rounded-3xl border border-stone-200/60 shadow-2xl dark:border-stone-700/60">
                <div className="aspect-[4/5] w-full">
                  <Image 
                    src="/images/27.png" 
                    alt="Analytical systems visualization" 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    priority
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/30 via-transparent to-transparent" />
              </div>

              {/* Floating stat */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="absolute -bottom-6 -left-6 rounded-2xl border border-white/30 bg-white/85 p-4 shadow-xl backdrop-blur-md dark:border-stone-700/50 dark:bg-stone-900/85"
              >
                <p className="text-sm font-medium text-stone-500 dark:text-stone-400">Systems drive</p>
                <p className="font-serif text-3xl font-semibold text-primary">95%</p>
                <p className="text-xs text-stone-400">of outcomes</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Desktop scroll hint */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-8 hidden items-center gap-4 text-xs uppercase tracking-widest text-stone-400 lg:flex"
      >
        <div className="h-12 w-px bg-gradient-to-b from-transparent via-primary/40 to-primary/60" />
        <span>Scroll</span>
      </motion.div>
    </section>
  );
}