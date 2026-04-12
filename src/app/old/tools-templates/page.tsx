"use client";

import { motion } from "framer-motion";
import { useState } from "react";
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
  Lightbulb,
  TrendingUp,
  Code,
  Globe,
  Shield,
  Clock,
  Settings,
  PieChart,
  Database,
  Workflow,
} from "lucide-react";

export default function ToolsTemplatesPage() {
  const [activeTab, setActiveTab] = useState("overview");
  const [activeCategory, setActiveCategory] = useState("all");

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "frameworks", label: "Frameworks" },
    { id: "calculators", label: "Calculators" },
    { id: "templates", label: "Templates" },
    { id: "implementation", label: "Implementation" },
    { id: "results", label: "Results" },
  ];

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
      category: "Complete Solutions",
      useCases: ["Full system implementation", "Team onboarding", "Executive presentations"],
      roi: "Complete framework implementation in 2-3 weeks vs 6+ months of custom development"
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
      category: "Lead Qualification",
      useCases: ["Lead scoring automation", "MQA qualification", "Sales handoff optimization"],
      roi: "40% improvement in lead qualification accuracy, 25% faster sales cycles"
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
      category: "Experimentation",
      useCases: ["A/B test tracking", "Growth experiment analysis", "Performance reporting"],
      roi: "35% faster experiment analysis, 60% better test documentation"
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
      category: "Email Marketing",
      useCases: ["Nurture campaign design", "Behavioral triggers", "Lifecycle management"],
      roi: "50% increase in email engagement, 30% improvement in conversion rates"
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
      category: "AI & Automation",
      useCases: ["Sales research automation", "Personalized outreach", "Content generation"],
      roi: "75% time savings on research, 3x increase in response rates"
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
      category: "Attribution",
      useCases: ["Channel attribution", "ROI measurement", "Budget optimization"],
      roi: "90% improvement in attribution accuracy, 25% better budget allocation"
    },
  ];

  const filteredTools = activeCategory === "all" 
    ? tools 
    : tools.filter(tool => tool.type === activeCategory);

  const featuredTools = tools.filter(tool => tool.featured);

  const implementationSteps = [
    {
      step: 1,
      title: "Assessment & Selection",
      description: "Evaluate your current systems and select the most relevant tools",
      timeline: "Week 1",
      deliverables: ["Gap analysis", "Tool selection matrix", "Implementation roadmap"]
    },
    {
      step: 2,
      title: "Foundation Setup",
      description: "Install core frameworks and establish baseline metrics",
      timeline: "Week 2-3",
      deliverables: ["Framework implementation", "Baseline metrics", "Team training"]
    },
    {
      step: 3,
      title: "Customization & Integration",
      description: "Adapt tools to your specific use cases and integrate with existing systems",
      timeline: "Week 4-6",
      deliverables: ["Custom configurations", "System integrations", "Process documentation"]
    },
    {
      step: 4,
      title: "Testing & Optimization",
      description: "Run pilot tests and optimize based on initial results",
      timeline: "Week 7-8",
      deliverables: ["Pilot results", "Optimization plan", "Performance benchmarks"]
    }
  ];

  const results = [
    {
      metric: "6,000+",
      label: "Total Downloads",
      description: "Across all tools and templates",
      color: "blue"
    },
    {
      metric: "94%",
      label: "Implementation Success Rate",
      description: "Companies successfully deploying tools",
      color: "green"
    },
    {
      metric: "40%",
      label: "Average Time Savings",
      description: "Compared to building from scratch",
      color: "purple"
    },
    {
      metric: "3.2x",
      label: "ROI Improvement",
      description: "Average return on tool investment",
      color: "orange"
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      {/* Header */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-800 dark:to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-black mb-6">
              Tools & Templates
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Ready-to-use frameworks, calculators, and templates to accelerate your
              growth systems implementation and drive measurable results
            </p>
          </motion.div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <div className="sticky top-0 z-40 bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-2 border-b-2 font-medium text-sm whitespace-nowrap transition-colors ${
                  activeTab === tab.id
                    ? "border-primary text-primary"
                    : "border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {activeTab === "overview" && (
          <div className="space-y-16">
            {/* Featured Tools */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-8 text-center">Featured Resources</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {featuredTools.map((tool, index) => (
                  <motion.div
                    key={tool.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
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
                    <h3 className="text-xl font-bold mb-4">{tool.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">{tool.description}</p>
                    <div className="flex items-center justify-between mb-6 text-sm text-gray-500">
                      <span>{tool.format} • {tool.size}</span>
                      <span>{tool.downloads} downloads</span>
                    </div>
                    <div className="mb-6">
                      <h4 className="font-semibold mb-2">Use Cases:</h4>
                      <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                        {tool.useCases?.map((useCase, idx) => (
                          <li key={idx} className="flex items-center">
                            <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                            {useCase}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                      <p className="text-sm font-medium text-green-700 dark:text-green-300">
                        ROI: {tool.roi}
                      </p>
                    </div>
                    <button className={`w-full bg-${tool.color}-500 hover:bg-${tool.color}-600 text-white px-6 py-3 rounded-xl font-semibold transition-all flex items-center justify-center`}>
                      <Download className="w-5 h-5 mr-2" />
                      Download
                    </button>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Value Proposition */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-to-r from-primary to-secondary p-12 rounded-3xl text-white"
            >
              <h2 className="text-3xl font-bold mb-6 text-center">Why Use Our Tools & Templates?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <Clock className="w-12 h-12 mx-auto mb-4 opacity-90" />
                  <h3 className="text-xl font-bold mb-2">Save Time</h3>
                  <p className="opacity-90">
                    Skip months of development with proven, ready-to-use frameworks
                  </p>
                </div>
                <div className="text-center">
                  <Shield className="w-12 h-12 mx-auto mb-4 opacity-90" />
                  <h3 className="text-xl font-bold mb-2">Proven Results</h3>
                  <p className="opacity-90">
                    Battle-tested tools used by 500+ companies to drive growth
                  </p>
                </div>
                <div className="text-center">
                  <TrendingUp className="w-12 h-12 mx-auto mb-4 opacity-90" />
                  <h3 className="text-xl font-bold mb-2">Accelerate Growth</h3>
                  <p className="opacity-90">
                    Implement best practices and start seeing results immediately
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        )}

        {activeTab === "frameworks" && (
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-8">Growth Frameworks</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {[
                  {
                    title: "PLG Motion Framework",
                    description: "Complete framework for implementing product-led growth strategies",
                    components: ["User journey mapping", "Activation metrics", "Expansion triggers"],
                    icon: Users,
                    color: "blue"
                  },
                  {
                    title: "Lifecycle Nurture Framework",
                    description: "Behavioral-triggered email sequences for customer lifecycle management",
                    components: ["Trigger definitions", "Content templates", "Performance metrics"],
                    icon: Mail,
                    color: "green"
                  },
                  {
                    title: "Scoring Model Framework",
                    description: "Multi-dimensional lead scoring with AI-enhanced qualification",
                    components: ["Scoring matrices", "Threshold definitions", "Model validation"],
                    icon: Target,
                    color: "purple"
                  },
                  {
                    title: "Attribution Framework",
                    description: "Multi-touch attribution model for complex B2B customer journeys",
                    components: ["Touchpoint mapping", "Attribution weights", "ROI calculations"],
                    icon: BarChart3,
                    color: "orange"
                  }
                ].map((framework, index) => (
                  <motion.div
                    key={framework.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl"
                  >
                    <div className={`w-12 h-12 bg-${framework.color}-500 rounded-lg flex items-center justify-center mb-6`}>
                      <framework.icon className="text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">{framework.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">{framework.description}</p>
                    <div className="space-y-2 mb-6">
                      <h4 className="font-semibold text-sm">Key Components:</h4>
                      {framework.components.map((component, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          {component}
                        </div>
                      ))}
                    </div>
                    <button className={`w-full bg-${framework.color}-500 hover:bg-${framework.color}-600 text-white px-6 py-3 rounded-xl font-semibold transition-all flex items-center justify-center`}>
                      <Download className="w-5 h-5 mr-2" />
                      Download Framework
                    </button>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        )}

        {activeTab === "calculators" && (
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-8">Growth Calculators</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {[
                  {
                    title: "PQL → MQA Scoring Calculator",
                    description: "Excel-based calculator for lead qualification and progression tracking",
                    features: ["Automated scoring", "Threshold optimization", "Conversion tracking"],
                    metrics: "92% scoring accuracy",
                    icon: Calculator,
                    color: "green"
                  },
                  {
                    title: "Multi-Touch Attribution Model",
                    description: "Sophisticated attribution calculator for marketing channel optimization",
                    features: ["Channel weighting", "Time decay models", "ROI calculations"],
                    metrics: "90% attribution accuracy",
                    icon: PieChart,
                    color: "blue"
                  },
                  {
                    title: "Customer Lifetime Value Calculator",
                    description: "Comprehensive CLV model with expansion and churn predictions",
                    features: ["CLV projections", "Churn prediction", "Expansion modeling"],
                    metrics: "85% prediction accuracy",
                    icon: TrendingUp,
                    color: "purple"
                  },
                  {
                    title: "Growth Experiment ROI Calculator",
                    description: "Calculate expected returns and resource requirements for growth experiments",
                    features: ["ROI projections", "Resource planning", "Risk assessment"],
                    metrics: "60% better experiment planning",
                    icon: BarChart3,
                    color: "orange"
                  }
                ].map((calculator, index) => (
                  <motion.div
                    key={calculator.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl"
                  >
                    <div className={`w-12 h-12 bg-${calculator.color}-500 rounded-lg flex items-center justify-center mb-6`}>
                      <calculator.icon className="text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">{calculator.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">{calculator.description}</p>
                    <div className="space-y-2 mb-4">
                      <h4 className="font-semibold text-sm">Features:</h4>
                      {calculator.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                          <Zap className="w-4 h-4 text-yellow-500 mr-2" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    <div className={`p-4 bg-${calculator.color}-50 dark:bg-${calculator.color}-900/20 rounded-lg mb-6`}>
                      <p className={`text-sm font-semibold text-${calculator.color}-700 dark:text-${calculator.color}-300`}>
                        {calculator.metrics}
                      </p>
                    </div>
                    <button className={`w-full bg-${calculator.color}-500 hover:bg-${calculator.color}-600 text-white px-6 py-3 rounded-xl font-semibold transition-all flex items-center justify-center`}>
                      <Download className="w-5 h-5 mr-2" />
                      Download Calculator
                    </button>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        )}

        {activeTab === "templates" && (
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-8">Ready-to-Use Templates</h2>
              
              {/* Category Filter */}
              <div className="flex flex-wrap justify-center mb-12 bg-white dark:bg-slate-800 rounded-2xl p-2 shadow-lg">
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
              </div>

              {/* Templates Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredTools.map((tool, index) => (
                  <motion.div
                    key={tool.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all"
                  >
                    <div className={`w-12 h-12 bg-${tool.color}-500 rounded-lg flex items-center justify-center mb-4`}>
                      <tool.icon className="text-white" />
                    </div>
                    <h3 className="font-bold mb-2">{tool.title}</h3>
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
              </div>
            </motion.div>
          </div>
        )}

        {activeTab === "implementation" && (
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-8">Implementation Guide</h2>
              <div className="space-y-8">
                {implementationSteps.map((step, index) => (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl"
                  >
                    <div className="flex items-start space-x-6">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                        {step.step}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">{step.description}</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold mb-2 text-primary">Timeline</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-300">{step.timeline}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2 text-primary">Key Deliverables</h4>
                            <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                              {step.deliverables.map((deliverable, idx) => (
                                <li key={idx} className="flex items-center">
                                  <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                                  {deliverable}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Support Options */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-700 p-8 rounded-2xl"
            >
              <h3 className="text-2xl font-bold mb-6 text-center">Implementation Support</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    title: "Self-Service",
                    description: "Complete documentation and video tutorials",
                    price: "Free",
                    features: ["Download templates", "Implementation guides", "Video tutorials"],
                    icon: FileText
                  },
                  {
                    title: "Guided Setup",
                    description: "1-on-1 implementation support and customization",
                    price: "$2,500",
                    features: ["Personal consultation", "Custom configuration", "Team training"],
                    icon: Users
                  },
                  {
                    title: "Full Service",
                    description: "Complete implementation with ongoing optimization",
                    price: "$7,500",
                    features: ["Full implementation", "System integration", "6-month optimization"],
                    icon: Settings
                  }
                ].map((option, index) => (
                  <div key={option.title} className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg">
                    <option.icon className="w-8 h-8 text-primary mb-4" />
                    <h4 className="text-lg font-bold mb-2">{option.title}</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{option.description}</p>
                    <div className="text-2xl font-bold text-primary mb-4">{option.price}</div>
                    <ul className="space-y-2">
                      {option.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        )}

        {activeTab === "results" && (
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-8">Performance & Results</h2>
              
              {/* Key Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
                {results.map((result, index) => (
                  <motion.div
                    key={result.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg text-center"
                  >
                    <div className={`text-3xl font-bold text-${result.color}-500 mb-2`}>
                      {result.metric}
                    </div>
                    <div className="font-semibold mb-1">{result.label}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">{result.description}</div>
                  </motion.div>
                ))}
              </div>

              {/* Case Studies */}
              <div className="space-y-8">
                <h3 className="text-2xl font-bold">Case Studies</h3>
                {[
                  {
                    company: "SaaS Startup (Series B)",
                    challenge: "Needed to implement lead scoring and attribution tracking",
                    solution: "Deployed PQL scoring calculator and attribution model",
                    results: ["40% improvement in lead quality", "60% faster sales cycles", "25% increase in conversion rates"],
                    color: "blue"
                  },
                  {
                    company: "Enterprise Software (Public)",
                    challenge: "Manual research processes slowing down sales team",
                    solution: "Implemented AI prompts library and automation templates",
                    results: ["75% reduction in research time", "3x increase in personalized outreach", "50% improvement in response rates"],
                    color: "green"
                  },
                  {
                    company: "B2B Marketplace (Growth Stage)",
                    challenge: "Unclear attribution across complex customer journeys",
                    solution: "Multi-touch attribution framework with custom weightings",
                    results: ["90% attribution accuracy", "30% better budget allocation", "20% increase in marketing ROI"],
                    color: "purple"
                  }
                ].map((study, index) => (
                  <motion.div
                    key={study.company}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                      <div>
                        <h4 className={`text-lg font-bold text-${study.color}-500 mb-2`}>{study.company}</h4>
                        <h5 className="font-semibold mb-2">Challenge</h5>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">{study.challenge}</p>
                      </div>
                      <div>
                        <h5 className="font-semibold mb-2">Solution</h5>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">{study.solution}</p>
                      </div>
                      <div>
                        <h5 className="font-semibold mb-2">Results</h5>
                        <ul className="space-y-1">
                          {study.results.map((result, idx) => (
                            <li key={idx} className="flex items-center text-sm">
                              <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                              {result}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </div>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white"
          >
            <h2 className="text-3xl font-bold mb-4">Ready to Accelerate Your Growth?</h2>
            <p className="text-xl opacity-90 mb-8">
              Get instant access to our complete library of tools and templates
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold transition-all flex items-center justify-center">
                <Download className="w-5 h-5 mr-2" />
                Download All Tools
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-xl font-semibold transition-all flex items-center justify-center">
                <ArrowRight className="w-5 h-5 mr-2" />
                Schedule Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}