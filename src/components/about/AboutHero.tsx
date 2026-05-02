"use client";

import { getPageSection } from "@/lib/payload/page-data";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function AboutHero({ data }: { data?: any }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const tb = getPageSection(data, 0);
  const isOldTitle = tb.heroTitlePrefix === "I pay attention to what most people" || tb.heroTitlePrefix === "I pay attention to what most people " || !tb.heroTitlePrefix;
  const prefix = isOldTitle ? "I try to arrive empty." : tb.heroTitlePrefix;
  const italic = isOldTitle ? "" : tb.heroTitleItalic || "";
  const desc = tb.heroDescription || "I pay attention to how things work—in systems, in people, and in myself. This is the simplest place to understand the person behind the lens.";
  const stats = tb.heroStats || [
    { num: "10+", label: "Years Experience" },
    { num: "50+", label: "Projects" },
    { num: "∞", label: "Curiosity" }
  ];
  const imgUrl = tb.heroImage?.url || "/images/bg-clean.png";
  const quote = tb.heroImage?.quote || "Systems shape outcomes";

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen overflow-hidden bg-stone-50 dark:bg-stone-950"
    >
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Floating Accent Shapes */}
      <motion.div 
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-[10%] w-64 h-64 bg-primary/5 rounded-full blur-3xl"
      />
      <motion.div 
        animate={{ 
          y: [0, 30, 0],
          rotate: [0, -5, 0]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-40 left-[5%] w-96 h-96 bg-amber-500/5 rounded-full blur-3xl"
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 min-h-screen items-center pt-20 lg:pt-0">
          
          {/* Text Content */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              style={{ opacity }}
            >
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "auto" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="overflow-hidden mb-6"
              >
                <span className="inline-flex items-center gap-3 text-[0.7rem] font-medium uppercase tracking-[0.3em] text-primary/70">
                  <span className="w-8 h-px bg-primary/50" />
                  About
                </span>
              </motion.div>

              <h1 className="font-serif text-[clamp(2.5rem,8vw,5rem)] leading-[1.05] text-stone-900 dark:text-stone-100 mb-8 text-balance">
                {prefix}{" "}
                {italic && (
                  <motion.span 
                    className="italic text-primary relative inline-block"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {italic}
                    <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                      <motion.path 
                        d="M2 8C50 2 150 2 198 8" 
                        stroke="currentColor" 
                        strokeWidth="3" 
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1.5, delay: 1 }}
                      />
                    </svg>
                  </motion.span>
                )}
              </h1>

              <motion.p 
                className="font-sans text-lg md:text-xl text-stone-600 dark:text-stone-400 leading-relaxed max-w-xl mb-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {desc}
              </motion.p>

              {/* Stats/Bento Mini Grid */}
              <motion.div 
                className="grid grid-cols-3 gap-4 max-w-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                {stats.map((stat: any, i: number) => (
                  <div key={i} className="text-center p-4 rounded-2xl bg-white/50 dark:bg-stone-900/50 backdrop-blur-sm border border-stone-200/50 dark:border-stone-800/50">
                    <div className="font-serif text-2xl md:text-3xl text-primary mb-1">{stat.num}</div>
                    <div className="text-[0.65rem] uppercase tracking-wider text-stone-500">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>

          {/* Image with Parallax */}
          <div className="lg:col-span-5 order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              {/* Decorative Frame */}
              <div className="absolute -inset-4 border border-primary/20 rounded-[2rem] rotate-3" />
              <div className="absolute -inset-4 border border-stone-300/50 dark:border-stone-700/50 rounded-[2rem] -rotate-2" />
              
              <motion.div 
                className="relative aspect-[4/5] max-w-md mx-auto rounded-[2rem] overflow-hidden shadow-2xl"
                style={{ y }}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Image
                  src={imgUrl}
                  alt="Paul Akinola"
                  fill
                  className="object-cover"
                  priority
                />
                
                {/* Glassmorphism Overlay Card */}
                <motion.div 
                  className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/80 dark:bg-stone-900/80 backdrop-blur-xl border border-white/20 dark:border-stone-700/50"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                >
                  <p className="font-serif italic text-sm text-stone-700 dark:text-stone-300 text-center">
                    "{quote}"
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span className="text-[0.65rem] uppercase tracking-widest text-stone-400">Scroll</span>
        <motion.div 
          className="w-px h-12 bg-gradient-to-b from-primary/50 to-transparent"
          animate={{ scaleY: [1, 0.5, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>
    </section>
  );
}
