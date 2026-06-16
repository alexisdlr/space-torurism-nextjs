import type { Metadata } from "next";
import { PageBackground } from "@/components/shared/page-background";
import bgDesktop from "./background-desktop.webp";
import bgMobile from "./background-mobile.webp";
import bgTablet from "./background-tablet.webp";

export const metadata: Metadata = {
  title: "Home",
  description: "Space tourism agency homepage",
};

export default function HomePage() {
  return (
    <>
      <PageBackground
        mobile={bgMobile}
        tablet={bgTablet}
        desktop={bgDesktop}
        priority
      />
      <div className=" flex flex-1 flex-col">{/* content */}</div>
    </>
  );
}
