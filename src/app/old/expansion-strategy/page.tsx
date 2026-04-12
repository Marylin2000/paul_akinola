"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import Link from "next/link";
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
  ArrowLeft,
  Download,
  CheckCircle,
  ExternalLink,
  BarChart3,
  Settings,
  Database,
  MessageSquare,
} from "lucide-react";

export default function ExpansionStrategyPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [activeTab, setActiveTab] = useState("overview");

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "usage-mapping", label: "Usage → Expansion" },
    { id: "whitespace-analysis", label: "Whitespace Analysis" },
    { id: "expansion-playbooks", label: "Expansion Playbooks" },
    { id: "ai-suggestions", label: "AI Suggestions" },
  ];

  const tabContent = {
    overview: (
      <div className="space-y-16">
        {/* Hero Section */}
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-black mb-8">
            Expansion Strategy & Account Growth
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Systematic approach to identifying, prioritizing, and executing expansion opportunities within existing accounts 
            through usage analytics, whitespace analysis, and AI-powered recommendations.
          </p>
        </div>

        {/* Strategy Components */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {[
            {
              icon: ChartBar,
              title: "Usage → Expansion Mapping",
              description: "Correlate feature adoption with expansion readiness",
              metrics: "3.2x higher expansion rates",
              color: "blue",
            },
            {
              icon: Search,
              title: "Whitespace Analysis",
              description: "Identify untapped opportunities within accounts",
              metrics: "67% of whitespace converted",
              color: "green",
            },
            {
              icon: Target,
              title: "Expansion Playbooks",
              description: "Structured approaches for different expansion scenarios",
              metrics: "45% faster deal cycles",
              color: "purple",
            },
            {
              icon: Brain,
              title: "AI-Powered Suggestions",
              description: "Machine learning recommendations for optimal timing",
              metrics: "89% prediction accuracy",
              color: "orange",
            },
          ].map((strategy, index) => (
            <motion.div
              key={strategy.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl"
            >
              <div className={`w-16 h-16 bg-${strategy.color}-100 dark:bg-${strategy.color}-900 rounded-2xl flex items-center justify-center mb-6`}>
                <strategy.icon className={`w-8 h-8 text-${strategy.color}-600`} />
              </div>
              <h3 className="text-xl font-bold mb-4">{strategy.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">{strategy.description}</p>
              <div className={`bg-${strategy.color}-50 dark:bg-${strategy.color}-900/20 p-4 rounded-lg`}>
                <p className={`text-sm font-semibold text-${strategy.color}-600`}>{strategy.metrics}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Expansion Framework */}
        <div className="bg-gradient-to-r from-primary to-secondary p-12 rounded-3xl text-white">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Expansion Revenue Framework</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Systematic approach to identifying and capturing expansion opportunities across your entire customer base
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { stage: "Identify", focus: "Usage patterns, feature adoption", icon: Search },
              { stage: "Analyze", focus: "Whitespace, growth potential", icon: BarChart3 },
              { stage: "Prioritize", focus: "ROI, timing, readiness", icon: Target },
              { stage: "Execute", focus: "Playbooks, outreach, close", icon: Zap },
            ].map((step, index) => (
              <div key={step.stage} className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{step.stage}</h3>
                <p className="text-sm opacity-80">{step.focus}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Expansion Metrics Dashboard */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold mb-6">Revenue Impact</h3>
            <div className="space-y-6">
              {[
                { metric: "Net Revenue Retention", value: "125%", change: "+18% YoY" },
                { metric: "Expansion Revenue %", value: "67%", change: "+24% of total ARR" },
                { metric: "Average Deal Size", value: "$42K", change: "+156% expansion deals" },
                { metric: "Time to Expansion", value: "4.2 months", change: "35% faster" },
              ].map((metric) => (
                <div key={metric.metric} className="border-l-4 border-primary pl-4">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold">{metric.metric}</h4>
                    <div className="text-2xl font-bold text-primary">{metric.value}</div>
                  </div>
                  <div className="text-sm text-green-600">{metric.change}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold mb-6">Expansion Channels</h3>
            <div className="space-y-4">
              {[
                { channel: "Seat Expansion", revenue: "$2.4M", percentage: 45 },
                { channel: "Feature Upsells", revenue: "$1.8M", percentage: 34 },
                { channel: "New Products", revenue: "$750K", percentage: 14 },
                { channel: "Premium Support", revenue: "$380K", percentage: 7 },
              ].map((channel) => (
                <div key={channel.channel} className="relative">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">{channel.channel}</span>
                    <div className="text-right">
                      <div className="font-bold">{channel.revenue}</div>
                      <div className="text-sm text-gray-500">{channel.percentage}%</div>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-3">
                    <div
                      className="bg-primary h-3 rounded-full transition-all duration-500"
                      style={{ width: `${channel.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Success Stories */}
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-700 p-8 rounded-2xl">
          <h3 className="text-2xl font-bold mb-8 text-center">Expansion Success Stories</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                company: "Enterprise SaaS Co.",
                challenge: "Low expansion revenue despite high product usage",
                solution: "Implemented usage-based expansion triggers and whitespace analysis",
                result: "$3.2M additional ARR, 145% net revenue retention",
              },
              {
                company: "Mid-Market Tech",
                challenge: "Reactive expansion approach missing opportunities",
                solution: "AI-powered expansion recommendations with automated playbooks",
                result: "67% increase in expansion deals, 45% faster cycles",
              },
            ].map((story) => (
              <div key={story.company} className="bg-white dark:bg-slate-800 p-6 rounded-xl">
                <h4 className="font-bold text-primary mb-3">{story.company}</h4>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="font-medium text-red-600">Challenge:</span>
                    <p className="text-gray-600 dark:text-gray-300">{story.challenge}</p>
                  </div>
                  <div>
                    <span className="font-medium text-blue-600">Solution:</span>
                    <p className="text-gray-600 dark:text-gray-300">{story.solution}</p>
                  </div>
                  <div>
                    <span className="font-medium text-green-600">Result:</span>
                    <p className="font-semibold text-green-700">{story.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    "usage-mapping": (
      <div className="space-y-16">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">Usage → Expansion Mapping</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Advanced analytics system that identifies critical usage patterns and feature adoption milestones 
            that correlate with expansion readiness, enabling proactive outreach at optimal moments.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Usage Analytics Framework */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold">Usage Analytics Framework</h3>
            
            {[
              {
                icon: ChartBar,
                title: "Feature Adoption Tracking",
                description: "Monitor progression through feature tiers and advanced capabilities",
                signals: [
                  "Advanced feature usage patterns",
                  "Feature depth and frequency metrics",
                  "Cross-feature usage correlation",
                  "User journey progression analysis",
                ],
                threshold: "80% feature adoption rate",
              },
              {
                icon: Users,
                title: "User Growth Patterns",
                description: "Track user base expansion and engagement depth within accounts",
                signals: [
                  "Active user count growth",
                  "Department/team expansion",
                  "Power user identification",
                  "Usage distribution analysis",
                ],
                threshold: "3+ departments actively using",
              },
              {
                icon: TrendingUp,
                title: "Volume & Velocity Metrics",
                description: "Analyze usage volume increases and acceleration patterns",
                signals: [
                  "Data volume growth trends",
                  "Transaction velocity increases",
                  "Peak usage pattern shifts",
                  "Capacity utilization rates",
                ],
                threshold: "70% capacity utilization",
              },
            ].map((framework) => (
              <div key={framework.title} className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl">
                <div className="flex items-start mb-6">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-xl flex items-center justify-center mr-4">
                    <framework.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">{framework.title}</h4>
                    <p className="text-gray-600 dark:text-gray-300">{framework.description}</p>
                  </div>
                </div>
                
                <div className="space-y-2 mb-6">
                  <h5 className="font-medium">Key Signals:</h5>
                  {framework.signals.map((signal) => (
                    <div key={signal} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                      <span className="text-sm">{signal}</span>
                    </div>
                  ))}
                </div>
                
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <div className="text-sm font-semibold text-blue-600">
                    Expansion Threshold: {framework.threshold}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Correlation Analytics */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold">Usage-Expansion Correlations</h3>
            
            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl">
              <h4 className="text-xl font-bold mb-6">High-Correlation Indicators</h4>
              <div className="space-y-6">
                {[
                  {
                    indicator: "Multi-product Usage",
                    correlation: "94%",
                    expansion_rate: "3.2x",
                    description: "Accounts using 3+ products expand at 3.2x rate",
                  },
                  {
                    indicator: "Power User Development",
                    correlation: "87%",
                    expansion_rate: "2.8x",
                    description: "Accounts with 5+ power users show high expansion propensity",
                  },
                  {
                    indicator: "API Integration Depth",
                    correlation: "82%",
                    expansion_rate: "2.4x",
                    description: "Deep API integrations indicate platform dependency",
                  },
                  {
                    indicator: "Admin Feature Usage",
                    correlation: "76%",
                    expansion_rate: "2.1x",
                    description: "Heavy admin feature usage suggests organizational commitment",
                  },
                ].map((indicator) => (
                  <div key={indicator.indicator} className="border-l-4 border-green-500 pl-6">
                    <div className="flex items-center justify-between mb-2">
                      <h5 className="font-semibold">{indicator.indicator}</h5>
                      <div className="text-right">
                        <div className="text-lg font-bold text-green-600">{indicator.correlation}</div>
                        <div className="text-xs text-gray-500">Correlation</div>
                      </div>
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-300 mb-2">{indicator.description}</div>
                    <div className="text-lg font-bold text-primary">{indicator.expansion_rate} expansion rate</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl">
              <h4 className="text-xl font-bold mb-6">Predictive Scoring Model</h4>
              <div className="space-y-4">
                {[
                  { score_range: "90-100", label: "Expansion Ready", count: "24 accounts", action: "Immediate outreach" },
                  { score_range: "70-89", label: "High Potential", count: "67 accounts", action: "Nurture campaign" },
                  { score_range: "50-69", label: "Developing", count: "134 accounts", action: "Monitor & educate" },
                  { score_range: "0-49", label: "Early Stage", count: "298 accounts", action: "Adoption focus" },
                ].map((score) => (
                  <div key={score.score_range} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-slate-700 rounded-lg">
                    <div>
                      <h5 className="font-medium">{score.score_range}: {score.label}</h5>
                      <div className="text-sm text-gray-600 dark:text-gray-300">{score.count}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium text-primary">{score.action}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Real-time Triggers */}
        <div className="bg-gradient-to-r from-blue-50 to-green-50 dark:from-slate-800 dark:to-slate-700 p-8 rounded-2xl">
          <h3 className="text-2xl font-bold mb-8 text-center">Real-time Expansion Triggers</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                trigger: "Capacity Threshold",
                condition: "Usage > 80% of plan limits",
                action: "Automatic upgrade prompt",
                success_rate: "68%",
              },
              {
                trigger: "Feature Request",
                condition: "Multiple requests for premium features",
                action: "Sales team notification",
                success_rate: "45%",
              },
              {
                trigger: "Team Growth",
                condition: "50% increase in active users",
                action: "Seat expansion campaign",
                success_rate: "72%",
              },
            ].map((trigger) => (
              <div key={trigger.trigger} className="bg-white dark:bg-slate-800 p-6 rounded-xl">
                <h4 className="font-bold text-blue-600 mb-3">{trigger.trigger}</h4>
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="font-medium">Condition:</span>
                    <p className="text-gray-600 dark:text-gray-300">{trigger.condition}</p>
                  </div>
                  <div>
                    <span className="font-medium">Action:</span>
                    <p className="text-gray-600 dark:text-gray-300">{trigger.action}</p>
                  </div>
                  <div className="bg-green-50 dark:bg-slate-700 p-2 rounded text-center">
                    <span className="font-bold text-green-600">{trigger.success_rate} success rate</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    "whitespace-analysis": (
      <div className="space-y-16">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">Whitespace Analysis</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Systematic identification of untapped opportunities within existing accounts through comprehensive 
            product portfolio analysis, organizational mapping, and competitive landscape assessment.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Analysis Framework */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold">Whitespace Identification</h3>
            
            {[
              {
                icon: Building,
                title: "Organizational Mapping",
                description: "Map product usage across departments and business units",
                components: [
                  "Department penetration analysis",
                  "Decision maker identification",
                  "Budget holder mapping",
                  "Influence network analysis",
                ],
                coverage: "12 departments mapped on average",
              },
              {
                icon: Layers,
                title: "Product Portfolio Analysis",
                description: "Identify gaps in product adoption across available solutions",
                components: [
                  "Product utilization matrix",
                  "Feature gap identification",
                  "Competitive product analysis",
                  "Integration opportunity mapping",
                ],
                coverage: "6.3 products per ideal profile",
              },
              {
                icon: Filter,
                title: "Use Case Expansion",
                description: "Discover additional use cases and workflows for existing products",
                components: [
                  "Workflow pattern analysis",
                  "Use case library matching",
                  "Process optimization opportunities",
                  "Automation potential assessment",
                ],
                coverage: "3.8 additional use cases identified",
              },
            ].map((analysis) => (
              <div key={analysis.title} className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl">
                <div className="flex items-start mb-6">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-xl flex items-center justify-center mr-4">
                    <analysis.icon className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">{analysis.title}</h4>
                    <p className="text-gray-600 dark:text-gray-300">{analysis.description}</p>
                  </div>
                </div>
                
                <div className="space-y-2 mb-6">
                  <h5 className="font-medium">Key Components:</h5>
                  {analysis.components.map((component) => (
                    <div key={component} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                      <span className="text-sm">{component}</span>
                    </div>
                  ))}
                </div>
                
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                  <div className="text-sm font-semibold text-green-600">{analysis.coverage}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Opportunity Prioritization */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold">Opportunity Prioritization</h3>
            
            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl">
              <h4 className="text-xl font-bold mb-6">Whitespace Scoring Matrix</h4>
              <div className="space-y-6">
                {[
                  {
                    factor: "Market Size",
                    weight: "30%",
                    description: "Total addressable market within account",
                    scoring: "Department budget × potential users",
                  },
                  {
                    factor: "Probability",
                    weight: "25%",
                    description: "Likelihood of successful expansion",
                    scoring: "Relationship strength × fit score",
                  },
                  {
                    factor: "Timing",
                    weight: "20%",
                    description: "Readiness and urgency indicators",
                    scoring: "Budget cycle × pain intensity",
                  },
                  {
                    factor: "Effort Required",
                    weight: "15%",
                    description: "Sales and implementation complexity",
                    scoring: "Technical complexity × decision process",
                  },
                  {
                    factor: "Strategic Value",
                    weight: "10%",
                    description: "Long-term account importance",
                    scoring: "Account tier × reference potential",
                  },
                ].map((factor) => (
                  <div key={factor.factor} className="border-b border-gray-200 dark:border-slate-600 pb-4">
                    <div className="flex justify-between items-center mb-2">
                      <h5 className="font-semibold">{factor.factor}</h5>
                      <span className="text-sm font-bold text-primary">{factor.weight}</span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">{factor.description}</p>
                    <div className="text-xs bg-gray-100 dark:bg-slate-700 p-2 rounded">{factor.scoring}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl">
              <h4 className="text-xl font-bold mb-6">Top Whitespace Opportunities</h4>
              <div className="space-y-4">
                {[
                  {
                    account: "TechCorp Inc.",
                    opportunity: "Marketing Automation Suite",
                    score: 87,
                    value: "$145K",
                    timeline: "Q2 2024",
                  },
                  {
                    account: "Global Manufacturing",
                    opportunity: "Advanced Analytics Package",
                    score: 82,
                    value: "$230K",
                    timeline: "Q3 2024",
                  },
                  {
                    account: "FinanceFirst LLC",
                    opportunity: "Compliance & Security Add-on",
                    score: 78,
                    value: "$95K",
                    timeline: "Q1 2024",
                  },
                  {
                    account: "RetailGiant Corp",
                    opportunity: "Multi-location Deployment",
                    score: 75,
                    value: "$320K",
                    timeline: "Q4 2024",
                  },
                ].map((opportunity) => (
                  <div key={opportunity.account} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-slate-700 rounded-lg">
                    <div>
                      <h5 className="font-medium">{opportunity.account}</h5>
                      <div className="text-sm text-gray-600 dark:text-gray-300">{opportunity.opportunity}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-green-600">{opportunity.value}</div>
                      <div className="text-sm text-gray-500">Score: {opportunity.score}</div>
                      <div className="text-xs text-primary">{opportunity.timeline}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Whitespace Categories */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-slate-800 dark:to-slate-700 p-8 rounded-2xl">
          <h3 className="text-2xl font-bold mb-8 text-center">Whitespace Categories & Conversion Rates</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                category: "Department Expansion",
                description: "New departments adopting existing products",
                conversion: "67%",
                avg_value: "$85K",
              },
              {
                category: "Product Portfolio",
                description: "Additional products to existing users",
                conversion: "52%",
                avg_value: "$125K",
              },
              {
                category: "Use Case Extension",
                description: "New workflows within current departments",
                conversion: "74%",
                avg_value: "$45K",
              },
              {
                category: "Competitive Displacement",
                description: "Replace competitor products",
                conversion: "34%",
                avg_value: "$210K",
              },
            ].map((category) => (
              <div key={category.category} className="bg-white dark:bg-slate-800 p-6 rounded-xl text-center">
                <h4 className="font-bold text-green-600 mb-3">{category.category}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{category.description}</p>
                <div className="space-y-2">
                  <div className="text-2xl font-bold text-primary">{category.conversion}</div>
                  <div className="text-xs text-gray-500">Conversion Rate</div>
                  <div className="text-lg font-semibold">{category.avg_value}</div>
                  <div className="text-xs text-gray-500">Avg. Deal Size</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    "expansion-playbooks": (
      <div className="space-y-16">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">Expansion Playbooks</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Structured, repeatable approaches for different expansion scenarios with proven methodologies, 
            stakeholder engagement strategies, and timeline frameworks for optimal execution.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {[
            {
              playbook: "Seat Expansion",
              icon: Users,
              description: "Scale user adoption within existing departments",
              scenarios: ["Team growth", "Department merger", "Seasonal scaling"],
              timeline: "2-6 weeks",
              success_rate: "78%",
              avg_deal_size: "$35K",
              steps: [
                "Usage analysis & capacity planning",
                "Stakeholder engagement & business case",
                "Pilot expansion with key users",
                "Full rollout & training",
              ],
            },
            {
              playbook: "Product Upsell",
              icon: ArrowUpRight,
              description: "Introduce additional products to existing users",
              scenarios: ["Feature limitations hit", "New use cases identified", "Competitive pressure"],
              timeline: "4-12 weeks",
              success_rate: "65%",
              avg_deal_size: "$85K",
              steps: [
                "Product fit assessment",
                "Demo & trial setup",
                "Integration planning",
                "Implementation & adoption",
              ],
            },
            {
              playbook: "Department Expansion",
              icon: Building,
              description: "Expand into new departments or business units",
              scenarios: ["Cross-department visibility", "Executive mandate", "Process optimization"],
              timeline: "8-16 weeks",
              success_rate: "52%",
              avg_deal_size: "$150K",
              steps: [
                "Stakeholder mapping & champion identification",
                "Department needs assessment",
                "Pilot program design & execution",
                "Business case validation & rollout",
              ],
            },
          ].map((playbook) => (
            <motion.div
              key={playbook.playbook}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6 }}
              className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-xl flex items-center justify-center mr-4">
                  <playbook.icon className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold">{playbook.playbook}</h3>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 mb-6">{playbook.description}</p>
              
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                  <div className="text-lg font-bold text-purple-600">{playbook.success_rate}</div>
                  <div className="text-xs text-gray-500">Success Rate</div>
                </div>
                <div className="text-center p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                  <div className="text-lg font-bold text-purple-600">{playbook.avg_deal_size}</div>
                  <div className="text-xs text-gray-500">Avg. Deal</div>
                </div>
                <div className="text-center p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                  <div className="text-lg font-bold text-purple-600">{playbook.timeline}</div>
                  <div className="text-xs text-gray-500">Timeline</div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Common Scenarios:</h4>
                  <div className="space-y-1">
                    {playbook.scenarios.map((scenario) => (
                      <div key={scenario} className="text-sm bg-gray-100 dark:bg-slate-700 p-2 rounded">
                        {scenario}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Execution Steps:</h4>
                  <div className="space-y-2">
                    {playbook.steps.map((step, index) => (
                      <div key={step} className="flex items-center text-sm">
                        <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center mr-3 text-white text-xs font-bold">
                          {index + 1}
                        </div>
                        <span>{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stakeholder Engagement Framework */}
        <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl">
          <h3 className="text-2xl font-bold mb-8">Stakeholder Engagement Framework</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                role: "Economic Buyer",
                focus: "ROI & Business Impact",
                messaging: "Cost savings, efficiency gains, competitive advantage",
                engagement: "Executive briefings, business case presentations",
              },
              {
                role: "Technical Buyer",
                focus: "Implementation & Integration",
                messaging: "Technical feasibility, security, scalability",
                engagement: "Technical deep-dives, architecture reviews",
              },
              {
                role: "End User Champion",
                focus: "Usability & Productivity",
                messaging: "Workflow improvements, time savings, feature benefits",
                engagement: "Product demos, trial programs, user training",
              },
              {
                role: "Procurement/Legal",
                focus: "Risk & Compliance",
                messaging: "Vendor reliability, contract terms, compliance alignment",
                engagement: "Risk assessments, reference calls, contract discussions",
              },
            ].map((stakeholder) => (
              <div key={stakeholder.role} className="border rounded-xl p-6">
                <h4 className="font-bold text-purple-600 mb-3">{stakeholder.role}</h4>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="font-medium">Focus:</span>
                    <p className="text-gray-600 dark:text-gray-300">{stakeholder.focus}</p>
                  </div>
                  <div>
                    <span className="font-medium">Messaging:</span>
                    <p className="text-gray-600 dark:text-gray-300">{stakeholder.messaging}</p>
                  </div>
                  <div>
                    <span className="font-medium">Engagement:</span>
                    <p className="text-gray-600 dark:text-gray-300">{stakeholder.engagement}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Success Metrics */}
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-slate-800 dark:to-slate-700 p-8 rounded-2xl">
          <h3 className="text-2xl font-bold mb-8 text-center">Playbook Performance Metrics</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                metric: "Overall Success Rate",
                value: "68%",
                benchmark: "+23% vs. ad-hoc approach",
                description: "Structured playbooks vs unstructured expansion efforts",
              },
              {
                metric: "Average Deal Cycle",
                value: "8.3 weeks",
                benchmark: "45% faster than average",
                description: "Time from opportunity identification to close",
              },
              {
                metric: "Win Rate Improvement",
                value: "+34%",
                benchmark: "vs. previous year",
                description: "Year-over-year improvement in expansion win rates",
              },
            ].map((metric) => (
              <div key={metric.metric} className="bg-white dark:bg-slate-800 p-6 rounded-xl text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">{metric.value}</div>
                <h4 className="font-bold mb-2">{metric.metric}</h4>
                <div className="text-sm text-green-600 font-semibold mb-2">{metric.benchmark}</div>
                <p className="text-xs text-gray-600 dark:text-gray-300">{metric.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    "ai-suggestions": (
      <div className="space-y-16">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">AI-Powered Expansion Suggestions</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Machine learning algorithms analyze usage patterns, account characteristics, and market data 
            to provide intelligent recommendations for expansion timing, approach, and prioritization.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* AI Model Framework */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold">AI Recommendation Engine</h3>
            
            {[
              {
                icon: Brain,
                title: "Predictive Expansion Scoring",
                description: "ML models predict expansion probability and optimal timing",
                features: [
                  "Multi-variable regression analysis",
                  "Time series pattern recognition",
                  "Behavioral clustering algorithms",
                  "Propensity scoring models",
                ],
                accuracy: "89% prediction accuracy",
              },
              {
                icon: Target,
                title: "Recommendation Prioritization",
                description: "AI-driven ranking of expansion opportunities by value and probability",
                features: [
                  "Revenue potential calculation",
                  "Risk-adjusted ROI modeling",
                  "Competitive landscape analysis",
                  "Resource allocation optimization",
                ],
                accuracy: "94% recommendation relevance",
              },
              {
                icon: Calendar,
                title: "Optimal Timing Intelligence",
                description: "Determine the best time to approach accounts for expansion",
                features: [
                  "Budget cycle alignment",
                  "Organizational change detection",
                  "Usage pattern analysis",
                  "Market timing indicators",
                ],
                accuracy: "76% timing accuracy",
              },
            ].map((framework) => (
              <div key={framework.title} className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl">
                <div className="flex items-start mb-6">
                  <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-xl flex items-center justify-center mr-4">
                    <framework.icon className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">{framework.title}</h4>
                    <p className="text-gray-600 dark:text-gray-300">{framework.description}</p>
                  </div>
                </div>
                
                <div className="space-y-2 mb-6">
                  <h5 className="font-medium">Key Features:</h5>
                  {framework.features.map((feature) => (
                    <div key={feature} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg">
                  <div className="text-sm font-semibold text-orange-600">{framework.accuracy}</div>
                </div>
              </div>
            ))}
          </div>

          {/* AI Insights Dashboard */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold">AI-Generated Insights</h3>
            
            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl">
              <h4 className="text-xl font-bold mb-6">Top AI Recommendations</h4>
              <div className="space-y-6">
                {[
                  {
                    account: "Enterprise Corp",
                    suggestion: "Analytics Suite Upsell",
                    confidence: "92%",
                    value: "$185K",
                    timing: "Next 30 days",
                    reasoning: "Heavy dashboard usage, recent executive hire in analytics",
                  },
                  {
                    account: "TechStart Inc",
                    suggestion: "Department Expansion",
                    confidence: "87%",
                    value: "$95K",
                    timing: "Q2 start",
                    reasoning: "HR department showing interest, budget cycle alignment",
                  },
                  {
                    account: "Global Manufacturing",
                    suggestion: "Seat Expansion",
                    confidence: "84%",
                    value: "$45K",
                    timing: "Immediate",
                    reasoning: "80% capacity utilization, team growth indicators",
                  },
                ].map((recommendation) => (
                  <div key={recommendation.account} className="border-l-4 border-orange-500 pl-6 py-4">
                    <div className="flex items-center justify-between mb-2">
                      <h5 className="font-bold text-orange-600">{recommendation.account}</h5>
                      <span className="text-sm bg-orange-100 text-orange-800 px-2 py-1 rounded-full">
                        {recommendation.confidence} confidence
                      </span>
                    </div>
                    <div className="text-lg font-semibold mb-2">{recommendation.suggestion}</div>
                    <div className="grid grid-cols-2 gap-4 mb-3 text-sm">
                      <div>
                        <span className="font-medium">Value:</span> {recommendation.value}
                      </div>
                      <div>
                        <span className="font-medium">Timing:</span> {recommendation.timing}
                      </div>
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-slate-700 p-3 rounded">
                      <strong>AI Reasoning:</strong> {recommendation.reasoning}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl">
              <h4 className="text-xl font-bold mb-6">Model Performance</h4>
              <div className="space-y-6">
                {[
                  {
                    metric: "Prediction Accuracy",
                    current: "89%",
                    target: "92%",
                    trend: "+5% this quarter",
                  },
                  {
                    metric: "Recommendation Adoption",
                    current: "76%",
                    target: "80%",
                    trend: "+12% this quarter",
                  },
                  {
                    metric: "False Positive Rate",
                    current: "8%",
                    target: "< 5%",
                    trend: "-3% this quarter",
                  },
                  {
                    metric: "Revenue Attribution",
                    current: "$2.4M",
                    target: "$3M",
                    trend: "+45% this quarter",
                  },
                ].map((metric) => (
                  <div key={metric.metric} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-slate-700 rounded-lg">
                    <div>
                      <h5 className="font-semibold">{metric.metric}</h5>
                      <div className="text-sm text-gray-600 dark:text-gray-300">Target: {metric.target}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-bold text-orange-600">{metric.current}</div>
                      <div className="text-sm text-green-600">{metric.trend}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* AI Training & Optimization */}
        <div className="bg-gradient-to-r from-orange-50 to-yellow-50 dark:from-slate-800 dark:to-slate-700 p-8 rounded-2xl">
          <h3 className="text-2xl font-bold mb-8 text-center">AI Model Training & Optimization</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                phase: "Data Collection",
                description: "Historical expansion data, usage patterns, account characteristics",
                frequency: "Real-time ingestion",
              },
              {
                phase: "Model Training",
                description: "Feature engineering, algorithm selection, hyperparameter tuning",
                frequency: "Weekly retraining",
              },
              {
                phase: "Validation & Testing",
                description: "A/B testing, performance validation, bias detection",
                frequency: "Continuous monitoring",
              },
              {
                phase: "Deployment & Feedback",
                description: "Model deployment, outcome tracking, feedback incorporation",
                frequency: "Monthly optimization",
              },
            ].map((phase) => (
              <div key={phase.phase} className="bg-white dark:bg-slate-800 p-6 rounded-xl text-center">
                <h4 className="font-bold text-orange-600 mb-3">{phase.phase}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{phase.description}</p>
                <div className="text-xs bg-orange-100 dark:bg-slate-700 px-2 py-1 rounded">
                  {phase.frequency}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ROI & Impact */}
        <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl">
          <h3 className="text-2xl font-bold mb-8 text-center">AI-Driven Expansion ROI</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                metric: "Revenue Increase",
                value: "+67%",
                description: "AI-recommended expansions vs manual identification",
              },
              {
                metric: "Efficiency Gain",
                value: "3.2x",
                description: "Faster opportunity identification and prioritization",
              },
              {
                metric: "Success Rate",
                value: "+34%",
                description: "Higher conversion on AI-recommended opportunities",
              },
              {
                metric: "Time Savings",
                value: "75%",
                description: "Reduction in manual analysis and research time",
              },
            ].map((impact) => (
              <div key={impact.metric} className="text-center p-6 bg-gray-50 dark:bg-slate-700 rounded-xl">
                <div className="text-3xl font-bold text-orange-600 mb-2">{impact.value}</div>
                <h4 className="font-bold mb-2">{impact.metric}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">{impact.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Navigation */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Link href="/#expansion-strategy" className="flex items-center text-primary hover:text-primary/80 transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Overview
          </Link>
        </motion.div>

        {/* Navigation Tabs */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
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
          className="mb-16"
        >
          {tabContent[activeTab as keyof typeof tabContent]}
        </motion.div>

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-r from-primary to-secondary p-12 rounded-3xl text-white text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">Ready to Accelerate Account Expansion?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Let's build systematic expansion strategies that unlock hidden revenue within your existing accounts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center">
              <Calendar className="w-5 h-5 mr-2" />
              Schedule Consultation
            </Link>
            <Link href="/blog" className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center">
              <Download className="w-5 h-5 mr-2" />
              Download Playbooks
            </Link>
          </div>
        </motion.section>
      </div>
    </div>
  );
}