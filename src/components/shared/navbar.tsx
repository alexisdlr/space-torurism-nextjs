"use client";
import Link from "next/link";
import Logo from "./logo";
import NavLinks from "./navlinks";
import { motion } from "framer-motion";
const Navbar = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      className="relative z-10 w-full shrink-0 py-8 md:pb-0 md:pt-10 md:pl-16"
    >
      <div className="flex items-center md:h-24">
        <Link href="/home" className="relative z-10 shrink-0">
          <Logo size="lg" />
        </Link>

        <div className="relative flex flex-1 items-center">
          <div
            aria-hidden="true"
            className="absolute top-1/2 left-1/16 mr-8 2xl:left-1/12 2xl:w-full 2xl:max-w-3xl hidden h-px w-[500px] -translate-y-1/2 bg-white/35 z-20 lg:block"
          />

          <nav className="relative hidden md:flex h-24 max-w-3xl ml-auto w-full flex-1 items-center justify-end bg-white/4 pr-16 backdrop-blur-[15.552px] md:pl-12 lg:pl-16">
            <NavLinks />
          </nav>
        </div>
      </div>
    </motion.header>
  );
};

export default Navbar;
