// components/ui/Footer.tsx
"use client";

import { motion } from "framer-motion";
import { Mail, Twitter, Linkedin, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-4">Paul Akinola</h3>
            <p className="text-slate-300 mb-4">
              Growth Systems & GTM Architect building scalable revenue engines
              through data-driven systems and applied AI.
            </p>
            <div className="flex space-x-4">
              {[Twitter, Linkedin, Github].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {[
            {
              title: "Expertise",
              links: [
                "PLG Motion",
                "GTM Systems",
                "Data Infrastructure",
                "Applied AI",
              ],
            },
            {
              title: "Resources",
              links: ["Blog", "Case Studies", "Tools", "Templates"],
            },
            {
              title: "Connect",
              links: ["Get in Touch", "Newsletter", "Speaking", "Consulting"],
            },
          ].map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h4 className="font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-slate-300 hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400"
        >
          <p>&copy; 2024 Paul Akinola. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}
