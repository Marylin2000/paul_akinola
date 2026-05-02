// WorkHero.tsx
"use client";

import { getPageSection } from "@/lib/payload/page-data";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowDown, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function WorkHero({ data }: { data?: any }) {
  const tb = getPageSection(data, 0);
  const prefix = tb.heroPrefix || "Systems at Work";
  const defaultSubCopy = "I work with B2B organisations to find what is actually shaping their pipeline: the architecture, the signals, the gaps between teams. Then build the infrastructure that makes growth visible, trustworthy and repeatable.";
  const tStatic = tb.heroTitleStatic || "Do you know what's driving your pipeline, what's slowing it down, and what needs to change before it costs you?";
  const tHigh = tb.heroTitleHighlight || "";
  const p1 = tb.heroP1 || defaultSubCopy;
  const p2 = tb.heroP2 || "";
  const val = tb.heroStatValue || "95%";
  const lblTop = tb.heroStatLabelTop || "Systems drive";
  const lblBot = tb.heroStatLabelBot || "of outcomes";

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
                {prefix}
              </span>
            </div>
            
            <h1 className="mb-6 font-serif text-4xl font-medium leading-[1.1] tracking-tight text-stone-900 dark:text-stone-50 sm:text-5xl md:text-6xl lg:text-7xl">
              {tStatic}
              {tHigh && (
                <span className="relative inline-block">
                  <span className="relative z-10 bg-gradient-to-r from-primary via-amber-600 to-orange-700 bg-clip-text text-transparent dark:from-orange-400 dark:via-primary dark:to-amber-300">
                    {tHigh}
                  </span>
                  <span className="absolute -inset-x-2 bottom-1 h-3 bg-gradient-to-r from-primary/15 via-amber-300/15 to-orange-400/15 blur-sm" />
                </span>
              )}
            </h1>
            
            <div className="mx-auto max-w-lg space-y-4 text-lg leading-relaxed text-stone-600 dark:text-stone-300 sm:text-xl lg:mx-0">
              <p>{p1}</p>
              {p2 && (
                <p className="font-serif text-2xl italic text-stone-400 dark:text-stone-500 sm:text-3xl">
                  {p2}
                </p>
              )}
            </div>

            <div className="mt-10 flex justify-center lg:justify-start">
              <Link
                href="/together#contact"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-stone-900 px-8 py-4 font-medium text-white shadow-lg shadow-stone-900/10 transition-all hover:shadow-xl hover:shadow-primary/20 dark:bg-gradient-to-r dark:from-stone-800 dark:to-stone-900"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Start a Conversation
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                </span>
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-primary via-primary to-orange-700 transition-transform duration-500 group-hover:translate-x-0" />
              </Link>
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
                <p className="text-sm font-medium text-stone-500 dark:text-stone-400">{lblTop}</p>
                <p className="font-serif text-3xl font-semibold text-primary">{val}</p>
                <p className="text-xs text-stone-400">{lblBot}</p>
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
