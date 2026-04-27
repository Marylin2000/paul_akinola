import BuildHero from "@/components/build/BuildHero";
import SystemStories from "@/components/build/SystemStories";
import WhatIBuild from "@/components/build/WhatIBuild";
import ProofPoints from "@/components/build/ProofPoints";
import ToolsBuilt from "@/components/build/ToolsBuilt";
import BuildCTA from "@/components/build/BuildCTA";

import { getPayload } from "payload";
import configPromise from "@payload-config";

export const metadata = {
  title: "Builds | Paul Akinola",
  description: "A closer look at the revenue systems, growth architecture, and GTM workflows I design.",
};

export default async function BuildPage() {
  const payload = await getPayload({ config: configPromise });
  const data = await (payload.findGlobal as any)({
    slug: 'build',
  });

  return (
    <main className="min-h-screen bg-background transition-colors duration-500">
      <BuildHero data={data} />
      <SystemStories data={data} />
      <WhatIBuild data={data} />
      <ProofPoints data={data} />
      <ToolsBuilt data={data} />
      <BuildCTA data={data} />

      {/* Footer Transition Line */}
      <section className="bg-stone-50 dark:bg-stone-900/40 py-12 text-center border-t border-rule transition-colors duration-500">
        <p className="font-sans text-[0.65rem] font-medium uppercase tracking-[0.25em] text-foreground/40 px-6">
          Architecture that connects growth to revenue and signal to action.
        </p>
      </section>
    </main>
  );
}
