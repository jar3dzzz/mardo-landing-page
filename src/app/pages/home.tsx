import { Hero } from "@/app/components/home/hero";
import { Mission } from "@/app/components/home/mission";
import { Implementation } from "@/app/components/home/implementation";
import { GallerySlider } from "@/app/components/shared/gallery-slider";
import { Testimonials } from "@/app/components/home/testimonials";
import { Gallery } from "@/app/components/shared/gallery";
import { About } from "@/app/components/shared/about";

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
