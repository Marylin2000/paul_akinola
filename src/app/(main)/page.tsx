// app/(main)/page.tsx
import Hero from "@/components/home/Hero";
import CoreLens from "@/components/home/CoreLens";
import WhatIDo from "@/components/home/WhatIDo";
import Recognition from "@/components/home/Recognition";
import PathSplit from "@/components/home/PathSplit";
import StoriesPreview from "@/components/home/StoriesPreview";
import ThoughtsPreview from "@/components/home/ThoughtsPreview";
import PersonalAnchor from "@/components/home/PersonalAnchor";
import WorkTogetherPreview from "@/components/home/WorkTogetherPreview";
import { getPayload } from "payload";
import config from "@payload-config";
import { isProductionBuild } from "@/lib/payload/build";

export default async function Home() {
  // Fetch CMS globals, fall back gracefully on error
  let heroData = null;
  let offeringsData = null;
  let recognitionData = null;
  let personalAnchorData = null;

  if (!isProductionBuild()) {
    try {
      const payload = await getPayload({ config });
      const [hero, offerings, recognition, personalAnchor] = await Promise.all([
        (payload.findGlobal as any)({ slug: "hero" }).catch(() => null),
        (payload.findGlobal as any)({ slug: "offerings" }).catch(() => null),
        (payload.findGlobal as any)({ slug: "recognition" }).catch(() => null),
        (payload.findGlobal as any)({ slug: "personal-anchor" }).catch(() => null),
      ]);
      heroData = hero;
      offeringsData = (offerings as { offerings?: unknown[] } | null)?.offerings ?? null;
      recognitionData = recognition;
      personalAnchorData = personalAnchor;
    } catch {
      // If Payload/DB is unavailable, components fall back to hardcoded defaults
    }
  }

  return (
    <main className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Hero data={heroData} />
      <CoreLens />
      <WhatIDo offerings={offeringsData as Parameters<typeof WhatIDo>[0]["offerings"]} />
      <Recognition data={recognitionData} />
      <PathSplit />
      <StoriesPreview />
      <ThoughtsPreview />
      <PersonalAnchor data={personalAnchorData} />
      <WorkTogetherPreview />
    </main>
  );
}
