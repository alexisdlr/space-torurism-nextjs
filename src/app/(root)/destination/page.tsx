import DestinationContent from "@/components/destination/destination-content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Destination",
  description: "Pick your space destination",
};

export default function DestinationPage() {
  return <DestinationContent />;
}
