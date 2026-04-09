"use client";

import WorkHero from "@/components/work/WorkHero";
import WorkSurfaceRoot from "@/components/work/WorkSurfaceRoot";
import WorkReframes from "@/components/work/WorkReframes";
import WorkTheShift from "@/components/work/WorkTheShift";
import WorkSystemStories from "@/components/work/WorkSystemStories";
import WorkGoDeeper from "@/components/work/WorkGoDeeper";
import WorkNextPaths from "@/components/work/WorkNextPaths";

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-background transition-colors duration-500">
      <WorkHero />
      <WorkSurfaceRoot />
      <WorkReframes />
      <WorkTheShift />
      <WorkSystemStories />
      <WorkGoDeeper />
      <WorkNextPaths />

      {/* Soulful Exit Line */}
      <section className="bg-background py-24 text-center border-t border-rule transition-colors duration-500">
        <p className="font-serif text-[clamp(1.1rem,2vw,1.4rem)] italic text-foreground/20 px-6">
          Clarity on the systems we inhabit is the first step toward changing them.
        </p>
      </section>
      
      {/* Footer transition line as per spec */}
      <div className="border-t border-stone-200 py-12 text-center dark:border-stone-800">
        <p className="text-sm font-light tracking-wide text-stone-400 dark:text-stone-500">
          Clarity on the systems that shape how we live, lead, and grow.
        </p>
      </div>
    </main>
  );
}
