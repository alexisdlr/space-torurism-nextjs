import HeroDestination from "@/components/destination/hero-destination";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Destination",
  description: "Pick your space destination",
};

export default function DestinationPage() {
  return <HeroDestination />;
}
