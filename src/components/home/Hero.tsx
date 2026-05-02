// Hero.tsx
"use client";

import { useParallax } from "@/hooks/useParallax";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface HeroData {
  titlePrefix: string;
  titleItalic: string;
  titleSuffix: string;
  description: string;
  quote: string;
  eyebrow?: string;
  credentialAnchor?: string;
  image?: { url?: string | null; alt?: string | null } | null;
}

interface HeroProps {
  data?: HeroData | null;
}

const defaults: HeroData = {
  titlePrefix: "You've never looked at it this way before.",
  titleItalic: "",
  titleSuffix: "",
  description:
    "Most outcomes are shaped by something just beneath the surface. I help organisations find it in their revenue. I help people find it in themselves.",
  quote: "Organisational systems · Revenue, GTM & CRM · Human systems · Behaviour, clarity & transformation",
  eyebrow: "Organisational Systems · Human Systems",
  credentialAnchor: "Organisational systems · Revenue, GTM & CRM · Human systems · Behaviour, clarity & transformation",
  image: { url: "/images/bg-clean.png", alt: "Paul Akinola portrait" },
};

export default function Hero({ data }: HeroProps) {
  const parallaxOffset = useParallax(0.12);
  const isOldDefault = data?.titlePrefix === "When" && data?.titleItalic === "something";
  const d = isOldDefault ? defaults : { ...defaults, ...data };

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-stone-50 dark:bg-stone-950">
      {/* Subtle grain texture overlay */}
      <div className="pointer-events-none absolute inset-0 bg-texture opacity-40 dark:opacity-30" aria-hidden />
      
      {/* Atmospheric gradient orbs */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -left-40 top-0 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-primary/15 via-amber-300/10 to-transparent blur-7xl" />
        <div className="absolute -right-40 bottom-0 h-[600px] w-[600px] rounded-full bg-gradient-to-tl from-primary/10 via-orange-200/10 to-transparent blur-7xl" />
        <div className="absolute left-1/3 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-stone-400/5 to-primary/5 blur-6xl" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="text-center lg:text-left"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary backdrop-blur-sm dark:border-primary/30 dark:bg-primary/10">
              <Sparkles className="h-3.5 w-3.5" />
              <span>{d.eyebrow || defaults.eyebrow}</span>
            </div>

            <h1 className="mb-6 font-serif text-4xl font-medium leading-[1.12] tracking-tight text-stone-900 dark:text-stone-50 sm:text-5xl md:text-6xl lg:text-7xl">
              {d.titleItalic ? (
                <>
                  {d.titlePrefix}{" "}
                  <span className="relative inline-block">
                    <span className="relative z-10 bg-gradient-to-r from-primary via-amber-600 to-orange-700 bg-clip-text text-transparent dark:from-orange-400 dark:via-primary dark:to-amber-300">
                      {d.titleItalic}
                    </span>
                    <span className="absolute -inset-x-2 bottom-1 h-3 bg-gradient-to-r from-primary/20 via-amber-300/20 to-orange-400/20 blur-sm dark:from-primary/30 dark:to-amber-500/30" />
                  </span>{" "}
                  {d.titleSuffix}
                </>
              ) : (
                d.titlePrefix
              )}
            </h1>

            <p className="mx-auto mb-10 max-w-xl text-lg font-light leading-relaxed text-stone-600 dark:text-stone-300 sm:text-xl lg:mx-0">
              {d.description}
            </p>

            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <Link
                href="/work"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-stone-900 px-8 py-4 font-medium text-white shadow-lg shadow-stone-900/10 transition-all hover:shadow-xl hover:shadow-primary/20 dark:bg-gradient-to-r dark:from-stone-800 dark:to-stone-900"
              >
                <span className="relative z-10 flex items-center">
                  Systems at Work
                  <ArrowRight className="ml-3 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                </span>
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-primary via-primary to-orange-700 transition-transform duration-500 group-hover:translate-x-0" />
              </Link>
              <Link
                href="/inner-life"
                className="group inline-flex items-center justify-center rounded-full border border-stone-300/80 bg-white/60 px-8 py-4 font-medium text-stone-800 backdrop-blur-sm transition-all hover:border-primary/40 hover:bg-white/80 hover:shadow-md dark:border-stone-700 dark:bg-stone-900/60 dark:text-stone-100 dark:hover:border-stone-500 dark:hover:bg-stone-800/80"
              >
                Systems in Life
                <ArrowRight className="ml-3 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
              </Link>
            </div>
          </motion.div>

          {/* Right Column - Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex justify-center lg:justify-end"
            style={{ y: parallaxOffset * 0.3 }}
          >
            {/* Decorative rings */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-[320px] w-[320px] rounded-full border border-primary/10 bg-gradient-to-br from-primary/5 to-transparent blur-2xl sm:h-[400px] sm:w-[400px] lg:h-[480px] lg:w-[480px]" />
              <div className="absolute h-[280px] w-[280px] rounded-full border border-amber-400/15 bg-gradient-to-tr from-amber-300/5 to-transparent blur-xl sm:h-[360px] sm:w-[360px] lg:h-[440px] lg:w-[440px]" />
            </div>

            {/* Main image container */}
            <div className="relative aspect-square w-full max-w-[320px] sm:max-w-[380px] lg:max-w-[420px]">
              <div className="absolute -inset-3 rounded-full bg-gradient-to-br from-primary/25 via-amber-400/15 to-orange-500/20 blur-2xl dark:from-primary/30 dark:via-orange-700/20 dark:to-amber-900/25" />
              
              <div className="relative h-full w-full overflow-hidden rounded-full border border-white/20 bg-gradient-to-br from-stone-100/50 via-white/30 to-stone-50/50 p-1 shadow-2xl backdrop-blur-sm dark:border-stone-700/30 dark:from-stone-800/50 dark:via-stone-900/30 dark:to-stone-950/50">
                <div className="relative h-full w-full overflow-hidden rounded-full">
                  <Image
                    src={d.image?.url ?? "/images/bg-clean.png"}
                    alt={d.image?.alt ?? "Paul Akinola portrait"}
                    fill
                    sizes="(max-width: 640px) 320px, (max-width: 1024px) 380px, 420px"
                    priority
                    className="object-contain p-2 transition-transform duration-700 ease-out hover:scale-105"
                  />
                </div>
              </div>

              {/* Credential anchor replaces the old pull quote while keeping the image treatment intact. */}
              <motion.div
                style={{ y: parallaxOffset * -0.4 }}
                className="absolute -bottom-6 -left-4 rounded-2xl border border-white/30 bg-white/85 p-4 shadow-xl backdrop-blur-md dark:border-stone-700/50 dark:bg-stone-900/85 sm:-left-6 sm:p-5"
              >
                <p className="max-w-[240px] text-xs font-medium uppercase tracking-[0.16em] text-stone-500 dark:text-stone-300 sm:text-sm">
                  {d.credentialAnchor || d.quote}
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
