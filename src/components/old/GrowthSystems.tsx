"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import {
  Rocket,
  Target,
  Mail,
  ListOrdered,
  Network,
  ArrowRight,
} from "lucide-react";

export default function GrowthSystems() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const growthSystems = [
    {
      icon: Rocket,
      title: "PLG Motion & Activation",
      description: "Optimize onboarding flows and reduce TTFI by 65%",
      metrics: "78% activation rate, 84% user retention",
    },
    {
      icon: Mail,
      title: "Lifecycle Nurture Systems",
      description: "Behavioral triggers and intelligent email sequences",
      metrics: "42% open rate, 18% CTR, 8.5% conversion",
    },
    {
      icon: Target,
      title: "Progressive Scoring Models",
      description: "PQL → PEQL → MQA qualification framework",
      metrics: "68% MQA conversion rate, +22% YoY improvement",
    },
    {
      icon: ListOrdered,
      title: "Experiment Framework",
      description: "RICE prioritization and A/B testing methodology",
      metrics: "+32% completion rates, +28% open rates",
    },
    {
      icon: Network,
      title: "Community-Driven PLG",
      description: "Leveraging community platforms for organic growth",
      metrics: "35% community signups, 62% support cost reduction",
    },
  ];

  return (
    <section
      id="growth-systems"
      className="py-20 bg-gradient-to-br from-stone-50 to-blue-50 dark:from-stone-800 dark:to-stone-900"
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
            Growth Systems Architecture
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Scalable systems that transform user acquisition, activation, and
            expansion through data-driven PLG motions
          </p>
        </motion.div>

        {/* Growth Systems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {growthSystems.map((system, index) => (
            <motion.div
              key={system.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white dark:bg-stone-800 p-8 rounded-2xl shadow-xl"
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
            href="/growth-systems"
            className="inline-flex items-center bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl font-semibold transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Learn More About Growth Systems
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
