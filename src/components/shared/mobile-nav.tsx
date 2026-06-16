"use client";

import { MobileNavLinks } from "@/components/shared/navlinks";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const easeOut = [0.22, 1, 0.36, 1] as const;

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls="mobile-nav"
        onClick={() => setIsOpen((open) => !open)}
        className="relative z-50 grid size-6 place-items-center"
      >
        <Image
          src={
            isOpen
              ? "/assets/shared/icon-close.svg"
              : "/assets/shared/icon-hamburger.svg"
          }
          alt=""
          width={24}
          height={21}
          aria-hidden="true"
        />
        <span className="sr-only">{isOpen ? "Close menu" : "Open menu"}</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.button
              type="button"
              aria-label="Close menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-40 bg-blue-900/50"
              onClick={() => setIsOpen(false)}
            />

            <motion.nav
              id="mobile-nav"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35, ease: easeOut }}
              className="fixed inset-y-0 right-0 z-40 flex w-[min(100%-3rem,20rem)] flex-col bg-white/4 px-8 pt-32 backdrop-blur-[15.552px]"
            >
              <MobileNavLinks onNavigate={() => setIsOpen(false)} />
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
