import { useRef, useEffect } from "react";
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
  autoScrollSpeed = 1,
}: {
  images?: string[],
  title?: string,
  imageClassName?: string,
  itemStyle?: React.CSSProperties,
  scrollable?: boolean,
  autoScrollSpeed?: number,
}) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const exactScrollLeft = useRef(0);

  useEffect(() => {
    if (!scrollable) return;
    let animationId: number;
    const autoScroll = () => {
      if (scrollRef.current && !isDown.current) {
        if (exactScrollLeft.current === 0 && scrollRef.current.scrollLeft > 0) {
          exactScrollLeft.current = scrollRef.current.scrollLeft;
        }
        exactScrollLeft.current += autoScrollSpeed;
        
        // Loop seamlessly
        if (
          exactScrollLeft.current >=
          scrollRef.current.scrollWidth / 3
        ) {
          exactScrollLeft.current -= scrollRef.current.scrollWidth / 3;
        }
        scrollRef.current.scrollLeft = exactScrollLeft.current;
      } else if (scrollRef.current && isDown.current) {
        // Sync the exact value when the user is dragging manually
        exactScrollLeft.current = scrollRef.current.scrollLeft;
      }
      animationId = requestAnimationFrame(autoScroll);
    };
    animationId = requestAnimationFrame(autoScroll);
    return () => cancelAnimationFrame(animationId);
  }, [scrollable, autoScrollSpeed]);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    isDown.current = true;
    scrollRef.current.style.cursor = "grabbing";
    startX.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft.current = scrollRef.current.scrollLeft;
  };
  const handleMouseLeave = () => {
    isDown.current = false;
    if (!scrollRef.current) return;
    scrollRef.current.style.cursor = "grab";
  };
  const handleMouseUp = () => {
    isDown.current = false;
    if (!scrollRef.current) return;
    scrollRef.current.style.cursor = "grab";
  };
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDown.current || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 2;
    scrollRef.current.scrollLeft = scrollLeft.current - walk;
  };

  // Duplicate images for infinite scroll effect in native scroll mode
  const displayImages = scrollable ? [...images, ...images, ...images] : images;

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
        <div
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onTouchStart={() => { isDown.current = true; }}
          onTouchEnd={() => { isDown.current = false; }}
          className="flex gap-4 overflow-x-auto px-6 pb-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden cursor-grab"
        >
          {displayImages.map((src, i) => (
            <div
              key={i}
              className="flex-shrink-0 overflow-hidden flex justify-center items-center pointer-events-none"
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
        <InfiniteSlider gap={8} duration={60} durationOnHover={120}>
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
