"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import Link from "next/link";
import {
  Brain,
  Cpu,
  Target,
  Wand2,
  Clock,
  TrendingUp,
  Save,
  CheckCircle,
  Sparkles,
  Zap,
  Lightbulb,
  Code,
  Network,
  ArrowLeft,
  Download,
  Calendar,
  ExternalLink,
  Settings,
  BarChart3,
  MessageSquare,
  Database,
  Shield,
  Users,
} from "lucide-react";

export default function AppliedAIPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [activeTab, setActiveTab] = useState("overview");

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "gpt-integration", label: "GPT Integration" },
    { id: "automation", label: "Process Automation" },
    { id: "insights", label: "AI-Powered Insights" },
    { id: "optimization", label: "Performance Optimization" },
  ];

  const tabContent = {
    overview: (
      <div className="space-y-16">
        {/* Hero Section */}
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-black mb-8">
            Applied AI & Automation
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Harness the power of artificial intelligence to automate processes, generate insights, and optimize 
            operations with cutting-edge AI technologies integrated seamlessly into your growth infrastructure.
          </p>
        </div>

        {/* AI Capabilities */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {[
            {
              icon: Brain,
              title: "GPT Integration",
              description: "Advanced language models for content generation and analysis",
              capabilities: ["Content creation", "Data analysis", "Customer insights"],
              metrics: "90% accuracy, 75% time savings",
              color: "blue",
            },
            {
              icon: Zap,
              title: "Process Automation",
              description: "Intelligent automation of repetitive tasks and workflows",
              capabilities: ["Workflow automation", "Task scheduling", "Decision trees"],
              metrics: "80% process efficiency gain",
              color: "green",
            },
            {
              icon: Target,
              title: "AI-Powered Insights",
              description: "Machine learning insights for data-driven decision making",
              capabilities: ["Predictive analytics", "Pattern recognition", "Trend analysis"],
              metrics: "85% prediction accuracy",
              color: "purple",
            },
            {
              icon: TrendingUp,
              title: "Performance Optimization",
              description: "AI-driven optimization of systems and processes",
              capabilities: ["Resource optimization", "Performance tuning", "Cost reduction"],
              metrics: "40% efficiency improvement",
              color: "orange",
            },
          ].map((capability, index) => (
            <motion.div
              key={capability.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl"
            >
              <div className={`w-16 h-16 bg-${capability.color}-100 dark:bg-${capability.color}-900 rounded-2xl flex items-center justify-center mb-6`}>
                <capability.icon className={`w-8 h-8 text-${capability.color}-600`} />
              </div>
              <h3 className="text-xl font-bold mb-4">{capability.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">{capability.description}</p>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Key Capabilities:</h4>
                  <div className="space-y-1">
                    {capability.capabilities.map((cap) => (
                      <div key={cap} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                        <span className="text-sm">{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className={`bg-${capability.color}-50 dark:bg-${capability.color}-900/20 p-4 rounded-lg`}>
                  <p className={`text-sm font-semibold text-${capability.color}-600`}>{capability.metrics}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* AI Implementation Framework */}
        <div className="bg-gradient-to-r from-primary to-secondary p-12 rounded-3xl text-white">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">AI Implementation Framework</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Systematic approach to integrating AI technologies into your existing workflows and systems
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { phase: "Assess", focus: "Current processes, data readiness", icon: BarChart3 },
              { phase: "Design", focus: "AI strategy, technology selection", icon: Lightbulb },
              { phase: "Implement", focus: "Integration, training, testing", icon: Code },
              { phase: "Optimize", focus: "Performance tuning, scaling", icon: TrendingUp },
            ].map((step, index) => (
              <div key={step.phase} className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{step.phase}</h3>
                <p className="text-sm opacity-80">{step.focus}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ROI & Performance */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold mb-6">AI Implementation ROI</h3>
            <div className="space-y-6">
              {[
                { metric: "Process Automation", impact: "80% efficiency gain", savings: "$1.2M annually" },
                { metric: "Content Generation", impact: "75% time savings", savings: "500 hours/month" },
                { metric: "Data Analysis", impact: "90% accuracy improvement", savings: "85% faster insights" },
                { metric: "Customer Support", impact: "60% response time reduction", savings: "40% cost reduction" },
              ].map((metric) => (
                <div key={metric.metric} className="border-l-4 border-primary pl-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold">{metric.metric}</h4>
                    <div className="text-lg font-bold text-primary">{metric.impact}</div>
                  </div>
                  <div className="text-sm text-green-600">{metric.savings}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold mb-6">AI Technology Stack</h3>
            <div className="space-y-4">
              {[
                { category: "Language Models", tools: ["GPT-4", "Claude", "Custom LLMs"] },
                { category: "Machine Learning", tools: ["TensorFlow", "PyTorch", "Scikit-learn"] },
                { category: "Data Processing", tools: ["Pandas", "Apache Spark", "Dask"] },
                { category: "Automation", tools: ["Zapier", "n8n", "Custom workflows"] },
              ].map((stack) => (
                <div key={stack.category} className="border-l-2 border-blue-500 pl-4">
                  <h4 className="font-semibold text-blue-600 mb-2">{stack.category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {stack.tools.map((tool) => (
                      <span key={tool} className="text-xs bg-blue-50 dark:bg-slate-700 px-2 py-1 rounded">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Use Cases */}
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-700 p-8 rounded-2xl">
          <h3 className="text-2xl font-bold mb-8 text-center">Real-World AI Use Cases</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Automated Content Generation",
                description: "AI-powered creation of marketing copy, blog posts, and product descriptions",
                impact: "75% faster content production, 90% consistency",
                example: "Generated 500+ blog posts with 95% approval rate",
              },
              {
                title: "Intelligent Customer Support",
                description: "AI chatbots and automated response systems for customer inquiries",
                impact: "60% faster response time, 24/7 availability",
                example: "Resolved 80% of customer queries without human intervention",
              },
              {
                title: "Predictive Analytics",
                description: "Machine learning models for forecasting and trend analysis",
                impact: "85% prediction accuracy, 40% better planning",
                example: "Predicted customer churn with 87% accuracy",
              },
              {
                title: "Process Optimization",
                description: "AI-driven optimization of workflows and resource allocation",
                impact: "40% efficiency improvement, 30% cost reduction",
                example: "Optimized delivery routes saving $200K annually",
              },
            ].map((useCase) => (
              <div key={useCase.title} className="bg-white dark:bg-slate-800 p-6 rounded-xl">
                <h4 className="font-bold text-purple-600 mb-3">{useCase.title}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{useCase.description}</p>
                <div className="space-y-2">
                  <div className="text-sm">
                    <span className="font-medium text-green-600">Impact:</span>
                    <span className="ml-2">{useCase.impact}</span>
                  </div>
                  <div className="text-xs bg-purple-50 dark:bg-slate-700 p-2 rounded italic">
                    "{useCase.example}"
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    "gpt-integration": (
      <div className="space-y-16">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">GPT Integration & Language Models</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Seamless integration of advanced language models like GPT-4 to enhance content creation, 
            data analysis, and customer interactions with state-of-the-art natural language processing.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Integration Architecture */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold">Integration Architecture</h3>
            
            {[
              {
                icon: Brain,
                title: "Model Selection & Configuration",
                description: "Choose and configure the optimal language model for specific use cases",
                features: [
                  "GPT-4 for complex reasoning tasks",
                  "GPT-3.5-turbo for fast responses",
                  "Custom fine-tuned models",
                  "Multi-model comparison",
                ],
                performance: "90% task completion accuracy",
              },
              {
                icon: Code,
                title: "API Integration Framework",
                description: "Robust integration layer for seamless communication with language models",
                features: [
                  "Rate limiting and quota management",
                  "Error handling and retries",
                  "Response caching",
                  "Authentication management",
                ],
                performance: "99.9% API reliability",
              },
              {
                icon: Shield,
                title: "Security & Compliance",
                description: "Enterprise-grade security for sensitive data and model interactions",
                features: [
                  "Data encryption in transit",
                  "PII detection and filtering",
                  "Audit logging",
                  "Compliance monitoring",
                ],
                performance: "Zero security incidents",
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
                  <h5 className="font-medium">Key Features:</h5>
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

          {/* Use Case Applications */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold">GPT Use Case Applications</h3>
            
            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl">
              <h4 className="text-xl font-bold mb-6">Content Generation Pipeline</h4>
              <div className="space-y-6">
                {[
                  {
                    stage: "Input Processing",
                    description: "Analyze requirements and context",
                    time: "< 1 second",
                  },
                  {
                    stage: "Content Generation",
                    description: "Generate high-quality content using GPT",
                    time: "5-30 seconds",
                  },
                  {
                    stage: "Quality Review",
                    description: "Automated quality and brand alignment check",
                    time: "2-5 seconds",
                  },
                  {
                    stage: "Human Approval",
                    description: "Optional human review and editing",
                    time: "5-15 minutes",
                  },
                ].map((stage, index) => (
                  <div key={stage.stage} className="relative">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <h5 className="font-semibold">{stage.stage}</h5>
                        <p className="text-sm text-gray-600 dark:text-gray-300">{stage.description}</p>
                        <div className="text-xs text-blue-600 mt-1">{stage.time}</div>
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
              <h4 className="text-xl font-bold mb-6">Performance Metrics</h4>
              <div className="space-y-4">
                {[
                  {
                    metric: "Content Quality Score",
                    value: "9.2/10",
                    benchmark: "Industry average: 7.5/10",
                  },
                  {
                    metric: "Generation Speed",
                    value: "15 seconds avg",
                    benchmark: "95% faster than manual",
                  },
                  {
                    metric: "Approval Rate",
                    value: "92%",
                    benchmark: "First-pass approval",
                  },
                  {
                    metric: "Cost Efficiency",
                    value: "$0.02/article",
                    benchmark: "97% cost reduction",
                  },
                ].map((metric) => (
                  <div key={metric.metric} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-slate-700 rounded-lg">
                    <div>
                      <h5 className="font-medium">{metric.metric}</h5>
                      <div className="text-sm text-gray-600 dark:text-gray-300">{metric.benchmark}</div>
                    </div>
                    <div className="text-2xl font-bold text-blue-600">{metric.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Advanced Features */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-700 p-8 rounded-2xl">
          <h3 className="text-2xl font-bold mb-8 text-center">Advanced GPT Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                feature: "Fine-tuning",
                description: "Custom model training on domain-specific data",
                benefits: ["Industry-specific vocabulary", "Brand voice consistency", "Improved accuracy"],
              },
              {
                feature: "Prompt Engineering",
                description: "Optimized prompts for consistent, high-quality outputs",
                benefits: ["Reliable formatting", "Consistent tone", "Reduced hallucinations"],
              },
              {
                feature: "Multi-modal Integration",
                description: "Combine text, image, and data inputs for rich content",
                benefits: ["Visual content analysis", "Data-driven insights", "Rich media generation"],
              },
            ].map((feature) => (
              <div key={feature.feature} className="bg-white dark:bg-slate-800 p-6 rounded-xl">
                <h4 className="font-bold text-blue-600 mb-3">{feature.feature}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{feature.description}</p>
                <div className="space-y-2">
                  {feature.benefits.map((benefit) => (
                    <div key={benefit} className="text-xs bg-blue-50 dark:bg-slate-700 p-2 rounded flex items-center">
                      <CheckCircle className="w-3 h-3 text-green-500 mr-2" />
                      {benefit}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    automation: (
      <div className="space-y-16">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">AI-Powered Process Automation</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Intelligent automation systems that streamline workflows, eliminate manual tasks, and optimize 
            operations through smart decision-making and adaptive process management.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Automation Categories */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold">Automation Categories</h3>
            
            {[
              {
                icon: Zap,
                title: "Workflow Automation",
                description: "End-to-end automation of business processes and workflows",
                processes: [
                  "Lead qualification and routing",
                  "Customer onboarding sequences",
                  "Content approval workflows",
                  "Data synchronization tasks",
                ],
                efficiency: "80% time savings",
              },
              {
                icon: MessageSquare,
                title: "Communication Automation",
                description: "Automated communication and response systems",
                processes: [
                  "Email response automation",
                  "Chatbot interactions",
                  "Follow-up sequences",
                  "Notification systems",
                ],
                efficiency: "65% response time reduction",
              },
              {
                icon: BarChart3,
                title: "Data Processing Automation",
                description: "Intelligent processing and analysis of large datasets",
                processes: [
                  "Data cleaning and validation",
                  "Report generation",
                  "Anomaly detection",
                  "Predictive analytics",
                ],
                efficiency: "90% accuracy improvement",
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
                
                <div className="space-y-3 mb-6">
                  <h5 className="font-medium">Automated Processes:</h5>
                  {category.processes.map((process) => (
                    <div key={process} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                      <span className="text-sm">{process}</span>
                    </div>
                  ))}
                </div>
                
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                  <div className="text-sm font-semibold text-green-600">{category.efficiency}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Automation Pipeline */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold">Automation Pipeline</h3>
            
            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl">
              <h4 className="text-xl font-bold mb-6">Smart Decision Engine</h4>
              <div className="space-y-6">
                {[
                  {
                    stage: "Event Detection",
                    description: "Monitor systems for trigger events and conditions",
                    ai_component: "Pattern recognition algorithms",
                  },
                  {
                    stage: "Context Analysis",
                    description: "Analyze context and gather relevant data",
                    ai_component: "Natural language processing",
                  },
                  {
                    stage: "Decision Making",
                    description: "AI-powered decision based on rules and learning",
                    ai_component: "Machine learning models",
                  },
                  {
                    stage: "Action Execution",
                    description: "Execute automated actions and workflows",
                    ai_component: "Intelligent orchestration",
                  },
                  {
                    stage: "Learning & Adaptation",
                    description: "Learn from outcomes and improve future decisions",
                    ai_component: "Reinforcement learning",
                  },
                ].map((stage, index) => (
                  <div key={stage.stage} className="relative">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <h5 className="font-semibold">{stage.stage}</h5>
                        <p className="text-sm text-gray-600 dark:text-gray-300">{stage.description}</p>
                        <div className="text-xs text-green-600 mt-1">{stage.ai_component}</div>
                      </div>
                    </div>
                    {index < 4 && (
                      <div className="ml-5 mt-2 mb-2 w-0.5 h-4 bg-gray-300 dark:bg-gray-600"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl">
              <h4 className="text-xl font-bold mb-6">Automation Metrics</h4>
              <div className="space-y-4">
                {[
                  {
                    metric: "Tasks Automated",
                    value: "1,200+",
                    description: "Different types of tasks automated",
                  },
                  {
                    metric: "Time Saved",
                    value: "40 hours/week",
                    description: "Average time savings per employee",
                  },
                  {
                    metric: "Error Reduction",
                    value: "95%",
                    description: "Reduction in manual errors",
                  },
                  {
                    metric: "Cost Savings",
                    value: "$500K/year",
                    description: "Annual operational cost savings",
                  },
                ].map((metric) => (
                  <div key={metric.metric} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-slate-700 rounded-lg">
                    <div>
                      <h5 className="font-medium">{metric.metric}</h5>
                      <div className="text-sm text-gray-600 dark:text-gray-300">{metric.description}</div>
                    </div>
                    <div className="text-2xl font-bold text-green-600">{metric.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Real-World Examples */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-slate-800 dark:to-slate-700 p-8 rounded-2xl">
          <h3 className="text-2xl font-bold mb-8 text-center">Real-World Automation Examples</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Customer Support Automation",
                before: "Manual ticket routing taking 2-4 hours",
                after: "AI-powered instant categorization and routing",
                impact: "85% faster resolution, 60% cost reduction",
                roi: "300% ROI in 6 months",
              },
              {
                title: "Content Moderation",
                before: "Manual review of 1000+ pieces daily",
                after: "AI-powered automated content screening",
                impact: "99.5% accuracy, 24/7 operation",
                roi: "250% ROI in 4 months",
              },
              {
                title: "Lead Qualification",
                before: "Sales team manually qualifying 200+ leads/day",
                after: "AI-powered lead scoring and prioritization",
                impact: "70% time savings, 40% better conversion",
                roi: "400% ROI in 8 months",
              },
              {
                title: "Invoice Processing",
                before: "Manual processing taking 3-5 days",
                after: "AI-powered OCR and automated workflows",
                impact: "95% accuracy, same-day processing",
                roi: "200% ROI in 3 months",
              },
            ].map((example) => (
              <div key={example.title} className="bg-white dark:bg-slate-800 p-6 rounded-xl">
                <h4 className="font-bold text-green-600 mb-4">{example.title}</h4>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="font-medium text-red-600">Before:</span>
                    <p className="text-gray-600 dark:text-gray-300">{example.before}</p>
                  </div>
                  <div>
                    <span className="font-medium text-blue-600">After:</span>
                    <p className="text-gray-600 dark:text-gray-300">{example.after}</p>
                  </div>
                  <div>
                    <span className="font-medium text-green-600">Impact:</span>
                    <p className="text-gray-600 dark:text-gray-300">{example.impact}</p>
                  </div>
                  <div className="bg-green-50 dark:bg-slate-700 p-2 rounded text-center">
                    <span className="font-bold text-green-700 dark:text-green-300">{example.roi}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    insights: (
      <div className="space-y-16">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">AI-Powered Insights & Analytics</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Advanced machine learning algorithms that transform raw data into actionable insights, 
            enabling data-driven decision making and predictive analytics for strategic advantage.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Insight Categories */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold">Insight Categories</h3>
            
            {[
              {
                icon: Target,
                title: "Predictive Analytics",
                description: "Forecast future trends and outcomes based on historical data",
                insights: [
                  "Customer churn prediction",
                  "Sales forecasting",
                  "Market trend analysis",
                  "Demand planning",
                ],
                accuracy: "87% prediction accuracy",
              },
              {
                icon: Users,
                title: "Customer Intelligence",
                description: "Deep understanding of customer behavior and preferences",
                insights: [
                  "Behavioral segmentation",
                  "Purchase intent scoring",
                  "Lifetime value prediction",
                  "Recommendation engines",
                ],
                accuracy: "92% recommendation relevance",
              },
              {
                icon: TrendingUp,
                title: "Performance Analytics",
                description: "Comprehensive analysis of business performance metrics",
                insights: [
                  "Conversion optimization",
                  "Attribution modeling",
                  "ROI analysis",
                  "Efficiency metrics",
                ],
                accuracy: "95% attribution accuracy",
              },
            ].map((category) => (
              <div key={category.title} className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl">
                <div className="flex items-start mb-6">
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-xl flex items-center justify-center mr-4">
                    <category.icon className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">{category.title}</h4>
                    <p className="text-gray-600 dark:text-gray-300">{category.description}</p>
                  </div>
                </div>
                
                <div className="space-y-3 mb-6">
                  <h5 className="font-medium">Key Insights:</h5>
                  {category.insights.map((insight) => (
                    <div key={insight} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                      <span className="text-sm">{insight}</span>
                    </div>
                  ))}
                </div>
                
                <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                  <div className="text-sm font-semibold text-purple-600">{category.accuracy}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Analytics Dashboard */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold">Analytics Dashboard</h3>
            
            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl">
              <h4 className="text-xl font-bold mb-6">Real-time Insights</h4>
              <div className="space-y-6">
                {[
                  {
                    insight: "Customer Churn Risk",
                    risk_level: "Medium",
                    affected_customers: "245 customers",
                    recommended_action: "Launch retention campaign",
                    confidence: "89%",
                  },
                  {
                    insight: "Sales Forecast",
                    risk_level: "Low",
                    affected_customers: "Q4 target achievable",
                    recommended_action: "Maintain current strategy",
                    confidence: "92%",
                  },
                  {
                    insight: "Product Demand",
                    risk_level: "High",
                    affected_customers: "Spike in Product A",
                    recommended_action: "Increase inventory",
                    confidence: "94%",
                  },
                ].map((insight) => (
                  <div key={insight.insight} className="border-l-4 border-purple-500 pl-6 py-4">
                    <div className="flex items-center justify-between mb-2">
                      <h5 className="font-bold text-purple-600">{insight.insight}</h5>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        insight.risk_level === "High" ? "bg-red-100 text-red-800" :
                        insight.risk_level === "Medium" ? "bg-yellow-100 text-yellow-800" :
                        "bg-green-100 text-green-800"
                      }`}>
                        {insight.risk_level} Priority
                      </span>
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-300 mb-2">{insight.affected_customers}</div>
                    <div className="text-sm">
                      <span className="font-medium">Recommended Action:</span>
                      <span className="ml-2">{insight.recommended_action}</span>
                    </div>
                    <div className="text-xs text-purple-600 mt-2">Confidence: {insight.confidence}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl">
              <h4 className="text-xl font-bold mb-6">Model Performance</h4>
              <div className="space-y-4">
                {[
                  {
                    model: "Churn Prediction",
                    accuracy: "89%",
                    precision: "85%",
                    recall: "92%",
                  },
                  {
                    model: "Sales Forecasting",
                    accuracy: "94%",
                    precision: "91%",
                    recall: "96%",
                  },
                  {
                    model: "Customer Segmentation",
                    accuracy: "87%",
                    precision: "83%",
                    recall: "90%",
                  },
                ].map((model) => (
                  <div key={model.model} className="border rounded-lg p-4">
                    <h5 className="font-medium mb-3">{model.model}</h5>
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div className="text-center">
                        <div className="font-bold text-purple-600">{model.accuracy}</div>
                        <div className="text-xs text-gray-500">Accuracy</div>
                      </div>
                      <div className="text-center">
                        <div className="font-bold text-blue-600">{model.precision}</div>
                        <div className="text-xs text-gray-500">Precision</div>
                      </div>
                      <div className="text-center">
                        <div className="font-bold text-green-600">{model.recall}</div>
                        <div className="text-xs text-gray-500">Recall</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Advanced Analytics */}
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-slate-800 dark:to-slate-700 p-8 rounded-2xl">
          <h3 className="text-2xl font-bold mb-8 text-center">Advanced Analytics Capabilities</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                capability: "Deep Learning",
                description: "Neural networks for complex pattern recognition",
                applications: ["Image recognition", "Natural language processing", "Time series analysis"],
              },
              {
                capability: "Ensemble Methods",
                description: "Multiple models working together for better accuracy",
                applications: ["Random forests", "Gradient boosting", "Model stacking"],
              },
              {
                capability: "Real-time Processing",
                description: "Stream processing for immediate insights",
                applications: ["Live dashboards", "Instant alerts", "Dynamic pricing"],
              },
            ].map((capability) => (
              <div key={capability.capability} className="bg-white dark:bg-slate-800 p-6 rounded-xl">
                <h4 className="font-bold text-purple-600 mb-3">{capability.capability}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{capability.description}</p>
                <div className="space-y-2">
                  {capability.applications.map((app) => (
                    <div key={app} className="text-xs bg-purple-50 dark:bg-slate-700 p-2 rounded">
                      {app}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    optimization: (
      <div className="space-y-16">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">AI-Driven Performance Optimization</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Intelligent optimization systems that continuously improve performance, reduce costs, and enhance 
            efficiency through machine learning algorithms and adaptive resource management.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Optimization Areas */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold">Optimization Areas</h3>
            
            {[
              {
                icon: TrendingUp,
                title: "Resource Optimization",
                description: "Intelligent allocation and management of computing resources",
                optimizations: [
                  "Auto-scaling based on demand",
                  "Load balancing optimization",
                  "Cost-performance balancing",
                  "Energy efficiency improvements",
                ],
                improvement: "40% cost reduction",
              },
              {
                icon: Zap,
                title: "Process Optimization",
                description: "Continuous improvement of business processes and workflows",
                optimizations: [
                  "Bottleneck identification",
                  "Workflow streamlining",
                  "Task prioritization",
                  "Resource allocation",
                ],
                improvement: "55% efficiency gain",
              },
              {
                icon: Target,
                title: "Performance Optimization",
                description: "Real-time optimization of system and application performance",
                optimizations: [
                  "Query optimization",
                  "Cache management",
                  "Response time improvement",
                  "Throughput maximization",
                ],
                improvement: "60% speed improvement",
              },
            ].map((area) => (
              <div key={area.title} className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl">
                <div className="flex items-start mb-6">
                  <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-xl flex items-center justify-center mr-4">
                    <area.icon className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">{area.title}</h4>
                    <p className="text-gray-600 dark:text-gray-300">{area.description}</p>
                  </div>
                </div>
                
                <div className="space-y-3 mb-6">
                  <h5 className="font-medium">Optimization Strategies:</h5>
                  {area.optimizations.map((optimization) => (
                    <div key={optimization} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                      <span className="text-sm">{optimization}</span>
                    </div>
                  ))}
                </div>
                
                <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg">
                  <div className="text-sm font-semibold text-orange-600">{area.improvement}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Optimization Engine */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold">Optimization Engine</h3>
            
            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl">
              <h4 className="text-xl font-bold mb-6">Continuous Optimization Loop</h4>
              <div className="space-y-6">
                {[
                  {
                    stage: "Monitor",
                    description: "Continuous monitoring of performance metrics",
                    frequency: "Real-time",
                  },
                  {
                    stage: "Analyze",
                    description: "AI analysis of performance patterns and bottlenecks",
                    frequency: "Every 5 minutes",
                  },
                  {
                    stage: "Optimize",
                    description: "Automatic adjustments and improvements",
                    frequency: "As needed",
                  },
                  {
                    stage: "Validate",
                    description: "Verify optimization effectiveness",
                    frequency: "Continuous",
                  },
                  {
                    stage: "Learn",
                    description: "Update models based on results",
                    frequency: "Daily",
                  },
                ].map((stage, index) => (
                  <div key={stage.stage} className="relative">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <h5 className="font-semibold">{stage.stage}</h5>
                        <p className="text-sm text-gray-600 dark:text-gray-300">{stage.description}</p>
                        <div className="text-xs text-orange-600 mt-1">{stage.frequency}</div>
                      </div>
                    </div>
                    {index < 4 && (
                      <div className="ml-5 mt-2 mb-2 w-0.5 h-4 bg-gray-300 dark:bg-gray-600"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl">
              <h4 className="text-xl font-bold mb-6">Optimization Results</h4>
              <div className="space-y-4">
                {[
                  {
                    metric: "System Performance",
                    baseline: "100%",
                    optimized: "160%",
                    improvement: "+60%",
                  },
                  {
                    metric: "Resource Utilization",
                    baseline: "65%",
                    optimized: "85%",
                    improvement: "+31%",
                  },
                  {
                    metric: "Cost Efficiency",
                    baseline: "$10K/month",
                    optimized: "$6K/month",
                    improvement: "-40%",
                  },
                  {
                    metric: "Response Time",
                    baseline: "500ms",
                    optimized: "200ms",
                    improvement: "-60%",
                  },
                ].map((result) => (
                  <div key={result.metric} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-slate-700 rounded-lg">
                    <div>
                      <h5 className="font-medium">{result.metric}</h5>
                      <div className="text-sm text-gray-600 dark:text-gray-300">
                        {result.baseline} → {result.optimized}
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-orange-600">{result.improvement}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ROI Dashboard */}
        <div className="bg-gradient-to-r from-orange-50 to-yellow-50 dark:from-slate-800 dark:to-slate-700 p-8 rounded-2xl">
          <h3 className="text-2xl font-bold mb-8 text-center">Optimization ROI Dashboard</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                metric: "Cost Savings",
                value: "$2.4M",
                period: "Annual",
                description: "Through intelligent resource optimization",
              },
              {
                metric: "Efficiency Gain",
                value: "55%",
                period: "Average",
                description: "Across all optimized processes",
              },
              {
                metric: "Performance Boost",
                value: "60%",
                period: "System-wide",
                description: "Improvement in response times",
              },
              {
                metric: "ROI",
                value: "450%",
                period: "12 months",
                description: "Return on AI optimization investment",
              },
            ].map((metric) => (
              <div key={metric.metric} className="bg-white dark:bg-slate-800 p-6 rounded-xl text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">{metric.value}</div>
                <h4 className="font-bold mb-2">{metric.metric}</h4>
                <div className="text-sm text-gray-500 mb-2">{metric.period}</div>
                <p className="text-xs text-gray-600 dark:text-gray-300">{metric.description}</p>
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
          <Link href="/#applied-ai" className="flex items-center text-primary hover:text-primary/80 transition-colors">
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
          <h2 className="text-4xl font-bold mb-6">Ready to Harness AI for Your Business?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Let's implement AI-powered solutions that transform your operations and drive measurable results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center">
              <Calendar className="w-5 h-5 mr-2" />
              Schedule AI Consultation
            </Link>
            <Link href="/blog" className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center">
              <Download className="w-5 h-5 mr-2" />
              Download AI Guide
            </Link>
          </div>
        </motion.section>
      </div>
    </div>
  );
}