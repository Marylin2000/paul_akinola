"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import Link from "next/link";
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
  ArrowLeft,
  Download,
  ExternalLink,
  CheckCircle,
  Calendar,
  Settings,
  Database,
  BarChart3,
  Brain,
} from "lucide-react";

export default function GrowthSystemsPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [activeTab, setActiveTab] = useState("overview");

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "plg-motion", label: "PLG Motion" },
    { id: "lifecycle", label: "Lifecycle Nurture" },
    { id: "scoring", label: "Scoring Models" },
    { id: "experiments", label: "Experiments" },
    { id: "community", label: "Community PLG" },
  ];

  const tabContent = {
    overview: (
      <div className="space-y-16">
        {/* Hero Section */}
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-black mb-8">
            Growth Systems Architecture
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Comprehensive frameworks for building scalable product-led growth systems that transform user acquisition, 
            activation, and expansion through data-driven methodologies and intelligent automation.
          </p>
        </div>

        {/* Framework Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {[
            {
              icon: Rocket,
              title: "PLG Motion & Activation",
              description: "Optimize onboarding flows, reduce TTFI, and create scalable activation engines",
              metrics: "65% TTFI reduction, 78% activation rate",
            },
            {
              icon: Mail,
              title: "Lifecycle Nurture Systems",
              description: "Behavioral triggers and intelligent email sequences for continuous engagement",
              metrics: "42% open rate, 18% CTR",
            },
            {
              icon: Target,
              title: "Advanced Scoring Models",
              description: "Progressive qualification from PQL → PEQL → MQA for optimal sales handoff",
              metrics: "68% MQA conversion rate",
            },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl"
            >
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-6">
                <item.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">{item.description}</p>
              <div className="bg-blue-50 dark:bg-slate-700 p-4 rounded-lg">
                <p className="text-sm font-semibold text-primary">{item.metrics}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Methodology Section */}
        <div className="bg-gradient-to-r from-primary to-secondary p-12 rounded-3xl text-white">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Complete Growth Methodology</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              From initial user acquisition to expansion revenue, our systematic approach covers every stage of the growth journey
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { phase: "Acquire", focus: "Channel optimization, attribution modeling", icon: Users },
              { phase: "Activate", focus: "Onboarding flows, TTFI reduction", icon: Zap },
              { phase: "Engage", focus: "Lifecycle nurture, behavioral triggers", icon: MessageCircle },
              { phase: "Expand", focus: "Upsell signals, account scoring", icon: TrendingUp },
            ].map((item, index) => (
              <div key={item.phase} className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{item.phase}</h3>
                <p className="text-sm opacity-80">{item.focus}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Resources Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold mb-6">Implementation Templates</h3>
            <div className="space-y-4">
              {[
                "PLG Activation Playbook",
                "Scoring Model Calculator",
                "Experiment Tracking Template",
                "Lifecycle Email Sequences",
                "Community Growth Framework",
              ].map((template) => (
                <div key={template} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-slate-700 rounded-lg">
                  <div className="flex items-center">
                    <Download className="w-5 h-5 text-primary mr-3" />
                    <span className="font-medium">{template}</span>
                  </div>
                  <button className="text-primary hover:text-primary/80 transition-colors">
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold mb-6">Case Study Results</h3>
            <div className="space-y-6">
              {[
                {
                  metric: "User Activation Rate",
                  before: "23%",
                  after: "78%",
                  improvement: "+239%",
                },
                {
                  metric: "Time to First Insight",
                  before: "12 days",
                  after: "4.2 days",
                  improvement: "-65%",
                },
                {
                  metric: "Sales Conversion Rate",
                  before: "3.2%",
                  after: "8.7%",
                  improvement: "+172%",
                },
              ].map((result) => (
                <div key={result.metric} className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold mb-2">{result.metric}</h4>
                  <div className="flex items-center space-x-4 text-sm">
                    <span className="text-gray-500">Before: {result.before}</span>
                    <span className="text-primary font-bold">After: {result.after}</span>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
                      {result.improvement}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
    "plg-motion": (
      <div className="space-y-16">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">PLG Motion & Activation</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive product-led growth framework that optimizes user onboarding, reduces time-to-first-insight, 
            and creates scalable activation engines through behavioral triggers and intelligent user journeys.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Framework Components */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold">Core Components</h3>
            {[
              {
                icon: Rocket,
                title: "Onboarding Flow Optimization",
                description: "Streamlined user journeys that reduce friction and accelerate value realization",
                details: [
                  "Progressive disclosure techniques",
                  "Contextual guidance systems",
                  "Milestone-based progression",
                  "Personalized setup flows",
                ],
              },
              {
                icon: Clock,
                title: "TTFI Reduction Strategies",
                description: "Data-driven approaches to minimize time-to-first-insight and drive early engagement",
                details: [
                  "Pre-populated demo data",
                  "Smart defaults configuration",
                  "Quick-win feature highlights",
                  "Guided tutorial sequences",
                ],
              },
              {
                icon: TrendingUp,
                title: "Quickstart Implementations",
                description: "Guided setup flows that ensure users reach activation milestones efficiently",
                details: [
                  "Template-based onboarding",
                  "Use case specific pathways",
                  "Integration setup wizards",
                  "Achievement unlock systems",
                ],
              },
            ].map((component) => (
              <div key={component.title} className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl">
                <div className="flex items-start mb-6">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mr-4">
                    <component.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">{component.title}</h4>
                    <p className="text-gray-600 dark:text-gray-300">{component.description}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {component.details.map((detail) => (
                    <li key={detail} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                      <span className="text-sm">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Metrics Dashboard */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold">Performance Metrics</h3>
            
            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl">
              <h4 className="text-xl font-bold mb-6">Activation Funnel</h4>
              <div className="space-y-6">
                {[
                  { stage: "Sign Up", users: "10,000", conversion: "100%", color: "blue" },
                  { stage: "Profile Setup", users: "8,200", conversion: "82%", color: "green" },
                  { stage: "First Action", users: "7,150", conversion: "87%", color: "yellow" },
                  { stage: "Feature Discovery", users: "6,200", conversion: "87%", color: "orange" },
                  { stage: "Activation", users: "5,420", conversion: "87%", color: "purple" },
                ].map((stage) => (
                  <div key={stage.stage} className="relative">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">{stage.stage}</span>
                      <div className="text-right">
                        <div className="font-bold">{stage.users}</div>
                        <div className={`text-sm text-${stage.color}-600`}>{stage.conversion}</div>
                      </div>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-3">
                      <div
                        className={`bg-${stage.color}-500 h-3 rounded-full transition-all duration-500`}
                        style={{ width: stage.conversion }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl">
              <h4 className="text-xl font-bold mb-6">Key Activation Metrics</h4>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { label: "TTFI", value: "4.2 days", change: "-65%", trend: "down" },
                  { label: "Activation Rate", value: "78%", change: "+32%", trend: "up" },
                  { label: "Feature Adoption", value: "92%", change: "+28%", trend: "up" },
                  { label: "Setup Completion", value: "87%", change: "+45%", trend: "up" },
                ].map((metric) => (
                  <div key={metric.label} className="text-center p-4 bg-gray-50 dark:bg-slate-700 rounded-lg">
                    <div className="text-2xl font-bold text-primary mb-1">{metric.value}</div>
                    <div className="text-sm font-medium mb-2">{metric.label}</div>
                    <div className={`text-xs font-semibold ${
                      metric.trend === "up" ? "text-green-600" : "text-blue-600"
                    }`}>
                      {metric.change}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Implementation Timeline */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-700 p-8 rounded-2xl">
          <h3 className="text-2xl font-bold mb-8 text-center">Implementation Timeline</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { week: "Week 1-2", focus: "Audit & Analysis", tasks: ["User journey mapping", "Friction point identification", "Baseline metrics collection"] },
              { week: "Week 3-4", focus: "Design & Development", tasks: ["Flow optimization", "Component development", "A/B test setup"] },
              { week: "Week 5-6", focus: "Testing & Refinement", tasks: ["User testing sessions", "Performance optimization", "Feedback integration"] },
              { week: "Week 7-8", focus: "Launch & Optimization", tasks: ["Gradual rollout", "Metrics monitoring", "Continuous improvement"] },
            ].map((phase) => (
              <div key={phase.week} className="bg-white dark:bg-slate-800 p-6 rounded-xl">
                <h4 className="font-bold text-primary mb-2">{phase.week}</h4>
                <h5 className="font-semibold mb-3">{phase.focus}</h5>
                <ul className="space-y-1 text-sm">
                  {phase.tasks.map((task) => (
                    <li key={task} className="flex items-center">
                      <CheckCircle className="w-3 h-3 text-green-500 mr-2" />
                      {task}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    lifecycle: (
      <div className="space-y-16">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">Lifecycle Nurture Systems</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Intelligent email sequences powered by behavioral triggers that deliver personalized content based on user 
            behavior, engagement patterns, and lifecycle stage to drive continuous value and progression.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Email Sequence Framework */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold">Email Sequence Framework</h3>
            
            {[
              {
                icon: Mail,
                title: "Welcome Series",
                description: "Onboarding email sequence for new users",
                sequence: [
                  "Welcome & Account Setup",
                  "Product Tour & Key Features",
                  "First Action Guidance",
                  "Success Stories & Use Cases",
                  "Community & Support Resources",
                ],
              },
              {
                icon: Users,
                title: "Engagement Recovery",
                description: "Re-activation sequences for dormant users",
                sequence: [
                  "We Miss You Message",
                  "Feature Updates & Improvements",
                  "Success Story Inspiration",
                  "Personal Outreach Offer",
                  "Final Value Proposition",
                ],
              },
              {
                icon: Star,
                title: "Feature Adoption",
                description: "Targeted sequences for specific feature adoption",
                sequence: [
                  "Feature Introduction",
                  "Use Case Examples",
                  "Step-by-Step Tutorial",
                  "Success Metrics Sharing",
                  "Advanced Tips & Tricks",
                ],
              },
            ].map((sequence) => (
              <div key={sequence.title} className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl">
                <div className="flex items-start mb-6">
                  <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center mr-4">
                    <sequence.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">{sequence.title}</h4>
                    <p className="text-gray-600 dark:text-gray-300">{sequence.description}</p>
                  </div>
                </div>
                <div className="space-y-3">
                  {sequence.sequence.map((email, index) => (
                    <div key={email} className="flex items-center p-3 bg-gray-50 dark:bg-slate-700 rounded-lg">
                      <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mr-3 text-xs text-white font-bold">
                        {index + 1}
                      </div>
                      <span className="text-sm font-medium">{email}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Performance Dashboard */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold">Performance Analytics</h3>
            
            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl">
              <h4 className="text-xl font-bold mb-6">Sequence Performance</h4>
              <div className="space-y-6">
                {[
                  { sequence: "Welcome Series", opens: "68%", clicks: "24%", conversions: "12%" },
                  { sequence: "Engagement Recovery", opens: "42%", clicks: "18%", conversions: "8%" },
                  { sequence: "Feature Adoption", opens: "71%", clicks: "31%", conversions: "15%" },
                ].map((metric) => (
                  <div key={metric.sequence} className="border-l-4 border-primary pl-6">
                    <h5 className="font-semibold mb-3">{metric.sequence}</h5>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-600">{metric.opens}</div>
                        <div className="text-xs text-gray-500">Open Rate</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-600">{metric.clicks}</div>
                        <div className="text-xs text-gray-500">Click Rate</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-purple-600">{metric.conversions}</div>
                        <div className="text-xs text-gray-500">Conversion Rate</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl">
              <h4 className="text-xl font-bold mb-6">Behavioral Triggers</h4>
              <div className="space-y-4">
                {[
                  { trigger: "User Inactive 7 Days", action: "Re-engagement Email", success: "32%" },
                  { trigger: "Feature Not Used 14 Days", action: "Tutorial Email", success: "28%" },
                  { trigger: "High Engagement Score", action: "Upsell Sequence", success: "15%" },
                  { trigger: "Support Ticket Resolved", action: "Satisfaction Survey", success: "67%" },
                ].map((trigger) => (
                  <div key={trigger.trigger} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-slate-700 rounded-lg">
                    <div>
                      <h5 className="font-medium">{trigger.trigger}</h5>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{trigger.action}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-green-600">{trigger.success}</div>
                      <div className="text-xs text-gray-500">Success Rate</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Advanced Segmentation */}
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-slate-800 dark:to-slate-700 p-8 rounded-2xl">
          <h3 className="text-2xl font-bold mb-8 text-center">Advanced User Segmentation</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                segment: "New Users",
                criteria: "< 30 days, low feature adoption",
                strategy: "Educational content, feature discovery",
                size: "2,450 users",
              },
              {
                segment: "Active Users",
                criteria: "Regular usage, multiple features",
                strategy: "Advanced tips, new feature announcements",
                size: "8,750 users",
              },
              {
                segment: "Power Users",
                criteria: "High engagement, feature advocates",
                strategy: "Beta features, community involvement",
                size: "1,200 users",
              },
            ].map((segment) => (
              <div key={segment.segment} className="bg-white dark:bg-slate-800 p-6 rounded-xl">
                <h4 className="font-bold text-primary mb-3">{segment.segment}</h4>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="font-medium">Criteria:</span>
                    <p className="text-gray-600 dark:text-gray-300">{segment.criteria}</p>
                  </div>
                  <div>
                    <span className="font-medium">Strategy:</span>
                    <p className="text-gray-600 dark:text-gray-300">{segment.strategy}</p>
                  </div>
                  <div className="bg-blue-50 dark:bg-slate-700 p-2 rounded text-center">
                    <span className="font-bold text-primary">{segment.size}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    scoring: (
      <div className="space-y-16">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">Advanced Scoring Models</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Progressive qualification framework that evolves users from Product-Qualified Leads to Product-Engaged 
            Qualified Leads, culminating in Marketing-Qualified Accounts ready for sales engagement.
          </p>
        </div>

        {/* Scoring Progression */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {[
            {
              icon: Target,
              title: "PQL (Product-Qualified Lead)",
              description: "Individual users showing high engagement and feature adoption patterns",
              criteria: [
                "Login frequency > 3x/week",
                "Feature adoption > 2 core features",
                "Data uploaded or configured",
                "Time spent > 30 min/session",
              ],
              score: "60-79 points",
              color: "blue",
            },
            {
              icon: Zap,
              title: "PEQL (Product-Engaged Qualified Lead)",
              description: "Users demonstrating sustained usage and reaching key activation milestones",
              criteria: [
                "Active for > 14 days",
                "Completed onboarding flow",
                "Invited team members",
                "Created first project/workflow",
              ],
              score: "80-89 points",
              color: "green",
            },
            {
              icon: Crown,
              title: "MQA (Marketing-Qualified Account)",
              description: "Accounts with multiple engaged users, firmographic fit, and expansion signals",
              criteria: [
                "Multiple PEQLs in account",
                "Enterprise email domain",
                "High usage volume",
                "Integration requests",
              ],
              score: "90+ points",
              color: "purple",
            },
          ].map((stage, index) => (
            <motion.div
              key={stage.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl border-l-4 border-${stage.color}-500`}
            >
              <div className={`w-16 h-16 bg-${stage.color}-100 dark:bg-${stage.color}-900 rounded-2xl flex items-center justify-center mb-6`}>
                <stage.icon className={`w-8 h-8 text-${stage.color}-600`} />
              </div>
              <h3 className="text-xl font-bold mb-4">{stage.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">{stage.description}</p>
              
              <div className="space-y-3 mb-6">
                <h4 className="font-semibold">Qualification Criteria:</h4>
                {stage.criteria.map((criterion) => (
                  <div key={criterion} className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                    <span className="text-sm">{criterion}</span>
                  </div>
                ))}
              </div>
              
              <div className={`bg-${stage.color}-50 dark:bg-${stage.color}-900/20 p-4 rounded-lg text-center`}>
                <div className={`text-2xl font-bold text-${stage.color}-600 mb-1`}>{stage.score}</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Scoring Range</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Scoring Matrix */}
        <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl">
          <h3 className="text-2xl font-bold mb-8">Scoring Matrix & Weights</h3>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 dark:border-slate-600">
                  <th className="text-left py-4 px-4 font-medium">Behavior Category</th>
                  <th className="text-center py-4 px-4 font-medium">Weight</th>
                  <th className="text-center py-4 px-4 font-medium">Max Points</th>
                  <th className="text-left py-4 px-4 font-medium">Examples</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    category: "Product Engagement",
                    weight: "40%",
                    points: "40",
                    examples: "Feature usage, session duration, return visits",
                  },
                  {
                    category: "Onboarding Completion",
                    weight: "25%",
                    points: "25",
                    examples: "Profile setup, first project, integration setup",
                  },
                  {
                    category: "Social Signals",
                    weight: "20%",
                    points: "20",
                    examples: "Team invites, sharing, referrals",
                  },
                  {
                    category: "Firmographic Fit",
                    weight: "15%",
                    points: "15",
                    examples: "Company size, industry, email domain",
                  },
                ].map((row, index) => (
                  <tr key={row.category} className={index % 2 === 0 ? "bg-gray-50 dark:bg-slate-700" : ""}>
                    <td className="py-4 px-4 font-medium">{row.category}</td>
                    <td className="py-4 px-4 text-center font-semibold text-primary">{row.weight}</td>
                    <td className="py-4 px-4 text-center font-semibold">{row.points}</td>
                    <td className="py-4 px-4 text-gray-600 dark:text-gray-300">{row.examples}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Conversion Metrics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold mb-6">Conversion Performance</h3>
            <div className="space-y-6">
              {[
                {
                  stage: "PQL → Sales Conversation",
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
                <div key={metric.stage} className={`border-l-4 border-${metric.color}-500 pl-6`}>
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold">{metric.stage}</h4>
                    <div className={`text-2xl font-bold text-${metric.color}-600`}>{metric.rate}</div>
                  </div>
                  <div className={`text-sm font-semibold text-${metric.color}-500`}>
                    {metric.improvement}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold mb-6">Score Distribution</h3>
            <div className="space-y-4">
              {[
                { range: "90-100 (MQA)", count: "245", percentage: "2.1%" },
                { range: "80-89 (PEQL)", count: "892", percentage: "7.6%" },
                { range: "60-79 (PQL)", count: "2,150", percentage: "18.3%" },
                { range: "40-59 (Warm)", count: "3,420", percentage: "29.1%" },
                { range: "0-39 (Cold)", count: "5,043", percentage: "42.9%" },
              ].map((score) => (
                <div key={score.range} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-slate-700 rounded-lg">
                  <div>
                    <span className="font-medium">{score.range}</span>
                    <div className="text-sm text-gray-600 dark:text-gray-300">{score.count} users</div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-primary">{score.percentage}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
    experiments: (
      <div className="space-y-16">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">Growth Experiment Framework</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Systematic approach to growth experimentation using RICE prioritization, structured A/B testing, 
            and comprehensive results tracking to optimize every aspect of the user journey.
          </p>
        </div>

        {/* RICE Framework */}
        <div className="bg-gradient-to-r from-primary to-secondary p-12 rounded-3xl text-white">
          <h3 className="text-3xl font-bold mb-8 text-center">RICE Prioritization Framework</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                letter: "R",
                term: "Reach",
                description: "How many users will be impacted?",
                example: "5,000 users/month",
              },
              {
                letter: "I",
                term: "Impact",
                description: "How much will this improve the metric?",
                example: "3x impact (high)",
              },
              {
                letter: "C",
                term: "Confidence",
                description: "How confident are we this will work?",
                example: "80% confidence",
              },
              {
                letter: "E",
                term: "Effort",
                description: "How much work is required?",
                example: "2 person-months",
              },
            ].map((component) => (
              <div key={component.letter} className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">{component.letter}</span>
                </div>
                <h4 className="text-xl font-bold mb-2">{component.term}</h4>
                <p className="text-sm opacity-90 mb-2">{component.description}</p>
                <p className="text-xs bg-white/10 px-3 py-1 rounded-full">{component.example}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8 p-6 bg-white/10 rounded-2xl">
            <h4 className="text-xl font-bold mb-2">RICE Score Calculation</h4>
            <p className="text-lg">Score = (Reach × Impact × Confidence) ÷ Effort</p>
            <p className="text-sm opacity-80 mt-2">Example: (5,000 × 3 × 0.8) ÷ 2 = 6,000 points</p>
          </div>
        </div>

        {/* Experiment Pipeline */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-3xl font-bold">Current Experiment Pipeline</h3>
            
            {[
              {
                status: "Running",
                title: "Onboarding Flow Redesign",
                hypothesis: "Reducing steps from 8 to 4 will increase completion rate",
                rice: 8500,
                duration: "2 weeks remaining",
                color: "green",
              },
              {
                status: "Analysis",
                title: "Email Subject Line Personalization",
                hypothesis: "Adding first name will improve open rates",
                rice: 6200,
                duration: "Results pending",
                color: "yellow",
              },
              {
                status: "Queued",
                title: "Feature Discovery Modal",
                hypothesis: "Highlighting unused features will increase adoption",
                rice: 5800,
                duration: "Starts next week",
                color: "blue",
              },
            ].map((experiment) => (
              <div key={experiment.title} className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-xl">
                <div className="flex items-start justify-between mb-4">
                  <div className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    experiment.status === "Running" ? "bg-green-100 text-green-800" :
                    experiment.status === "Analysis" ? "bg-yellow-100 text-yellow-800" :
                    "bg-blue-100 text-blue-800"
                  }`}>
                    {experiment.status}
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-primary">{experiment.rice}</div>
                    <div className="text-xs text-gray-500">RICE Score</div>
                  </div>
                </div>
                <h4 className="text-lg font-bold mb-2">{experiment.title}</h4>
                <p className="text-gray-600 dark:text-gray-300 mb-3">{experiment.hypothesis}</p>
                <div className="text-sm text-gray-500">{experiment.duration}</div>
              </div>
            ))}
          </div>

          <div className="space-y-8">
            <h3 className="text-3xl font-bold">Recent Results</h3>
            
            {[
              {
                title: "Landing Page CTA Button Color",
                result: "+23% Click Rate",
                confidence: "95%",
                impact: "High",
                details: "Changed from blue to orange, significant improvement",
              },
              {
                title: "Email Send Time Optimization",
                result: "+18% Open Rate",
                confidence: "92%",
                impact: "Medium",
                details: "Shifted from 9 AM to 2 PM based on user activity",
              },
              {
                title: "Free Trial Length Extension",
                result: "+31% Conversion",
                confidence: "98%",
                impact: "High",
                details: "Extended from 14 to 30 days for complex products",
              },
            ].map((result) => (
              <div key={result.title} className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-xl border-l-4 border-green-500">
                <h4 className="text-lg font-bold mb-2">{result.title}</h4>
                <div className="text-2xl font-bold text-green-600 mb-3">{result.result}</div>
                <div className="grid grid-cols-2 gap-4 mb-3">
                  <div>
                    <span className="text-sm text-gray-500">Confidence:</span>
                    <div className="font-semibold">{result.confidence}</div>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">Impact:</span>
                    <div className="font-semibold">{result.impact}</div>
                  </div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">{result.details}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Experiment Categories */}
        <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl">
          <h3 className="text-2xl font-bold mb-8">Experiment Categories & Success Rates</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                category: "Acquisition",
                experiments: 24,
                winners: 8,
                rate: "33%",
                examples: ["Landing page optimization", "Ad copy testing", "Channel experiments"],
              },
              {
                category: "Activation",
                experiments: 18,
                winners: 11,
                rate: "61%",
                examples: ["Onboarding flows", "Feature discovery", "Setup optimization"],
              },
              {
                category: "Retention",
                experiments: 15,
                winners: 6,
                rate: "40%",
                examples: ["Email sequences", "In-app messaging", "Feature adoption"],
              },
            ].map((category) => (
              <div key={category.category} className="text-center">
                <h4 className="text-xl font-bold mb-4">{category.category}</h4>
                <div className="text-4xl font-bold text-primary mb-2">{category.rate}</div>
                <div className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                  {category.winners} winners out of {category.experiments} experiments
                </div>
                <div className="space-y-2">
                  {category.examples.map((example) => (
                    <div key={example} className="text-sm bg-gray-50 dark:bg-slate-700 p-2 rounded">
                      {example}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    community: (
      <div className="space-y-16">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">Community-Driven PLG</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Leveraging community platforms and social dynamics to create self-sustaining growth loops where 
            engaged users become advocates, driving organic acquisition and product adoption through social proof and peer influence.
          </p>
        </div>

        {/* Community Platform Integration */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-3xl font-bold">Platform Integration</h3>
            
            {[
              {
                icon: Network,
                title: "Common Room Integration",
                description: "Unified community intelligence platform",
                features: [
                  "Cross-platform activity tracking",
                  "Member engagement scoring",
                  "Automated community insights",
                  "Integration with CRM/sales tools",
                ],
              },
              {
                icon: Users,
                title: "Multi-Channel Community",
                description: "Presence across key community platforms",
                features: [
                  "Slack/Discord communities",
                  "GitHub contributions tracking",
                  "Twitter/LinkedIn engagement",
                  "Industry forum participation",
                ],
              },
              {
                icon: MessageCircle,
                title: "Community-Led Support",
                description: "Peer-to-peer assistance programs",
                features: [
                  "Expert user recognition",
                  "Gamified help systems",
                  "Knowledge base contributions",
                  "Office hours and AMAs",
                ],
              },
            ].map((integration) => (
              <div key={integration.title} className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl">
                <div className="flex items-start mb-6">
                  <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center mr-4">
                    <integration.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">{integration.title}</h4>
                    <p className="text-gray-600 dark:text-gray-300">{integration.description}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {integration.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="space-y-8">
            <h3 className="text-3xl font-bold">Community Metrics</h3>
            
            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl">
              <h4 className="text-xl font-bold mb-6">Growth Impact</h4>
              <div className="space-y-6">
                {[
                  {
                    metric: "Community-Driven Signups",
                    value: "35%",
                    description: "of new users come through community referrals",
                    trend: "+12% this quarter",
                  },
                  {
                    metric: "Support Cost Reduction",
                    value: "62%",
                    description: "decrease in support tickets through peer help",
                    trend: "+8% this quarter",
                  },
                  {
                    metric: "Feature Adoption Rate",
                    value: "78%",
                    description: "higher adoption through community tutorials",
                    trend: "+15% this quarter",
                  },
                ].map((metric) => (
                  <div key={metric.metric} className="border-l-4 border-accent pl-6">
                    <div className="flex items-center justify-between mb-2">
                      <h5 className="font-semibold">{metric.metric}</h5>
                      <div className="text-3xl font-bold text-accent">{metric.value}</div>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">{metric.description}</p>
                    <div className="text-sm font-semibold text-green-600">{metric.trend}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl">
              <h4 className="text-xl font-bold mb-6">Advocate Program</h4>
              <div className="space-y-4">
                {[
                  { level: "Community Helper", members: 45, benefits: "Badge, early access" },
                  { level: "Product Expert", members: 18, benefits: "Swag, beta features" },
                  { level: "Brand Ambassador", members: 8, benefits: "Events, revenue share" },
                ].map((level) => (
                  <div key={level.level} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-slate-700 rounded-lg">
                    <div>
                      <h5 className="font-medium">{level.level}</h5>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{level.benefits}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary">{level.members}</div>
                      <div className="text-xs text-gray-500">Members</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Community Flywheel */}
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-slate-800 dark:to-slate-700 p-8 rounded-2xl">
          <h3 className="text-2xl font-bold mb-8 text-center">Community Growth Flywheel</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: "1. Attract",
                description: "High-quality content and resources draw potential users",
                tactics: ["Educational content", "Free tools", "Expert insights"],
              },
              {
                step: "2. Engage",
                description: "Interactive experiences create meaningful connections",
                tactics: ["Q&A sessions", "User showcases", "Collaborative projects"],
              },
              {
                step: "3. Convert",
                description: "Trust and social proof drive product adoption",
                tactics: ["Peer recommendations", "Success stories", "Trial extensions"],
              },
              {
                step: "4. Advocate",
                description: "Satisfied users become community champions",
                tactics: ["Referral programs", "Content creation", "Event speaking"],
              },
            ].map((step, index) => (
              <div key={step.step} className="bg-white dark:bg-slate-800 p-6 rounded-xl relative">
                {index < 3 && (
                  <div className="hidden md:block absolute -right-3 top-1/2 transform -translate-y-1/2 w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-xs font-bold">
                    →
                  </div>
                )}
                <h4 className="font-bold text-primary mb-3">{step.step}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{step.description}</p>
                <ul className="space-y-1">
                  {step.tactics.map((tactic) => (
                    <li key={tactic} className="text-xs bg-gray-50 dark:bg-slate-700 p-2 rounded">
                      {tactic}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Success Stories */}
        <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl">
          <h3 className="text-2xl font-bold mb-8 text-center">Community Success Stories</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                company: "TechCorp Inc.",
                challenge: "Low product adoption despite high trial signups",
                solution: "Implemented community-led onboarding program",
                result: "78% increase in feature adoption, 45% improvement in trial-to-paid conversion",
              },
              {
                company: "StartupXYZ",
                challenge: "High support costs and user churn",
                solution: "Built peer-to-peer support community with gamification",
                result: "62% reduction in support tickets, 34% improvement in user retention",
              },
            ].map((story) => (
              <div key={story.company} className="border-l-4 border-accent pl-6">
                <h4 className="font-bold text-accent mb-3">{story.company}</h4>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="font-medium">Challenge:</span>
                    <p className="text-gray-600 dark:text-gray-300">{story.challenge}</p>
                  </div>
                  <div>
                    <span className="font-medium">Solution:</span>
                    <p className="text-gray-600 dark:text-gray-300">{story.solution}</p>
                  </div>
                  <div>
                    <span className="font-medium">Result:</span>
                    <p className="text-green-600 font-semibold">{story.result}</p>
                  </div>
                </div>
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
          <Link href="/#growth-systems" className="flex items-center text-primary hover:text-primary/80 transition-colors">
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
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Growth Systems?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Let's build scalable, data-driven growth systems that accelerate your product-led growth journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center">
              <Calendar className="w-5 h-5 mr-2" />
              Schedule Consultation
            </Link>
            <Link href="/blog" className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center">
              <Download className="w-5 h-5 mr-2" />
              Download Templates
            </Link>
          </div>
        </motion.section>
      </div>
    </div>
  );
}