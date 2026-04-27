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
import InnerLifeNextPaths from "@/components/inner-life/InnerLifeNextPaths";

import { getPayload } from "payload";
import configPromise from "@payload-config";

export default async function InnerLifePage() {
  const payload = await getPayload({ config: configPromise });
  const data = await (payload.findGlobal as any)({
    slug: 'inner-life',
  });

  return (
    <main className="min-h-screen bg-background transition-colors duration-500">
      <InnerLifeHero data={data} />
      <InnerLifeSetup data={data} />
      <InnerLifeReframes data={data} />
      <InnerLifeShift data={data} />
      <InnerLifeStories data={data} />
      <InnerLifeGoDeeper data={data} />
      <InnerLifeNextPaths data={data} />

      {/* Soulful Exit Line */}
      <section className="bg-background py-24 text-center border-t border-rule transition-colors duration-500">
        <p className="font-serif text-[clamp(1.1rem,2vw,1.4rem)] italic text-foreground/20 px-6">
          Clarity on the systems that shape how we live, lead, and grow.
        </p>
      </section>
    </main>
  );
}
