"use client";

import { motion } from "framer-motion";

export default function WorkSurfaceRoot() {
  return (
    <section className="relative overflow-hidden py-32 border-t border-rule bg-background transition-colors duration-500">
      <div className="relative mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-[720px]"
        >
          {/* <div className="mb-10 text-[0.65rem] font-medium uppercase tracking-[0.15em] text-foreground/40">
            02 — Surface vs Root Cause
          </div> */}
          <h2 className="mb-8 font-serif text-[clamp(1.8rem,4vw,2.6rem)] font-normal leading-[1.25] text-foreground">
            What you&apos;re seeing is only part of the picture.
          </h2>
          <p className="max-w-[540px] text-lg font-light leading-relaxed text-foreground/60 md:text-xl">
            Most of what shapes performance, growth, and decision-making sits underneath — in how things are structured, how signals move, and how work actually connects.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
