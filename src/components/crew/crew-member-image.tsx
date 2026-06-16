import type { CrewMember } from "@/lib/crew";
import Image from "next/image";

type CrewMemberImageProps = {
  crewMember: CrewMember;
};

export function CrewMemberImage({ crewMember }: CrewMemberImageProps) {
  return (
    <div className="relative mx-auto flex shrink-0 justify-center mask-[linear-gradient(to_bottom,white_60%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,white_60%,transparent_100%)] lg:mx-0 lg:justify-end ">
      <Image
        src={crewMember.image}
        alt={crewMember.name}
        width={crewMember.imageWidth}
        height={crewMember.imageHeight}
        className=" max-w-none object-cover"
        sizes="(min-width: 1024px) 524px, 327px"
        priority
      />
    </div>
  );
}
