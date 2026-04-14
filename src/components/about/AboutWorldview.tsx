"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { Sparkles, TrendingUp, Heart, Eye, Quote, ArrowRight } from "lucide-react";

export default function AboutWorldview() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"]
  });

  const lineWidth = useTransform(scrollYProgress, [0, 0.5], ["0%", "100%"]);

  const worldviewItems = [
    {
      title: "Outcomes are not random",
      content: "At work, results are shaped by systems—how decisions are made, how signals move, how teams align, and how things connect beneath the surface.",
      shortTitle: "Outcomes",
      icon: TrendingUp,
      gradient: "from-blue-500 to-primary",
      bgGradient: "from-blue-500/10 to-primary/10",
      color: "blue",
    },
    {
      title: "The same is true in life",
      content: "Behaviour, clarity, direction, and even the way we respond under pressure are shaped by systems within us—beliefs, patterns, memory, identity, and what we carry quietly.",
      shortTitle: "Inner Life",
      icon: Heart,
      gradient: "from-rose-500 to-amber-500",
      bgGradient: "from-rose-500/10 to-amber-500/10",
      color: "rose",
    },
    {
      title: "More than visible",
      content: "Underneath both, there is often more going on than what is immediately visible. That is the lens I keep returning to.",
      shortTitle: "Depth",
      icon: Eye,
      gradient: "from-amber-500 to-primary",
      bgGradient: "from-amber-500/10 to-primary/10",
      color: "amber",
    },
  ];

  // Calculate positions for the circular layout
  const cardPositions = [
    { angle: 0, offsetX: 0, offsetY: 0 },        // Center
    { angle: 0, offsetX: 120, offsetY: -80 },    // Top right
    { angle: 120, offsetX: -100, offsetY: 100 }, // Bottom left
  ];

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen overflow-hidden bg-white py-20 transition-colors duration-500 dark:bg-stone-950 md:py-24 lg:py-0"
    >
      {/* Ambient background elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-0 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-primary/5 via-amber-500/3 to-transparent blur-7xl" />
        <div className="absolute -right-40 bottom-0 h-[600px] w-[600px] rounded-full bg-gradient-to-tl from-blue-500/5 via-primary/3 to-transparent blur-7xl" />
      </div>

      {/* Subtle radial gradient */}
      <div 
        className="pointer-events-none absolute inset-0 opacity-30 dark:opacity-20"
        style={{
          background: "radial-gradient(circle at 70% 50%, var(--primary) 0%, transparent 50%)",
        }}
      />

      {/* Top divider */}
      <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-stone-300/50 to-transparent dark:via-stone-700/50" />

      <div className="container-responsive relative z-10 flex min-h-screen items-center">
        <div className="grid w-full grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12 xl:gap-20">
          
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="py-12 lg:py-20"
          >
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 backdrop-blur-sm">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              <span className="text-xs font-medium uppercase tracking-wider text-primary">
                Philosophy
              </span>
            </div>

            {/* Title */}
            <h2 className="mb-6 font-serif text-4xl font-medium leading-tight tracking-tight text-stone-900 dark:text-stone-100 sm:text-5xl lg:text-6xl xl:text-7xl">
              How I see the{" "}
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-primary via-amber-600 to-orange-700 bg-clip-text italic text-transparent dark:from-orange-400 dark:via-primary dark:to-amber-300">
                  world
                </span>
                <span className="absolute -inset-x-2 bottom-1 h-3 bg-gradient-to-r from-primary/15 via-amber-300/15 to-orange-400/15 blur-sm" />
              </span>
            </h2>

            {/* Subtitle */}
            <p className="mb-8 max-w-lg text-base leading-relaxed text-stone-500 dark:text-stone-400 sm:text-lg">
              A lens that helps me make sense of what's really happening—beneath the surface, 
              beyond the obvious, behind the noise.
            </p>
            
            {/* Animated Progress Line */}
            <div className="relative mb-10 h-0.5 w-full max-w-md overflow-hidden rounded-full bg-stone-200 dark:bg-stone-800">
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-primary via-amber-500 to-orange-600"
                style={{ width: lineWidth }}
              />
            </div>

            {/* Quote Block */}
            <motion.blockquote
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="group relative max-w-md overflow-hidden rounded-2xl border border-stone-200/60 bg-gradient-to-br from-stone-50 to-white p-6 dark:border-stone-700/60 dark:from-stone-900/80 dark:to-stone-900/60"
            >
              <Quote className="mb-3 h-6 w-6 rotate-180 text-primary/40" />
              <p className="font-serif text-lg italic leading-relaxed text-stone-700 dark:text-stone-200">
                Most visible problems are being shaped by something deeper.
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div className="h-px w-8 bg-gradient-to-r from-primary/40 to-transparent" />
                <span className="text-xs font-medium uppercase tracking-wider text-primary/70">
                  The Core Lens
                </span>
              </div>
            </motion.blockquote>

            {/* Interactive hint */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-8 hidden items-center gap-2 text-sm text-stone-400 lg:flex"
            >
              <span>Hover over the cards</span>
              <ArrowRight className="h-4 w-4 animate-pulse" />
            </motion.div>
          </motion.div>

          {/* Right Side - Circular Card Layout */}
          <div className="relative flex h-[500px] items-center justify-center lg:h-[600px] xl:h-[700px]">
            {/* Outer decorative ring */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="absolute h-[300px] w-[300px] rounded-full border border-dashed border-primary/20 sm:h-[350px] sm:w-[350px] lg:h-[400px] lg:w-[400px] xl:h-[450px] xl:w-[450px]"
            />
            
            {/* Inner decorative ring */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 0.5, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute h-[200px] w-[200px] rounded-full bg-gradient-to-br from-primary/5 to-amber-500/5 blur-2xl sm:h-[250px] sm:w-[250px] lg:h-[300px] lg:w-[300px]"
            />

            {/* Center orb */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-amber-500/20 backdrop-blur-sm sm:h-24 sm:w-24 lg:h-28 lg:w-28"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary to-amber-500 shadow-lg sm:h-14 sm:w-14 lg:h-16 lg:w-16">
                <Sparkles className="h-6 w-6 text-white sm:h-7 sm:w-7 lg:h-8 lg:w-8" />
              </div>
            </motion.div>

            {/* Cards arranged in a circle */}
            {worldviewItems.map((item, index) => {
              const Icon = item.icon;
              const isActive = activeIndex === index;
              
              // Calculate position based on index
              const positions = [
                { x: "55%", y: "25%" },  // Top right
                { x: "65%", y: "65%" },  // Bottom right
                { x: "35%", y: "70%" },  // Bottom left
              ];
              
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.5 + index * 0.15,
                    type: "spring",
                    stiffness: 200,
                    damping: 20
                  }}
                  className="absolute"
                  style={{
                    left: positions[index].x,
                    top: positions[index].y,
                    transform: "translate(-50%, -50%)",
                  }}
                  onMouseEnter={() => setActiveIndex(index)}
                  onMouseLeave={() => setActiveIndex(null)}
                >
                  {/* Connecting line from center */}
                  <svg 
                    className="absolute left-1/2 top-1/2 -z-10 h-[200px] w-[200px] -translate-x-1/2 -translate-y-1/2"
                    style={{ pointerEvents: 'none' }}
                  >
                    <motion.line
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 1 + index * 0.1 }}
                      x1="50%"
                      y1="50%"
                      x2={index === 0 ? "30%" : index === 1 ? "20%" : "40%"}
                      y2={index === 0 ? "60%" : index === 1 ? "30%" : "20%"}
                      stroke="currentColor"
                      strokeWidth="1"
                      className="text-primary/20"
                      strokeDasharray="4 4"
                    />
                  </svg>

                  {/* Card */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="group/card relative"
                  >
                    {/* Glow effect */}
                    <div className={`absolute -inset-4 rounded-2xl bg-gradient-to-br ${item.bgGradient} opacity-0 blur-xl transition-all duration-500 group-hover/card:opacity-100`} />
                    
                    {/* Main card circle */}
                    <div className={`relative flex h-16 w-16 cursor-pointer flex-col items-center justify-center rounded-2xl border border-stone-200/60 bg-white/90 shadow-lg backdrop-blur-sm transition-all duration-500 group-hover/card:border-primary/40 group-hover/card:shadow-2xl dark:border-stone-700/60 dark:bg-stone-900/90 sm:h-20 sm:w-20 lg:h-24 lg:w-24 ${
                      isActive ? 'scale-110 border-primary/50 shadow-xl' : ''
                    }`}>
                      <Icon className={`h-6 w-6 transition-all duration-300 sm:h-7 sm:w-7 lg:h-8 lg:w-8 ${
                        isActive ? 'text-primary' : 'text-stone-600 dark:text-stone-300'
                      }`} />
                    </div>

                    {/* Expandable content card */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8, y: 10 }}
                      animate={isActive ? { 
                        opacity: 1, 
                        scale: 1, 
                        y: 0,
                        transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
                      } : { 
                        opacity: 0, 
                        scale: 0.8, 
                        y: 10,
                        transition: { duration: 0.2 }
                      }}
                      className="absolute left-1/2 top-full mt-4 w-64 -translate-x-1/2 sm:w-72 lg:w-80"
                      style={{ pointerEvents: isActive ? 'auto' : 'none' }}
                    >
                      <div className="relative overflow-hidden rounded-2xl border border-stone-200/60 bg-white/95 p-5 shadow-2xl backdrop-blur-md dark:border-stone-700/60 dark:bg-stone-900/95">
                        {/* Accent line */}
                        <div className={`absolute left-0 top-0 h-1 w-full bg-gradient-to-r ${item.gradient}`} />
                        
                        <h4 className="mb-2 font-serif text-lg font-semibold text-stone-900 dark:text-white">
                          {item.title}
                        </h4>
                        <p className="text-sm leading-relaxed text-stone-600 dark:text-stone-300">
                          {item.content}
                        </p>
                        
                        {/* Arrow pointer */}
                        <div className="absolute -top-2 left-1/2 h-4 w-4 -translate-x-1/2 rotate-45 border-l border-t border-stone-200/60 bg-white/95 dark:border-stone-700/60 dark:bg-stone-900/95" />
                      </div>
                    </motion.div>
                  </motion.div>
                </motion.div>
              );
            })}

            {/* Floating particles */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.3 }}
                viewport={{ once: true }}
                transition={{ delay: 1 + i * 0.1 }}
                animate={{
                  y: [0, -10, 0],
                  x: [0, i % 2 === 0 ? 10 : -10, 0],
                }}
                transition={{
                  duration: 3 + i,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute h-1.5 w-1.5 rounded-full bg-primary/30"
                style={{
                  left: `${20 + i * 15}%`,
                  top: `${30 + (i * 10) % 40}%`,
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom decorative element */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 lg:hidden">
        <p className="text-xs text-stone-400">Tap cards to explore</p>
        <div className="mx-auto mt-2 h-8 w-px bg-gradient-to-b from-primary/40 to-transparent" />
      </div>
    </section>
  );
}