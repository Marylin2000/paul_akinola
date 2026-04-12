import Header from "@/components/old/Header";
import Footer from "@/components/ui/Footer";

export default function OldLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
