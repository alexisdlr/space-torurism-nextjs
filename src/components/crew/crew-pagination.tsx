"use client";

import { cn } from "@/lib/utils";
import type { CrewMember } from "@/lib/crew";

type CrewPaginationProps = {
  crewMembers: CrewMember[];
  activeIndex: number;
  onChange: (index: number) => void;
};

export function CrewPagination({
  crewMembers,
  activeIndex,
  onChange,
}: CrewPaginationProps) {
  return (
    <nav
      aria-label="Crew members"
      className="flex flex-1 items-center justify-center gap-6 lg:gap-10 lg:justify-start"
    >
      {crewMembers.map((member, index) => (
        <button
          key={member.name}
          type="button"
          aria-label={`View ${member.name}`}
          aria-current={activeIndex === index ? "true" : undefined}
          onClick={() => onChange(index)}
          className={cn(
            "size-[15px] rounded-full transition-colors",
            activeIndex === index
              ? "bg-white"
              : "bg-white/25 hover:bg-white/40",
          )}
        />
      ))}
    </nav>
  );
}
