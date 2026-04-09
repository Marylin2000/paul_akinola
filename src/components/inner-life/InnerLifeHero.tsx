"use client";

import { motion } from "framer-motion";

export default function InnerLifeHero() {
  return (
    <section className="relative flex min-h-[85vh] flex-col justify-center overflow-hidden bg-background pt-16 transition-colors duration-500">
      {/* Background radial accent - even softer than Work */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.1] dark:opacity-[0.05]"
        style={{
          background: "radial-gradient(ellipse 70% 50% at 75% 50%, var(--primary) 0%, transparent 70%)"
        }}
        aria-hidden
      />

      {/* Grid background - very subtle */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.2] dark:opacity-[0.1]"
        style={{
          backgroundImage: `
            linear-gradient(var(--rule) 1px, transparent 1px),
            linear-gradient(90deg, var(--rule) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
          maskImage: "radial-gradient(ellipse 60% 60% at 50% 50%, black 10%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse 60% 60% at 50% 50%, black 10%, transparent 80%)"
        }}
        aria-hidden
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mb-10 flex items-center gap-4 text-[0.65rem] font-medium uppercase tracking-[0.15em] text-primary/60">
              Systems in Life
              <div className="h-px w-6 bg-primary/20" />
            </div>
            
            <h1 className="mb-14 font-serif text-[clamp(2.8rem,6.5vw,6rem)] font-light leading-[1.1] tracking-tight text-foreground">
              You can feel it, but you can&apos;t fully explain it.
            </h1>
            
            <div className="max-w-[580px] space-y-6 text-lg font-light leading-relaxed text-foreground/60 sm:text-xl">
              <p>You&apos;re thinking. You&apos;re trying. You&apos;re moving forward.</p>
              <p className="font-serif text-2xl italic text-foreground/40 sm:text-3xl">But something still doesn&apos;t sit right.</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Hint */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-6 flex items-center gap-4 text-[0.65rem] uppercase tracking-widest text-foreground/30 sm:left-12"
      >
        <div className="h-8 w-px bg-gradient-to-b from-transparent to-primary/30" />
        <span>Reflect</span>
      </motion.div>
    </section>
  );
}
