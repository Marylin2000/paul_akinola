// InnerLifeSetup.tsx
"use client";

import { getPageSection } from "@/lib/payload/page-data";
import { motion } from "framer-motion";
import { Eye } from "lucide-react";

export default function InnerLifeSetup({ data }: { data?: any }) {
  const tb = getPageSection(data, 1);
  const setupLabel = tb.setupLabel || "The Invisible System";
  const setupP1 = tb.setupP1 || "What you're experiencing is not random. How you think, respond, and move through life is shaped by systems — beliefs, patterns, identity, memory, and pressure.";
  const setupP2 = tb.setupP2 || "Most of it runs quietly in the background, shaping the world you see and the choices you make.";

  return (
    <section className="relative overflow-hidden border-t border-stone-200/60 bg-white py-24 transition-colors duration-500 dark:border-stone-700/60 dark:bg-stone-900 md:py-32">
      {/* Background accent */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-60 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-gradient-to-br from-primary/5 via-amber-500/5 to-transparent blur-7xl" />
      </div>

      <div className="container-responsive relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-5 py-2 backdrop-blur-sm">
            <Eye className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">{setupLabel}</span>
          </div>
          
          <p className="mb-8 font-serif text-xl leading-relaxed text-stone-700 dark:text-stone-200 sm:text-2xl md:text-3xl">
            {setupP1}
          </p>
          
          <div className="mx-auto h-px w-16 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          
          <p className="mt-8 text-lg leading-relaxed text-stone-500 dark:text-stone-400">
            {setupP2}
          </p>
        </motion.div>
      </div>
    </section>
  );
}