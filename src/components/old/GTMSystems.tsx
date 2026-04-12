"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import {
  Route,
  Signal,
  Globe,
  Brain,
  ArrowRight,
} from "lucide-react";

export default function GTMSystems() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const gtmSystems = [
    {
      icon: Route,
      title: "MQA Routing System",
      description: "Real-time lead scoring and intelligent distribution",
      metrics: "< 5 min response time, 73% qualification rate",
    },
    {
      icon: Signal,
      title: "Signal Architecture",
      description: "Product → GTM signal processing for automated triggers",
      metrics: "95% signal accuracy, real-time processing",
    },
    {
      icon: Globe,
      title: "Lead Enrichment",
      description: "Automated firmographic and technographic data enhancement",
      metrics: "94% coverage, 97% accuracy",
    },
    {
      icon: Brain,
      title: "MarVis GTM Applications",
      description: "AI-powered context generation and personalized outreach",
      metrics: "+45% response rate, +28% win rate",
    },
  ];


  return (
    <section
      id="gtm-systems"
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
            GTM Systems & New Logo Motion
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Intelligent Go-to-Market systems that capture, route, and convert
            high-intent prospects through automated workflows and AI-powered insights
          </p>
        </motion.div>

        {/* GTM Systems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {gtmSystems.map((system, index) => (
            <motion.div
              key={system.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-50 dark:bg-stone-800 p-8 rounded-2xl shadow-xl"
            >
              <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center mb-6">
                <system.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 font-serif">{system.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">{system.description}</p>
              <div className="bg-blue-50 dark:bg-stone-700 p-4 rounded-lg">
                <p className="text-sm font-semibold text-primary">{system.metrics}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Learn More CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <Link 
            href="/gtm-systems"
            className="inline-flex items-center bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl font-semibold transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Learn More About GTM Systems
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}