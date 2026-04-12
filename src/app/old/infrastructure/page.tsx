"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import Link from "next/link";
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
  ArrowLeft,
  Download,
  Calendar,
  ExternalLink,
  Code,
  Cpu,
  HardDrive,
  Wifi,
  Target,
} from "lucide-react";

export default function InfrastructurePage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [activeTab, setActiveTab] = useState("overview");

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "tech-stack", label: "Tech Stack" },
    { id: "telemetry", label: "Telemetry & Events" },
    { id: "reporting", label: "Reporting Trust" },
    { id: "attribution", label: "Attribution Model" },
    { id: "data-routing", label: "Data Routing" },
  ];

  const tabContent = {
    overview: (
      <div className="space-y-16">
        {/* Hero Section */}
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-black mb-8">
            Infrastructure & Technology Stack
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Enterprise-grade technology infrastructure that powers scalable growth systems, from data collection 
            and processing to analytics and automation, built on modern cloud architecture with enterprise security.
          </p>
        </div>

        {/* Core Infrastructure Components */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {[
            {
              icon: Server,
              title: "Cloud Infrastructure",
              description: "Scalable, reliable cloud architecture",
              technologies: ["AWS/GCP", "Kubernetes", "Docker", "CDN"],
              metrics: "99.9% uptime, auto-scaling",
              color: "blue",
            },
            {
              icon: Database,
              title: "Data Architecture",
              description: "Modern data stack for analytics and insights",
              technologies: ["PostgreSQL", "Redis", "Elasticsearch", "BigQuery"],
              metrics: "Real-time processing, petabyte scale",
              color: "green",
            },
            {
              icon: Shield,
              title: "Security & Compliance",
              description: "Enterprise-grade security and data protection",
              technologies: ["OAuth 2.0", "GDPR", "SOC 2", "Encryption"],
              metrics: "Zero security incidents, full compliance",
              color: "red",
            },
            {
              icon: Monitor,
              title: "Monitoring & Observability",
              description: "Comprehensive system monitoring and alerting",
              technologies: ["DataDog", "Grafana", "Sentry", "PagerDuty"],
              metrics: "Real-time monitoring, 24/7 alerts",
              color: "yellow",
            },
            {
              icon: Network,
              title: "API & Integration",
              description: "Robust APIs and third-party integrations",
              technologies: ["REST APIs", "GraphQL", "Webhooks", "SDK"],
              metrics: "99.95% API availability, <100ms response",
              color: "purple",
            },
            {
              icon: GitBranch,
              title: "DevOps & CI/CD",
              description: "Automated deployment and development workflows",
              technologies: ["GitHub Actions", "Terraform", "Helm", "ArgoCD"],
              metrics: "50+ deployments/day, zero downtime",
              color: "orange",
            },
          ].map((component, index) => (
            <motion.div
              key={component.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl"
            >
              <div className={`w-16 h-16 bg-${component.color}-100 dark:bg-${component.color}-900 rounded-2xl flex items-center justify-center mb-6`}>
                <component.icon className={`w-8 h-8 text-${component.color}-600`} />
              </div>
              <h3 className="text-xl font-bold mb-4">{component.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">{component.description}</p>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {component.technologies.map((tech) => (
                      <span key={tech} className={`text-xs bg-${component.color}-50 dark:bg-slate-700 text-${component.color}-700 dark:text-${component.color}-300 px-2 py-1 rounded`}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className={`bg-${component.color}-50 dark:bg-${component.color}-900/20 p-4 rounded-lg`}>
                  <p className={`text-sm font-semibold text-${component.color}-600`}>{component.metrics}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Architecture Diagram */}
        <div className="bg-gradient-to-r from-primary to-secondary p-12 rounded-3xl text-white">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">System Architecture Overview</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Modern, scalable architecture designed for high-performance growth operations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { layer: "Presentation", components: ["React/Next.js", "TypeScript", "Tailwind CSS"], icon: Globe },
              { layer: "Application", components: ["Node.js APIs", "GraphQL", "Authentication"], icon: Code },
              { layer: "Data", components: ["PostgreSQL", "Redis Cache", "Event Streams"], icon: Database },
              { layer: "Infrastructure", components: ["Kubernetes", "Load Balancers", "CDN"], icon: Server },
            ].map((layer, index) => (
              <div key={layer.layer} className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <layer.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">{layer.layer}</h3>
                <div className="space-y-2">
                  {layer.components.map((component) => (
                    <div key={component} className="text-sm bg-white/10 px-3 py-1 rounded">
                      {component}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold mb-6">Performance Metrics</h3>
            <div className="space-y-6">
              {[
                { metric: "System Uptime", value: "99.9%", trend: "+0.1% this quarter" },
                { metric: "API Response Time", value: "< 100ms", trend: "15ms improvement" },
                { metric: "Data Processing", value: "10M+ events/day", trend: "+45% growth" },
                { metric: "Security Score", value: "A+", trend: "Zero incidents" },
              ].map((metric) => (
                <div key={metric.metric} className="border-l-4 border-primary pl-4">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold">{metric.metric}</h4>
                    <div className="text-2xl font-bold text-primary">{metric.value}</div>
                  </div>
                  <div className="text-sm text-green-600">{metric.trend}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold mb-6">Technology Standards</h3>
            <div className="space-y-4">
              {[
                { standard: "Code Quality", score: "A+", description: "TypeScript, ESLint, Prettier" },
                { standard: "Testing Coverage", score: "94%", description: "Unit, integration, E2E tests" },
                { standard: "Security Compliance", score: "100%", description: "SOC 2, GDPR, OAuth 2.0" },
                { standard: "Documentation", score: "95%", description: "API docs, architecture guides" },
              ].map((standard) => (
                <div key={standard.standard} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-slate-700 rounded-lg">
                  <div>
                    <h4 className="font-medium">{standard.standard}</h4>
                    <div className="text-sm text-gray-600 dark:text-gray-300">{standard.description}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-green-600">{standard.score}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
    "tech-stack": (
      <div className="space-y-16">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">Complete Technology Stack</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive overview of the technologies, frameworks, and tools that power our growth infrastructure 
            and enable scalable, reliable operations across all systems.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Frontend Stack */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold">Frontend & User Experience</h3>
            
            {[
              {
                category: "Framework & Runtime",
                icon: Code,
                technologies: [
                  { name: "Next.js 14", description: "React framework with SSR/SSG" },
                  { name: "React 18", description: "Component-based UI library" },
                  { name: "TypeScript", description: "Type-safe JavaScript" },
                  { name: "Node.js", description: "JavaScript runtime environment" },
                ],
              },
              {
                category: "Styling & UI",
                icon: Layers,
                technologies: [
                  { name: "Tailwind CSS", description: "Utility-first CSS framework" },
                  { name: "Framer Motion", description: "Animation and gesture library" },
                  { name: "Lucide Icons", description: "Modern icon library" },
                  { name: "Headless UI", description: "Accessible UI components" },
                ],
              },
              {
                category: "State & Data",
                icon: Database,
                technologies: [
                  { name: "React Query", description: "Data fetching and caching" },
                  { name: "Zustand", description: "Lightweight state management" },
                  { name: "React Hook Form", description: "Form handling and validation" },
                  { name: "Zod", description: "Schema validation library" },
                ],
              },
            ].map((stack) => (
              <div key={stack.category} className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-xl flex items-center justify-center mr-4">
                    <stack.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h4 className="text-xl font-bold">{stack.category}</h4>
                </div>
                
                <div className="space-y-4">
                  {stack.technologies.map((tech) => (
                    <div key={tech.name} className="border-l-2 border-blue-200 dark:border-blue-800 pl-4">
                      <h5 className="font-semibold text-blue-600">{tech.name}</h5>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{tech.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Backend & Infrastructure Stack */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold">Backend & Infrastructure</h3>
            
            {[
              {
                category: "API & Services",
                icon: Server,
                technologies: [
                  { name: "Next.js API Routes", description: "Serverless API endpoints" },
                  { name: "GraphQL", description: "Query language for APIs" },
                  { name: "tRPC", description: "End-to-end typesafe APIs" },
                  { name: "REST APIs", description: "Traditional HTTP APIs" },
                ],
              },
              {
                category: "Database & Cache",
                icon: HardDrive,
                technologies: [
                  { name: "PostgreSQL", description: "Primary relational database" },
                  { name: "Redis", description: "In-memory data structure store" },
                  { name: "Prisma", description: "Database ORM and query builder" },
                  { name: "BigQuery", description: "Data warehouse and analytics" },
                ],
              },
              {
                category: "Cloud & DevOps",
                icon: Cloud,
                technologies: [
                  { name: "Vercel", description: "Frontend hosting and deployment" },
                  { name: "AWS/GCP", description: "Cloud infrastructure services" },
                  { name: "Docker", description: "Containerization platform" },
                  { name: "GitHub Actions", description: "CI/CD automation" },
                ],
              },
            ].map((stack) => (
              <div key={stack.category} className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-xl flex items-center justify-center mr-4">
                    <stack.icon className="w-6 h-6 text-green-600" />
                  </div>
                  <h4 className="text-xl font-bold">{stack.category}</h4>
                </div>
                
                <div className="space-y-4">
                  {stack.technologies.map((tech) => (
                    <div key={tech.name} className="border-l-2 border-green-200 dark:border-green-800 pl-4">
                      <h5 className="font-semibold text-green-600">{tech.name}</h5>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{tech.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Development Tools */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-700 p-8 rounded-2xl">
          <h3 className="text-2xl font-bold mb-8 text-center">Development & Quality Tools</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                category: "Code Quality",
                tools: ["ESLint", "Prettier", "TypeScript", "Husky", "Lint-staged"],
              },
              {
                category: "Testing",
                tools: ["Jest", "React Testing Library", "Playwright", "Cypress", "Storybook"],
              },
              {
                category: "Monitoring",
                tools: ["Sentry", "DataDog", "Vercel Analytics", "PostHog", "LogRocket"],
              },
            ].map((category) => (
              <div key={category.category} className="bg-white dark:bg-slate-800 p-6 rounded-xl">
                <h4 className="font-bold text-purple-600 mb-4">{category.category}</h4>
                <div className="space-y-2">
                  {category.tools.map((tool) => (
                    <div key={tool} className="text-sm bg-purple-50 dark:bg-slate-700 p-2 rounded flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      {tool}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    telemetry: (
      <div className="space-y-16">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">Telemetry & Event Tracking</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive event tracking and telemetry system that captures user interactions, system performance, 
            and business metrics to provide actionable insights for growth optimization.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Event Collection Framework */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold">Event Collection Framework</h3>
            
            {[
              {
                icon: Activity,
                title: "User Interaction Events",
                description: "Track all user actions and engagement patterns",
                events: [
                  "Page views and navigation",
                  "Button clicks and form submissions",
                  "Feature usage and adoption",
                  "Search queries and filters",
                  "Download and share actions",
                ],
                volume: "2M+ events/day",
              },
              {
                icon: Cpu,
                title: "System Performance Events",
                description: "Monitor application performance and reliability",
                events: [
                  "API response times",
                  "Error rates and exceptions",
                  "Resource utilization",
                  "Database query performance",
                  "Third-party service health",
                ],
                volume: "500K+ metrics/day",
              },
              {
                icon: TrendingUp,
                title: "Business Metric Events",
                description: "Capture key business and growth indicators",
                events: [
                  "Conversion funnel progression",
                  "Revenue and subscription events",
                  "Customer lifecycle milestones",
                  "Support interaction outcomes",
                  "Retention and churn signals",
                ],
                volume: "100K+ events/day",
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
                
                <div className="space-y-3 mb-6">
                  <h5 className="font-medium">Tracked Events:</h5>
                  {framework.events.map((event) => (
                    <div key={event} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                      <span className="text-sm">{event}</span>
                    </div>
                  ))}
                </div>
                
                <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg">
                  <div className="text-sm font-semibold text-orange-600">{framework.volume}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Data Processing Pipeline */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold">Data Processing Pipeline</h3>
            
            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl">
              <h4 className="text-xl font-bold mb-6">Real-time Processing Flow</h4>
              <div className="space-y-6">
                {[
                  {
                    stage: "Collection",
                    description: "Client-side and server-side event capture",
                    technologies: ["Segment", "PostHog", "Custom SDKs"],
                    latency: "< 100ms",
                  },
                  {
                    stage: "Validation",
                    description: "Schema validation and data quality checks",
                    technologies: ["JSON Schema", "Zod", "Custom validators"],
                    latency: "< 50ms",
                  },
                  {
                    stage: "Enrichment",
                    description: "Add context and derived metrics",
                    technologies: ["User context", "Session data", "Geographic info"],
                    latency: "< 200ms",
                  },
                  {
                    stage: "Routing",
                    description: "Distribute to analytics and storage systems",
                    technologies: ["Kafka", "Pub/Sub", "Webhooks"],
                    latency: "< 500ms",
                  },
                ].map((stage, index) => (
                  <div key={stage.stage} className="relative">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold mr-4">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <h5 className="font-semibold">{stage.stage}</h5>
                        <p className="text-sm text-gray-600 dark:text-gray-300">{stage.description}</p>
                        <div className="text-xs text-primary mt-1">{stage.latency} processing time</div>
                      </div>
                    </div>
                    {index < 3 && (
                      <div className="ml-5 mt-2 mb-2 w-0.5 h-4 bg-gray-300 dark:bg-gray-600"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl">
              <h4 className="text-xl font-bold mb-6">Event Schema Standards</h4>
              <div className="space-y-4">
                {[
                  {
                    property: "event_name",
                    type: "string",
                    description: "Standardized event naming (snake_case)",
                    example: "button_clicked, page_viewed",
                  },
                  {
                    property: "user_id",
                    type: "string",
                    description: "Unique user identifier",
                    example: "user_123456789",
                  },
                  {
                    property: "timestamp",
                    type: "ISO 8601",
                    description: "Event occurrence time",
                    example: "2024-01-15T10:30:00Z",
                  },
                  {
                    property: "properties",
                    type: "object",
                    description: "Event-specific metadata",
                    example: "{ page_url, button_text, ... }",
                  },
                ].map((schema) => (
                  <div key={schema.property} className="border-l-2 border-primary pl-4">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-mono text-sm font-bold">{schema.property}</span>
                      <span className="text-xs bg-gray-100 dark:bg-slate-700 px-2 py-1 rounded">{schema.type}</span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">{schema.description}</p>
                    <code className="text-xs text-blue-600 bg-blue-50 dark:bg-blue-900/20 px-2 py-1 rounded">
                      {schema.example}
                    </code>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Analytics Destinations */}
        <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-slate-800 dark:to-slate-700 p-8 rounded-2xl">
          <h3 className="text-2xl font-bold mb-8 text-center">Analytics Destinations</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                destination: "Real-time Dashboard",
                purpose: "Live monitoring and alerts",
                tools: ["Grafana", "DataDog", "Custom dashboards"],
              },
              {
                destination: "Data Warehouse",
                purpose: "Historical analysis and reporting",
                tools: ["BigQuery", "Snowflake", "Redshift"],
              },
              {
                destination: "Product Analytics",
                purpose: "User behavior and funnel analysis",
                tools: ["PostHog", "Mixpanel", "Amplitude"],
              },
              {
                destination: "Business Intelligence",
                purpose: "Strategic insights and KPIs",
                tools: ["Tableau", "Looker", "Custom reports"],
              },
            ].map((dest) => (
              <div key={dest.destination} className="bg-white dark:bg-slate-800 p-6 rounded-xl text-center">
                <h4 className="font-bold text-orange-600 mb-3">{dest.destination}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{dest.purpose}</p>
                <div className="space-y-1">
                  {dest.tools.map((tool) => (
                    <div key={tool} className="text-xs bg-orange-50 dark:bg-slate-700 p-1 rounded">
                      {tool}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    reporting: (
      <div className="space-y-16">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">Reporting Trust & Data Governance</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive data governance framework ensuring accurate, reliable, and trustworthy reporting 
            through validation, quality controls, and transparent data lineage tracking.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Data Quality Framework */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold">Data Quality Framework</h3>
            
            {[
              {
                icon: Shield,
                title: "Data Validation",
                description: "Multi-layer validation ensuring data accuracy and completeness",
                controls: [
                  "Schema validation at ingestion",
                  "Business rule enforcement",
                  "Anomaly detection algorithms",
                  "Manual quality audits",
                ],
                accuracy: "99.7%",
              },
              {
                icon: CheckCircle,
                title: "Quality Monitoring",
                description: "Continuous monitoring of data quality metrics and trends",
                controls: [
                  "Real-time quality dashboards",
                  "Automated alerting systems",
                  "Quality score tracking",
                  "Trend analysis reports",
                ],
                accuracy: "24/7 monitoring",
              },
              {
                icon: GitBranch,
                title: "Data Lineage",
                description: "Complete tracking of data flow from source to destination",
                controls: [
                  "Source system mapping",
                  "Transformation documentation",
                  "Impact analysis tools",
                  "Change tracking logs",
                ],
                accuracy: "100% traceability",
              },
            ].map((framework) => (
              <div key={framework.title} className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl">
                <div className="flex items-start mb-6">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-xl flex items-center justify-center mr-4">
                    <framework.icon className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">{framework.title}</h4>
                    <p className="text-gray-600 dark:text-gray-300">{framework.description}</p>
                  </div>
                </div>
                
                <div className="space-y-3 mb-6">
                  <h5 className="font-medium">Quality Controls:</h5>
                  {framework.controls.map((control) => (
                    <div key={control} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                      <span className="text-sm">{control}</span>
                    </div>
                  ))}
                </div>
                
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                  <div className="text-sm font-semibold text-green-600">{framework.accuracy}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Trust Metrics */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold">Trust & Reliability Metrics</h3>
            
            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl">
              <h4 className="text-xl font-bold mb-6">Data Quality Scorecard</h4>
              <div className="space-y-6">
                {[
                  {
                    metric: "Data Accuracy",
                    score: "99.7%",
                    trend: "+0.3% this quarter",
                    description: "Percentage of data passing validation rules",
                  },
                  {
                    metric: "Data Completeness",
                    score: "98.9%",
                    trend: "+1.2% this quarter",
                    description: "Percentage of expected data received",
                  },
                  {
                    metric: "Data Freshness",
                    score: "99.1%",
                    trend: "Stable",
                    description: "Percentage of data within SLA timing",
                  },
                  {
                    metric: "Data Consistency",
                    score: "99.4%",
                    trend: "+0.8% this quarter",
                    description: "Consistency across different systems",
                  },
                ].map((metric) => (
                  <div key={metric.metric} className="border-l-4 border-green-500 pl-6">
                    <div className="flex items-center justify-between mb-2">
                      <h5 className="font-semibold">{metric.metric}</h5>
                      <div className="text-2xl font-bold text-green-600">{metric.score}</div>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">{metric.description}</p>
                    <div className="text-sm text-blue-600">{metric.trend}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl">
              <h4 className="text-xl font-bold mb-6">Governance Standards</h4>
              <div className="space-y-4">
                {[
                  {
                    standard: "Data Privacy",
                    compliance: "GDPR, CCPA",
                    status: "Fully Compliant",
                    measures: ["Data anonymization", "Consent management", "Right to erasure"],
                  },
                  {
                    standard: "Security",
                    compliance: "SOC 2, ISO 27001",
                    status: "Certified",
                    measures: ["Encryption at rest", "Access controls", "Audit logging"],
                  },
                  {
                    standard: "Data Retention",
                    compliance: "Industry Standards",
                    status: "Implemented",
                    measures: ["Automated deletion", "Retention policies", "Archive systems"],
                  },
                ].map((standard) => (
                  <div key={standard.standard} className="p-4 bg-gray-50 dark:bg-slate-700 rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <h5 className="font-semibold">{standard.standard}</h5>
                      <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded-full">
                        {standard.status}
                      </span>
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                      Compliance: {standard.compliance}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {standard.measures.map((measure) => (
                        <span key={measure} className="text-xs bg-blue-50 dark:bg-slate-600 px-2 py-1 rounded">
                          {measure}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Reporting Standards */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-slate-800 dark:to-slate-700 p-8 rounded-2xl">
          <h3 className="text-2xl font-bold mb-8 text-center">Reporting Standards & SLAs</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                category: "Real-time Reports",
                sla: "< 5 minutes",
                accuracy: "99.5%",
                use_cases: ["Operational dashboards", "Alert systems", "Live monitoring"],
              },
              {
                category: "Daily Reports",
                sla: "Before 9 AM",
                accuracy: "99.8%",
                use_cases: ["Performance summaries", "KPI tracking", "Executive updates"],
              },
              {
                category: "Historical Analysis",
                sla: "24-48 hours",
                accuracy: "99.9%",
                use_cases: ["Trend analysis", "Cohort studies", "Strategic planning"],
              },
            ].map((report) => (
              <div key={report.category} className="bg-white dark:bg-slate-800 p-6 rounded-xl">
                <h4 className="font-bold text-green-600 mb-4">{report.category}</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm">SLA:</span>
                    <span className="font-semibold">{report.sla}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Accuracy:</span>
                    <span className="font-semibold text-green-600">{report.accuracy}</span>
                  </div>
                  <div>
                    <span className="text-sm font-medium">Use Cases:</span>
                    <div className="mt-2 space-y-1">
                      {report.use_cases.map((use_case) => (
                        <div key={use_case} className="text-xs bg-green-50 dark:bg-slate-700 p-2 rounded">
                          {use_case}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    attribution: (
      <div className="space-y-16">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">Multi-Touch Attribution Model</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Sophisticated attribution modeling that accurately tracks customer journeys across multiple touchpoints 
            and channels to provide precise ROI measurement and optimize marketing spend allocation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Attribution Models */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold">Attribution Models</h3>
            
            {[
              {
                icon: Target,
                title: "First-Touch Attribution",
                description: "Credit to the first touchpoint that introduced the prospect",
                weight: "20%",
                use_case: "Brand awareness and top-of-funnel optimization",
                accuracy: "85%",
              },
              {
                icon: Network,
                title: "Multi-Touch Attribution",
                description: "Weighted credit across all touchpoints in the customer journey",
                weight: "60%",
                use_case: "Full journey optimization and channel synergies",
                accuracy: "92%",
              },
              {
                icon: Zap,
                title: "Last-Touch Attribution",
                description: "Credit to the final touchpoint before conversion",
                weight: "20%",
                use_case: "Conversion optimization and closing strategies",
                accuracy: "88%",
              },
            ].map((model) => (
              <div key={model.title} className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl">
                <div className="flex items-start mb-6">
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-xl flex items-center justify-center mr-4">
                    <model.icon className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">{model.title}</h4>
                    <p className="text-gray-600 dark:text-gray-300">{model.description}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">{model.weight}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Model Weight</div>
                  </div>
                  <div className="text-center p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">{model.accuracy}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Accuracy</div>
                  </div>
                </div>
                
                <div className="bg-gray-50 dark:bg-slate-700 p-4 rounded-lg">
                  <h5 className="font-medium mb-2">Primary Use Case:</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{model.use_case}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Attribution Analytics */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold">Attribution Analytics</h3>
            
            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl">
              <h4 className="text-xl font-bold mb-6">Channel Attribution Results</h4>
              <div className="space-y-6">
                {[
                  {
                    channel: "Organic Search",
                    first_touch: "35%",
                    multi_touch: "28%",
                    last_touch: "22%",
                    blended: "29%",
                  },
                  {
                    channel: "Paid Search",
                    first_touch: "15%",
                    multi_touch: "22%",
                    last_touch: "31%",
                    blended: "23%",
                  },
                  {
                    channel: "Content Marketing",
                    first_touch: "25%",
                    multi_touch: "20%",
                    last_touch: "8%",
                    blended: "18%",
                  },
                  {
                    channel: "Social Media",
                    first_touch: "20%",
                    multi_touch: "18%",
                    last_touch: "12%",
                    blended: "17%",
                  },
                  {
                    channel: "Email Marketing",
                    first_touch: "5%",
                    multi_touch: "12%",
                    last_touch: "27%",
                    blended: "13%",
                  },
                ].map((channel) => (
                  <div key={channel.channel} className="border-b border-gray-200 dark:border-slate-600 pb-4">
                    <h5 className="font-semibold mb-3">{channel.channel}</h5>
                    <div className="grid grid-cols-4 gap-2 text-sm">
                      <div className="text-center">
                        <div className="font-bold text-blue-600">{channel.first_touch}</div>
                        <div className="text-xs text-gray-500">First Touch</div>
                      </div>
                      <div className="text-center">
                        <div className="font-bold text-green-600">{channel.multi_touch}</div>
                        <div className="text-xs text-gray-500">Multi Touch</div>
                      </div>
                      <div className="text-center">
                        <div className="font-bold text-orange-600">{channel.last_touch}</div>
                        <div className="text-xs text-gray-500">Last Touch</div>
                      </div>
                      <div className="text-center">
                        <div className="font-bold text-purple-600">{channel.blended}</div>
                        <div className="text-xs text-gray-500">Blended</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl">
              <h4 className="text-xl font-bold mb-6">Journey Analysis</h4>
              <div className="space-y-4">
                {[
                  {
                    metric: "Average Touchpoints",
                    value: "7.3",
                    description: "Number of interactions before conversion",
                  },
                  {
                    metric: "Journey Length",
                    value: "23 days",
                    description: "Average time from first touch to conversion",
                  },
                  {
                    metric: "Cross-Channel Rate",
                    value: "84%",
                    description: "Percentage of journeys using multiple channels",
                  },
                  {
                    metric: "Attribution Accuracy",
                    value: "91%",
                    description: "Model accuracy in predicting conversions",
                  },
                ].map((metric) => (
                  <div key={metric.metric} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-slate-700 rounded-lg">
                    <div>
                      <h5 className="font-medium">{metric.metric}</h5>
                      <div className="text-sm text-gray-600 dark:text-gray-300">{metric.description}</div>
                    </div>
                    <div className="text-2xl font-bold text-purple-600">{metric.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ROI Optimization */}
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-slate-800 dark:to-slate-700 p-8 rounded-2xl">
          <h3 className="text-2xl font-bold mb-8 text-center">ROI Optimization Impact</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                optimization: "Budget Reallocation",
                improvement: "+34%",
                description: "Shifted spend from low-attribution to high-attribution channels",
                impact: "$2.1M additional revenue attributed correctly",
              },
              {
                optimization: "Journey Optimization",
                improvement: "+28%",
                description: "Optimized touchpoint sequences based on attribution data",
                impact: "Reduced average journey length by 6 days",
              },
              {
                optimization: "Cross-Channel Synergy",
                improvement: "+42%",
                description: "Identified and amplified positive channel interactions",
                impact: "Increased multi-channel conversion rate to 84%",
              },
            ].map((opt) => (
              <div key={opt.optimization} className="bg-white dark:bg-slate-800 p-6 rounded-xl text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">{opt.improvement}</div>
                <h4 className="font-bold mb-3">{opt.optimization}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{opt.description}</p>
                <div className="text-xs bg-purple-100 dark:bg-slate-700 p-2 rounded font-semibold text-purple-700 dark:text-purple-300">
                  {opt.impact}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    "data-routing": (
      <div className="space-y-16">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">Data Routing & Distribution</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Intelligent data routing system that efficiently distributes information across multiple destinations, 
            ensuring real-time availability, data consistency, and optimal performance for all downstream systems.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Routing Architecture */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold">Routing Architecture</h3>
            
            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl">
              <h4 className="text-xl font-bold mb-6">Data Flow Pipeline</h4>
              <div className="space-y-6">
                {[
                  {
                    stage: "Ingestion",
                    description: "Multiple data sources feeding into the routing system",
                    throughput: "10M+ events/day",
                    latency: "< 50ms",
                  },
                  {
                    stage: "Processing",
                    description: "Real-time transformation and enrichment",
                    throughput: "10M+ events/day",
                    latency: "< 100ms",
                  },
                  {
                    stage: "Routing",
                    description: "Intelligent distribution to multiple destinations",
                    throughput: "25M+ events/day",
                    latency: "< 200ms",
                  },
                  {
                    stage: "Delivery",
                    description: "Guaranteed delivery to all target systems",
                    throughput: "25M+ events/day",
                    latency: "< 500ms",
                  },
                ].map((stage, index) => (
                  <div key={stage.stage} className="relative">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <h5 className="font-semibold mb-1">{stage.stage}</h5>
                        <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">{stage.description}</p>
                        <div className="grid grid-cols-2 gap-4 text-xs">
                          <div>
                            <span className="text-gray-500">Throughput:</span>
                            <span className="font-semibold ml-1">{stage.throughput}</span>
                          </div>
                          <div>
                            <span className="text-gray-500">Latency:</span>
                            <span className="font-semibold ml-1">{stage.latency}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    {index < 3 && (
                      <div className="ml-6 mt-2 mb-2 w-0.5 h-6 bg-gray-300 dark:bg-gray-600"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl">
              <h4 className="text-xl font-bold mb-6">Routing Rules Engine</h4>
              <div className="space-y-4">
                {[
                  {
                    rule: "Event Type Routing",
                    description: "Route events based on type and schema",
                    example: "User events → Analytics, System events → Monitoring",
                  },
                  {
                    rule: "Conditional Routing",
                    description: "Route based on event properties and conditions",
                    example: "High-value events → Real-time alerts",
                  },
                  {
                    rule: "Load Balancing",
                    description: "Distribute load across multiple destinations",
                    example: "Round-robin to multiple database shards",
                  },
                  {
                    rule: "Fallback Routing",
                    description: "Automatic failover to backup destinations",
                    example: "Primary DB down → Route to secondary",
                  },
                ].map((rule) => (
                  <div key={rule.rule} className="border-l-2 border-blue-500 pl-4">
                    <h5 className="font-semibold text-blue-600 mb-1">{rule.rule}</h5>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">{rule.description}</p>
                    <code className="text-xs bg-blue-50 dark:bg-blue-900/20 p-2 rounded block">
                      {rule.example}
                    </code>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Destination Systems */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold">Destination Systems</h3>
            
            {[
              {
                icon: BarChart3,
                category: "Analytics Platforms",
                description: "Real-time and batch analytics processing",
                destinations: [
                  { name: "Google Analytics", type: "Web Analytics", volume: "2M events/day" },
                  { name: "PostHog", type: "Product Analytics", volume: "5M events/day" },
                  { name: "Mixpanel", type: "User Analytics", volume: "3M events/day" },
                ],
              },
              {
                icon: Database,
                category: "Data Storage",
                description: "Persistent storage for historical analysis",
                destinations: [
                  { name: "PostgreSQL", type: "Operational DB", volume: "1M records/day" },
                  { name: "BigQuery", type: "Data Warehouse", volume: "10M events/day" },
                  { name: "S3", type: "Object Storage", volume: "50GB/day" },
                ],
              },
              {
                icon: Monitor,
                category: "Monitoring Systems",
                description: "System health and performance monitoring",
                destinations: [
                  { name: "DataDog", type: "Infrastructure", volume: "500K metrics/day" },
                  { name: "Sentry", type: "Error Tracking", volume: "10K errors/day" },
                  { name: "PagerDuty", type: "Alerting", volume: "100 alerts/day" },
                ],
              },
            ].map((system) => (
              <div key={system.category} className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-xl flex items-center justify-center mr-4">
                    <system.icon className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold">{system.category}</h4>
                    <p className="text-gray-600 dark:text-gray-300">{system.description}</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  {system.destinations.map((dest) => (
                    <div key={dest.name} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-slate-700 rounded-lg">
                      <div>
                        <h5 className="font-medium">{dest.name}</h5>
                        <div className="text-sm text-gray-600 dark:text-gray-300">{dest.type}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-semibold text-green-600">{dest.volume}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Performance & Reliability */}
        <div className="bg-gradient-to-r from-blue-50 to-green-50 dark:from-slate-800 dark:to-slate-700 p-8 rounded-2xl">
          <h3 className="text-2xl font-bold mb-8 text-center">Performance & Reliability</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                metric: "Throughput",
                value: "25M+ events/day",
                description: "Peak processing capacity with auto-scaling",
              },
              {
                metric: "Availability",
                value: "99.9%",
                description: "System uptime with automatic failover",
              },
              {
                metric: "Latency",
                value: "< 200ms",
                description: "End-to-end processing latency",
              },
              {
                metric: "Data Loss",
                value: "< 0.01%",
                description: "Guaranteed delivery with retry mechanisms",
              },
            ].map((perf) => (
              <div key={perf.metric} className="bg-white dark:bg-slate-800 p-6 rounded-xl text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">{perf.value}</div>
                <h4 className="font-bold mb-2">{perf.metric}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">{perf.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Monitoring Dashboard */}
        <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl">
          <h3 className="text-2xl font-bold mb-8">Real-time Monitoring Dashboard</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                dashboard: "System Health",
                metrics: ["CPU usage", "Memory consumption", "Network I/O", "Error rates"],
                alerts: 3,
                status: "Healthy",
              },
              {
                dashboard: "Data Flow",
                metrics: ["Events/second", "Processing latency", "Queue depth", "Throughput"],
                alerts: 0,
                status: "Optimal",
              },
              {
                dashboard: "Destinations",
                metrics: ["Delivery success", "Retry attempts", "Destination health", "SLA compliance"],
                alerts: 1,
                status: "Warning",
              },
            ].map((dash) => (
              <div key={dash.dashboard} className="border rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-bold">{dash.dashboard}</h4>
                  <span className={`text-sm px-2 py-1 rounded-full ${
                    dash.status === "Healthy" ? "bg-green-100 text-green-800" :
                    dash.status === "Optimal" ? "bg-blue-100 text-blue-800" :
                    "bg-yellow-100 text-yellow-800"
                  }`}>
                    {dash.status}
                  </span>
                </div>
                <div className="space-y-2 mb-4">
                  {dash.metrics.map((metric) => (
                    <div key={metric} className="text-sm bg-gray-50 dark:bg-slate-700 p-2 rounded">
                      {metric}
                    </div>
                  ))}
                </div>
                <div className="flex items-center text-sm">
                  <AlertTriangle className="w-4 h-4 text-yellow-500 mr-2" />
                  <span>{dash.alerts} active alerts</span>
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
          <Link href="/#infrastructure" className="flex items-center text-primary hover:text-primary/80 transition-colors">
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
          <h2 className="text-4xl font-bold mb-6">Ready to Build Scalable Infrastructure?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Let's architect enterprise-grade infrastructure that scales with your growth and ensures reliable operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center">
              <Calendar className="w-5 h-5 mr-2" />
              Schedule Consultation
            </Link>
            <Link href="/blog" className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center">
              <Download className="w-5 h-5 mr-2" />
              Download Architecture Guide
            </Link>
          </div>
        </motion.section>
      </div>
    </div>
  );
}