"use client";

import { motion } from "framer-motion";

export default function WorkHero() {
  return (
    <section className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-background pt-16 transition-colors duration-500">
      {/* Background radial accent */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.2] dark:opacity-[0.1]"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 75% 50%, var(--primary) 0%, transparent 70%)"
        }}
        aria-hidden
      />

      {/* Grid background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.4] dark:opacity-[0.2]"
        style={{
          backgroundImage: `
            linear-gradient(var(--rule) 1px, transparent 1px),
            linear-gradient(90deg, var(--rule) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
          maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 20%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 20%, transparent 80%)"
        }}
        aria-hidden
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mb-8 flex items-center gap-4 text-[0.7rem] font-medium uppercase tracking-[0.14em] text-primary">
              Systems at Work
              <div className="h-px w-8 bg-primary/30" />
            </div>
            
            <h1 className="mb-12 font-serif text-[clamp(3.5rem,8vw,7.5rem)] font-light leading-[1.05] tracking-tight text-foreground">
              Something isn&apos;t adding up.
            </h1>
            
            <div className="max-w-[540px] space-y-4 text-lg font-light leading-relaxed text-foreground/70 sm:text-xl">
              <p>You&apos;re putting in the work. The team is active. Things are moving.</p>
              <p className="font-serif text-2xl italic text-foreground/40 sm:text-3xl">But the results don&apos;t fully reflect it.</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Hint */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-12 left-6 flex items-center gap-4 text-[0.7rem] uppercase tracking-widest text-foreground/40 sm:left-12"
      >
        <div className="h-10 w-px bg-gradient-to-b from-transparent to-primary/50" />
        <span>Scroll</span>
      </motion.div>
    </section>
  );
}
