"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense, useContext, useEffect, useRef } from "react";
import { Model3 } from "@/app/components/Scene3";
import { Environment, OrbitControls } from "@react-three/drei";
import Link from "next/link";
import { ModelContext } from "@/app/context/ModelContext";

const PricingSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { currentColor, changeColorFunc } = useContext(ModelContext);

  useEffect(() => {
    (
      sectionRef.current?.style as CSSStyleDeclaration
    ).backgroundColor = `rgba(${currentColor.rgbColor}, 0.4)`;
  }, [currentColor]);

  return (
    <div className="relative z-10 h-screen w-screen overflow-hidden bg-white">
      <div ref={sectionRef} className="relative z-10 h-screen w-screen">
        <div className="w-ull relative flex h-[70%] cursor-grab flex-col items-center justify-center">
          <div className="absolute top-4 text-[18px]">360&deg; &#x27F2;</div>
          <Canvas camera={{ fov: 14 }}>
            <ambientLight intensity={1} />
            <directionalLight intensity={0.4} />
            <Suspense fallback={null}>
              <Model3 />
            </Suspense>
            <Environment preset="night" />
            <OrbitControls enableZoom={false} />
          </Canvas>
        </div>
        <ul className="absolute left-[35%] top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center ">
          <li
            onClick={() => changeColorFunc("SierraBlue")}
            className="my-2 h-6 w-6 cursor-pointer list-none rounded-full border-[1px] border-black bg-[#9BB5CE]"
          />
          <li
            onClick={() => changeColorFunc("Gold")}
            className="my-2 h-6 w-6 cursor-pointer list-none rounded-full border-[1px] border-black bg-[#F9E5C9]"
          />
          <li
            onClick={() => changeColorFunc("AlpineGreen")}
            className="my-2 h-6 w-6 cursor-pointer list-none rounded-full border-[1px] border-black bg-[#505F4E]"
          />
          <li
            onClick={() => changeColorFunc("DeepPurple")}
            className="my-2 h-6 w-6 cursor-pointer list-none rounded-full border-[1px] border-black bg-[#574f6f]"
          />
          <li
            onClick={() => changeColorFunc("Red")}
            className="my-2 h-6 w-6 cursor-pointer list-none rounded-full border-[1px] border-black bg-[#A50011]"
          />
          <li
            onClick={() => changeColorFunc("Blue")}
            className="my-2 h-6 w-6 cursor-pointer list-none rounded-full border-[1px] border-black bg-[#215E7C]"
          />
        </ul>

        <div className="flex w-full flex-col items-center justify-center">
          <h2 className="font-sans text-[22px]">iPhone</h2>
          <h2 className="p-[0.3rem] text-[44px] font-bold">14 Pro Max</h2>
          <h2 className="font-sans text-[22px]">From $1099*</h2>
          <div className="flex items-center justify-center pt-[1rem]">
            <button className="m-0 flex cursor-pointer items-center justify-center rounded-[50px] border-none bg-[#0071e3] px-4 py-[0.4rem] text-white outline-none hover:opacity-70">
              Buy
            </button>
            <Link
              className="ml-6 text-[#0071e3] no-underline hover:underline"
              href="#"
            >
              Learn More &#x2192;
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
