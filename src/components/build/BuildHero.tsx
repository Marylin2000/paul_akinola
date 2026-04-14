"use client";

import { motion } from "framer-motion";

export default function BuildHero() {
  return (
    <section className="relative overflow-hidden bg-background pt-32 pb-24 transition-colors duration-500 md:pt-48 md:pb-32">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-[0.65rem] font-medium uppercase tracking-[0.25em] text-primary/60 mb-6 block">
              Systems at Work
            </span>
            <h1 className="font-serif text-[clamp(2.5rem,7vw,5.5rem)] leading-[1.05] text-foreground mb-10">
              Builds
            </h1>
            <div className="grid md:grid-cols-2 gap-12">
              <p className="font-sans text-[clamp(1.1rem,1.5vw,1.35rem)] text-foreground/80 leading-relaxed">
                A closer look at the systems I design across growth, revenue, CRM, and GTM.
              </p>
              <p className="font-sans text-[clamp(1rem,1.2vw,1.1rem)] text-foreground/60 leading-relaxed border-l border-rule pl-8">
                I work in the space between Marketing, Sales, Product, and Engineering—building the architecture that makes visibility from lead to profit possible. Some call this Revenue Operations. Others call it Marketing Operations. I think of it as <span className="text-foreground font-medium">revenue systems design</span>.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Subtle Background Accent */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full opacity-[0.03] dark:opacity-[0.05] pointer-events-none">
        <div className="absolute inset-0 bg-grid-slate-900/[0.1] [mask-image:radial-gradient(ellipse_at_top_right,white,transparent)]" />
      </div>
    </section>
  );
}
