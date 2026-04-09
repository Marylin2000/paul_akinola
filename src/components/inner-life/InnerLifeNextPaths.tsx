"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const paths = [
  {
    tag: "Path Forward",
    title: "Work Together",
    body: "If this connects to something you&apos;re working through, this is where I help people think more clearly about what&apos;s shaping them.",
    cta: "Start a Conversation",
    href: "/work-together"
  },
  {
    tag: "Integration",
    title: "Systems at Work",
    body: "How you think and respond shows up in how you work, lead, and make decisions. Clarity here often connects back to how you perform in the systems around you.",
    cta: "Explore the Work lens",
    href: "/work"
  }
];

export default function InnerLifeNextPaths() {
  return (
    <section className="relative overflow-hidden py-32 border-t border-rule bg-background transition-colors duration-500">
      <div className="relative mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="max-w-[720px] mb-20 lg:mb-24">
          <div className="mb-10 text-[0.65rem] font-medium uppercase tracking-[0.15em] text-foreground/40">
            07 — Next Paths
          </div>
          <h2 className="font-serif text-[clamp(1.4rem,2.5vw,1.8rem)] font-normal text-foreground/50 tracking-wide">
            Where inner systems meet practical reality.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-rule border border-rule transition-colors duration-500">
          {paths.map((path, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group flex flex-col bg-background p-10 lg:p-14 hover:bg-paper-warm transition-colors duration-300"
            >
              <div className="mb-6 text-[0.65rem] font-medium uppercase tracking-[0.14em] text-primary/60">
                {path.tag}
              </div>
              <h3 className="mb-6 font-serif text-[clamp(1.5rem,2.5vw,2rem)] font-medium leading-[1.2] text-foreground transition-colors duration-300 group-hover:text-primary">
                {path.title}
              </h3>
              <p className="mb-10 flex-1 text-[0.9rem] font-light leading-relaxed text-foreground/60 italic font-serif">
                {path.body}
              </p>
              <Link
                href={path.href}
                className="group inline-flex items-center gap-2 border-b border-rule pb-1 text-[0.75rem] font-medium uppercase tracking-[0.1em] text-foreground transition-all hover:gap-4 hover:border-primary"
              >
                <span>{path.cta}</span>
                <ArrowRight className="h-4 w-4 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
