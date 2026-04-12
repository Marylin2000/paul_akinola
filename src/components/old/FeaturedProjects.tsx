// components/ui/FeaturedProjects.tsx
"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Route, Rocket, ArrowRight } from "lucide-react";

export default function FeaturedProjects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const projects = [
    {
      icon: Brain,
      title: "MarVis AI",
      description:
        "AI-powered GTM context generation system that automatically summarizes product signals, user behavior, and market intelligence to provide actionable insights for sales and marketing teams.",
      metric: "40%",
      metricLabel: "Faster Deal Velocity",
      gradient: "from-blue-50 to-indigo-100",
      color: "primary",
    },
    {
      icon: Route,
      title: "Signal Routing",
      description:
        "Real-time scoring and routing system that captures product usage signals, enriches with firmographic data, and automatically routes qualified leads to the right sales team members.",
      metric: "85%",
      metricLabel: "Lead Quality Score",
      gradient: "from-purple-50 to-pink-100",
      color: "secondary",
    },
    {
      icon: Rocket,
      title: "PLG Framework",
      description:
        "Comprehensive product-led growth activation framework that reduces time-to-first-insight and optimizes onboarding flows through behavioral segmentation and intelligent nurture sequences.",
      metric: "60%",
      metricLabel: "Faster Activation",
      gradient: "from-green-50 to-emerald-100",
      color: "accent",
    },
  ];

  return (
    <section
      id="featured-projects"
      className="py-20 bg-white dark:bg-stone-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-6 font-serif">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Transformative growth systems and GTM architectures that drive
            measurable business outcomes
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`group bg-gradient-to-br ${project.gradient} dark:from-stone-800 dark:to-stone-700 p-8 rounded-2xl border border-gray-200 dark:border-stone-600 hover:shadow-xl transition-all duration-300 transform hover:scale-105`}
            >
              <div className="flex items-center mb-6">
                <div
                  className={`w-12 h-12 bg-${project.color} rounded-xl flex items-center justify-center mr-4`}
                >
                  <project.icon className="text-white text-xl" />
                </div>
                <h3 className="text-2xl font-bold font-serif">{project.title}</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {project.description}
              </p>
              <div className="flex items-center justify-between">
                <div className={`text-3xl font-black text-${project.color}`}>
                  {project.metric}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {project.metricLabel}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <button className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center mx-auto">
            <ArrowRight className="mr-2 w-5 h-5" />
            View All Projects
          </button>
        </motion.div>
      </div>
    </section>
  );
}
