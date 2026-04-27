"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const values = [
  {
    title: "Clarity over noise",
    description: "I would rather see what is true than move quickly with the wrong assumptions.",
    icon: "M13 10V3L4 14h7v7l9-11h-7z"
  },
  {
    title: "Understanding before action",
    description: "Real change usually starts with seeing what is actually shaping the problem.",
    icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
  },
  {
    title: "Systems over surface fixes",
    description: "Short-term fixes can help, but lasting progress usually depends on what sits underneath.",
    icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
  },
  {
    title: "Growth that can hold",
    description: "I care about change that is not just impressive in the moment, but sustainable over time.",
    icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
  },
  {
    title: "Honesty about what I do not yet understand",
    description: "Part of paying attention is staying teachable.",
    icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477-4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
  },
  {
    title: "The deeper layer matters",
    description: "Not everything shaping a person, a team, or a season is visible on the surface.",
    icon: "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
  }
];

export default function AboutValues({ data }: { data?: any }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.9]);

  const tb = data?.tabs?.[3] || {};
  const vTitle = tb.valuesTitle || "What I care about";
  const dynamicValues = tb.valuesList?.length ? tb.valuesList.map((v: any, i: number) => ({...values[i], ...v})) : values;

  return (
    <section className="relative py-32 lg:py-40 bg-white dark:bg-stone-950 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20 text-center max-w-2xl mx-auto"
          >
            <span className="text-[0.65rem] font-medium uppercase tracking-[0.3em] text-primary/70 mb-4 block">
              Principles
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-stone-900 dark:text-stone-100 mb-6">
              {vTitle}
            </h2>
            <p className="text-stone-600 dark:text-stone-400 italic text-lg">
              A few things keep returning in how I think, write, and work.
            </p>
          </motion.div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dynamicValues.map((value: any, index: number) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative p-8 rounded-3xl bg-stone-50 dark:bg-stone-900/50 border border-stone-200 dark:border-stone-800 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500"
              >
                {/* Icon */}
                <div className="mb-6 w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={value.icon || values[0].icon} />
                  </svg>
                </div>

                {/* Content */}
                <h3 className="font-serif text-xl text-stone-900 dark:text-stone-100 mb-3 group-hover:text-primary transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-stone-600 dark:text-stone-400 leading-relaxed text-sm">
                  {value.description}
                </p>

                {/* Hover Accent */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-3xl" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}