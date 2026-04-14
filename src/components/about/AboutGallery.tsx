"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const images = [
  { src: "/images/img3.png", alt: "Gallery image 1", span: "col-span-1 row-span-1" },
  { src: "/images/img4.png", alt: "Gallery image 2", span: "col-span-1 row-span-2" },
  { src: "/images/32.png", alt: "Gallery image 3", span: "col-span-1 row-span-1" },
  { src: "/images/9a.png", alt: "Gallery image 4", span: "col-span-1 row-span-1" },
  { src: "/images/2.png", alt: "Gallery image 5", span: "col-span-1 row-span-2" },
  { src: "/images/27.png", alt: "Gallery image 6", span: "col-span-1 row-span-1" },
];

export default function AboutGallery() {
  return (
    <section className="py-32 lg:py-40 bg-stone-100 dark:bg-stone-900 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <div>
            <span className="text-[0.65rem] font-medium uppercase tracking-[0.3em] text-primary/70 mb-4 block">
              Visual Stories
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-stone-900 dark:text-stone-100">
              Snapshots
            </h2>
          </div>
          <p className="text-stone-600 dark:text-stone-400 max-w-md text-lg italic">
            A few moments from the journey—places, people, and patterns that have shaped how I see the world.
          </p>
        </motion.div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[200px] md:auto-rows-[250px]">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`${image.span} relative group overflow-hidden rounded-2xl md:rounded-3xl cursor-pointer`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Hover Content */}
              <motion.div 
                className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500"
              >
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </motion.div>

              {/* Border Glow */}
              <div className="absolute inset-0 rounded-2xl md:rounded-3xl border-2 border-white/0 group-hover:border-primary/30 transition-colors duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}