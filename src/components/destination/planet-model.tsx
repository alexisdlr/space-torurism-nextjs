"use client";

import { Center, Resize, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import type { Group } from "three";

useGLTF.setDecoderPath(
  "https://www.gstatic.com/draco/versioned/decoders/1.5.7/",
);

type PlanetModelProps = {
  modelPath: string;
};

export function PlanetModel({ modelPath }: PlanetModelProps) {
  const { scene } = useGLTF(modelPath, true);
  const groupRef = useRef<Group>(null);

  useEffect(() => {
    useGLTF.preload(modelPath, true);
  }, [modelPath]);

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
