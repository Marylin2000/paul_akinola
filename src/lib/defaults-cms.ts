import { HeroData, Offering, RecognitionData, PersonalAnchorData } from "./types-cms";

export const heroDefault: HeroData = {
  titlePrefix: "When",
  titleItalic: "something",
  titleSuffix: "isn't adding up.",
  description: "Most outcomes are being shaped by something beneath the surface. I help you see it clearly so you can move with better judgment, stronger direction, and real change",
  quote: "Most problems do not start where they show up.",
  image: {
    url: "/images/bg-clean.png",
    alt: "Paul Akinola portrait",
  },
};

export const offeringsDefault: Offering[] = [
  {
    title: "Individuals",
    lede: "Work often begins beneath performance—where habits, fear, and identity meet pressure. That layer is data, not noise.",
    details: [
      {
        headline: "Awareness",
        body: "See what you avoid, what drains you, and what steers choices before you rationalise—or you keep fixing the wrong layer.",
      },
      {
        headline: "Clarity",
        body: "Tell what is happening apart from what you fear is happening, so shame gives way to something workable.",
      },
      {
        headline: "Direction",
        body: "Align who you are becoming with values, energy, and next decisions—not only the role you were trained to fill.",
      },
      {
        headline: "Growth",
        body: "Build capacity under strain: steadier judgement, repaired trust, and honesty when resources get tight.",
      },
      {
        headline: "Personal transformation",
        body: "The slower work of identity, belief, and meaning—what actually decides whether change lasts.",
      },
    ],
    image: {
      url: "/images/32.png",
      alt: "Calm mountain vista suggesting space for reflection",
    },
  },
  {
    title: "Teams",
    lede: "Talent is rarely the whole story—teams crack when purpose blurs, incentives tug apart, and collaboration systems eat good intent.",
    details: [
      {
        headline: "Shared purpose",
        body: "A reason beyond tasks—sharp enough to test in trade-offs when priorities collide and pressure spikes.",
      },
      {
        headline: "Better decisions",
        body: "Trade-offs and dissent land better when flow, ownership, and rewards are visible—not only heroic judgement.",
      },
      {
        headline: "Aligned effort",
        body: "Aim energy at the same risks instead of scattering it across vague mandates and hidden bottlenecks.",
      },
      {
        headline: "Healthier ways of working together",
        body: "Safety without avoidance, accountability without cruelty—feedback and conflict people can actually sustain.",
      },
    ],
    image: {
      url: "/images/9a.png",
      alt: "Team collaborating around a table",
    },
  },
  {
    title: "Organisations",
    lede: "Beneath charts lie living systems—structures, rituals, and signals—that quietly make outcomes more or less likely.",
    details: [
      {
        headline: "Structure for performance",
        body: "Roles, cadence, handoffs, and feedback people can keep under load—grounded in real constraints.",
      },
      {
        headline: "Growth",
        body: "Match pace to capability: what to scale, simplify, or slow before drag silently wins.",
      },
      {
        headline: "Revenue",
        body: "Pipeline truth over forecast theatre—signal, lifecycle, and definitions leadership can trust.",
      },
      {
        headline: "Systems that support better outcomes",
        body: "Tools, rituals, incentives, and weekly narratives—worthy of the same scrutiny as strategy slides.",
      },
    ],
    image: {
      url: "/images/2.png",
      alt: "City buildings representing organisational structure",
    },
  },
];

export const recognitionDefault: RecognitionData = {
  titlePrefix: "Most problems do not start",
  titleSuffix: "where they show up.",
  lines: [
    { text: "Performance drops, but the issue is not always effort." },
    { text: "Growth slows, but the issue is not always ambition." },
    { text: "Decisions feel unclear, but the issue is not always intelligence." },
  ],
  footerTitle: "Beneath the surface",
  footerBody: "Something is happening beneath the surface, and without clarity, it is hard to fix what you cannot fully see.",
};

export const personalAnchorDefault: PersonalAnchorData = {
  headline: "A anchor for personal clarity.",
  body: "When work gets complex, clarity isn't just a luxury—it's a requirement. I help you build the internal structures that keep you grounded and effective.",
  image: {
    url: "/images/pa.png",
    alt: "Personal Anchor visualisation",
  },
};
