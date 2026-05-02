import InnerLifeHero from "@/components/inner-life/InnerLifeHero";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Systems in Life",
  description: "Explore how inner systems shape behaviour, resilience, identity, faith, and meaning.",
};
import InnerLifeSetup from "@/components/inner-life/InnerLifeSetup";
import InnerLifeReframes from "@/components/inner-life/InnerLifeReframes";
import InnerLifeShift from "@/components/inner-life/InnerLifeShift";
import InnerLifeStories from "@/components/inner-life/InnerLifeStories";
import InnerLifeGoDeeper from "@/components/inner-life/InnerLifeGoDeeper";

import { getPayload } from "payload";
import configPromise from "@payload-config";
import { isProductionBuild } from "@/lib/payload/build";

export const dynamic = "force-dynamic";

export default async function InnerLifePage() {
  let data = null;

  if (!isProductionBuild()) {
    try {
      const payload = await getPayload({ config: configPromise });
      data = await (payload.findGlobal as any)({ slug: "inner-life" });
    } catch {
      // Components keep their existing fallback copy when Payload is unavailable.
    }
  }

  return (
    <main className="min-h-screen bg-background transition-colors duration-500">
      <InnerLifeHero data={data} />
      <InnerLifeSetup data={data} />
      <InnerLifeReframes data={data} />
      <InnerLifeShift data={data} />
      <InnerLifeStories data={data} />
      <InnerLifeGoDeeper data={data} />

      <section className="bg-stone-50 dark:bg-stone-900/40 py-12 text-center border-t border-rule transition-colors duration-500">
        <p className="font-sans text-[0.65rem] font-medium uppercase tracking-[0.25em] text-foreground/40 px-6">
          {data?.footerLine || "Clarity on the systems that shape how we live, lead, and grow."}
        </p>
      </section>
    </main>
  );
}
