"use client";

import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-background pt-32 pb-24 transition-colors duration-500 md:pt-48 md:pb-32">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-[0.65rem] font-medium uppercase tracking-[0.2em] text-primary/60 mb-6 block">
              About
            </span>
            <h1 className="font-serif text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.1] text-foreground mb-8">
              I pay attention to what most people <span className="italic text-primary">overlook</span>.
            </h1>
            <p className="font-sans text-[clamp(1.1rem,1.5vw,1.35rem)] text-foreground/70 leading-relaxed">
              I pay attention to how things work, in systems, in people, and in myself. This is the simplest place to understand the person behind the lens.
            </p>
          </motion.div>
        </div>
      </div>
      
      {/* Subtle Background Accent */}
      <div className="absolute top-0 right-0 -z-10 w-1/3 h-full opacity-[0.03] dark:opacity-[0.05] pointer-events-none">
        <div className="absolute inset-0 bg-grid-slate-900/[0.1] [mask-image:linear-gradient(to_bottom,white,transparent)]" />
      </div>
    </section>
  );
}
