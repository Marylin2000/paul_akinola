"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const startItems = [
  {
    num: "01",
    title: "When you start seeing systems",
    slug: "start-seeing-systems"
  },
  {
    num: "02",
    title: "It's the same lack of clarity- showing up at work and in life",
    slug: "clarity-showing-up-work-life"
  },
  {
    num: "03",
    title: "Clarity is never the end goal. It is the beginning",
    slug: "clarity-not-end-goal"
  }
];

export default function ThoughtsStartHere() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-24 px-6 bg-white dark:bg-stone-950 transition-colors">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-16">
          <h2 className="text-sm font-medium text-stone-400 dark:text-stone-600 uppercase tracking-widest mb-6">
            Orientation
          </h2>
          <p className="text-2xl md:text-3xl font-serif text-stone-900 dark:text-stone-100 leading-snug">
            If you are new to the systems lens, these three reflections offer a helpful foundation for how to read everything else on this site.
          </p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-12"
        >
          {startItems.map((itemObj) => (
            <motion.div key={itemObj.num} variants={item}>
              <Link 
                href={`/thoughts/${itemObj.slug}`}
                className="group block"
              >
                <div className="text-xs font-bold text-stone-300 dark:text-stone-800 mb-4 transition-colors group-hover:text-stone-400 dark:group-hover:text-stone-700">
                  {itemObj.num}
                </div>
                <h3 className="text-2xl font-serif text-stone-900 dark:text-stone-100 group-hover:text-stone-600 dark:group-hover:text-stone-300 transition-colors leading-tight mb-4">
                  {itemObj.title}
                </h3>
                <span className="flex items-center text-xs font-medium text-stone-400 dark:text-stone-600 opacity-0 group-hover:opacity-100 transition-opacity">
                  Read reflection <ArrowRight className="ml-2 w-3 h-3" />
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
