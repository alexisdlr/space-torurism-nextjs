import type { Metadata } from "next";
import CrewContent from "@/components/crew/crew-content";
export const metadata: Metadata = {
  title: "Crew",
  description: "Meet your crew for the trip",
};

export default function CrewPage() {
  return <CrewContent />;
}
