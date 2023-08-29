"use client";

import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";

const DisplaySection = () => {
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

    t1.fromTo(textOne.current, { x: 0 }, { x: "20%" }, "key1").fromTo(
      textTwo.current,
      { x: 0 },
      { x: "-20%" },
      "key1",
    );

    return () => {
      if (t1) t1.kill();
    };
  }, []);

  return (
    <div className="relative flex h-[200vh] w-screen flex-col justify-around bg-black text-white">
      <h1 className="colorgradient bg-clip-text font-sans text-[88px] text-transparent odd:ml-16">
        Immersive
        <br />
        Display
      </h1>
      <div className="flex w-1/2 flex-col items-end even:mr-16 even:self-end even:text-right">
        <div className="mb-4 text-[31px]">Super Ratine XDR Display</div>
        <div className="mb-2 w-[55%] text-xs text-gray-300">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Necessitatibus dignissimos ipsam.
        </div>
      </div>
      <div
        ref={container}
        className="flex w-1/2 flex-col items-start odd:ml-16"
      >
        <div className="mb-4 text-[31px]">Big is better</div>
        <div className="mb-2 w-[55%] text-xs text-gray-300">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Necessitatibus dignissimos ipsam.
        </div>
      </div>

      <div className="z-10 mb-16 flex w-screen -rotate-[25deg] flex-col items-center justify-center">
        <h1
          ref={textOne}
          className="colorgradient bg-clip-text font-sans text-[88px] text-transparent"
        >
          Tougher than ever!
        </h1>
        <h1
          ref={textTwo}
          className="colorgradient bg-clip-text font-sans text-[88px] text-transparent"
        >
          Every touch matters.
        </h1>
      </div>
    </div>
  );
};

export default DisplaySection;
