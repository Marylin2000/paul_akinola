"use client";

import { motion } from "framer-motion";

export default function Recognition() {
  const lines = [
    "Performance drops, but the issue is not always effort.",
    "Growth slows, but the issue is not always ambition.",
    "Decisions feel unclear, but the issue is not always intelligence."
  ];

  return (
    <section id="recognition" className="py-32 bg-stone-100 dark:bg-stone-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          <h2 className="text-3xl md:text-5xl font-semibold text-stone-900 dark:text-white tracking-tight mb-16 text-center font-serif">
            Most problems do not start<br className="hidden md:block" /> where they show up.
          </h2>

          <div className="space-y-8 max-w-3xl mx-auto border-l-4 border-stone-300 dark:border-stone-700 pl-8 md:pl-12">
            {lines.map((line, index) => (
              <motion.p 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 + (index * 0.1) }}
                className="text-xl md:text-2xl text-stone-700 dark:text-stone-300 font-light"
              >
                {line}
              </motion.p>
            ))}
          </div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-lg md:text-xl text-stone-600 dark:text-stone-400 max-w-3xl mx-auto text-center mt-16 italic"
          >
            Something is happening beneath the surface, and without clarity, it is hard to fix what you cannot fully see.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
