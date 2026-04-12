// components/ui/Footer.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaGithub, FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";

interface FooterProps {
  transitionLine?: string;
}

export default function Footer({ transitionLine }: FooterProps) {
  const footerLinks = [
    { name: "Home", href: "/" },
    { name: "Work", href: "/work" },
    { name: "Inner Life", href: "/inner-life" },
    { name: "Thoughts", href: "/thoughts" },
    { name: "About", href: "/about" },
    { name: "Together", href: "/together#contact" },
  ];

  return (
    <footer className="bg-stone-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex  items-center justify-between"
        >
          <div>

          <h3 className="text-3xl font-medium text-stone-100 mb-2 max-w-2xl">
            Paul Akinola
            </h3>
          <p className="text-xl font-medium text-stone-100 mb-8 max-w-2xl">
            {transitionLine || "Clarity on the systems that shape how we live, lead, and grow."}
          </p>
          </div>
          <div className="flex grid grid-cols-2 flex-wrap justify-center gap-6 mb-8">
            {footerLinks.map((link,index) => (
              <Link
                key={index}
                href={link.href}
                className="text-stone-300 hover:text-white transition-colors text-sm font-medium"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </motion.div>
          <div className="border-t border-stone-800 w-full flex items-center  justify-between pt-8 text-stone-400 text-sm">
            <p>&copy; {new Date().getFullYear()} Paul Akinola. All rights reserved.</p>

            <div className="flex gap-3" >
              {/* Socials */}
              {
                [
                  {
                    name: "Twitter",
                    href: "https://twitter.com/paul_ankinola",
                    icon: <FaXTwitter size={25}  />
                  },
                  {
                    name: "LinkedIn",
                    href: "https://www.linkedin.com/in/paul-ankinola/",
                    icon: <FaLinkedin size={25} />
                  },
                  {
                    name: "Instagram",
                    href: "https://www.instagram.com/paul_ankinola/",
                    icon: <FaInstagram size={25} />
                  },
                  {
                    name: "GitHub",
                    href: "https://github.com/paul_ankinola",
                    icon: <FaGithub size={25} />
                  }
                ].map((social,index)=>{
                  return (

                    <div> 
                      <Link
                        key={index}
                        href={social.href}
                        className="text-stone-300 hover:text-white transition-colors text-sm font-medium"
                      >
                        {social.icon}
                      </Link>
                    </div>
                  )
                })
              }
              </div>
          </div>
      </div>
    </footer>
  );
}
