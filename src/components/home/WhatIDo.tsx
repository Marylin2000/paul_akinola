// WhatIDo.tsx
"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

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
  gradient: string;
};

export type OfferingInput = {
  title: string;
  lede: string;
  details?: Array<{ headline: string; body: string }> | null;
  image?: { url?: string | null; alt?: string | null } | null;
};

const gradients = [
  "from-primary/20 via-primary/10 to-transparent",
  "from-amber-500/20 via-orange-500/10 to-transparent",
  "from-orange-600/20 via-primary/10 to-transparent",
];

const hardcodedOfferings: Offering[] = [
  {
    title: "Individuals",
    lede: "Work often begins beneath performance—where habits, fear, and identity meet pressure. That layer is data, not noise.",
    details: [
      { headline: "Awareness", body: "See what you avoid, what drains you, and what steers choices before you rationalise." },
      { headline: "Clarity", body: "Tell what is happening apart from what you fear is happening." },
      { headline: "Direction", body: "Align who you are becoming with values, energy, and next decisions." },
      { headline: "Growth", body: "Build capacity under strain: steadier judgement and repaired trust." },
      { headline: "Transformation", body: "The slower work of identity, belief, and meaning that makes change last." },
    ],
    imageSrc: "/images/32.png",
    imageAlt: "Calm mountain vista suggesting space for reflection",
    gradient: gradients[0],
  },
  {
    title: "Teams",
    lede: "Talent is rarely the whole story—teams crack when purpose blurs, incentives tug apart, and collaboration systems eat good intent.",
    details: [
      { headline: "Shared purpose", body: "A reason beyond tasks—sharp enough to test in trade-offs." },
      { headline: "Better decisions", body: "Trade-offs and dissent land better when flow and ownership are visible." },
      { headline: "Aligned effort", body: "Aim energy at the same risks instead of scattering it across vague mandates." },
      { headline: "Healthier ways", body: "Safety without avoidance, accountability without cruelty." },
    ],
    imageSrc: "/images/9a.png",
    imageAlt: "Team collaborating around a table",
    gradient: gradients[1],
  },
  {
    title: "Organisations",
    lede: "Beneath charts lie living systems—structures, rituals, and signals—that quietly make outcomes more or less likely.",
    details: [
      { headline: "Structure", body: "Roles, cadence, handoffs, and feedback people can keep under load." },
      { headline: "Growth", body: "Match pace to capability: what to scale, simplify, or slow." },
      { headline: "Revenue", body: "Pipeline truth over forecast theatre—signal and lifecycle clarity." },
      { headline: "Systems", body: "Tools, rituals, incentives—worthy of the same scrutiny as strategy." },
    ],
    imageSrc: "/images/2.png",
    imageAlt: "City buildings representing organisational structure",
    gradient: gradients[2],
  },
];

function toOffering(o: OfferingInput, idx: number): Offering {
  return {
    title: o.title,
    lede: o.lede,
    details: (o.details ?? []).map((d) => ({ headline: d.headline, body: d.body })),
    imageSrc: o.image?.url ?? hardcodedOfferings[idx % hardcodedOfferings.length]?.imageSrc ?? "",
    imageAlt: o.image?.alt ?? "",
    gradient: gradients[idx % gradients.length],
  };
}

interface WhatIDoProps {
  offerings?: OfferingInput[] | null;
}

export default function WhatIDo({ offerings: offeringsInput }: WhatIDoProps) {
  const offerings: Offering[] =
    offeringsInput && offeringsInput.length > 0
      ? offeringsInput.map(toOffering)
      : hardcodedOfferings;

  const [active, setActive] = useState(0);
  const activeItem = offerings[active] ?? offerings[0];

  return (
    <section id="what-i-do" className="relative overflow-hidden bg-stone-50 py-24 dark:bg-stone-950 md:py-32">
      {/* Background ambiance */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-40 top-0 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-primary/5 via-amber-500/5 to-transparent blur-7xl" />
        <div className="absolute -left-40 bottom-0 h-[600px] w-[600px] rounded-full bg-gradient-to-tr from-amber-500/5 via-primary/5 to-transparent blur-7xl" />
      </div>

      <div className="container-responsive relative">
        <motion.div
          className="mx-auto mb-12 max-w-3xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4 font-serif text-3xl font-medium tracking-tight text-stone-900 dark:text-white sm:text-4xl md:text-5xl">
            I help people understand what&apos;s shaping their outcomes.
          </h2>
          <p className="text-lg text-stone-500 dark:text-stone-400">
            At work and in life, clarity changes everything.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="mb-10 flex flex-wrap justify-center gap-3">
          {offerings.map((item, index) => {
            const isActive = active === index;
            return (
              <button
                key={item.title}
                onClick={() => setActive(index)}
                className={`relative rounded-full px-6 py-3 text-base font-medium transition-all duration-300 ${
                  isActive
                    ? "text-stone-900 dark:text-white"
                    : "text-stone-500 hover:text-stone-700 dark:text-stone-400 dark:hover:text-stone-200"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="what-i-do-tab"
                    className="absolute inset-0 rounded-full border border-primary/20 bg-white shadow-lg dark:border-primary/30 dark:bg-stone-800"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                  />
                )}
                <span className="relative z-10">{item.title}</span>
              </button>
            );
          })}
        </div>

        {/* Content Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeItem.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16"
          >
            {/* Image Side */}
            <div className="order-2 lg:order-1">
              <div className="group relative">
                <div className={`absolute -inset-4 rounded-3xl bg-gradient-to-br ${activeItem.gradient} opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100`} />
                <div className="relative overflow-hidden rounded-3xl border border-stone-200/60 shadow-2xl dark:border-stone-700/60">
                  <div className="aspect-[4/3] w-full">
                    <Image
                      src={activeItem.imageSrc}
                      alt={activeItem.imageAlt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/20 via-transparent to-transparent" />
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div className="order-1 lg:order-2">
              <div className="rounded-3xl border border-stone-200/60 bg-white/80 p-8 backdrop-blur-sm dark:border-stone-700/60 dark:bg-stone-900/80 sm:p-10">
                <h3 className="mb-3 font-serif text-2xl font-semibold text-stone-900 dark:text-white sm:text-3xl">
                  {activeItem.title}
                </h3>
                <p className="mb-8 text-lg leading-relaxed text-stone-600 dark:text-stone-300">
                  {activeItem.lede}
                </p>

                <div className="space-y-5">
                  {activeItem.details.map((block, i) => (
                    <motion.div
                      key={block.headline}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="group/item flex gap-4"
                    >
                      <div className="relative mt-1">
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-primary/15 to-amber-500/10 text-xs font-medium text-primary">
                          {i + 1}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="mb-1 font-medium text-stone-800 dark:text-stone-100">
                          {block.headline}
                        </h4>
                        <p className="text-sm leading-relaxed text-stone-500 dark:text-stone-400">
                          {block.body}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}