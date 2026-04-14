"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function BuildCTA() {
  return (
    <section className="py-32 bg-background border-t border-rule transition-colors duration-500">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-12 md:p-20 bg-stone-50/50 dark:bg-stone-900/10 border border-rule/10 rounded-2xl"
          >
            <h2 className="font-serif text-[clamp(1.8rem,3vw,2.5rem)] leading-tight mb-8">
              Talk with Paul
            </h2>
            <p className="text-foreground/60 text-lg mb-12 font-light max-w-xl mx-auto">
              If something here connects with what you're working through, this is where a conversation can start.
            </p>
            <Link 
              href="/together#contact"
              className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-10 py-4 rounded-full font-medium group transition-all hover:gap-5"
            >
              Start a Conversation
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
