import type { Technology } from "@/lib/technology";
import Image from "next/image";

type TechnologyImageProps = {
  technology: Technology;
};

export function TechnologyImage({ technology }: TechnologyImageProps) {
  return (
    <div className="relative mx-auto w-full max-w-[768px] lg:mx-0 lg:ml-auto lg:flex lg:h-full lg:max-w-none lg:items-center lg:justify-end">
      <Image
        src={technology.images.landscape}
        alt={technology.name}
        width={technology.landscapeWidth}
        height={technology.landscapeHeight}
        className="h-auto w-full object-contain lg:hidden"
        sizes="(min-width: 1024px) 0px, 768px"
        priority
      />
      <Image
        src={technology.images.portrait}
        alt={technology.name}
        width={technology.portraitWidth}
        height={technology.portraitHeight}
        className="hidden h-[min(700px,calc(100dvh-12rem))] w-auto max-w-none object-contain object-right lg:block"
        sizes="(min-width: 1024px) 55vw, 0px"
        priority
      />
    </div>
  );
}
