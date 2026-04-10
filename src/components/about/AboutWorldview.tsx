"use client";

import { motion } from "framer-motion";

export default function AboutWorldview() {
  return (
    <section className="border-t border-rule bg-background py-24 transition-colors duration-500">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="font-serif text-3xl text-primary italic"
            >
              How I see the world
            </motion.h2>
          </div>
          
          <div className="lg:col-span-8 max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-6 text-[clamp(1.1rem,1.3vw,1.25rem)] text-foreground/80 leading-relaxed"
            >
              <p>
                Over time, I’ve come to see that most outcomes are not random.
              </p>
              <p>
                At work, results are shaped by systems, how decisions are made, how signals move, how teams align, and how things connect beneath the surface.
              </p>
              <p>
                In life, the same is true. Behaviour, clarity, direction, and even the way we respond under pressure are shaped by systems within us, beliefs, patterns, memory, identity, and what we carry quietly.
              </p>
              <p>
                And underneath both, there is often more going on than what is immediately visible. That is the lens I keep returning to.
              </p>
              
              <div className="pt-8 border-t border-rule mt-12">
                <blockquote className="font-serif text-2xl italic text-foreground tracking-tight">
                  "Most visible problems are being shaped by something deeper."
                </blockquote>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
