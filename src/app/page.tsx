// app/page.tsx
"use client";

import Navigation from "@/components/ui/Navigation";
import Hero from "@/components/ui/Hero";
import AppliedAI from "@/components/ui/AppliedAi";
import FeaturedProjects from "@/components/ui/FeaturedProjects";
import GrowthSystems from "@/components/ui/GrowthSystems";
import GTMSystems from "@/components/ui/GMTSystems";
import ExpansionStrategy from "@/components/ui/ExpasionStrategy";
import Infrastructure from "@/components/ui/Infrastructure";
import Footer from "@/components/ui/Footer";
import Blog from "@/components/ui/Blog";

export default function Home() {
  return (
    <main className="bg-white dark:bg-slate-900 text-gray-900 dark:text-white transition-colors duration-300">
      <Navigation />
      <Hero />
      <FeaturedProjects />
      <GrowthSystems />
      <GTMSystems />
      <ExpansionStrategy />
      <Infrastructure />
      <AppliedAI />
      <Blog />
      <Footer />
    </main>
  );
}
