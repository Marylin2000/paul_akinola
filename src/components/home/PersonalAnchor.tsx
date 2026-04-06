"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function PersonalAnchor() {
  return (
    <section id="personal-anchor" className="py-32 bg-stone-50 dark:bg-stone-950">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl md:text-3xl font-medium text-stone-900 dark:text-white tracking-tight mb-8 font-serif">
            This is where I think, write, and build.
          </h2>
          <p className="text-lg md:text-xl text-stone-600 dark:text-stone-400 font-light leading-relaxed mb-12 max-w-2xl mx-auto">
            I work at the intersection of systems, clarity, growth, and inner life. This site brings those worlds together, from revenue systems and organisational design to identity, faith, and the deeper patterns that shape how we live.
          </p>
          <Link 
            href="/about"
            className="inline-flex items-center justify-center px-8 py-3 bg-white dark:bg-stone-900 text-stone-900 dark:text-white border border-stone-200 dark:border-stone-800 rounded-full font-medium transition-colors hover:bg-stone-50 dark:hover:bg-stone-800"
          >
            About Paul
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
