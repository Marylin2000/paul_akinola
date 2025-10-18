"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Server,
  Database,
  Cloud,
  Monitor,
  GitBranch,
  Layers,
  Shield,
  Zap,
  BarChart3,
  Network,
  Settings,
  CheckCircle,
  AlertTriangle,
  Clock,
  TrendingUp,
  Activity,
  Globe,
} from "lucide-react";

export default function Infrastructure() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [activeTab, setActiveTab] = useState("tech-stack");

  const tabs = [
    { id: "tech-stack", label: "Tech Stack" },
    { id: "telemetry", label: "Telemetry & Events" },
    { id: "reporting", label: "Reporting Trust" },
    { id: "attribution", label: "Attribution Model" },
    { id: "data-routing", label: "Data Routing" },
  ];

  const tabContent = {
    "tech-stack": (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h3 className="text-3xl font-bold mb-6">Full Tech Stack Overview</h3>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            Comprehensive technology architecture that powers scalable growth
            systems, from data collection and processing to analytics and
            automation, built on modern cloud infrastructure with enterprise-grade
            security and reliability.
          </p>
          <div className="space-y-6">
            {[
              {
                category: "Data Layer",
                icon: Database,
                technologies: ["BigQuery", "Snowflake", "PostgreSQL", "Redis"],
                description: "Scalable data warehousing and real-time caching solutions",
                color: "blue",
              },
              {
                category: "Processing & Analytics",
                icon: BarChart3,
                technologies: ["Apache Airflow", "dbt", "Python", "R"],
                description: "ETL/ELT pipelines and advanced analytics processing",
                color: "green",
              },
              {
                category: "Infrastructure",
                icon: Cloud,
                technologies: ["AWS", "Kubernetes", "Docker", "Terraform"],
                description: "Cloud-native infrastructure with auto-scaling capabilities",
                color: "purple",
              },
              {
                category: "Monitoring & Observability",
                icon: Monitor,
                technologies: ["Datadog", "Grafana", "PagerDuty", "Sentry"],
                description: "Full-stack monitoring and incident response systems",
                color: "orange",
              },
            ].map((stack) => (
              <div
                key={stack.category}
                className={`bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg border-l-4 border-${stack.color}-500`}
              >
                <h4 className="font-bold mb-3 flex items-center">
                  <stack.icon className={`text-${stack.color}-500 mr-3`} />
                  {stack.category}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                  {stack.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {stack.technologies.map((tech) => (
                    <span key={tech} className={`text-xs bg-${stack.color}-50 dark:bg-slate-700 text-${stack.color}-700 dark:text-${stack.color}-300 px-3 py-1 rounded-full`}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl">
          <h4 className="text-xl font-bold mb-6">Infrastructure Performance</h4>
          <div className="space-y-6">
            {[
              {
                metric: "System Uptime",
                value: "99.97%",
                status: "excellent",
                change: "+0.02% YoY",
                icon: CheckCircle,
              },
              {
                metric: "Query Response Time",
                value: "< 200ms",
                status: "good",
                change: "-15% YoY",
                icon: Zap,
              },
              {
                metric: "Data Processing Volume",
                value: "2.1TB/day",
                status: "excellent",
                change: "+145% YoY",
                icon: TrendingUp,
              },
              {
                metric: "Pipeline Success Rate",
                value: "99.8%",
                status: "excellent",
                change: "+2.1% YoY",
                icon: Settings,
              },
            ].map((metric) => (
              <div
                key={metric.metric}
                className="flex items-center justify-between p-4 bg-gray-50 dark:bg-slate-700 rounded-xl"
              >
                <div className="flex items-center">
                  <metric.icon className={`w-5 h-5 mr-3 ${
                    metric.status === 'excellent' ? 'text-green-500' : 
                    metric.status === 'good' ? 'text-yellow-500' : 'text-red-500'
                  }`} />
                  <div>
                    <div className="font-semibold">{metric.metric}</div>
                    <div className="text-sm text-gray-500">{metric.change}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-lg">{metric.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    "telemetry": (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl">
          <h4 className="text-xl font-bold mb-6">Event Contract Structure</h4>
          <div className="space-y-6">
            {[
              {
                eventType: "User Interaction",
                volume: "1.2M/day",
                properties: ["user_id", "action_type", "feature_name", "timestamp", "session_id"],
                reliability: "99.9%",
              },
              {
                eventType: "Product Usage",
                volume: "850K/day",
                properties: ["account_id", "feature_used", "duration", "success_rate"],
                reliability: "99.7%",
              },
              {
                eventType: "Revenue Events",
                volume: "45K/day",
                properties: ["transaction_id", "amount", "plan_type", "customer_tier"],
                reliability: "100%",
              },
            ].map((event) => (
              <div
                key={event.eventType}
                className="border-b border-gray-200 dark:border-slate-700 pb-6"
              >
                <div className="flex justify-between items-center mb-3">
                  <h5 className="font-bold">{event.eventType}</h5>
                  <div className="text-sm text-gray-500">
                    {event.volume} • {event.reliability} reliable
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {event.properties.map((prop) => (
                    <span key={prop} className="text-xs bg-blue-50 dark:bg-slate-700 px-2 py-1 rounded">
                      {prop}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-3xl font-bold mb-6">Telemetry Schema & Event Contracts</h3>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            Standardized event tracking schema with strict contracts that ensure
            data consistency, reliability, and accuracy across all touchpoints,
            enabling precise analytics and automated decision-making throughout
            the customer journey.
          </p>
          <div className="space-y-6">
            {[
              {
                icon: Layers,
                title: "Event Schema Standards",
                description:
                  "Consistent data structures with validation rules and type safety",
                features: ["JSON Schema validation", "Required field enforcement", "Data type consistency"],
              },
              {
                icon: Shield,
                title: "Quality Assurance",
                description:
                  "Automated testing and monitoring to ensure data integrity",
                features: ["Real-time validation", "Anomaly detection", "Data lineage tracking"],
              },
              {
                icon: Network,
                title: "Event Orchestration",
                description:
                  "Intelligent routing and processing of events across systems",
                features: ["Priority queuing", "Retry mechanisms", "Dead letter handling"],
              },
            ].map((item) => (
              <div key={item.title} className="flex items-start">
                <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center mr-4 mt-1">
                  <item.icon className="text-white text-sm" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">{item.title}</h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-3 text-sm">
                    {item.description}
                  </p>
                  <div className="space-y-1">
                    {item.features.map((feature) => (
                      <div key={feature} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                        <span className="text-gray-600 dark:text-gray-300">{feature}</span>
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
    "reporting": (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h3 className="text-3xl font-bold mb-6">Reporting Trust & Dashboard Health</h3>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            Comprehensive data quality framework that ensures reporting accuracy,
            dashboard reliability, and stakeholder confidence through automated
            testing, data validation, and transparent health monitoring across all
            business intelligence systems.
          </p>
          <div className="space-y-6">
            {[
              {
                aspect: "Data Freshness",
                icon: Clock,
                description: "Real-time monitoring of data latency and pipeline health",
                metrics: ["SLA: < 15 min", "Current: 8 min avg", "Uptime: 99.8%"],
                status: "healthy",
              },
              {
                aspect: "Accuracy Testing",
                icon: CheckCircle,
                description: "Automated validation of calculations and business logic",
                metrics: ["Daily tests: 247", "Pass rate: 99.6%", "Coverage: 95%"],
                status: "healthy",
              },
              {
                aspect: "Anomaly Detection",
                icon: AlertTriangle,
                description: "Intelligent monitoring for data quality issues and outliers",
                metrics: ["Alerts: 3/week", "False positive: 5%", "MTTR: 12 min"],
                status: "warning",
              },
            ].map((aspect) => (
              <div
                key={aspect.aspect}
                className={`bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg border-l-4 ${
                  aspect.status === 'healthy' ? 'border-green-500' : 
                  aspect.status === 'warning' ? 'border-yellow-500' : 'border-red-500'
                }`}
              >
                <h4 className="font-bold mb-3 flex items-center">
                  <aspect.icon className={`mr-3 ${
                    aspect.status === 'healthy' ? 'text-green-500' : 
                    aspect.status === 'warning' ? 'text-yellow-500' : 'text-red-500'
                  }`} />
                  {aspect.aspect}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                  {aspect.description}
                </p>
                <div className="grid grid-cols-3 gap-2 text-xs">
                  {aspect.metrics.map((metric) => (
                    <div key={metric} className="bg-gray-50 dark:bg-slate-700 px-2 py-1 rounded">
                      {metric}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl">
          <h4 className="text-xl font-bold mb-6">Dashboard Health Scores</h4>
          <div className="space-y-6">
            {[
              {
                dashboard: "Executive KPI Dashboard",
                health: 98,
                users: 45,
                lastUpdated: "2 min ago",
                issues: 0,
              },
              {
                dashboard: "Growth Metrics Dashboard",
                health: 95,
                users: 23,
                lastUpdated: "5 min ago",
                issues: 1,
              },
              {
                dashboard: "Sales Performance Dashboard",
                health: 92,
                users: 67,
                lastUpdated: "8 min ago",
                issues: 2,
              },
              {
                dashboard: "Customer Success Dashboard",
                health: 89,
                users: 34,
                lastUpdated: "12 min ago",
                issues: 3,
              },
            ].map((dashboard) => (
              <div
                key={dashboard.dashboard}
                className="border-b border-gray-200 dark:border-slate-700 pb-6"
              >
                <div className="flex justify-between items-center mb-3">
                  <h5 className="font-semibold">{dashboard.dashboard}</h5>
                  <div className={`text-2xl font-bold ${
                    dashboard.health >= 95 ? 'text-green-600' :
                    dashboard.health >= 90 ? 'text-yellow-600' : 'text-red-600'
                  }`}>
                    {dashboard.health}%
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4 text-sm text-gray-500">
                  <div>
                    <div>Users</div>
                    <div className="font-semibold">{dashboard.users}</div>
                  </div>
                  <div>
                    <div>Last Updated</div>
                    <div className="font-semibold">{dashboard.lastUpdated}</div>
                  </div>
                  <div>
                    <div>Issues</div>
                    <div className={`font-semibold ${dashboard.issues === 0 ? 'text-green-600' : 'text-red-600'}`}>
                      {dashboard.issues}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    "attribution": (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl">
          <h4 className="text-xl font-bold mb-6">Attribution Model Comparison</h4>
          <div className="space-y-6">
            {[
              {
                model: "Last Touch Attribution (LTA)",
                period: "Legacy Model",
                accuracy: "68%",
                coverage: "100%",
                bias: "High recency bias",
                status: "deprecated",
              },
              {
                model: "Multi-Touch Attribution (MTA)",
                period: "Current Model",
                accuracy: "89%",
                coverage: "94%",
                bias: "Balanced attribution",
                status: "active",
              },
              {
                model: "AI-Powered Attribution",
                period: "Next Generation",
                accuracy: "94%",
                coverage: "97%",
                bias: "ML-optimized weighting",
                status: "pilot",
              },
            ].map((model) => (
              <div
                key={model.model}
                className={`border-l-4 pl-6 py-4 ${
                  model.status === 'active' ? 'border-green-500 bg-green-50 dark:bg-slate-700' :
                  model.status === 'pilot' ? 'border-blue-500 bg-blue-50 dark:bg-slate-700' :
                  'border-gray-400 bg-gray-50 dark:bg-slate-700'
                }`}
              >
                <div className="flex justify-between items-center mb-2">
                  <h5 className="font-bold">{model.model}</h5>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    model.status === 'active' ? 'bg-green-100 text-green-700' :
                    model.status === 'pilot' ? 'bg-blue-100 text-blue-700' :
                    'bg-gray-100 text-gray-700'
                  }`}>
                    {model.status}
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <div className="text-gray-500">Accuracy</div>
                    <div className="font-semibold">{model.accuracy}</div>
                  </div>
                  <div>
                    <div className="text-gray-500">Coverage</div>
                    <div className="font-semibold">{model.coverage}</div>
                  </div>
                  <div>
                    <div className="text-gray-500">Bias Profile</div>
                    <div className="font-semibold text-xs">{model.bias}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-3xl font-bold mb-6">Attribution Model Evolution</h3>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            Progressive enhancement of attribution modeling from simple last-touch
            attribution (LTA) to sophisticated multi-touch attribution (MTA)
            systems that provide accurate, unbiased insights into customer journey
            touchpoints and channel effectiveness.
          </p>
          <div className="space-y-6">
            {[
              {
                icon: GitBranch,
                title: "Journey Mapping",
                description:
                  "Complete customer journey visualization with touchpoint attribution",
                improvements: ["Cross-device tracking", "Offline attribution", "Account-level journeys"],
              },
              {
                icon: BarChart3,
                title: "Channel Performance",
                description:
                  "Accurate measurement of channel contribution and ROI optimization",
                improvements: ["True incremental lift", "Budget allocation", "Channel synergies"],
              },
              {
                icon: Activity,
                title: "Real-time Attribution",
                description:
                  "Live attribution updates enabling immediate optimization decisions",
                improvements: ["Instant feedback loops", "Dynamic modeling", "Automated adjustments"],
              },
            ].map((item) => (
              <div key={item.title} className="flex items-start">
                <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center mr-4 mt-1">
                  <item.icon className="text-white text-sm" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">{item.title}</h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-3 text-sm">
                    {item.description}
                  </p>
                  <div className="space-y-1">
                    {item.improvements.map((improvement) => (
                      <div key={improvement} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                        <span className="text-gray-600 dark:text-gray-300">{improvement}</span>
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
    "data-routing": (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h3 className="text-3xl font-bold mb-6">Data Routing: Segment → BQ → Tools</h3>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            Sophisticated data routing architecture that orchestrates the flow of
            customer data from Segment through BigQuery to downstream tools,
            ensuring data consistency, real-time availability, and seamless
            integration across the entire marketing and sales technology stack.
          </p>
          <div className="space-y-6">
            {[
              {
                stage: "Data Collection",
                icon: Globe,
                description: "Unified customer data collection via Segment CDP",
                details: ["Multi-source ingestion", "Real-time streaming", "Data validation"],
                latency: "< 1 sec",
              },
              {
                stage: "Data Warehousing",
                icon: Database,
                description: "Centralized storage and processing in BigQuery",
                details: ["Schema enforcement", "Data transformations", "Historical storage"],
                latency: "< 5 min",
              },
              {
                stage: "Tool Activation",
                icon: Zap,
                description: "Real-time data activation across marketing tools",
                details: ["API integrations", "Webhook delivery", "Batch processing"],
                latency: "< 15 min",
              },
            ].map((stage) => (
              <div
                key={stage.stage}
                className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg border-l-4 border-blue-500"
              >
                <h4 className="font-bold mb-3 flex items-center justify-between">
                  <div className="flex items-center">
                    <stage.icon className="text-blue-500 mr-3" />
                    {stage.stage}
                  </div>
                  <span className="text-sm text-blue-600 font-normal">{stage.latency}</span>
                </h4>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                  {stage.description}
                </p>
                <div className="space-y-2">
                  {stage.details.map((detail) => (
                    <div key={detail} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      <span className="text-gray-600 dark:text-gray-300">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl">
          <h4 className="text-xl font-bold mb-6">Data Flow Performance</h4>
          <div className="space-y-6">
            {[
              {
                destination: "Salesforce CRM",
                volume: "125K records/day",
                latency: "8 min avg",
                success: "99.8%",
                status: "healthy",
              },
              {
                destination: "HubSpot Marketing",
                volume: "89K records/day",
                latency: "12 min avg",
                success: "99.4%",
                status: "healthy",
              },
              {
                destination: "Marketo Automation",
                volume: "67K records/day",
                latency: "15 min avg",
                success: "98.9%",
                status: "warning",
              },
              {
                destination: "Mixpanel Analytics",
                volume: "234K events/day",
                latency: "3 min avg",
                success: "99.9%",
                status: "healthy",
              },
              {
                destination: "Intercom Support",
                volume: "45K records/day",
                latency: "6 min avg",
                success: "99.7%",
                status: "healthy",
              },
            ].map((dest) => (
              <div
                key={dest.destination}
                className="border-b border-gray-200 dark:border-slate-700 pb-6"
              >
                <div className="flex justify-between items-center mb-3">
                  <h5 className="font-semibold">{dest.destination}</h5>
                  <div className={`w-3 h-3 rounded-full ${
                    dest.status === 'healthy' ? 'bg-green-500' : 'bg-yellow-500'
                  }`}></div>
                </div>
                <div className="grid grid-cols-3 gap-4 text-sm text-gray-500">
                  <div>
                    <div>Volume</div>
                    <div className="font-semibold text-xs">{dest.volume}</div>
                  </div>
                  <div>
                    <div>Latency</div>
                    <div className="font-semibold">{dest.latency}</div>
                  </div>
                  <div>
                    <div>Success Rate</div>
                    <div className={`font-semibold ${
                      parseFloat(dest.success) >= 99.5 ? 'text-green-600' : 'text-yellow-600'
                    }`}>
                      {dest.success}
                    </div>
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
    <section
      id="infrastructure"
      className="py-20 bg-gradient-to-br from-gray-50 to-slate-100 dark:from-slate-900 dark:to-slate-800"
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
            Infrastructure & Reporting
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Enterprise-grade data infrastructure powering reliable analytics,
            real-time insights, and scalable growth operations
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