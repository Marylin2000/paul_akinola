// components/ui/Blog.tsx
"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Calendar, Clock, ArrowRight } from "lucide-react";

export default function Blog() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { id: "all", label: "All Posts" },
    { id: "growth", label: "Growth" },
    { id: "gtm", label: "GTM" },
    { id: "ai", label: "AI" },
    { id: "infrastructure", label: "Infrastructure" },
    { id: "experiments", label: "Experiments" },
  ];

  const blogPosts = [
    {
      id: 1,
      title: "Building AI-Powered PLG Activation Systems",
      description:
        "How to leverage machine learning and behavioral analytics to create intelligent onboarding flows that adapt to user patterns and accelerate time-to-value.",
      date: "Dec 15, 2023",
      readTime: "8 min read",
      category: ["growth", "ai"],
      gradient: "from-blue-400 to-purple-500",
    },
    {
      id: 2,
      title: "The Complete Guide to Signal-Based GTM Architecture",
      description:
        "A comprehensive framework for building real-time signal processing systems that transform product usage data into actionable sales and marketing workflows.",
      date: "Dec 8, 2023",
      readTime: "12 min read",
      category: ["gtm", "infrastructure"],
      gradient: "from-green-400 to-blue-500",
    },
    {
      id: 3,
      title: "RICE Prioritization for Growth Teams",
      description:
        "Master the RICE framework (Reach, Impact, Confidence, Effort) to build a systematic approach to experiment prioritization and resource allocation in growth initiatives.",
      date: "Nov 28, 2023",
      readTime: "6 min read",
      category: ["experiments"],
      gradient: "from-purple-400 to-pink-500",
    },
    {
      id: 4,
      title: "Advanced Scoring Models: From PQL to MQA",
      description:
        "Deep dive into evolving lead qualification frameworks and how to implement sophisticated scoring models that predict buyer intent with 92% accuracy.",
      date: "Nov 15, 2023",
      readTime: "10 min read",
      category: ["gtm", "ai"],
      gradient: "from-orange-400 to-red-500",
    },
    {
      id: 5,
      title: "Data Infrastructure for Modern GTM Teams",
      description:
        "Building scalable data pipelines that ensure data quality, reliability, and actionable insights across sales, marketing, and product teams.",
      date: "Nov 5, 2023",
      readTime: "14 min read",
      category: ["infrastructure"],
      gradient: "from-cyan-400 to-blue-500",
    },
    {
      id: 6,
      title: "Community-Driven PLG: Beyond Traditional Growth",
      description:
        "How to leverage community engagement as a primary growth driver through strategic Common Room integrations and conversion optimization.",
      date: "Oct 22, 2023",
      readTime: "9 min read",
      category: ["growth"],
      gradient: "from-yellow-400 to-orange-500",
    },
  ];

  const filteredPosts =
    activeFilter === "all"
      ? blogPosts
      : blogPosts.filter((post) => post.category.includes(activeFilter));

  return (
    <section id="blog" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Latest Insights
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Deep dives into growth systems, GTM strategies, and applied AI in
            modern revenue operations
          </p>
        </motion.div>

        {/* Blog Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                activeFilter === filter.id
                  ? "bg-primary text-white shadow-lg"
                  : "text-gray-600 dark:text-gray-300 hover:text-primary hover:bg-gray-100 dark:hover:bg-slate-800"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>

        {/* Blog Grid */}
        <motion.div
          key={activeFilter}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          {filteredPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <div
                className={`h-48 bg-gradient-to-br ${post.gradient} relative`}
              >
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-white/90 text-gray-900 px-3 py-1 rounded-full text-sm font-medium">
                    {post.category[0].charAt(0).toUpperCase() +
                      post.category[0].slice(1)}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 hover:text-primary transition-colors cursor-pointer">
                  {post.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                  {post.description}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Load More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <button className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center mx-auto">
            View All Articles
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
