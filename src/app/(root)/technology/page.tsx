import TechnologyContent from "@/components/technology/technology-content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Technology",
  description: "Space launch vehicle, capsule, and spaceport technology",
};

export default function TechnologyPage() {
  return <TechnologyContent />;
}
