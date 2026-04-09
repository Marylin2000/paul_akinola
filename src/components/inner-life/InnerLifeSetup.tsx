"use client";

import { motion } from "framer-motion";

export default function InnerLifeSetup() {
  return (
    <section className="relative overflow-hidden py-32 bg-background border-t border-rule transition-colors duration-500">
      <div className="relative mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-[680px] mx-auto text-center"
        >
          <div className="mb-12 text-[0.65rem] font-medium uppercase tracking-[0.15em] text-foreground/40">
            02 — The Invisible System
          </div>
          <p className="font-serif text-[clamp(1.2rem,2.5vw,1.6rem)] font-light leading-relaxed text-foreground/80">
            What you&apos;re experiencing is not random. How you think, respond, and move through life is shaped by systems — beliefs, patterns, identity, memory, and pressure.
          </p>
          <div className="mt-12 mx-auto w-12 h-px bg-primary/20" />
          <p className="mt-12 text-lg font-light leading-relaxed text-foreground/50">
            Most of it runs quietly in the background, shaping the world you see and the choices you make.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
