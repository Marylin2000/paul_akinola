// components/ui/Footer.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  const footerLinks = [
    { name: "Home", href: "/" },
    { name: "Work", href: "/work" },
    { name: "Inner Life", href: "/inner-life" },
    { name: "Thoughts", href: "/thoughts" },
    { name: "About", href: "/about" },
    { name: "Together", href: "/together" },
  ];

  return (
    <footer className="bg-stone-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center"
        >
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            {footerLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-stone-300 hover:text-white transition-colors text-sm font-medium"
              >
                {link.name}
              </Link>
            ))}
          </div>
          <p className="text-xl font-medium text-stone-100 mb-8 max-w-2xl">
            Clarity on the systems that shape how we live, lead, and grow.
          </p>
          <div className="border-t border-stone-800 w-full pt-8 text-stone-400 text-sm">
            <p>&copy; {new Date().getFullYear()} Paul Akinola. All rights reserved.</p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
