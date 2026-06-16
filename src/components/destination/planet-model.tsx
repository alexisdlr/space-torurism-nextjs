"use client";

import { Center, Resize, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import type { Group } from "three";
import { destinations } from "@/lib/destinations";

for (const destination of destinations) {
  useGLTF.preload(destination.modelPath, true);
}

type PlanetModelProps = {
  modelPath: string;
};

export function PlanetModel({ modelPath }: PlanetModelProps) {
  const { scene } = useGLTF(modelPath, true);
  const groupRef = useRef<Group>(null);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.18;
    }
  });

  return (
    <group ref={groupRef}>
      <Resize scale={2.4}>
        <Center>
          <primitive object={scene} />
        </Center>
      </Resize>
    </group>
  );
}
