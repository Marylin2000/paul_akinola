// WorkSystemStories.tsx
"use client";

import { getPageSection } from "@/lib/payload/page-data";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, ArrowRight, TrendingUp, Users, BarChart3, Zap } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

const stories = [
  {
    num: "01",
    title: "When the growth motion does not fit the business",
    preview: "The motion was built for acquisition. The business needed activation. Changing the system changed everything.",
    full: (
      <>
        <p>The brief was growth. More installs, more users, more momentum. The team was focused on acquisition: getting people in. That was the motion they had inherited — and it felt like the right one because the numbers were moving.</p>
        <p>But installs were not the real problem. People were coming in and leaving. The funnel was filling at the top and emptying underneath. The motion was built for a consumer app. The business needed subscribers.</p>
        <p>What I found underneath: there was no activation logic connecting the install to the product's actual value. No lifecycle to carry someone from curious to committed. The growth machine was optimized for a less impactful result.</p>
        <div className="my-6 rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 via-white to-amber-500/5 p-6 backdrop-blur-sm dark:from-primary/10 dark:via-stone-900/50 dark:to-amber-700/10">
          <div className="mb-3 flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-primary" />
            <span className="font-medium text-primary">The Result</span>
          </div>
          <p className="font-serif text-base italic text-stone-700 dark:text-stone-200">
            When the focus shifted from installs to activation, and from acquisition to subscription growth, the subscriber base grew by <strong className="text-primary">196%</strong>. Monthly signups increased <strong className="text-primary">500%</strong>. Churn fell to single digits.
          </p>
        </div>
        <p>The motion wasn't wrong because of poor execution. It was ineffective because it didn't fit what the business needed to grow.</p>
      </>
    ),
    icon: TrendingUp,
    metric: "+196%",
    metricLabel: "Subscriber Growth",
    slug: "growth-motion-fits-business",
  },
  {
    num: "02",
    title: "When CRM architecture blocks revenue clarity",
    preview: "The CRM was recording activity. It was not supporting decisions. Rebuilding the architecture changed what leadership could see and trust.",
    full: (
      <>
        <p>The pipeline existed. Leads were coming in. Marketing was active. Sales was working. On the surface, the revenue system looked functional.</p>
        <p>But when you looked at what the CRM was doing — how leads were routed, how lifecycle stages were defined, how handoffs between marketing and sales were structured — the picture changed. Data was inconsistent. Stage definitions meant different things to different people. Leads were moving through the funnel without actually progressing.</p>
        <p>The CRM was recording activity. It was not supporting decisions.</p>
        <div className="my-6 rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 via-white to-amber-500/5 p-6 backdrop-blur-sm dark:from-primary/10 dark:via-stone-900/50 dark:to-amber-700/10">
          <div className="mb-3 flex items-center gap-2">
            <BarChart3 className="h-5 w-5 text-primary" />
            <span className="font-medium text-primary">The Result</span>
          </div>
          <p className="font-serif text-base italic text-stone-700 dark:text-stone-200">
            When the architecture was rebuilt — lifecycle stages redesigned, lead scoring restructured, routing logic made consistent — qualified pipeline increased by <strong className="text-primary">40%</strong>. The sales cycle shortened by <strong className="text-primary">25%</strong>.
          </p>
        </div>
        <p>The problem was never effort. It was what the system underneath the effort was doing with it.</p>
      </>
    ),
    icon: BarChart3,
    metric: "+40%",
    metricLabel: "Pipeline Growth",
    slug: "crm-structure-revenue-outcomes",
  },
  {
    num: "03",
    title: "When revenue systems hide what matters",
    preview: "The dashboards existed. But the foundation underneath them was not built for clarity. Fixing the structure fixed the reporting.",
    full: (
      <>
        <p>The reporting existed. Dashboards were built. Numbers were visible. But when leadership looked at the data, they weren't confident in what they were seeing. Forecasts felt unreliable. Pipeline reviews felt uncertain.</p>
        <p>The issue wasn't a lack of data. It was what the data was built on. Attribution was inconsistent. UTM taxonomies hadn't been standardized. CRM data had gaps. The reporting layer was built on top of a foundation that hadn't been designed for clarity.</p>
        <div className="my-6 rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 via-white to-amber-500/5 p-6 backdrop-blur-sm dark:from-primary/10 dark:via-stone-900/50 dark:to-amber-700/10">
          <div className="mb-3 flex items-center gap-2">
            <Zap className="h-5 w-5 text-primary" />
            <span className="font-medium text-primary">The Result</span>
          </div>
          <p className="font-serif text-base italic text-stone-700 dark:text-stone-200">
            When the underlying architecture was addressed — UTM and event taxonomy standardized, data flows unified, pipeline visibility frameworks built — forecast confidence improved and deal risk became visible earlier.
          </p>
        </div>
        <p>Reporting is only as trustworthy as the structure underneath it. Fix the structure first.</p>
      </>
    ),
    icon: Zap,
    metric: "96%",
    metricLabel: "Faster Insights",
    slug: "revenue-systems-hide-matters",
  },
  {
    num: "04",
    title: "When product signal never becomes go-to-market action",
    preview: "Product data existed. It just never reached the people responsible for pipeline. Connecting the systems changed what sales could act on.",
    full: (
      <>
        <p>There was no shortage of product data. Users were interacting with the product, signals were being generated, and the product team had visibility into what was happening. But that data was not reaching the people responsible for pipeline.</p>
        <p>Sales didn't know which accounts were active in the product. Marketing wasn't targeting based on usage behavior. SDRs were working from static lists while product signals that indicated real intent were sitting in a system the commercial team couldn't see or use.</p>
        <p>The architecture was fragmented — Segment, BigQuery, Salesforce, and Demandbase were all running, but not connected in a way that turned product behavior into GTM action.</p>
        <div className="my-6 rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 via-white to-amber-500/5 p-6 backdrop-blur-sm dark:from-primary/10 dark:via-stone-900/50 dark:to-amber-700/10">
          <div className="mb-3 flex items-center gap-2">
            <Users className="h-5 w-5 text-primary" />
            <span className="font-medium text-primary">The Result</span>
          </div>
          <p className="font-serif text-base italic text-stone-700 dark:text-stone-200">
            When a unified data layer was built connecting product signals to the CRM in real time, core activation improved by <strong className="text-primary">50%</strong> within 30 days. Time-to-first insight was reduced by <strong className="text-primary">96%</strong>.
          </p>
        </div>
        <p>Product signal is only valuable when it becomes action. Until then, it is just data.</p>
      </>
    ),
    icon: Users,
    metric: "+50%",
    metricLabel: "Activation",
    slug: "product-signal-gtm-action",
  },
];

