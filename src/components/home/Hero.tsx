"use client";

import { useParallax } from "@/hooks/useParallax";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  const parallaxOffset = useParallax(0.15);

  return (
    <section className="pt-24 min-h-screen bg-stone-50 dark:bg-stone-950 bg-texture relative overflow-hidden flex items-center">
      {/* Subtle organic background shapes instead of neon glows */}
      <motion.div
        style={{ y: parallaxOffset * 0.8 }}
        className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-stone-200/40 dark:bg-stone-900/40 rounded-full blur-3xl opacity-50 pointer-events-none -transtone-y-1/2 transtone-x-1/4"
      />
      <motion.div
        style={{ y: parallaxOffset * 0.4 }}
        className="absolute bottom-0 left-0 w-[30rem] h-[30rem] bg-orange-900/5 dark:bg-orange-900/10 rounded-full blur-3xl opacity-60 pointer-events-none transtone-y-1/3 -transtone-x-1/4"
      />

      <div className="relative w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column - Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 lg:pr-8 z-10"
          >
            <div className="mb-6 md:mb-10 text-sm tracking-widest text-stone-500 dark:text-stone-400 uppercase font-medium">
              Systems at Work & in Life
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5rem] font-serif font-medium leading-[1.1] text-stone-900 dark:text-stone-50 mb-8 md:mb-12 font-serif">
              See what is <span className="italic font-light text-primary">shaping</span> your results.
            </h1>

            <p className="text-xl md:text-2xl text-stone-600 dark:text-stone-300 mb-12 max-w-lg leading-relaxed font-light">
              Explore how underlying systems structure your performance, decisions, resilience, and personal transformation.
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
              <Link 
                href="/work"
                className="group inline-flex items-center justify-center px-8 py-4 bg-stone-900 dark:bg-stone-100 text-stone-100 dark:text-stone-900 rounded-full font-medium transition-all hover:bg-primary dark:hover:bg-primary dark:hover:text-stone-50"
              >
                <span>Explore Work</span>
                <ArrowRight className="ml-3 w-4 h-4 group-hover:transtone-x-1 transition-transform" />
              </Link>
              <Link 
                href="/inner-life"
                className="group inline-flex items-center justify-center px-8 py-4 bg-transparent text-stone-900 dark:text-stone-100 border border-stone-300 dark:border-stone-700 rounded-full font-medium transition-all hover:border-stone-900 dark:hover:border-stone-300"
              >
                <span>Explore Inner Life</span>
                <ArrowRight className="ml-3 w-4 h-4 group-hover:transtone-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* Right Column - Editorial Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex justify-center lg:justify-end relative"
          >
            {/* Elegant Image Frame */}
            <div className="relative w-full max-w-md lg:max-w-lg aspect-[3/4] organic-shadow rounded-[2rem] overflow-hidden bg-stone-200 dark:bg-stone-800 isolate">
              <img
                src="/images/3.png"
                alt="Paul Akinola portrait"
                className="absolute inset-0 w-full h-full object-cover mix-blend-multiply dark:mix-blend-normal opacity-95 hover:scale-105 transition-transform duration-[2s] ease-out"
              />
              {/* Very soft inner gradient for depth instead of harsh vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 via-stone-900/0 to-stone-900/0 dark:from-black/60 z-10 pointer-events-none" />
            </div>

            {/* Floating Editorial Accent */}
            <motion.div
              style={{ y: parallaxOffset * -0.5 }}
              className="absolute -bottom-8 -left-8 lg:-bottom-12 lg:-left-12 bg-white dark:bg-stone-900 p-8 rounded-3xl organic-shadow z-20 max-w-[200px]"
            >
              <div className="font-serif text-3xl text-primary mb-2">"</div>
              <p className="text-sm text-stone-600 dark:text-stone-300 font-medium italic leading-relaxed">
                Most problems do not start where they show up.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
