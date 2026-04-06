"use client";

import { useParallax } from "@/hooks/useParallax";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  const parallaxOffset = useParallax(0.15);

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-stone-50 dark:bg-stone-950 pt-24">
      {/* Base colour wash + texture */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-stone-50 via-amber-50/25 to-stone-200/40 dark:from-stone-950 dark:via-stone-950 dark:to-primary/[0.07]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-texture opacity-[0.55] dark:opacity-[0.35]"
        aria-hidden
      />

      {/* Multi-stop mesh (still calm — no neon) */}
      <div
        className="pointer-events-none absolute inset-0 opacity-90 dark:opacity-100"
        aria-hidden
        style={{
          background: `
            radial-gradient(ellipse 120% 80% at 85% -5%, rgba(154, 52, 18, 0.13), transparent 52%),
            radial-gradient(ellipse 90% 70% at -15% 105%, rgba(217, 119, 6, 0.09), transparent 48%),
            radial-gradient(ellipse 55% 45% at 45% 45%, rgba(99, 102, 241, 0.05), transparent 58%)
          `,
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 hidden dark:block opacity-100"
        aria-hidden
        style={{
          background: `
            radial-gradient(ellipse 120% 80% at 85% -5%, rgba(194, 65, 12, 0.18), transparent 52%),
            radial-gradient(ellipse 90% 70% at -15% 105%, rgba(180, 83, 9, 0.1), transparent 48%),
            radial-gradient(ellipse 55% 45% at 45% 45%, rgba(129, 140, 248, 0.09), transparent 58%)
          `,
        }}
      />

      {/* Slow aurora blobs */}
      <motion.div
        style={{ y: parallaxOffset * 0.85 }}
        className="hero-aurora-drift pointer-events-none absolute -right-20 top-0 h-[42rem] w-[42rem] rounded-full bg-gradient-to-br from-primary/25 via-amber-200/20 to-transparent blur-3xl dark:from-primary/30 dark:via-orange-950/40 dark:to-transparent"
        aria-hidden
      />
      <motion.div
        style={{ y: parallaxOffset * 0.45 }}
        className="hero-aurora-drift-reverse pointer-events-none absolute -left-24 bottom-0 h-[36rem] w-[36rem] rounded-full bg-gradient-to-tr from-indigo-300/15 via-primary/15 to-amber-100/25 blur-3xl dark:from-indigo-900/35 dark:via-primary/20 dark:to-stone-900/20"
        aria-hidden
      />

      {/* Diagonal colour wash — extra depth */}
      <div
        className="hero-aurora-pulse pointer-events-none absolute left-1/2 top-[-20%] h-[120%] w-[140%] -translate-x-1/2 bg-gradient-to-br from-transparent via-primary/[0.06] to-amber-500/[0.07] blur-2xl dark:via-primary/[0.1] dark:to-amber-900/[0.12]"
        aria-hidden
      />

      {/* Bottom fade into next section */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-stone-50 to-transparent dark:from-stone-950 dark:to-transparent"
        aria-hidden
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left — copy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="z-10 lg:col-span-6 lg:pr-8"
          >
            <div className="mb-6 text-sm font-medium uppercase tracking-widest text-stone-500 dark:text-stone-400 md:mb-10">
              Systems at Work & in Life
            </div>

            <h1 className="mb-8 font-serif text-5xl font-medium leading-[1.1] text-stone-900 dark:text-stone-50 sm:text-6xl md:mb-12 md:text-7xl lg:text-[5rem]">
              When{" "}
              <span className="bg-gradient-to-r from-primary via-amber-700 to-orange-800 bg-clip-text font-light italic text-transparent dark:from-orange-300 dark:via-primary dark:to-amber-100">
                something
              </span>{" "}
              isn&apos;t adding up.
            </h1>

            <p className="mb-12 max-w-lg text-xl font-light leading-relaxed text-stone-600 dark:text-stone-300 md:text-2xl">
              Most outcomes are driven by systems you may not fully see yet. I
              help individuals, teams, and organisations understand those
              systems more clearly so they can move with better judgment,
              clearer direction, and stronger outcomes.
            </p>

            <div className="flex flex-col gap-6 sm:flex-row">
              <Link
                href="/work"
                className="group inline-flex items-center justify-center rounded-full bg-gradient-to-r from-stone-900 to-stone-800 px-8 py-4 font-medium text-stone-100 shadow-sm transition-all hover:from-primary hover:to-orange-800 hover:shadow-md hover:shadow-primary/20 dark:from-stone-100 dark:to-stone-200 dark:text-stone-900 dark:hover:from-primary dark:hover:to-orange-700 dark:hover:text-stone-50"
              >
                <span>Explore Work</span>
                <ArrowRight className="ml-3 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/inner-life"
                className="group inline-flex items-center justify-center rounded-full border border-stone-300/90 bg-white/40 px-8 py-4 font-medium text-stone-900 backdrop-blur-sm transition-all hover:border-primary/40 hover:bg-white/70 dark:border-stone-600 dark:bg-stone-900/40 dark:text-stone-100 dark:hover:border-stone-400 dark:hover:bg-stone-800/60"
              >
                <span>Explore Inner Life</span>
                <ArrowRight className="ml-3 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>

          {/* Right — portrait */}
          {/* <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex justify-center lg:col-span-6 lg:justify-end"
          >
            <div className="relative ">
              <div
                className="absolute -inset-3 rounded-[2.4rem] bg-gradient-to-br from-primary/30 via-amber-400/15 to-indigo-400/10 opacity-80 blur-2xl dark:from-primary/25 dark:via-orange-900/30 dark:to-indigo-900/25"
                aria-hidden
              />
              <div className="relative rounded-[2rem] bg-gradient-to-br from-primary/35 via-stone-300/50 to-amber-400/30 p-[1px] dark:from-primary/45 dark:via-stone-600/50 dark:to-amber-600/25">
                <div className="relative  w-full aspect-[3/3] max-w-md overflow-hidden rounded-[1.95rem] bg-stone-200 dark:bg-stone-800 lg:max-w-lg organic-shadow">
                  <img
                    src="/images/3.png"
                    alt="Paul Akinola portrait"
                    className="absolute inset-0 bg-red-500 h-full w-full object-cover opacity-95 transition-transform duration-[2s] ease-out mix-blend-multiply hover:scale-105 dark:mix-blend-normal"
                  />
                  <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-stone-900/45 via-transparent to-stone-900/5 dark:from-black/55 dark:to-transparent" />
                  <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-br from-transparent via-transparent to-primary/10" />
                </div>
              </div>
            </div>

            <motion.div
              style={{ y: parallaxOffset * -0.5 }}
              className="absolute -bottom-8 -left-8 z-20 max-w-[200px] rounded-3xl border border-white/60 bg-white/85 p-8 organic-shadow backdrop-blur-md dark:border-stone-600 dark:bg-stone-900/85 lg:-bottom-12 lg:-left-12"
            >
              <div className="mb-2 font-serif text-3xl text-primary">
                &ldquo;
              </div>
              <p className="text-sm font-medium italic leading-relaxed text-stone-600 dark:text-stone-300">
                Most problems do not start where they show up.
              </p>
            </motion.div>
          </motion.div> */}

          {/* Right Column - Editorial Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex justify-center lg:justify-end relative"
          >
            {/* Elegant Image Frame */}
            <div className="relative w-full max-w-md lg:max-w-lg aspect-[3/3] organic-shadow rounded-[2rem] overflow-hidden bg-stone-200 dark:bg-stone-800 isolate">
              <img
                src="/images/bg-clean.png"
                alt="Paul Akinola portrait"
                className="absolute inset-0 w-full h-full object-contain mix-blend-multiply dark:mix-blend-normal opacity-95 hover:scale-105 transition-transform duration-[2s] ease-out"
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
