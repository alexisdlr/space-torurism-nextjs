"use client";

import { cn } from "@/lib/utils";
import type { Technology } from "@/lib/technology";

type TechnologyTabsProps = {
  technologies: Technology[];
  activeIndex: number;
  onChange: (index: number) => void;
};

export function TechnologyTabs({
  technologies,
  activeIndex,
  onChange,
}: TechnologyTabsProps) {
  return (
    <nav
      aria-label="Technologies"
      className="flex flex-row justify-center gap-4 lg:flex-col lg:items-start lg:gap-8"
    >
      {technologies.map((technology, index) => {
        const isActive = activeIndex === index;
        const tabNumber = String(index + 1).padStart(2, "0");

        return (
          <button
            key={technology.name}
            type="button"
            aria-current={isActive ? "true" : undefined}
            onClick={() => onChange(index)}
            className="group flex items-center gap-8 transition-colors"
          >
            <span
              className={cn(
                "flex size-[35px] shrink-0 items-center justify-center rounded-full border font-bellefair text-base transition-colors lg:size-15 lg:text-lg",
                isActive
                  ? "border-white bg-white text-blue-900"
                  : "border-white/25 text-white group-hover:border-white",
              )}
            >
              {tabNumber}
            </span>
          </button>
        );
      })}
    </nav>
  );
}
