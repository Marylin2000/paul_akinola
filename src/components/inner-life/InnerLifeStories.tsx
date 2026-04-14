// InnerLifeStories.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, BookOpen, Heart, Lightbulb, Moon, Sparkles, Sun } from "lucide-react";

const stories = [
  {
    title: "Patterns Beneath Behaviour",
    body: "Sometimes the issue is not motivation but a pattern beneath it. The same reaction keeps returning because something deeper has been shaping how you respond long before the moment itself.",
    slug: "fighting-the-nameable",
    icon: Moon,
    gradient: "from-primary/15 to-amber-500/5",
  },
  {
    title: "Identity and Inner Conflict",
    body: "Growth becomes hard when part of you wants change and another part is still protecting an older way of being. Inner conflict often looks like hesitation, delay, or self-sabotage.",
    slug: "understanding-yourself-change",
    icon: Heart,
    gradient: "from-amber-500/15 to-primary/5",
  },
  {
    title: "Hope in Confusion",
    body: "There are seasons when you cannot name what is wrong, only that something feels unsettled. Hope matters here, not as denial, but as the belief that what feels unclear can still be understood.",
    slug: "hope-underneath-confusion",
    icon: Sun,
    gradient: "from-orange-500/15 to-amber-500/5",
  },
  {
    title: "Faith and Formation",
    body: "Change is not only about insight or effort. It is also about what is forming you over time. Faith shapes how people interpret pressure, waiting, direction, and meaning.",
    slug: "symphony-of-alignment",
    icon: Sparkles,
    gradient: "from-primary/10 to-orange-500/5",
  },
  {
    title: "The Unseen Shaping the Seen",
    body: "Not everything shaping a life is visible on the surface. Beliefs, fears, spiritual convictions, memory, and unseen pressures all influence what eventually shows up in choices and behaviour.",
    slug: "clarity-blocked-by-system",
    icon: Lightbulb,
    gradient: "from-amber-500/10 to-primary/5",
  },
  {
    title: "Clarity Before Change",
    body: "Many people try to force a new outcome before they understand the system producing the old one. Real change often starts when you can name what has been quietly shaping you.",
    slug: "clarity-not-end-goal",
    icon: BookOpen,
    gradient: "from-primary/10 to-amber-500/5",
  }
];

export default function InnerLifeStories() {
  return (
    <section className="relative overflow-hidden border-t border-stone-200/60 bg-white py-24 transition-colors duration-500 dark:border-stone-700/60 dark:bg-stone-900 md:py-32">
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
              Life Stories
            </span>
          </div>
          
          <h2 className="font-serif text-3xl font-medium leading-[1.2] text-stone-900 dark:text-white sm:text-4xl">
            Recurring patterns that help make sense of what may be happening underneath.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {stories.map((story, index) => {
            const Icon = story.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                whileHover={{ y: -4 }}
                className="group relative"
              >
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${story.gradient} opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100`} />
                
                <Link 
                  href={`/thoughts/${story.slug}`}
                  className="relative flex h-full flex-col rounded-3xl border border-stone-200/60 bg-white/80 p-8 backdrop-blur-sm transition-all duration-300 group-hover:border-primary/20 group-hover:shadow-xl dark:border-stone-700/60 dark:bg-stone-900/80"
                >
                  <div className="mb-5 flex items-start justify-between">
                    <div className="rounded-xl bg-gradient-to-br from-primary/15 to-amber-500/10 p-3 transition-colors group-hover:from-primary/20 group-hover:to-amber-500/15">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <span className="font-mono text-xs text-stone-400 dark:text-stone-500">
                      0{index + 1}
                    </span>
                  </div>
                  
                  <h3 className="mb-3 font-serif text-xl font-semibold leading-snug text-stone-900 transition-colors group-hover:text-primary dark:text-white">
                    {story.title}
                  </h3>
                  
                  <p className="mb-6 flex-1 text-sm leading-relaxed text-stone-600 dark:text-stone-300">
                    {story.body}
                  </p>
                  
                  <div className="flex items-center text-xs font-medium uppercase tracking-wider text-primary opacity-0 transition-all duration-300 group-hover:gap-2 group-hover:opacity-100">
                    <span>Read reflection</span>
                    <ArrowRight className="h-3 w-3" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}