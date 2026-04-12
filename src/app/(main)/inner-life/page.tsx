import InnerLifeHero from "@/components/inner-life/InnerLifeHero";
import InnerLifeSetup from "@/components/inner-life/InnerLifeSetup";
import InnerLifeReframes from "@/components/inner-life/InnerLifeReframes";
import InnerLifeShift from "@/components/inner-life/InnerLifeShift";
import InnerLifeStories from "@/components/inner-life/InnerLifeStories";
import InnerLifeGoDeeper from "@/components/inner-life/InnerLifeGoDeeper";
import InnerLifeNextPaths from "@/components/inner-life/InnerLifeNextPaths";

export default function InnerLifePage() {
  return (
    <main className="min-h-screen bg-background transition-colors duration-500">
      <InnerLifeHero />
      <InnerLifeSetup />
      <InnerLifeReframes />
      <InnerLifeShift />
      <InnerLifeStories />
      <InnerLifeGoDeeper />
      <InnerLifeNextPaths />

      {/* Soulful Exit Line */}
      <section className="bg-background py-24 text-center border-t border-rule transition-colors duration-500">
        <p className="font-serif text-[clamp(1.1rem,2vw,1.4rem)] italic text-foreground/20 px-6">
          Clarity on the systems that shape how we live, lead, and grow.
        </p>
      </section>
    </main>
  );
}
