// components/ui/GTMSystems.tsx
"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Route,
  Satellite,
  Database,
  Brain,
  MousePointer,
  Filter,
  Handshake,
} from "lucide-react";

export default function GTMSystems() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const systems = [
    {
      icon: Route,
      title: "MQA Routing System",
      description:
        "Real-time lead scoring architecture that captures product signals, enriches with firmographic data, and automatically routes qualified accounts to appropriate sales team members based on territory, expertise, and capacity.",
      gradient: "from-blue-50 to-indigo-100",
      features: [
        "Real-time scoring algorithms",
        "CRM integration & automation",
        "Territory-based routing logic",
      ],
    },
    {
      icon: Satellite,
      title: "Signal Architecture",
      description:
        "Comprehensive event capture system that transforms product usage signals into actionable GTM workflows, enabling sales and marketing teams to respond to buyer intent in real-time.",
      gradient: "from-purple-50 to-pink-100",
      stats: [
        { label: "Event Types", value: "50+" },
        { label: "Processing Time", value: "< 5s" },
      ],
    },
    {
      icon: Database,
      title: "Lead Enrichment & Firmographic Data",
      description:
        "Multi-source data enrichment pipeline that appends company information, technographic data, and intent signals to create comprehensive prospect profiles for targeted outreach.",
      gradient: "from-green-50 to-emerald-100",
      metrics: [
        { label: "Data Accuracy", value: "94%" },
        { label: "Enrichment Speed", value: "< 2s" },
        { label: "Coverage Rate", value: "87%" },
      ],
    },
    {
      icon: Brain,
      title: "MarVis GTM Use Cases",
      description:
        "AI-powered context generation that provides SDRs with personalized account insights, automated research summaries, and intelligent conversation starters based on product usage patterns and company intelligence.",
      gradient: "from-yellow-50 to-orange-100",
      features: [
        "Automated account research",
        "Personalized outreach templates",
        "Real-time conversation insights",
      ],
    },
  ];

  const workflowSteps = [
    {
      icon: MousePointer,
      label: "Product Signal",
      description: "User action triggers",
    },
    { icon: Filter, label: "Processing", description: "Scoring & enrichment" },
    { icon: Database, label: "Routing", description: "Team assignment" },
    {
      icon: Handshake,
      label: "Engagement",
      description: "Personalized outreach",
    },
  ];

  return (
    <section id="gtm-systems" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            GTM Systems & New Logo Motion
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Intelligent go-to-market systems that capture, enrich, and route
            signals to drive efficient new customer acquisition
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          <div className="space-y-8">
            {systems.slice(0, 2).map((system, index) => (
              <motion.div
                key={system.title}
                initial={{ opacity: 0, x: -30 }}
                animate={
                  isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }
                }
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`bg-gradient-to-br ${system.gradient} dark:from-slate-800 dark:to-slate-700 p-8 rounded-2xl`}
              >
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <system.icon className="text-primary mr-3" />
                  {system.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {system.description}
                </p>
                {system.features && (
                  <div className="space-y-4">
                    {system.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <div className="w-4 h-4 bg-primary rounded-full mr-3"></div>
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                )}
                {system.stats && (
                  <div className="grid grid-cols-2 gap-4">
                    {system.stats.map((stat, idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-2xl font-bold text-secondary">
                          {stat.value}
                        </div>
                        <div className="text-sm text-gray-500">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                {system.metrics && (
                  <div className="space-y-3">
                    {system.metrics.map((metric, idx) => (
                      <div
                        key={idx}
                        className="flex justify-between items-center"
                      >
                        <span className="text-sm">{metric.label}</span>
                        <span className="font-bold text-accent">
                          {metric.value}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          <div className="space-y-8">
            {systems.slice(2).map((system, index) => (
              <motion.div
                key={system.title}
                initial={{ opacity: 0, x: 30 }}
                animate={
                  isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }
                }
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`bg-gradient-to-br ${system.gradient} dark:from-slate-800 dark:to-slate-700 p-8 rounded-2xl`}
              >
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <system.icon className="text-accent mr-3" />
                  {system.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {system.description}
                </p>
                {system.features && (
                  <div className="space-y-4">
                    {system.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start">
                        <div className="w-4 h-4 bg-accent rounded-full mr-3 mt-1"></div>
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* GTM Workflow Diagram */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-gradient-to-r from-slate-50 to-blue-50 dark:from-slate-800 dark:to-slate-700 p-12 rounded-3xl"
        >
          <h3 className="text-2xl font-bold mb-8 text-center">
            GTM Signal Flow Architecture
          </h3>
          <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">
            {workflowSteps.map((step, index) => (
              <motion.div
                key={step.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={
                  isInView
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.8 }
                }
                transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
                className="text-center flex-1"
              >
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4 mx-auto">
                  <step.icon className="text-white text-xl" />
                </div>
                <h4 className="font-semibold mb-2">{step.label}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {step.description}
                </p>
                {index < workflowSteps.length - 1 && (
                  <div className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2">
                    <div className="w-8 h-0.5 bg-gray-300"></div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
