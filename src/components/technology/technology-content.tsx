"use client";

import { TechnologyImage } from "@/components/technology/technology-image";
import { TechnologyTabs } from "@/components/technology/technology-tabs";
import AnimatedTittle from "@/components/shared/animated-tittle";
import { technologies } from "@/lib/technology";
import { motion } from "framer-motion";
import { useState } from "react";

const easeOut = [0.22, 1, 0.36, 1] as const;
const title = "Space launch 101";

const TechnologyContent = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeTechnology = technologies[activeIndex];

  return (
    <div className="flex w-full flex-col p-10 pb-24 md:p-16 md:pb-16 lg:min-h-full lg:flex-1 lg:pb-0 lg:pl-24 lg:pr-0 lg:pt-24 xl:pl-38 xl:pt-26 2xl:pl-40">
      <div className="mb-8 flex h-fit justify-center md:justify-start lg:mb-16">
        <AnimatedTittle title={title} number="03" />
      </div>

      <div className="grid w-full grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-16 xl:gap-24">
        <div className="order-2 flex flex-col gap-10 lg:order-1 lg:gap-0">
          <div className="order-2 flex flex-col items-center gap-10 lg:order-1 lg:flex-row lg:items-start lg:gap-16">
            <TechnologyTabs
              technologies={technologies}
              activeIndex={activeIndex}
              onChange={setActiveIndex}
            />

            <motion.div
              key={activeTechnology.name}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: easeOut }}
              className="flex flex-col items-center text-center lg:items-start lg:text-left gap-4"
            >
              <span className="text-preset-9 font-barlow-condensed uppercase tracking-[2.7px] text-blue-300">
                The terminology...
              </span>
              <h2 className="font-bellefair text-[28px] uppercase tracking-normal md:text-[56px] lg:text-preset-3 leading-normal">
                {activeTechnology.name}
              </h2>
              <p className="mt-2 max-w-[500px] font-barlow text-sm leading-[180%] text-blue-300 md:text-base md:leading-[180%] md:text-preset-9">
                {activeTechnology.description}
              </p>
            </motion.div>
          </div>
        </div>

        <div className="order-2 lg:order-2 lg:ml-auto lg:flex lg:items-center lg:justify-end lg:self-stretch">
          <TechnologyImage
            key={activeTechnology.images.portrait}
            technology={activeTechnology}
          />
        </div>
      </div>
    </div>
  );
};

export default TechnologyContent;
