// WorkReframes.tsx
"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const reframes = [
  {
    title: "Effort ≠ Outcome",
    surface: "It looks like a performance problem. The team is active. Work is happening. Effort is there.",
    insight: "But it's not really performance. It's how the system is shaping what that effort turns into.",
    gradient: "from-primary/20 to-amber-500/5",
  },
  {
    title: "Pipeline ≠ Signal",
    surface: "It looks like a pipeline problem. Numbers are moving, but confidence is low.",
    insight: "But it's not just pipeline. It's how signals, decisions, and timing are interacting underneath it.",
    gradient: "from-amber-500/20 to-primary/5",
  },
  {
    title: "Decisions ≠ Clarity",
    surface: "It looks like a decision problem. Conversations are happening, but clarity is missing.",
    insight: "But it's not really decision-making. It's a clarity gap inside the system those decisions depend on.",
    gradient: "from-orange-500/20 to-amber-500/5",
  },
  {
    title: "Execution ≠ Structure",
    surface: "It looks like an execution gap. Work is being done, but it's not flowing or compounding.",
    insight: "But it's not just execution. It's how the work is structured, connected, and supported.",
    gradient: "from-primary/15 to-orange-500/5",
  },
];

export default function WorkReframes({ data }: { data?: any }) {
  const tb = data?.tabs?.[2] || {};
  const reframesTitle = tb.reframesTitle || "The visible problem is rarely the real one.";
  const dynamicReframes = tb.reframesList?.length ? tb.reframesList.map((r: any, i: number) => ({ ...reframes[i], ...r })) : reframes;

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
              Common Reframes
            </span>
          </div>
          
          <h2 className="font-serif text-3xl font-medium tracking-tight text-stone-900 dark:text-white sm:text-4xl">
            {reframesTitle}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
          {dynamicReframes.map((reframe: any, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -4 }}
              className="group relative"
            >
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${reframe.gradient} opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100`} />
              
              <div className="relative flex h-full flex-col rounded-3xl border border-stone-200/60 bg-white/80 p-8 backdrop-blur-sm transition-all duration-300 group-hover:border-primary/20 group-hover:shadow-xl dark:border-stone-700/60 dark:bg-stone-900/80 sm:p-10">
                <div className="mb-6">
                  <span className="font-mono text-sm text-stone-400 dark:text-stone-500">
                    0{index + 1}
                  </span>
                </div>
                
                <h3 className="mb-5 font-serif text-2xl font-semibold text-stone-900 dark:text-white">
                  {reframe.title}
                </h3>
                
                <p className="mb-4 text-base leading-relaxed text-stone-600 dark:text-stone-300">
                  {reframe.surface}
                </p>
                
                <div className="mt-auto border-l-2 border-primary/30 pl-4">
                  <p className="text-base italic leading-relaxed text-stone-700 dark:text-stone-200">
                    {reframe.insight}
                  </p>
                </div>
                
                <div className="mt-6 flex items-center text-sm font-medium text-primary opacity-0 transition-all duration-300 group-hover:gap-2 group-hover:opacity-100">
                  <span>See the reframe</span>
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}