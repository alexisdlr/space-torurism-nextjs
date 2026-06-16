"use client";

import dynamic from "next/dynamic";

const PlanetCanvas = dynamic(
  () => import("@/components/destination/planet-canvas"),
  {
    ssr: false,
    loading: () => (
      <div
        aria-hidden="true"
        className="h-full w-full animate-pulse rounded-full bg-white/5"
      />
    ),
  },
);

type PlanetViewerProps = {
  modelPath: string;
  name: string;
};

export function PlanetViewer({ modelPath, name }: PlanetViewerProps) {
  return (
    <div
      className="mx-auto aspect-square h-[280px] w-[280px] lg:h-[400px] lg:w-[400px] xl:h-[500px] xl:w-[500px]"
      aria-label={`3D model of ${name}`}
    >
      <PlanetCanvas modelPath={modelPath} />
    </div>
  );
}
