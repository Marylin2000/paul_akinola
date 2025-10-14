// app/layout.tsx
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";

export const metadata = {
  title: "Paul Akinola - Growth Systems & GTM Architect",
  description:
    "Expertise in PLG motion, GTM systems, data infrastructure, and applied AI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
