"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function WorkTogetherPreview() {
  return (
    <section id="work-together-preview" className="py-24 bg-stone-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6 text-stone-50 font-serif">
            If this feels familiar, there is a place to start.
          </h2>
          <p className="text-xl text-stone-300 font-light leading-relaxed mb-12 max-w-2xl mx-auto">
            If you are trying to make sense of what is not adding up in your work, your team, or your inner life, start with a conversation.
          </p>
          <Link 
            href="/together#contact"
            className="group inline-flex items-center justify-center px-8 py-4 bg-white text-stone-900 rounded-full font-medium transition-transform hover:scale-105"
          >
            Start a Conversation
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
