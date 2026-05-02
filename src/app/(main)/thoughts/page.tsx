import ThoughtsHero from "@/components/thoughts/ThoughtsHero";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Thoughts",
  description: "Reflections on systems, clarity, and the patterns that shape our outcomes.",
};
import ThoughtsStartHere from "@/components/thoughts/ThoughtsStartHere";
import ThoughtsFeatured from "@/components/thoughts/ThoughtsFeatured";
import ThoughtsJournal from "@/components/thoughts/ThoughtsJournal";
import ThoughtsCrossPaths from "@/components/thoughts/ThoughtsCrossPaths";
import { getThoughts } from "@/lib/cms-fetcher";
import { getPayload } from "payload";
import configPromise from "@payload-config";

export default async function ThoughtsPage() {
  const thoughts = await getThoughts();
  let data = null;

  try {
    const payload = await getPayload({ config: configPromise });
    data = await (payload.findGlobal as any)({ slug: "thoughts-page" });
  } catch {
    // Article and component fallbacks keep the page renderable if Payload is unavailable.
  }

  return (
    <main className="min-h-screen bg-background transition-colors duration-500">
      <ThoughtsHero data={data} />
      <ThoughtsStartHere data={data} />
      <ThoughtsFeatured data={data} thoughts={thoughts} />
      <ThoughtsJournal data={data} thoughts={thoughts} />
      <ThoughtsCrossPaths data={data} />

      {/* Footer Transition Line */}
      <section className="bg-stone-50 dark:bg-stone-900/40 py-12 text-center border-t border-rule transition-colors duration-500">
        <p className="font-sans text-[0.65rem] font-medium uppercase tracking-[0.25em] text-foreground/40 px-6">
          {data?.footerLine || "Clarity on the systems that shape how we live, lead, and grow."}
        </p>
      </section>
    </main>
  );
}
