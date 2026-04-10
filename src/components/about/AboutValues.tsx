"use client";

import { motion } from "framer-motion";

const values = [
  {
    title: "Clarity over noise",
    description: "I would rather see what is true than move quickly with the wrong assumptions."
  },
  {
    title: "Understanding before action",
    description: "Real change usually starts with seeing what is actually shaping the problem."
  },
  {
    title: "Systems over surface fixes",
    description: "Short-term fixes can help, but lasting progress usually depends on what sits underneath."
  },
  {
    title: "Growth that can hold",
    description: "I care about change that is not just impressive in the moment, but sustainable over time."
  },
  {
    title: "Honesty about what I do not yet understand",
    description: "Part of paying attention is staying teachable."
  },
  {
    title: "The deeper layer matters",
    description: "Not everything shaping a person, a team, or a season is visible on the surface."
  }
];

export default function AboutValues() {
  return (
    <section className="bg-background py-32 transition-colors duration-500">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20 text-center"
          >
            <h2 className="font-serif text-4xl mb-6">What I care about</h2>
            <p className="text-foreground/60 max-w-lg mx-auto italic">
              A few things keep returning in how I think, write, and work.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group pr-8 border-l border-rule/50 hover:border-primary/40 transition-colors duration-500 pl-8"
              >
                <h3 className="font-serif text-xl mb-3 group-hover:text-primary transition-colors duration-500">
                  {value.title}
                </h3>
                <p className="text-foreground/60 leading-relaxed font-light">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
