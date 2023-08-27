const Quote = () => {
  return (
    <div className="relative flex h-screen w-screen flex-col items-center justify-center bg-black text-white ">
      <p className="relative h-10 w-1/2 overflow-hidden text-3xl">
        <span className=" colorgradient animation-delay-0 absolute translate-y-12 animate-[flowout_2s_ease-in-out_forwards] bg-clip-text font-sans text-transparent transition ">
          &#8220; You can&#39;t connect the dots looking forward;
        </span>
      </p>
      <p className="relative h-10 w-1/2 overflow-hidden text-3xl">
        <span className=" colorgradient animation-delay-400 absolute translate-y-12 animate-[flowout_2s_ease-in-out_forwards] bg-clip-text font-sans text-transparent transition  ">
          &nbsp;&nbsp;&nbsp;you can only connect them looking backward.
        </span>
      </p>
      <p className="relative h-10 w-1/2 overflow-hidden text-3xl ">
        <span className="colorgradient animation-delay-800 absolute translate-y-12 animate-[flowout_2s_ease-in-out_forwards] bg-clip-text font-sans text-transparent transition  ">
          &nbsp;&nbsp;&nbsp;so you have to trust that the dots
        </span>
      </p>
      <p className="relative h-10 w-1/2 overflow-hidden text-3xl ">
        <span className="colorgradient animation-delay-1200 absolute translate-y-12 animate-[flowout_2s_ease-in-out_forwards] bg-clip-text font-sans text-transparent transition  ">
          &nbsp;&nbsp;&nbsp;will somehow connect in your future. &#8221;
        </span>
      </p>
      <p className="relative h-10 w-1/2 overflow-hidden text-3xl">
        <span className="authorcolorgradient animation-delay-1600 absolute w-full translate-y-12 animate-[flowout_2s_ease-in-out_forwards] bg-clip-text text-end font-sans text-transparent transition ">
          &#x23AF; Steve Jobs
        </span>
      </p>
    </div>
  );
};

export default Quote;
