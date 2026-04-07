"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

type DetailBlock = {
  headline: string;
  body: string;
};

type Offering = {
  title: string;
  lede: string;
  details: DetailBlock[];
  imageSrc: string;
  imageAlt: string;
};

const offerings: Offering[] = [
  {
    title: "Individuals",
    lede:
      "Work often begins beneath performance—where habits, fear, and identity meet pressure. That layer is data, not noise.",
    details: [
      {
        headline: "Awareness",
        body:
          "See what you avoid, what drains you, and what steers choices before you rationalise—or you keep fixing the wrong layer.",
      },
      {
        headline: "Clarity",
        body:
          "Tell what is happening apart from what you fear is happening, so shame gives way to something workable.",
      },
      {
        headline: "Direction",
        body:
          "Align who you are becoming with values, energy, and next decisions—not only the role you were trained to fill.",
      },
      {
        headline: "Growth",
        body:
          "Build capacity under strain: steadier judgement, repaired trust, and honesty when resources get tight.",
      },
      {
        headline: "Personal transformation",
        body:
          "The slower work of identity, belief, and meaning—what actually decides whether change lasts.",
      },
    ],
    imageSrc:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Calm mountain vista suggesting space for reflection",
  },
  {
    title: "Teams",
    lede:
      "Talent is rarely the whole story—teams crack when purpose blurs, incentives tug apart, and collaboration systems eat good intent.",
    details: [
      {
        headline: "Shared purpose",
        body:
          "A reason beyond tasks—sharp enough to test in trade-offs when priorities collide and pressure spikes.",
      },
      {
        headline: "Better decisions",
        body:
          "Trade-offs and dissent land better when flow, ownership, and rewards are visible—not only heroic judgement.",
      },
      {
        headline: "Aligned effort",
        body:
          "Aim energy at the same risks instead of scattering it across vague mandates and hidden bottlenecks.",
      },
      {
        headline: "Healthier ways of working together",
        body:
          "Safety without avoidance, accountability without cruelty—feedback and conflict people can actually sustain.",
      },
    ],
    imageSrc:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Team collaborating around a table",
  },
  {
    title: "Organisations",
    lede:
      "Beneath charts lie living systems—structures, rituals, and signals—that quietly make outcomes more or less likely.",
    details: [
      {
        headline: "Structure for performance",
        body:
          "Roles, cadence, handoffs, and feedback people can keep under load—grounded in real constraints.",
      },
      {
        headline: "Growth",
        body:
          "Match pace to capability: what to scale, simplify, or slow before drag silently wins.",
      },
      {
        headline: "Revenue",
        body:
          "Pipeline truth over forecast theatre—signal, lifecycle, and definitions leadership can trust.",
      },
      {
        headline: "Systems that support better outcomes",
        body:
          "Tools, rituals, incentives, and weekly narratives—worthy of the same scrutiny as strategy slides.",
      },
    ],
    imageSrc:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    imageAlt: "City buildings representing organisational structure",
  },
];

const listContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.04 },
  },
};

