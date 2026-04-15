// ToolsBuilt.tsx
"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Award, Bot, BarChart3, Layers, Sparkles } from "lucide-react";

interface Tool {
  title: string;
  description: string;
  icon: any;
  tags: string[];
  gradient: string;
}

const tools: Tool[] = [
  {
    title: "PQL → MQA Scoring Model",
    description: "Lead qualification progression calculator based on product usage and firmographics.",
    icon: Award,
    tags: ["Scoring", "Qualification"],
    gradient: "from-violet-500 to-purple-600"
  },
  {
    title: "GTM AI Prompts Library",
    description: "50+ prompts for advanced research and personalization at scale.",
    icon: Bot,
    tags: ["AI", "Prompts"],
    gradient: "from-cyan-500 to-blue-600"
  },
  {
    title: "Multi-Touch Attribution",
    description: "Channel attribution mapped to real buying behavior and pipeline impact.",
    icon: BarChart3,
    tags: ["Analytics", "Attribution"],
    gradient: "from-emerald-500 to-teal-600"
  },
  {
    title: "Lifecycle Nurture Framework",
    description: "Behavioral-triggered email sequences designed for conversion and retention.",
    icon: Layers,
    tags: ["Email", "Automation"],
    gradient: "from-orange-500 to-red-600"
  }
];

const ToolsBuilt = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"]
  });
  
  const x = useTransform(scrollYProgress, [0, 0.5], ["5%", "-15%"]);

  return (
    <section ref={scrollRef} className="relative py-32 bg-white dark:bg-stone-900 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-stone-50/50 via-transparent to-stone-50/50 dark:from-stone-950/50 dark:to-stone-950/50" />
      
      <div className="container-responsive">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 lg:mb-20 max-w-3xl"
        >
          <div className="flex items-center gap-4 mb-6">
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="h-px w-16 bg-gradient-to-r from-primary to-transparent origin-left"
            />
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary/70">
              04 — Tools I've Built
            </span>
          </div>
          
          <div className="overflow-hidden">
            <motion.h2 
              initial={{ y: "100%" }}
              whileInView={{ y: "0%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-serif text-[clamp(2.5rem,6vw,5rem)] leading-[1.1] text-stone-900 dark:text-white"
            >
              Frameworks and
              <span className="block relative">
                <span className="relative z-10 bg-gradient-to-r from-primary via-amber-600 to-orange-700 bg-clip-text text-transparent dark:from-orange-400 dark:via-primary dark:to-amber-300">
                  templates
                </span>
                <motion.span
                  className="absolute -inset-x-4 bottom-2 h-6 bg-gradient-to-r from-primary/20 via-amber-500/20 to-orange-500/20 blur-xl"
                  animate={{ opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </span>
            </motion.h2>
          </div>
        </motion.div>
      </div>

      {/* Horizontal Scrolling Cards */}
      <motion.div style={{ x }} className="flex gap-5 lg:gap-6 px-4 sm:px-6 lg:px-8">
        {tools.map((tool, i) => {
          const Icon = tool.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="flex-shrink-0 w-[360px] sm:w-[400px] lg:w-[440px] group"
            >
              <div className="relative h-full bg-white dark:bg-stone-900 rounded-3xl p-7 lg:p-8 border border-stone-200/60 dark:border-stone-700/60 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
                {/* Animated gradient line */}
                <motion.div 
                  className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${tool.gradient}`}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                  style={{ transformOrigin: "left" }}
                />
                
                {/* Hover gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${tool.gradient} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-500`} />
                
                {/* Icon */}
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${tool.gradient} mb-6 shadow-lg`}
                >
                  <Icon className="w-6 h-6 text-white" />
                </motion.div>

                {/* Tags */}
                <div className="flex gap-2 mb-4">
                  {tool.tags.map((tag, ti) => (
                    <motion.span 
                      key={ti}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + ti * 0.1 }}
                      className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium border border-primary/20"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>

                {/* Content */}
                <h3 className="font-serif text-2xl mb-3 text-stone-900 dark:text-white group-hover:text-primary transition-colors">
                  {tool.title}
                </h3>
                <p className="text-stone-600 dark:text-stone-400 leading-relaxed mb-8">
                  {tool.description}
                </p>

                {/* Action */}
                <motion.button 
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-2 text-primary font-medium group/btn"
                >
                  <span>Explore</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </motion.button>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default ToolsBuilt;