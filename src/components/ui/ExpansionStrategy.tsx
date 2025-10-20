"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import {
  ChartBar,
  Search,
  Target,
  Brain,
  ArrowRight,
} from "lucide-react";

export default function ExpansionStrategy() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const expansionStrategies = [
    {
      icon: ChartBar,
      title: "Usage → Expansion Mapping",
      description: "Correlate feature adoption with expansion readiness signals",
      metrics: "3.2x higher expansion rates from high-usage accounts",
    },
    {
      icon: Search,
      title: "Whitespace Analysis",
      description: "Identify untapped opportunities within existing accounts",
      metrics: "67% whitespace conversion rate, $2.4M pipeline",
    },
    {
      icon: Target,
      title: "Expansion Playbooks",
      description: "Structured approaches for seat, product, and department expansion",
      metrics: "68% average success rate, 45% faster cycles",
    },
    {
      icon: Brain,
      title: "AI-Powered Suggestions",
      description: "Machine learning recommendations for optimal timing and approach",
      metrics: "89% prediction accuracy, +34% win rate improvement",
    },
  ];

  return (
    <section
      id="expansion-strategy"
      className="py-20 bg-white dark:bg-slate-900"
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
            Expansion Strategy & Account Growth
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Systematic approach to identifying, prioritizing, and executing expansion 
            opportunities within existing accounts through usage analytics and AI-powered insights
          </p>
        </motion.div>

        {/* Expansion Strategies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {expansionStrategies.map((strategy, index) => (
            <motion.div
              key={strategy.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-50 dark:bg-slate-800 p-8 rounded-2xl shadow-xl"
            >
              <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center mb-6">
                <strategy.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">{strategy.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">{strategy.description}</p>
              <div className="bg-blue-50 dark:bg-slate-700 p-4 rounded-lg">
                <p className="text-sm font-semibold text-primary">{strategy.metrics}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Learn More CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <Link 
            href="/expansion-strategy"
            className="inline-flex items-center bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl font-semibold transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Learn More About Expansion Strategy
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}