import Navigation from "@/components/ui/Navigation";
import Footer from "@/components/ui/Footer";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: "Paul Akinola | Systems, Clarity, and Growth",
    template: "%s | Paul Akinola"
  },
  description: "I help people understand what is shaping their outcomes, at work and in life.",
  metadataBase: new URL('https://paulakinola.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://paulakinola.com',
    siteName: 'Paul Akinola',
    images: [{
      url: '/images/bg-clean.png',
      width: 1200,
      height: 630,
      alt: 'Paul Akinola'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Paul Akinola',
    description: 'I help people understand what is shaping their outcomes, at work and in life.',
    images: ['/images/bg-clean.png'],
  }
};

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navigation />
      {children}
      <Footer />
    </>
  );
}
