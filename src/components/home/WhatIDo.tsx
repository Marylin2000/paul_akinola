"use client";

import { motion } from "framer-motion";

export default function WhatIDo() {
  const offerings = [
    {
      title: "Individuals",
      description: "Awareness, clarity, direction, growth, and personal transformation."
    },
    {
      title: "Teams",
      description: "Shared purpose, better decisions, aligned effort, and healthier ways of working together."
    },
    {
      title: "Organisations",
      description: "Structure for performance, growth, revenue, and the systems that support better outcomes."
    }
  ];

  return (
    <section id="what-i-do" className="py-24 bg-stone-50 dark:bg-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-2xl text-stone-700 dark:text-stone-200 font-light">
            I help people understand what is shaping their outcomes, at work and in life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {offerings.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-8 bg-white dark:bg-stone-900 rounded-2xl shadow-sm border border-stone-100 dark:border-stone-800 transition-shadow hover:shadow-md"
            >
              <h3 className="text-xl font-semibold mb-4 text-stone-900 dark:text-white font-serif">
                {item.title}
              </h3>
              <p className="text-stone-600 dark:text-stone-400 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
