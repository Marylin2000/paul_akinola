"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function AboutJourney() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section 
      ref={containerRef}
      className="relative py-32 lg:py-40 overflow-hidden bg-stone-100 dark:bg-stone-900"
    >
      {/* Parallax Background */}
      <motion.div 
        className="absolute inset-0 opacity-30"
        style={{ y: backgroundY }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-stone-50 dark:from-stone-950 to-transparent" />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl mx-auto mb-20"
        >
          <div className="flex items-center gap-4 mb-6">
            <motion.div 
              className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            />
            <span className="text-[0.65rem] font-medium uppercase tracking-[0.3em] text-primary/70">
              The Path
            </span>
            <motion.div 
              className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            />
          </div>
          
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-center text-stone-900 dark:text-stone-100 mb-4">
            My Journey
          </h2>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-min">
          
          {/* Large Card - The Realization */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-2 md:row-span-2 group relative overflow-hidden rounded-3xl bg-white dark:bg-stone-800 p-8 lg:p-12 shadow-xl shadow-stone-200/50 dark:shadow-black/20"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors duration-700" />
            
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div className="mb-8">
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-primary/10 text-primary mb-6">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </span>
                <h3 className="font-serif text-2xl lg:text-3xl text-stone-900 dark:text-stone-100 mb-4">
                  The Visible vs. The Real
                </h3>
              </div>
              
              <div className="space-y-4 text-lg leading-relaxed text-stone-600 dark:text-stone-400">
                <p>
                  I did not start with this language. I started by trying to make things work—growth, teams, decisions, outcomes, momentum.
                </p>
                <p className="font-medium text-stone-900 dark:text-stone-100 text-xl italic border-l-2 border-primary pl-6 py-2">
                  "The visible problem is rarely the real one."
                </p>
                <p>
                  That changed how I worked. I began paying closer attention to structure, signal, behaviour, and what was happening underneath the surface.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Small Card - The Shift */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="group relative overflow-hidden rounded-3xl bg-stone-900 dark:bg-stone-950 p-8 text-stone-300"
          >
            <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
            <div className="relative z-10">
              <span className="text-primary text-4xl font-serif mb-4 block">01</span>
              <h4 className="font-serif text-xl text-white mb-3">The Shift</h4>
              <p className="text-sm leading-relaxed text-stone-400">
                From surface metrics to underlying systems. From quick fixes to structural clarity.
              </p>
            </div>
            <motion.div 
              className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary/20 rounded-full blur-2xl"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
          </motion.div>

          {/* Small Card - Beyond Work */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="group relative overflow-hidden rounded-3xl bg-primary/5 dark:bg-primary/10 p-8 border border-primary/10"
          >
            <span className="text-primary text-4xl font-serif mb-4 block">02</span>
            <h4 className="font-serif text-xl text-stone-900 dark:text-stone-100 mb-3">Beyond Work</h4>
            <p className="text-sm leading-relaxed text-stone-600 dark:text-stone-400">
              That shift moved beyond work—into faith, formation, and the inner life.
            </p>
          </motion.div>

          {/* Wide Card - Expression */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="md:col-span-3 group relative overflow-hidden rounded-3xl bg-gradient-to-r from-stone-900 to-stone-800 dark:from-stone-950 dark:to-stone-900 p-8 lg:p-12"
          >
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex-1">
                <p className="font-serif italic text-2xl lg:text-3xl text-white leading-relaxed">
                  "This site is an expression of that journey. Not a finished answer. A clearer way of seeing."
                </p>
              </div>
              <motion.div 
                className="w-20 h-20 rounded-full border-2 border-primary/30 flex items-center justify-center"
                whileHover={{ rotate: 90, borderColor: "rgba(var(--primary), 0.6)" }}
                transition={{ duration: 0.5 }}
              >
                <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
