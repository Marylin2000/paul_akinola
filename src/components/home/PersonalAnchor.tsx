// PersonalAnchor.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const leftImage = "/images/img3.png";
const rightImage = "/images/img4.png";

export default function PersonalAnchor() {
  return (
    <section
      id="personal-anchor"
      className="relative overflow-hidden bg-white py-24 dark:bg-stone-900 md:py-32"
    >
      <div className="container-responsive">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-3"
          >
            <div className="group relative">
              <div className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-primary/15 via-amber-500/10 to-transparent opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative overflow-hidden rounded-2xl border border-stone-200/60 shadow-xl dark:border-stone-700/60">
                <div className="aspect-[3/4] w-full">
                  <Image
                    src={leftImage}
                    alt="Calm horizon and space for reflection"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Center Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-center lg:col-span-6"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
              About the Work
            </div>
            
            <h2 className="mb-6 font-serif text-2xl font-medium tracking-tight text-stone-900 dark:text-white sm:text-3xl md:text-4xl">
              This is where I think, write, and build.
            </h2>
            
            <p className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-stone-600 dark:text-stone-300 sm:text-lg">
              I work at the intersection of systems, clarity, growth, and inner life. 
              This site brings those worlds together, from revenue systems and organisational 
              design to identity, faith, and the deeper patterns that shape how we live.
            </p>
            
            <Link
              href="/about"
              className="group inline-flex items-center gap-3 rounded-full border border-stone-300 bg-white px-8 py-3.5 font-medium text-stone-800 shadow-sm transition-all hover:border-primary/40 hover:bg-white hover:shadow-md dark:border-stone-700 dark:bg-stone-900 dark:text-stone-100 dark:hover:border-primary/40 dark:hover:bg-stone-800"
            >
              About Paul Akinola
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
            </Link>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-3"
          >
            <div className="group relative">
              <div className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-amber-500/15 via-primary/10 to-transparent opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative overflow-hidden rounded-2xl border border-stone-200/60 shadow-xl dark:border-stone-700/60">
                <div className="aspect-[3/4] w-full">
                  <Image
                    src={rightImage}
                    alt="Abstract light and form"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}