// ThoughtsFeatured.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, BookOpen, Briefcase, Calendar, Heart, Sparkles } from "lucide-react";
import Image from "next/image";
import { getPageSection } from "@/lib/payload/page-data";
import type { Thought } from "@/lib/types-cms";

// Placeholder images mapped to thought types
const placeholderImages = {
  work: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop",
  life: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=800&auto=format&fit=crop",
  systems: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&auto=format&fit=crop",
  clarity: "https://images.unsplash.com/photo-1506784365847-bbad939e9335?w=800&auto=format&fit=crop",
};

const categoryIcons = {
  Work: Briefcase,
  Life: Heart,
  Systems: Sparkles,
  Clarity: BookOpen,
};

export default function ThoughtsFeatured({ data, thoughts }: { data?: any; thoughts: Thought[] }) {
  const tb = getPageSection(data, 2);
  const featuredSlugs: string[] = tb.featuredSlugs?.length ? tb.featuredSlugs.map((item: any) => item.slug).filter(Boolean) : [
    "pipeline-volume-hides-weak-signal",
    "inconsistency-rarely-real-problem",
    "start-seeing-systems",
    "clarity-not-end-goal"
  ];

  const featuredThoughts = featuredSlugs
    .map((slug: string) => thoughts.find((thought) => thought.slug === slug))
    .filter(Boolean) as Thought[];

  const getCategoryPath = (tag: string) => {
    return tag.toLowerCase().replace(' ', '-');
  };

  const getPlaceholderImage = (tag: string) => {
    const lowerTag = tag.toLowerCase();
    if (lowerTag.includes('work')) return placeholderImages.work;
    if (lowerTag.includes('life')) return placeholderImages.life;
    if (lowerTag.includes('system')) return placeholderImages.systems;
    return placeholderImages.clarity;
  };

  const getDisplayDate = (thought: Thought, index: number) => {
    if (thought.date) return thought.date;
    const fallbackDates = ["May 2026", "April 2026", "March 2026", "February 2026"];
    return fallbackDates[index % fallbackDates.length];
  };

  return (
    <section className="relative overflow-hidden bg-white py-24 transition-colors duration-500 dark:bg-stone-900 md:py-32">
      <div className="container-responsive">
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
            {tb.featuredLabel || "Featured"}
            </span>
          </div>
          
          <h2 className="font-serif text-3xl font-medium tracking-tight text-stone-900 dark:text-white sm:text-4xl">
            {tb.featuredTitle || "A few thoughts to start with."}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {featuredThoughts.map((thought: Thought, index: number) => {
            const IconComponent = categoryIcons[thought?.tag as keyof typeof categoryIcons] || BookOpen;
            const imageUrl = thought?.image?.url || getPlaceholderImage(thought?.tag || "");
            const displayDate = getDisplayDate(thought, index);
            
            return (
              <motion.div
                key={thought?.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className="group relative"
              >
                <Link 
                  href={`/thoughts/${getCategoryPath(thought?.tag || "")}/${thought?.slug}`}
                  className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-stone-200/60 bg-white shadow-lg transition-all duration-500 hover:shadow-2xl dark:border-stone-700/60 dark:bg-stone-900"
                >
                  {/* Image Container */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden">
                    <Image 
                      src={imageUrl}
                      alt={thought?.image?.alt || thought?.title || "Thought illustration"} 
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 via-transparent to-transparent" />
                    
                    {/* Category Badge */}
                    <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-white/90 px-3 py-1.5 text-xs font-medium backdrop-blur-sm dark:bg-stone-900/90">
                      <IconComponent className="h-3 w-3 text-primary" />
                      <span className="uppercase tracking-wider text-stone-700 dark:text-stone-200">
                        {thought?.tag}
                      </span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex flex-1 flex-col p-6">
                    <div className="mb-3 flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-stone-400 dark:text-stone-500">
                      <Calendar className="h-3 w-3" />
                      {displayDate}
                    </div>
                    <h3 className="mb-3 font-serif text-lg font-semibold leading-snug text-stone-900 transition-colors group-hover:text-primary dark:text-white">
                      {thought?.title}
                    </h3>
                    
                    <p className="mb-6 flex-1 text-sm leading-relaxed text-stone-600 dark:text-stone-400 line-clamp-3">
                      {thought?.excerpt}
                    </p>
                    
                    <div className="flex items-center text-sm font-medium text-primary opacity-0 transition-all duration-300 group-hover:gap-2 group-hover:opacity-100">
                      <span>Read thought</span>
                      <ArrowUpRight className="h-4 w-4" />
                    </div>
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
