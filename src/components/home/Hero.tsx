"use client";

import { useParallax } from "@/hooks/useParallax";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  const parallaxOffset = useParallax(0.15);

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-stone-50 dark:bg-stone-950">
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

            <h1 className="mb-8 font-serif text-3xl font-medium leading-[1.1] text-stone-900 dark:text-stone-50 sm:text-6xl md:mb-12 md:text-7xl lg:text-[5rem]">
              When{" "}
              <span className="bg-gradient-to-r from-primary via-amber-700 to-orange-800 bg-clip-text font-light italic text-transparent dark:from-orange-300 dark:via-primary dark:to-amber-100">
                something
              </span>{" "}
              isn&apos;t adding up.
            </h1>

            <p className="mb-12 max-w-lg text-xl font-light leading-relaxed text-stone-600 dark:text-stone-300 md:text-2xl">
              Most outcomes are being shaped by something beneath the surface.

              I help you see it clearly so you can move with better judgment, stronger direction, and real change
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

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex justify-center lg:justify-end relative"
          >
            <div className="relative mx-auto aspect-[3/3] w-full max-w-[min(100%,18rem)] sm:max-w-[19rem] lg:max-w-[30rem]">
              <div
                className="pointer-events-none absolute -inset-5 rounded-full bg-gradient-to-br from-primary/30 via-amber-400/20 to-orange-600/25 opacity-80 blur-2xl dark:from-primary/25 dark:via-orange-900/30 dark:to-orange-950/40 dark:opacity-70"
                aria-hidden
              />
              {/* Gradient border: stroke only — inner stays transparent */}
              <div className="relative h-full w-full rounded-full border-10< p-[3px] shadow-[0_24px_50px_-20px_rgba(28,25,23,0.22)]  dark:via-primary dark:to-stone-700 dark:shadow-[0_28px_60px_-24px_rgba(0,0,0,0.5)]">
                <div className="relative h-full w-full overflow-hidden rounded-full bg-transparent">
                  <Image
                    src="/images/bg-clean.png"
                    alt="Paul Akinola portrait"
                    fill
                    sizes="(max-width: 1024px) 90vw, 20rem"
                    priority
                    className="object-contain p-2 transition-transform duration-[2s] ease-out hover:scale-[1.03]"
                  />
                  <div
                    className="pointer-events-none absolute inset-0 rounded-full shadow-[inset_0_0_0_1px_rgba(255,255,255,0.35)] dark:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.12)]"
                    aria-hidden
                  />
                </div>
              </div>
            </div>

            {/* Floating Editorial Accent */}
            <motion.div
              style={{ y: parallaxOffset * -0.5 }}
              className="absolute -bottom-8 -left-8 lg:-bottom-2 lg:-left-12 bg-white dark:bg-stone-900 p-4 rounded-3xl organic-shadow z-20 max-w-[200px]"
            >
              <div className="font-serif text-3xl text-primary">&ldquo;</div>
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
