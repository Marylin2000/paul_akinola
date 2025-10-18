"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Mail,
  Linkedin,
  Github,
  Calendar,
  MapPin,
  Briefcase,
  GraduationCap,
  Award,
  Users,
  TrendingUp,
  Target,
  Zap,
  MessageCircle,
  Phone,
  ArrowRight,
} from "lucide-react";

export default function AboutContact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const experience = [
    {
      role: "Senior Growth Systems Architect",
      company: "Enterprise SaaS Companies",
      period: "2020 - Present",
      description: "Lead growth systems implementation across 15+ enterprise accounts, designing and deploying PLG motions that increased activation rates by 45% on average.",
      achievements: [
        "Designed attribution models reducing CAC by 32%",
        "Implemented scoring systems improving MQA conversion by 28%",
        "Built MarVis AI system increasing sales velocity by 40%"
      ]
    },
    {
      role: "GTM Operations Manager",
      company: "High-Growth Startups",
      period: "2018 - 2020",
      description: "Scaled GTM operations from seed to Series B, implementing data infrastructure and automation systems that supported 10x revenue growth.",
      achievements: [
        "Built multi-touch attribution system",
        "Reduced lead routing time from 24h to 5min",
        "Increased pipeline quality score by 67%"
      ]
    },
    {
      role: "Marketing Analytics Lead",
      company: "Technology Companies",
      period: "2016 - 2018",
      description: "Established data-driven marketing operations, creating measurement frameworks and reporting systems for executive decision-making.",
      achievements: [
        "Implemented real-time dashboard reporting",
        "Designed customer journey mapping framework",
        "Achieved 99.8% data accuracy across systems"
      ]
    }
  ];

  const stats = [
    { number: "7+", label: "Years Experience", icon: Briefcase },
    { number: "50+", label: "Projects Completed", icon: Target },
    { number: "25+", label: "Companies Served", icon: Users },
    { number: "95%", label: "Client Success Rate", icon: TrendingUp },
  ];

  const skills = [
    { category: "Growth Systems", technologies: ["PLG Motion", "Lifecycle Nurture", "Scoring Models", "A/B Testing"] },
    { category: "GTM Operations", technologies: ["Signal Architecture", "Lead Routing", "Attribution Models", "CRM Integration"] },
    { category: "Data Infrastructure", technologies: ["BigQuery", "Segment", "Python", "SQL", "dbt"] },
    { category: "AI & Automation", technologies: ["GPT Integration", "Prompt Engineering", "MarVis Architecture", "ML Scoring"] },
  ];

  const certifications = [
    { name: "Google Analytics 4 Certified", issuer: "Google", year: "2023" },
    { name: "Salesforce Certified Administrator", issuer: "Salesforce", year: "2022" },
    { name: "HubSpot Revenue Operations", issuer: "HubSpot", year: "2023" },
    { name: "AWS Cloud Practitioner", issuer: "Amazon", year: "2022" },
  ];

  return (
    <section
      id="about-contact"
      className="py-20 bg-white dark:bg-slate-900"
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
            About Paul Akinola
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Growth Systems + GTM Architect with 7+ years of experience building
            scalable revenue operations and data-driven growth engines
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          {/* Left Column - Profile */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <div className="bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-800 dark:to-slate-700 p-8 rounded-2xl shadow-xl">
              <div className="text-center mb-8">
                <div className="w-32 h-32 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto mb-6 flex items-center justify-center">
                  <img
                    src="/images/3.png"
                    alt="Paul Akinola"
                    className="w-28 h-28 rounded-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-2">Paul Akinola</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Growth Systems + GTM Architect
                </p>
                <div className="flex items-center justify-center text-sm text-gray-500 mb-6">
                  <MapPin className="w-4 h-4 mr-2" />
                  San Francisco, CA
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center p-4 bg-white dark:bg-slate-800 rounded-xl">
                    <div className="text-2xl font-bold text-primary mb-1">{stat.number}</div>
                    <div className="text-xs text-gray-600 dark:text-gray-300">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Contact Links */}
              <div className="space-y-3">
                {[
                  { icon: Mail, label: "paul@paulakinola.com", href: "mailto:paul@paulakinola.com" },
                  { icon: Linkedin, label: "/in/paulakinola", href: "https://linkedin.com/in/paulakinola" },
                  { icon: Github, label: "/paulakinola", href: "https://github.com/paulakinola" },
                ].map((contact) => (
                  <a
                    key={contact.label}
                    href={contact.href}
                    className="flex items-center p-3 bg-white dark:bg-slate-800 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors group"
                  >
                    <contact.icon className="w-5 h-5 text-gray-400 group-hover:text-primary mr-3" />
                    <span className="text-sm">{contact.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Bio */}
            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl">
              <h4 className="text-2xl font-bold mb-6">Professional Background</h4>
              <div className="prose dark:prose-invert max-w-none">
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  Paul Akinola is a Growth Systems and GTM Architect with over 7 years of experience 
                  designing and implementing scalable revenue operations that drive measurable business outcomes. 
                  He specializes in building data-driven growth engines that bridge the gap between product, 
                  marketing, and sales organizations.
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  His expertise spans the entire customer lifecycle, from product-led growth activation 
                  and behavioral segmentation to sophisticated attribution modeling and AI-powered GTM automation. 
                  Paul has a proven track record of reducing customer acquisition costs, increasing pipeline 
                  quality, and accelerating deal velocity through intelligent systems architecture.
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  When not optimizing growth systems, Paul contributes to the revenue operations community 
                  through open-source frameworks, speaking at industry conferences, and mentoring emerging 
                  RevOps professionals. He holds multiple certifications in analytics, CRM systems, and 
                  cloud infrastructure.
                </p>
              </div>
            </div>

            {/* Skills */}
            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl">
              <h4 className="text-2xl font-bold mb-6">Core Competencies</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {skills.map((skill) => (
                  <div key={skill.category}>
                    <h5 className="font-semibold mb-3 text-primary">{skill.category}</h5>
                    <div className="space-y-2">
                      {skill.technologies.map((tech) => (
                        <div key={tech} className="flex items-center text-sm">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                          <span className="text-gray-600 dark:text-gray-300">{tech}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Experience Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold mb-8 text-center">Professional Experience</h3>
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div key={exp.role} className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-bold">{exp.role}</h4>
                    <p className="text-gray-600 dark:text-gray-300">{exp.company}</p>
                  </div>
                  <span className="text-sm text-gray-500 bg-gray-100 dark:bg-slate-700 px-3 py-1 rounded-full mt-2 md:mt-0">
                    {exp.period}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{exp.description}</p>
                <div className="space-y-2">
                  {exp.achievements.map((achievement) => (
                    <div key={achievement} className="flex items-start">
                      <Zap className="w-4 h-4 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-600 dark:text-gray-300">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold mb-8 text-center">Certifications & Credentials</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert) => (
              <div key={cert.name} className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg">
                <div className="flex items-center">
                  <Award className="w-8 h-8 text-yellow-500 mr-4" />
                  <div>
                    <h4 className="font-semibold">{cert.name}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{cert.issuer} • {cert.year}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="bg-gradient-to-r from-primary to-secondary p-8 rounded-2xl text-white text-center"
        >
          <h3 className="text-3xl font-bold mb-4">Let's Build Something Great Together</h3>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Ready to transform your growth systems? Let's discuss how we can accelerate your 
            revenue operations and build scalable GTM architecture.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded-xl font-semibold transition-all flex items-center justify-center">
              <Calendar className="w-5 h-5 mr-2" />
              Schedule a Call
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-3 rounded-xl font-semibold transition-all flex items-center justify-center">
              <MessageCircle className="w-5 h-5 mr-2" />
              Send a Message
            </button>
          </div>
          <div className="mt-6 text-sm opacity-75">
            Response time: Usually within 24 hours
          </div>
        </motion.div>
      </div>
    </section>
  );
}