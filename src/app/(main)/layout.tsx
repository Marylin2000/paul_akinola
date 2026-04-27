import Navigation from "@/components/ui/Navigation";
import Footer from "@/components/ui/Footer";

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
