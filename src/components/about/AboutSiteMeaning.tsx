"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

export default function AboutSiteMeaning({ data }: { data?: any }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Dynamic payload values
  const tb = data?.tabs?.[5] || {};
  const mTitle = tb.siteMeaningTitle || "Why this site is built this way";
  const contentRaw = tb.siteMeaningContent || [
    "This site brings together ideas that are often kept apart. Work and life are not separate here.",
    "They are two ways of looking at the same deeper reality: \"systems shape outcomes\" whether those outcomes are visible in performance, leadership, or the inner life.",
    "That is why there is a Work page and an Inner Life page. That is why Thoughts sits in the middle. The goal is not to present a polished version of certainty, but to make room for clearer seeing."
  ];
  const content = Array.isArray(contentRaw) ? contentRaw.join(' ') : contentRaw;

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [0.9, 1]);

  return (
    <section 
      ref={containerRef}
      className="relative py-40 lg:py-56 overflow-hidden bg-stone-950"
    >
      {/* Animated Noise Background */}
      <div className="absolute inset-0 opacity-[0.15] mix-blend-overlay pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      {/* Gradient Orbs */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px]"
        animate={{ 
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-amber-500/10 rounded-full blur-[80px]"
        animate={{ 
          x: [0, -30, 0],
          y: [0, 50, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 5 }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          style={{ opacity, scale }}
        >
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 text-[0.65rem] font-medium uppercase tracking-[0.3em] text-primary/70 mb-8"
          >
            <span className="w-8 h-px bg-primary/50" />
            Site Meaning
            <span className="w-8 h-px bg-primary/50" />
          </motion.span>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            {/* Header */}
            <div className="flex items-center gap-6 mb-12">
              <span className="text-[0.65rem] font-medium uppercase tracking-[0.3em] text-primary/70">
                The Site
              </span>
              <div className="h-px flex-1 bg-gradient-to-r from-stone-700 to-transparent" />
            </div>

            {/* Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-stone-100 max-w-sm">
                {mTitle}
              </h2>
              
              <div className="space-y-6">
                <p className="text-lg text-stone-400 leading-relaxed font-serif italic border-l-2 border-primary pl-6">
                  "Not a finished answer. A clearer way of seeing."
                </p>
                
                <div 
                  className="relative overflow-hidden"
                >
                  <div className="text-stone-400 leading-relaxed max-w-lg mb-6">
                    {content?.split('. ')?.map((s: string, i: number) => s.length > 0 ? <p className="mb-4" key={i}>{s.trim()}{s.endsWith('.') ? '' : '.'}</p> : null)}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Decorative Element */}
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-16 mx-auto w-24 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
}
