// WorkTogetherPreview.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";

export default function WorkTogetherPreview() {
  return (
    <section id="work-together-preview" className="relative overflow-hidden bg-stone-900 py-24 text-white md:py-32">
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-0 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-primary/20 via-amber-500/10 to-transparent blur-7xl" />
        <div className="absolute -right-40 bottom-0 h-[600px] w-[600px] rounded-full bg-gradient-to-tl from-amber-500/15 via-primary/10 to-transparent blur-7xl" />
      </div>
      
      <div className="container-responsive relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-8 inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 backdrop-blur-sm">
            <MessageCircle className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-white/90">Let's Talk</span>
          </div>
          
          <h2 className="mb-6 font-serif text-3xl font-medium tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
            If this feels familiar, there is a place to start.
          </h2>
          
          <p className="mx-auto mb-12 max-w-2xl text-lg leading-relaxed text-stone-300 sm:text-xl">
            If you're trying to make sense of what's not adding up—in your work, 
            your team, or your inner life—start with a conversation.
          </p>
          
          <Link 
            href="/together#contact"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-white px-8 py-4 font-medium text-stone-900 shadow-lg shadow-white/10 transition-all hover:shadow-xl hover:shadow-primary/20"
          >
            <span className="relative z-10 flex items-center">
              Start a Conversation
              <ArrowRight className="ml-3 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
            </span>
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-primary/20 via-amber-500/10 to-transparent transition-transform duration-500 group-hover:translate-x-0" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}