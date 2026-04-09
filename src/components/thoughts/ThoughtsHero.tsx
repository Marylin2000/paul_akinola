"use client";

import { motion } from "framer-motion";

export default function ThoughtsHero() {
  return (
    <section className="pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-[0.65rem] font-medium uppercase tracking-[0.25em] text-primary/60 mb-6 block">
              Thoughts
            </span>
            <h1 className="font-serif text-[clamp(2.5rem,5vw,4rem)] leading-[1.1] text-foreground mb-8">
              This is where I think <span className="italic text-primary">out loud</span>.
            </h1>
            <p className="font-sans text-[clamp(1.1rem,1.3vw,1.25rem)] text-foreground/60 leading-relaxed max-w-lg mx-auto">
              Most of these ideas do not start as frameworks. They start as observations. Things I notice in work, in people, and in myself. Over time, they begin to connect.
            </p>
          </motion.div>
        </div>
      </div>
      
      {/* Structural Accent */}
      <div className="mt-16 w-px h-24 bg-gradient-to-b from-primary/40 to-transparent mx-auto opacity-40" />
    </section>
  );
}
