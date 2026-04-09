"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const returns = [
  {
    title: "Notes and reflections",
    body: "Read the ideas behind the site and follow the thinking more deeply.",
    href: "/thoughts",
    label: "Go to Thoughts"
  },
  {
    title: "Systems at Work",
    body: "Explore how systems shape performance, decisions, revenue, and growth.",
    href: "/work",
    label: "Go to Work"
  },
  {
    title: "Systems in Life",
    body: "Explore how inner systems shape behaviour, identity, resilience, faith, and meaning.",
    href: "/inner-life",
    label: "Go to Inner Life"
  }
];

export default function WorkTogetherReturnPaths() {
  return (
    <section className="py-24 border-t border-rule bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <header className="mb-16">
            <h2 className="font-serif text-3xl mb-4 text-foreground/80">Or keep exploring first.</h2>
          </header>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-rule/20 border border-rule/20">
            {returns.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-background p-10 flex flex-col group"
              >
                <h3 className="font-serif text-xl mb-4 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-foreground/50 leading-relaxed font-light mb-8 flex-grow">
                  {item.body}
                </p>
                <Link 
                  href={item.href}
                  className="flex items-center gap-1 text-[0.65rem] font-bold uppercase tracking-widest text-primary/40 hover:text-primary transition-colors"
                >
                  {item.label}
                  <ArrowUpRight className="w-3 h-3" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
