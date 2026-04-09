"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const entryPoints = [
  {
    title: "If you're thinking about work",
    description: "Systems, performance, decisions, and how results are actually shaped.",
    cta: "Go deeper into Work thinking",
    href: "/thoughts?category=work",
    suggestions: [
      "When pipeline volume hides weak signal",
      "Why busy teams still lose clarity",
      "Growth motion only works when it fits the business"
    ]
  },
  {
    title: "If you're thinking about life",
    description: "Clarity, behaviour, identity, and what's happening beneath how you feel and respond.",
    cta: "Go deeper into Life thinking",
    href: "/thoughts?category=life",
    suggestions: [
      "Why inconsistency is rarely the real problem",
      "What hope is doing underneath confusion",
      "When clarity is blocked by the system beneath it"
    ]
  },
  {
    title: "If you want the bigger picture",
    description: "Where work and life connect through systems, clarity, and growth.",
    cta: "See the full picture",
    href: "/thoughts?category=core",
    suggestions: [
      "What changes when you start seeing systems",
      "The same lack of clarity shows up in work and life",
      "Clarity is not the end goal. It is the beginning."
    ]
  }
];

export default function ThoughtsStartHere() {
  return (
    <section className="py-24 border-y border-rule bg-stone-50/50 dark:bg-stone-900/10">
      <div className="container mx-auto px-6">
        <header className="max-w-xl mx-auto text-center mb-16">
          <h2 className="font-serif text-3xl mb-4">Start here</h2>
          <p className="text-foreground/50 italic font-light">
            Choose the entry point that feels closest to what you're trying to understand.
          </p>
        </header>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-rule/20 border border-rule/20">
          {entryPoints.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-background p-10 flex flex-col group h-full"
            >
              <h3 className="font-serif text-xl mb-4 group-hover:text-primary transition-colors duration-500 min-h-[3.5rem] flex items-center">
                {point.title}
              </h3>
              <p className="text-foreground/60 leading-relaxed mb-8 font-light text-sm flex-grow">
                {point.description}
              </p>
              
              <Link 
                href={point.href}
                className="flex items-center gap-2 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-primary mb-10 hover:gap-3 transition-all"
              >
                {point.cta}
                <ArrowRight className="w-3 h-3" />
              </Link>
              
              <div className="pt-8 border-t border-rule space-y-4">
                <span className="text-[0.6rem] font-medium uppercase tracking-widest text-foreground/30">
                  Related
                </span>
                <ul className="space-y-3">
                  {point.suggestions.map((suggestion) => (
                    <li key={suggestion}>
                      <Link 
                        href={`/thoughts/${suggestion.toLowerCase().replace(/ /g, '-')}`}
                        className="text-[0.8rem] text-foreground/50 hover:text-primary transition-colors cursor-pointer line-clamp-1"
                      >
                        {suggestion}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
