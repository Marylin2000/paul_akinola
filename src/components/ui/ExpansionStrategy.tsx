"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  TrendingUp,
  Target,
  Map,
  Users,
  Brain,
  ChartBar,
  Filter,
  Building,
  Layers,
  ArrowUpRight,
  Zap,
  Search,
  Calendar,
  Star,
  AlertCircle,
} from "lucide-react";

export default function ExpansionStrategy() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [activeTab, setActiveTab] = useState("usage-mapping");

  const tabs = [
    { id: "usage-mapping", label: "Usage → Expansion" },
    { id: "whitespace-analysis", label: "Whitespace Analysis" },
    { id: "expansion-playbooks", label: "Expansion Playbooks" },
    { id: "ai-suggestions", label: "AI Suggestions" },
  ];

  const tabContent = {
    "usage-mapping": (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h3 className="text-3xl font-bold mb-6">Usage → Expansion Mapping</h3>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            Advanced analytics system that identifies critical usage patterns and
            feature adoption milestones that correlate with expansion readiness,
            enabling proactive outreach at optimal moments for upsell and
            cross-sell opportunities.
          </p>
          <div className="space-y-6">
            {[
              {
                icon: ChartBar,
                title: "Feature Adoption Tracking",
                description:
                  "Monitor feature usage patterns and identify adoption tipping points",
                metrics: ["Daily Active Features", "Feature Depth Score", "Usage Velocity"],
              },
              {
                icon: TrendingUp,
                title: "Usage Trend Analysis",
                description:
                  "Analyze usage trends to predict expansion potential and timing",
                metrics: ["Growth Rate", "Engagement Score", "Retention Cohorts"],
              },
              {
                icon: Target,
                title: "Expansion Triggers",
                description:
                  "Automated identification of accounts ready for expansion conversations",
                metrics: ["Trigger Events", "Readiness Score", "Timing Signals"],
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
                <div className="flex flex-wrap gap-2">
                  {item.metrics.map((metric) => (
                    <span key={metric} className="text-xs bg-green-50 dark:bg-slate-700 px-3 py-1 rounded-full">
                      {metric}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl">
          <h4 className="text-xl font-bold mb-6">Expansion Correlation Analysis</h4>
          <div className="space-y-6">
            {[
              {
                feature: "Multi-user Collaboration",
                correlation: "87%",
                expansionLift: "+156%",
                timeToExpansion: "23 days",
                color: "green",
              },
              {
                feature: "Advanced Analytics",
                correlation: "82%",
                expansionLift: "+134%",
                timeToExpansion: "31 days",
                color: "blue",
              },
              {
                feature: "API Integration",
                correlation: "79%",
                expansionLift: "+128%",
                timeToExpansion: "28 days",
                color: "purple",
              },
            ].map((item) => (
              <div
                key={item.feature}
                className={`border-l-4 border-${item.color}-500 pl-6 py-4`}
              >
                <h5 className={`font-bold text-${item.color}-600 dark:text-${item.color}-400 mb-2`}>
                  {item.feature}
                </h5>
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <div className="text-gray-500">Correlation</div>
                    <div className="font-semibold">{item.correlation}</div>
                  </div>
                  <div>
                    <div className="text-gray-500">Expansion Lift</div>
                    <div className="font-semibold text-green-600">{item.expansionLift}</div>
                  </div>
                  <div>
                    <div className="text-gray-500">Avg Time</div>
                    <div className="font-semibold">{item.timeToExpansion}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    "whitespace-analysis": (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl">
          <h4 className="text-xl font-bold mb-6">Whitespace Opportunity Matrix</h4>
          <div className="space-y-6">
            {[
              {
                segment: "Enterprise Technology",
                accounts: 45,
                revenue: "$2.1M",
                penetration: "32%",
                opportunity: "High",
                color: "red",
              },
              {
                segment: "Healthcare SaaS",
                accounts: 67,
                revenue: "$1.8M",
                penetration: "48%",
                opportunity: "Medium",
                color: "yellow",
              },
              {
                segment: "FinTech Startups",
                accounts: 23,
                revenue: "$890K",
                penetration: "71%",
                opportunity: "Low",
                color: "green",
              },
            ].map((item) => (
              <div
                key={item.segment}
                className={`border-l-4 border-${item.color}-500 pl-6 py-4 bg-gray-50 dark:bg-slate-700 rounded-r-lg`}
              >
                <h5 className="font-bold mb-3">{item.segment}</h5>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="text-gray-500">Accounts</div>
                    <div className="font-semibold">{item.accounts}</div>
                  </div>
                  <div>
                    <div className="text-gray-500">Revenue</div>
                    <div className="font-semibold">{item.revenue}</div>
                  </div>
                  <div>
                    <div className="text-gray-500">Penetration</div>
                    <div className="font-semibold">{item.penetration}</div>
                  </div>
                  <div>
                    <div className="text-gray-500">Opportunity</div>
                    <div className={`font-semibold text-${item.color}-600`}>{item.opportunity}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-3xl font-bold mb-6">Whitespace Analysis</h3>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            Comprehensive analysis of untapped market opportunities within
            existing customer base, identifying gaps by ICP characteristics,
            industry verticals, and customer tiers to maximize expansion
            potential and revenue growth.
          </p>
          <div className="space-y-6">
            {[
              {
                icon: Search,
                title: "ICP Gap Analysis",
                description:
                  "Identify underrepresented ideal customer profile segments",
                insights: ["Vertical penetration", "Company size gaps", "Geographic coverage"],
              },
              {
                icon: Building,
                title: "Vertical Market Mapping",
                description:
                  "Deep-dive analysis of industry-specific expansion opportunities",
                insights: ["Industry benchmarks", "Competitive landscape", "Market timing"],
              },
              {
                icon: Layers,
                title: "Tier-based Opportunity",
                description:
                  "Systematic evaluation of expansion potential across customer tiers",
                insights: ["Tier migration paths", "Revenue expansion", "Success patterns"],
              },
            ].map((item) => (
              <div key={item.title} className="flex items-start">
                <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center mr-4 mt-1">
                  <item.icon className="text-white text-sm" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">{item.title}</h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-3">
                    {item.description}
                  </p>
                  <div className="space-y-1">
                    {item.insights.map((insight) => (
                      <div key={insight} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        <span className="text-gray-600 dark:text-gray-300">{insight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    "expansion-playbooks": (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h3 className="text-3xl font-bold mb-6">Expansion Playbooks & Account Maturity</h3>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            Structured playbooks that guide account management teams through
            systematic expansion strategies based on account maturity stages,
            usage patterns, and growth indicators to maximize customer lifetime
            value and reduce churn risk.
          </p>
          <div className="space-y-6">
            {[
              {
                stage: "Early Stage",
                icon: Users,
                description: "New accounts with basic usage patterns",
                tactics: ["Onboarding optimization", "Feature adoption campaigns", "Success milestones"],
                timeline: "0-90 days",
                color: "blue",
              },
              {
                stage: "Growth Stage",
                icon: TrendingUp,
                description: "Accounts showing expansion signals",
                tactics: ["Multi-user rollout", "Advanced features", "Use case expansion"],
                timeline: "3-12 months",
                color: "green",
              },
              {
                stage: "Mature Stage",
                icon: Star,
                description: "Established accounts ready for enterprise features",
                tactics: ["Enterprise upgrades", "Additional modules", "Strategic partnerships"],
                timeline: "12+ months",
                color: "purple",
              },
            ].map((item) => (
              <div
                key={item.stage}
                className={`bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg border-l-4 border-${item.color}-500`}
              >
                <h4 className="font-bold mb-3 flex items-center">
                  <item.icon className={`text-${item.color}-500 mr-3`} />
                  {item.stage}
                  <span className={`ml-auto text-sm text-${item.color}-500 font-normal`}>
                    {item.timeline}
                  </span>
                </h4>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {item.description}
                </p>
                <div className="space-y-2">
                  {item.tactics.map((tactic) => (
                    <div key={tactic} className="flex items-center text-sm">
                      <ArrowUpRight className={`w-4 h-4 text-${item.color}-500 mr-2`} />
                      <span className="text-gray-600 dark:text-gray-300">{tactic}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl">
          <h4 className="text-xl font-bold mb-6">Playbook Performance Metrics</h4>
          <div className="space-y-6">
            {[
              {
                playbook: "Multi-User Expansion",
                success_rate: "73%",
                avg_expansion: "$12,400",
                time_to_close: "45 days",
                accounts: 156,
              },
              {
                playbook: "Feature Upsell Campaign",
                success_rate: "68%",
                avg_expansion: "$8,900",
                time_to_close: "32 days",
                accounts: 203,
              },
              {
                playbook: "Enterprise Migration",
                success_rate: "85%",
                avg_expansion: "$28,700",
                time_to_close: "67 days",
                accounts: 47,
              },
            ].map((item) => (
              <div
                key={item.playbook}
                className="border-b border-gray-200 dark:border-slate-700 pb-6"
              >
                <h5 className="font-semibold mb-3">{item.playbook}</h5>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="text-gray-500">Success Rate</div>
                    <div className="font-semibold text-green-600">{item.success_rate}</div>
                  </div>
                  <div>
                    <div className="text-gray-500">Avg Expansion</div>
                    <div className="font-semibold">{item.avg_expansion}</div>
                  </div>
                  <div>
                    <div className="text-gray-500">Time to Close</div>
                    <div className="font-semibold">{item.time_to_close}</div>
                  </div>
                  <div>
                    <div className="text-gray-500">Accounts</div>
                    <div className="font-semibold">{item.accounts}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    "ai-suggestions": (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl">
          <h4 className="text-xl font-bold mb-6">AI-Generated Expansion Suggestions</h4>
          <div className="space-y-6">
            {[
              {
                account: "TechCorp Inc.",
                suggestion: "High multi-user adoption signals - recommend team plan upgrade",
                confidence: "94%",
                potential: "$18,500",
                reasoning: "15 active users, 89% feature utilization, positive NPS feedback",
                urgency: "High",
                color: "red",
              },
              {
                account: "DataFlow Solutions",
                suggestion: "API usage spike indicates integration readiness for Enterprise tier",
                confidence: "87%",
                potential: "$32,100",
                reasoning: "300% API call increase, custom integration requests, enterprise security inquiries",
                urgency: "Medium",
                color: "yellow",
              },
              {
                account: "Growth Dynamics",
                suggestion: "Advanced analytics feature trial ended - follow up on conversion",
                confidence: "76%",
                potential: "$9,200",
                reasoning: "14-day trial completed, high engagement, pricing page visits",
                urgency: "High",
                color: "red",
              },
            ].map((item) => (
              <div
                key={item.account}
                className={`border-l-4 border-${item.color}-500 pl-6 py-4 bg-gray-50 dark:bg-slate-700 rounded-r-lg`}
              >
                <h5 className="font-bold mb-2">{item.account}</h5>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                  {item.suggestion}
                </p>
                <div className="grid grid-cols-2 gap-4 text-xs mb-3">
                  <div>
                    <div className="text-gray-500">Confidence</div>
                    <div className="font-semibold">{item.confidence}</div>
                  </div>
                  <div>
                    <div className="text-gray-500">Potential</div>
                    <div className="font-semibold text-green-600">{item.potential}</div>
                  </div>
                </div>
                <div className="text-xs text-gray-500 mb-2">
                  <strong>Reasoning:</strong> {item.reasoning}
                </div>
                <div className="flex items-center justify-between">
                  <span className={`text-xs px-2 py-1 rounded-full bg-${item.color}-100 text-${item.color}-700`}>
                    {item.urgency} Priority
                  </span>
                  <AlertCircle className={`w-4 h-4 text-${item.color}-500`} />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-3xl font-bold mb-6">AI-Generated Expansion Suggestions</h3>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            MarVis AI-powered expansion engine that analyzes customer behavior,
            usage patterns, and engagement signals to automatically generate
            personalized expansion recommendations with confidence scores and
            revenue potential estimates.
          </p>
          <div className="space-y-6">
            {[
              {
                icon: Brain,
                title: "Behavioral Pattern Analysis",
                description:
                  "AI analysis of user behavior patterns to identify expansion opportunities",
                capabilities: ["Usage trend analysis", "Feature adoption tracking", "Engagement scoring"],
              },
              {
                icon: Target,
                title: "Opportunity Scoring",
                description:
                  "Machine learning models that score and prioritize expansion opportunities",
                capabilities: ["Revenue prediction", "Confidence scoring", "Timing optimization"],
              },
              {
                icon: Calendar,
                title: "Automated Recommendations",
                description:
                  "Real-time generation of expansion suggestions with actionable insights",
                capabilities: ["Personalized messaging", "Channel selection", "Follow-up scheduling"],
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
                <div className="space-y-2">
                  {item.capabilities.map((capability) => (
                    <div key={capability} className="flex items-center text-sm">
                      <Zap className="w-4 h-4 text-purple-500 mr-2" />
                      <span className="text-gray-600 dark:text-gray-300">{capability}</span>
                    </div>
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
      id="expansion-strategy"
      className="py-20 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-slate-800 dark:to-purple-900"
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
            Expansion Strategy & Revenue Growth
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Data-driven expansion strategies that identify untapped opportunities,
            optimize account growth, and maximize customer lifetime value
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