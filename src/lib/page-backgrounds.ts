import type { StaticImageData } from "next/image";

import crewDesktop from "@/app/(root)/crew/background-desktop.webp";
import crewMobile from "@/app/(root)/crew/background-mobile.webp";
import crewTablet from "@/app/(root)/crew/background-tablet.webp";
import destinationDesktop from "@/app/(root)/destination/background-desktop.webp";
import destinationMobile from "@/app/(root)/destination/background-mobile.webp";
import destinationTablet from "@/app/(root)/destination/background-tablet.webp";
import homeDesktop from "@/app/(root)/home/background-desktop.webp";
import homeMobile from "@/app/(root)/home/background-mobile.webp";
import homeTablet from "@/app/(root)/home/background-tablet.webp";
import technologyDesktop from "@/app/(root)/technology/background-desktop.webp";
import technologyMobile from "@/app/(root)/technology/background-mobile.webp";
import technologyTablet from "@/app/(root)/technology/background-tablet.webp";

type PageBackgroundAssets = {
  mobile: StaticImageData;
  tablet: StaticImageData;
  desktop: StaticImageData;
};

export const pageBackgrounds: Record<string, PageBackgroundAssets> = {
  "/home": {
    mobile: homeMobile,
    tablet: homeTablet,
    desktop: homeDesktop,
  },
  "/destination": {
    mobile: destinationMobile,
    tablet: destinationTablet,
    desktop: destinationDesktop,
  },
  "/crew": {
    mobile: crewMobile,
    tablet: crewTablet,
    desktop: crewDesktop,
  },
  "/technology": {
    mobile: technologyMobile,
    tablet: technologyTablet,
    desktop: technologyDesktop,
  },
};

export function getPageBackground(pathname: string) {
  return pageBackgrounds[pathname] ?? pageBackgrounds["/home"];
}
