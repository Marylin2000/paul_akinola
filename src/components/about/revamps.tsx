
"use client";

import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { 
  ArrowRight, 
  Sparkles, 
  Zap, 
  Target, 
  TrendingUp, 
  Users, 
  Database,
  Layers,
  Cpu,
  BarChart3,
  Workflow,
  Bot,
  Award,
  Briefcase,
  ChevronRight,
  ArrowUpRight
} from "lucide-react";

// ============================================
// COMPONENT 2: SystemStories - Revolutionary Cards
// ============================================

const stories = [
  {
    id: 1,
    title: "When the growth motion did not fit the business",
    pain: "The brief was growth. But installs were not the real problem. People were coming in and leaving. The motion and the stage were mismatched.",
    change: "Rebuilt the activation flow around time-to-first-insight. Shifted focus from acquisition volume to retention quality.",
    metrics: ["60% faster activation", "78% retention", "200%+ revenue"],
    icon: TrendingUp,
    gradient: "from-orange-500 to-red-600"
  },
  {
    id: 2,
    title: "When SDRs spent more time searching than selling",
    pain: "Research and talk-point prep consumed the day. SDRs needed context from existing system data without the manual dig.",
    change: "MarVis—an AI research and enablement assistant—surfaced context automatically, enabling SDRs to focus on orchestration instead of search.",
    metrics: ["40% faster ramp"],
    icon: Users,
    gradient: "from-blue-500 to-cyan-600"
  },
  {
    id: 3,
    title: "When CRM structure hid the revenue truth",
    pain: "The pipeline existed. Leads were coming in. But leadership couldn't trust what they saw. The CRM was collecting without creating clarity.",
    change: "Redesigned lifecycle stages, signal definitions, and handoff criteria. Built attribution that leadership could trust for actual decisions.",
    metrics: ["91% attribution accuracy", "32% lower CAC"],
    icon: Database,
    gradient: "from-purple-500 to-pink-600"
  },
  {
    id: 4,
    title: "When product signal never became GTM action",
    pain: "Product data existed. Signals were being generated. But Sales didn't know which accounts were active. The data wasn't reaching the right people.",
    change: "Built real-time signal routing from product to CRM. Created scoring that combined usage with firmographics. Sales now knew what mattered before outreach.",
    metrics: ["85% lead quality", "<5min routing"],
    icon: Zap,
    gradient: "from-emerald-500 to-teal-600"
  }
];