const listItem = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function WhatIDo() {
  const [active, setActive] = useState(0);
  const activeItem = offerings[active];
  const imageOnLeft = active % 2 === 0;

  return (
    <section id="what-i-do" className="py-16 md:py-20 bg-stone-50 dark:bg-stone-800 relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35] dark:opacity-[0.2]"
        aria-hidden
      >
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-gradient-to-bl from-primary/10 to-transparent blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-gradient-to-tr from-stone-300/30 to-transparent dark:from-stone-600/20 blur-3xl" />
      </div>

      <div className="w-full max-w-[min(100%,1320px)] mx-auto px-3 sm:px-4 md:px-5 lg:px-6 relative">
        <motion.div
          className="text-center mb-8 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
        
          <p className="text-2xl sm:text-3xl text-stone-800 dark:text-stone-100 font-light leading-snug font-serif">
            I help people understand what is shaping their outcomes, at work and
            in life.
          </p>
        </motion.div>

        <div
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8"
          role="tablist"
          aria-label="What I work on"
        >
          {offerings.map((item, index) => {
            const isActive = active === index;
            return (
              <button
                key={item.title}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls={`what-i-do-panel-${item.title}`}
                id={`what-i-do-tab-${item.title}`}
                onClick={() => setActive(index)}
                className={`relative px-5 py-2.5 text-sm sm:text-base rounded-full transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-400 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-50 dark:focus-visible:ring-offset-stone-800 ${
                  isActive
                    ? "text-stone-900 dark:text-white"
                    : "text-stone-500 dark:text-stone-400 hover:text-stone-700 dark:hover:text-stone-200"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="what-i-do-tab-bg"
                    className="absolute inset-0 bg-white dark:bg-stone-900 rounded-full border border-stone-200/90 dark:border-stone-600 organic-shadow"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.45 }}
                  />
                )}
                <span className="relative z-10 font-serif font-semibold">
                  {item.title}
                </span>
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={activeItem.title}
            id={`what-i-do-panel-${activeItem.title}`}
            role="tabpanel"
            aria-labelledby={`what-i-do-tab-${activeItem.title}`}
            initial={{ opacity: 0, x: imageOnLeft ? -24 : 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: imageOnLeft ? 16 : -16 }}
            transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-stretch w-full"
          >
            {imageOnLeft ? (
              <>
                <ImagePane
                  src={activeItem.imageSrc}
                  alt={activeItem.imageAlt}
                  align="left"
                />
                <ContentPane item={activeItem} />
              </>
            ) : (
              <>
                <ContentPane item={activeItem} />
                <ImagePane
                  src={activeItem.imageSrc}
                  alt={activeItem.imageAlt}
                  align="right"
                />
              </>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

function ImagePane({
  src,
  alt,
  align,
}: {
  src: string;
  alt: string;
  align: "left" | "right";
}) {
  return (
    <motion.div
      className={`w-full max-w-md mx-auto lg:mx-0 lg:max-w-none shrink-0 flex flex-col self-stretch min-h-0 lg:w-[44%] xl:w-[46%] lg:min-w-[320px] xl:min-w-[380px] ${
        align === "right" ? "lg:order-2" : ""
      }`}
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.04 }}
    >
      <div
        className={`relative flex-1 w-full min-h-[13rem] lg:min-h-0 overflow-hidden rounded-[1.35rem] border border-stone-200/90 dark:border-stone-700/90 organic-shadow aspect-[3/4] lg:aspect-auto ${
          align === "left"
            ? "lg:rotate-[-1.25deg] hover:lg:rotate-0"
            : "lg:rotate-[1.25deg] hover:lg:rotate-0"
        } transition-transform duration-500 ease-out`}
      >
        <div
          className={`absolute -inset-px rounded-[1.4rem] bg-gradient-to-br from-white/40 to-transparent dark:from-white/5 pointer-events-none z-10`}
          aria-hidden
        />
        <Image
          key={src}
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) min(100vw, 28rem), (max-width: 1280px) 40vw,420px"
          priority={false}
        />
      </div>
    </motion.div>
  );
}

function ContentPane({ item }: { item: Offering }) {
  return (
    <motion.div
      className="w-full lg:flex-1 min-w-0 self-stretch flex flex-col min-h-0"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1], delay: 0.06 }}
    >
      <div className="rounded-[1.5rem] bg-white/90 dark:bg-stone-900/70 border border-stone-200/70 dark:border-stone-700/80 px-5 py-6 sm:px-7 sm:py-7 organic-shadow backdrop-blur-sm flex-1 min-h-0 flex flex-col lg:min-h-full">
        <h3 className="text-xl sm:text-2xl font-semibold text-stone-900 dark:text-white font-serif tracking-tight mb-2">
          {item.title}
        </h3>
        <p className="text-sm sm:text-base text-stone-600 dark:text-stone-300 leading-relaxed font-light mb-5 pb-4 border-b border-stone-200/80 dark:border-stone-700/80">
          {item.lede}
        </p>

        <motion.ul
          className="space-y-4 sm:space-y-5 list-none m-0 p-0"
          variants={listContainer}
          initial="hidden"
          animate="show"
        >
          {item.details.map((block, i) => (
            <motion.li
              key={`${item.title}-${block.headline}`}
              variants={listItem}
              className="relative pl-5 sm:pl-6 border-l-2 border-primary/25 dark:border-primary/35"
            >
              <span
                className="absolute -left-[2px] top-1.5 w-[2px] h-6 bg-gradient-to-b from-primary/60 to-transparent rounded-full opacity-80"
                aria-hidden
              />
              <p className="text-[0.65rem] sm:text-[0.7rem] font-sans tracking-[0.16em] uppercase text-stone-500 dark:text-stone-400 mb-1">
                {String(i + 1).padStart(2, "0")} · {block.headline}
              </p>
              <p className="text-sm sm:text-[0.95rem] text-stone-700 dark:text-stone-200 leading-snug sm:leading-relaxed font-light">
                {block.body}
              </p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </motion.div>
  );
}
