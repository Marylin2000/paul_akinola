// ThoughtsStartHere.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Compass, Eye, Lightbulb } from "lucide-react";
import { getPageSection } from "@/lib/payload/page-data";

const startItems = [
  {
    num: "01",
    title: "When you start seeing systems",
    description: "The moment you realize that outcomes aren't random—they're shaped by patterns, structures, and forces beneath the surface.",
    slug: "start-seeing-systems",
    icon: Eye,
    gradient: "from-primary/15 to-amber-500/5",
  },
  {
    num: "02",
    title: "It's the same lack of clarity—showing up at work and in life",
    description: "The fog you experience in meetings is connected to the fog you feel internally. Different domains, same root.",
    slug: "clarity-showing-up-work-life",
    icon: Compass,
    gradient: "from-amber-500/15 to-primary/5",
  },
  {
    num: "03",
    title: "Clarity is never the end goal. It is the beginning",
    description: "Seeing clearly doesn't finish the work—it starts it. Clarity gives you a place to stand and a direction to move.",
    slug: "clarity-not-end-goal",
    icon: Lightbulb,
    gradient: "from-orange-500/15 to-amber-500/5",
  }
];

export default function ThoughtsStartHere({ data }: { data?: any }) {
  const tb = getPageSection(data, 1);
  const label = tb.startLabel || "Orientation";
  const title = tb.startTitle || "New to the systems lens?";
  const description = tb.startDescription || "These three reflections offer a helpful foundation for how to read everything else on this site.";
  const dynamicItems = tb.startItems?.length ? tb.startItems.map((item: any, index: number) => ({ ...startItems[index], ...item })) : startItems;

  return (
    <section className="relative overflow-hidden border-y border-stone-200/60 bg-stone-50 py-24 transition-colors duration-500 dark:border-stone-700/60 dark:bg-stone-950 md:py-32">
      {/* Background accent */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-60 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-gradient-to-br from-primary/5 via-amber-500/5 to-transparent blur-7xl" />
      </div>

      <div className="container-responsive relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="mb-6 flex items-center gap-4">
            <div className="h-px w-12 bg-gradient-to-r from-primary/60 to-transparent" />
            <span className="text-sm font-medium uppercase tracking-wider text-primary/70">
              {label}
            </span>
          </div>
          
          <h2 className="mb-4 font-serif text-3xl font-medium tracking-tight text-stone-900 dark:text-white sm:text-4xl">
            {title}
          </h2>
          
          <p className="max-w-2xl text-lg text-stone-500 dark:text-stone-400">
            {description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {dynamicItems.map((item: any, index: number) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.num}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="group relative"
              >
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${item.gradient} opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100`} />
                
                <Link 
                  href={`/thoughts/${item.slug}`}
                  className="relative flex h-full flex-col rounded-3xl border border-stone-200/60 bg-white/80 p-8 backdrop-blur-sm transition-all duration-300 group-hover:border-primary/20 group-hover:shadow-xl dark:border-stone-700/60 dark:bg-stone-900/80"
                >
                  <div className="mb-6 flex items-start justify-between">
                    <div className="rounded-xl bg-gradient-to-br from-primary/15 to-amber-500/10 p-3">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <span className="font-mono text-4xl font-light text-stone-200 dark:text-stone-700">
                      {item.num}
                    </span>
                  </div>
                  
                  <h3 className="mb-3 font-serif text-xl font-semibold leading-snug text-stone-900 transition-colors group-hover:text-primary dark:text-white">
                    {item.title}
                  </h3>
                  
                  <p className="mb-6 flex-1 text-sm leading-relaxed text-stone-600 dark:text-stone-300">
                    {item.description}
                  </p>
                  
                  <div className="flex items-center text-sm font-medium text-primary opacity-0 transition-all duration-300 group-hover:gap-2 group-hover:opacity-100">
                    <span>Read reflection</span>
                    <ArrowRight className="h-4 w-4" />
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
