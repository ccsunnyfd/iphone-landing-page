import BatterySection from "./sections/BatterySection";
import CameraSection from "./sections/CameraSection";
import ColorSection from "./sections/ColorSection.jsx";
import DesignSection from "./sections/DesignSection";
import DisplaySection from "./sections/DisplaySection";
import HeroSection from "./sections/HeroSection";
import PhoneModel from "./sections/PhoneModel";
import ProcessorSection from "./sections/ProcessorSection";
import Quote from "./sections/Quote";

export default function Home() {
  return (
    <div>
      <Quote />
      <PhoneModel />
      <HeroSection />
      <DesignSection />
      <DisplaySection />
      <ProcessorSection />
      <BatterySection />
      <ColorSection />
      <CameraSection />
    </div>
  );
}