export default function WorkSystemStories({ data }: { data?: any }) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  
  const tb = getPageSection(data, 4);
  const storiesLabel = tb.storiesLabel || "Case Studies";
  const storiesTitle = tb.storiesTitle === "Systems in Practice" || tb.storiesTitle === "Real examples of how structure changes outcomes." || !tb.storiesTitle ? "Real examples. Real outcomes." : tb.storiesTitle;
  const storiesDesc = tb.storiesDesc || "";
  const dynamicStories = tb.storiesList?.length ? tb.storiesList.map((s: any, i: number) => ({ ...stories[i], ...s })) : stories;

  return (
    <section className="relative overflow-hidden border-t border-stone-200/60 bg-white py-24 transition-colors duration-500 dark:border-stone-700/60 dark:bg-stone-900 md:py-32">
      <div className="container-responsive">
        <div className="mb-16 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6 flex items-center gap-4">
              <div className="h-px w-12 bg-gradient-to-r from-primary/60 to-transparent" />
              <span className="text-sm font-medium uppercase tracking-wider text-primary/70">
                {storiesLabel}
              </span>
            </div>
            
            <h2 className="font-serif text-3xl font-medium leading-[1.2] text-stone-900 dark:text-white sm:text-4xl md:text-5xl">
              {storiesTitle}
            </h2>
          </motion.div>
          
          {storiesDesc && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-base leading-relaxed text-stone-500 dark:text-stone-400 lg:pt-14"
            >
              {storiesDesc}
            </motion.p>
          )}
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
          {dynamicStories.map((story: any, index: number) => {
            const Icon = story.icon;
            const isExpanded = expandedIndex === index;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={`group relative ${isExpanded ? 'md:col-span-2' : ''}`}
              >
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/10 via-amber-500/5 to-transparent opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
                
                <div 
                  className={`relative cursor-pointer rounded-3xl border border-stone-200/60 bg-white/80 p-8 backdrop-blur-sm transition-all duration-300 hover:border-primary/20 hover:shadow-xl dark:border-stone-700/60 dark:bg-stone-900/80 sm:p-10 ${
                    isExpanded ? 'bg-white dark:bg-stone-900' : ''
                  }`}
                  onClick={() => setExpandedIndex(isExpanded ? null : index)}
                >
                  <div className="mb-6 flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <div className="rounded-xl bg-gradient-to-br from-primary/15 to-amber-500/10 p-3">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-xs font-medium uppercase tracking-wider text-primary/60">
                          Story {story.num}
                        </div>
                        <div className="flex items-baseline gap-2">
                          <span className="font-serif text-5xl font-semibold text-primary sm:text-6xl">{story.metric}</span>
                          <span className="text-xs text-stone-400">{story.metricLabel}</span>
                        </div>
                      </div>
                    </div>
                    
                    <button className="flex h-8 w-8 items-center justify-center rounded-full border border-stone-200 text-stone-400 transition-colors hover:border-primary/40 hover:text-primary dark:border-stone-700 dark:text-stone-500">
                      {isExpanded ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                    </button>
                  </div>
                  
                  <h3 className="mb-4 font-serif text-xl font-semibold leading-snug text-stone-900 dark:text-white sm:text-2xl">
                    {story.title}
                  </h3>
                  
                  <AnimatePresence mode="wait">
                    {isExpanded ? (
                      <motion.div
                        key="full"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="space-y-4 text-base leading-relaxed text-stone-600 dark:text-stone-300">
                          {story.full}
                        </div>
                        
                        <div className="mt-8 border-t border-stone-200 pt-6 dark:border-stone-700">
                          <Link 
                            href={`/thoughts/work/${story.slug}`}
                            className="group/link inline-flex items-center gap-2 text-sm font-medium text-primary transition-all hover:gap-3"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <span>Read the full story</span>
                            <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                          </Link>
                        </div>
                      </motion.div>
                    ) : (
                      <motion.p
                        key="preview"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="text-base leading-relaxed text-stone-600 dark:text-stone-300 line-clamp-3"
                      >
                        {story.preview}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
