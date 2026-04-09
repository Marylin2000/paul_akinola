"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const paths = [
  {
    title: "Systems at Work",
    description: "How systems shape performance, decisions, growth, and what is happening beneath visible results.",
    href: "/work",
    label: "Go to Work"
  },
  {
    title: "Systems in Life",
    description: "How inner systems shape behaviour, resilience, identity, direction, and meaning.",
    href: "/inner-life",
    label: "Go to Inner Life"
  },
  {
    title: "Notes and reflections",
    description: "Writing, observations, and connected thinking across work, life, and the deeper layer underneath.",
    href: "/thoughts",
    label: "Go to Thoughts"
  },
  {
    title: "Work Together",
    description: "If this connects with something real you are working through, this is where a conversation can begin.",
    href: "/work-together",
    label: "Go to Work Together"
  }
];

export default function AboutNextPaths() {
  return (
    <section className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <header className="mb-20">
            <h2 className="font-serif text-3xl mb-4">Where to go next</h2>
            <p className="text-foreground/50 italic">
              You can keep exploring from whichever door feels closest to where you are.
            </p>
          </header>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-rule/20 border border-rule/20 overflow-hidden rounded-sm">
            {paths.map((path, index) => (
              <Link 
                key={path.title} 
                href={path.href}
                className="group relative bg-background p-10 transition-colors duration-500 hover:bg-stone-50 dark:hover:bg-stone-900/40 overflow-hidden"
              >
                <div className="relative z-10 flex flex-col h-full">
                  <h3 className="font-serif text-2xl mb-4 group-hover:text-primary transition-colors duration-500">
                    {path.title}
                  </h3>
                  <p className="text-foreground/60 leading-relaxed mb-8 font-light flex-grow">
                    {path.description}
                  </p>
                  <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.15em] text-primary transition-all duration-300 transform group-hover:translate-x-1">
                    {path.label}
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
                
                {/* Micro-accent */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
