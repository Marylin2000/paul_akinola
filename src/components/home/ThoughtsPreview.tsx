"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ThoughtsPreview() {
  const thoughts = [
    {
      category: "Work",
      title: "Why pipeline problems rarely start in the pipeline",
      excerpt: "Pipeline weakness is often the visible result of poor signal design, weak handoffs, and systems that were never built for clarity.",
      destination: "/thoughts"
    },
    {
      category: "Life",
      title: "The patterns beneath behaviour",
      excerpt: "Not everything can be explained by willpower. Some of what shapes us sits deeper than habits and shows up in how we respond to pressure, fear, and uncertainty.",
      destination: "/thoughts"
    },
    {
      category: "Core",
      title: "Not everything shaping a life is visible",
      excerpt: "Some realities are structural. Some are internal. Some are spiritual. Clarity begins when we stop reducing life to only what can be measured.",
      destination: "/thoughts"
    }
  ];

  return (
    <section id="thoughts-preview" className="py-24 bg-white dark:bg-stone-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="mb-16 text-center md:text-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-stone-900 dark:text-white tracking-tight mb-4 font-serif">
            A few places to start.
          </h2>
          <p className="text-xl text-stone-600 dark:text-stone-400 font-light max-w-2xl mx-auto md:mx-0">
            If you want to go deeper, start with the thinking behind the work.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
          {thoughts.map((thought, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link 
                href={thought.destination}
                className="group block h-full py-2"
              >
                <div className="text-sm tracking-widest text-stone-400 dark:text-stone-500 mb-3">
                  {thought.category}
                </div>
                <h3 className="text-xl font-medium text-stone-900 dark:text-stone-100 mb-4 group-hover:underline decoration-stone-300 dark:decoration-stone-600 underline-offset-4 decoration-2 font-serif">
                  {thought.title}
                </h3>
                <p className="text-stone-600 dark:text-stone-400 font-light leading-relaxed mb-6">
                  {thought.excerpt}
                </p>
                <div className="flex items-center text-sm font-medium text-stone-900 dark:text-white pb-2 border-b border-transparent group-hover:border-stone-900 dark:group-hover:border-white inline-flex transition-colors">
                  Read more
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
