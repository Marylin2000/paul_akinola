"use client";

import { motion } from "framer-motion";

export default function CoreLens() {
  return (
    <section id="core-lens" className="py-24 bg-white dark:bg-stone-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-stone-900 dark:text-white tracking-tight font-serif">
            Transformation starts with clarity.
          </h2>
          <p className="text-xl md:text-2xl text-stone-600 dark:text-stone-300 leading-relaxed max-w-3xl mx-auto font-light">
            The systems around you shape how you perform. The systems within you shape how you decide, respond, and grow. When you see both clearly, change becomes possible.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
