// components/ui/Navigation.tsx
"use client";

import { useTheme } from "@/context/ThemeContext";
import { Moon, Sun, Rocket, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function Navigation() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-gray-200 dark:border-slate-700 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold text-gradient">PA</span>
            </div>
            <div className="hidden md:block ml-10">
              <div className="flex items-baseline space-x-4">
                {[
                  "Home",
                  "Growth Systems",
                  "GTM Systems",
                  "Expansion",
                  "Infrastructure",
                  "Applied AI",
                  "Tools & Templates",
                  "Blog",
                  "About",
                ].map((item) => (
                  <button
                    key={item}
                    className="text-gray-500 dark:text-gray-300 hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
            >
              {theme === "light" ? (
                <Moon className="w-5 h-5" />
              ) : (
                <Sun className="w-5 h-5 text-yellow-400" />
              )}
            </button>
            <button className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center">
              <Mail className="w-4 h-4 mr-2" />
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
