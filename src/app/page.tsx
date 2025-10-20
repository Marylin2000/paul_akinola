// app/page.tsx
"use client";

import Hero from "@/components/ui/Hero";
import StructuredData from "@/components/StructuredData";
import AppliedAI from "@/components/ui/AppliedAi";
import FeaturedProjects from "@/components/ui/FeaturedProjects";
import GrowthSystems from "@/components/ui/GrowthSystems";
import GTMSystems from "@/components/ui/GTMSystems";
import ExpansionStrategy from "@/components/ui/ExpansionStrategy";
import Infrastructure from "@/components/ui/Infrastructure";
import ToolsTemplates from "@/components/ui/ToolsTemplates";
import Blog from "@/components/ui/Blog";

export default function Home() {
  return (
    <main className="bg-white dark:bg-slate-900 text-gray-900 dark:text-white transition-colors duration-300">
      <StructuredData />
      <Hero />
      <FeaturedProjects />
      <GrowthSystems />
      <GTMSystems />
      <ExpansionStrategy />
      <Infrastructure />
      <AppliedAI />
      <ToolsTemplates />
      <Blog />
    </main>
  );
}
