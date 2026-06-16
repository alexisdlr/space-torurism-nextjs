"use client";

import { PlanetModel } from "@/components/destination/planet-model";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

type PlanetCanvasProps = {
  modelPath: string;
};

export default function PlanetCanvas({ modelPath }: PlanetCanvasProps) {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 32 }}
      gl={{ antialias: true, alpha: true }}
      className="h-full w-full touch-none"
    >
      <ambientLight intensity={0.4} />
      <directionalLight position={[4, 2, 5]} intensity={1.6} />
      <directionalLight position={[-3, -1, -4]} intensity={0.3} />
      <Suspense fallback={null}>
        <PlanetModel key={modelPath} modelPath={modelPath} />
      </Suspense>
    </Canvas>
  );
}
