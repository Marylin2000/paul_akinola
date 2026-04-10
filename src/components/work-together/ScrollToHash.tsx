"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * App Router client navigations do not always scroll to the URL hash. Run after
 * /together loads so #contact (and other hashes) still land on the section.
 */
export default function ScrollToHash() {
  const pathname = usePathname();

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (!hash) return;

    const scroll = () => {
      document.getElementById(hash)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    };

    scroll();
    const t = window.setTimeout(scroll, 150);
    return () => clearTimeout(t);
  }, [pathname]);

  return null;
}
