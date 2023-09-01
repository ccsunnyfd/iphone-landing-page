"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

const CameraSection = () => {
  const sectionRef = useRef(null);
  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);

  const titleRef = useRef(null);

  const titleElements = gsap.utils.selector(titleRef);

  // pin the section
  useLayoutEffect(() => {
    const Elem = sectionRef.current;
    const video1Elem = videoRef1.current;
    const video2Elem = videoRef2.current;

    gsap.to(Elem, {
      scrollTrigger: {
        trigger: Elem,
        start: "top top",
        end: `bottom+=500 bottom`,
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
          end: `bottom+=500 bottom`,
          scrub: true,
        },
      })
      .to(video1Elem, { scale: 0.3 }, "key1")
      .to(video2Elem, { scale: 0.6 }, "key1");

    titleElements("h1").forEach((el) =>
      t2.fromTo(
        el,
        {
          scrollTrigger: {
            trigger: el,
            start: "top top",
            end: `bottom bottom`,
            scrub: true,
          },
          x: 100,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
        },
      ),
    );

    return () => {
      if (t2) t2.kill();
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative z-10 min-h-screen w-screen  overflow-hidden bg-white"
    >
      <video
        ref={videoRef1}
        autoPlay
        muted
        loop
        className="absolute left-0 top-0 z-20 h-screen w-full object-cover object-bottom"
      >
        <source src={"/video/Scuba Diving - 699.mp4"} type="video/mp4" />
      </video>

      <video
        ref={videoRef2}
        autoPlay
        muted
        loop
        className="absolute right-[40%] top-0 z-10 h-auto w-3/5"
      >
        <source src={"/video/Skate - 49791.mp4"} type="video/mp4" />
      </video>

      <div
        ref={titleRef}
        className="absolute right-0 top-0 flex h-full w-1/2 flex-col items-center"
      >
        <h1 className="z-30 font-sans text-[88px] font-bold capitalize text-black">
          Ready.
        </h1>
        <h1 className="z-30 ml-24 font-sans text-[88px] font-bold capitalize text-black">
          Steady.
        </h1>
        <h1 className="z-30 ml-48 font-sans text-[88px] font-bold capitalize text-black">
          Action.
        </h1>
      </div>
    </div>
  );
};

export default CameraSection;
