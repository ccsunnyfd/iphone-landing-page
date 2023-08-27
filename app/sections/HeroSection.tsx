import backgroundVideo from "../../public/video/Ink - 21536.mp4";

const HeroSection = () => {
  return (
    <div className="relative flex h-screen w-screen items-center justify-end overflow-hidden bg-black ">
      <div className="absolute left-0 top-0 z-0 min-h-screen w-screen">
        <video
          className="h-screen w-full object-cover object-bottom"
          autoPlay
          muted
          loop
        >
          <source src={"/video/Ink - 21536.mp4"} type="video/mp4" />
        </video>
      </div>
      <h1 className="absolute left-0.5 top-0.5 font-sans text-3xl text-gray-600">
        iPhone 14 Pro Max
      </h1>
      <div className="z-1 colorgradient-45 absolute flex h-full w-full items-center justify-between bg-clip-text text-transparent">
        <span className="p-8 text-8xl font-semibold uppercase">So.Cold.</span>
        <span className="p-8 text-8xl font-semibold uppercase">So.Bold.</span>
      </div>
    </div>
  );
};

export default HeroSection;
