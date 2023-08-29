import a15 from "@/public/Images/A15-Bionic.jpg";
import Image from "next/image";

const ProcessorSection = () => {
  return (
    <div className="relative flex h-screen w-screen items-center justify-start overflow-hidden bg-black text-white">
      <h1 className="colorgradient absolute bottom-[2rem] left-1/2 z-10 w-full -translate-x-1/2  bg-clip-text text-center font-sans text-[88px] text-transparent">
        Fastest Processor
      </h1>
      <div className="absolute left-1/2 top-1/2 flex w-1/4 -translate-x-1/2 -translate-y-1/2 animate-[glow_3s_ease-in-out_infinite] items-center justify-center p-2">
        <Image src={a15} alt="A15 processor" />
      </div>
      <div className="flex h-[40vh] w-1/3 flex-col justify-center text-[16px] text-gray-400">
        <span className="my-1 pl-8">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe minima
          consectetur voluptates perferendis veritatis quia repellendus. Ab
          consequatur assumenda veniam, excepturi aperiam unde nesciunt adipisci
          odit dicta ad optio. Molestiae.
        </span>
        <span className="my-1 pl-8">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe minima
          consectetur voluptates perferendis veritatis quia repellendus. Ab
          consequatur assumenda veniam.
        </span>
      </div>
    </div>
  );
};

export default ProcessorSection;
