import WorkTogetherHero from "@/components/work-together/WorkTogetherHero";
import WorkTogetherRelevance from "@/components/work-together/WorkTogetherRelevance";
import WorkTogetherMethod from "@/components/work-together/WorkTogetherMethod";
import WorkTogetherContact from "@/components/work-together/WorkTogetherContact";
import WorkTogetherContext from "@/components/work-together/WorkTogetherContext";
import WorkTogetherReturnPaths from "@/components/work-together/WorkTogetherReturnPaths";

export default function WorkTogetherPage() {
  return (
    <main className="min-h-screen bg-background transition-colors duration-500">
      <WorkTogetherHero />
      <WorkTogetherRelevance />
      <WorkTogetherMethod />
      <WorkTogetherContact />
      <WorkTogetherContext />
      <WorkTogetherReturnPaths />

      {/* Footer Transition Line */}
      <section className="bg-stone-50 dark:bg-stone-900/40 py-12 text-center border-t border-rule transition-colors duration-500">
        <p className="font-sans text-[0.65rem] font-medium uppercase tracking-[0.25em] text-foreground/40 px-6">
          Clarity on the systems that shape how we live, lead, and grow.
        </p>
      </section>
    </main>
  );
}
