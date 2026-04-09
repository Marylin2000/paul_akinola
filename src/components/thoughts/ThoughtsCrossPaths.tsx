"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const paths = [
  {
    label: "Systems at Work",
    support: "Explore how systems shape performance, decisions, and growth.",
    href: "/work"
  },
  {
    label: "Systems in Life",
    support: "Explore how inner systems shape behaviour, resilience, and meaning.",
    href: "/inner-life"
  },
  {
    label: "About me",
    support: "See the person and convictions behind the writing.",
    href: "/about"
  },
  {
    label: "Work Together",
    support: "Start a conversation if the thinking connects to something real.",
    href: "/work-together"
  }
];

export default function ThoughtsCrossPaths() {
  return (
    <section className="py-24 border-t border-rule bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <header className="mb-16 text-center">
            <h2 className="font-serif text-2xl mb-4 italic">Not sure where to go next?</h2>
          </header>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {paths.map((path, index) => (
              <motion.div
                key={path.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link 
                  href={path.href}
                  className="group block"
                >
                  <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-primary mb-3 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    {path.label}
                  </h3>
                  <p className="text-xs text-foreground/40 leading-relaxed font-light">
                    {path.support}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
