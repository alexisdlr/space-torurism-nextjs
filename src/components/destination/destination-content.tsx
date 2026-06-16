"use client";

import { DestinationTabs } from "@/components/destination/destination-tabs";
import { PlanetViewer } from "@/components/destination/planet-viewer";
import { destinations } from "@/lib/destinations";
import { motion, type Variants } from "framer-motion";
import { useState } from "react";
import AnimatedTittle from "../shared/animated-tittle";

const title = "Pick your destination";
const easeOut = [0.22, 1, 0.36, 1] as const;

const contentVariants: Variants = {
  initial: { opacity: 0, y: 16 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: easeOut },
  },
};

const DestinationContent = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeDestination = destinations[activeIndex];

  return (
    <div className="flex w-full flex-col p-10 pb-24 md:p-16 md:pb-16 lg:min-h-full lg:flex-1 lg:pb-0 lg:p-24 xl:px-38 xl:py-26 2xl:p-20">
      <div className="flex justify-center md:justify-start mb-1 lg:mb-0 h-fit">
        <AnimatedTittle title={title} number="01" />
      </div>

      <div className="my-4 grid w-full grid-cols-1 items-center gap-10 lg:my-34 lg:grid-cols-2 lg:gap-32">
        <PlanetViewer
          key={activeDestination.modelPath}
          modelPath={activeDestination.modelPath}
          name={activeDestination.name}
        />

        <motion.div
          key={activeDestination.name}
          variants={contentVariants}
          initial="initial"
          animate="animate"
          className="flex flex-col items-center text-center lg:items-start lg:text-left"
        >
          <DestinationTabs
            destinations={destinations}
            activeIndex={activeIndex}
            onChange={setActiveIndex}
          />

          <h2 className="lg:mt-8 font-bellefair text-[56px] uppercase tracking-normal lg:text-preset-2">
            {activeDestination.name}
          </h2>

          <p className="mt-6 max-w-md font-barlow text-sm lg:text-lg text-preset-9 text-blue-300">
            {activeDestination.description}
          </p>

          <dl className="mt-2 lg:mt-10 flex flex-col md:flex-row md:justify-center lg:justify-start w-full max-w-md gap-10 border-t border-white/20 pt-6 md:gap-16">
            <div className="mt-4">
              <dt className="text-blue-300 font-barlow-condensed text-[14px] uppercase tracking-[2.36px] text-preset-7">
                Avg. Distance
              </dt>
              <dd className="mt-2 font-bellefair text-[28px] uppercase">
                {activeDestination.distance}
              </dd>
            </div>
            <div className="mt-4">
              <dt className="text-blue-300 font-barlow-condensed text-[14px] uppercase tracking-[2.36px] text-preset-7">
                Est. Travel Time
              </dt>
              <dd className="mt-2 font-bellefair text-[28px] uppercase ">
                {activeDestination.travel}
              </dd>
            </div>
          </dl>
        </motion.div>
      </div>
    </div>
  );
};

export default DestinationContent;
