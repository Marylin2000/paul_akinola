// WorkNextPaths.tsx
"use client";

import { motion } from "framer-motion";
import { ArrowRight, Briefcase, Heart } from "lucide-react";
import Link from "next/link";

const paths = [
  {
    tag: "Work Together",
    title: "The Strategic Layer",
    body: "If you're dealing with this in your team or organization, this is where I help bring clarity to what is actually going on beneath the surface.",
    cta: "Work Together",
    href: "/work-together",
    icon: Briefcase,
    gradient: "from-primary/20 to-amber-500/5",
  },
  {
    tag: "Systems in Life",
    title: "The Integrated Life",
    body: "The way people work is also shaped by what they carry into those systems. Clarity at work often connects to clarity in how we think, respond, and show up.",
    cta: "Systems in Life",
    href: "/inner-life",
    icon: Heart,
    gradient: "from-amber-500/20 to-primary/5",
  },
];

export default function WorkNextPaths() {
  return (
    <section className="relative overflow-hidden border-t border-stone-200/60 bg-white py-24 transition-colors duration-500 dark:border-stone-700/60 dark:bg-stone-900 md:py-32">
      <div className="container-responsive">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-2xl"
        >
          <div className="mb-6 flex items-center gap-4">
            <div className="h-px w-12 bg-gradient-to-r from-primary/60 to-transparent" />
            <span className="text-sm font-medium uppercase tracking-wider text-primary/70">
              Next Paths
            </span>
          </div>
          
          <h2 className="font-serif text-3xl font-medium tracking-tight text-stone-900 dark:text-white sm:text-4xl">
            Where systems thinking meets practical reality.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
          {paths.map((path, index) => {
            const Icon = path.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="group relative"
              >
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${path.gradient} opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100`} />
                
                <Link
                  href={path.href}
                  className="relative flex h-full flex-col rounded-3xl border border-stone-200/60 bg-white/80 p-8 backdrop-blur-sm transition-all duration-300 group-hover:border-primary/20 group-hover:shadow-xl dark:border-stone-700/60 dark:bg-stone-900/80 sm:p-10"
                >
                  <div className="mb-6 flex items-start justify-between">
                    <div className="rounded-xl bg-gradient-to-br from-primary/15 to-amber-500/10 p-3">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-xs font-medium uppercase tracking-wider text-primary/60">
                      {path.tag}
                    </span>
                  </div>
                  
                  <h3 className="mb-4 font-serif text-2xl font-semibold text-stone-900 dark:text-white">
                    {path.title}
                  </h3>
                  
                  <p className="mb-8 flex-1 text-base leading-relaxed text-stone-600 dark:text-stone-300">
                    {path.body}
                  </p>
                  
                  <div className="flex items-center text-sm font-medium text-primary transition-all group-hover:gap-2">
                    <span>{path.cta}</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
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