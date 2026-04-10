"use client";

import { motion } from "framer-motion";

export default function AboutMechanics() {
  return (
    <section className="border-y border-rule bg-background py-24 transition-colors duration-500">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="aspect-square bg-stone-50 dark:bg-stone-900 border border-rule flex items-center justify-center p-12 text-center"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 border-2 border-primary/20 rounded-full mx-auto" />
                  <p className="font-serif italic text-foreground/40 text-sm">
                    Individuals, Teams, <br />Organizations
                  </p>
                </div>
              </motion.div>
            </div>
            
            <div className="lg:col-span-7 flex flex-col justify-center">
              <motion.h2 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-serif text-3xl mb-8"
              >
                How I work
              </motion.h2>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="space-y-6 text-foreground/75 leading-relaxed text-lg"
              >
                <p>
                  I work with individuals, teams, and organisations who are trying to make sense of what is really shaping their outcomes.
                </p>
                <p>
                  Sometimes that shows up in performance, growth, revenue, or structure. Sometimes it shows up more personally—clarity, direction, or the tension between what someone intends and how they are actually living.
                </p>
                <p className="font-medium text-foreground">
                  I am most useful where something important is happening, but the real issue has not been named clearly enough yet.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
