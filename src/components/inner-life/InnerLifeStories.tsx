"use client";

import { motion } from "framer-motion";

const stories = [
  {
    title: "Patterns Beneath Behaviour",
    body: "Sometimes the issue is not motivation but a pattern beneath it. The same reaction keeps returning because something deeper has been shaping how you respond long before the moment itself."
  },
  {
    title: "Identity and Inner Conflict",
    body: "Growth becomes hard when part of you wants change and another part is still protecting an older way of being. Inner conflict often looks like hesitation, delay, or self-sabotage."
  },
  {
    title: "Hope in Confusion",
    body: "There are seasons when you cannot name what is wrong, only that something feels unsettled. Hope matters here, not as denial, but as the belief that what feels unclear can still be understood."
  },
  {
    title: "Faith and Formation",
    body: "Change is not only about insight or effort. It is also about what is forming you over time. Faith shapes how people interpret pressure, waiting, direction, and meaning."
  },
  {
    title: "The Unseen Shaping the Seen",
    body: "Not everything shaping a life is visible on the surface. Beliefs, fears, spiritual convictions, memory, and unseen pressures all influence what eventually shows up in choices and behaviour."
  },
  {
    title: "Clarity Before Change",
    body: "Many people try to force a new outcome before they understand the system producing the old one. Real change often starts when you can name what has been quietly shaping you."
  }
];

export default function InnerLifeStories() {
  return (
    <section className="relative overflow-hidden py-32 border-t border-rule bg-background transition-colors duration-500">
      <div className="relative mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="max-w-[720px] mb-20">
          <div className="mb-10 text-[0.65rem] font-medium uppercase tracking-[0.15em] text-foreground/40">
            05 — Life Stories
          </div>
          <h2 className="font-serif text-[clamp(2rem,4vw,2.8rem)] font-normal leading-[1.2] text-foreground">
            Recurring patterns that help make sense of what may be happening underneath.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-rule border border-rule transition-colors duration-500">
          {stories.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-background p-10 lg:p-12 hover:bg-paper-warm transition-colors duration-300 group"
            >
              <h3 className="mb-6 font-serif text-xl font-medium leading-tight text-foreground transition-colors duration-300 group-hover:text-primary">
                {story.title}
              </h3>
              <p className="text-[0.92rem] font-light leading-relaxed text-foreground/60 italic font-serif">
                {story.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