export function SystemStories() {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-stone-100/30 dark:via-stone-900/20 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 max-w-3xl"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-12 bg-primary" />
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">
              01 — System Stories
            </span>
          </div>
          <h2 className="font-serif text-[clamp(2.5rem,5vw,4rem)] leading-[1.1] text-foreground">
            Architecture that
            <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              changes outcomes
            </span>
          </h2>
        </motion.div>

        {/* Stories Grid - Asymmetric Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {stories.map((story, i) => (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className={`group relative ${i === 0 || i === 3 ? 'lg:translate-y-12' : ''}`}
            >
              <div className="relative bg-white dark:bg-stone-900 rounded-3xl p-8 lg:p-10 border border-rule/10 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
                {/* Gradient Accent */}
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${story.gradient}`} />
                
                {/* Background Gradient Blob */}
                <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${story.gradient} opacity-10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700`} />
                
                {/* Icon */}
                <div className={`inline-flex p-3 rounded-2xl bg-gradient-to-br ${story.gradient} mb-6 shadow-lg`}>
                  <story.icon className="w-6 h-6 text-white" />
                </div>

                {/* Number */}
                <div className="absolute top-8 right-8 text-6xl font-serif font-bold text-foreground/5 group-hover:text-foreground/10 transition-colors">
                  0{story.id}
                </div>

                {/* Content */}
                <h3 className="font-serif text-2xl lg:text-3xl mb-6 text-foreground group-hover:text-primary transition-colors leading-tight">
                  {story.title}
                </h3>

                <div className="space-y-6">
                  <div className="relative pl-6 border-l-2 border-red-400/30">
                    <span className="absolute left-0 top-0 w-2 h-2 rounded-full bg-red-400 -translate-x-[5px]" />
                    <span className="text-xs font-bold uppercase tracking-wider text-red-400 mb-2 block">Pain Point</span>
                    <p className="text-foreground/70 leading-relaxed">{story.pain}</p>
                  </div>

                  <div className="relative pl-6 border-l-2 border-emerald-400/30">
                    <span className="absolute left-0 top-0 w-2 h-2 rounded-full bg-emerald-400 -translate-x-[5px]" />
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-2 block">Solution</span>
                    <p className="text-foreground/90 font-medium leading-relaxed">{story.change}</p>
                  </div>
                </div>

                {/* Metrics */}
                <div className="mt-8 pt-6 border-t border-rule/10 flex flex-wrap gap-3">
                  {story.metrics.map((metric, mi) => (
                    <span 
                      key={mi} 
                      className="px-4 py-2 rounded-full bg-primary/5 border border-primary/10 text-primary text-sm font-semibold"
                    >
                      {metric}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


// ============================================
// COMPONENT 4: ProofPoints - Dark Mode Stats
// ============================================

const stats = [
  { label: "Years Experience", value: "9+", suffix: "" },
  { label: "Systems Built", value: "20", suffix: "+" },
  { label: "Companies", value: "7", suffix: "+" },
  { label: "Industries", value: "7", suffix: "" }
];

const industries = [
  { name: "FinTech", company: "OZÉ Inc", color: "from-emerald-500 to-cyan-500" },
  { name: "HealthTech", company: "Reliance Health", color: "from-blue-500 to-indigo-500" },
  { name: "HR Tech", company: "OnHand", color: "from-purple-500 to-pink-500" },
  { name: "Analytics", company: "KX Systems", color: "from-orange-500 to-red-500" },
  { name: "E-commerce", company: "Possible & Affordable", color: "from-rose-500 to-pink-500" },
  { name: "PaaS", company: "Veefunnels", color: "from-cyan-500 to-blue-500" },
  { name: "RevOps", company: "MartandMall", color: "from-amber-500 to-orange-500" }
];

function AnimatedCounter({ value, suffix }: { value: string, suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const duration = 2000;
          const steps = 60;
          const increment = parseInt(value) / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= parseInt(value)) {
              setCount(parseInt(value));
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref} className="font-serif text-7xl md:text-8xl font-bold">
      {count}{suffix}
    </span>
  );
}

export function ProofPoints() {
  return (
    <section className="py-32 bg-stone-950 text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-stone-950 via-stone-900 to-stone-950" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-12 bg-primary" />
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">
              03 — Proof Points
            </span>
          </div>
          <h2 className="font-serif text-[clamp(2.5rem,5vw,4rem)] leading-[1.1]">
            Evidence of the
            <span className="block bg-gradient-to-r from-primary to-amber-500 bg-clip-text text-transparent">
              work
            </span>
          </h2>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative p-8 text-center">
                <div className="bg-gradient-to-br from-primary to-amber-500 bg-clip-text text-transparent mb-4">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-stone-400 text-sm uppercase tracking-widest">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Industries */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-stone-500 mb-12">
            Companies by Industry
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group relative"
              >
                <div className="flex items-center gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/30 transition-all duration-300 hover:bg-white/10">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg`}>
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="text-stone-400 text-sm mb-1">{item.name}</div>
                    <div className="text-white font-medium group-hover:text-primary transition-colors">
                      {item.company}
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-stone-600 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================
// COMPONENT 5: ToolsBuilt - Horizontal Scroll
// ============================================

const tools = [
  {
    title: "PQL → MQA Scoring Model",
    description: "Lead qualification progression calculator based on product usage and firmographics.",
    icon: Award,
    tags: ["Scoring", "Qualification"],
    gradient: "from-violet-500 to-purple-600"
  },
  {
    title: "GTM AI Prompts Library",
    description: "50+ prompts for advanced research and personalization at scale.",
    icon: Bot,
    tags: ["AI", "Prompts"],
    gradient: "from-cyan-500 to-blue-600"
  },
  {
    title: "Multi-Touch Attribution",
    description: "Channel attribution mapped to real buying behavior and pipeline impact.",
    icon: BarChart3,
    tags: ["Analytics", "Attribution"],
    gradient: "from-emerald-500 to-teal-600"
  },
  {
    title: "Lifecycle Nurture Framework",
    description: "Behavioral-triggered email sequences designed for conversion and retention.",
    icon: Layers,
    tags: ["Email", "Automation"],
    gradient: "from-orange-500 to-red-600"
  }
];

export function ToolsBuilt() {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"]
  });
  
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  return (
    <section ref={scrollRef} className="py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 max-w-3xl"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-12 bg-primary" />
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">
              04 — Tools I&apos;ve Built
            </span>
          </div>
          <h2 className="font-serif text-[clamp(2.5rem,5vw,4rem)] leading-[1.1] text-foreground">
            Frameworks and
            <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              templates
            </span>
          </h2>
        </motion.div>
      </div>

      {/* Horizontal Scrolling Cards */}
      <motion.div style={{ x }} className="flex gap-6 px-6">
        {tools.map((tool, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex-shrink-0 w-[400px] group"
          >
            <div className="relative h-full bg-white dark:bg-stone-900 rounded-3xl p-8 border border-rule/10 overflow-hidden hover:border-primary/30 transition-all duration-500 shadow-xl hover:shadow-2xl">
              {/* Gradient Accent */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${tool.gradient} opacity-10 rounded-full blur-3xl group-hover:opacity-20 transition-opacity`} />
              
              {/* Icon */}
              <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${tool.gradient} mb-6 shadow-lg`}>
                <tool.icon className="w-6 h-6 text-white" />
              </div>

              {/* Tags */}
              <div className="flex gap-2 mb-4">
                {tool.tags.map((tag, ti) => (
                  <span key={ti} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Content */}
              <h3 className="font-serif text-2xl mb-3 text-foreground group-hover:text-primary transition-colors">
                {tool.title}
              </h3>
              <p className="text-foreground/60 leading-relaxed mb-6">
                {tool.description}
              </p>

              {/* Action */}
              <button className="flex items-center gap-2 text-primary font-medium group/btn">
                <span>Explore</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

// ============================================
// COMPONENT 6: BuildCTA - Final CTA
// ============================================

export function BuildCTA() {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative bg-white dark:bg-stone-900 rounded-[3rem] p-12 md:p-20 border border-rule/10 shadow-2xl overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-accent/20 to-transparent rounded-full blur-3xl" />
            
            {/* Content */}
            <div className="relative text-center">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, type: "spring" }}
                className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-primary to-accent mb-8 shadow-xl"
              >
                <Sparkles className="w-8 h-8 text-white" />
              </motion.div>

              <h2 className="font-serif text-[clamp(2.5rem,5vw,4rem)] leading-[1.1] mb-6">
                Let&apos;s build
                <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  together
                </span>
              </h2>

              <p className="text-xl text-foreground/60 mb-12 max-w-xl mx-auto leading-relaxed">
                If something here connects with what you&apos;re working through, this is where a conversation can start.
              </p>

              <Link 
                href="/together#contact"
                className="group inline-flex items-center gap-4 bg-gradient-to-r from-primary to-primary/80 text-white px-10 py-5 rounded-full font-medium text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                <span>Start a Conversation</span>
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Export all components

