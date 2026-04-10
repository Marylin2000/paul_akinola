"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const stories = [
  {
    title: "Patterns Beneath Behaviour",
    body: "Sometimes the issue is not motivation but a pattern beneath it. The same reaction keeps returning because something deeper has been shaping how you respond long before the moment itself.",
    slug: "fighting-the-nameable"
  },
  {
    title: "Identity and Inner Conflict",
    body: "Growth becomes hard when part of you wants change and another part is still protecting an older way of being. Inner conflict often looks like hesitation, delay, or self-sabotage.",
    slug: "understanding-yourself-change"
  },
  {
    title: "Hope in Confusion",
    body: "There are seasons when you cannot name what is wrong, only that something feels unsettled. Hope matters here, not as denial, but as the belief that what feels unclear can still be understood.",
    slug: "hope-underneath-confusion"
  },
  {
    title: "Faith and Formation",
    body: "Change is not only about insight or effort. It is also about what is forming you over time. Faith shapes how people interpret pressure, waiting, direction, and meaning.",
    slug: "symphony-of-alignment"
  },
  {
    title: "The Unseen Shaping the Seen",
    body: "Not everything shaping a life is visible on the surface. Beliefs, fears, spiritual convictions, memory, and unseen pressures all influence what eventually shows up in choices and behaviour.",
    slug: "clarity-blocked-by-system"
  },
  {
    title: "Clarity Before Change",
    body: "Many people try to force a new outcome before they understand the system producing the old one. Real change often starts when you can name what has been quietly shaping you.",
    slug: "clarity-not-end-goal"
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
              className="bg-background group h-full"
            >
              <Link 
                href={`/thoughts/${story.slug}`}
                className="flex flex-col h-full p-10 lg:p-12 hover:bg-stone-50/50 dark:hover:bg-stone-900/40 transition-all duration-500 relative overflow-hidden"
              >
                <div className="flex justify-between items-start mb-6">
                  <h3 className="font-serif text-xl font-medium leading-tight text-foreground transition-colors duration-300 group-hover:text-stone-600 dark:group-hover:text-stone-300">
                    {story.title}
                  </h3>
                  <ArrowUpRight className="w-4 h-4 text-stone-300 dark:text-stone-700 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <p className="text-[0.92rem] font-light leading-relaxed text-foreground/60 italic font-serif mt-auto">
                  {story.body}
                </p>
                <div className="mt-8 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-stone-300 dark:text-stone-700 opacity-0 group-hover:opacity-100 transition-opacity">
                  Read reflection
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
