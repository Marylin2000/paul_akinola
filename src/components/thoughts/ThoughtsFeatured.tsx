"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const featured = [
  {
    title: "When pipeline volume hides weak signal",
    excerpt: "A full pipeline can still be a weak pipeline when the signals underneath it do not support good decisions.",
    tag: "Work",
    href: "/thoughts/when-pipeline-volume-hides-weak-signal"
  },
  {
    title: "Why inconsistency is rarely the real problem",
    excerpt: "What looks like inconsistency is often a pattern that sits deeper than the plan you keep trying to follow.",
    tag: "Life",
    href: "/thoughts/why-inconsistency-is-rarely-the-real-problem"
  },
  {
    title: "What changes when you start seeing systems",
    excerpt: "The moment you stop treating outcomes as isolated events, you start seeing what is really shaping them.",
    tag: "Core",
    href: "/thoughts/what-changes-when-you-start-seeing-systems"
  },
  {
    title: "Clarity is not the end goal. It is the beginning.",
    excerpt: "Clarity matters because it changes how you respond, what you build, and what becomes possible next.",
    tag: "Core",
    href: "/thoughts/clarity-is-not-the-end-goal"
  }
];

export default function ThoughtsFeatured() {
  return (
    <section className="py-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <header className="mb-20">
          <h2 className="font-serif text-3xl mb-4">A few thoughts to start with</h2>
          <div className="w-12 h-px bg-primary/40" />
        </header>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featured.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link 
                href={item.href}
                className="group block p-8 h-full border border-rule/30 hover:border-primary/40 bg-background hover:bg-stone-50/50 dark:hover:bg-stone-900/20 transition-all duration-500 rounded-sm"
              >
                <span className="inline-block px-2 py-0.5 mb-6 text-[0.6rem] font-bold uppercase tracking-widest bg-stone-100 dark:bg-stone-800 text-foreground/60 transition-colors group-hover:bg-primary/10 group-hover:text-primary">
                  {item.tag}
                </span>
                <h3 className="font-serif text-lg mb-4 leading-tight group-hover:text-primary transition-colors min-h-[3rem]">
                  {item.title}
                </h3>
                <p className="text-sm text-foreground/50 leading-relaxed mb-8 line-clamp-3 font-light">
                  {item.excerpt}
                </p>
                <div className="mt-auto flex items-center gap-1.5 text-[0.6rem] font-bold uppercase tracking-[0.15em] text-primary/40 group-hover:text-primary transition-colors">
                  Read Path
                  <ArrowUpRight className="w-3 h-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
