import { InfiniteSlider } from "./infinite-slider";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const sliderImages = [
  "/collab-1.png",
  "/collab-2.png",
  "/collab-3.png",
  "/collab-4.png",
  "/collab-52.png",
  "/collab-6.png",
];

export function GallerySlider() {
  return (
    <section className="py-6 bg-secondary/20 overflow-hidden">
      <InfiniteSlider gap={8} duration={30} durationOnHover={60}>
        {sliderImages.map((src, i) => (
          <div
            key={i}
            className="flex-shrink overflow-hidden rounded-lg"
            style={{
              width: "clamp(100px, 10vw, 250px)",
              height: "clamp(100px, 5vw, 250px)",
            }}
          >
            <ImageWithFallback
              src={src}
              alt={`MARDÓ creación ${i + 1}`}
              className="w-sm h-full object-contain"
            />
          </div>
        ))}
      </InfiniteSlider>
    </section>
  );
}
