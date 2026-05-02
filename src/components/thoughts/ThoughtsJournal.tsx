// ThoughtsJournal.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Search, X, Calendar, Clock } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";
import Image from "next/image";
import { getPageSection } from "@/lib/payload/page-data";
import type { Thought } from "@/lib/types-cms";

const placeholderImages = {
  work: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop",
  life: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=800&auto=format&fit=crop",
  systems: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&auto=format&fit=crop",
  default: "https://images.unsplash.com/photo-1506784365847-bbad939e9335?w=800&auto=format&fit=crop",
};

const categoryGradients: Record<string, string> = {
  Work: "from-primary/20 via-primary/10 to-amber-500/5",
  Life: "from-amber-500/20 via-orange-500/10 to-primary/5",
  Systems: "from-orange-500/20 via-primary/10 to-amber-500/5",
  Clarity: "from-primary/15 via-amber-500/10 to-orange-500/5",
};

const categoryIcons: Record<string, typeof BookOpen> = {
  Work: BookOpen,
  Life: BookOpen,
  Systems: BookOpen,
  Clarity: BookOpen,
};

function JournalContent({ data, thoughts }: { data?: any; thoughts: Thought[] }) {
  const searchParams = useSearchParams();
  const categoryFilter = searchParams.get("category");
  const [hoveredSlug, setHoveredSlug] = useState<string | null>(null);
  const tb = getPageSection(data, 2);

  const normalizeCategory = (value: string) => value.toLowerCase().replace(/\s+/g, "-");

  const filteredThoughts = categoryFilter
    ? thoughts.filter((thought) => normalizeCategory(thought.tag) === normalizeCategory(categoryFilter) || (categoryFilter === "life" && normalizeCategory(thought.tag) === "inner-life"))
    : thoughts;

  const getCategoryPath = (tag: string) => {
    return tag.toLowerCase().replace(' ', '-');
  };

  const getPlaceholderImage = (tag: string) => {
    const lowerTag = tag.toLowerCase();
    if (lowerTag.includes('work')) return placeholderImages.work;
    if (lowerTag.includes('life')) return placeholderImages.life;
    if (lowerTag.includes('system')) return placeholderImages.systems;
    return placeholderImages.default;
  };

  const getCategoryGradient = (tag: string) => {
    return categoryGradients[tag] || categoryGradients.Clarity;
  };

  const getReadTime = (thought: Thought) => {
    const source = thought.content || thought.excerpt;
    const words = source.trim().split(/\s+/).filter(Boolean).length;
    return Math.max(1, Math.ceil(words / 225));
  };

  const getDisplayDate = (thought: Thought, index: number) => {
    if (thought.date) return thought.date;
    const fallbackDates = ["May 2026", "April 2026", "March 2026", "February 2026", "January 2026", "December 2025"];
    return fallbackDates[index % fallbackDates.length];
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-white py-16 transition-colors duration-500 dark:bg-stone-900 md:py-20 lg:py-24">
      {/* Background ambient */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-0 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-primary/5 via-amber-500/3 to-transparent blur-7xl" />
        <div className="absolute -right-40 bottom-0 h-[600px] w-[600px] rounded-full bg-gradient-to-tl from-amber-500/5 via-primary/3 to-transparent blur-7xl" />
      </div>

      <div className="container-responsive relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 lg:mb-16"
        >
          <div className="mb-6 flex items-center gap-4">
            <div className="h-px w-12 bg-gradient-to-r from-primary/60 to-transparent" />
            <span className="text-sm font-medium uppercase tracking-wider text-primary/70">
              {tb.journalLabel || "Journal"}
            </span>
          </div>
          
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h2 className="mb-3 font-serif text-3xl font-medium tracking-tight text-stone-900 dark:text-white sm:text-4xl lg:text-5xl">
                {tb.journalTitle || "Notes and Reflections"}
              </h2>
              <p className="text-lg text-stone-500 dark:text-stone-400">
                {categoryFilter 
                  ? `${tb.journalFilteredPrefix || "Showing reflections tagged with"} "${categoryFilter}"`
                  : tb.journalDescription || "Ongoing reading, observations, and inquiries."}
              </p>
            </div>
            
            {categoryFilter && (
              <Link 
                href="/thoughts" 
                className="group inline-flex w-fit items-center gap-2 rounded-full border border-stone-300 bg-white px-5 py-2.5 text-sm font-medium text-stone-700 transition-all hover:border-primary/40 hover:text-primary dark:border-stone-700 dark:bg-stone-900 dark:text-stone-300"
              >
                <X className="h-4 w-4" />
                Clear filter
              </Link>
            )}
          </div>
        </motion.div>

        {/* Journal Entries Grid */}
        {filteredThoughts.length > 0 ? (
          <>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-8">
              {filteredThoughts.map((thought, index) => {
                const imageUrl = thought.image?.url || getPlaceholderImage(thought.tag);
                const isHovered = hoveredSlug === thought.slug;
                const categoryGradient = getCategoryGradient(thought.tag);
                const readTime = getReadTime(thought);
                const displayDate = getDisplayDate(thought, index);
                
                return (
                  <motion.article
                    key={thought.slug}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    onMouseEnter={() => setHoveredSlug(thought.slug)}
                    onMouseLeave={() => setHoveredSlug(null)}
                    className="group relative h-full"
                  >
                    {/* Hover gradient background */}
                    <div className={`absolute -inset-3 rounded-2xl bg-gradient-to-br ${categoryGradient} opacity-0 blur-xl transition-opacity duration-700 group-hover:opacity-100`} />
                    
                    <Link 
                      href={`/thoughts/${getCategoryPath(thought.tag)}/${thought.slug}`}
                      className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-stone-200/60 bg-white/90 backdrop-blur-sm transition-all duration-500 hover:border-primary/30 hover:shadow-2xl dark:border-stone-700/60 dark:bg-stone-900/90"
                    >
                      {/* Image Container */}
                      <div className="relative aspect-[16/10] w-full overflow-hidden">
                        <Image 
                          src={imageUrl}
                          alt={thought.image?.alt || thought.title} 
                          fill
                          className={`object-cover transition-transform duration-700 ${
                            isHovered ? 'scale-110' : 'scale-100'
                          }`}
                          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                        />
                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/70 via-stone-900/30 to-transparent" />
                        
                        {/* Category badge */}
                        <div className="absolute left-4 top-4">
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/95 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-primary shadow-lg backdrop-blur-sm dark:bg-stone-900/95">
                            <BookOpen className="h-3 w-3" />
                            {thought.tag}
                          </span>
                        </div>
                        
                        {/* Read time badge */}
                        <div className="absolute bottom-4 right-4">
                          <span className="inline-flex items-center gap-1 rounded-full bg-stone-900/60 px-2 py-0.5 text-[10px] text-white/80 backdrop-blur-sm">
                            <Clock className="h-3 w-3" />
                            {readTime} min read
                          </span>
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="flex flex-1 flex-col p-5">
                        {/* Date */}
                        <div className="mb-2 flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-stone-400 dark:text-stone-500">
                          <Calendar className="h-3 w-3" />
                          {displayDate}
                        </div>
                        
                        {/* Title */}
                        <h3 className="mb-3 font-serif text-lg font-semibold leading-snug text-stone-900 transition-colors duration-300 group-hover:text-primary dark:text-white line-clamp-2">
                          {thought.title}
                        </h3>
                        
                        {/* Excerpt */}
                        <p className="mb-4 flex-1 text-sm leading-relaxed text-stone-600 dark:text-stone-400 line-clamp-3">
                          {thought.excerpt}
                        </p>
                        
                        {/* Read more CTA */}
                        <div className="flex items-center text-sm font-medium text-primary transition-all duration-300 group-hover:gap-2">
                          <span className="border-b border-transparent transition-all group-hover:border-primary">
                            Read reflection
                          </span>
                          <ArrowRight className={`h-4 w-4 transition-all duration-500 ${
                            isHovered ? 'translate-x-1' : 'translate-x-0'
                          }`} />
                        </div>
                      </div>
                    </Link>
                  </motion.article>
                );
              })}
            </div>

            {/* Reflection counter */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-16 text-center"
            >
              <div className="inline-flex items-center gap-4 text-sm text-stone-400 dark:text-stone-500">
                <div className="h-px w-12 bg-stone-300 dark:bg-stone-700" />
                <span className="font-medium uppercase tracking-wider">{filteredThoughts.length} reflections</span>
                <div className="h-px w-12 bg-stone-300 dark:bg-stone-700" />
              </div>
            </motion.div>
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex min-h-[50vh] flex-col items-center justify-center rounded-3xl border border-dashed border-stone-300 bg-stone-50/50 py-20 text-center dark:border-stone-700 dark:bg-stone-900/50"
          >
            <div className="rounded-full bg-stone-100 p-4 dark:bg-stone-800">
              <Search className="h-8 w-8 text-stone-400 dark:text-stone-500" />
            </div>
            <h3 className="mt-6 font-serif text-xl text-stone-600 dark:text-stone-400">
              No reflections found in this category.
            </h3>
            <p className="mt-2 text-stone-400 dark:text-stone-500">
              Try selecting a different category or browse all reflections.
            </p>
            <Link 
              href="/thoughts" 
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-white transition-all hover:bg-primary/90"
            >
              Show all reflections
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
}

export default function ThoughtsJournal({ data, thoughts }: { data?: any; thoughts: Thought[] }) {
  return (
    <Suspense fallback={
      <div className="flex min-h-screen items-center justify-center bg-white dark:bg-stone-900">
        <div className="flex flex-col items-center gap-4">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent" />
          <div className="text-stone-400">Loading journal...</div>
        </div>
      </div>
    }>
      <JournalContent data={data} thoughts={thoughts} />
    </Suspense>
  );
}
