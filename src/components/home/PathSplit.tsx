"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Briefcase, Heart } from "lucide-react";

export default function PathSplit() {
  const paths = [
    {
      title: "Systems at Work",
      description: "How systems shape performance, decisions, revenue, and growth. Explore the structures beneath execution and the forces that shape results in organisations.",
      ctaLabel: "Explore Work",
      ctaDestination: "/work",
      icon: Briefcase
    },
    {
      title: "Systems in Life",
      description: "How inner systems shape behaviour, resilience, identity, faith, and meaning. Explore what is happening beneath how you live, respond, and grow.",
      ctaLabel: "Explore Inner Life",
      ctaDestination: "/inner-life",
      icon: Heart
    }
  ];

  return (
    <section id="path-split" className="py-24 bg-white dark:bg-stone-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-stone-900 dark:text-white tracking-tight font-serif">
            Choose where to start.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {paths.map((path, index) => {
            const Icon = path.icon;
            return (
              <motion.div
                key={path.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link 
                  href={path.ctaDestination}
                  className="group block h-full p-10 md:p-12 bg-stone-50 dark:bg-stone-800 rounded-3xl transition-all duration-300 hover:bg-stone-100 hover:shadow-xl dark:hover:bg-stone-700"
                >
                  <div className="mb-8 p-4 bg-white dark:bg-stone-900 inline-block rounded-2xl shadow-sm text-stone-800 dark:text-stone-200 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-stone-900 dark:text-white font-serif">
                    {path.title}
                  </h3>
                  <p className="text-stone-600 dark:text-stone-400 leading-relaxed mb-10 min-h-[80px]">
                    {path.description}
                  </p>
                  <div className="flex items-center text-primary font-medium">
                    {path.ctaLabel}
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
