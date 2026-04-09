"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const recognitionPoints = [
  "Your team is active, but the results still feel weaker than they should.",
  "Decisions are being made, but not from a place of full clarity.",
  "Revenue, pipeline, growth, or execution feels noisy rather than trustworthy.",
  "You know something deeper is shaping the outcome, but you have not been able to name it clearly.",
  "You feel stuck in a pattern that does not make sense on the surface.",
  "You are trying to move forward, but something within you keeps interrupting the process.",
  "You want to understand what is really going on before jumping into more action.",
  "You are looking for a calmer, clearer way to think about what comes next."
];

export default function WorkTogetherRelevance() {
  return (
    <section className="py-24 border-t border-rule bg-stone-50/30 dark:bg-stone-900/10">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <header className="mb-20">
            <h2 className="font-serif text-3xl mb-6">This may be for you if any of these feel familiar.</h2>
            <p className="text-foreground/50 italic font-light max-w-xl">
              You do not need to arrive with the full language for it. Sometimes it is enough to know that something is not adding up.
            </p>
          </header>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
            {recognitionPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex gap-4 items-start group"
              >
                <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full border border-primary/20 flex items-center justify-center group-hover:bg-primary/5 group-hover:border-primary/40 transition-colors duration-500">
                  <Check className="w-3 h-3 text-primary/40 group-hover:text-primary transition-colors" />
                </div>
                <p className="text-foreground/75 leading-relaxed font-light text-sm">
                  {point}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
