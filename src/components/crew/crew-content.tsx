"use client";

import { CrewMemberImage } from "@/components/crew/crew-member-image";
import { CrewPagination } from "@/components/crew/crew-pagination";
import AnimatedTittle from "@/components/shared/animated-tittle";
import { crewMembers } from "@/lib/crew";
import { motion } from "framer-motion";
import { useState } from "react";

const easeOut = [0.22, 1, 0.36, 1] as const;
const title = "Meet your crew";

const CrewContent = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeCrewMember = crewMembers[activeIndex];

  return (
    <div className="flex w-full flex-col p-10 pb-24 md:p-16 md:pb-16 lg:min-h-full lg:flex-1 lg:pb-0 lg:p-24 xl:px-38 xl:py-26 2xl:p-40">
      <div className="mb-8 flex h-fit justify-center md:justify-start lg:mb-16">
        <AnimatedTittle title={title} number="02" />
      </div>

      <div className="grid w-full grid-cols-1 items-end gap-10 lg:grid-cols-2 lg:gap-16 xl:gap-24">
        <div className="order-2 h-full flex flex-col gap-10 lg:order-1 lg:gap-16 lg:pb-8">
          <motion.div
            key={activeCrewMember.name}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: easeOut }}
            className="flex px-3 lg:px-6 flex-col items-center gap-1 text-center lg:items-start lg:text-left"
          >
            <span className="inline-block border border-white/25 px-4 py-2 font-bellefair text-base lg:text-[28px] uppercase tracking-normal text-white/35">
              {activeCrewMember.role}
            </span>
            <h2 className="font-bellefair text-[28px] uppercase tracking-normal md:text-[56px] lg:text-preset-3">
              {activeCrewMember.name}
            </h2>
            <p className="max-w-[520px] mt-2 lg:mt-0 font-barlow text-base leading-[180%] text-blue-300 md:text-preset-9">
              {activeCrewMember.bio}
            </p>
          </motion.div>

          <CrewPagination
            crewMembers={crewMembers}
            activeIndex={activeIndex}
            onChange={setActiveIndex}
          />
        </div>

        <div className="order-2 lg:order-2 mt-4 lg:mt-0 lg:flex lg:justify-end">
          <CrewMemberImage
            key={activeCrewMember.image}
            crewMember={activeCrewMember}
          />
        </div>
      </div>
    </div>
  );
};

export default CrewContent;
