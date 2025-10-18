"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Download,
  FileText,
  Calculator,
  BarChart3,
  Brain,
  Target,
  Mail,
  Users,
  Zap,
  CheckCircle,
  Star,
  ArrowRight,
  Package,
  FileSpreadsheet,
} from "lucide-react";

export default function ToolsTemplates() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Resources" },
    { id: "templates", label: "Templates" },
    { id: "calculators", label: "Calculators" },
    { id: "frameworks", label: "Frameworks" },
    { id: "portfolios", label: "Portfolios" },
  ];

  const tools = [
    {
      id: "portfolio-zip",
      title: "Complete Portfolio Package",
      description: "Downloadable ZIP containing all growth systems documentation, case studies, and implementation guides",
      type: "portfolios",
      format: "ZIP",
      size: "45MB",
      icon: Package,
      downloads: "1,247",
      color: "blue",
      featured: true,
    },
    {
      id: "scoring-calculator",
      title: "PQL → MQA Scoring Calculator",
      description: "Excel-based scoring calculator for Product-Qualified Leads to Marketing-Qualified Accounts progression",
      type: "calculators",
      format: "Excel",
      size: "2.1MB",
      icon: Calculator,
      downloads: "892",
      color: "green",
      featured: true,
    },
    {
      id: "experiment-tracker",
      title: "Growth Experiment Results Tracker",
      description: "Comprehensive template for tracking A/B tests, growth experiments, and their impact on key metrics",
      type: "templates",
      format: "Google Sheets",
      size: "1.8MB",
      icon: BarChart3,
      downloads: "756",
      color: "purple",
      featured: false,
    },
    {
      id: "nurture-framework",
      title: "Lifecycle Nurture Framework",
      description: "Complete framework for designing and implementing behavioral-triggered email sequences",
      type: "frameworks",
      format: "PDF",
      size: "3.2MB",
      icon: Mail,
      downloads: "634",
      color: "orange",
      featured: false,
    },
    {
      id: "ai-prompts-library",
      title: "GTM AI Prompts Library",
      description: "Collection of 50+ tested AI prompts for sales research, personalization, and context generation",
      type: "templates",
      format: "DOC",
      size: "890KB",
      icon: Brain,
      downloads: "1,089",
      color: "indigo",
      featured: true,
    },
    {
      id: "attribution-model",
      title: "Multi-Touch Attribution Model",
      description: "Excel model for implementing sophisticated multi-touch attribution across marketing channels",
      type: "calculators",
      format: "Excel",
      size: "4.1MB",
      icon: Target,
      downloads: "543",
      color: "pink",
      featured: false,
    },
    {
      id: "onboarding-template",
      title: "PLG Onboarding Flow Template",
      description: "Step-by-step template for designing product-led growth onboarding experiences",
      type: "templates",
      format: "Figma",
      size: "12MB",
      icon: Users,
      downloads: "445",
      color: "cyan",
      featured: false,
    },
    {
      id: "expansion-playbook",
      title: "Customer Expansion Playbook",
      description: "Complete playbook for identifying and executing customer expansion opportunities",
      type: "frameworks",
      format: "PDF",
      size: "5.7MB",
      icon: Zap,
      downloads: "398",
      color: "emerald",
      featured: false,
    },
  ];

  const filteredTools = activeCategory === "all" 
    ? tools 
    : tools.filter(tool => tool.type === activeCategory);

  const featuredTools = tools.filter(tool => tool.featured);

  return (
    <section
      id="tools-templates"
      className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800"
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
            Tools & Templates
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Ready-to-use frameworks, calculators, and templates to accelerate your
            growth systems implementation
          </p>
        </motion.div>

        {/* Featured Tools */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold mb-8 text-center">Featured Resources</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredTools.map((tool, index) => (
              <motion.div
                key={tool.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl border-2 border-yellow-200 dark:border-yellow-800 relative"
              >
                <div className="absolute -top-3 left-6">
                  <span className="bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-bold flex items-center">
                    <Star className="w-4 h-4 mr-1" />
                    Featured
                  </span>
                </div>
                <div className={`w-16 h-16 bg-${tool.color}-500 rounded-2xl flex items-center justify-center mb-6`}>
                  <tool.icon className="text-white text-2xl" />
                </div>
                <h4 className="text-xl font-bold mb-4">{tool.title}</h4>
                <p className="text-gray-600 dark:text-gray-300 mb-6">{tool.description}</p>
                <div className="flex items-center justify-between mb-6 text-sm text-gray-500">
                  <span>{tool.format} • {tool.size}</span>
                  <span>{tool.downloads} downloads</span>
                </div>
                <button className={`w-full bg-${tool.color}-500 hover:bg-${tool.color}-600 text-white px-6 py-3 rounded-xl font-semibold transition-all flex items-center justify-center`}>
                  <Download className="w-5 h-5 mr-2" />
                  Download
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap justify-center mb-12 bg-white dark:bg-slate-800 rounded-2xl p-2 shadow-lg"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-xl font-medium transition-all ${
                activeCategory === category.id
                  ? "bg-primary text-white"
                  : "text-gray-600 dark:text-gray-300 hover:text-primary"
              }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* All Tools Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {filteredTools.map((tool, index) => (
            <motion.div
              key={tool.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: 1 + index * 0.05 }}
              className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all group"
            >
              <div className={`w-12 h-12 bg-${tool.color}-500 rounded-lg flex items-center justify-center mb-4`}>
                <tool.icon className="text-white" />
              </div>
              <h5 className="font-bold mb-2">{tool.title}</h5>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{tool.description}</p>
              <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                <span>{tool.format}</span>
                <span>{tool.size}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500">{tool.downloads} downloads</span>
                <button className="text-primary hover:text-primary/80 transition-colors">
                  <Download className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Usage Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl"
        >
          <h4 className="text-2xl font-bold mb-6 text-center">Resource Impact</h4>
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

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="text-center mt-12"
        >
          <div className="bg-gradient-to-r from-primary to-secondary p-8 rounded-2xl text-white">
            <h4 className="text-2xl font-bold mb-4">Need Custom Resources?</h4>
            <p className="text-lg opacity-90 mb-6">
              Get personalized frameworks and templates tailored to your specific growth challenges
            </p>
            <button className="bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded-xl font-semibold transition-all flex items-center mx-auto">
              <ArrowRight className="w-5 h-5 mr-2" />
              Request Custom Resources
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}