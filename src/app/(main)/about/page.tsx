import AboutHero from "@/components/about/AboutHero";
import AboutWorldview from "@/components/about/AboutWorldview";
import AboutJourney from "@/components/about/AboutJourney";
import AboutValues from "@/components/about/AboutValues";
import AboutGallery from "@/components/about/AboutGallery";
import AboutMechanics from "@/components/about/AboutMechanics";
import AboutSiteMeaning from "@/components/about/AboutSiteMeaning";
import AboutNextPaths from "@/components/about/AboutNextPaths";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About Paul Akinola",
  description: "Learn more about Paul Akinola, his worldview, and his work at the intersection of systems, clarity, and growth.",
};

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Paul Akinola",
    "url": "https://paulakinola.com/about",
    "jobTitle": "Systems Architect & Growth Strategist",
    "sameAs": [
      "https://www.linkedin.com/in/paulakinola/",
      "https://www.instagram.com/paulakinolatm/",
      "https://www.facebook.com/PaulAkinolaTM/",
      "https://www.youtube.com/@PaulAkinolaTM"
    ]
  };

  return (
    <main className="min-h-screen bg-background transition-colors duration-500">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AboutHero />
      <AboutWorldview />
      <AboutJourney />
      <AboutValues />
      <AboutGallery />
      <AboutMechanics />
      <AboutSiteMeaning />
      <AboutNextPaths />

      {/* Closing Line */}
      <section className="bg-background py-24 text-center border-t border-rule transition-colors duration-500">
        <div className="container mx-auto px-6">
          <p className="font-serif text-[clamp(1.1rem,2vw,1.5rem)] italic text-foreground/30 max-w-2xl mx-auto">
            I’m still learning. Still paying attention. Still connecting the dots.
          </p>
        </div>
      </section>

      {/* Footer Transition Line */}
      <section className="bg-stone-50 dark:bg-stone-900/40 py-12 text-center border-t border-rule transition-colors duration-500">
        <p className="font-sans text-[0.65rem] font-medium uppercase tracking-[0.25em] text-foreground/40 px-6">
          Clarity on the systems that shape how we live, lead, and grow.
        </p>
      </section>
    </main>
  );
}