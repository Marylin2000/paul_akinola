// InnerLifeReframes.tsx
"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const reframes = [
  {
    title: "Not discipline",
    body: "You tell yourself you need more discipline. You know what to do, but you're not doing it consistently. But it's not just discipline. Something underneath is shaping how you show up.",
    insight: "The pattern is older than the plan.",
    gradient: "from-primary/15 to-amber-500/5",
  },
  {
    title: "Not stuck",
    body: "It feels like you're stuck. Like something isn't moving, even though you want it to. But it's not just being stuck. There's something you haven't fully seen yet.",
    insight: "Movement requires seeing what's holding you.",
    gradient: "from-amber-500/15 to-primary/5",
  },
  {
    title: "Not clarity",
    body: "You think you need more clarity. Like if you could just figure things out, everything would settle. But it's not just clarity. It's how your inner system is shaping what you're able to see.",
    insight: "The lens shapes what's visible.",
    gradient: "from-orange-500/15 to-amber-500/5",
  },
  {
    title: "Not inconsistency",
    body: "You notice the inconsistency. Your intentions are clear, but your actions don't always follow. But it's not just inconsistency. There are patterns running deeper than the plans you're trying to follow.",
    insight: "Internal alignment precedes external consistency.",
    gradient: "from-primary/10 to-orange-500/5",
  }
];

export default function InnerLifeReframes() {
  return (
    <section className="relative overflow-hidden border-t border-stone-200/60 bg-stone-50 py-24 transition-colors duration-500 dark:border-stone-700/60 dark:bg-stone-950 md:py-32">
      <div className="container-responsive">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-2xl"
        >
          <div className="mb-6 flex items-center gap-4">
            <div className="h-px w-12 bg-gradient-to-r from-primary/60 to-transparent" />
            <span className="text-sm font-medium uppercase tracking-wider text-primary/70">
              Inner Reframes
            </span>
          </div>
          
          <h2 className="font-serif text-3xl font-medium tracking-tight text-stone-900 dark:text-white sm:text-4xl">
            The visible struggle is rarely the real one.
          </h2>
        </motion.div>

        <div className="space-y-6 md:space-y-8">
          {reframes.map((reframe, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ x: 4 }}
              className="group relative"
            >
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${reframe.gradient} opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100`} />
              
              <div className="relative flex flex-col gap-6 rounded-3xl border border-stone-200/60 bg-white/80 p-8 backdrop-blur-sm transition-all duration-300 group-hover:border-primary/20 group-hover:shadow-lg dark:border-stone-700/60 dark:bg-stone-900/80 sm:flex-row sm:items-start sm:gap-12 sm:p-10">
                <div className="shrink-0">
                  <span className="font-mono text-sm text-stone-400 dark:text-stone-500">
                    0{index + 1}
                  </span>
                  <h3 className="mt-2 font-serif text-2xl font-semibold text-stone-900 dark:text-white sm:text-3xl">
                    {reframe.title}
                  </h3>
                </div>
                
                <div className="flex-1 space-y-4">
                  <p className="text-base leading-relaxed text-stone-600 dark:text-stone-300 sm:text-lg">
                    {reframe.body}
                  </p>
                  
                  <div className="border-l-2 border-primary/30 pl-4">
                    <p className="text-sm italic text-stone-500 dark:text-stone-400">
                      {reframe.insight}
                    </p>
                  </div>
                  
                  <div className="flex items-center text-sm font-medium text-primary opacity-0 transition-all duration-300 group-hover:gap-2 group-hover:opacity-100">
                    <span>See the reframe</span>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}