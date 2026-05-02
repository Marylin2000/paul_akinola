// InnerLifeHero.tsx
"use client";

import { getPageSection } from "@/lib/payload/page-data";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowDown, Sparkles } from "lucide-react";

export default function InnerLifeHero({ data }: { data?: any }) {
  const tb = getPageSection(data, 0);
  const prefix = tb.heroPrefix || "Systems in Life";
  const tStatic = tb.heroTitleStatic || "You can feel it, ";
  const tHigh = tb.heroTitleHighlight || "but you can't fully explain it.";
  const p1 = tb.heroP1 || "You're thinking. You're trying. You're moving forward.";
  const p2 = tb.heroP2 || "But something still doesn't sit right.";
  const quote = tb.heroQuote || "The inner world has its own architecture.";

  return (
    <section className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-stone-50 transition-colors duration-500 dark:bg-stone-950">
      {/* Ambient gradient orbs - softer, more introspective */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-40 top-0 h-[700px] w-[700px] rounded-full bg-gradient-to-br from-primary/10 via-amber-500/5 to-transparent blur-7xl" />
        <div className="absolute -left-40 bottom-0 h-[600px] w-[600px] rounded-full bg-gradient-to-tr from-amber-500/8 via-primary/5 to-transparent blur-7xl" />
        <div className="absolute left-1/3 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-stone-400/3 to-primary/3 blur-6xl" />
      </div>

      {/* Subtle grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.12] dark:opacity-[0.06]"
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
                {prefix}
              </span>
            </div>
            
            <h1 className="mb-6 font-serif text-4xl font-light leading-[1.1] tracking-tight text-stone-900 dark:text-stone-50 sm:text-5xl md:text-6xl lg:text-7xl">
              {tStatic}
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-primary via-amber-600 to-orange-700 bg-clip-text text-transparent dark:from-orange-400 dark:via-primary dark:to-amber-300">
                  {tHigh}
                </span>
                <span className="absolute -inset-x-2 bottom-1 h-3 bg-gradient-to-r from-primary/15 via-amber-300/15 to-orange-400/15 blur-sm" />
              </span>
            </h1>
            
            <div className="mx-auto max-w-lg space-y-4 text-lg leading-relaxed text-stone-600 dark:text-stone-300 sm:text-xl lg:mx-0">
              <p>{p1}</p>
              <p className="font-serif text-2xl italic text-stone-400 dark:text-stone-500 sm:text-3xl">
                {p2}
              </p>
            </div>

            {/* Mobile scroll indicator */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="mt-12 flex justify-center lg:hidden"
            >
              <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-stone-400">
                <span>Reflect</span>
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
              <div className="absolute -inset-6 rounded-full bg-gradient-to-br from-primary/15 via-amber-500/8 to-transparent opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
              
              <div className="relative overflow-hidden rounded-full border border-stone-200/60 p-2 shadow-2xl dark:border-stone-700/60">
                <div className="aspect-square w-full overflow-hidden rounded-full">
                  <Image
                    src="/images/28.png"
                    alt="Quiet reflection visualization"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    priority
                  />
                </div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/5 via-transparent to-transparent" />
              </div>

              {/* Floating insight */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="absolute -bottom-6 -right-6 rounded-2xl border border-white/30 bg-white/85 p-4 shadow-xl backdrop-blur-md dark:border-stone-700/50 dark:bg-stone-900/85"
              >
                <Sparkles className="mb-2 h-4 w-4 text-primary" />
                <p className="max-w-[180px] text-sm italic text-stone-600 dark:text-stone-300">
                  "{quote}"
                </p>
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
        <div className="h-12 w-px bg-gradient-to-b from-transparent via-primary/30 to-primary/50" />
        <span>Reflect</span>
      </motion.div>
    </section>
  );
}