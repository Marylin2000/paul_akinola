// WorkReframes.tsx
"use client";

import { getPageSection } from "@/lib/payload/page-data";
import { motion } from "framer-motion";

export default function WorkReframes({ data }: { data?: any }) {
  const tb = getPageSection(data, 2);
  const reframesTitle = tb.reframesTitle || "Your system is either working for your revenue, or quietly working against it.";
  const body1 = tb.reframesBody1 || "The starting point is always an audit. Not of effort or headcount, but of what exists, how it is being used, how it connects, and where the signal breaks down before it reaches the people who need it.";
  const body2 = tb.reframesBody2 || "When you can see that clearly, the picture changes. You stop fixing symptoms and start building infrastructure that actually supports how revenue moves.";
  const closingLine = tb.reframesClosingLine || "That is the work.";

  return (
    <section className="relative overflow-hidden border-t border-stone-200/60 bg-stone-50 py-24 transition-colors duration-500 dark:border-stone-700/60 dark:bg-stone-950 md:py-32">
      <div className="container-responsive">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-6 flex items-center gap-4">
            <div className="h-px w-12 bg-gradient-to-r from-primary/60 to-transparent" />
            <span className="text-sm font-medium uppercase tracking-wider text-primary/70">
              Common Reframes
            </span>
          </div>
          
          <h2 className="font-serif text-3xl font-medium tracking-tight text-stone-900 dark:text-white sm:text-4xl">
            {reframesTitle}
          </h2>
          <div className="mx-auto mt-8 max-w-2xl space-y-6 text-lg leading-relaxed text-stone-500 dark:text-stone-400">
            <p>{body1}</p>
            <p>{body2}</p>
            <p className="font-serif text-2xl italic text-stone-700 dark:text-stone-200">{closingLine}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
