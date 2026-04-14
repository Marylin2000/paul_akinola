"use client";

import { motion } from "framer-motion";

const items = [
  {
    title: "CRM Architecture",
    description: "Lifecycle design, object structure, data models that create clarity instead of confusion."
  },
  {
    title: "Signal-to-Routing",
    description: "Real-time processing that moves product usage into actionable GTM workflows."
  },
  {
    title: "Attribution Systems",
    description: "Multi-touch models that leadership can trust for real decisions about spend and focus."
  },
  {
    title: "Lifecycle Design",
    description: "Behavioral triggers, nurture sequences, and the logic that moves people through stages."
  },
  {
    title: "GTM Motion Fit",
    description: "Aligning growth strategy with business stage—PLG, sales-led, or hybrid."
  },
  {
    title: "MarVis",
    description: "AI research and enablement for GTM—surfacing context from system data so teams focus on orchestration."
  },
  {
    title: "Scoring Framework",
    description: "MQL → PQL → MQA + ABM → SQL. A unified model that combines marketing, product, and account signals."
  },
  {
    title: "Reporting Diagnostic",
    description: "Pipeline pulse check—dig into executive reporting to know where and what fails before revenue collapses."
  }
];

export default function WhatIBuild() {
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
            02 — What I Build
          </span>
          <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] leading-[1.2] text-foreground">
            The core components of a revenue system.
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {items.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group"
            >
              <span className="text-[0.6rem] font-medium text-primary/40 block mb-4">0{i + 1}</span>
              <h3 className="font-sans font-medium text-lg mb-3 text-foreground group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-foreground/60 leading-relaxed font-light">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
