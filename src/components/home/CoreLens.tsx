// CoreLens.tsx
"use client";

import { motion } from "framer-motion";
import { Eye, Layers, Compass } from "lucide-react";

const cards = [
  {
    icon: Layers,
    title: "External Systems",
    text: "The systems around you shape how you perform.",
    gradient: "from-primary/20 to-amber-500/10",
  },
  {
    icon: Compass,
    title: "Internal Systems",
    text: "The systems within you shape how you decide, respond, and grow.",
    gradient: "from-amber-500/20 to-orange-600/10",
  },
  {
    icon: Eye,
    title: "Clarity",
    text: "When you see both clearly, change becomes possible.",
    gradient: "from-orange-600/20 to-primary/10",
  },
] as const;

export default function CoreLens() {
  return (
    <section id="core-lens" className="relative overflow-hidden bg-white py-24 dark:bg-stone-900 md:py-32">
      {/* Background pattern */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
      
      <div className="container-responsive relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <h2 className="mx-auto mb-4 max-w-3xl font-serif text-3xl font-semibold tracking-tight text-stone-900 dark:text-white sm:text-4xl md:text-5xl">
            Transformation starts with clarity.
          </h2>
          <p className="mx-auto mb-16 max-w-2xl text-lg text-stone-500 dark:text-stone-400">
            Seeing what's really happening—beneath the surface—is the first step toward meaningful change.
          </p>
          
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8 lg:gap-10">
            {cards.map((card, index) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.12 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -6 }}
                  className="group relative"
                >
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${card.gradient} opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100`} />
                  
                  <div className="relative flex h-full flex-col items-start rounded-3xl border border-stone-200/60 bg-white/80 p-8 text-left backdrop-blur-sm transition-all duration-300 group-hover:border-primary/20 group-hover:shadow-2xl dark:border-stone-700/60 dark:bg-stone-800/50 sm:p-10">
                    <div className="mb-6 rounded-2xl bg-gradient-to-br from-primary/10 to-amber-500/5 p-3.5 transition-colors group-hover:from-primary/20 group-hover:to-primary/10 dark:from-primary/20 dark:to-amber-700/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    
                    <div className="absolute right-6 top-6 font-mono text-sm font-medium text-stone-300 dark:text-stone-600">
                      0{index + 1}
                    </div>
                    
                    <h3 className="mb-3 font-serif text-xl font-semibold text-stone-800 dark:text-stone-100">
                      {card.title}
                    </h3>
                    <p className="text-base leading-relaxed text-stone-600 dark:text-stone-300">
                      {card.text}
                    </p>
                    
                    <div className="mt-6 h-0.5 w-12 rounded-full bg-gradient-to-r from-primary/40 to-transparent transition-all duration-300 group-hover:w-20 group-hover:from-primary/60" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}