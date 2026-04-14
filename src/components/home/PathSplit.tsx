// PathSplit.tsx
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
      icon: Briefcase,
      gradient: "from-primary/20 via-primary/10 to-amber-500/5",
      accentColor: "primary",
    },
    {
      title: "Systems in Life",
      description: "How inner systems shape behaviour, resilience, identity, faith, and meaning. Explore what is happening beneath how you live, respond, and grow.",
      ctaLabel: "Explore Inner Life",
      ctaDestination: "/inner-life",
      icon: Heart,
      gradient: "from-amber-500/20 via-orange-500/10 to-primary/5",
      accentColor: "amber",
    }
  ];

  return (
    <section id="path-split" className="relative overflow-hidden bg-white py-24 dark:bg-stone-900 md:py-32">
      <div className="container-responsive">
        <motion.div 
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-3xl font-medium tracking-tight text-stone-900 dark:text-white sm:text-4xl md:text-5xl">
            Choose where to start.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-stone-500 dark:text-stone-400">
            Two paths, one destination: clarity and meaningful change.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
          {paths.map((path, index) => {
            const Icon = path.icon;
            return (
              <motion.div
                key={path.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                whileHover={{ y: -6 }}
                className="group relative"
              >
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${path.gradient} opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100`} />
                
                <Link 
                  href={path.ctaDestination}
                  className="relative block h-full overflow-hidden rounded-3xl border border-stone-200/60 bg-white/80 p-8 backdrop-blur-sm transition-all duration-300 group-hover:border-primary/30 group-hover:shadow-2xl dark:border-stone-700/60 dark:bg-stone-800/60 sm:p-10 lg:p-12"
                >
                  <div className="mb-8 flex items-start justify-between">
                    <div className="rounded-2xl bg-gradient-to-br from-primary/15 to-amber-500/10 p-4 transition-all duration-300 group-hover:scale-110 group-hover:from-primary/25 group-hover:to-amber-500/20">
                      <Icon className="h-7 w-7 text-primary" />
                    </div>
                    <span className="font-mono text-sm text-stone-400 dark:text-stone-500">
                      0{index + 1}
                    </span>
                  </div>
                  
                  <h3 className="mb-4 font-serif text-2xl font-semibold text-stone-900 dark:text-white sm:text-3xl">
                    {path.title}
                  </h3>
                  
                  <p className="mb-8 text-base leading-relaxed text-stone-600 dark:text-stone-300 sm:text-lg">
                    {path.description}
                  </p>
                  
                  <div className="flex items-center text-base font-medium text-primary transition-all group-hover:gap-3">
                    <span>{path.ctaLabel}</span>
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-2" />
                  </div>
                  
                  <div className="absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-gradient-to-br from-primary/5 to-transparent blur-2xl transition-all duration-500 group-hover:scale-150 group-hover:bg-primary/10" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}