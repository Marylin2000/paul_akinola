import WorkHero from "@/components/work/WorkHero";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Systems at Work",
  description: "Explore how systems shape performance, decisions, revenue, and growth in organisations.",
};
import WorkSurfaceRoot from "@/components/work/WorkSurfaceRoot";
import WorkReframes from "@/components/work/WorkReframes";
import WorkSystemStories from "@/components/work/WorkSystemStories";
import WorkGoDeeper from "@/components/work/WorkGoDeeper";

import { getPayload } from "payload";
import configPromise from "@payload-config";
import { isProductionBuild } from "@/lib/payload/build";

export default async function WorkPage() {
  let data = null;

  if (!isProductionBuild()) {
    try {
      const payload = await getPayload({ config: configPromise });
      data = await (payload.findGlobal as any)({ slug: "work" });
    } catch {
      // Components keep their existing fallback copy when Payload is unavailable.
    }
  }

  return (
    <main className="min-h-screen bg-background transition-colors duration-500">
      <WorkHero data={data} />
      <WorkSurfaceRoot data={data} />
      <WorkReframes data={data} />
      <WorkSystemStories data={data} />
      <WorkGoDeeper data={data} />
      
      {/* Footer transition line as per spec */}
      <div className="border-t border-stone-200 py-12 text-center dark:border-stone-800">
        <p className="text-sm font-light tracking-wide text-stone-400 dark:text-stone-500">
          Clarity on the systems that shape how we live, lead, and grow.
        </p>
      </div>
    </main>
  );
}
