// SystemStories.tsx
"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import * as Icons from "lucide-react";
import { buildDefault } from "@/lib/defaults-cms";
import type { BuildData } from "@/lib/types-cms";

const SystemStories = ({ data = buildDefault }: { data?: BuildData }) => {
  const tTitle = data.storiesTitle || buildDefault.storiesTitle;
  const dynamicStories = data.storiesList?.length ? data.storiesList : buildDefault.storiesList;

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section ref={containerRef} className="relative py-32 bg-white dark:bg-stone-900 overflow-hidden">
      {/* Animated Background */}
      <motion.div style={{ y: backgroundY }} className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-stone-50/50 via-transparent to-stone-50/50 dark:from-stone-950/50 dark:to-stone-950/50" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      </motion.div>

      {/* Floating orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-40 -left-20 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl"
        />
      </div>

      <div className="container-responsive relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 lg:mb-24"
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
              01 — System Stories
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
              {tTitle}
            </motion.h2>
          </div>
        </motion.div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {dynamicStories.map((story: any, i: number) => {
            const IconComponent = (Icons as any)[story.icon] || Icons.Sparkles;
            const isLarge = i === 0 || i === 3;
            const storyId = i + 1;
            
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                className={`group relative ${isLarge ? 'lg:col-span-1' : ''} ${i === 0 ? 'lg:translate-y-0' : i === 3 ? 'lg:-translate-y-8' : ''}`}
              >
                <div className="relative h-full bg-white dark:bg-stone-900 rounded-3xl border border-stone-200/60 dark:border-stone-700/60 shadow-xl hover:shadow-2xl transition-all duration-700 overflow-hidden">
                  {/* Animated gradient line */}
                  <motion.div 
                    className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${story.gradient}`}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 + i * 0.1 }}
                    style={{ transformOrigin: "left" }}
                  />
                  
                  {/* Hover gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${story.gradient} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-700`} />
                  
                  {/* Background number */}
                  <div className="absolute top-6 right-6 text-8xl font-serif font-bold text-stone-100 dark:text-stone-800 select-none">
                    0{storyId}
                  </div>
                  
                  <div className="relative p-8 lg:p-10">
                    {/* Icon */}
                    <motion.div 
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${story.gradient} mb-6 shadow-lg`}
                    >
                      <IconComponent className="w-6 h-6 text-white" />
                    </motion.div>

                    {/* Title */}
                    <h3 className="font-serif text-2xl lg:text-3xl mb-8 text-stone-900 dark:text-white group-hover:text-primary transition-colors leading-tight">
                      {story.title}
                    </h3>

                    {/* Pain Point */}
                    <div className="relative pl-6 border-l-2 border-red-400/30 mb-6">
                      <span className="absolute left-0 top-2 w-2 h-2 rounded-full bg-red-400 -translate-x-[5px]">
                        <span className="absolute inset-0 rounded-full bg-red-400 animate-ping" />
                      </span>
                      <span className="text-xs font-bold uppercase tracking-wider text-red-400 mb-2 block">
                        Pain Point
                      </span>
                      <p className="text-stone-600 dark:text-stone-300 leading-relaxed">
                        {story.pain}
                      </p>
                    </div>

                    {/* Solution */}
                    <div className="relative pl-6 border-l-2 border-emerald-400/30 mb-8">
                      <span className="absolute left-0 top-2 w-2 h-2 rounded-full bg-emerald-400 -translate-x-[5px]">
                        <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping" />
                      </span>
                      <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-2 block">
                        Solution
                      </span>
                      <p className="text-stone-700 dark:text-stone-200 font-medium leading-relaxed">
                        {story.change}
                      </p>
                    </div>

                    {/* Metrics */}
                    <div className="flex flex-wrap gap-2 pt-6 border-t border-stone-200 dark:border-stone-800">
                      {story.metrics?.map((metric: { value: string }, mi: number) => (
                        <motion.span 
                          key={mi}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.5 + mi * 0.1 }}
                          whileHover={{ scale: 1.05 }}
                          className={`px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r ${story.gradient} bg-opacity-10 text-white`}
                          style={{
                            background: `linear-gradient(to right, var(--${story.accentColor}-500), var(--${story.accentColor}-600))`,
                            backgroundClip: "text",
                            WebkitBackgroundClip: "text",
                            color: "transparent",
                          }}
                        >
                          <span className="bg-white/10 dark:bg-stone-900/50 px-3 py-1 rounded-full backdrop-blur-sm">
                            {metric.value}
                          </span>
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SystemStories;
