// ThoughtsHero.tsx
"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { getPageSection } from "@/lib/payload/page-data";

export default function ThoughtsHero({ data }: { data?: any }) {
  const tb = getPageSection(data, 0);
  const badge = tb.heroBadge || "Thoughts & Reflections";
  const titlePrefix = tb.heroTitlePrefix || "This is where I think";
  const titleHighlight = tb.heroTitleHighlight || "out loud";
  const description = tb.heroDescription || "Most of these ideas do not start as frameworks. They start as observations. Things I notice in work, in people, and in myself. Over time, they begin to connect.";

  return (
    <section className="relative overflow-hidden bg-stone-50 pt-32 pb-20 transition-colors duration-500 dark:bg-stone-950 md:pt-48 md:pb-32">
      {/* Ambient gradient orbs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-0 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-primary/8 via-amber-500/5 to-transparent blur-7xl" />
        <div className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-gradient-to-tl from-amber-500/8 via-primary/5 to-transparent blur-7xl" />
      </div>

      {/* Subtle grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08] dark:opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(var(--rule) 1px, transparent 1px),
            linear-gradient(90deg, var(--rule) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
        aria-hidden
      />

      <div className="container-responsive relative">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-5 py-2 backdrop-blur-sm">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium uppercase tracking-wider text-primary">
                {badge}
              </span>
            </div>

            <h1 className="mb-6 font-serif text-4xl font-light leading-[1.1] tracking-tight text-stone-900 dark:text-stone-50 sm:text-5xl md:text-6xl lg:text-7xl">
              {titlePrefix}{" "}
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-primary via-amber-600 to-orange-700 bg-clip-text italic text-transparent dark:from-orange-400 dark:via-primary dark:to-amber-300">
                  {titleHighlight}
                </span>
                <span className="absolute -inset-x-2 bottom-1 h-3 bg-gradient-to-r from-primary/15 via-amber-300/15 to-orange-400/15 blur-sm" />
              </span>
              .
            </h1>

            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-stone-600 dark:text-stone-300 sm:text-xl">
              {description}
            </p>
          </motion.div>
        </div>

        {/* Decorative accent */}
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mx-auto mt-16 h-20 w-px bg-gradient-to-b from-primary/40 to-transparent"
        />
      </div>
    </section>
  );
}
