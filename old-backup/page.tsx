// app/page.tsx
"use client";

import Navigation from "@/components/ui/Navigation";
import Hero from "@/components/old/Hero";
import AppliedAI from "@/components/old/AppliedAi";
import FeaturedProjects from "@/components/old/FeaturedProjects";
import GrowthSystems from "@/components/old/GrowthSystems";
import GTMSystems from "@/components/old/GTMSystems";
import ExpansionStrategy from "@/components/old/ExpansionStrategy";
import Infrastructure from "@/components/old/Infrastructure";
import ToolsTemplates from "@/components/old/ToolsTemplates";
import AboutContact from "@/components/old/AboutContact";
import Blog from "@/components/old/Blog";

export default function Home() {
  return (
    <main className="bg-white dark:bg-slate-900 text-gray-900 dark:text-white transition-colors duration-300">
      <Hero />
      <FeaturedProjects />
      <GrowthSystems />
      <GTMSystems />
      <ExpansionStrategy />
      <Infrastructure />
      <AppliedAI />
      <ToolsTemplates />
      <Blog />
      <AboutContact />
    </main>
  );
}