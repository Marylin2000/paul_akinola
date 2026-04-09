"use client";

import { motion } from "framer-motion";

export default function AboutSiteMeaning() {
  return (
    <section className="py-32 relative overflow-hidden bg-stone-900 dark:bg-stone-950 text-stone-300">
      {/* Noise Texture */}
      <div className="absolute inset-0 opacity-[0.15] mix-blend-overlay pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary text-[0.65rem] font-medium uppercase tracking-[0.25em] mb-8 block">
              Site Meaning
            </span>
            <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] leading-tight mb-12 text-white">
              Why this site is built this way
            </h2>
            
            <div className="space-y-8 text-[clamp(1.1rem,1.4vw,1.3rem)] leading-relaxed text-stone-400">
              <p>
                This site brings together ideas that are often kept apart. Work and life are not separate here.
              </p>
              <p>
                They are two ways of looking at the same deeper reality: <span className="text-white italic">systems shape outcomes</span>, whether those outcomes are visible in performance, leadership, or the inner life.
              </p>
              <p>
                That is why there is a Work page and an Inner Life page. That is why Thoughts sits in the middle. The goal is not to present a polished version of certainty, but to make room for clearer seeing.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Structural Element Accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-px bg-primary/40" />
    </section>
  );
}
