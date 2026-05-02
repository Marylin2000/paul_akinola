// ProofPoints.tsx
"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import * as Icons from "lucide-react";
import { Briefcase, ChevronRight, Trophy, Building2, TrendingUp } from "lucide-react";
import { buildDefault } from "@/lib/defaults-cms";
import type { BuildData } from "@/lib/types-cms";

interface Stat {
  label: string;
  value: string;
  suffix: string;
  icon: any;
  gradient: string;
}

interface Industry {
  name: string;
  company: string;
  color: string;
  icon: any;
}

const stats: Stat[] = [
  { label: "Years Experience", value: "9", suffix: "+", icon: Trophy, gradient: "from-amber-500 to-orange-600" },
  { label: "Systems Built", value: "20", suffix: "+", icon: TrendingUp, gradient: "from-emerald-500 to-teal-600" },
  { label: "Companies", value: "7", suffix: "+", icon: Building2, gradient: "from-blue-500 to-indigo-600" },
  { label: "Industries", value: "7", suffix: "", icon: Briefcase, gradient: "from-purple-500 to-pink-600" }
];

const industries: Industry[] = [
  { name: "FinTech", company: "OZÉ Inc", color: "from-emerald-500 to-cyan-500", icon: Briefcase },
  { name: "HealthTech", company: "Reliance Health", color: "from-blue-500 to-indigo-500", icon: Briefcase },
  { name: "HR Tech", company: "OnHand", color: "from-purple-500 to-pink-500", icon: Briefcase },
  { name: "Analytics", company: "KX Systems", color: "from-orange-500 to-red-500", icon: Briefcase },
  { name: "E-commerce", company: "Possible & Affordable", color: "from-rose-500 to-pink-500", icon: Briefcase },
  { name: "PaaS", company: "Veefunnels", color: "from-cyan-500 to-blue-500", icon: Briefcase },
  { name: "RevOps", company: "MartandMall", color: "from-amber-500 to-orange-500", icon: Briefcase }
];

function AnimatedCounter({ gradient, isActive, suffix, value }: { gradient: string; isActive: boolean; suffix: string; value: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isActive) return;

    const targetValue = parseInt(value, 10);
    if (Number.isNaN(targetValue)) {
      setCount(0);
      return;
    }

    let frame = 0;
    const totalFrames = 45;
    const animate = () => {
      frame += 1;
      const progress = Math.min(frame / totalFrames, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(targetValue * eased));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    const animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isActive, value]);

  return (
    <span className={`font-serif text-7xl md:text-8xl lg:text-9xl font-bold bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>
      {count}{suffix}
    </span>
  );
}

const ProofPoints = ({ data = buildDefault }: { data?: BuildData }) => {
  const tTitle = data.proofTitle || buildDefault.proofTitle;
  const dynamicStats = data.statsList?.length ? data.statsList : buildDefault.statsList;
  const dynamicIndustries = data.industriesList?.length ? data.industriesList : buildDefault.industriesList;

  const containerRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const statsInView = useInView(statsRef, { once: true, amount: 0.1, margin: "0px 0px -10% 0px" });
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section ref={containerRef} className="relative py-32 bg-stone-950 text-white overflow-hidden">
      {/* Animated Background */}
      <motion.div style={{ y: backgroundY }} className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-stone-950 via-stone-900 to-stone-950" />
        
        {/* Animated grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_50%,black,transparent)]" />
        
        {/* Glowing orbs */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-7xl"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/15 rounded-full blur-7xl"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.05, 0.15, 0.05] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-7xl"
        />
      </motion.div>

      <div className="container-responsive relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 lg:mb-28"
        >
          <div className="flex items-center gap-4 mb-6">
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="h-px w-16 bg-gradient-to-r from-primary to-transparent origin-left"
            />
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">
              03 — Proof Points
            </span>
          </div>
          
          <div className="overflow-hidden">
            <motion.h2 
              initial={{ y: "100%" }}
              whileInView={{ y: "0%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-serif text-[clamp(2.5rem,6vw,5rem)] leading-[1.1]"
            >
              {tTitle}
            </motion.h2>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <div ref={statsRef} className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-24 lg:mb-32">
          {dynamicStats.map((stat: any, i: number) => {
            const Icon = (Icons as any)[stat.icon] || Icons.Trophy;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-white/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity blur" />
                <div className="relative p-6 lg:p-8 text-center bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10">
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${stat.gradient} mb-6`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </motion.div>
                  
                  <div className="mb-3">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix || ""} gradient={stat.gradient} isActive={statsInView} />
                  </div>
                  
                  <div className="text-stone-400 text-xs uppercase tracking-widest font-medium">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Industries */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-stone-500 mb-10 text-center lg:text-left">
            Companies by Industry
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {dynamicIndustries.map((item: any, i: number) => {
              const Icon = (Icons as any)[item.icon] || Icons.Briefcase;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ x: 6 }}
                  className="group relative"
                >
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${item.color} rounded-2xl opacity-0 group-hover:opacity-30 transition-opacity blur`} />
                  <div className="relative flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg`}
                    >
                      <Icon className="w-5 h-5 text-white" />
                    </motion.div>
                    <div className="flex-1">
                      <div className="text-stone-400 text-xs mb-1">{item.name}</div>
                      <div className="text-white font-medium text-sm group-hover:text-primary transition-colors">
                        {item.company}
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-stone-600 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProofPoints;
