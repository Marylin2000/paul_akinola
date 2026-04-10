"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const leftImage ="/images/img3.png"
const rightImage =
  "/images/img4.png";

function SideImage({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return (
    <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl border border-stone-200/80 bg-stone-100/30 shadow-sm dark:border-stone-700/80 dark:bg-stone-800/30">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 1024px) 42vw, 240px"
        className="object-cover"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-stone-900/10 to-transparent dark:from-stone-950/25"
        aria-hidden
      />
    </div>
  );
}

export default function PersonalAnchor() {
  return (
    <section
      id="personal-anchor"
      className="bg-stone-50 py-24 dark:bg-stone-950 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:justify-between lg:gap-10 xl:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 w-full max-w-2xl flex-1 text-center lg:order-2 lg:mx-auto lg:px-4"
          >
            <h2 className="mb-8 font-serif text-2xl font-medium tracking-tight text-stone-900 dark:text-white md:text-3xl">
              This is where I think, write, and build.
            </h2>
            <p className="mx-auto mb-12 max-w-2xl text-lg font-light leading-relaxed text-stone-600 dark:text-stone-400 md:text-xl">
              I work at the intersection of systems, clarity, growth, and inner
              life. This site brings those worlds together, from revenue systems
              and organisational design to identity, faith, and the deeper
              patterns that shape how we live.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center justify-center rounded-full border border-stone-200 bg-white px-8 py-3 font-medium text-stone-900 transition-colors hover:bg-stone-50 dark:border-stone-800 dark:bg-stone-900 dark:text-white dark:hover:bg-stone-800"
            >
              About Paul Akinola
            </Link>
          </motion.div>

          {/* One row of two images on mobile; unwraps on lg so images sit left/right of copy */}
          <div className="order-2 flex w-full gap-4 sm:gap-6 lg:contents">
            <motion.div
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="w-1/2 lg:order-1 lg:w-[min(26%,240px)] lg:shrink-0"
            >
              <SideImage
                src={leftImage}
                alt="Calm horizon and space for reflection"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="w-1/2 lg:order-3 lg:w-[min(26%,240px)] lg:shrink-0"
            >
              <SideImage
                src={rightImage}
                alt="Abstract light and form"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
