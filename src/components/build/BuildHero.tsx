// BuildHero.tsx
"use client";

import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { useRef, useEffect, ReactNode } from "react";
import { Sparkles, Zap, Target, TrendingUp, ArrowDown, Star } from "lucide-react";
import type { BuildData } from "@/lib/types-cms";
import { buildDefault } from "@/lib/defaults-cms";

interface FloatingElementProps {
  children: ReactNode;
  delay?: number;
  x: any;
  y: any;
  className?: string;
}

function FloatingElement({ children, delay = 0, x, y, className = "" }: FloatingElementProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: delay + 0.5, duration: 0.8, type: "spring" }}
      style={{ x, y }}
      className={className}
    >
      <motion.div
        animate={{
          y: [0, -15, 0],
          rotate: [0, 3, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          delay,
          ease: "easeInOut",
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

function GradientOrb({ className }: { className: string }) {
  return (
    <motion.div 
      className={`absolute rounded-full blur-[120px] ${className}`}
      animate={{
        scale: [1, 1.1, 1],
        opacity: [0.3, 0.4, 0.3],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

function AnimatedGrid() {
  return (
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(154,52,18,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(154,52,18,0.03)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_50%,black,transparent)]" />
      <motion.div
        className="absolute inset-0 bg-[linear-gradient(rgba(154,52,18,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(154,52,18,0.06)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_40%_30%_at_50%_50%,black,transparent)]"
        animate={{
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}

const BuildHero = ({ data = buildDefault }: { data?: BuildData }) => {
  const badge = data.heroBadge || buildDefault.heroBadge;
  const title1 = data.heroTitle1 || buildDefault.heroTitle1;
  const title2 = data.heroTitle2 || buildDefault.heroTitle2;
  const p1 = data.heroP1 || buildDefault.heroP1;
  const p2 = data.heroP2 || buildDefault.heroP2;

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.85]);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 100, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      mouseX.set((clientX - innerWidth / 2) / 30);
      mouseY.set((clientY - innerHeight / 2) / 30);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen bg-stone-50 dark:bg-stone-950 overflow-hidden flex items-center"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-stone-50 via-stone-100/50 to-amber-50/30 dark:from-stone-950 dark:via-stone-900/50 dark:to-primary/5" />
      
      {/* Gradient Orbs */}
      <GradientOrb className="w-[800px] h-[800px] bg-gradient-to-br from-primary/25 to-amber-500/15 -top-60 -right-60" />
      <GradientOrb className="w-[600px] h-[600px] bg-gradient-to-tl from-blue-500/15 to-primary/10 bottom-0 -left-40" />
      <GradientOrb className="w-[400px] h-[400px] bg-gradient-to-r from-amber-500/15 to-orange-500/10 top-1/2 left-1/3" />
      
      <AnimatedGrid />

      {/* Floating Elements */}
      <FloatingElement delay={0} x={springX} y={springY} className="absolute top-[15%] right-[20%] z-20 hidden lg:block">
        <div className="p-5 bg-white/90 dark:bg-stone-900/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 dark:border-stone-700/30">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-gradient-to-br from-primary to-amber-500">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="text-xs font-medium text-stone-500 dark:text-stone-400">Response Time</div>
              <div className="text-2xl font-bold text-stone-900 dark:text-white">&lt;5min</div>
            </div>
          </div>
        </div>
      </FloatingElement>
      
      <FloatingElement delay={0.3} x={springX} y={springY} className="absolute top-[40%] right-[8%] z-20 hidden lg:block">
        <div className="p-4 bg-white/90 dark:bg-stone-900/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 dark:border-stone-700/30">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500">
              <Target className="w-5 h-5 text-white" />
            </div>
            <div className="text-sm font-medium text-stone-700 dark:text-stone-300">91% Attribution</div>
          </div>
        </div>
      </FloatingElement>
      
      <FloatingElement delay={0.6} x={springX} y={springY} className="absolute bottom-[25%] right-[18%] z-20 hidden lg:block">
        <div className="p-4 bg-white/90 dark:bg-stone-900/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 dark:border-stone-700/30">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500">
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
            <div className="text-sm font-medium text-stone-700 dark:text-stone-300">+200% Growth</div>
          </div>
        </div>
      </FloatingElement>

      <FloatingElement delay={0.9} x={springX} y={springY} className="absolute top-[60%] left-[5%] z-20 hidden lg:block">
        <div className="p-3 bg-white/90 dark:bg-stone-900/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 dark:border-stone-700/30">
          <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
        </div>
      </FloatingElement>

      <motion.div 
        style={{ y, opacity, scale }}
        className="container-responsive relative z-10"
      >
        <div className="max-w-6xl">
          {/* Animated Badge */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative inline-block"
          >
            <motion.div
              className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary/30 via-amber-500/30 to-primary/30 blur-md"
              animate={{
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
            />
            <span className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/80 dark:bg-stone-900/80 backdrop-blur-sm border border-primary/20 text-primary text-xs font-medium uppercase tracking-wider mb-8">
              <Sparkles className="w-4 h-4" />
              {badge}
            </span>
          </motion.div>

          {/* Main Title with Cinematic Animation */}
          <div className="overflow-hidden">
            <motion.h1
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif text-[clamp(1.5rem,5rem,5rem)] text-stone-900 dark:text-white mb-8 tracking-tight"
            >
              <span className="block overflow-hidden">
                <motion.span
                  initial={{ y: "100%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="block"
                >
                  {title1}
                </motion.span>
              </span>
              {title2 && (
                <span className="block overflow-hidden">
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={{ y: "0%" }}
                    transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="block relative"
                  >
                    <span className="relative z-10 bg-gradient-to-r from-primary via-amber-600 to-orange-700 bg-clip-text text-transparent dark:from-orange-400 dark:via-primary dark:to-amber-300">
                      {title2}
                    </span>
                    <motion.span
                      className="absolute -inset-x-4 bottom-2 h-6 bg-gradient-to-r from-primary/20 via-amber-500/20 to-orange-500/20 blur-xl"
                      animate={{
                        opacity: [0.3, 0.6, 0.3],
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                      }}
                    />
                  </motion.span>
                </span>
              )}
            </motion.h1>
          </div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid md:grid-cols-2 gap-8 md:gap-16 mt-12"
          >
            <p className="text-xl md:text-2xl text-stone-600 dark:text-stone-300 leading-relaxed font-light">
              {p1}
            </p>
            <div className="relative">
              <motion.div 
                className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-amber-500 to-transparent"
                initial={{ height: 0 }}
                animate={{ height: "100%" }}
                transition={{ duration: 1, delay: 1 }}
              />
              <p className="pl-8 text-stone-500 dark:text-stone-400 leading-relaxed">
                {p2}
              </p>
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-16 flex items-center gap-4"
          >
            <div className="relative">
              <div className="w-12 h-px bg-gradient-to-r from-primary to-transparent" />
              <motion.div
                className="absolute top-1/2 left-0 w-1 h-1 rounded-full bg-primary"
                animate={{
                  x: [0, 48, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
            <span className="text-xs uppercase tracking-widest text-stone-400 flex items-center gap-2">
              Scroll to explore
              <ArrowDown className="w-3 h-3 animate-bounce" />
            </span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default BuildHero;
