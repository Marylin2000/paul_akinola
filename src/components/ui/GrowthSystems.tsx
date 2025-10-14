"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Rocket,
  Clock,
  TrendingUp,
  Mail,
  Users,
  Star,
  ListOrdered,
  ChartBar,
  Route,
  Target,
  Crown,
  Shield,
  MessageCircle,
  Zap,
  Network,
} from "lucide-react";

export default function GrowthSystems() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [activeTab, setActiveTab] = useState("plg-motion");

  const tabs = [
    { id: "plg-motion", label: "PLG Motion" },
    { id: "lifecycle", label: "Lifecycle Nurture" },
    { id: "scoring", label: "Scoring Models" },
    { id: "experiments", label: "Experiments" },
    { id: "community", label: "Community PLG" },
  ];

  const tabContent = {
    "plg-motion": (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h3 className="text-3xl font-bold mb-6">PLG Motion & Activation</h3>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            Comprehensive product-led growth framework that optimizes user
            onboarding, reduces time-to-first-insight (TTFI), and creates
            scalable activation engines through behavioral triggers and
            intelligent user journeys.
          </p>
          <div className="space-y-6">
            {[
              {
                icon: Rocket,
                title: "Onboarding Flow Optimization",
                description:
                  "Streamlined user journeys that reduce friction and accelerate value realization",
              },
              {
                icon: Clock,
                title: "TTFI Reduction Strategies",
                description:
                  "Data-driven approaches to minimize time-to-first-insight and drive early engagement",
              },
              {
                icon: TrendingUp,
                title: "Quickstart Implementations",
                description:
                  "Guided setup flows that ensure users reach activation milestones efficiently",
              },
            ].map((item, index) => (
              <div key={item.title} className="flex items-start">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center mr-4 mt-1">
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
        <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl">
          <h4 className="text-xl font-bold mb-6">Activation Metrics</h4>
          <div className="space-y-4">
            {[
              { label: "TTFI Reduction", value: "65%", color: "primary" },
              { label: "Activation Rate", value: "78%", color: "secondary" },
              { label: "User Retention", value: "84%", color: "accent" },
            ].map((metric) => (
              <div
                key={metric.label}
                className="flex items-center justify-between p-4 bg-blue-50 dark:bg-slate-700 rounded-xl"
              >
                <span className="font-medium">{metric.label}</span>
                <span className={`text-2xl font-bold text-${metric.color}`}>
                  {metric.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    lifecycle: (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl">
          <h4 className="text-xl font-bold mb-6">
            Nurture Sequence Performance
          </h4>
          <div className="space-y-6">
            {[
              { label: "Email Open Rate", value: 42, color: "primary" },
              { label: "Click-Through Rate", value: 18, color: "secondary" },
              { label: "Conversion Rate", value: 8.5, color: "accent" },
            ].map((metric) => (
              <div key={metric.label} className="relative">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">{metric.label}</span>
                  <span className="text-sm font-bold">{metric.value}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-2">
                  <div
                    className={`bg-${metric.color} h-2 rounded-full`}
                    style={{ width: `${metric.value}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-3xl font-bold mb-6">Lifecycle Nurture Systems</h3>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            Intelligent email sequences powered by Inflection.io that deliver
            personalized content based on user behavior, engagement patterns,
            and lifecycle stage to drive continuous value and progression.
          </p>
          <div className="space-y-6">
            {[
              {
                icon: Mail,
                title: "Triggered Email Sequences",
                description:
                  "Behavioral triggers that deliver relevant content at optimal moments",
              },
              {
                icon: Users,
                title: "Behavioral Segmentation",
                description:
                  "Dynamic user segments based on product usage and engagement patterns",
              },
              {
                icon: Star,
                title: "Engagement Scoring",
                description:
                  "Predictive models that identify high-value prospects and optimize outreach timing",
              },
            ].map((item) => (
              <div key={item.title} className="flex items-start">
                <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center mr-4 mt-1">
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
    scoring: (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h3 className="text-3xl font-bold mb-6">
            Scoring Models (PQL → PEQL → MQA)
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            Progressive qualification framework that evolves users from
            Product-Qualified Leads to Product-Engaged Qualified Leads,
            culminating in Marketing-Qualified Accounts ready for sales
            engagement.
          </p>
          <div className="space-y-6">
            {[
              {
                icon: Target,
                title: "PQL (Product-Qualified Lead)",
                description:
                  "Individual users showing high engagement and feature adoption patterns",
                color: "blue",
              },
              {
                icon: Zap,
                title: "PEQL (Product-Engaged Qualified Lead)",
                description:
                  "Users demonstrating sustained usage and reaching key activation milestones",
                color: "green",
              },
              {
                icon: Crown,
                title: "MQA (Marketing-Qualified Account)",
                description:
                  "Accounts with multiple engaged users, firmographic fit, and expansion signals",
                color: "purple",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg border-l-4 border-blue-500"
              >
                <h4 className="font-bold mb-3 flex items-center">
                  <item.icon className={`text-${item.color}-500 mr-3`} />
                  {item.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl">
          <h4 className="text-xl font-bold mb-6">Scoring Model Performance</h4>
          <div className="space-y-6">
            {[
              {
                stage: "PQL → Sales Conversion",
                rate: "24%",
                improvement: "+8% YoY",
                color: "blue",
              },
              {
                stage: "PEQL → Opportunity Creation",
                rate: "42%",
                improvement: "+15% YoY",
                color: "green",
              },
              {
                stage: "MQA → Closed-Won",
                rate: "68%",
                improvement: "+22% YoY",
                color: "purple",
              },
            ].map((metric) => (
              <div key={metric.stage} className="text-center">
                <div
                  className={`text-3xl font-bold text-${metric.color}-600 mb-2`}
                >
                  {metric.rate}
                </div>
                <div className="text-sm font-medium text-gray-600 dark:text-gray-300 mb-1">
                  {metric.stage}
                </div>
                <div
                  className={`text-sm font-semibold text-${metric.color}-500`}
                >
                  {metric.improvement}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    experiments: (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h3 className="text-3xl font-bold mb-6">Experiment Framework</h3>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            Systematic approach to growth experimentation using RICE
            prioritization, structured A/B testing, and comprehensive results
            tracking to optimize every aspect of the user journey.
          </p>
          <div className="space-y-6">
            {[
              {
                icon: ListOrdered,
                title: "RICE Prioritization",
                description:
                  "Reach × Impact × Confidence ÷ Effort framework for experiment backlog management",
                color: "primary",
              },
              {
                icon: Route,
                title: "A/B Testing Trees",
                description:
                  "Decision frameworks that guide experiment design and statistical significance validation",
                color: "secondary",
              },
              {
                icon: ChartBar,
                title: "Results Tracking",
                description:
                  "Comprehensive templates and dashboards for experiment outcome measurement",
                color: "accent",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg"
              >
                <h4 className="font-bold mb-3 flex items-center">
                  <item.icon className={`text-${item.color} mr-3`} />
                  {item.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl">
          <h4 className="text-xl font-bold mb-6">Recent Experiment Results</h4>
          <div className="space-y-6">
            {[
              {
                title: "Onboarding Flow Optimization",
                description:
                  "Reduced steps from 8 to 4 with progressive disclosure",
                result: "+32% Completion Rate",
                color: "green",
              },
              {
                title: "Email Subject Line Testing",
                description: "Personalized vs generic subject lines",
                result: "+28% Open Rate",
                color: "blue",
              },
              {
                title: "CTA Button Positioning",
                description: "Above vs below the fold placement",
                result: "+15% Click Rate",
                color: "purple",
              },
            ].map((experiment) => (
              <div
                key={experiment.title}
                className={`border-l-4 border-${experiment.color}-500 pl-4`}
              >
                <h5
                  className={`font-semibold text-${experiment.color}-600 dark:text-${experiment.color}-400`}
                >
                  {experiment.title}
                </h5>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                  {experiment.description}
                </p>
                <div
                  className={`text-2xl font-bold text-${experiment.color}-600`}
                >
                  {experiment.result}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    community: (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h3 className="text-3xl font-bold mb-6">Community-Driven PLG</h3>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            Leveraging community platforms like Common Room to create
            self-sustaining growth loops where engaged users become advocates,
            driving organic acquisition and product adoption through social
            proof and peer influence.
          </p>
          <div className="space-y-6">
            {[
              {
                icon: Network,
                title: "Common Room Integrations",
                description:
                  "Seamless integration with community platforms to track engagement and identify advocates",
              },
              {
                icon: Users,
                title: "Advocate Identification",
                description:
                  "AI-powered detection of high-engagement community members for ambassador programs",
              },
              {
                icon: MessageCircle,
                title: "Community-Driven Support",
                description:
                  "Peer-to-peer support systems that reduce support costs and increase user satisfaction",
              },
              {
                icon: Shield,
                title: "Trust & Social Proof",
                description:
                  "Leveraging community validation to build trust and accelerate conversion cycles",
              },
            ].map((item) => (
              <div key={item.title} className="flex items-start">
                <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center mr-4 mt-1">
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
        <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl">
          <h4 className="text-xl font-bold mb-6">Community Impact Metrics</h4>
          <div className="space-y-6">
            {[
              {
                metric: "Community-Driven Signups",
                value: "35%",
                description: "of new users come through community referrals",
              },
              {
                metric: "Support Cost Reduction",
                value: "62%",
                description: "decrease in support tickets through community",
              },
              {
                metric: "Advocate Conversion",
                value: "18%",
                description: "of active users become community advocates",
              },
            ].map((item) => (
              <div
                key={item.metric}
                className="text-center p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-slate-700 dark:to-slate-800 rounded-xl"
              >
                <div className="text-3xl font-bold text-accent mb-2">
                  {item.value}
                </div>
                <div className="font-semibold mb-2">{item.metric}</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  {item.description}
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
      id="growth-systems"
      className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-800 dark:to-slate-900"
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
            Growth Systems Architecture
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Scalable systems that transform user acquisition, activation, and
            expansion through data-driven PLG motions
          </p>
        </motion.div>

        {/* Navigation Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center mb-12 bg-white dark:bg-slate-800 rounded-2xl p-2 shadow-lg"
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
