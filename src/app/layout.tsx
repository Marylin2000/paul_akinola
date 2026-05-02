import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import FloatingParticles from "@/components/old/FloatingParticles";
import localFont from "next/font/local";
import Script from "next/script";

const allura = localFont({
  src: "../../public/fonts/01_Fonts/Allura-Regular.ttf",
  variable: "--font-allura",
  display: "swap",
});

const playfair = localFont({
  src: [
    {
      path: "../../public/fonts/01_Fonts/PlayfairDisplay-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/01_Fonts/PlayfairDisplay-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/fonts/01_Fonts/PlayfairDisplay-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/01_Fonts/PlayfairDisplay-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../../public/fonts/01_Fonts/PlayfairDisplay-Black.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../../public/fonts/01_Fonts/PlayfairDisplay-BlackItalic.ttf",
      weight: "900",
      style: "italic",
    },
  ],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Paul Akinola | Systems at Work and in Life",
  description: "Explore how systems shape performance, growth, identity, faith, and meaning. Work, Inner Life, Thoughts, and practical stories from Paul Akinola.",
  keywords: "growth systems, performance, identity, faith, meaning, work life, inner life, transformation, clarity",
  authors: [{ name: "Paul Akinola" }],
  creator: "Paul Akinola",
  publisher: "Paul Akinola",
  metadataBase: new URL("https://paulakinola.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Paul Akinola | Systems at Work and in Life",
    description: "Explore how systems shape performance, growth, identity, faith, and meaning. Work, Inner Life, Thoughts, and practical stories from Paul Akinola.",
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
    title: "Paul Akinola | Systems at Work and in Life",
    description: "Explore how systems shape performance, growth, identity, faith, and meaning.",
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
  icons: {
    icon: '/images/logo/05%20PA_Logo_Master_1.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning className={`${playfair.variable} ${allura.variable} font-sans antialiased bg-background text-foreground transition-colors duration-500`}>
        <Script id="theme-init" strategy="beforeInteractive">
          {`(function(){try{var t=localStorage.getItem('theme');if(t==='dark')document.documentElement.classList.add('dark');else if(t==='light')document.documentElement.classList.remove('dark');else if(window.matchMedia('(prefers-color-scheme: dark)').matches)document.documentElement.classList.add('dark');}catch(e){}})();`}
        </Script>
        <ThemeProvider>
          <FloatingParticles />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
