"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

const BatterySection = () => {
  const battery = useRef(null);

  useLayoutEffect(() => {
    const elements = gsap.utils.selector(battery);

    const t1 = gsap.timeline({});

    elements("li").forEach((el) => {
      t1.to(el, {
        scrollTrigger: {
          trigger: el,
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
        opacity: 1,
      });
    });

    return () => {
      if (t1) t1.kill();
    };
  }, []);

  return (
    <div className="relative flex h-screen w-screen items-center justify-end bg-white p-8">
      <div className="absolute left-1/2 top-1/2 z-10 -translate-x-[55%] -translate-y-1/2 font-sans text-[88px] font-semibold capitalize">
        Go all day with single charge...
      </div>
      <ul
        ref={battery}
        className="absolute right-16 w-60 list-none rounded-lg border-[3px] border-black bg-white p-2"
      >
        <li className="-colorgradient-90 h-20 w-full opacity-0" />
        <li className="-colorgradient-90 my-2 h-20 w-full opacity-0" />
        <li className="-colorgradient-90 my-2 h-20 w-full opacity-0" />
        <li className="-colorgradient-90 my-2 h-20 w-full opacity-0" />
        <li className="-colorgradient-90 h-20 w-full opacity-0" />
      </ul>
    </div>
  );
};

export default BatterySection;
