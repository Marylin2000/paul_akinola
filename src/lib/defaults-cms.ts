import { BuildData, HeroData, Offering, RecognitionData, PersonalAnchorData } from "./types-cms";

export const heroDefault: HeroData = {
  titlePrefix: "You've never looked at it this way before.",
  titleItalic: "",
  titleSuffix: "",
  description: "Most outcomes are shaped by something just beneath the surface. I help organisations find it in their revenue. I help people find it in themselves.",
  quote: "Organisational systems · Revenue, GTM & CRM · Human systems · Behaviour, clarity & transformation",
  eyebrow: "Organisational Systems · Human Systems",
  credentialAnchor: "Organisational systems · Revenue, GTM & CRM · Human systems · Behaviour, clarity & transformation",
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

export const buildDefault: BuildData = {
  heroBadge: "Systems at Work",
  heroTitle1: "Systems",
  heroTitle2: "",
  heroP1: "A closer look at the systems I built across growth, revenue, CRM, and GTM.",
  heroP2: "I work in the space between Marketing, Sales, Product, and Engineering-building the architecture that makes visibility from lead to profit possible. Some call this Revenue Operations. Others call it Marketing Operations. I think of it as revenue systems design.",
  whatIBuildTitle: "The architecture behind the growth.",
  buildItems: [
    {
      title: "CRM Architecture",
      description: "Lifecycle design, object structure, data models that create clarity instead of confusion.",
      icon: "Database",
      size: "large",
      gradient: "from-blue-500 to-indigo-600",
      color: "blue",
    },
    {
      title: "Signal-to-Routing",
      description: "Real-time processing that moves product usage into actionable GTM workflows.",
      icon: "Workflow",
      size: "small",
      gradient: "from-purple-500 to-pink-600",
      color: "purple",
    },
    {
      title: "Attribution Systems",
      description: "Multi-touch models that leadership can trust for real decisions about spend and focus.",
      icon: "BarChart3",
      size: "small",
      gradient: "from-emerald-500 to-teal-600",
      color: "emerald",
    },
    {
      title: "Lifecycle Design",
      description: "Behavioral triggers, nurture sequences, and the logic that moves people through stages.",
      icon: "Layers",
      size: "medium",
      gradient: "from-orange-500 to-red-600",
      color: "orange",
    },
    {
      title: "GTM Motion Fit",
      description: "Aligning growth strategy with business stage-PLG, sales-led, or hybrid.",
      icon: "Target",
      size: "small",
      gradient: "from-cyan-500 to-blue-600",
      color: "cyan",
    },
    {
      title: "MarVis",
      description: "AI research and enablement for GTM-surfacing context from system data so teams focus on orchestration.",
      icon: "Bot",
      size: "large",
      gradient: "from-violet-500 to-purple-600",
      color: "violet",
    },
    {
      title: "Scoring Framework",
      description: "MQL -> PQL -> MQA + ABM -> SQL. A unified model that combines marketing, product, and account signals.",
      icon: "Award",
      size: "medium",
      gradient: "from-amber-500 to-orange-600",
      color: "amber",
    },
    {
      title: "Reporting Diagnostic",
      description: "Pipeline pulse check-dig into executive reporting to know where and what fails before revenue collapses.",
      icon: "TrendingUp",
      size: "small",
      gradient: "from-rose-500 to-pink-600",
      color: "rose",
    },
  ],
  proofTitle: "Impact & Scale",
  statsList: [
    { value: "9", suffix: "+", label: "Years Experience", icon: "Trophy", gradient: "from-amber-500 to-orange-600", description: "Deep expertise across multiple GTM domains." },
    { value: "20", suffix: "+", label: "Systems Built", icon: "TrendingUp", gradient: "from-emerald-500 to-teal-600", description: "From CRM architecture to signal-to-routing workflows." },
    { value: "7", suffix: "+", label: "Companies", icon: "Building2", gradient: "from-blue-500 to-indigo-600", description: "Leading RevOps and Growth for SaaS brands." },
    { value: "7", suffix: "", label: "Industries", icon: "Briefcase", gradient: "from-purple-500 to-pink-600", description: "Experience across FinTech, HealthTech, analytics, and more." },
  ],
  industriesList: [
    { name: "FinTech", company: "OZE Inc", color: "from-emerald-500 to-cyan-500", icon: "Briefcase" },
    { name: "HealthTech", company: "Reliance Health", color: "from-blue-500 to-indigo-500", icon: "Briefcase" },
    { name: "HR Tech", company: "OnHand", color: "from-purple-500 to-pink-500", icon: "Briefcase" },
    { name: "Analytics", company: "KX Systems", color: "from-orange-500 to-red-500", icon: "Briefcase" },
    { name: "E-commerce", company: "Possible & Affordable", color: "from-rose-500 to-pink-500", icon: "Briefcase" },
    { name: "PaaS", company: "Veefunnels", color: "from-cyan-500 to-blue-500", icon: "Briefcase" },
    { name: "RevOps", company: "MartandMall", color: "from-amber-500 to-orange-500", icon: "Briefcase" },
  ],
  storiesTitle: "Real systems. Real impact.",
  storiesList: [
    {
      title: "When the growth motion did not fit the business",
      pain: "The brief was growth. But installs were not the real problem. People were coming in and leaving. The motion and the stage were mismatched.",
      change: "Rebuilt the activation flow around time-to-first-insight. Shifted focus from acquisition volume to retention quality.",
      metrics: [{ value: "60% faster activation" }, { value: "78% retention" }, { value: "200%+ revenue" }],
      icon: "TrendingUp",
      gradient: "from-orange-500 to-red-600",
      accentColor: "orange",
    },
    {
      title: "When SDRs spent more time searching than selling",
      pain: "Research and talk-point prep consumed the day. SDRs needed context from existing system data without the manual dig.",
      change: "MarVis, an AI research and enablement assistant, surfaced context automatically so SDRs could focus on orchestration instead of search.",
      metrics: [{ value: "40% faster ramp" }, { value: "3x productivity" }, { value: "65% less research time" }],
      icon: "Users",
      gradient: "from-blue-500 to-cyan-600",
      accentColor: "blue",
    },
    {
      title: "When CRM structure hid the revenue truth",
      pain: "The pipeline existed. Leads were coming in. But leadership could not trust what they saw. The CRM was collecting without creating clarity.",
      change: "Redesigned lifecycle stages, signal definitions, and handoff criteria. Built attribution that leadership could trust for actual decisions.",
      metrics: [{ value: "91% attribution accuracy" }, { value: "32% lower CAC" }, { value: "2.5x pipeline" }],
      icon: "Database",
      gradient: "from-purple-500 to-pink-600",
      accentColor: "purple",
    },
    {
      title: "When product signal never became GTM action",
      pain: "Product data existed. Signals were being generated. But Sales did not know which accounts were active. The data was not reaching the right people.",
      change: "Built real-time signal routing from product to CRM. Created scoring that combined usage with firmographics. Sales now knew what mattered before outreach.",
      metrics: [{ value: "85% lead quality" }, { value: "<5min routing" }, { value: "50% higher conversion" }],
      icon: "Zap",
      gradient: "from-emerald-500 to-teal-600",
      accentColor: "emerald",
    },
  ],
  toolsTitle: "The Stack",
  toolsList: [
    { name: "HubSpot", category: "CRM & Marketing Hub", description: "Custom objects, complex workflows, reporting dashboards, and API integrations.", icon: "Award", tags: [{ value: "CRM" }, { value: "Automation" }], gradient: "from-violet-500 to-purple-600" },
    { name: "Salesforce", category: "Revenue Architecture", description: "Flow builder, apex triggers context, lead routing, and CPQ logic.", icon: "Layers", tags: [{ value: "Revenue" }, { value: "Routing" }], gradient: "from-cyan-500 to-blue-600" },
    { name: "Marketo", category: "Enterprise Marketing", description: "Lead lifecycle, engagement programs, and behavioral scoring models.", icon: "BarChart3", tags: [{ value: "Lifecycle" }, { value: "Scoring" }], gradient: "from-emerald-500 to-teal-600" },
    { name: "Segment", category: "Data Infrastructure", description: "Tracking plans, event routing, and identity resolution.", icon: "Bot", tags: [{ value: "Data" }, { value: "Identity" }], gradient: "from-orange-500 to-red-600" },
    { name: "Clearbit", category: "Enrichment", description: "Dynamic enrichment, TAM analysis, and territory planning.", icon: "Sparkles", tags: [{ value: "Enrichment" }, { value: "TAM" }], gradient: "from-amber-500 to-orange-600" },
    { name: "Zapier/Make", category: "Middleware", description: "Webhook ingestion, custom logic flows, and multi-step orchestration.", icon: "Workflow", tags: [{ value: "Middleware" }, { value: "Webhooks" }], gradient: "from-purple-500 to-pink-600" },
    { name: "Apollo", category: "Outbound Infrastructure", description: "Sequence design, signal-based plays, and deliverability architecture.", icon: "Target", tags: [{ value: "Outbound" }, { value: "Signals" }], gradient: "from-blue-500 to-indigo-600" },
    { name: "Metabase", category: "BI & Analytics", description: "SQL querying, executive dashboards, and revenue modeling.", icon: "Database", tags: [{ value: "BI" }, { value: "SQL" }], gradient: "from-rose-500 to-pink-600" },
  ],
  ctaTitle: "Connect the dots between your systems, your teams, and your revenue.",
  ctaBtn: "Start a build conversation",
  footerLine: "Architecture that connects growth to revenue and signal to action.",
};
