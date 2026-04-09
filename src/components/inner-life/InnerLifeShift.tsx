"use client";

import { motion } from "framer-motion";

export default function InnerLifeShift() {
  return (
    <section className="relative overflow-hidden py-32 md:py-48 bg-stone-900/5 dark:bg-stone-900/30 border-y border-rule transition-colors duration-500">
      {/* Subtle Noise Texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`
        }}
        aria-hidden
      />
      
      {/* Subtle horizontal accent line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-px bg-primary opacity-30" />
      
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-3xl"
        >
          <div className="mb-10 text-[0.65rem] font-medium uppercase tracking-[0.15em] text-primary/60">
            04 — The Shift
          </div>
          <h2 className="mb-8 font-serif text-[clamp(1.8rem,4vw,2.8rem)] font-light leading-[1.2] text-foreground">
            What you&apos;re experiencing is not random.
          </h2>
          <p className="mx-auto max-w-[540px] text-lg font-light leading-relaxed text-foreground/60 italic font-serif">
            There are systems within you shaping how you think, respond, and move. When you begin to see them, things start to make more sense.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
