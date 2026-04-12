"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import {
  Download,
  FileText,
  Calculator,
  BarChart3,
  Brain,
  Target,
  ArrowRight,
  Package,
  CheckCircle,
  Zap,
} from "lucide-react";

export default function ToolsTemplates() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const toolCategories = [
    {
      icon: Package,
      title: "Complete Portfolio Package",
      description: "Downloadable ZIP with all growth systems documentation and guides",
      metrics: "45MB • 1,247 downloads",
      color: "blue",
    },
    {
      icon: Calculator,
      title: "PQL → MQA Scoring Calculator",
      description: "Excel-based scoring calculator for lead qualification and progression",
      metrics: "2.1MB • 892 downloads",
      color: "green",
    },
    {
      icon: Brain,
      title: "GTM AI Prompts Library",
      description: "50+ tested AI prompts for sales research and personalization",
      metrics: "890KB • 1,089 downloads",
      color: "indigo",
    },
    {
      icon: BarChart3,
      title: "Growth Experiment Tracker",
      description: "Comprehensive template for A/B tests and growth experiments",
      metrics: "1.8MB • 756 downloads",
      color: "purple",
    },
    {
      icon: Target,
      title: "Multi-Touch Attribution Model",
      description: "Excel model for sophisticated marketing channel attribution",
      metrics: "4.1MB • 543 downloads",
      color: "pink",
    },
    {
      icon: FileText,
      title: "Lifecycle Nurture Framework",
      description: "Complete framework for behavioral-triggered email sequences",
      metrics: "3.2MB • 634 downloads",
      color: "orange",
    },
  ];

  return (
    <section
      id="tools-templates"
      className="py-20 bg-gradient-to-br from-stone-50 to-blue-50 dark:from-stone-900 dark:to-stone-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-6 font-serif">
            Tools & Templates
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Ready-to-use frameworks, calculators, and templates to accelerate your
            growth systems implementation
          </p>
        </motion.div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {toolCategories.map((tool, index) => (
            <motion.div
              key={tool.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white dark:bg-stone-800 p-8 rounded-2xl shadow-xl"
            >
              <div className={`w-12 h-12 bg-${tool.color}-500 rounded-2xl flex items-center justify-center mb-6`}>
                <tool.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 font-serif">{tool.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">{tool.description}</p>
              <div className="bg-blue-50 dark:bg-stone-700 p-4 rounded-lg mb-6">
                <p className="text-sm font-semibold text-primary">{tool.metrics}</p>
              </div>
              <button className={`w-full bg-${tool.color}-500 hover:bg-${tool.color}-600 text-white px-6 py-3 rounded-xl font-semibold transition-all flex items-center justify-center`}>
                <Download className="w-5 h-5 mr-2" />
                Download
              </button>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-white dark:bg-stone-800 p-8 rounded-2xl shadow-xl mb-12"
        >
          <h3 className="text-2xl font-bold mb-6 text-center font-serif">Resource Impact</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { metric: "6,000+", label: "Total Downloads", icon: Download, color: "blue" },
              { metric: "94%", label: "Implementation Success Rate", icon: CheckCircle, color: "green" },
              { metric: "40%", label: "Average Time Savings", icon: Zap, color: "purple" },
              { metric: "15+", label: "Industry Frameworks", icon: FileText, color: "orange" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className={`w-16 h-16 bg-${stat.color}-500 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <stat.icon className="text-white text-xl" />
                </div>
                <div className="text-3xl font-bold mb-2">{stat.metric}</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Learn More CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <Link 
            href="/tools-templates"
            className="inline-flex items-center bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl font-semibold transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Learn More About Tools & Templates
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}