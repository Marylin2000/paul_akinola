import { loadEnvConfig } from "@next/env";
import { getPayload } from "payload";

loadEnvConfig(process.cwd());

const workSources = [
  { title: "The CRM", body: "Where deals live, but not always why they move or stall" },
  { title: "The product", body: "Where behaviour happens, but rarely reaches the people responsible for pipeline" },
  { title: "Web analytics", body: "Where intent shows up, but disconnected from revenue outcomes" },
  { title: "Campaign tools", body: "Where activity is tracked, but attribution stays murky" },
  { title: "The spreadsheet", body: "Where someone built the truth, outside every system" },
  { title: "The conversation", body: "Where real intelligence lives, in Slack threads and email chains that never get recorded" },
];

const workStories = [
  {
    num: "01",
    metric: "+196%",
    metricLabel: "Subscriber Growth",
    title: "When the growth motion does not fit the business",
    preview: "The motion was built for acquisition. The business needed activation. Changing the system changed everything.",
    slug: "growth-motion-fits-business",
  },
  {
    num: "02",
    metric: "+40%",
    metricLabel: "Pipeline Growth",
    title: "When CRM architecture blocks revenue clarity",
    preview: "The CRM was recording activity. It was not supporting decisions. Rebuilding the architecture changed what leadership could see and trust.",
    slug: "crm-structure-revenue-outcomes",
  },
  {
    num: "03",
    metric: "96%",
    metricLabel: "Faster Insights",
    title: "When revenue systems hide what matters",
    preview: "The dashboards existed. But the foundation underneath them was not built for clarity. Fixing the structure fixed the reporting.",
    slug: "revenue-system-truth",
  },
  {
    num: "04",
    metric: "+50%",
    metricLabel: "Activation",
    title: "When product signal never becomes go-to-market action",
    preview: "Product data existed. It just never reached the people responsible for pipeline. Connecting the systems changed what sales could act on.",
    slug: "pipeline-volume-hides-weak-signal",
  },
];

const articleDates: Record<string, string> = {
  "growth-motion-fits-business": "May 2026",
  "pipeline-volume-hides-weak-signal": "April 2026",
  "crm-structure-revenue-outcomes": "March 2026",
  "busy-teams-lose-clarity": "February 2026",
  "revenue-system-truth": "January 2026",
  "inconsistency-rarely-real-problem": "December 2025",
  "hope-underneath-confusion": "November 2025",
  "clarity-blocked-by-system": "October 2025",
  "fighting-the-nameable": "September 2025",
  "understanding-yourself-change": "August 2025",
  "start-seeing-systems": "July 2025",
  "clarity-showing-up-work-life": "June 2025",
  "clarity-not-end-goal": "May 2025",
  "symphony-of-alignment": "April 2025",
};

const aboutHeroStats = [
  { num: "10+", label: "Years Experience" },
  { num: "50+", label: "Projects" },
  { num: "∞", label: "Curiosity" },
];

const aboutWorldviewCards = [
  {
    title: "The visible is not the whole story",
    shortTitle: "Visible",
    content: "What shows up first is often only the surface expression of something deeper.",
    colorA: "#d97706",
    colorB: "#92400e",
  },
  {
    title: "Systems shape outcomes",
    shortTitle: "Systems",
    content: "People, teams, and organisations are shaped by the structures they live and work inside.",
    colorA: "#0f766e",
    colorB: "#115e59",
  },
  {
    title: "Clarity changes response",
    shortTitle: "Clarity",
    content: "When the real pattern is named clearly, better judgement and better action become possible.",
    colorA: "#7c3aed",
    colorB: "#5b21b6",
  },
];

async function updateGlobal(payload: Awaited<ReturnType<typeof getPayload>>, slug: string, data: Record<string, unknown>) {
  const existing = await (payload.findGlobal as any)({ slug });

  await (payload.updateGlobal as any)({
    slug,
    data: {
      ...existing,
      ...data,
    },
  });
  console.log(`Updated global: ${slug}`);
}

