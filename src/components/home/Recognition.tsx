// Recognition.tsx
"use client";

import { motion, Variants } from "framer-motion";

export interface RecognitionData {
  titlePrefix: string;
  titleSuffix: string;
  lines?: Array<{ id?: string | null; text: string; insight?: string | null }> | null;
  footerTitle: string;
  footerBody: string;
}

interface RecognitionProps {
  data?: RecognitionData | null;
}

const defaultData: RecognitionData = {
  titlePrefix: "Most problems",
  titleSuffix: "where they show up.",
  lines: [
    {
      text: "Performance drops, but the issue is not always effort.",
      insight: "Look at the system, not just the person."
    },
    {
      text: "Growth slows, but the issue is not always ambition.",
      insight: "Examine the structure beneath the surface."
    },
    {
      text: "Decisions feel unclear, but the issue is not always intelligence.",
      insight: "Clarity often comes from seeing the whole picture."
    },
  ],
  footerTitle: "Beneath the surface",
  footerBody: "Something is happening beneath the surface, and without clarity, it's hard to fix what you cannot fully see.",
};

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Recognition({ data }: RecognitionProps) {
  const d = data ?? defaultData;
  const lines = d.lines && d.lines.length > 0 ? d.lines : defaultData.lines!;

  return (
    <section
      id="recognition"
      className="relative overflow-hidden bg-gradient-to-b from-stone-50 via-stone-100/80 to-stone-50 py-24 dark:from-stone-950 dark:via-stone-900/80 dark:to-stone-950 md:py-32"
    >
      {/* Ambient light effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-primary/8 blur-8xl dark:bg-primary/12" />
        <div className="absolute -right-32 bottom-1/4 h-96 w-96 rounded-full bg-amber-500/8 blur-8xl dark:bg-amber-700/12" />
      </div>

      <div className="container-responsive relative">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-16 max-w-3xl text-center md:mb-20"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            {d.footerTitle}
          </div>
          
          <h2 className="font-serif text-3xl font-medium tracking-tight text-stone-900 sm:text-4xl md:text-5xl lg:text-6xl dark:text-white">
            {d.titlePrefix} <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-primary via-amber-600 to-orange-700 bg-clip-text text-transparent dark:from-orange-400 dark:via-primary dark:to-amber-300">
                don't start
              </span>
              <span className="absolute -inset-x-2 bottom-1 h-3 bg-gradient-to-r from-primary/15 via-amber-300/15 to-orange-400/15 blur-sm" />
            </span>
            <br />
            {d.titleSuffix}
          </h2>
        </motion.header>

        <motion.div
          className="mx-auto max-w-3xl space-y-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {lines.map((line, index) => (
            <motion.div
              key={line.id || index}
              variants={itemVariants}
              className="group relative"
            >
              <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-primary/5 via-transparent to-transparent opacity-0 blur transition-opacity duration-500 group-hover:opacity-100" />
              
              <div className="relative flex items-start gap-6 rounded-2xl border border-stone-200/60 bg-white/70 p-6 backdrop-blur-sm transition-all duration-300 group-hover:border-primary/20 group-hover:shadow-lg dark:border-stone-700/60 dark:bg-stone-900/70 sm:p-8">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary/15 to-amber-500/10 text-primary dark:from-primary/25 dark:to-amber-700/15">
                  <span className="font-mono text-sm font-medium">{index + 1}</span>
                </div>
                
                <div className="flex-1">
                  <p className="mb-2 text-lg font-medium text-stone-800 dark:text-stone-100 sm:text-xl">
                    {line.text}
                  </p>
                  {line.insight && (
                    <p className="text-sm text-stone-500 dark:text-stone-400">
                      {line.insight}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mx-auto mt-16 max-w-2xl text-center"
        >
          <div className="rounded-3xl border border-primary/15 bg-gradient-to-br from-primary/5 via-white/50 to-amber-500/5 p-8 backdrop-blur-sm dark:from-primary/10 dark:via-stone-900/50 dark:to-amber-700/10 sm:p-10">
            <p className="font-serif text-xl leading-relaxed text-stone-700 dark:text-stone-200 sm:text-2xl">
              {d.footerBody}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}