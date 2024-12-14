import Benefits from "./components/Benefits";
import HomeCarousel from "./components/Carousel";
import HighlightsSection from "./components/Highlights";
import Testmonials from "./components/Testmonials";

export default function Home() {
  return (
    <>
      <HomeCarousel />
      <Benefits />
      <HighlightsSection />
      <Testmonials />
    </>
  );
}
