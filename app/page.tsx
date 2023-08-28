import HeroSection from "./sections/HeroSection";
import PhoneModel from "./sections/PhoneModel";
import Quote from "./sections/Quote";

export default function Home() {
  return (
    <div>
      <Quote />
      <PhoneModel />
      <HeroSection />
    </div>
  );
}
