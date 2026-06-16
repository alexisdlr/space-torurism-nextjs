import type { Metadata } from "next";
import Hero from "@/components/home/hero";

export const metadata: Metadata = {
  title: "Home",
  description: "Space tourism agency homepage",
};

export default function HomePage() {
  return <Hero />;
}
