"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import {
  User,
  Briefcase,
  GraduationCap,
  Award,
  MapPin,
  Calendar,
  Mail,
  Linkedin,
  Github,
  Twitter,
  Target,
  TrendingUp,
  Users,
  Brain,
  Zap,
  Globe,
  Building,
  CheckCircle,
  ArrowRight,
  Download,
} from "lucide-react";

export default function AboutPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const skills = [
    { name: "Product-Led Growth (PLG)", level: 95, icon: TrendingUp },
    { name: "GTM Systems Architecture", level: 92, icon: Target },
    { name: "Data Infrastructure", level: 88, icon: Brain },
    { name: "Applied AI & Automation", level: 90, icon: Zap },
    { name: "Customer Lifecycle Management", level: 94, icon: Users },
    { name: "Attribution Modeling", level: 86, icon: Globe },
  ];

  const experience = [
    {
      title: "Senior Growth Systems Architect",
      company: "TechFlow Solutions",
      duration: "2022 - Present",
      location: "San Francisco, CA",
      achievements: [
        "Built MarVis AI system processing 50M+ weekly signals",
        "Implemented PLG motion increasing activation by 45%",
        "Designed multi-touch attribution reducing CAC by 30%",
        "Led team of 8 engineers and data scientists",
      ],
      technologies: ["Python", "React", "PostgreSQL", "Apache Airflow", "Kubernetes"],
    },
    {
      title: "GTM Operations Lead",
      company: "Growth Dynamics",
      duration: "2020 - 2022",
      location: "Austin, TX",
      achievements: [
        "Scaled GTM operations from $5M to $25M ARR",
        "Implemented Salesforce automation reducing manual work by 60%",
        "Built customer scoring model with 92% accuracy",
        "Designed expansion playbook driving 35% net revenue retention",
      ],
      technologies: ["Salesforce", "HubSpot", "Tableau", "Python", "SQL"],
    },
    {
      title: "Product Marketing Manager",
      company: "InnovateTech",
      duration: "2018 - 2020",
      location: "Seattle, WA",
      achievements: [
        "Launched 3 major product features driving $8M in new revenue",
        "Developed go-to-market strategy for enterprise segment",
        "Created customer journey mapping framework",
        "Improved product adoption rates by 55%",
      ],
      technologies: ["Mixpanel", "Amplitude", "Figma", "Adobe Creative Suite"],
    },
  ];

  const education = [
    {
      degree: "Master of Business Administration (MBA)",
      school: "Stanford Graduate School of Business",
      year: "2018",
      focus: "Technology & Operations",
    },
    {
      degree: "Bachelor of Science in Computer Science",
      school: "University of California, Berkeley",
      year: "2014",
      focus: "Data Science & Machine Learning",
    },
  ];

  const certifications = [
    "Certified Product Manager (CPM)",
    "AWS Solutions Architect",
    "Google Analytics 4 Certified",
    "Salesforce Administrator",
    "HubSpot Growth-Driven Design",
    "Tableau Desktop Specialist",
  ];

  const personalStats = [
    { metric: "500+", label: "Companies Helped", icon: Building },
    { metric: "12+", label: "Years Experience", icon: Calendar },
    { metric: "85%", label: "Client Success Rate", icon: Target },
    { metric: "50+", label: "Speaking Events", icon: Users },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      {/* Header */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-800 dark:to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6">
              About Paul Akinola
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Growth Systems & GTM Architect with 12+ years of experience building 
              scalable revenue engines through data-driven systems and applied AI.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Personal Introduction */}
        <motion.section
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="mb-16 sm:mb-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-6">My Story</h2>
              <div className="prose prose-lg max-w-none text-gray-600 dark:text-gray-300 space-y-4">
                <p>
                  I'm passionate about the intersection of technology, data, and human behavior. 
                  My journey began in computer science at UC Berkeley, where I first discovered 
                  the power of data to predict and influence customer actions.
                </p>
                <p>
                  Over the past 12+ years, I've specialized in building growth systems that scale—from 
                  early-stage startups to public companies. I believe the best growth strategies 
                  combine deep technical implementation with genuine customer empathy.
                </p>
                <p>
                  Today, I help companies design and implement comprehensive growth systems that 
                  transform how they acquire, activate, and expand their customer base. My work 
                  focuses on creating sustainable, data-driven engines that grow stronger over time.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-xl">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <MapPin className="w-5 h-5 mr-2 text-primary" />
                  Location
                </h3>
                <p className="text-gray-600 dark:text-gray-300">San Francisco, CA</p>
              </div>

              <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-xl">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Briefcase className="w-5 h-5 mr-2 text-primary" />
                  Currently
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Senior Growth Systems Architect at TechFlow Solutions
                </p>
              </div>

              <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-xl">
                <h3 className="text-xl font-bold mb-4">Connect</h3>
                <div className="flex space-x-3">
                  <a href="#" className="p-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="#" className="p-2 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                    <Github className="w-5 h-5" />
                  </a>
                  <a href="#" className="p-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors">
                    <Twitter className="w-5 h-5" />
                  </a>
                  <Link href="/contact" className="p-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
                    <Mail className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Personal Stats */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16 sm:mb-20"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {personalStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="bg-white dark:bg-slate-800 p-4 sm:p-6 rounded-xl shadow-lg text-center"
              >
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-2xl sm:text-3xl font-bold text-primary mb-2">{stat.metric}</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Skills */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16 sm:mb-20"
        >
          <h2 className="text-3xl font-bold mb-8 sm:mb-12">Core Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <skill.icon className="w-6 h-6 text-primary mr-3" />
                  <h3 className="font-semibold text-lg">{skill.name}</h3>
                </div>
                <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-3 mb-2">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                    transition={{ duration: 1, delay: 0.7 + index * 0.1 }}
                    className="bg-primary h-3 rounded-full"
                  />
                </div>
                <div className="text-right text-sm text-gray-500 dark:text-gray-400">
                  {skill.level}%
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Experience */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16 sm:mb-20"
        >
          <h2 className="text-3xl font-bold mb-8 sm:mb-12">Experience</h2>
          <div className="space-y-8">
            {experience.map((job, index) => (
              <motion.div
                key={`${job.company}-${job.title}`}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                className="bg-white dark:bg-slate-800 p-6 sm:p-8 rounded-xl shadow-lg"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-1">{job.title}</h3>
                    <h4 className="text-lg font-semibold mb-2">{job.company}</h4>
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 sm:text-right">
                    <div className="flex items-center sm:justify-end mb-1">
                      <Calendar className="w-4 h-4 mr-1" />
                      {job.duration}
                    </div>
                    <div className="flex items-center sm:justify-end">
                      <MapPin className="w-4 h-4 mr-1" />
                      {job.location}
                    </div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h5 className="font-semibold mb-3">Key Achievements:</h5>
                  <ul className="space-y-2">
                    {job.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600 dark:text-gray-300">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h5 className="font-semibold mb-3">Technologies:</h5>
                  <div className="flex flex-wrap gap-2">
                    {job.technologies.map((tech, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Education & Certifications */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-16 sm:mb-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Education */}
            <div>
              <h2 className="text-3xl font-bold mb-8 flex items-center">
                <GraduationCap className="w-8 h-8 mr-3 text-primary" />
                Education
              </h2>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={edu.degree} className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg">
                    <h3 className="text-lg font-bold text-primary mb-2">{edu.degree}</h3>
                    <h4 className="font-semibold mb-1">{edu.school}</h4>
                    <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                      <span>{edu.focus}</span>
                      <span>{edu.year}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h2 className="text-3xl font-bold mb-8 flex items-center">
                <Award className="w-8 h-8 mr-3 text-primary" />
                Certifications
              </h2>
              <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg">
                <ul className="space-y-3">
                  {certifications.map((cert, index) => (
                    <li key={cert} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-600 dark:text-gray-300">{cert}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        {/* CTA */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-primary to-secondary p-8 sm:p-12 rounded-3xl text-white">
            <h2 className="text-3xl font-bold mb-4">Let's Build Something Great Together</h2>
            <p className="text-lg sm:text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Ready to transform your growth systems? I'd love to hear about your challenges 
              and explore how we can work together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-primary hover:bg-gray-100 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold transition-all flex items-center justify-center"
              >
                <Mail className="w-5 h-5 mr-2" />
                Get in Touch
              </Link>
              <Link
                href="/tools-templates"
                className="border-2 border-white text-white hover:bg-white hover:text-primary px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold transition-all flex items-center justify-center"
              >
                <Download className="w-5 h-5 mr-2" />
                Download My Tools
              </Link>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}