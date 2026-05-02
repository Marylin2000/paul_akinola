import WorkTogetherHero from "@/components/work-together/WorkTogetherHero";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Work Together",
  description: "Start a conversation with Paul Akinola about systems, growth, and transformation.",
};
import WorkTogetherRelevance from "@/components/work-together/WorkTogetherRelevance";
import WorkTogetherMethod from "@/components/work-together/WorkTogetherMethod";
import WorkTogetherContact from "@/components/work-together/WorkTogetherContact";
import WorkTogetherContext from "@/components/work-together/WorkTogetherContext";
import WorkTogetherReturnPaths from "@/components/work-together/WorkTogetherReturnPaths";
import ScrollToHash from "@/components/work-together/ScrollToHash";

import { getPayload } from "payload";
import configPromise from "@payload-config";
import { isProductionBuild } from "@/lib/payload/build";

export default async function WorkTogetherPage() {
  let data = null;

  if (!isProductionBuild()) {
    try {
      const payload = await getPayload({ config: configPromise });
      data = await (payload.findGlobal as any)({ slug: "together" });
    } catch {
      // Components keep their existing fallback copy when Payload is unavailable.
    }
  }

  return (
    <main className="min-h-screen bg-background transition-colors duration-500">
      <ScrollToHash />
      <WorkTogetherHero data={data} />
      <WorkTogetherRelevance data={data} />
      <WorkTogetherMethod data={data} />
      <WorkTogetherContact data={data} />
      <WorkTogetherContext data={data} />
      <WorkTogetherReturnPaths data={data} />

      {/* Footer Transition Line */}
      <section className="bg-stone-50 dark:bg-stone-900/40 py-12 text-center border-t border-rule transition-colors duration-500">
        <p className="font-sans text-[0.65rem] font-medium uppercase tracking-[0.25em] text-foreground/40 px-6">
          Clarity on the systems that shape how we live, lead, and grow.
        </p>
      </section>
    </main>
  );
}
