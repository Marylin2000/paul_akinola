"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const paths = [
  {
    title: "Systems at Work",
    description: "How systems shape performance, decisions, growth, and what is happening beneath visible results.",
    href: "/work",
    label: "Explore Work",
    color: "from-blue-500/20 to-primary/20"
  },
  {
    title: "Systems in Life",
    description: "How inner systems shape behaviour, resilience, identity, direction, and meaning.",
    href: "/inner-life",
    label: "Explore Inner Life",
    color: "from-amber-500/20 to-orange-500/20"
  },
  {
    title: "Notes and reflections",
    description: "Writing, observations, and connected thinking across work, life, and the deeper layer underneath.",
    href: "/thoughts",
    label: "Read Thoughts",
    color: "from-primary/20 to-amber-500/20"
  },
  {
    title: "Work Together",
    description: "If this connects with something real you are working through, this is where a conversation can begin.",
    href: "/work-together",
    label: "Start a Conversation",
    color: "from-stone-500/20 to-stone-700/20"
  }
];

export default function AboutNextPaths() {
  return (
    <section className="py-32 lg:py-40 bg-stone-50 dark:bg-stone-950 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent opacity-50" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          <motion.header 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20 text-center"
          >
            <span className="text-[0.65rem] font-medium uppercase tracking-[0.3em] text-primary/70 mb-4 block">
              Navigation
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-stone-900 dark:text-stone-100 mb-4">
              Where to go next
            </h2>
            <p className="text-stone-600 dark:text-stone-400 italic text-lg">
              You can keep exploring from whichever door feels closest to where you are.
            </p>
          </motion.header>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {paths.map((path, index) => (
              <motion.div
                key={path.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link 
                  href={path.href}
                  className="group relative block h-full"
                >
                  <div className="relative h-full p-8 lg:p-10 rounded-3xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 overflow-hidden transition-all duration-500 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10">
                    
                    {/* Background Gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${path.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
                    
                    {/* Content */}
                    <div className="relative z-10 flex flex-col h-full">
                      <div className="flex justify-between items-start mb-6">
                        <h3 className="font-serif text-2xl lg:text-3xl text-stone-900 dark:text-stone-100 group-hover:text-primary transition-colors duration-300">
                          {path.title}
                        </h3>
                        <motion.div 
                          className="w-10 h-10 rounded-full bg-stone-100 dark:bg-stone-800 flex items-center justify-center text-stone-400 group-hover:bg-primary group-hover:text-white transition-all duration-300"
                          whileHover={{ rotate: 45 }}
                        >
                          <ArrowUpRight className="w-5 h-5" />
                        </motion.div>
                      </div>
                      
                      <p className="text-stone-600 dark:text-stone-400 leading-relaxed mb-8 flex-grow">
                        {path.description}
                      </p>
                      
                      <div className="flex items-center gap-2 text-sm font-medium uppercase tracking-wider text-primary">
                        {path.label}
                        <motion.span
                          className="inline-block"
                          initial={{ x: 0 }}
                          whileHover={{ x: 5 }}
                        >
                          →
                        </motion.span>
                      </div>
                    </div>

                    {/* Corner Accent */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}