// app/page.tsx
"use client";

import Hero from "@/components/home/Hero";
import CoreLens from "@/components/home/CoreLens";
import WhatIDo from "@/components/home/WhatIDo";
import Recognition from "@/components/home/Recognition";
import PathSplit from "@/components/home/PathSplit";
import StoriesPreview from "@/components/home/StoriesPreview";
import ThoughtsPreview from "@/components/home/ThoughtsPreview";
import PersonalAnchor from "@/components/home/PersonalAnchor";
import WorkTogetherPreview from "@/components/home/WorkTogetherPreview";

export default function Home() {
  return (
    <main className="bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 transition-colors duration-300">
      <Hero />
      <CoreLens />
      <WhatIDo />
      <Recognition />
      <PathSplit />
      <StoriesPreview />
      <ThoughtsPreview />
      <PersonalAnchor />
      <WorkTogetherPreview />
    </main>
  );
}
