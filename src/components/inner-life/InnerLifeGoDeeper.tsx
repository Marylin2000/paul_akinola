"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function InnerLifeGoDeeper() {
  return (
    <section className="relative overflow-hidden py-32 border-t border-rule bg-paper-warm transition-colors duration-500">
      <div className="relative mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mb-8 text-[0.65rem] font-medium uppercase tracking-[0.15em] text-foreground/40">
            06 — Go Deeper
          </div>
          <h2 className="mb-6 font-serif text-[clamp(1.8rem,4vw,2.6rem)] font-light leading-[1.2] text-foreground max-w-[580px] mx-auto">
            If this resonates, the next step is not to force change.
          </h2>
          <p className="mx-auto mb-10 text-lg font-light text-foreground/50">
            It is to understand yourself more clearly.
          </p>
          <Link
            href="/thoughts?category=life"
            className="group inline-flex items-center justify-center gap-3 border border-primary bg-primary px-10 py-4 text-[0.8rem] font-medium uppercase tracking-widest text-white transition-all hover:bg-transparent hover:text-primary"
          >
            <span>Go deeper into Life</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-2" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
