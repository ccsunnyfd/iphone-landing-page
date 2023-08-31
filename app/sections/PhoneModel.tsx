"use client";

import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { Model } from "@/app/components/Scene";
import { Suspense } from "react";

const PhoneModel = () => {
  return (
    <div
      id="phone-model"
      className="fixed top-0 z-10 h-screen w-screen bg-transparent"
    >
      <Canvas camera={{ fov: 14 }}>
        <ambientLight intensity={1.25} />
        <directionalLight intensity={0.4} />
        <Suspense fallback={null}>
          <Model />
        </Suspense>
        <Environment preset="night" />
        {/* <OrbitControls /> */}
      </Canvas>
    </div>
  );
};

export default PhoneModel;
