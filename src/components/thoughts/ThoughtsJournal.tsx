"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const journalItems = [
  {
    title: "Growth motion only works when it fits the business",
    excerpt: "A growth model can look right on paper and still fail in practice when it does not match the product, the buyer, or the stage.",
    tag: "Work"
  },
  {
    title: "When pipeline volume hides weak signal",
    excerpt: "More pipeline does not automatically mean more confidence. The real question is whether the signal underneath it can be trusted.",
    tag: "Work"
  },
  {
    title: "When CRM structure quietly shapes revenue outcomes",
    excerpt: "CRM problems often show up as reporting or routing issues, but the real effect is deeper: the system starts shaping revenue itself.",
    tag: "Work"
  },
  {
    title: "Why busy teams still lose clarity",
    excerpt: "Activity can create the feeling of momentum while the system underneath keeps decisions fragmented and outcomes weak.",
    tag: "Work"
  },
  {
    title: "Why inconsistency is rarely the real problem",
    excerpt: "The struggle is often not a lack of intention. It is the inner pattern underneath the effort.",
    tag: "Life"
  },
  {
    title: "What hope is doing underneath confusion",
    excerpt: "Hope is not denial. Sometimes it is the quiet force that keeps a person moving before clarity fully arrives.",
    tag: "Life"
  },
  {
    title: "When clarity is blocked by the system beneath it",
    excerpt: "You can want clarity badly and still not reach it when the inner system is shaping what you can see.",
    tag: "Life"
  },
  {
    title: "You are not always fighting the thing you can name",
    excerpt: "Sometimes the struggle you can describe is only the surface of something deeper that has not yet been understood.",
    tag: "Life"
  },
  {
    title: "What changes when you start seeing systems",
    excerpt: "The shift is not only intellectual. It changes how you read outcomes, relationships, and your own decisions.",
    tag: "Core"
  },
  {
    title: "The same lack of clarity shows up in work and life",
    excerpt: "We often separate professional problems from personal ones, but the same hidden patterns can shape both.",
    tag: "Core"
  },
  {
    title: "Clarity is not the end goal. It is the beginning.",
    excerpt: "Clarity matters because it becomes the starting point for better judgment, better direction, and better action.",
    tag: "Core"
  }
];

export default function ThoughtsJournal() {
  return (
    <section className="py-24 bg-stone-50/30 dark:bg-stone-900/10 border-t border-rule">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <header className="mb-16">
            <h2 className="font-serif text-3xl mb-4">Notes and reflections</h2>
            <div className="w-12 h-px bg-primary/30" />
          </header>
          
          <div className="space-y-16">
            {journalItems.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group relative"
              >
                <Link 
                  href={`/thoughts/${item.title.toLowerCase().replace(/ /g, '-')}`}
                  className="block"
                >
                  <span className="text-[0.6rem] font-bold uppercase tracking-widest text-primary/40 block mb-3">
                    {item.tag}
                  </span>
                  <h3 className="font-serif text-2xl mb-4 group-hover:text-primary transition-colors duration-300 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-foreground/60 leading-relaxed font-light mb-6 line-clamp-2">
                    {item.excerpt}
                  </p>
                  <span className="text-[0.65rem] font-medium uppercase tracking-[0.2em] text-foreground/30 group-hover:text-primary/60 transition-colors">
                    Read Reflection
                  </span>
                </Link>
                
                {/* Visual Separator */}
                {index !== journalItems.length - 1 && (
                  <div className="absolute -bottom-8 left-0 w-8 h-px bg-rule/40" />
                )}
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
