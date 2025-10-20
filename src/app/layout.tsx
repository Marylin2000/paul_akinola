// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import Navigation from "@/components/ui/Navigation";
import Footer from "@/components/ui/Footer";

export const metadata: Metadata = {
  title: "Paul Akinola - Growth Systems & GTM Architect",
  description: "Expert in PLG motion, GTM systems, data infrastructure, and applied AI. Building scalable growth engines that transform customer acquisition, activation, and expansion.",
  keywords: "growth systems, GTM architect, PLG motion, MarVis AI, signal routing, product-led growth, customer expansion, data infrastructure, attribution modeling",
  authors: [{ name: "Paul Akinola" }],
  creator: "Paul Akinola",
  publisher: "Paul Akinola",
  metadataBase: new URL("https://paulakinola.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Paul Akinola - Growth Systems & GTM Architect",
    description: "Expert in PLG motion, GTM systems, data infrastructure, and applied AI. Building scalable growth engines that transform customer acquisition, activation, and expansion.",
    url: "https://paulakinola.com",
    siteName: "Paul Akinola Portfolio",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Paul Akinola - Growth Systems & GTM Architect",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Paul Akinola - Growth Systems & GTM Architect",
    description: "Expert in PLG motion, GTM systems, data infrastructure, and applied AI.",
    images: ["/images/og-image.png"],
    creator: "@paulakinola",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="anntialiased bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 transition-colors duration-300">

        <ThemeProvider>
          
        <Navigation/>
          {children}
        <Footer/>
          
          </ThemeProvider>
      </body>
    </html>
  );
}
