// ThoughtsPreview.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { thoughts } from "@/data/thoughts";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function ThoughtsPreview() {
  const featuredThoughts = thoughts.slice(0, 3);

  const getCategoryPath = (tag: string) => {
    return tag.toLowerCase().replace(' ', '-');
  };

  return (
    <section id="thoughts-preview" className="bg-white py-24 dark:bg-stone-900 md:py-32">
      <div className="container-responsive">
        <motion.div 
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4 font-serif text-3xl font-medium tracking-tight text-stone-900 dark:text-white sm:text-4xl md:text-5xl">
            A few places to start.
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-stone-500 dark:text-stone-400">
            If you want to go deeper, start with the thinking behind the work.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {featuredThoughts.map((thought, index) => (
            <motion.div
              key={thought.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="group"
            >
              <Link 
                href={`/thoughts/${getCategoryPath(thought.tag)}/${thought.slug}`}
                className="block h-full"
              >
                {thought.image && (
                  <div className="relative mb-6 aspect-[16/10] w-full overflow-hidden rounded-2xl border border-stone-200/60 shadow-lg dark:border-stone-700/60">
                    <Image 
                      src={thought.image.url} 
                      alt={thought.image.alt} 
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-900/30 via-transparent to-transparent" />
                  </div>
                )}
                
                <div className="mb-3 text-xs font-medium uppercase tracking-wider text-primary/70">
                  {thought.tag}
                </div>
                
                <h3 className="mb-3 font-serif text-xl font-semibold leading-snug text-stone-900 transition-colors group-hover:text-primary dark:text-white dark:group-hover:text-primary">
                  {thought.title}
                </h3>
                
                <p className="mb-5 text-sm leading-relaxed text-stone-600 dark:text-stone-400">
                  {thought.excerpt}
                </p>
                
                <div className="inline-flex items-center text-sm font-medium text-primary transition-all group-hover:gap-2">
                  <span>Read more</span>
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}