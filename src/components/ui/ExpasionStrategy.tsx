// components/ui/ExpansionStrategy.tsx
"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { TrendingUp, Search, Book, CheckCircle } from "lucide-react";
import { FaRobot } from "react-icons/fa";

export default function ExpansionStrategy() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const strategies = [
    {
      icon: TrendingUp,
      title: "Usage → Expansion Mapping",
      description:
        "Behavioral analytics that identify usage patterns and tipping points that indicate readiness for expansion, enabling proactive account management and timely upsell conversations.",
      metrics: [
        { label: "Feature Adoption", value: "78%", sublabel: "Core Features" },
        {
          label: "Usage Velocity",
          value: "+45%",
          sublabel: "Month-over-month growth",
        },
      ],
    },
    {
      icon: Search,
      title: "Whitespace Analysis",
      description:
        "Systematic identification of untapped opportunities within existing accounts through ICP gap analysis and vertical penetration mapping.",
      stats: [
        { value: "24", label: "Expansion Opps" },
        { value: "$2.4M", label: "Pipeline Value" },
      ],
    },
    {
      icon: Book,
      title: "Expansion Playbooks & Account Maturity",
      description:
        "Structured frameworks for account development that map customer journey stages to specific expansion tactics and success metrics.",
      stages: [
        {
          label: "Early Stage",
          description: "Foundation building",
          percentage: "32%",
          color: "accent",
        },
        {
          label: "Growth Stage",
          description: "Expansion ready",
          percentage: "45%",
          color: "warning",
        },
        {
          label: "Mature Stage",
          description: "Strategic partnership",
          percentage: "23%",
          color: "primary",
        },
      ],
    },
    {
      icon: FaRobot,
      title: "AI-Generated Expansion Suggestions",
      description:
        "MarVis-powered recommendations that automatically detect expansion opportunities based on usage patterns, account health, and market intelligence.",
      suggestions: [
        {
          priority: "High Priority",
          description: "TechCorp Inc. showing 300% usage increase",
          recommendation: "Enterprise tier upgrade",
          color: "green",
        },
        {
          priority: "Medium Priority",
          description: "DataFlow Ltd. approaching seat limits",
          recommendation: "Additional user licenses",
          color: "yellow",
        },
        {
          priority: "Watch List",
          description: "GrowthCo exploring new features",
          recommendation: "Feature demo scheduling",
          color: "blue",
        },
      ],
    },
  ];

  return (
    <section
      id="expansion"
      className="py-20 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-slate-800 dark:to-slate-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Expansion Strategy Framework
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Data-driven approaches to identify, qualify, and execute expansion
            opportunities within existing customer accounts
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            {strategies.slice(0, 2).map((strategy, index) => (
              <motion.div
                key={strategy.title}
                initial={{ opacity: 0, x: -30 }}
                animate={
                  isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }
                }
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl"
              >
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <strategy.icon className="text-primary mr-3" />
                  {strategy.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {strategy.description}
                </p>

                {strategy.metrics && (
                  <div className="space-y-4">
                    {strategy.metrics.map((metric, idx) => (
                      <div
                        key={idx}
                        className="bg-blue-50 dark:bg-slate-700 p-4 rounded-xl"
                      >
                        <h4 className="font-semibold mb-2">{metric.label}</h4>
                        <div className="flex justify-between">
                          <span className="text-sm">{metric.sublabel}</span>
                          <span className="font-bold">{metric.value}</span>
                        </div>
                        <div className="w-full bg-blue-200 dark:bg-slate-600 rounded-full h-2 mt-2">
                          <div
                            className="bg-primary h-2 rounded-full"
                            style={{
                              width: metric.value.includes("%")
                                ? metric.value
                                : "78%",
                            }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {strategy.stats && (
                  <div className="grid grid-cols-2 gap-4">
                    {strategy.stats.map((stat, idx) => (
                      <div
                        key={idx}
                        className="text-center p-4 bg-purple-50 dark:bg-slate-700 rounded-xl"
                      >
                        <div className="text-xl font-bold text-secondary">
                          {stat.value}
                        </div>
                        <div className="text-sm text-gray-500">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          <div className="space-y-8">
            {strategies.slice(2).map((strategy, index) => (
              <motion.div
                key={strategy.title}
                initial={{ opacity: 0, x: 30 }}
                animate={
                  isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }
                }
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl"
              >
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <strategy.icon className="text-accent mr-3" />
                  {strategy.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {strategy.description}
                </p>

                {strategy.stages && (
                  <div className="space-y-4">
                    {strategy.stages.map((stage, idx) => (
                      <div
                        key={stage.label}
                        className={`flex items-center justify-between p-4 bg-${stage.color}-50 dark:bg-slate-700 rounded-xl`}
                      >
                        <div>
                          <h4 className="font-semibold">{stage.label}</h4>
                          <p className="text-sm text-gray-500">
                            {stage.description}
                          </p>
                        </div>
                        <div className="text-right">
                          <div
                            className={`text-lg font-bold text-${stage.color}`}
                          >
                            {stage.percentage}
                          </div>
                          <div className="text-sm text-gray-500">
                            of accounts
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {strategy.suggestions && (
                  <div className="space-y-4">
                    {strategy.suggestions.map((suggestion, idx) => (
                      <div
                        key={idx}
                        className={`border-l-4 border-${suggestion.color}-500 pl-4 bg-${suggestion.color}-50 dark:bg-slate-700 p-4 rounded-r-xl`}
                      >
                        <h4
                          className={`font-semibold text-${suggestion.color}-700 dark:text-${suggestion.color}-300`}
                        >
                          {suggestion.priority}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          {suggestion.description}
                        </p>
                        <p
                          className={`text-xs text-${suggestion.color}-600 dark:text-${suggestion.color}-400 mt-1`}
                        >
                          Recommended: {suggestion.recommendation}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Before & After Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-16 bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl"
        >
          <h3 className="text-2xl font-bold mb-6 text-center">
            Before & After AI Implementation
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl">
              <h4 className="font-semibold text-red-700 dark:text-red-300 mb-4 text-center">
                Traditional Approach
              </h4>
              <div className="space-y-3">
                {[
                  "Manual research: 45 minutes per prospect",
                  "Generic outreach: 8% response rate",
                  "Reactive expansion identification",
                  "Limited account intelligence",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-red-500 mr-2" />
                    <span className="text-sm text-gray-600 dark:text-gray-300">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-6 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl">
              <h4 className="font-semibold text-green-700 dark:text-green-300 mb-4 text-center">
                AI-Powered Approach
              </h4>
              <div className="space-y-3">
                {[
                  "AI research: 5 minutes per prospect",
                  "Personalized outreach: 24% response rate",
                  "Proactive expansion suggestions",
                  "Comprehensive account intelligence",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span className="text-sm text-gray-600 dark:text-gray-300">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
