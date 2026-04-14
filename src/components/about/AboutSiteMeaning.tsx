"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function AboutSiteMeaning() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

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

          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.1] mb-12 text-white"
          >
            Why this site is built{" "}
            <span className="italic text-primary">this way</span>
          </motion.h2>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-8 text-lg md:text-xl leading-relaxed text-stone-400 max-w-3xl mx-auto"
          >
            <p className="text-stone-300">
              This site brings together ideas that are often kept apart. Work and life are not separate here.
            </p>
            <p>
              They are two ways of looking at the same deeper reality:{" "}
              <span className="text-white font-serif italic text-2xl block mt-4 mb-4">
                "systems shape outcomes"
              </span>
              whether those outcomes are visible in performance, leadership, or the inner life.
            </p>
            <p>
              That is why there is a Work page and an Inner Life page. That is why Thoughts sits in the middle. The goal is not to present a polished version of certainty, but to make room for clearer seeing.
            </p>
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
