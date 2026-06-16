import type { Metadata } from "next";
import { PageBackground } from "@/components/shared/page-background";
import bgDesktop from "./background-desktop.webp";
import bgMobile from "./background-mobile.webp";
import bgTablet from "./background-tablet.webp";

export const metadata: Metadata = {
  title: "Technology",
  description: "Space launch vehicle, capsule, and spaceport technology",
};

export default function TechnologyPage() {
  return (
    <>
      <PageBackground mobile={bgMobile} tablet={bgTablet} desktop={bgDesktop} />
      <div className="relative z-10 flex flex-1 flex-col">{/* content */}</div>
    </>
  );
}
