"use client";

import { motion } from "framer-motion";

const stats = [
  { label: "Years in Revenue Systems", value: "9+" },
  { label: "Systems Built", value: "20+" },
  { label: "Companies", value: "7+" },
  { label: "Industries", value: "7" }
];

const industries = [
  { name: "FinTech", company: "OZÉ Inc" },
  { name: "HealthTech", company: "Reliance Health" },
  { name: "HR Tech", company: "OnHand" },
  { name: "Analytics", company: "KX Systems" },
  { name: "E-commerce", company: "Possible & Affordable Solutions" },
  { name: "PaaS", company: "Veefunnels" },
  { name: "Fractional RevOps", company: "MartandMall" }
];

export default function ProofPoints() {
  return (
    <section className="py-24 bg-stone-950 text-stone-100 transition-colors duration-500 overflow-hidden relative">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <span className="text-[0.65rem] font-medium uppercase tracking-[0.2em] text-stone-500 mb-4 block">
            03 — Proof Points
          </span>
          <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] leading-[1.2]">
            Evidence of the work.
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-24">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center md:text-left"
            >
              <div className="font-serif text-[clamp(2.5rem,5vw,4rem)] leading-none text-primary mb-4">
                {stat.value}
              </div>
              <div className="text-[0.65rem] font-medium uppercase tracking-[0.2em] text-stone-500">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="border-t border-stone-800 pt-16">
          <h3 className="text-[0.65rem] font-medium uppercase tracking-[0.2em] text-stone-500 mb-12">
            Companies by Industry
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center gap-6 group"
              >
                <div className="font-sans text-sm font-light text-stone-400 min-w-[140px]">
                  {item.name}
                </div>
                <div className="h-px bg-stone-800 flex-grow" />
                <div className="font-sans text-sm font-medium text-stone-100 group-hover:text-primary transition-colors">
                  {item.company}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(var(--primary-rgb),0.15),transparent_70%)]" />
      </div>
    </section>
  );
}
