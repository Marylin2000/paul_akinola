"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function WorkTogetherContext() {
  return (
    <section className="py-24 border-t border-rule bg-stone-50/50 dark:bg-stone-900/10">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <header className="mb-16">
            <h2 className="font-serif text-3xl mb-4">Where this usually shows up</h2>
          </header>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Work Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-background p-10 border border-rule/30 group hover:border-primary/40 transition-all duration-500"
            >
              <h3 className="font-serif text-2xl mb-6">In work</h3>
              <p className="text-foreground/60 leading-relaxed font-light mb-10 text-sm">
                This may show up in performance, growth, revenue, CRM structure, team alignment, leadership decisions, or the gap between activity and real outcomes.
              </p>
              <Link 
                href="/work"
                className="flex items-center gap-2 text-[0.7rem] font-bold uppercase tracking-[0.2em] text-primary transition-all group-hover:gap-3"
              >
                See Systems at Work
                <ArrowRight className="w-3 h-3" />
              </Link>
            </motion.div>
            
            {/* Life Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-background p-10 border border-rule/30 group hover:border-primary/40 transition-all duration-500"
            >
              <h3 className="font-serif text-2xl mb-6">In life</h3>
              <p className="text-foreground/60 leading-relaxed font-light mb-10 text-sm">
                This may show up in clarity, identity, internal conflict, repeated patterns, direction, faith, hope, or the sense that something deeper is shaping how you respond.
              </p>
              <Link 
                href="/inner-life"
                className="flex items-center gap-2 text-[0.7rem] font-bold uppercase tracking-[0.2em] text-primary transition-all group-hover:gap-3"
              >
                See Systems in Life
                <ArrowRight className="w-3 h-3" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
