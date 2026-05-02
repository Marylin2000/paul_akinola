// InnerLifeGoDeeper.tsx
"use client";

import { getPageSection } from "@/lib/payload/page-data";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen } from "lucide-react";
import Link from "next/link";

export default function InnerLifeGoDeeper({ data }: { data?: any }) {
  const tb = getPageSection(data, 5);
  const goDeeperLabel = tb.goDeeperLabel || "Closing";
  const goDeeperTitle = tb.goDeeperTitle === "If this resonates, the next step is not to force change." || !tb.goDeeperTitle ? "Ready to understand what is actually shaping your outcomes?" : tb.goDeeperTitle;
  const goDeeperBtn = tb.goDeeperBtn === "Go deeper into Life" || !tb.goDeeperBtn ? "Start a Conversation" : tb.goDeeperBtn;
  const goDeeperBtnLink = tb.goDeeperBtnLink === "/thoughts?category=life" || !tb.goDeeperBtnLink ? "/together#contact" : tb.goDeeperBtnLink;
  const secondaryLabel = tb.secondaryCtaLabel || "Read the thinking behind the life lens";
  const secondaryHref = tb.secondaryCtaHref || "/thoughts?category=life";

  return (
    <section className="relative overflow-hidden border-t border-stone-200/60 bg-stone-50 py-24 transition-colors duration-500 dark:border-stone-700/60 dark:bg-stone-950 md:py-32">
      {/* Ambient light */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-primary/6 via-amber-500/4 to-transparent blur-7xl" />
      </div>
      
      <div className="container-responsive relative">
        <motion.div
           initial={{ opacity: 0, y: 24 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
           className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
            <BookOpen className="h-4 w-4" />
            {goDeeperLabel}
          </div>
          
          <h2 className="mb-6 font-serif text-3xl font-light leading-[1.2] text-stone-900 dark:text-white sm:text-4xl md:text-5xl">
            {goDeeperTitle}
          </h2>
          
          <Link
            href={goDeeperBtnLink}
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-stone-900 px-8 py-4 font-medium text-white shadow-lg shadow-stone-900/10 transition-all hover:shadow-xl hover:shadow-primary/20 dark:bg-gradient-to-r dark:from-stone-800 dark:to-stone-900"
          >
            <span className="relative z-10 flex items-center gap-2">
              {goDeeperBtn}
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
            </span>
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-primary via-primary to-orange-700 transition-transform duration-500 group-hover:translate-x-0" />
          </Link>
          <div className="mt-6">
            <Link href={secondaryHref} className="text-sm font-medium text-stone-500 transition-colors hover:text-primary dark:text-stone-400">
              {secondaryLabel}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
