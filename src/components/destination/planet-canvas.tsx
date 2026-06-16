"use client";

import { PlanetModel } from "@/components/destination/planet-model";
import { Canvas } from "@react-three/fiber";
import { Component, Suspense, type ReactNode } from "react";

type PlanetCanvasProps = {
  modelPath: string;
};

type ErrorBoundaryState = {
  hasError: boolean;
};

class PlanetErrorBoundary extends Component<
  { children: ReactNode },
  ErrorBoundaryState
> {
  state: ErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex h-full w-full items-center justify-center rounded-full bg-white/5 px-6 text-center font-barlow text-sm text-blue-300">
          3D model unavailable on this device
        </div>
      );
    }

    return this.props.children;
  }
}

export default function PlanetCanvas({ modelPath }: PlanetCanvasProps) {
  return (
    <PlanetErrorBoundary>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 32 }}
        dpr={[1, 2]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "default",
        }}
        className="h-full w-full touch-none"
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[4, 2, 5]} intensity={1.6} />
        <directionalLight position={[-3, -1, -4]} intensity={0.3} />
        <Suspense fallback={null}>
          <PlanetModel key={modelPath} modelPath={modelPath} />
        </Suspense>
      </Canvas>
    </PlanetErrorBoundary>
  );
}
