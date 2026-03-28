import { Hero } from "../components/hero";
import { Mission } from "../components/mission";
import { Implementation } from "../components/implementation";
import { GallerySlider } from "../components/gallery-slider";
import { Testimonials } from "../components/testimonials";
import { Gallery } from "../components/gallery";
import { About } from "../components/about";

export function Home() {
  return (
    <div>
      <Hero />
      <Mission />
      <Implementation />
      <GallerySlider />
      <Testimonials />
      <Gallery />
      <About />
    </div>
  );
}
