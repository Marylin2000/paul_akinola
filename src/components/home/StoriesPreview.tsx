// StoriesPreview.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Briefcase, Heart } from "lucide-react";

export default function StoriesPreview() {
  const stories = [
    {
      type: "Work",
      title: "When growth motion and business stage do not match",
      excerpt: "Sometimes the problem is not execution. It's a mismatch between the company's stage, the motion it's trying to run, and the systems needed to support it.",
      ctaLabel: "Read Story",
      ctaDestination: "/thoughts/growth-motion-fits-business",
      icon: Briefcase,
      gradient: "from-primary/20 to-amber-500/10",
    },
    {
      type: "Work",
      title: "When CRM structure hides revenue truth",
      excerpt: "A CRM can collect a lot of information and still fail to create clarity. Structure, lifecycle design, and signal quality shape whether the revenue story can actually be trusted.",
      ctaLabel: "Read Story",
      ctaDestination: "/thoughts/crm-structure-revenue-outcomes",
      icon: Briefcase,
      gradient: "from-primary/15 to-orange-500/10",
    },
    {
      type: "Life",
      title: "When discipline is not the real issue",
      excerpt: "What looks like inconsistency on the surface is often rooted in deeper patterns of fear, identity, belief, and internal strain.",
      ctaLabel: "Read Story",
      ctaDestination: "/thoughts/inconsistency-rarely-real-problem",
      icon: Heart,
      gradient: "from-amber-500/20 to-primary/10",
    },
    {
      type: "Life",
      title: "When hope gets lost in confusion",
      excerpt: "People do not only need answers. They need language for what is happening within them, and hope that change is still possible.",
      ctaLabel: "Read Story",
      ctaDestination: "/thoughts/hope-underneath-confusion",
      icon: Heart,
      gradient: "from-orange-500/20 to-primary/10",
    }
  ];

  return (
    <section id="stories-preview" className="relative overflow-hidden bg-stone-50 py-24 dark:bg-stone-950 md:py-32">
      <div className="container-responsive">
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-6 flex items-center gap-4">
            <div className="h-px w-12 bg-gradient-to-r from-primary/60 to-transparent" />
            <span className="text-sm font-medium uppercase tracking-wider text-primary/70">
              Selected Case Studies
            </span>
          </div>
          
          <h2 className="mb-4 font-serif text-3xl font-medium tracking-tight text-stone-900 dark:text-white sm:text-4xl md:text-5xl">
            Stories from work and life.
          </h2>
          <p className="max-w-2xl text-lg text-stone-500 dark:text-stone-400">
            A few examples of the patterns I keep returning to, in organisations and in people.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stories.map((story, index) => {
            const Icon = story.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -6 }}
                className="group relative"
              >
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${story.gradient} opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100`} />
                
                <Link 
                  href={story.ctaDestination}
                  className="relative flex h-full flex-col rounded-2xl border border-stone-200/60 bg-white/80 p-6 backdrop-blur-sm transition-all duration-300 group-hover:border-primary/20 group-hover:shadow-xl dark:border-stone-700/60 dark:bg-stone-900/80"
                >
                  <div className="mb-5 flex items-start justify-between">
                    <div className={`rounded-xl p-2.5 ${
                      story.type === "Work" 
                        ? "bg-gradient-to-br from-primary/15 to-amber-500/10" 
                        : "bg-gradient-to-br from-amber-500/15 to-primary/10"
                    }`}>
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-xs font-medium uppercase tracking-wider text-stone-400 dark:text-stone-500">
                      {story.type}
                    </span>
                  </div>
                  
                  <h3 className="mb-3 font-serif text-lg font-semibold leading-snug text-stone-900 dark:text-white">
                    {story.title}
                  </h3>
                  
                  <p className="mb-6 flex-1 text-sm leading-relaxed text-stone-600 dark:text-stone-400">
                    {story.excerpt}
                  </p>
                  
                  <div className="flex items-center text-sm font-medium text-primary transition-all group-hover:gap-2">
                    <span>{story.ctaLabel}</span>
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
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