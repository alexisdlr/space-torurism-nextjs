"use client";

import { cn } from "@/lib/utils";
import { navLinks } from "@/lib/nav-links";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
    <ul className="flex items-center gap-8 lg:gap-12">
      {navLinks.map((link) => (
        <li key={link.href}>
          <NavLink {...link} isActive={isActive(link.href)} />
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;

export function MobileNavLinks({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;

  return (
    <ul className="flex flex-col">
      {navLinks.map((link) => (
        <li key={link.href}>
          <Link
            href={link.href}
            onClick={onNavigate}
            className={cn(
              "flex items-center gap-4 border-r-[3px] py-4 pr-6 font-barlow-condensed text-[28px] uppercase tracking-[2px] text-white transition-colors hover:text-accent",
              isActive(link.href) ? "border-r-white" : "border-r-transparent",
            )}
          >
            <span className="font-bold">
              {link.index.toString().padStart(2, "0")}
            </span>
            <span className="font-normal">{link.label}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
