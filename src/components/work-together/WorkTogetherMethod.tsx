"use client";

import { motion } from "framer-motion";

const principles = [
  {
    title: "Name what is visible",
    body: "We begin with what is not adding up on the surface."
  },
  {
    title: "Look underneath it",
    body: "We look for the systems, patterns, pressures, or hidden assumptions shaping the outcome."
  },
  {
    title: "Clarify what matters",
    body: "We separate signal from noise so the real issue becomes easier to see."
  },
  {
    title: "Decide the next move",
    body: "Once there is clarity, it becomes easier to know what to address, what to change, and what not to force."
  }
];

const steps = [
  {
    title: "Share what feels unclear",
    body: "Tell me, in plain language, what feels off, stuck, noisy, or hard to name."
  },
  {
    title: "We have a first conversation",
    body: "We look at what is happening on the surface and what may be shaping it underneath."
  },
  {
    title: "We decide what makes sense",
    body: "If there is useful next work, we define it clearly. If not, you still leave with better language and direction."
  }
];

export default function WorkTogetherMethod() {
  return (
    <section className="border-t border-rule bg-background py-24 transition-colors duration-500">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Principles */}
          <div className="mb-32">
            <header className="mb-16">
              <h2 className="font-serif text-3xl mb-4">We start by understanding what is actually going on.</h2>
              <p className="text-foreground/50 italic font-light max-w-xl">
                I do not start by forcing a framework over your situation. I start by listening carefully... helping you see the structure more clearly.
              </p>
            </header>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              {principles.map((principle, index) => (
                <motion.div
                  key={principle.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="space-y-4"
                >
                  <div className="text-[0.6rem] font-bold text-primary/30 uppercase tracking-widest">
                    0{index + 1}
                  </div>
                  <h3 className="font-serif text-xl leading-tight">
                    {principle.title}
                  </h3>
                  <p className="text-sm text-foreground/60 leading-relaxed font-light">
                    {principle.body}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* How it starts */}
          <div className="pt-24 border-t border-rule">
            <header className="mb-16 text-center">
              <h2 className="font-serif text-3xl mb-4">How it starts</h2>
              <p className="text-foreground/50 italic font-light">
                Simple. Start with a short note about what is not adding up.
              </p>
            </header>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {steps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, scale: 0.98 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-stone-50 dark:bg-stone-900/30 p-8 border border-rule/30 rounded-sm text-center"
                >
                  <h3 className="font-serif text-lg mb-4">
                    {step.title}
                  </h3>
                  <p className="text-sm text-foreground/50 leading-relaxed font-light">
                    {step.body}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
