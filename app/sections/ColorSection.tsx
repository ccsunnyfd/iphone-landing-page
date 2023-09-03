"use client";

import {
  Suspense,
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
} from "react";
import gsap from "gsap";
import { Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Model2 } from "@/app/components/Scene2";
import { ModelContext } from "../context/ModelContext";

const ColorSection = () => {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const textRef = useRef(null);

  const { currentColor, changeColorFunc } = useContext(ModelContext);

  useEffect(() => {
    const leftElem = leftRef.current as HTMLDivElement | null;
    const rightElem = rightRef.current as HTMLDivElement | null;
    const textElem = textRef.current as HTMLDivElement | null;
    textElem!.innerText = currentColor.text;
    textElem!.style.color = currentColor.color;
    leftElem!.style.backgroundColor = `rgba(${currentColor.rgbColor}, 0.8)`;
    rightElem!.style.backgroundColor = `rgba(${currentColor.rgbColor}, 0.4)`;
  }, [currentColor]);

  useLayoutEffect(() => {
    const Elem = sectionRef.current as HTMLDivElement | null;

    gsap.to(Elem, {
      scrollTrigger: {
        trigger: Elem,
        start: "top top",
        end: `+=${Elem!.offsetWidth + 1000}`,
        scrub: 1,
        pin: true,
        pinSpacing: true,
      },
    });

    const t2 = gsap
      .timeline({
        scrollTrigger: {
          trigger: Elem,
          start: "top top",
          end: `+=${Elem!.offsetWidth + 1000}`,
          scrub: 1,
        },
      })
      .to(Elem, {
        onStart: changeColorFunc,
        onStartParams: ["SierraBlue"],
        onReverseComplete: changeColorFunc,
        onReverseCompleteParams: ["SierraBlue"],
      })
      .to(Elem, {
        onStart: changeColorFunc,
        onStartParams: ["Gold"],
        onReverseComplete: changeColorFunc,
        onReverseCompleteParams: ["Gold"],
      })
      .to(Elem, {
        onStart: changeColorFunc,
        onStartParams: ["AlpineGreen"],
        onReverseComplete: changeColorFunc,
        onReverseCompleteParams: ["AlpineGreen"],
      })
      .to(Elem, {
        onStart: changeColorFunc,
        onStartParams: ["DeepPurple"],
        onReverseComplete: changeColorFunc,
        onReverseCompleteParams: ["DeepPurple"],
      })
      .to(Elem, {
        onStart: changeColorFunc,
        onStartParams: ["Red"],
        onReverseComplete: changeColorFunc,
        onReverseCompleteParams: ["Red"],
      })
      .to(Elem, {
        onStart: changeColorFunc,
        onStartParams: ["Blue"],
        onReverseComplete: changeColorFunc,
        onReverseCompleteParams: ["Blue"],
      });

    return () => {
      if (t2) t2.kill();
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative flex h-screen w-screen items-center justify-between"
    >
      <div
        ref={leftRef}
        className="relative flex h-full w-1/2 bg-[rgba(155,181,206,0.8)]"
      />
      <div
        ref={textRef}
        className="absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 -rotate-90 text-center text-[55px] uppercase brightness-[0.85]"
      />
      <div
        ref={rightRef}
        className="relative flex h-full w-1/2 bg-[rgba(155,181,206,0.4)]"
      >
        <Canvas camera={{ fov: 6.5 }}>
          <ambientLight intensity={1.25} />
          <directionalLight intensity={0.4} />
          <Suspense fallback={null}>
            <Model2 />
          </Suspense>
          <Environment preset="night" />
          {/* <OrbitControls /> */}
        </Canvas>
      </div>
    </div>
  );
};

export default ColorSection;
