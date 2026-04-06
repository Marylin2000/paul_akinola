"use client";

import { motion } from "framer-motion";

const lines = [
  "Performance drops, but the issue is not always effort.",
  "Growth slows, but the issue is not always ambition.",
  "Decisions feel unclear, but the issue is not always intelligence.",
] as const;

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.06 },
  },
};

const rowIn = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Recognition() {
  return (
    <section
      id="recognition"
      className="relative overflow-hidden py-20 md:py-28 bg-gradient-to-b from-stone-100 via-stone-100 to-stone-200/60 dark:from-stone-950 dark:via-stone-950 dark:to-stone-900"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-texture opacity-[0.45] dark:opacity-[0.25]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-30 dark:opacity-20"
        aria-hidden
      >
        <div className="absolute -left-20 top-1/3 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -right-16 bottom-1/4 h-64 w-64 rounded-full bg-stone-400/15 blur-3xl dark:bg-stone-600/20" />
      </div>

      <div className="relative mx-auto w-full max-w-[min(100%,1200px)] px-3 sm:px-4 md:px-6">
        <motion.header
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mb-14 max-w-3xl text-center md:mb-16"
        >
          <p className="mb-4 font-sans text-xs tracking-[0.22em] text-stone-500 uppercase dark:text-stone-400">
            Recognition
          </p>
          <h2 className="font-serif text-3xl font-semibold tracking-tight text-stone-900 sm:text-4xl md:text-[2.75rem] md:leading-[1.12] dark:text-white">
            <span className="block">Most problems do not start</span>
            <span className="mt-3 block font-light text-stone-700 dark:text-stone-200">
              where they show up.
              <span
                className="mx-auto mt-5 block h-px w-16 bg-gradient-to-r from-transparent via-primary/50 to-transparent"
                aria-hidden
              />
            </span>
          </h2>
        </motion.header>

        <motion.ol
          className="mx-auto max-w-2xl list-none space-y-0 p-0"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          aria-label="Recognition patterns"
        >
          {lines.map((line, index) => (
            <motion.li
              key={line}
              variants={rowIn}
              className={`flex gap-4 sm:gap-6 ${index < lines.length - 1 ? "pb-10 sm:pb-12" : ""}`}
            >
              <div className="flex shrink-0 flex-col items-center">
                <div
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-stone-300/90 bg-white/90 shadow-sm dark:border-stone-600 dark:bg-stone-900/90"
                  aria-hidden
                >
                  <span className="h-2 w-2 rounded-full bg-primary/90 dark:bg-primary" />
                </div>
                {index < lines.length - 1 ? (
                  <div
                    className="mt-2 h-[2.75rem] w-px shrink-0 bg-gradient-to-b from-stone-300/90 via-stone-300/50 to-transparent dark:from-stone-600 dark:via-stone-600/40"
                    aria-hidden
                  />
                ) : null}
              </div>
              <div className="min-w-0 flex-1 pt-0.5">
                <p className="mb-2 font-mono text-[0.65rem] tracking-widest text-stone-400 uppercase dark:text-stone-500">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <p className="rounded-xl border border-stone-200/80 bg-white/75 px-4 py-4 text-base leading-snug font-light text-stone-800 shadow-sm backdrop-blur-sm sm:px-5 sm:py-5 sm:text-lg sm:leading-relaxed dark:border-stone-700/80 dark:bg-stone-900/55 dark:text-stone-100">
                  {line}
                </p>
              </div>
            </motion.li>
          ))}
        </motion.ol>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.55, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-14 max-w-2xl md:mt-16"
        >
          <div className="rounded-2xl border border-primary/20 bg-gradient-to-br from-white/90 via-white/70 to-stone-50/90 p-7 text-center organic-shadow backdrop-blur-md dark:border-primary/25 dark:from-stone-900/85 dark:via-stone-900/65 dark:to-stone-950/90 sm:p-8">
            <p className="mb-3 font-sans text-[0.7rem] font-medium tracking-[0.2em] text-primary uppercase dark:text-primary/95">
              Beneath the surface
            </p>
            <p className="font-serif text-lg leading-relaxed font-light text-stone-800 sm:text-xl md:text-2xl dark:text-stone-100">
              Something is happening beneath the surface, and without clarity, it
              is hard to fix what you cannot fully see.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
