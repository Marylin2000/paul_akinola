"use client";

import { motion } from "framer-motion";

export default function WorkTogetherHero() {
  return (
    <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-[0.65rem] font-medium uppercase tracking-[0.25em] text-primary/60 mb-6 block">
              Work Together
            </span>
            <h1 className="font-serif text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.1] text-foreground mb-8">
              If this feels familiar, this is a <span className="italic text-primary">good place to start</span>.
            </h1>
            <p className="font-sans text-[clamp(1.1rem,1.3vw,1.35rem)] text-foreground/60 leading-relaxed max-w-2xl mx-auto font-light">
              Sometimes what is missing is not more effort. It is a clearer understanding of what is actually shaping the outcome. This page is where that understanding turns into conversation.
            </p>
          </motion.div>
        </div>
      </div>
      
      {/* Structural Accent Line */}
      <div className="absolute top-0 left-0 w-px h-full bg-rule/20 ml-[10%] hidden lg:block" />
    </section>
  );
}
