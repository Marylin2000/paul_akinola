"use client";

import { motion } from "framer-motion";

const bodySentences = [
  "The systems around you shape how you perform.",
  "The systems within you shape how you decide, respond, and grow.",
  "When you see both clearly, change becomes possible.",
] as const;

export default function CoreLens() {
  return (
    <section id="core-lens" className="py-24 bg-white dark:bg-stone-900">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="mb-10 font-serif text-3xl font-semibold tracking-tight text-stone-900 dark:text-white md:mb-12 md:text-4xl">
            Transformation starts with clarity.
          </h2>
          <div className="mx-auto flex max-w-3xl flex-col gap-6 md:gap-8">
            {bodySentences.map((sentence) => (
              <p
                key={sentence}
                className="text-xl font-light  text-stone-600 dark:text-stone-300 md:text-2xl"
              >
                {sentence}
              </p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
