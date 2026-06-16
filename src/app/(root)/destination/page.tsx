import type { Metadata } from "next";
import { PageBackground } from "@/components/shared/page-background";
import bgDesktop from "./background-desktop.webp";
import bgMobile from "./background-mobile.webp";
import bgTablet from "./background-tablet.webp";

export const metadata: Metadata = {
  title: "Destination",
  description: "Pick your space destination",
};

export default function DestinationPage() {
  return (
    <>
      <PageBackground mobile={bgMobile} tablet={bgTablet} desktop={bgDesktop} />
      <div className="relative z-10 flex flex-1 flex-col">{/* content */}</div>
    </>
  );
}
