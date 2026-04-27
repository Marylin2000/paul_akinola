"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const paths = [
  {
    title: "Systems at Work",
    description: "How systems shape performance, decisions, growth, and what is happening beneath visible results.",
    href: "/work",
    label: "Explore Work",
    color: "from-blue-500/20 to-primary/20",
    icon: ArrowRight
  },
  {
    title: "Systems in Life",
    description: "How inner systems shape behaviour, resilience, identity, direction, and meaning.",
    href: "/inner-life",
    label: "Explore Inner Life",
    color: "from-amber-500/20 to-orange-500/20",
    icon: ArrowRight
  },
  {
    title: "Notes and reflections",
    description: "Writing, observations, and connected thinking across work, life, and the deeper layer underneath.",
    href: "/thoughts",
    label: "Read Thoughts",
    color: "from-primary/20 to-amber-500/20",
    icon: ArrowRight
  },
  {
    title: "Work Together",
    description: "If this connects with something real you are working through, this is where a conversation can begin.",
    href: "/work-together",
    label: "Start a Conversation",
    color: "from-stone-500/20 to-stone-700/20",
    icon: ArrowRight
  }
];

export default function WorkNextPaths({ data }: { data?: any }) {
  const tb = data?.tabs?.[5] || {};
  const pathsTitle = tb.nextPathsTitle || "Where systems thinking meets practical reality.";
  const dynamicPaths = tb.nextPathsList?.length ? tb.nextPathsList.map((p: any, i: number) => ({ ...paths[i], ...p })) : paths;

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
              Next Paths
            </span>
          </div>
          
          <h2 className="font-serif text-3xl font-medium tracking-tight text-stone-900 dark:text-white sm:text-4xl">
            {pathsTitle}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {dynamicPaths.map((path: any, index: number) => {
            const Icon = path.icon || ArrowRight;
            return (
              <motion.div
                key={path.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -4 }}
                className="group relative"
              >
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${path.color} opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100`} />
                
                <Link
                  href={path.href}
                  className="relative flex h-full flex-col rounded-3xl border border-stone-200/60 bg-white/80 p-8 backdrop-blur-sm transition-all duration-300 group-hover:border-primary/20 group-hover:shadow-xl dark:border-stone-700/60 dark:bg-stone-900/80"
                >
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-stone-100 text-stone-400 group-hover:bg-primary/10 group-hover:text-primary dark:bg-stone-800 dark:text-stone-500">
                    <Icon className="h-5 w-5" />
                  </div>
                  
                  <h3 className="mb-3 font-serif text-xl font-semibold text-stone-900 dark:text-white">
                    {path.title}
                  </h3>
                  
                  <p className="mb-8 text-sm leading-relaxed text-stone-600 dark:text-stone-400 flex-grow">
                    {path.description}
                  </p>
                  
                  <div className="mt-auto flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    {path.label}
                    <motion.span
                      initial={{ x: 0 }}
                      whileHover={{ x: 4 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      →
                    </motion.span>
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