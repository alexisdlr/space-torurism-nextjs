"use client";

import { cn } from "@/lib/utils";
import type { Destination } from "@/lib/destinations";

type DestinationTabsProps = {
  destinations: Destination[];
  activeIndex: number;
  onChange: (index: number) => void;
};

export function DestinationTabs({
  destinations,
  activeIndex,
  onChange,
}: DestinationTabsProps) {
  return (
    <nav
      aria-label="Destinations"
      className="flex flex-wrap justify-center gap-6 border-b border-white/20 pb-4 md:justify-start md:gap-0"
    >
      {destinations.map((destination, index) => (
        <button
          key={destination.name}
          type="button"
          aria-current={activeIndex === index ? "page" : undefined}
          onClick={() => onChange(index)}
          className={cn(
            "font-barlow-condensed text-[16px] uppercase tracking-[2.7px] transition-colors md:mr-12 md:border-b-[3px] md:pb-4 md:text-[28px]",
            activeIndex === index
              ? "border-b-[3px] border-white pb-4 text-white"
              : "border-b-[3px] border-transparent pb-4 text-white/50 hover:text-white/80",
          )}
        >
          {destination.name}
        </button>
      ))}
    </nav>
  );
}
