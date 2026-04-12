"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import Link from "next/link";
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
  ArrowLeft,
  Download,
  Calendar,
  CheckCircle,
  ExternalLink,
  Settings,
  BarChart3,
  MessageSquare,
  Shield,
  Clock,
} from "lucide-react";

export default function GTMSystemsPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [activeTab, setActiveTab] = useState("overview");

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "mqa-routing", label: "MQA Routing" },
    { id: "signal-architecture", label: "Signal Architecture" },
    { id: "lead-enrichment", label: "Lead Enrichment" },
    { id: "marvis-gtm", label: "MarVis GTM" },
  ];

  const tabContent = {
    overview: (
      <div className="space-y-16">
        {/* Hero Section */}
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-black mb-8">
            GTM Systems & New Logo Motion
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Intelligent Go-to-Market systems that capture, route, and convert high-intent prospects through 
            automated workflows, advanced lead scoring, and AI-powered insights for maximum revenue impact.
          </p>
        </div>

        {/* Core Systems Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {[
            {
              icon: Route,
              title: "MQA Routing",
              description: "Real-time lead scoring and intelligent distribution to sales teams",
              metrics: "< 5 min response time, 73% qualification rate",
              color: "blue",
            },
            {
              icon: Signal,
              title: "Signal Architecture",
              description: "Product → GTM signal processing for automated trigger actions",
              metrics: "Real-time processing, 95% signal accuracy",
              color: "green",
            },
            {
              icon: Globe,
              title: "Lead Enrichment",
              description: "Automated firmographic and technographic data enhancement",
              metrics: "94% coverage, 97% accuracy",
              color: "purple",
            },
            {
              icon: Brain,
              title: "MarVis GTM",
              description: "AI-powered context generation and personalized outreach",
              metrics: "+45% response rate, +28% win rate",
              color: "orange",
            },
          ].map((system, index) => (
            <motion.div
              key={system.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl"
            >
              <div className={`w-16 h-16 bg-${system.color}-100 dark:bg-${system.color}-900 rounded-2xl flex items-center justify-center mb-6`}>
                <system.icon className={`w-8 h-8 text-${system.color}-600`} />
              </div>
              <h3 className="text-xl font-bold mb-4">{system.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">{system.description}</p>
              <div className={`bg-${system.color}-50 dark:bg-${system.color}-900/20 p-4 rounded-lg`}>
                <p className={`text-sm font-semibold text-${system.color}-600`}>{system.metrics}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Revenue Impact Dashboard */}
        <div className="bg-gradient-to-r from-primary to-secondary p-12 rounded-3xl text-white">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Revenue Impact & Performance</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Measurable results from implementing comprehensive GTM systems across acquisition, conversion, and expansion
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { metric: "Pipeline Velocity", value: "+67%", description: "Faster deal progression" },
              { metric: "Lead Response Time", value: "< 5 min", description: "Average first response" },
              { metric: "Qualification Rate", value: "73%", description: "MQL to SQL conversion" },
              { metric: "Sales Efficiency", value: "+45%", description: "Revenue per rep" },
            ].map((stat, index) => (
              <div key={stat.metric} className="text-center">
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-lg font-semibold mb-2">{stat.metric}</div>
                <div className="text-sm opacity-80">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* GTM Architecture Flow */}
        <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl">
          <h3 className="text-2xl font-bold mb-8 text-center">GTM System Architecture</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-center">
            {[
              { step: "Signal Capture", icon: Activity, description: "Product events, user behavior, engagement data" },
              { step: "Lead Enrichment", icon: Database, description: "Firmographic, technographic, intent signals" },
              { step: "Intelligent Scoring", icon: Target, description: "PQL → PEQL → MQA progression" },
              { step: "Smart Routing", icon: Route, description: "Territory, skill, capacity-based distribution" },
              { step: "AI-Powered Outreach", icon: Brain, description: "Personalized context and messaging" },
            ].map((step, index) => (
              <div key={step.step} className="text-center relative">
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-bold mb-2">{step.step}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">{step.description}</p>
                {index < 4 && (
                  <div className="hidden md:block absolute -right-3 top-8 w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-xs font-bold">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Integration Ecosystem */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold mb-6">Platform Integrations</h3>
            <div className="space-y-4">
              {[
                { category: "CRM Systems", tools: ["Salesforce", "HubSpot", "Pipedrive", "Microsoft Dynamics"] },
                { category: "Marketing Automation", tools: ["Marketo", "Pardot", "Eloqua", "Mailchimp"] },
                { category: "Data Enrichment", tools: ["Clearbit", "ZoomInfo", "Apollo", "Bombora"] },
                { category: "Analytics & BI", tools: ["Tableau", "Looker", "PowerBI", "Mixpanel"] },
              ].map((integration) => (
                <div key={integration.category} className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold mb-2">{integration.category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {integration.tools.map((tool) => (
                      <span key={tool} className="text-xs bg-gray-100 dark:bg-slate-700 px-2 py-1 rounded">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold mb-6">Implementation Timeline</h3>
            <div className="space-y-6">
              {[
                { phase: "Phase 1", duration: "Weeks 1-2", focus: "System Audit & Planning", status: "Planning" },
                { phase: "Phase 2", duration: "Weeks 3-6", focus: "Integration & Setup", status: "Active" },
                { phase: "Phase 3", duration: "Weeks 7-10", focus: "Testing & Optimization", status: "Pending" },
                { phase: "Phase 4", duration: "Weeks 11-12", focus: "Launch & Training", status: "Pending" },
              ].map((phase) => (
                <div key={phase.phase} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-slate-700 rounded-lg">
                  <div>
                    <h4 className="font-semibold">{phase.phase}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{phase.focus}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium">{phase.duration}</div>
                    <div className={`text-xs px-2 py-1 rounded-full ${
                      phase.status === "Active" ? "bg-green-100 text-green-800" :
                      phase.status === "Planning" ? "bg-blue-100 text-blue-800" :
                      "bg-gray-100 text-gray-800"
                    }`}>
                      {phase.status}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
    "mqa-routing": (
      <div className="space-y-16">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">MQA Routing System</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Real-time Marketing-Qualified Account routing system that scores, prioritizes, and distributes leads 
            to appropriate sales and marketing channels based on firmographic data, engagement signals, and account intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Routing Components */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold">Routing Components</h3>
            
            {[
              {
                icon: Route,
                title: "Real-time Lead Scoring",
                description: "Dynamic scoring algorithm that evaluates leads based on behavior, firmographics, and intent signals",
                features: [
                  "Behavioral scoring (40% weight)",
                  "Firmographic matching (30% weight)",
                  "Intent data integration (20% weight)",
                  "Engagement history (10% weight)",
                ],
                performance: "85% accuracy in qualification prediction",
              },
              {
                icon: Filter,
                title: "Intelligent Routing Rules",
                description: "Sophisticated routing logic that directs leads to the most appropriate sales rep or channel",
                features: [
                  "Geographic territory mapping",
                  "Industry vertical specialization",
                  "Deal size and complexity matching",
                  "Rep capacity and workload balancing",
                ],
                performance: "< 5 minutes average routing time",
              },
              {
                icon: Zap,
                title: "CRM/Marketing Automation",
                description: "Seamless integration with CRM and marketing tools for immediate lead activation",
                features: [
                  "Salesforce opportunity creation",
                  "HubSpot workflow triggers",
                  "Slack/Teams notifications",
                  "Email sequence enrollment",
                ],
                performance: "99.9% integration reliability",
              },
            ].map((component) => (
              <div key={component.title} className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl">
                <div className="flex items-start mb-6">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-xl flex items-center justify-center mr-4">
                    <component.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">{component.title}</h4>
                    <p className="text-gray-600 dark:text-gray-300">{component.description}</p>
                  </div>
                </div>
                
                <div className="space-y-3 mb-6">
                  {component.features.map((feature) => (
                    <div key={feature} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <div className="text-sm font-semibold text-blue-600">{component.performance}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Performance Dashboard */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold">Performance Analytics</h3>
            
            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl">
              <h4 className="text-xl font-bold mb-6">Routing Efficiency Metrics</h4>
              <div className="space-y-6">
                {[
                  { metric: "Lead Response Time", current: "4.2 min", target: "< 5 min", trend: "+18% improvement" },
                  { metric: "Qualification Rate", current: "73%", target: "70%", trend: "+8% YoY" },
                  { metric: "Sales Conversion", current: "34%", target: "30%", trend: "+19% YoY" },
                  { metric: "Rep Utilization", current: "87%", target: "85%", trend: "+12% improvement" },
                ].map((metric) => (
                  <div key={metric.metric} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-slate-700 rounded-lg">
                    <div>
                      <h5 className="font-semibold">{metric.metric}</h5>
                      <div className="text-sm text-gray-600 dark:text-gray-300">Target: {metric.target}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-blue-600">{metric.current}</div>
                      <div className="text-sm text-green-600">{metric.trend}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl">
              <h4 className="text-xl font-bold mb-6">Routing Distribution</h4>
              <div className="space-y-4">
                {[
                  { channel: "Enterprise Sales", percentage: 35, count: "1,250 leads" },
                  { channel: "Mid-Market Sales", percentage: 40, count: "1,430 leads" },
                  { channel: "Inside Sales", percentage: 20, count: "715 leads" },
                  { channel: "Marketing Nurture", percentage: 5, count: "180 leads" },
                ].map((channel) => (
                  <div key={channel.channel} className="relative">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">{channel.channel}</span>
                      <div className="text-right">
                        <div className="font-bold">{channel.percentage}%</div>
                        <div className="text-sm text-gray-500">{channel.count}</div>
                      </div>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-3">
                      <div
                        className="bg-blue-500 h-3 rounded-full transition-all duration-500"
                        style={{ width: `${channel.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Routing Rules Engine */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-700 p-8 rounded-2xl">
          <h3 className="text-2xl font-bold mb-8 text-center">Routing Rules Engine</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                rule: "Geographic Routing",
                description: "Route leads based on territory assignment",
                criteria: ["Company HQ location", "Sales territory mapping", "Time zone considerations"],
              },
              {
                rule: "Vertical Specialization",
                description: "Match leads to industry-specialized reps",
                criteria: ["Industry classification", "Rep expertise areas", "Past performance by vertical"],
              },
              {
                rule: "Deal Size Optimization",
                description: "Route based on expected deal value",
                criteria: ["Company revenue", "Employee count", "Historical deal patterns"],
              },
            ].map((rule) => (
              <div key={rule.rule} className="bg-white dark:bg-slate-800 p-6 rounded-xl">
                <h4 className="font-bold text-blue-600 mb-3">{rule.rule}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{rule.description}</p>
                <ul className="space-y-1">
                  {rule.criteria.map((criterion) => (
                    <li key={criterion} className="text-xs bg-blue-50 dark:bg-slate-700 p-2 rounded flex items-center">
                      <CheckCircle className="w-3 h-3 text-green-500 mr-2" />
                      {criterion}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    "signal-architecture": (
      <div className="space-y-16">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">Signal Architecture (Product → GTM)</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive signal architecture that captures product usage events, user behaviors, and engagement 
            patterns to automatically trigger personalized GTM actions, ensuring the right message reaches the right user at the optimal moment.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Signal Flow Architecture */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold">Signal Processing Pipeline</h3>
            
            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl">
              <h4 className="text-xl font-bold mb-6">Signal Flow</h4>
              <div className="space-y-6">
                {[
                  { 
                    stage: "Product Events",
                    icon: Activity,
                    description: "User actions, feature usage, session data",
                    volume: "10M+ events/day",
                    color: "blue"
                  },
                  { 
                    stage: "Signal Processing",
                    icon: Cpu,
                    description: "Real-time filtering, enrichment, scoring",
                    volume: "95% processed < 1s",
                    color: "green"
                  },
                  { 
                    stage: "Pattern Recognition",
                    icon: Brain,
                    description: "ML-powered behavior analysis",
                    volume: "50+ signal patterns",
                    color: "purple"
                  },
                  { 
                    stage: "GTM Triggers",
                    icon: Zap,
                    description: "Automated marketing/sales actions",
                    volume: "1000+ triggers/day",
                    color: "orange"
                  },
                ].map((stage, index) => (
                  <div key={stage.stage} className="relative">
                    <div className="flex items-center">
                      <div className={`w-12 h-12 bg-${stage.color}-100 dark:bg-${stage.color}-900 rounded-full flex items-center justify-center`}>
                        <stage.icon className={`w-6 h-6 text-${stage.color}-600`} />
                      </div>
                      <div className="ml-4 flex-1">
                        <h5 className="font-semibold">{stage.stage}</h5>
                        <p className="text-sm text-gray-600 dark:text-gray-300">{stage.description}</p>
                        <div className={`text-xs font-medium text-${stage.color}-600 mt-1`}>{stage.volume}</div>
                      </div>
                    </div>
                    {index < 3 && (
                      <div className="flex justify-center mt-4 mb-2">
                        <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-400"></div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Signal Types & Actions */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold">Signal Categories & Triggers</h3>
            
            {[
              {
                category: "Engagement Signals",
                icon: Users,
                signals: [
                  { signal: "Feature Adoption", action: "Feature tip email", frequency: "Daily" },
                  { signal: "High Usage Session", action: "Upsell notification", frequency: "Real-time" },
                  { signal: "Multi-user invite", action: "Team plan offer", frequency: "Immediate" },
                ],
                color: "blue",
              },
              {
                category: "Risk Signals",
                icon: Shield,
                signals: [
                  { signal: "Decreased activity", action: "Re-engagement email", frequency: "Weekly" },
                  { signal: "Error patterns", action: "Support outreach", frequency: "Real-time" },
                  { signal: "Trial ending", action: "Conversion sequence", frequency: "Daily" },
                ],
                color: "red",
              },
              {
                category: "Expansion Signals",
                icon: TrendingUp,
                signals: [
                  { signal: "Usage limits reached", action: "Upgrade prompt", frequency: "Real-time" },
                  { signal: "Team growth", action: "Seat expansion offer", frequency: "Monthly" },
                  { signal: "Advanced features used", action: "Premium pitch", frequency: "Weekly" },
                ],
                color: "green",
              },
            ].map((category) => (
              <div key={category.category} className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-xl">
                <div className="flex items-center mb-6">
                  <div className={`w-10 h-10 bg-${category.color}-100 dark:bg-${category.color}-900 rounded-lg flex items-center justify-center mr-3`}>
                    <category.icon className={`w-5 h-5 text-${category.color}-600`} />
                  </div>
                  <h4 className="text-lg font-bold">{category.category}</h4>
                </div>
                <div className="space-y-3">
                  {category.signals.map((item) => (
                    <div key={item.signal} className="border-l-2 border-gray-200 dark:border-slate-600 pl-4">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-medium text-sm">{item.signal}</span>
                        <span className="text-xs bg-gray-100 dark:bg-slate-700 px-2 py-1 rounded">
                          {item.frequency}
                        </span>
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">{item.action}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Architecture */}
        <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl">
          <h3 className="text-2xl font-bold mb-8">Technical Implementation</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                component: "Event Capture",
                description: "Client-side tracking, API events, webhook ingestion",
                technologies: ["Segment", "Mixpanel", "Custom APIs", "Webhooks"],
              },
              {
                component: "Stream Processing",
                description: "Real-time event processing and transformation",
                technologies: ["Apache Kafka", "AWS Kinesis", "Apache Storm", "Redis"],
              },
              {
                component: "Signal Intelligence",
                description: "ML models for pattern recognition and scoring",
                technologies: ["TensorFlow", "PyTorch", "Scikit-learn", "MLflow"],
              },
              {
                component: "Action Orchestration",
                description: "Workflow automation and campaign triggers",
                technologies: ["Zapier", "Airflow", "Custom APIs", "IFTTT"],
              },
            ].map((component) => (
              <div key={component.component} className="text-center">
                <h4 className="font-bold text-purple-600 mb-3">{component.component}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{component.description}</p>
                <div className="space-y-1">
                  {component.technologies.map((tech) => (
                    <div key={tech} className="text-xs bg-purple-50 dark:bg-slate-700 p-1 rounded">
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Signal Performance Analytics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold mb-6">Signal Performance</h3>
            <div className="space-y-6">
              {[
                { metric: "Signal Processing Latency", value: "< 1 second", improvement: "95% of signals" },
                { metric: "Action Trigger Accuracy", value: "94%", improvement: "+12% this quarter" },
                { metric: "False Positive Rate", value: "< 3%", improvement: "-8% improvement" },
                { metric: "GTM Action Success Rate", value: "87%", improvement: "+15% YoY" },
              ].map((metric) => (
                <div key={metric.metric} className="border-l-4 border-purple-500 pl-4">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold">{metric.metric}</h4>
                    <div className="text-2xl font-bold text-purple-600">{metric.value}</div>
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">{metric.improvement}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold mb-6">Top Performing Signals</h3>
            <div className="space-y-4">
              {[
                { signal: "Trial Extension Request", conversion: "68%", volume: "245/month" },
                { signal: "Team Invite Sent", conversion: "52%", volume: "890/month" },
                { signal: "Advanced Feature Usage", conversion: "34%", volume: "1,240/month" },
                { signal: "Support Ticket Resolution", conversion: "29%", volume: "456/month" },
              ].map((signal) => (
                <div key={signal.signal} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-slate-700 rounded-lg">
                  <div>
                    <h4 className="font-medium">{signal.signal}</h4>
                    <div className="text-sm text-gray-600 dark:text-gray-300">{signal.volume}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-bold text-green-600">{signal.conversion}</div>
                    <div className="text-xs text-gray-500">Conversion Rate</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
    "lead-enrichment": (
      <div className="space-y-16">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">Lead Enrichment & Firmographic Data</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Automated lead enrichment system that augments basic contact information with comprehensive firmographic data, 
            technographic insights, and intent signals to enable precise targeting and personalization.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Enrichment Categories */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold">Data Enrichment Categories</h3>
            
            {[
              {
                icon: Globe,
                title: "Firmographic Enrichment",
                description: "Company size, revenue, industry, location, and growth indicators",
                dataPoints: [
                  "Company name & domain",
                  "Industry classification (SIC/NAICS)",
                  "Employee count & growth rate",
                  "Annual revenue & funding",
                  "Geographic locations",
                  "Company description & keywords",
                ],
                sources: ["Clearbit", "ZoomInfo", "Apollo", "LinkedIn Sales Navigator"],
                coverage: "94%",
                accuracy: "97%",
              },
              {
                icon: Cpu,
                title: "Technographic Intelligence",
                description: "Technology stack analysis and software usage patterns",
                dataPoints: [
                  "CRM & sales tools",
                  "Marketing automation platforms",
                  "Analytics & BI tools",
                  "Infrastructure & hosting",
                  "Security solutions",
                  "Communication tools",
                ],
                sources: ["BuiltWith", "Wappalyzer", "SimilarTech", "Datanyze"],
                coverage: "76%",
                accuracy: "89%",
              },
              {
                icon: Activity,
                title: "Intent Signal Detection",
                description: "Behavioral intent signals and purchase readiness indicators",
                dataPoints: [
                  "Content consumption patterns",
                  "Research behavior tracking",
                  "Competitor evaluation signals",
                  "Product review engagement",
                  "Pricing page visits",
                  "Demo request patterns",
                ],
                sources: ["Bombora", "G2", "TrustRadius", "6sense"],
                coverage: "68%",
                accuracy: "84%",
              },
            ].map((category) => (
              <div key={category.title} className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl">
                <div className="flex items-start mb-6">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-xl flex items-center justify-center mr-4">
                    <category.icon className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">{category.title}</h4>
                    <p className="text-gray-600 dark:text-gray-300">{category.description}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">{category.coverage}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Coverage</div>
                  </div>
                  <div className="text-center p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">{category.accuracy}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Accuracy</div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h5 className="font-medium mb-2">Data Points:</h5>
                    <div className="grid grid-cols-2 gap-1">
                      {category.dataPoints.map((point) => (
                        <div key={point} className="text-xs bg-gray-100 dark:bg-slate-700 p-2 rounded">
                          {point}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h5 className="font-medium mb-2">Data Sources:</h5>
                    <div className="flex flex-wrap gap-2">
                      {category.sources.map((source) => (
                        <span key={source} className="text-xs bg-green-50 dark:bg-slate-700 px-2 py-1 rounded border border-green-200">
                          {source}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Enrichment Performance */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold">Enrichment Performance</h3>
            
            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl">
              <h4 className="text-xl font-bold mb-6">Data Quality Metrics</h4>
              <div className="space-y-6">
                {[
                  {
                    category: "Company Information",
                    fields: ["Name", "Industry", "Size", "Revenue", "Location"],
                    coverage: 94,
                    accuracy: 97,
                    freshness: "< 30 days",
                  },
                  {
                    category: "Contact Details",
                    fields: ["Email", "Phone", "Title", "LinkedIn", "Department"],
                    coverage: 87,
                    accuracy: 93,
                    freshness: "< 7 days",
                  },
                  {
                    category: "Technology Stack",
                    fields: ["CRM", "Marketing Tools", "Analytics", "Infrastructure"],
                    coverage: 76,
                    accuracy: 89,
                    freshness: "< 60 days",
                  },
                ].map((metric) => (
                  <div key={metric.category} className="border-b border-gray-200 dark:border-slate-600 pb-4">
                    <div className="flex justify-between items-center mb-3">
                      <h5 className="font-semibold">{metric.category}</h5>
                      <div className="text-sm text-gray-500">Freshness: {metric.freshness}</div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 mb-3">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Coverage</span>
                          <span>{metric.coverage}%</span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-2">
                          <div className="bg-blue-500 h-2 rounded-full" style={{ width: `${metric.coverage}%` }} />
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Accuracy</span>
                          <span>{metric.accuracy}%</span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-2">
                          <div className="bg-green-500 h-2 rounded-full" style={{ width: `${metric.accuracy}%` }} />
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-1">
                      {metric.fields.map((field) => (
                        <span key={field} className="text-xs bg-gray-100 dark:bg-slate-700 px-2 py-1 rounded">
                          {field}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl">
              <h4 className="text-xl font-bold mb-6">Enrichment Impact</h4>
              <div className="space-y-6">
                {[
                  {
                    metric: "Lead Qualification Speed",
                    improvement: "+67%",
                    description: "Faster lead scoring with enriched data",
                  },
                  {
                    metric: "Personalization Accuracy",
                    improvement: "+54%",
                    description: "Better targeting with firmographic insights",
                  },
                  {
                    metric: "Sales Productivity",
                    improvement: "+43%",
                    description: "Reduced research time per lead",
                  },
                  {
                    metric: "Conversion Rate",
                    improvement: "+29%",
                    description: "Higher conversion with better targeting",
                  },
                ].map((impact) => (
                  <div key={impact.metric} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-slate-700 rounded-lg">
                    <div>
                      <h5 className="font-semibold">{impact.metric}</h5>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{impact.description}</p>
                    </div>
                    <div className="text-2xl font-bold text-green-600">{impact.improvement}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Data Processing Pipeline */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-slate-800 dark:to-slate-700 p-8 rounded-2xl">
          <h3 className="text-2xl font-bold mb-8 text-center">Enrichment Processing Pipeline</h3>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              { step: "Data Ingestion", description: "Lead data capture from forms, APIs, imports" },
              { step: "Source Matching", description: "Cross-reference with multiple data providers" },
              { step: "Data Validation", description: "Quality checks and accuracy verification" },
              { step: "Profile Merging", description: "Combine data from multiple sources" },
              { step: "CRM Integration", description: "Push enriched data to sales systems" },
            ].map((step, index) => (
              <div key={step.step} className="text-center relative">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3 text-white font-bold">
                  {index + 1}
                </div>
                <h4 className="font-semibold mb-2">{step.step}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">{step.description}</p>
                {index < 4 && (
                  <div className="hidden md:block absolute -right-2 top-6 w-4 h-4 bg-green-500 rounded-full flex items-center justify-center text-white text-xs">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    "marvis-gtm": (
      <div className="space-y-16">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">MarVis GTM Applications</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            MarVis AI integration for Go-to-Market operations provides sales and marketing teams with intelligent 
            context generation, automated research, and personalized outreach capabilities that dramatically improve conversion rates and sales efficiency.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* AI Applications */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold">AI-Powered GTM Applications</h3>
            
            {[
              {
                icon: Brain,
                title: "AI-Powered Prospect Research",
                description: "Automated prospect research combining public data, social signals, and company intelligence",
                capabilities: [
                  "Real-time news monitoring and alerts",
                  "Social media sentiment analysis",
                  "Technology stack assessment",
                  "Competitive landscape mapping",
                  "Growth indicators and funding signals",
                  "Leadership change detection",
                ],
                performance: "+67% research efficiency",
              },
              {
                icon: MessageSquare,
                title: "Intelligent Context Generation",
                description: "Real-time context creation for sales conversations and marketing touchpoints",
                capabilities: [
                  "Meeting preparation briefs",
                  "Email personalization suggestions",
                  "Call script recommendations",
                  "Follow-up action proposals",
                  "Objection handling guidance",
                  "Next best action recommendations",
                ],
                performance: "+45% response rates",
              },
              {
                icon: BarChart3,
                title: "Performance Analytics & Optimization",
                description: "AI-driven insights into GTM performance and optimization recommendations",
                capabilities: [
                  "A/B testing automation",
                  "Conversion funnel analysis",
                  "Predictive lead scoring",
                  "Channel performance optimization",
                  "Content effectiveness measurement",
                  "ROI attribution modeling",
                ],
                performance: "+32% conversion improvement",
              },
            ].map((application) => (
              <div key={application.title} className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl">
                <div className="flex items-start mb-6">
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-xl flex items-center justify-center mr-4">
                    <application.icon className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">{application.title}</h4>
                    <p className="text-gray-600 dark:text-gray-300">{application.description}</p>
                  </div>
                </div>
                
                <div className="space-y-2 mb-6">
                  {application.capabilities.map((capability) => (
                    <div key={capability} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                      <span className="text-sm">{capability}</span>
                    </div>
                  ))}
                </div>
                
                <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                  <div className="text-sm font-semibold text-purple-600">{application.performance}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Use Cases & Results */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold">Use Cases & Results</h3>
            
            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl">
              <h4 className="text-xl font-bold mb-6">High-Impact Use Cases</h4>
              <div className="space-y-6">
                {[
                  {
                    useCase: "SDR Context Generation",
                    challenge: "SDRs spending 45 minutes researching each prospect",
                    solution: "AI-generated prospect briefs with recent news, tech stack, and pain points",
                    result: "+45% response rate, 70% time savings",
                    impact: "High",
                  },
                  {
                    useCase: "Personalized Email Sequences",
                    challenge: "Generic email templates with low engagement",
                    solution: "Dynamic email content based on prospect behavior and firmographics",
                    result: "+32% open rate, +28% click-through rate",
                    impact: "High",
                  },
                  {
                    useCase: "Competitive Intelligence",
                    challenge: "Manual competitive research and battlecard creation",
                    solution: "Automated competitive analysis and positioning recommendations",
                    result: "+28% win rate, 50% faster deal cycles",
                    impact: "Medium",
                  },
                  {
                    useCase: "Lead Qualification Scoring",
                    challenge: "Inconsistent lead qualification across sales team",
                    solution: "AI-powered lead scoring with behavioral and firmographic signals",
                    result: "+35% qualified leads, 40% better conversion",
                    impact: "High",
                  },
                ].map((useCase) => (
                  <div key={useCase.useCase} className="border-l-4 border-purple-500 pl-6 py-4">
                    <div className="flex items-center justify-between mb-2">
                      <h5 className="font-bold text-purple-600">{useCase.useCase}</h5>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        useCase.impact === "High" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                      }`}>
                        {useCase.impact} Impact
                      </span>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div>
                        <span className="font-medium text-red-600">Challenge:</span>
                        <span className="text-gray-600 dark:text-gray-300 ml-2">{useCase.challenge}</span>
                      </div>
                      <div>
                        <span className="font-medium text-blue-600">Solution:</span>
                        <span className="text-gray-600 dark:text-gray-300 ml-2">{useCase.solution}</span>
                      </div>
                      <div>
                        <span className="font-medium text-green-600">Result:</span>
                        <span className="font-semibold text-green-700 ml-2">{useCase.result}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl">
              <h4 className="text-xl font-bold mb-6">ROI & Performance Impact</h4>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { metric: "Sales Productivity", value: "+67%", description: "Time saved on research" },
                  { metric: "Response Rates", value: "+45%", description: "Personalized outreach" },
                  { metric: "Conversion Rates", value: "+32%", description: "Better qualification" },
                  { metric: "Deal Velocity", value: "+28%", description: "Faster cycles" },
                  { metric: "Win Rates", value: "+28%", description: "Competitive advantage" },
                  { metric: "ROI", value: "340%", description: "Within 6 months" },
                ].map((metric) => (
                  <div key={metric.metric} className="text-center p-4 bg-gray-50 dark:bg-slate-700 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600 mb-1">{metric.value}</div>
                    <div className="font-medium text-sm mb-1">{metric.metric}</div>
                    <div className="text-xs text-gray-600 dark:text-gray-300">{metric.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* AI Implementation Framework */}
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-slate-800 dark:to-slate-700 p-8 rounded-2xl">
          <h3 className="text-2xl font-bold mb-8 text-center">AI Implementation Framework</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                phase: "Data Integration",
                duration: "Week 1-2",
                activities: [
                  "CRM data mapping",
                  "API integrations",
                  "Data quality assessment",
                  "Security setup",
                ],
              },
              {
                phase: "Model Training",
                duration: "Week 3-4",
                activities: [
                  "Historical data analysis",
                  "Model customization",
                  "Performance validation",
                  "Bias testing",
                ],
              },
              {
                phase: "Pilot Testing",
                duration: "Week 5-6",
                activities: [
                  "Limited user rollout",
                  "A/B testing setup",
                  "Feedback collection",
                  "Iteration cycles",
                ],
              },
              {
                phase: "Full Deployment",
                duration: "Week 7-8",
                activities: [
                  "Team training",
                  "Full system rollout",
                  "Performance monitoring",
                  "Continuous optimization",
                ],
              },
            ].map((phase) => (
              <div key={phase.phase} className="bg-white dark:bg-slate-800 p-6 rounded-xl">
                <h4 className="font-bold text-purple-600 mb-2">{phase.phase}</h4>
                <div className="text-sm text-gray-600 dark:text-gray-300 mb-4">{phase.duration}</div>
                <ul className="space-y-1">
                  {phase.activities.map((activity) => (
                    <li key={activity} className="text-xs bg-purple-50 dark:bg-slate-700 p-2 rounded flex items-center">
                      <CheckCircle className="w-3 h-3 text-green-500 mr-2" />
                      {activity}
                    </li>
                  ))}
                </ul>
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
          <Link href="/#gtm-systems" className="flex items-center text-primary hover:text-primary/80 transition-colors">
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
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your GTM Operations?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Let's build intelligent GTM systems that capture, route, and convert high-intent prospects automatically.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center">
              <Calendar className="w-5 h-5 mr-2" />
              Schedule Consultation
            </Link>
            <Link href="/blog" className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center">
              <Download className="w-5 h-5 mr-2" />
              Download Framework
            </Link>
          </div>
        </motion.section>
      </div>
    </div>
  );
}