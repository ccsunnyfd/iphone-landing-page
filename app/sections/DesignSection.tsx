"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

const DesignSection = () => {
  const container = useRef(null);
  const textOne = useRef(null);
  const textTwo = useRef(null);

  useLayoutEffect(() => {
    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top-=500 top",
        end: "bottom top",
        scrub: true,
      },
    });

    t1.fromTo(textOne.current, { x: 0 }, { x: "10%" }, "key1").fromTo(
      textTwo.current,
      { x: 0 },
      { x: "-10%" },
      "key1",
    );

    return () => {
      if (t1) t1.kill();
    };
  }, []);

  return (
    <div
      ref={container}
      className="relative flex h-screen w-screen flex-col items-center justify-end overflow-hidden bg-white"
    >
      <p
        ref={textOne}
        className="z-10 flex h-1/2 w-full flex-col items-start justify-center text-black"
      >
        <span className="w-[90%] text-[88px] font-semibold capitalize">
          Flaw-less design with strong durability.
        </span>
      </p>
      <p
        ref={textTwo}
        className="z-10 flex h-1/2 w-full flex-col items-end justify-center  text-black"
      >
        <span className="w-4/5 text-[88px] font-semibold capitalize">
          Flat-edge design with toughest smartphone glass.
        </span>
      </p>
    </div>
  );
};

export default DesignSection;
