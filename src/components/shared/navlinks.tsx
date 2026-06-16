"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  {
    index: 0,
    label: "Home",
    href: "/home",
  },
  {
    index: 1,
    label: "Destination",
    href: "/destination",
  },
  {
    index: 2,
    label: "Crew",
    href: "/crew",
  },
  {
    index: 3,
    label: "Technology",
    href: "/technology",
  },
];

const NavLink = ({
  index,
  label,
  href,
  isActive,
}: {
  index: number;
  label: string;
  href: string;
  isActive: boolean;
}) => {
  return (
    <Link
      href={href}
      className={cn(
        "flex h-24 items-center font-barlow-condensed text-preset-8 uppercase tracking-widest text-white transition-colors hover:text-accent",
        isActive && "border-b-2 border-white",
      )}
    >
      <span className="mr-3 font-bold">
        {index.toString().padStart(2, "0")}
      </span>
      <span className="font-normal">{label}</span>
    </Link>
  );
};

const NavLinks = () => {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;

  return (
    <div className="flex items-center  gap-8 lg:gap-12">
      {navLinks.map((link) => (
        <NavLink key={link.href} {...link} isActive={isActive(link.href)} />
      ))}
    </div>
  );
};

export default NavLinks;
