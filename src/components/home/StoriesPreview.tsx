"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function StoriesPreview() {
  const stories = [
    {
      type: "Work",
      title: "When growth motion and business stage do not match",
      excerpt: "Sometimes the problem is not execution. It is a mismatch between the company's stage, the motion it is trying to run, and the systems needed to support it.",
      ctaLabel: "Read Story",
      ctaDestination: "/thoughts/growth-motion-fits-business"
    },
    {
      type: "Work",
      title: "When CRM structure hides revenue truth",
      excerpt: "A CRM can collect a lot of information and still fail to create clarity. Structure, lifecycle design, and signal quality shape whether the revenue story can actually be trusted.",
      ctaLabel: "Read Story",
      ctaDestination: "/thoughts/crm-structure-revenue-outcomes"
    },
    {
      type: "Life",
      title: "When discipline is not the real issue",
      excerpt: "What looks like inconsistency on the surface is often rooted in deeper patterns of fear, identity, belief, and internal strain.",
      ctaLabel: "Read Story",
      ctaDestination: "/thoughts/inconsistency-rarely-real-problem"
    },
    {
      type: "Life",
      title: "When hope gets lost in confusion",
      excerpt: "People do not only need answers. They need language for what is happening within them, and hope that change is still possible.",
      ctaLabel: "Read Story",
      ctaDestination: "/thoughts/hope-underneath-confusion"
    }
  ];

  return (
    <section id="stories-preview" className="py-24 bg-stone-50 dark:bg-stone-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-stone-900 dark:text-white tracking-tight mb-4 font-serif">
            Stories from work and life.
          </h2>
          <p className="text-xl text-stone-600 dark:text-stone-400 font-light max-w-2xl">
            A few examples of the patterns I keep returning to, in organisations and in people.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stories.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link 
                href={story.ctaDestination}
                className="group flex flex-col h-full bg-white dark:bg-stone-900 rounded-2xl p-8 border border-stone-200 dark:border-stone-800 transition-all hover:shadow-lg hover:-translate-y-1"
              >
                <div className="text-xs uppercase tracking-widest text-stone-400 dark:text-stone-500 mb-6 font-semibold">
                  {story.type} Story
                </div>
                <h3 className="text-xl font-semibold text-stone-900 dark:text-stone-100 mb-4 leading-snug font-serif">
                  {story.title}
                </h3>
                <p className="text-stone-600 dark:text-stone-400 text-sm leading-relaxed mb-8 flex-grow">
                  {story.excerpt}
                </p>
                <div className="flex items-center text-sm font-medium text-stone-900 dark:text-white group-hover:text-primary transition-colors">
                  {story.ctaLabel}
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
