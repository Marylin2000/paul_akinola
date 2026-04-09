"use client";

import { motion } from "framer-motion";

const reframes = [
  {
    title: "Not discipline",
    body: "You tell yourself you need more discipline. You know what to do, but you&apos;re not doing it consistently. But it&apos;s not just discipline. Something underneath is shaping how you show up."
  },
  {
    title: "Not stuck",
    body: "It feels like you&apos;re stuck. Like something isn&apos;t moving, even though you want it to. But it&apos;s not just being stuck. There&apos;s something you haven&apos;t fully seen yet."
  },
  {
    title: "Not clarity",
    body: "You think you need more clarity. Like if you could just figure things out, everything would settle. But it&apos;s not just clarity. It&apos;s how your inner system is shaping what you&apos;re able to see."
  },
  {
    title: "Not inconsistency",
    body: "You notice the inconsistency. Your intentions are clear, but your actions don&apos;t always follow. But it&apos;s not just inconsistency. There are patterns running deeper than the plans you&apos;re trying to follow."
  }
];

export default function InnerLifeReframes() {
  return (
    <section className="relative overflow-hidden py-32 border-t border-rule bg-background transition-colors duration-500">
      <div className="relative mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="max-w-[680px] mb-20 lg:mb-24">
          <div className="mb-10 text-[0.65rem] font-medium uppercase tracking-[0.15em] text-foreground/40">
            03 — Reframes
          </div>
          <h2 className="font-serif text-[clamp(1.4rem,2.5vw,1.9rem)] font-normal text-foreground/50 tracking-wide">
            The visible struggle is rarely the real one.
          </h2>
        </div>

        <div className="space-y-12 md:space-y-24">
          {reframes.map((reframe, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group mx-auto max-w-[760px]"
            >
              <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-baseline">
                <div className="text-[0.65rem] font-medium uppercase tracking-[0.15em] text-primary/40 shrink-0">
                  Ref 0{index + 1}
                </div>
                <div className="space-y-6">
                  <h3 className="font-serif text-[clamp(1.6rem,3vw,2.2rem)] font-normal leading-tight text-foreground group-hover:text-primary transition-colors duration-500">
                    {reframe.title}
                  </h3>
                  <p className="text-lg font-light leading-relaxed text-foreground/60 italic font-serif">
                    {reframe.body}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
