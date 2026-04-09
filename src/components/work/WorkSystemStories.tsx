"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";

const stories = [
  {
    num: "01",
    title: "When the growth motion does not fit the business",
    preview: "The brief was growth. More installs, more users, more momentum. The team was focused on acquisition — getting people in. But installs were not the real problem. People were coming in and leaving.",
    full: (
      <>
        <p>The brief was growth. More installs, more users, more momentum. The team was focused on acquisition: getting people in. That was the motion they had inherited — and it felt like the right one because the numbers were moving.</p>
        <p>But installs were not the real problem. People were coming in and leaving. The funnel was filling at the top and emptying underneath. The motion was built for a consumer app. The business needed subscribers.</p>
        <p>What I found underneath: there was no activation logic connecting the install to the product&apos;s actual value. No lifecycle to carry someone from curious to committed. The growth machine was optimized for a less impactful result.</p>
        <div className="my-6 border-l-2 border-accent bg-paper-warm p-5 font-serif text-[0.88rem] italic text-ink">
          When the focus shifted from installs to activation, and from acquisition to subscription growth, the subscriber base grew by 196%. Monthly signups increased 500%. Churn fell to single digits.
        </div>
        <p>The motion wasn&apos;t wrong because of poor execution. It was ineffective because it didn&apos;t fit what the business needed to grow.</p>
      </>
    ),
  },
  {
    num: "02",
    title: "When CRM architecture blocks revenue clarity",
    preview: "The pipeline existed. Leads were coming in. Marketing was active. Sales was working. On the surface, the revenue system looked functional. But when you looked at what the CRM was actually doing, the picture changed.",
    full: (
      <>
        <p>The pipeline existed. Leads were coming in. Marketing was active. Sales was working. On the surface, the revenue system looked functional.</p>
        <p>But when you looked at what the CRM was doing — how leads were routed, how lifecycle stages were defined, how handoffs between marketing and sales were structured — the picture changed. Data was inconsistent. Stage definitions meant different things to different people. Leads were moving through the funnel without actually progressing.</p>
        <p>The CRM was recording activity. It was not supporting decisions.</p>
        <div className="my-6 border-l-2 border-accent bg-paper-warm p-5 font-serif text-[0.88rem] italic text-ink">
          When the architecture was rebuilt — lifecycle stages redesigned, lead scoring restructured, routing logic made consistent — qualified pipeline increased by 40%. The sales cycle shortened by 25%.
        </div>
        <p>The problem was never effort. It was what the system underneath the effort was doing with it.</p>
      </>
    ),
  },
  {
    num: "03",
    title: "When revenue systems hide what matters",
    preview: "The reporting existed. Dashboards were built. Numbers were visible. But when leadership looked at the data, they weren&apos;t confident in what they were seeing. Forecasts felt unreliable.",
    full: (
      <>
        <p>The reporting existed. Dashboards were built. Numbers were visible. But when leadership looked at the data, they weren&apos;t confident in what they were seeing. Forecasts felt unreliable. Pipeline reviews felt uncertain.</p>
        <p>The issue wasn&apos;t a lack of data. It was what the data was built on. Attribution was inconsistent. UTM taxonomies hadn&apos;t been standardized. CRM data had gaps. The reporting layer was built on top of a foundation that hadn&apos;t been designed for clarity.</p>
        <div className="my-6 border-l-2 border-accent bg-paper-warm p-5 font-serif text-[0.88rem] italic text-ink">
          When the underlying architecture was addressed — UTM and event taxonomy standardized, data flows unified, pipeline visibility frameworks built to surface risk early — forecast confidence improved and deal risk became visible earlier.
        </div>
        <p>Reporting is only as trustworthy as the structure underneath it. Fix the structure first.</p>
      </>
    ),
  },
  {
    num: "04",
    title: "When product signal never becomes go-to-market action",
    preview: "There was no shortage of product data. Users were interacting, signals were being generated. But that data was not reaching the people responsible for pipeline. Sales didn&apos;t know which accounts were active.",
    full: (
      <>
        <p>There was no shortage of product data. Users were interacting with the product, signals were being generated, and the product team had visibility into what was happening. But that data was not reaching the people responsible for pipeline.</p>
        <p>Sales didn&apos;t know which accounts were active in the product. Marketing wasn&apos;t targeting based on usage behavior. SDRs were working from static lists while product signals that indicated real intent were sitting in a system the commercial team couldn&apos;t see or use.</p>
        <p>The architecture was fragmented — Segment, BigQuery, Salesforce, and Demandbase were all running, but not connected in a way that turned product behavior into GTM action.</p>
        <div className="my-6 border-l-2 border-accent bg-paper-warm p-5 font-serif text-[0.88rem] italic text-ink">
          When a unified data layer was built connecting product signals to the CRM in real time, core activation improved by 50% within 30 days. Time-to-first insight was reduced by 96%.
        </div>
        <p>Product signal is only valuable when it becomes action. Until then, it is just data.</p>
      </>
    ),
  },
];

export default function WorkSystemStories() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section className="relative overflow-hidden py-32 border-t border-rule bg-background transition-colors duration-500">
      <div className="relative mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-20 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* <div className="mb-10 text-[0.65rem] font-medium uppercase tracking-[0.15em] text-foreground/40">
              05 — System Stories
            </div> */}
            <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] font-normal leading-[1.2] text-foreground">
              Real examples of how structure changes outcomes.
            </h2>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[0.95rem] font-light leading-relaxed text-foreground/60 lg:pt-14"
          >
            These stories are where systems thinking becomes practical. They show how motion, architecture, signal, and workflow design change what teams can see, trust, and act on.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-rule border border-rule transition-colors duration-500">
          {stories.map((story, index) => (
            <div
              key={index}
              className={`bg-background p-8 lg:p-12 transition-all duration-500 cursor-pointer hover:bg-paper-warm ${expandedIndex === index ? 'md:col-span-2' : ''}`}
              onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
            >
              {/* <div className="mb-5 text-[0.6rem] font-medium uppercase tracking-[0.15em] text-primary/60">
                Story {story.num}
              </div> */}
              <h3 className="mb-4 font-serif text-[clamp(1.2rem,2vw,1.55rem)] font-medium leading-[1.3] text-foreground">
                {story.title}
              </h3>
              
              <AnimatePresence mode="wait">
                {expandedIndex === index ? (
                  <motion.div
                    key="full"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="space-y-4 text-[0.88rem] font-light leading-relaxed text-foreground/70">
                      {story.full}
                    </div>
                  </motion.div>
                ) : (
                  <motion.p
                    key="preview"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-[0.88rem] font-light leading-relaxed text-foreground/60 line-clamp-4"
                  >
                    {story.preview}
                  </motion.p>
                )}
              </AnimatePresence>

              <button className="mt-8 flex items-center gap-2 text-[0.75rem] font-medium uppercase tracking-[0.1em] text-primary transition-all duration-300 hover:gap-3">
                <Plus className={`h-3 w-3 transition-transform duration-300 ${expandedIndex === index ? 'rotate-45' : ''}`} />
                {expandedIndex === index ? 'Close story' : 'Read story'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
