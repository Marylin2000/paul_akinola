import Navigation from "@/components/ui/Navigation";
import Footer from "@/components/ui/Footer";
import { getPayload } from "payload";
import configPromise from "@payload-config";
import { isProductionBuild } from "@/lib/payload/build";

export default async function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  let navData = null;

  if (!isProductionBuild()) {
    try {
      const payload = await getPayload({ config: configPromise });
      navData = await (payload.findGlobal as any)({ slug: "navigation" });
    } catch {
      // Navigation keeps its existing fallback labels when Payload is unavailable.
    }
  }

  return (
    <>
      <Navigation data={navData} />
      {children}
      <Footer />
    </>
  );
}
