import BuildHero from "@/components/build/BuildHero";
import SystemStories from "@/components/build/SystemStories";
import WhatIBuild from "@/components/build/WhatIBuild";
import ProofPoints from "@/components/build/ProofPoints";
import ToolsBuilt from "@/components/build/ToolsBuilt";
import BuildCTA from "@/components/build/BuildCTA";

import { getPayload } from "payload";
import configPromise from "@payload-config";
import { buildDefault } from "@/lib/defaults-cms";
import type { BuildData } from "@/lib/types-cms";
import { isProductionBuild } from "@/lib/payload/build";

export const metadata = {
  title: "Builds | Paul Akinola",
  description: "A closer look at the revenue systems, growth architecture, and GTM workflows I design.",
};

export default async function BuildPage() {
  let data: BuildData = buildDefault;

  if (!isProductionBuild()) {
    try {
      const payload = await getPayload({ config: configPromise });
      const cmsData = await (payload.findGlobal as any)({ slug: "build" });
      // Payload globals can exist before every array is seeded, so merge shallow CMS edits over stable defaults.
      data = {
        ...buildDefault,
        ...cmsData,
        buildItems: cmsData?.buildItems?.length ? cmsData.buildItems : buildDefault.buildItems,
        statsList: cmsData?.statsList?.length ? cmsData.statsList : buildDefault.statsList,
        industriesList: cmsData?.industriesList?.length ? cmsData.industriesList : buildDefault.industriesList,
        storiesList: cmsData?.storiesList?.length ? cmsData.storiesList : buildDefault.storiesList,
        toolsList: cmsData?.toolsList?.length ? cmsData.toolsList : buildDefault.toolsList,
      };
    } catch {
      // Keep the page renderable in local/dev environments where Payload or MongoDB is unavailable.
    }
  }

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
