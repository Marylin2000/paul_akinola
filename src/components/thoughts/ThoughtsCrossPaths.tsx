// ThoughtsCrossPaths.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Briefcase, Heart, MessageCircle, User } from "lucide-react";

const paths = [
  {
    label: "Systems at Work",
    support: "Explore how systems shape performance, decisions, and growth.",
    href: "/work",
    icon: Briefcase,
    gradient: "from-primary/20 to-amber-500/5",
  },
  {
    label: "Systems in Life",
    support: "Explore how inner systems shape behaviour, resilience, and meaning.",
    href: "/inner-life",
    icon: Heart,
    gradient: "from-amber-500/20 to-primary/5",
  },
  {
    label: "About me",
    support: "See the person and convictions behind the writing.",
    href: "/about",
    icon: User,
    gradient: "from-orange-500/20 to-amber-500/5",
  },
  {
    label: "Work Together",
    support: "Start a conversation if the thinking connects to something real.",
    href: "/together#contact",
    icon: MessageCircle,
    gradient: "from-primary/15 to-orange-500/5",
  }
];

export default function ThoughtsCrossPaths() {
  return (
    <section className="relative overflow-hidden border-t border-stone-200/60 bg-stone-50 py-24 transition-colors duration-500 dark:border-stone-700/60 dark:bg-stone-950 md:py-32">
      {/* Ambient light */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-primary/5 via-amber-500/5 to-transparent blur-7xl" />
      </div>

      <div className="container-responsive relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 font-serif text-3xl font-light italic text-stone-900 dark:text-white sm:text-4xl">
            Not sure where to go next?
          </h2>
          <p className="text-lg text-stone-500 dark:text-stone-400">
            Choose a path that resonates with where you are.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {paths.map((path, index) => {
            const Icon = path.icon;
            return (
              <motion.div
                key={path.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -4 }}
                className="group relative"
              >
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${path.gradient} opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100`} />
                
                <Link 
                  href={path.href}
                  className="relative flex h-full flex-col rounded-3xl border border-stone-200/60 bg-white/80 p-6 backdrop-blur-sm transition-all duration-300 group-hover:border-primary/20 group-hover:shadow-lg dark:border-stone-700/60 dark:bg-stone-900/80"
                >
                  <div className="mb-4 rounded-xl bg-gradient-to-br from-primary/15 to-amber-500/10 p-3 self-start">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  
                  <h3 className="mb-2 font-serif text-lg font-semibold text-stone-900 transition-colors group-hover:text-primary dark:text-white">
                    {path.label}
                  </h3>
                  
                  <p className="mb-4 flex-1 text-sm leading-relaxed text-stone-500 dark:text-stone-400">
                    {path.support}
                  </p>
                  
                  <div className="flex items-center text-xs font-medium text-primary opacity-0 transition-all duration-300 group-hover:gap-2 group-hover:opacity-100">
                    <span>Explore</span>
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