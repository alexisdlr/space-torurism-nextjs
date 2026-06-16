import type { StaticImageData } from "next/image";

type PageBackgroundProps = {
  mobile: StaticImageData;
  tablet: StaticImageData;
  desktop: StaticImageData;
  priority?: boolean;
};

export function PageBackground({
  mobile,
  tablet,
  desktop,
  priority = false,
}: PageBackgroundProps) {
  return (
    <picture className="pointer-events-none fixed inset-0 z-0 h-full w-full">
      <source media="(min-width: 1440px)" srcSet={desktop.src} />
      <source media="(min-width: 768px)" srcSet={tablet.src} />
      <img
        src={mobile.src}
        alt=""
        aria-hidden="true"
        fetchPriority={priority ? "high" : "auto"}
        className="h-full w-full object-cover"
      />
    </picture>
  );
}
