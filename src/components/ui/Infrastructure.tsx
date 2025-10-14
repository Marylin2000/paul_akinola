// components/ui/Infrastructure.tsx
"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  BarChart3,
  Users,
  Mail,
  Database,
  Code,
  Shield,
  Network,
  Route,
  Cpu,
  Filter,
  Wrench,
  MousePointer,
} from "lucide-react";

export default function Infrastructure() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const techStack = [
    {
      icon: BarChart3,
      title: "Analytics",
      items: ["Mixpanel", "Amplitude", "Google Analytics"],
      color: "primary",
    },
    {
      icon: Users,
      title: "CRM",
      items: ["Salesforce", "HubSpot", "Pipedrive"],
      color: "secondary",
    },
    {
      icon: Mail,
      title: "Marketing Automation",
      items: ["Marketo", "Pardot", "Mailchimp"],
      color: "accent",
    },
    {
      icon: Database,
      title: "Data Warehouse",
      items: ["BigQuery", "Snowflake", "Redshift"],
      color: "warning",
    },
  ];

  const dataPipeline = [
    {
      icon: MousePointer,
      label: "Event Capture",
      description: "User interactions",
    },
    {
      icon: Filter,
      label: "Segment",
      description: "Data collection",
    },
    {
      icon: Database,
      label: "BigQuery",
      description: "Data warehouse",
    },
    {
      icon: Wrench,
      label: "Tools",
      description: "Activation & insights",
    },
  ];

  const attributionModels = [
    {
      name: "Last-Touch Attribution (LTA)",
      description: "Simple attribution model for baseline measurement",
      gradient: "from-red-50 to-pink-50",
    },
    {
      name: "Multi-Touch Attribution (MTA)",
      description: "Advanced model capturing full customer journey",
      gradient: "from-blue-50 to-indigo-50",
    },
    {
      name: "Model Comparison",
      description: "A/B testing different attribution approaches",
      gradient: "from-green-50 to-emerald-50",
    },
  ];

  return (
    <section id="infrastructure" className="py-20 bg-white dark:bg-slate-900">
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
            Robust data infrastructure that ensures accuracy, reliability, and
            actionable insights across all GTM operations
          </p>
        </motion.div>

        {/* Tech Stack Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold mb-8 text-center">
            Full Tech Stack Architecture
          </h3>
          <div className="bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-800 dark:to-slate-700 p-12 rounded-3xl">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech.title}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={
                    isInView
                      ? { opacity: 1, scale: 1 }
                      : { opacity: 0, scale: 0.8 }
                  }
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div
                    className={`w-20 h-20 bg-${tech.color} rounded-2xl flex items-center justify-center mb-4 mx-auto`}
                  >
                    <tech.icon className="text-white text-2xl" />
                  </div>
                  <h4 className="font-bold mb-3">{tech.title}</h4>
                  <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    {tech.items.map((item, idx) => (
                      <div key={idx}>{item}</div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          {/* Left Column */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl"
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <Code className="text-primary mr-3" />
                Telemetry Schema & Event Contracts
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Standardized event taxonomy and data contracts that ensure
                consistent, reliable data collection across all touchpoints and
                applications.
              </p>
              <div className="space-y-4">
                {[
                  { label: "Event Types", value: "127", color: "primary" },
                  { label: "Data Quality", value: "99.2%", color: "accent" },
                  {
                    label: "Schema Version",
                    value: "v2.4",
                    color: "secondary",
                  },
                ].map((metric) => (
                  <div
                    key={metric.label}
                    className="flex items-center justify-between p-3 bg-blue-50 dark:bg-slate-700 rounded-lg"
                  >
                    <span className="font-medium">{metric.label}</span>
                    <span className={`text-lg font-bold text-${metric.color}`}>
                      {metric.value}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl"
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <Shield className="text-accent mr-3" />
                Reporting Trust & Dashboard Health
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Comprehensive data validation frameworks and monitoring systems
                that maintain stakeholder confidence through transparent
                accuracy metrics.
              </p>
              <div className="space-y-3">
                {[
                  "Automated data validation",
                  "Real-time anomaly detection",
                  "Dashboard freshness monitoring",
                ].map((item, index) => (
                  <div key={item} className="flex items-center">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                    <span className="text-sm text-gray-600 dark:text-gray-300">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl"
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <Network className="text-secondary mr-3" />
                Attribution Model Evolution
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Progressive attribution modeling that evolved from basic
                last-touch to sophisticated multi-touch attribution, providing
                comprehensive customer journey insights.
              </p>
              <div className="space-y-4">
                {attributionModels.map((model, index) => (
                  <div
                    key={model.name}
                    className={`bg-gradient-to-r ${model.gradient} dark:from-slate-700 dark:to-slate-600 p-4 rounded-xl`}
                  >
                    <h4 className="font-semibold mb-2">{model.name}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {model.description}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl"
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <Route className="text-warning mr-3" />
                Data Routing Architecture
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Segment → BigQuery → Tools data flow with real-time processing
                capabilities and robust governance frameworks.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-yellow-50 dark:bg-slate-700 rounded-xl">
                  <div className="text-xl font-bold text-warning">
                    &lt; 100ms
                  </div>
                  <div className="text-sm text-gray-500">
                    Real-time Processing
                  </div>
                </div>
                <div className="text-center p-4 bg-yellow-50 dark:bg-slate-700 rounded-xl">
                  <div className="text-xl font-bold text-warning">99.9%</div>
                  <div className="text-sm text-gray-500">Uptime SLA</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Data Flow Diagram */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-gradient-to-r from-slate-50 to-blue-50 dark:from-slate-800 dark:to-slate-700 p-12 rounded-3xl"
        >
          <h3 className="text-2xl font-bold mb-8 text-center">
            Data Processing Pipeline
          </h3>
          <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">
            {dataPipeline.map((step, index) => (
              <motion.div
                key={step.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={
                  isInView
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.8 }
                }
                transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
                className="text-center flex-1 relative"
              >
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4 mx-auto">
                  <step.icon className="text-white text-xl" />
                </div>
                <h4 className="font-semibold mb-2">{step.label}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {step.description}
                </p>
                {index < dataPipeline.length - 1 && (
                  <div className="hidden md:block absolute right-0 top-8 transform -translate-y-1/2 translate-x-1/2">
                    <Cpu className="w-6 h-6 text-gray-400" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
