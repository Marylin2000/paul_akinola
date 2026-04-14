"use client";

import { motion } from "framer-motion";

const stories = [
  {
    title: "When the growth motion did not fit the business",
    pain: "The brief was growth. But installs were not the real problem. People were coming in and leaving. The motion and the stage were mismatched.",
    change: "Rebuilt the activation flow around time-to-first-insight. Shifted focus from acquisition volume to retention quality.",
    metrics: ["60% faster activation", "78% retention rate", "200%+ revenue increase"]
  },
  {
    title: "When SDRs spent more time searching than selling",
    pain: "Research and talk-point prep consumed the day. SDRs needed context from existing system data without the manual dig.",
    change: "MarVis—an AI research and enablement assistant—surfaced context automatically, enabling SDRs to focus on orchestration instead of search.",
    metrics: ["40% faster ramp"]
  },
  {
    title: "When CRM structure hid the revenue truth",
    pain: "The pipeline existed. Leads were coming in. But leadership couldn't trust what they saw. The CRM was collecting without creating clarity.",
    change: "Redesigned lifecycle stages, signal definitions, and handoff criteria. Built attribution that leadership could trust for actual decisions.",
    metrics: ["91% attribution accuracy", "32% lower CAC"]
  },
  {
    title: "When product signal never became GTM action",
    pain: "Product data existed. Signals were being generated. But Sales didn't know which accounts were active. The data wasn't reaching the right people.",
    change: "Built real-time signal routing from product to CRM. Created scoring that combined usage with firmographics. Sales now knew what mattered before outreach.",
    metrics: ["85% lead quality", "<5min routing time"]
  }
];

export default function SystemStories() {
  return (
    <section className="py-24 bg-stone-50/50 dark:bg-stone-900/10 transition-colors duration-500">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 max-w-2xl"
        >
          <span className="text-[0.65rem] font-medium uppercase tracking-[0.2em] text-primary/60 mb-4 block">
            01 — System Stories
          </span>
          <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] leading-[1.2] text-foreground">
            Architecture that changes outcomes.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-px bg-rule/20 border border-rule/20">
          {stories.map((story, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-background p-8 lg:p-12 group hover:bg-paper-warm transition-colors duration-500"
            >
              <h3 className="font-serif text-xl lg:text-2xl mb-8 group-hover:text-primary transition-colors">
                {story.title}
              </h3>
              
              <div className="space-y-8">
                <div>
                  <span className="text-[0.65rem] font-medium uppercase tracking-[0.1em] text-foreground/40 mb-2 block">Pain</span>
                  <p className="text-foreground/70 font-light leading-relaxed">{story.pain}</p>
                </div>
                
                <div>
                  <span className="text-[0.65rem] font-medium uppercase tracking-[0.1em] text-foreground/40 mb-2 block">What Changed</span>
                  <p className="text-foreground/80 font-medium leading-relaxed">{story.change}</p>
                </div>
                
                <div className="pt-6 border-t border-rule/10">
                  <div className="flex flex-wrap gap-4">
                    {story.metrics.map((metric, mi) => (
                      <span key={mi} className="text-[0.7rem] font-medium uppercase tracking-wider bg-primary/5 text-primary px-3 py-1 rounded-full">
                        {metric}
                      </span>
                    ))}
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
