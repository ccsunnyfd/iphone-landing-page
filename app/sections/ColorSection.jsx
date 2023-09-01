"use client";

import { Suspense, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Model2 } from "@/app/components/Scene2";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader } from "@react-three/fiber";

const ColorSection = () => {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const textRef = useRef(null);

  const { materials } = useLoader(GLTFLoader, "/3D-Model/scene.gltf");

  useLayoutEffect(() => {
    const Elem = sectionRef.current;
    const leftElem = leftRef.current;
    const rightElem = rightRef.current;
    const textElem = textRef.current;

    const updateColor = (color, text, rgbColor) => {
      materials.Body.color.set(color);
      textElem.innerText = text;
      textElem.style.color = color;
      leftElem.style.backgroundColor = `rgba(${rgbColor}, 0.8)`;
      rightElem.style.backgroundColor = `rgba(${rgbColor}, 0.4)`;
    };

    gsap.to(Elem, {
      scrollTrigger: {
        trigger: Elem,
        start: "top top",
        end: `+=${Elem.offsetWidth + 1000}`,
        scrub: true,
        pin: true,
        pinSpacing: true,
      },
    });

    const t2 = gsap
      .timeline({
        scrollTrigger: {
          trigger: Elem,
          start: "top top",
          end: `+=${Elem.offsetWidth + 1000}`,
          scrub: true,
        },
      })
      .to(Elem, {
        onStart: updateColor,
        onStartParams: ["#9BB5CE", "Sierra Blue", "155, 181,206"],
        onReverseComplete: updateColor,
        onReverseCompleteParams: ["#9BB5CE", "Sierra Blue", "155, 181,206"],
      })
      .to(Elem, {
        onStart: updateColor,
        onStartParams: ["#F9E5C9", "Gold", "249, 229,201"],
        onReverseComplete: updateColor,
        onReverseCompleteParams: ["#F9E5C9", "Gold", "249, 229,201"],
      })
      .to(Elem, {
        onStart: updateColor,
        onStartParams: ["#505F4E", "Alpine Green", "80, 95, 78"],
        onReverseComplete: updateColor,
        onReverseCompleteParams: ["#505F4E", "Alpine Green", "80, 95, 78"],
      })
      .to(Elem, {
        onStart: updateColor,
        onStartParams: ["#574f6f", "Deep Purple", "87, 79, 111"],
        onReverseComplete: updateColor,
        onReverseCompleteParams: ["#574f6f", "Deep Purple", "87, 79, 111"],
      })
      .to(Elem, {
        onStart: updateColor,
        onStartParams: ["#A50011", "Red", "165, 0, 17"],
        onReverseComplete: updateColor,
        onReverseCompleteParams: ["#A50011", "Red", "165, 0, 17"],
      })
      .to(Elem, {
        onStart: updateColor,
        onStartParams: ["#215E7C", "Blue", "33, 94, 124"],
        onReverseComplete: updateColor,
        onReverseCompleteParams: ["#215E7C", "Blue", "33, 94, 124"],
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
