"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useRef, useState, useCallback } from "react";
import { ArrowUpRight, X, Expand, Eye } from "lucide-react";

interface GalleryImage {
  src: string;
  alt: string;
  span: string;
  caption?: string;
  location?: string;
  year?: string;
}

const images: GalleryImage[] = [
  { 
    src: "/images/img3.png", 
    alt: "Gallery image 1", 
    span: "col-span-1 row-span-1",
    caption: "Morning Light",
    location: "Tokyo",
    year: "2024"
  },
  { 
    src: "/images/img4.png", 
    alt: "Gallery image 2", 
    span: "col-span-1 row-span-2",
    caption: "Quiet Moments",
    location: "Paris",
    year: "2023"
  },
  { 
    src: "/images/32.png", 
    alt: "Gallery image 3", 
    span: "col-span-1 row-span-1",
    caption: "Urban Rhythm",
    location: "New York",
    year: "2024"
  },
  { 
    src: "/images/9a.png", 
    alt: "Gallery image 4", 
    span: "col-span-1 row-span-1",
    caption: "Golden Hour",
    location: "London",
    year: "2023"
  },
  { 
    src: "/images/2.png", 
    alt: "Gallery image 5", 
    span: "col-span-1 row-span-2",
    caption: "Stillness",
    location: "Kyoto",
    year: "2024"
  },
  { 
    src: "/images/27.png", 
    alt: "Gallery image 6", 
    span: "col-span-1 row-span-1",
    caption: "Reflections",
    location: "Berlin",
    year: "2023"
  },
];

// Elegant reveal animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1], // Custom cubic bezier for luxury feel
    },
  },
};

const textRevealVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function AboutGallery() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <>
      <section 
        ref={sectionRef}
        className="relative py-32 lg:py-48 bg-[#faf9f7] dark:bg-[#0a0a0a] overflow-hidden"
      >
        {/* Subtle grain texture overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Ambient lighting effects */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-radial from-amber-100/20 via-transparent to-transparent dark:from-amber-900/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-radial from-stone-200/20 via-transparent to-transparent dark:from-stone-800/10 blur-3xl pointer-events-none" />

        <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
          {/* Header Section */}
          <motion.div 
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="mb-20 lg:mb-28 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 lg:gap-16"
          >
            <div className="flex-1">
              <motion.span 
                variants={textRevealVariants}
                className="inline-flex items-center gap-3 text-[0.7rem] font-medium uppercase tracking-[0.35em] text-stone-500 dark:text-stone-400 mb-6"
              >
                <span className="w-12 h-px bg-gradient-to-r from-stone-400 to-transparent" />
                Visual Stories
              </motion.span>
              
              <motion.h2 
                variants={textRevealVariants}
                className="font-serif text-5xl md:text-6xl lg:text-7xl text-stone-900 dark:text-stone-100 leading-[0.95] tracking-tight"
              >
                Selected
                <br />
                <span className="italic text-stone-400 dark:text-stone-600 font-light">
                  Works
                </span>
              </motion.h2>
            </div>

            <motion.div 
              variants={textRevealVariants}
              className="lg:max-w-sm lg:text-right"
            >
              <p className="text-stone-600 dark:text-stone-400 text-lg leading-relaxed font-light">
                A curated collection of moments—each frame holding the weight of memory, light, and the quiet poetry of everyday life.
              </p>
              <div className="mt-6 flex items-center gap-4 lg:justify-end text-xs text-stone-400 uppercase tracking-widest">
                <span>Scroll to explore</span>
                <div className="w-8 h-px bg-stone-300" />
              </div>
            </motion.div>
          </motion.div>

          {/* Luxury Masonry Grid */}
          <motion.div 
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 lg:gap-6 auto-rows-[180px] md:auto-rows-[220px] lg:auto-rows-[280px]"
          >
            {images.map((image, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`${image.span} relative group cursor-pointer`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => setSelectedImage(image)}
              >
                {/* Image Container with sophisticated borders */}
                <div className="relative w-full h-full overflow-hidden bg-stone-200 dark:bg-stone-800">
                  {/* Animated border frame */}
                  <div className="absolute inset-0 z-20 pointer-events-none">
                    <div className="absolute top-0 left-0 w-full h-full border border-stone-300/0 group-hover:border-stone-300/50 dark:border-stone-600/0 dark:group-hover:border-stone-600/50 transition-colors duration-700" />
                  </div>

                  {/* Corner accents */}
                  <div className="absolute top-4 left-4 w-6 h-6 border-l border-t border-stone-400/0 group-hover:border-stone-400/60 transition-all duration-500 z-20" />
                  <div className="absolute bottom-4 right-4 w-6 h-6 border-r border-b border-stone-400/0 group-hover:border-stone-400/60 transition-all duration-500 z-20" />

                  {/* Image with cinematic zoom */}
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />

                  {/* Gradient overlay - subtle luxury fade */}
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 z-10" />

                  {/* Content overlay */}
                  <div className="absolute inset-0 z-20 flex flex-col justify-end p-5 md:p-6 lg:p-8">
                    {/* Expand icon */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                      <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
                        <Expand className="w-4 h-4 text-white" />
                      </div>
                    </div>

                    {/* Caption content */}
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                      <div className="flex items-center gap-2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                        <span className="text-[0.65rem] uppercase tracking-[0.2em] text-stone-300">
                          {image.location}
                        </span>
                        <span className="w-1 h-1 rounded-full bg-stone-500" />
                        <span className="text-[0.65rem] uppercase tracking-[0.2em] text-stone-400">
                          {image.year}
                        </span>
                      </div>
                      
                      <h3 className="font-serif text-xl md:text-2xl text-white mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-75">
                        {image.caption}
                      </h3>

                      <div className="flex items-center gap-2 text-stone-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150">
                        <span className="text-xs uppercase tracking-widest">View</span>
                        <ArrowUpRight className="w-3 h-3 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </div>
                    </div>
                  </div>

                  {/* Index number - editorial style */}
                  <div className="absolute top-4 left-4 z-20">
                    <span className="text-[0.65rem] font-medium text-stone-500 dark:text-stone-400 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                </div>

                {/* Hover line animation */}
                <div className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-amber-600 to-amber-400 w-0 group-hover:w-full transition-all duration-700 ease-out" />
              </motion.div>
            ))}
          </motion.div>

          {/* Footer note */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-16 lg:mt-24 flex items-center justify-between text-stone-400 text-xs uppercase tracking-[0.2em]"
          >
            <span>© 2024 Portfolio</span>
            <div className="flex items-center gap-4">
              <span>All rights reserved</span>
              <div className="w-12 h-px bg-stone-300 dark:bg-stone-700" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-50 bg-stone-950/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close button */}
            <button 
              className="absolute top-6 right-6 z-50 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal content */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="relative max-w-5xl w-full max-h-[85vh] flex flex-col md:flex-row gap-6 md:gap-8"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image */}
              <div className="relative flex-1 h-[50vh] md:h-[70vh] bg-stone-900 rounded-lg overflow-hidden">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 80vw"
                  priority
                />
              </div>

              {/* Details panel */}
              <div className="md:w-72 flex flex-col justify-center text-white">
                <span className="text-[0.7rem] uppercase tracking-[0.3em] text-stone-400 mb-4">
                  {selectedImage.location} — {selectedImage.year}
                </span>
                <h3 className="font-serif text-3xl md:text-4xl mb-4 leading-tight">
                  {selectedImage.caption}
                </h3>
                <div className="w-12 h-px bg-gradient-to-r from-amber-500 to-transparent mb-6" />
                <p className="text-stone-400 text-sm leading-relaxed font-light">
                  Part of an ongoing exploration of light, space, and the quiet moments that define our experience of place.
                </p>
                
                <div className="mt-8 flex items-center gap-4">
                  <button className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors text-sm">
                    <Eye className="w-4 h-4" />
                    <span className="uppercase tracking-wider text-xs">Details</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}