// BuildCTA.tsx
"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Star, Send } from "lucide-react";
import Link from "next/link";

const BuildCTA = ({ data }: { data?: any }) => {
  const tb = data?.tabs?.[5] || {};
  const tTitle = tb.ctaTitle || "Connect the dots between your systems, your teams, and your revenue.";
  const tBtn = tb.ctaBtn || "Start a build conversation";
  
  return (
    <section className="relative py-32 bg-stone-50 dark:bg-stone-950 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(154,52,18,0.06)_1px,transparent_0)] bg-[size:40px_40px]"
        />
      </div>

      {/* Glowing orbs */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-7xl"
      />
      <motion.div
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute -bottom-40 -left-40 w-80 h-80 bg-amber-500/15 rounded-full blur-7xl"
      />

      {/* Floating stars */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ 
            duration: 3, 
            delay: i * 0.5, 
            repeat: Infinity,
            repeatDelay: 2
          }}
          className="absolute"
          style={{
            left: `${20 + i * 15}%`,
            top: `${30 + (i * 10) % 40}%`,
          }}
        >
          <Star className="w-3 h-3 text-primary/30 fill-primary/30" />
        </motion.div>
      ))}

      <div className="container-responsive relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative bg-white dark:bg-stone-900 rounded-[4rem] p-10 md:p-16 lg:p-20 border border-stone-200/60 dark:border-stone-700/60 shadow-2xl overflow-hidden">
            {/* Animated border gradient */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-primary/20 via-amber-500/20 to-primary/20"
              animate={{
                x: ["-100%", "100%"],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{ opacity: 0.3 }}
            />
            
            {/* Decorative corner gradients */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-amber-500/10 to-transparent rounded-full blur-3xl" />
            
            {/* Content */}
            <div className="relative text-center">
              {/* Icon */}
              <motion.div
                initial={{ scale: 0, rotate: -10 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="relative inline-block mb-8"
              >
                <motion.div
                  animate={{ 
                    boxShadow: ["0 0 20px rgba(154,52,18,0.3)", "0 0 40px rgba(154,52,18,0.5)", "0 0 20px rgba(154,52,18,0.3)"]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="inline-flex p-5 rounded-2xl bg-gradient-to-br from-primary to-amber-600 shadow-xl"
                >
                  <Sparkles className="w-8 h-8 text-white" />
                </motion.div>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -inset-4 rounded-3xl border border-primary/30"
                />
              </motion.div>

              <h2 className="font-serif text-[clamp(1.8rem,4vw,3.5rem)] leading-[1.1] mb-6 text-stone-900 dark:text-white max-w-2xl mx-auto">
                {tTitle}
              </h2>

              <Link 
                href="/together#contact"
                className="group relative inline-flex items-center"
              >
                <motion.div
                  className="absolute -inset-1 bg-gradient-to-r from-primary via-amber-500 to-primary rounded-full blur-md"
                  animate={{
                    opacity: [0.4, 0.7, 0.4],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="relative inline-flex items-center gap-4 bg-gradient-to-r from-primary to-primary/90 text-white px-10 py-5 rounded-full font-medium text-lg shadow-xl transition-all duration-300">
                  <span>{tBtn}</span>
                  <motion.div 
                    whileHover={{ rotate: 45 }}
                    className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center transition-colors"
                  >
                    <Send className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </motion.div>
                </span>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BuildCTA;