"use client";

import { motion } from "framer-motion";

const tools = [
  {
    title: "PQL → MQA Scoring Model",
    description: "Lead qualification progression calculator based on product usage and firmographics."
  },
  {
    title: "GTM AI Prompts Library",
    description: "50+ prompts for advanced research and personalization at scale."
  },
  {
    title: "Multi-Touch Attribution Model",
    description: "Channel attribution mapped to real buying behavior and pipeline impact."
  },
  {
    title: "Lifecycle Nurture Framework",
    description: "Behavioral-triggered email sequences designed for conversion and retention."
  }
];

export default function ToolsBuilt() {
  return (
    <section className="py-24 bg-background transition-colors duration-500">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-[0.65rem] font-medium uppercase tracking-[0.2em] text-primary/60 mb-4 block">
            04 — Tools I've Built
          </span>
          <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] leading-[1.2] text-foreground">
            Frameworks and templates.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {tools.map((tool, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 border border-rule/10 bg-stone-50/50 dark:bg-stone-900/10 hover:border-primary/20 transition-all duration-500"
            >
              <h3 className="font-sans font-medium text-lg mb-3 text-foreground">
                {tool.title}
              </h3>
              <p className="text-sm text-foreground/60 leading-relaxed font-light">
                {tool.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
