"use client";

import { motion } from "framer-motion";

export default function WorkTheShift() {
  return (
    <section className="relative overflow-hidden py-32 md:py-48 bg-stone-900/10 dark:bg-stone-900/40 border-y border-rule transition-colors duration-500">
      {/* Noise Texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05] dark:opacity-[0.1]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`
        }}
        aria-hidden
      />
      
      {/* Horizontal accent line (top) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-px bg-primary opacity-50" />
      
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-4xl"
        >
          {/* <div className="mb-10 text-[0.65rem] font-medium uppercase tracking-[0.15em] text-primary">
            04 — The Shift
          </div> */}
          <h2 className="mb-8 font-serif text-[clamp(2rem,5vw,3.5rem)] font-light leading-[1.15] text-foreground">
            Most of what you&apos;re trying to fix is not the real problem.
          </h2>
          <p className="mx-auto max-w-[480px] text-[1.05rem] font-light leading-relaxed text-foreground/60 sm:text-lg">
            <strong className="font-normal text-foreground">It is the system underneath it.</strong>
            <br /><br />
            When you see that clearly, the problem — and your response — both change.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
