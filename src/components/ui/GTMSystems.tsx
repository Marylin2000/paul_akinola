"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Route,
  Network,
  Database,
  Brain,
  Filter,
  MapPin,
  Users,
  Signal,
  Zap,
  Target,
  TrendingUp,
  Activity,
  Globe,
  Cpu,
  ChartLine,
} from "lucide-react";

export default function GTMSystems() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [activeTab, setActiveTab] = useState("mqa-routing");

  const tabs = [
    { id: "mqa-routing", label: "MQA Routing" },
    { id: "signal-architecture", label: "Signal Architecture" },
    { id: "lead-enrichment", label: "Lead Enrichment" },
    { id: "marvis-gtm", label: "MarVis GTM" },
  ];

  const tabContent = {
    "mqa-routing": (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h3 className="text-3xl font-bold mb-6">MQA Routing System</h3>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            Real-time Marketing-Qualified Account routing system that scores,
            prioritizes, and distributes leads to appropriate sales and marketing
            channels based on firmographic data, engagement signals, and account
            intelligence.
          </p>
          <div className="space-y-6">
            {[
              {
                icon: Route,
                title: "Real-time Lead Scoring",
                description:
                  "Dynamic scoring algorithm that evaluates leads based on behavior, firmographics, and intent signals",
                features: ["Behavioral scoring", "Firmographic matching", "Intent data integration"],
              },
              {
                icon: Filter,
                title: "Intelligent Routing Rules",
                description:
                  "Sophisticated routing logic that directs leads to the most appropriate sales rep or channel",
                features: ["Territory mapping", "Skill-based routing", "Capacity management"],
              },
              {
                icon: Zap,
                title: "CRM/Marketing Automation",
                description:
                  "Seamless integration with CRM and marketing tools for immediate lead activation",
                features: ["Salesforce integration", "HubSpot automation", "Marketo workflows"],
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg border-l-4 border-blue-500"
              >
                <h4 className="font-bold mb-3 flex items-center">
                  <item.icon className="text-blue-500 mr-3" />
                  {item.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {item.description}
                </p>
                <div className="space-y-2">
                  {item.features.map((feature) => (
                    <div key={feature} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl">
          <h4 className="text-xl font-bold mb-6">Routing Performance Metrics</h4>
          <div className="space-y-6">
            {[
              {
                metric: "Lead Response Time",
                value: "< 5 min",
                improvement: "85% faster",
                color: "blue",
              },
              {
                metric: "Qualification Rate",
                value: "73%",
                improvement: "+28% YoY",
                color: "green",
              },
              {
                metric: "Sales Conversion",
                value: "34%",
                improvement: "+19% YoY",
                color: "purple",
              },
            ].map((item) => (
              <div
                key={item.metric}
                className="text-center p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-slate-700 dark:to-slate-800 rounded-xl"
              >
                <div className={`text-3xl font-bold text-${item.color}-600 mb-2`}>
                  {item.value}
                </div>
                <div className="font-semibold mb-2">{item.metric}</div>
                <div className={`text-sm font-semibold text-${item.color}-500`}>
                  {item.improvement}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    "signal-architecture": (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl">
          <h4 className="text-xl font-bold mb-6">Signal Flow Architecture</h4>
          <div className="space-y-6">
            <div className="flow-diagram">
              {[
                { name: "Product Events", icon: Activity, color: "blue" },
                { name: "User Behavior", icon: Users, color: "green" },
                { name: "Engagement Data", icon: TrendingUp, color: "purple" },
                { name: "GTM Actions", icon: Target, color: "orange" },
              ].map((stage, index) => (
                <div key={stage.name} className="flex items-center">
                  <div className={`w-12 h-12 bg-${stage.color}-500 rounded-full flex items-center justify-center`}>
                    <stage.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="ml-4 flex-1">
                    <div className="font-semibold">{stage.name}</div>
                    <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-2 mt-2">
                      <div
                        className={`bg-${stage.color}-500 h-2 rounded-full`}
                        style={{ width: `${85 + index * 5}%` }}
                      ></div>
                    </div>
                  </div>
                  {index < 3 && (
                    <div className="w-8 flex justify-center">
                      <div className="w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent border-b-gray-400"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-3xl font-bold mb-6">Signal Architecture (Product → GTM)</h3>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            Comprehensive signal architecture that captures product usage events,
            user behaviors, and engagement patterns to automatically trigger
            personalized GTM actions, ensuring the right message reaches the right
            user at the optimal moment.
          </p>
          <div className="space-y-6">
            {[
              {
                icon: Signal,
                title: "Event Capture System",
                description:
                  "Real-time capture of product events, user interactions, and behavioral signals",
              },
              {
                icon: Network,
                title: "Signal Processing Engine",
                description:
                  "Advanced processing pipeline that enriches, filters, and prioritizes incoming signals",
              },
              {
                icon: Brain,
                title: "GTM Action Triggers",
                description:
                  "Intelligent trigger system that initiates targeted marketing and sales actions",
              },
              {
                icon: Database,
                title: "Signal Data Store",
                description:
                  "Centralized repository for signal history, patterns, and predictive insights",
              },
            ].map((item) => (
              <div key={item.title} className="flex items-start">
                <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center mr-4 mt-1">
                  <item.icon className="text-white text-sm" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">{item.title}</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    "lead-enrichment": (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h3 className="text-3xl font-bold mb-6">Lead Enrichment & Firmographic Data</h3>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            Automated lead enrichment system that augments basic contact information
            with comprehensive firmographic data, technographic insights, and
            intent signals to enable precise targeting and personalization.
          </p>
          <div className="space-y-6">
            {[
              {
                icon: Globe,
                title: "Firmographic Enrichment",
                description:
                  "Company size, revenue, industry, location, and growth indicators",
                sources: ["Clearbit", "ZoomInfo", "Apollo", "LinkedIn Sales Navigator"],
              },
              {
                icon: Cpu,
                title: "Technographic Intelligence",
                description:
                  "Technology stack analysis and software usage patterns",
                sources: ["BuiltWith", "Wappalyzer", "SimilarTech", "Datanyze"],
              },
              {
                icon: Activity,
                title: "Intent Signal Detection",
                description:
                  "Behavioral intent signals and purchase readiness indicators",
                sources: ["Bombora", "G2", "TrustRadius", "6sense"],
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg border-l-4 border-green-500"
              >
                <h4 className="font-bold mb-3 flex items-center">
                  <item.icon className="text-green-500 mr-3" />
                  {item.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {item.description}
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {item.sources.map((source) => (
                    <div key={source} className="text-xs bg-green-50 dark:bg-slate-700 px-2 py-1 rounded">
                      {source}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl">
          <h4 className="text-xl font-bold mb-6">Enrichment Coverage & Quality</h4>
          <div className="space-y-6">
            {[
              {
                category: "Company Information",
                coverage: "94%",
                accuracy: "97%",
                fields: ["Name", "Industry", "Size", "Revenue", "Location"],
              },
              {
                category: "Contact Details",
                coverage: "87%",
                accuracy: "93%",
                fields: ["Email", "Phone", "Title", "LinkedIn", "Department"],
              },
              {
                category: "Technology Stack",
                coverage: "76%",
                accuracy: "89%",
                fields: ["CRM", "Marketing Tools", "Analytics", "Infrastructure"],
              },
            ].map((item) => (
              <div key={item.category} className="border-b border-gray-200 dark:border-slate-700 pb-4">
                <div className="flex justify-between items-center mb-3">
                  <h5 className="font-semibold">{item.category}</h5>
                  <div className="text-sm text-gray-500">
                    {item.coverage} coverage • {item.accuracy} accuracy
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {item.fields.map((field) => (
                    <span key={field} className="text-xs bg-blue-50 dark:bg-slate-700 px-2 py-1 rounded">
                      {field}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    "marvis-gtm": (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl">
          <h4 className="text-xl font-bold mb-6">MarVis GTM Use Cases</h4>
          <div className="space-y-6">
            {[
              {
                useCase: "SDR Context Generation",
                description: "AI-generated prospect research and talking points",
                impact: "+45% response rate",
                example: "Automated account summaries with recent news, tech stack, and pain points",
              },
              {
                useCase: "Personalized Email Sequences",
                description: "Dynamic email content based on prospect behavior",
                impact: "+32% open rate",
                example: "Product usage triggers personalized feature recommendations",
              },
              {
                useCase: "Competitive Intelligence",
                description: "Real-time competitive analysis and positioning",
                impact: "+28% win rate",
                example: "Automated battlecards with competitor comparison matrices",
              },
            ].map((item) => (
              <div
                key={item.useCase}
                className="border-l-4 border-purple-500 pl-6 py-4"
              >
                <h5 className="font-bold text-purple-600 dark:text-purple-400 mb-2">
                  {item.useCase}
                </h5>
                <p className="text-gray-600 dark:text-gray-300 mb-3">
                  {item.description}
                </p>
                <div className="text-sm text-gray-500 mb-3">
                  <span className="font-semibold text-green-600">{item.impact}</span>
                </div>
                <div className="text-xs bg-purple-50 dark:bg-slate-700 p-3 rounded italic">
                  "{item.example}"
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-3xl font-bold mb-6">MarVis GTM Applications</h3>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            MarVis AI integration for Go-to-Market operations provides sales and
            marketing teams with intelligent context generation, automated
            research, and personalized outreach capabilities that dramatically
            improve conversion rates and sales efficiency.
          </p>
          <div className="space-y-6">
            {[
              {
                icon: Brain,
                title: "AI-Powered Research",
                description:
                  "Automated prospect research combining public data, social signals, and company intelligence",
                capabilities: ["News monitoring", "Social listening", "Tech stack analysis"],
              },
              {
                icon: MapPin,
                title: "Context Generation",
                description:
                  "Real-time context creation for sales conversations and marketing touchpoints",
                capabilities: ["Meeting prep", "Email personalization", "Call scripts"],
              },
              {
                icon: ChartLine,
                title: "Performance Analytics",
                description:
                  "AI-driven insights into GTM performance and optimization recommendations",
                capabilities: ["A/B testing", "Conversion analysis", "Predictive scoring"],
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg"
              >
                <h4 className="font-bold mb-3 flex items-center">
                  <item.icon className="text-purple-500 mr-3" />
                  {item.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {item.capabilities.map((capability) => (
                    <span key={capability} className="text-xs bg-purple-50 dark:bg-slate-700 px-3 py-1 rounded-full">
                      {capability}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  };

  return (
    <section
      id="gtm-systems"
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
            GTM Systems & New Logo Motion
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Intelligent Go-to-Market systems that capture, route, and convert
            high-intent prospects through automated workflows and AI-powered insights
          </p>
        </motion.div>

        {/* Navigation Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center mb-12 bg-gray-50 dark:bg-slate-800 rounded-2xl p-2 shadow-lg"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-xl font-medium transition-all ${
                activeTab === tab.id
                  ? "bg-primary text-white"
                  : "text-gray-600 dark:text-gray-300 hover:text-primary"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </motion.div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {tabContent[activeTab as keyof typeof tabContent]}
        </motion.div>
      </div>
    </section>
  );
}