async function main() {
  const { default: configPromise } = await import("../payload.config");
  const payload = await getPayload({ config: configPromise });

  await updateGlobal(payload, "hero", {
    eyebrow: "Organisational Systems · Human Systems",
    titlePrefix: "You've never looked at it this way before.",
    titleItalic: "",
    titleSuffix: "",
    description:
      "Most outcomes are shaped by something just beneath the surface. I help organisations find it in their revenue. I help people find it in themselves.",
    quote: "Organisational systems · Revenue, GTM & CRM · Human systems · Behaviour, clarity & transformation",
    credentialAnchor: "Organisational systems · Revenue, GTM & CRM · Human systems · Behaviour, clarity & transformation",
    image: {
      url: "/images/bg-clean.png",
      alt: "Paul Akinola portrait",
    },
  });

  await updateGlobal(payload, "work", {
    heroPrefix: "Systems at Work",
    heroTitleStatic: "Do you know what's driving your pipeline, what's slowing it down, and what needs to change before it costs you?",
    heroTitleHighlight: "",
    heroP1:
      "I work with B2B organisations to find what is actually shaping their pipeline: the architecture, the signals, the gaps between teams. Then build the infrastructure that makes growth visible, trustworthy and repeatable.",
    heroP2: "",
    surfaceTitle: "The data exists. The visibility doesn't.",
    surfaceDesc:
      "Most revenue teams are not short of data. They are short of signal. Because the data that should tell the full story is scattered across six places that rarely talk to each other.",
    sources: workSources,
    surfaceClosingLine:
      "When these six don't connect, no one can see what is driving revenue, what to scale, what to kill, or what is coming next.",
    reframesTitle: "Your system is either working for your revenue, or quietly working against it.",
    reframesBody1:
      "The starting point is always an audit. Not of effort or headcount, but of what exists, how it is being used, how it connects, and where the signal breaks down before it reaches the people who need it.",
    reframesBody2:
      "When you can see that clearly, the picture changes. You stop fixing symptoms and start building infrastructure that actually supports how revenue moves.",
    reframesClosingLine: "That is the work.",
    storiesTitle: "Real examples. Real outcomes.",
    storiesList: workStories,
    goDeeperTitle: "Ready to see what is actually shaping your pipeline?",
    goDeeperBtn: "Start a Conversation",
    goDeeperBtnLink: "/together#contact",
    secondaryCtaLabel: "Read the thinking behind the work",
    secondaryCtaHref: "/thoughts?category=work",
    nextPathsTitle: "",
    nextPathsList: [],
  });

  await updateGlobal(payload, "about", {
    heroTitlePrefix: "I try to arrive empty.",
    heroTitleItalic: "",
    heroStats: aboutHeroStats,
    worldviewCards: aboutWorldviewCards,
    professionalBlock:
      "Professionally I work as a Revenue Architect, building the systems between marketing, sales and product that make growth visible and trustworthy. Over ten years in B2B SaaS and technology. The same lens I apply to organisations I apply to people. It has always been the same work.",
  });

  await updateGlobal(payload, "together", {
    mainTitle: "Let's find out what is actually going on.",
    confirmationLine:
      "I read every note personally and respond within a few days. Most first conversations are 30 minutes. For clarity.",
  });

  await updateGlobal(payload, "inner-life", {
    goDeeperTitle: "Ready to understand what is actually shaping your outcomes?",
    goDeeperBtn: "Start a Conversation",
    goDeeperBtnLink: "/together#contact",
    secondaryCtaLabel: "Read the thinking behind the life lens",
    secondaryCtaHref: "/thoughts?category=life",
    nextPathsTitle: "",
    nextPathsList: [],
  });

  await updateGlobal(payload, "build", {
    heroTitle1: "Systems",
    heroTitle2: "",
    heroP1: "A closer look at the systems I built across growth, revenue, CRM, and GTM.",
  });

  for (const [slug, date] of Object.entries(articleDates)) {
    const existing = await (payload.find as any)({
      collection: "articles",
      where: { slug: { equals: slug } },
      limit: 1,
    });

    const article = existing?.docs?.[0];
    if (article?.id) {
      await (payload.update as any)({
        collection: "articles",
        id: article.id,
        data: { date },
      });
      console.log(`Updated article date: ${slug}`);
    }
  }
}

main()
  .then(() => {
    console.log("Client feedback CMS sync complete.");
    process.exit(0);
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
