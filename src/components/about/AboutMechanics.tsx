"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const workAreas = [
  { id: "individuals", label: "Individuals", desc: "Personal clarity & direction" },
  { id: "teams", label: "Teams", desc: "Alignment & dynamics" },
  { id: "orgs", label: "Organizations", desc: "Systems & structure" }
];

export default function AboutMechanics({ data }: { data?: any }) {
  const [activeArea, setActiveArea] = useState("individuals");

  const tb = data?.tabs?.[4] || {};
  const mTitle = tb.mechanicsTitle || "How I work";
  const mP1 = tb.mechanicsP1 || "I work with individuals, teams, and organisations who are trying to make sense of what is really shaping their outcomes.";
  const mP2 = tb.mechanicsP2 || "Sometimes that shows up in performance, growth, revenue, or structure. Sometimes it shows up more personally—clarity, direction, or the tension between what someone intends and how they are actually living.";
  const mQuote = tb.mechanicsQuote || '"I am most useful where something important is happening, but the real issue has not been named clearly enough yet."';
  
  const dynamicAreas = tb.workAreas?.length ? tb.workAreas : workAreas;

  return (
    <section className="relative py-32 lg:py-40 bg-stone-50 dark:bg-stone-950 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20 text-center"
          >
            <span className="text-[0.65rem] font-medium uppercase tracking-[0.3em] text-primary/70 mb-4 block">
              Approach
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-stone-900 dark:text-stone-100">
              {mTitle}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Interactive Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square max-w-lg mx-auto w-full"
            >
              {/* Orbital Animation */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div 
                  className="w-full h-full rounded-full border border-stone-200 dark:border-stone-800"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                />
                <motion.div 
                  className="absolute w-[80%] h-[80%] rounded-full border border-stone-300 dark:border-stone-700"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                />
                <motion.div 
                  className="absolute w-[60%] h-[60%] rounded-full border border-primary/20"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
                
                {/* Center Core */}
                <motion.div 
                  className="absolute w-32 h-32 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 backdrop-blur-xl border border-primary/30 flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <span className="font-serif text-lg text-primary text-center">
                    Systems<br/>Thinking
                  </span>
                </motion.div>

                {/* Orbiting Nodes */}
                {dynamicAreas.map((area: any, index: number) => {
                  const angle = (index * 120) * (Math.PI / 180);
                  const radius = 45;
                  const x = Math.cos(angle) * radius;
                  const y = Math.sin(angle) * radius;
                  
                  return (
                    <motion.div
                      key={area.id}
                      className={`absolute w-24 h-24 rounded-2xl flex flex-col items-center justify-center cursor-pointer transition-all duration-500 ${
                        activeArea === area.id 
                          ? "bg-primary text-white shadow-xl shadow-primary/30" 
                          : "bg-white dark:bg-stone-900 text-stone-600 dark:text-stone-400 shadow-lg"
                      }`}
                      style={{ 
                        left: `calc(50% + ${x}% - 3rem)`, 
                        top: `calc(50% + ${y}% - 3rem)` 
                      }}
                      onClick={() => setActiveArea(area.id)}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="font-serif text-sm font-medium">{area.label}</span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-8"
            >
              <div className="space-y-6 text-lg leading-relaxed text-stone-600 dark:text-stone-400">
                <p>{mP1}</p>
                <p>{mP2}</p>
              </div>

              <motion.div 
                className="p-6 rounded-2xl bg-white dark:bg-stone-900 border-l-4 border-primary shadow-lg"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <p className="font-serif text-xl text-stone-900 dark:text-stone-100 italic">
                  {mQuote}
                </p>
              </motion.div>

              {/* Active Area Detail */}
              <motion.div
                key={activeArea}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-4 text-sm text-stone-500"
              >
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Currently focused on: {dynamicAreas.find((a: any) => a.id === activeArea)?.desc}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
