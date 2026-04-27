import WorkHero from "@/components/work/WorkHero";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Systems at Work",
  description: "Explore how systems shape performance, decisions, revenue, and growth in organisations.",
};
import WorkSurfaceRoot from "@/components/work/WorkSurfaceRoot";
import WorkReframes from "@/components/work/WorkReframes";
import WorkTheShift from "@/components/work/WorkTheShift";
import WorkSystemStories from "@/components/work/WorkSystemStories";
import WorkGoDeeper from "@/components/work/WorkGoDeeper";
import WorkNextPaths from "@/components/work/WorkNextPaths";

import { getPayload } from "payload";
import configPromise from "@payload-config";

export default async function WorkPage() {
  const payload = await getPayload({ config: configPromise });
  const data = await (payload.findGlobal as any)({
    slug: 'work',
  });

  return (
    <main className="min-h-screen bg-background transition-colors duration-500">
      <WorkHero data={data} />
      <WorkSurfaceRoot data={data} />
      <WorkReframes data={data} />
      <WorkTheShift data={data} />
      <WorkSystemStories data={data} />
      <WorkGoDeeper data={data} />
      <WorkNextPaths data={data} />

      {/* Soulful Exit Line */}
      <section className="bg-background py-24 text-center border-t border-rule transition-colors duration-500">
        <p className="font-serif text-[clamp(1.1rem,2vw,1.4rem)] italic text-foreground/20 px-6">
          Clarity on the systems we inhabit is the first step toward changing them.
        </p>
      </section>
      
      {/* Footer transition line as per spec */}
      <div className="border-t border-stone-200 py-12 text-center dark:border-stone-800">
        <p className="text-sm font-light tracking-wide text-stone-400 dark:text-stone-500">
          Clarity on the systems that shape how we live, lead, and grow.
        </p>
      </div>
    </main>
  );
}
