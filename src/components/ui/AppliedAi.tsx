// components/ui/AppliedAI.tsx
"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Brain,
  Cpu,
  Target,
  Wand2,
  Clock,
  TrendingUp,
  Save,
  CheckCircle,
  Sparkles,
  Zap,
  Lightbulb,
  Code,
  Network,
} from "lucide-react";

export default function AppliedAI() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const aiCapabilities = [
    {
      icon: Cpu,
      title: "GPT Integration",
      description:
        "Custom GPT models fine-tuned for GTM context generation and sales intelligence",
      tag: "GPT-4 Powered",
      gradient: "from-blue-50 to-indigo-100",
      color: "primary",
    },
    {
      icon: Network,
      title: "Signal Processing",
      description:
        "Real-time processing of product usage, engagement, and firmographic signals",
      tag: "Real-time",
      gradient: "from-purple-50 to-pink-100",
      color: "secondary",
    },
    {
      icon: Target,
      title: "Context Generation",
      description:
        "Automated research summaries and personalized conversation starters",
      tag: "Automated",
      gradient: "from-green-50 to-emerald-100",
      color: "accent",
    },
  ];

  const promptLibraries = [
    {
      category: "GTM Prompt Templates",
      description:
        "Account research, competitive analysis, value proposition generation",
      count: "25 templates",
      color: "primary",
    },
    {
      category: "Lifecycle Campaign Prompts",
      description:
        "Onboarding sequences, nurture campaigns, retention messaging",
      count: "18 templates",
      color: "secondary",
    },
    {
      category: "Expansion Opportunity Prompts",
      description:
        "Upsell messaging, cross-sell identification, renewal strategies",
      count: "12 templates",
      color: "accent",
    },
  ];

  const aiResults = [
    { metric: "40%", label: "Faster Deal Velocity", color: "primary" },
    { metric: "65%", label: "Response Rate Increase", color: "secondary" },
    { metric: "80%", label: "Time Savings", color: "accent" },
  ];

  const aiActions = [
    {
      icon: Clock,
      title: "Automated Follow-up Suggestions",
      description:
        "AI analyzes conversation history and suggests optimal follow-up timing and messaging",
      result: "Average response time: 2.3 hours faster",
      gradient: "from-blue-50 to-indigo-50",
    },
    {
      icon: TrendingUp,
      title: "Personalized Outreach Generation",
      description:
        "Custom email templates based on prospect behavior, company news, and product usage",
      result: "65% higher response rates",
      gradient: "from-green-50 to-emerald-50",
    },
    {
      icon: Save,
      title: "Account Research Automation",
      description:
        "Comprehensive company profiles with recent news, funding, and competitive landscape",
      result: "80% time savings on research",
      gradient: "from-purple-50 to-pink-50",
    },
  ];

  return (
    <section
      id="applied-ai"
      className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-slate-800 dark:to-slate-900"
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
            Applied AI in GTM
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Intelligent automation and AI-powered insights that transform
            go-to-market operations through contextual intelligence
          </p>
        </motion.div>

        {/* MarVis Architecture */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="bg-white dark:bg-slate-800 p-12 rounded-3xl shadow-2xl">
            <motion.h3
              className="text-3xl font-bold mb-8 text-center flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <Brain className="text-primary mr-4" />
              MarVis Architecture & Use Cases
            </motion.h3>
            <motion.p
              className="text-lg text-gray-600 dark:text-gray-300 text-center mb-12 max-w-4xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Advanced AI system that processes product signals, user behavior,
              and market intelligence to generate actionable GTM insights and
              automate customer-facing communications.
            </motion.p>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              {aiCapabilities.map((capability, index) => (
                <motion.div
                  key={capability.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                  className={`bg-gradient-to-br ${capability.gradient} dark:from-slate-700 dark:to-slate-600 p-8 rounded-2xl`}
                >
                  <div
                    className={`w-16 h-16 bg-${capability.color} rounded-2xl flex items-center justify-center mb-6 mx-auto`}
                  >
                    <capability.icon className="text-white text-2xl" />
                  </div>
                  <h4 className="text-xl font-bold mb-4 text-center">
                    {capability.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-center mb-4">
                    {capability.description}
                  </p>
                  <div className="text-center">
                    <span
                      className={`inline-block bg-${capability.color}/20 text-${capability.color} px-3 py-1 rounded-full text-sm font-medium`}
                    >
                      {capability.tag}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* MarVis Results */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {aiResults.map((result, index) => (
                <div
                  key={result.label}
                  className="text-center p-6 bg-blue-50 dark:bg-slate-700 rounded-2xl"
                >
                  <div
                    className={`text-3xl font-black text-${result.color} mb-2`}
                  >
                    {result.metric}
                  </div>
                  <div className="text-gray-600 dark:text-gray-300 font-medium">
                    {result.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl"
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <Code className="text-primary mr-3" />
                Prompt Libraries & Templates
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Curated collection of prompt templates optimized for GTM use
                cases, lifecycle campaigns, and expansion opportunities.
              </p>
              <div className="space-y-4">
                {promptLibraries.map((library, index) => (
                  <div
                    key={library.category}
                    className="border border-gray-200 dark:border-slate-600 rounded-xl p-4"
                  >
                    <h4 className={`font-semibold mb-2 text-${library.color}`}>
                      {library.category}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                      {library.description}
                    </p>
                    <code className="text-xs bg-gray-100 dark:bg-slate-700 px-2 py-1 rounded">
                      {library.count}
                    </code>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl"
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <Sparkles className="text-warning mr-3" />
                GPT-Scoring Integration
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                AI-powered lead scoring that combines traditional metrics with
                sentiment analysis and intent prediction.
              </p>
              <div className="space-y-4">
                {[
                  {
                    label: "AI Scoring Accuracy",
                    value: "92%",
                    color: "warning",
                  },
                  {
                    label: "Sentiment Analysis",
                    value: "87%",
                    color: "primary",
                  },
                  { label: "Intent Prediction", value: "84%", color: "accent" },
                ].map((metric) => (
                  <div
                    key={metric.label}
                    className={`flex items-center justify-between p-4 bg-${metric.color}-50 dark:bg-slate-700 rounded-xl`}
                  >
                    <span className="font-medium">{metric.label}</span>
                    <span className={`text-xl font-bold text-${metric.color}`}>
                      {metric.value}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl"
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <Wand2 className="text-secondary mr-3" />
                AI-Generated GTM Actions
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Automated generation of personalized outreach, follow-up
                sequences, and account research summaries.
              </p>
              <div className="space-y-6">
                {aiActions.map((action, index) => (
                  <div
                    key={action.title}
                    className={`bg-gradient-to-r ${action.gradient} dark:from-slate-700 dark:to-slate-600 p-6 rounded-xl`}
                  >
                    <h4 className="font-bold mb-3 flex items-center">
                      <action.icon className="w-5 h-5 mr-2" />
                      {action.title}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                      {action.description}
                    </p>
                    <div className="flex items-center text-sm text-blue-600 dark:text-blue-400">
                      <Zap className="w-4 h-4 mr-2" />
                      <span>{action.result}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl"
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <Lightbulb className="text-accent mr-3" />
                Before & After Examples
              </h3>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl">
                    <h4 className="font-semibold text-red-700 dark:text-red-300 mb-2">
                      Before AI
                    </h4>
                    <div className="space-y-2 text-sm">
                      <p className="text-gray-600 dark:text-gray-300">
                        Manual research: 45 minutes per prospect
                      </p>
                      <p className="text-gray-600 dark:text-gray-300">
                        Generic outreach: 8% response rate
                      </p>
                    </div>
                  </div>
                  <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl">
                    <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">
                      After AI
                    </h4>
                    <div className="space-y-2 text-sm">
                      <p className="text-gray-600 dark:text-gray-300">
                        AI research: 5 minutes per prospect
                      </p>
                      <p className="text-gray-600 dark:text-gray-300">
                        Personalized outreach: 24% response rate
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-slate-700 dark:to-slate-600 p-4 rounded-xl">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-purple-500 mr-2" />
                    <span className="text-sm font-medium">
                      Average productivity increase: 3.2x
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
