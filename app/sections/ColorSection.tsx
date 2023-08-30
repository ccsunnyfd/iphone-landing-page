"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

const ColorSection = () => {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const textRef = useRef(null);

  useLayoutEffect(() => {
    const Elem = sectionRef.current as HTMLDivElement | null;
    const leftElem = leftRef.current as HTMLDivElement | null;
    const rightElem = rightRef.current as HTMLDivElement | null;
    const textElem = textRef.current as HTMLDivElement | null;

    const updateColor = (color: string, text: string, rgbColor: string) => {
      textElem!.innerText = text;
      textElem!.style.color = color;
      leftElem!.style.backgroundColor = `rgba(${rgbColor}, 0.8)`;
      rightElem!.style.backgroundColor = `rgba(${rgbColor}, 0.4)`;
    };

    gsap.to(Elem, {
      scrollTrigger: {
        trigger: Elem,
        start: "top top",
        end: `+=${Elem?.offsetWidth! + 1000}`,
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
          end: `+=${Elem?.offsetWidth! + 1000}`,
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

    return () => {};
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
      >
        Sierra Blue
      </div>
      <div
        ref={rightRef}
        className="relative flex h-full w-1/2 bg-[rgba(155,181,206,0.4)]"
      />
    </div>
  );
};

export default ColorSection;
