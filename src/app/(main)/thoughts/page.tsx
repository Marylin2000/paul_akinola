import ThoughtsHero from "@/components/thoughts/ThoughtsHero";
import ThoughtsStartHere from "@/components/thoughts/ThoughtsStartHere";
import ThoughtsFeatured from "@/components/thoughts/ThoughtsFeatured";
import ThoughtsJournal from "@/components/thoughts/ThoughtsJournal";
import ThoughtsCrossPaths from "@/components/thoughts/ThoughtsCrossPaths";

export default function ThoughtsPage() {
  return (
    <main className="min-h-screen bg-background transition-colors duration-500">
      <ThoughtsHero />
      <ThoughtsStartHere />
      <ThoughtsFeatured />
      <ThoughtsJournal />
      <ThoughtsCrossPaths />

      {/* Footer Transition Line */}
      <section className="bg-stone-50 dark:bg-stone-900/40 py-12 text-center border-t border-rule transition-colors duration-500">
        <p className="font-sans text-[0.65rem] font-medium uppercase tracking-[0.25em] text-foreground/40 px-6">
          Clarity on the systems that shape how we live, lead, and grow.
        </p>
      </section>
    </main>
  );
}
