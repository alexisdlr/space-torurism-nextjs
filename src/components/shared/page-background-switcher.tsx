"use client";

import { getPageBackground } from "@/lib/page-backgrounds";
import { usePathname } from "next/navigation";
import { PageBackground } from "./page-background";

export function PageBackgroundSwitcher() {
  const pathname = usePathname();
  const backgrounds = getPageBackground(pathname);

  return (
    <PageBackground
      mobile={backgrounds.mobile}
      tablet={backgrounds.tablet}
      desktop={backgrounds.desktop}
      priority={pathname === "/home"}
    />
  );
}
