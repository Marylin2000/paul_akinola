// WorkSurfaceRoot.tsx
"use client";

import { getPageSection } from "@/lib/payload/page-data";
import { motion } from "framer-motion";

const defaultSources = [
  { title: "The CRM", body: "Where deals live, but not always why they move or stall" },
  { title: "The product", body: "Where behaviour happens, but rarely reaches the people responsible for pipeline" },
  { title: "Web analytics", body: "Where intent shows up, but disconnected from revenue outcomes" },
  { title: "Campaign tools", body: "Where activity is tracked, but attribution stays murky" },
  { title: "The spreadsheet", body: "Where someone built the truth, outside every system" },
  { title: "The conversation", body: "Where real intelligence lives, in Slack threads and email chains that never get recorded" },
];

export default function WorkSurfaceRoot({ data }: { data?: any }) {
  const tb = getPageSection(data, 1);
  const surfaceLabel = tb.surfaceLabel || "Surface vs Root Cause";
  const surfaceTitle = tb.surfaceTitle || "The data exists. The visibility doesn't.";
  const surfaceDesc = tb.surfaceDesc || "Most revenue teams are not short of data. They are short of signal. Because the data that should tell the full story is scattered across six places that rarely talk to each other.";
  const sources = tb.sources?.length ? tb.sources : defaultSources;
  const closingLine = tb.surfaceClosingLine || "When these six don't connect, no one can see what is driving revenue, what to scale, what to kill, or what is coming next.";

  return (
    <section className="relative overflow-hidden border-t border-stone-200/60 bg-white py-24 transition-colors duration-500 dark:border-stone-700/60 dark:bg-stone-900 md:py-32">
      {/* Background accent */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-60 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-gradient-to-br from-primary/5 via-amber-500/5 to-transparent blur-7xl" />
      </div>

      <div className="container-responsive relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            {surfaceLabel}
          </div>
          
          <h2 className="mb-6 font-serif text-3xl font-medium tracking-tight text-stone-900 dark:text-white sm:text-4xl md:text-5xl lg:text-6xl">
            {surfaceTitle}
          </h2>
          
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-stone-500 dark:text-stone-400 sm:text-xl">
            {surfaceDesc}
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {sources.map((source: any, index: number) => (
            <motion.div
              key={source.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className="rounded-3xl border border-stone-200/60 bg-white/80 p-8 backdrop-blur-sm dark:border-stone-700/60 dark:bg-stone-900/80"
            >
              <h3 className="mb-3 font-serif text-xl font-semibold text-stone-900 dark:text-white">
                {source.title}
              </h3>
              <p className="text-sm leading-relaxed text-stone-600 dark:text-stone-300">
                {source.body}
              </p>
            </motion.div>
          ))}
        </div>

        <p className="mx-auto mt-14 max-w-3xl text-center text-lg leading-relaxed text-stone-500 dark:text-stone-400">
          {closingLine}
        </p>
      </div>
    </section>
  );
}
