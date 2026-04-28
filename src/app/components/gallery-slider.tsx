import { InfiniteSlider } from "./infinite-slider";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const defaultImages = [
  "/collab-1.png",
  "/collab-2.png",
  "/collab-3.png",
  "/collab-4.png",
  "/collab-5.png",
  "/collab-6.png",
  "/collab-7.png",
];

export function GallerySlider({
  images = defaultImages,
  title = "Nuestras Colaboraciones",
  imageClassName = "w-full h-full object-contain",
  itemStyle = {
    width: "clamp(100px, 10vw, 250px)",
    height: "clamp(100px, 5vw, 250px)",
  },
  scrollable = false,
}: {
  images?: string[],
  title?: string,
  imageClassName?: string,
  itemStyle?: React.CSSProperties,
  scrollable?: boolean,
}) {
  return (
    <section className="py-6 bg-secondary/20 overflow-hidden">
      {title && (
        <div className="flex justify-center mb-6 px-4 text-center">
          <p className="text-accent tracking-[0.2em] sm:tracking-[0.3em] uppercase text-xs sm:text-sm font-bold">
            {title}
          </p>
        </div>
      )}
      {scrollable ? (
        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory px-6 pb-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {images.map((src, i) => (
            <div
              key={i}
              className="flex-shrink-0 overflow-hidden snap-center flex justify-center items-center"
              style={itemStyle}
            >
              <ImageWithFallback
                src={src}
                alt={`${title} imagen ${i + 1}`}
                className={imageClassName}
              />
            </div>
          ))}
        </div>
      ) : (
        <InfiniteSlider gap={8} duration={30} durationOnHover={60}>
          {images.map((src, i) => (
            <div
              key={i}
              className="flex-shrink overflow-hidden flex justify-center items-center"
              style={itemStyle}
            >
              <ImageWithFallback
                src={src}
                alt={`${title} imagen ${i + 1}`}
                className={imageClassName}
              />
            </div>
          ))}
        </InfiniteSlider>
      )}
    </section>
  );
}
