"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";

const easeOut = [0.22, 1, 0.36, 1] as const;

const containerVariants: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  initial: { opacity: 0, y: 24 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easeOut },
  },
};

const buttonVariants: Variants = {
  initial: { opacity: 0, scale: 0.9 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.55, ease: easeOut },
  },
};

const Hero = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      animate="animate"
      className="flex min-h-0 flex-1 w-full lg:items-end p-10 md:p-16 lg:p-24 xl:p-32 2xl:p-40"
    >
      <div className="grid w-full grid-cols-1 items-center lg:items-end gap-10 lg:gap-0 lg:grid-cols-2 md:gap-0">
        <div className="flex w-full lg:max-w-xl flex-col gap-6 items-center lg:gap-0 lg:items-start">
          <motion.span
            variants={itemVariants}
            className="w-full text-center text-base lg:text-left font-barlow-condensed lg:text-xl lg:text-preset-5 uppercase tracking-[2.36px] lg:tracking-[5px] text-blue-300"
          >
            So, you want to travel to
          </motion.span>
          <motion.h1
            variants={itemVariants}
            className="w-full text-center lg:text-left font-bellefair text-8xl uppercase lg:text-preset-1"
          >
            Space
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="mt-6 px-6 lg:px-0 leading-[180%] text-center text-sm lg:text-lg lg:mt-0 font-barlow text-preset-9 lg:text-left lg:text-balance text-blue-300 "
          >
            Let&apos;s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we&apos;ll give you a truly out of
            this world experience!
          </motion.p>
        </div>

        <motion.div
          variants={buttonVariants}
          className="flex justify-center lg:justify-end md:self-center"
        >
          <Link
            href="/destination"
            className="group relative grid size-36 place-items-center rounded-full bg-white font-bellefair text-lg uppercase tracking-[2.86px] text-blue-900 transition-[background-color] duration-300 hover:bg-white/90 md:size-[186px] md:text-[32px] lg:size-[274px]"
          >
            <span className="relative z-10">Explore</span>
            <span
              aria-hidden="true"
              className="absolute inset-0 rounded-full bg-white opacity-0 transition-[transform,opacity] duration-500 ease-out group-hover:scale-[1.55] group-hover:opacity-25"
            />
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;
