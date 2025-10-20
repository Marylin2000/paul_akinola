// components/ui/Hero.tsx
"use client";

import { useParallax } from "@/hooks/useParallax";
import { motion } from "framer-motion";
import { Rocket, Mail, Sparkles, Zap, Target } from "lucide-react";

export default function Hero() {
  const parallaxOffset = useParallax(0.3);

  return (
    <section className="pt-16 min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-purple-900 relative overflow-hidden">
      {/* Enhanced Parallax Background Elements */}
      <motion.div
        style={{ y: parallaxOffset * 0.5 }}
        className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse-slow"
      />
      <motion.div
        style={{ y: parallaxOffset * 0.3, animationDelay: "1s" }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse-slow"
      />
      <motion.div
        style={{ y: parallaxOffset * 0.4, animationDelay: "2s" }}
        className="absolute top-1/2 left-1/2 w-64 h-64 bg-accent/15 rounded-full blur-3xl animate-pulse-slow"
      />

      <div className="relative container-responsive section-padding">
        <div className="grid-responsive-2 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center px-3 py-2 sm:px-4 sm:py-2 rounded-full bg-gradient-to-r from-primary to-secondary text-white text-xs sm:text-sm font-medium mb-6 sm:mb-8"
            >
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
              <span className="hidden sm:inline">Available for Consulting & Projects</span>
              <span className="sm:hidden">Available for Projects</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-4 sm:mb-6 leading-tight"
            >
              <span className="text-gradient block">Paul</span>
              <span className="text-gradient block">Akinola</span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-gray-600 dark:text-gray-300 mb-6 sm:mb-8"
            >
              Growth Systems <span className="text-primary">+</span> GTM
              Architect
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 mb-8 sm:mb-12 leading-relaxed max-w-2xl"
            >
              Expertise in{" "}
              <span className="text-primary font-semibold">PLG motion</span>,{" "}
              <span className="text-secondary font-semibold">GTM systems</span>,{" "}
              <span className="text-accent font-semibold">
                data infrastructure
              </span>
              , and{" "}
              <span className="text-warning font-semibold">applied AI</span>. I
              build scalable growth engines that transform how companies
              acquire, activate, and expand customers.
            </motion.p>

            {/* Key Metrics */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="grid grid-cols-3 gap-3 sm:gap-6 mb-8 sm:mb-12"
            >
              {[
                { number: "7+", label: "Years Experience", icon: Target },
                { number: "50+", label: "Projects", icon: Zap },
                { number: "25+", label: "Companies", icon: Rocket },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black text-gradient mb-1 sm:mb-2">
                    {stat.number}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4"
            >
              <button className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white btn-responsive rounded-xl font-semibold transition-all transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center group">
                <Rocket className="mr-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:animate-bounce" />
                <span className="hidden sm:inline">Explore Portfolio</span>
                <span className="sm:hidden">Portfolio</span>
              </button>
              <button className="border-2 border-primary text-primary hover:bg-primary hover:text-white btn-responsive rounded-xl font-semibold transition-all transform hover:scale-105 flex items-center justify-center group">
                <Mail className="mr-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110" />
                <span className="hidden sm:inline">Get in Touch</span>
                <span className="sm:hidden">Contact</span>
              </button>
            </motion.div>
          </motion.div>

          {/* Right Column - Enhanced 3D Image Bubble */}
          <motion.div
            initial={{ opacity: 0, x: 50, rotateY: 25 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 1.2, type: "spring", stiffness: 50 }}
            className="relative flex justify-center lg:justify-end"
            style={{ perspective: "1000px" }}
          >
            {/* Main 3D Bubble Container */}
            <motion.div
              className="relative"
              whileHover={{
                scale: 1.05,
                rotateY: -5,
                rotateX: 5,
                z: 50,
              }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              style={{
                transformStyle: "preserve-3d",
                transform: "translateZ(0)",
              }}
            >
              {/* Multiple Layered Glows for Depth */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-full blur-3xl scale-125 animate-pulse opacity-60"></div>
              <div
                className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-2xl scale-115 animate-pulse"
                style={{ animationDelay: "1s" }}
              ></div>
              <div
                className="absolute inset-0 bg-gradient-to-tl from-blue-400/15 to-cyan-400/15 rounded-full blur-xl scale-110"
                style={{ animationDelay: "2s" }}
              ></div>

              {/* Outer Glass Ring with 3D depth */}
              <div
                className="absolute inset-0 rounded-full bg-gradient-to-br from-white/40 to-white/10 dark:from-slate-700/40 dark:to-slate-800/10 blur-sm scale-105"
                style={{
                  transform: "translateZ(-20px)",
                  boxShadow:
                    "0 20px 60px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.2)",
                }}
              ></div>

              {/* Main Bubble with Enhanced 3D Glass Effect */}
              <div
                className="relative rounded-full p-8"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.75) 100%)",
                  backdropFilter: "blur(20px)",
                  boxShadow: `
                    0 50px 100px -20px rgba(0,0,0,0.25),
                    0 30px 60px -30px rgba(0,0,0,0.3),
                    inset 0 -2px 6px rgba(0,0,0,0.1),
                    inset 0 2px 6px rgba(255,255,255,0.8)
                  `,
                  border: "2px solid rgba(255,255,255,0.5)",
                  transform: "translateZ(20px)",
                }}
              >
                {/* Inner Luminous Effect with Multiple Layers */}
                <div className="absolute inset-6 bg-gradient-to-br from-pink-200/40 via-purple-200/30 to-blue-200/40 rounded-full blur-xl"></div>
                <div className="absolute inset-8 bg-gradient-to-tl from-yellow-200/20 via-rose-200/20 to-cyan-200/20 rounded-full blur-lg"></div>

                {/* Image Container with Deep Shadow */}
                <div
                  className="relative rounded-full overflow-hidden"
                  style={{
                    boxShadow: `
                      0 20px 40px rgba(0,0,0,0.2),
                      0 10px 20px rgba(0,0,0,0.15),
                      inset 0 0 20px rgba(0,0,0,0.1),
                      inset 0 2px 4px rgba(255,255,255,0.3)
                    `,
                    border: "6px solid rgba(255,255,255,0.7)",
                    transform: "translateZ(10px)",
                  }}
                >
                  <img
                  src={"/images/3.png"}
                    alt="Paul Akinola - Growth Systems & GTM Architect"
                    className="w-80 h-80 object-cover transition-all duration-500"
                    style={{ transform: "scale(1.02)" }}
                  />

                  {/* Multi-layer Shine Effect */}
                  {/* <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent"></div>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/30 to-transparent rounded-full blur-2xl"></div> */}

                  {/* Subtle Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/5"></div>
                </div>

                {/* Refraction/Light Spots */}
                <div className="absolute top-12 left-12 w-16 h-16 bg-white/30 rounded-full blur-xl"></div>
                <div className="absolute bottom-16 right-16 w-20 h-20 bg-gradient-to-br from-blue-300/20 to-purple-300/20 rounded-full blur-2xl"></div>

                {/* Enhanced Floating Elements with 3D depth */}
                <motion.div
                  animate={{
                    y: [0, -12, 0],
                    rotate: [0, 5, 0],
                    z: [0, 20, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -top-6 -left-6 w-20 h-20 rounded-full flex items-center justify-center"
                  style={{
                    background:
                      "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                    boxShadow: `
                      0 15px 35px rgba(102, 126, 234, 0.4),
                      0 5px 15px rgba(0,0,0,0.2),
                      inset 0 -2px 6px rgba(0,0,0,0.2),
                      inset 0 2px 6px rgba(255,255,255,0.3)
                    `,
                    transform: "translateZ(40px)",
                  }}
                >
                  <Rocket className="w-8 h-8 text-white drop-shadow-lg" />
                </motion.div>

                <motion.div
                  animate={{
                    y: [0, -18, 0],
                    rotate: [0, -5, 0],
                    z: [0, 30, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                  className="absolute -bottom-6 -right-6 w-16 h-16 rounded-full flex items-center justify-center"
                  style={{
                    background:
                      "linear-gradient(135deg, #11998e 0%, #38ef7d 100%)",
                    boxShadow: `
                      0 12px 30px rgba(17, 153, 142, 0.4),
                      0 5px 15px rgba(0,0,0,0.2),
                      inset 0 -2px 6px rgba(0,0,0,0.2),
                      inset 0 2px 6px rgba(255,255,255,0.3)
                    `,
                    transform: "translateZ(35px)",
                  }}
                >
                  <Zap className="w-6 h-6 text-white drop-shadow-lg" />
                </motion.div>

                <motion.div
                  animate={{
                    scale: [1, 1.15, 1],
                    opacity: [0.8, 1, 0.8],
                    z: [0, 15, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute top-10 -right-8 w-12 h-12 rounded-full flex items-center justify-center"
                  style={{
                    background:
                      "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
                    boxShadow: `
                      0 10px 25px rgba(245, 87, 108, 0.4),
                      0 5px 15px rgba(0,0,0,0.2),
                      inset 0 -2px 6px rgba(0,0,0,0.2),
                      inset 0 2px 6px rgba(255,255,255,0.3)
                    `,
                    transform: "translateZ(30px)",
                  }}
                >
                  <Sparkles className="w-5 h-5 text-white drop-shadow-lg" />
                </motion.div>
              </div>

              {/* Animated Connection Lines with Depth */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                style={{ zIndex: -1, transform: "translateZ(-10px)" }}
              >
                <motion.path
                  d="M 100,100 Q 200,50 300,100"
                  stroke="url(#gradient1)"
                  strokeWidth="3"
                  fill="none"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.4 }}
                  transition={{ duration: 2, delay: 1.5 }}
                />
                <motion.path
                  d="M 150,200 Q 250,150 350,200"
                  stroke="url(#gradient2)"
                  strokeWidth="2"
                  fill="none"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.3 }}
                  transition={{ duration: 2.5, delay: 2 }}
                />
                <defs>
                  <linearGradient
                    id="gradient1"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop
                      offset="0%"
                      stopColor="rgb(102, 126, 234)"
                      stopOpacity="0.6"
                    />
                    <stop
                      offset="100%"
                      stopColor="rgb(118, 75, 162)"
                      stopOpacity="0.6"
                    />
                  </linearGradient>
                  <linearGradient
                    id="gradient2"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop
                      offset="0%"
                      stopColor="rgb(17, 153, 142)"
                      stopOpacity="0.5"
                    />
                    <stop
                      offset="100%"
                      stopColor="rgb(56, 239, 125)"
                      stopOpacity="0.5"
                    />
                  </linearGradient>
                </defs>
              </svg>
            </motion.div>

            {/* Enhanced Background Pattern with Depth */}
            <div className="absolute inset-0 -z-10 opacity-20">
              <div className="absolute top-20 right-20 w-40 h-40 bg-gradient-to-br from-primary to-purple-500 rounded-full blur-3xl"></div>
              <div className="absolute bottom-20 left-20 w-32 h-32 bg-gradient-to-br from-secondary to-cyan-500 rounded-full blur-2xl"></div>
              <div className="absolute top-1/2 left-1/2 w-28 h-28 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full blur-2xl"></div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-primary rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-primary rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
