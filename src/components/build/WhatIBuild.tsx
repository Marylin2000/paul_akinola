// WhatIBuild.tsx
"use client";

import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { buildDefault } from "@/lib/defaults-cms";
import type { BuildData } from "@/lib/types-cms";

const WhatIBuild = ({ data = buildDefault }: { data?: BuildData }) => {
  const tTitle = data.whatIBuildTitle || buildDefault.whatIBuildTitle;
  const dynamicItems = data.buildItems?.length ? data.buildItems : buildDefault.buildItems;

  return (
    <section className="relative py-32 bg-stone-50 dark:bg-stone-950 overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(154,52,18,0.08)_1px,transparent_0)] bg-[size:48px_48px]"
        />
      </div>

      {/* Glowing orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-7xl"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-amber-500/10 rounded-full blur-7xl"
        />
      </div>

      <div className="container-responsive relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 lg:mb-24 max-w-3xl"
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
              02 — What I Build
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

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 auto-rows-[280px]">
          {dynamicItems.map((item: any, i: number) => {
            const IconComponent = (Icons as any)[item.icon] || Icons.Database;
            const gridClass = item.size === "large" 
              ? "md:col-span-2 lg:col-span-2 md:row-span-2" 
              : item.size === "medium"
              ? "md:col-span-2 lg:col-span-2"
              : "";
            
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6 }}
                className={`group relative ${gridClass}`}
              >
                <div className="relative h-full bg-white dark:bg-stone-900 rounded-3xl p-6 lg:p-8 border border-stone-200/60 dark:border-stone-700/60 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                  {/* Animated gradient overlay */}
                  <motion.div 
                    className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-[0.06] transition-opacity duration-500`}
                  />
                  
                  {/* Corner glow */}
                  <div className={`absolute -bottom-20 -right-20 w-40 h-40 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 rounded-full blur-3xl transition-opacity duration-700`} />
                  
                  {/* Icon */}
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${item.gradient} mb-5 shadow-lg`}
                  >
                    <IconComponent className="w-6 h-6 text-white" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="font-serif text-xl lg:text-2xl mb-3 text-stone-900 dark:text-white group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-stone-600 dark:text-stone-400 leading-relaxed text-sm lg:text-base">
                    {item.description}
                  </p>

                  {/* Hover Arrow */}
                  <motion.div 
                    initial={{ opacity: 0, x: 10 }}
                    whileHover={{ opacity: 1, x: 0 }}
                    className="absolute bottom-6 right-6"
                  >
                    <div className={`p-2 rounded-full bg-gradient-to-br ${item.gradient} shadow-lg`}>
                      <Icons.ArrowUpRight className="w-5 h-5 text-white" />
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhatIBuild;
