"use client";

import { motion } from "framer-motion";

export default function AboutJourney() {
  return (
    <section className="py-24 bg-stone-100/50 dark:bg-stone-900/30">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl mb-6">My journey</h2>
            <div className="w-12 h-px bg-primary/30 mx-auto" />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8 text-lg leading-relaxed text-foreground/75"
          >
            <p>
              I did not start with this language. I started by trying to make things work—growth, teams, decisions, outcomes, momentum. Like most people, I focused first on what I could see. The numbers. The movement. The visible friction.
            </p>
            <p>
              But over time, I kept running into the same truth: <span className="text-foreground italic font-medium">the visible problem is rarely the real one.</span>
            </p>
            <p>
              That changed how I worked. I began paying closer attention to structure, signal, behaviour, and what was happening underneath the surface. And slowly, that shift moved beyond work.
            </p>
            <p>
              It changed how I thought about people. About growth. About clarity. About the inner life. About faith, formation, and the things that shape us long before they show up in visible outcomes.
            </p>
            <p className="font-serif italic text-xl text-primary/80 pt-4">
              This site is an expression of that journey. Not a finished answer. A clearer way of seeing.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
