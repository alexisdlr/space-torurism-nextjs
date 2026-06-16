"use client";

import { MobileNav } from "@/components/shared/mobile-nav";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Logo from "./logo";
import NavLinks from "./navlinks";

const easeOut = [0.22, 1, 0.36, 1] as const;

const Navbar = () => {
  const pathname = usePathname();

  return (
    <motion.header
      key={pathname}
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: easeOut }}
      className="relative z-50 w-full shrink-0 px-6 py-8 md:px-0 md:pb-0 md:pt-10 md:pl-16"
    >
      <div className="flex items-center justify-between md:h-24">
        <Link href="/home" className="relative z-50 shrink-0">
          <Logo className="block md:hidden" size="sm" />
          <Logo className="hidden md:block" size="lg" />
        </Link>

        <div className="relative hidden flex-1 items-center md:flex">
          <div
            aria-hidden="true"
            className="absolute top-1/2 left-1/16 mr-8 hidden h-px w-[500px] -translate-y-1/2 bg-white/35 xl:block 2xl:left-1/12 2xl:w-full 2xl:max-w-3xl"
          />

          <nav className="relative ml-auto flex h-24 w-full max-w-3xl flex-1 items-center justify-end bg-white/4 pr-16 backdrop-blur-[15.552px] md:pl-12 lg:pl-16">
            <NavLinks />
          </nav>
        </div>

        <MobileNav />
      </div>
    </motion.header>
  );
};

export default Navbar;
