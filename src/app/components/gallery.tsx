import { motion } from "motion/react";
import { useInView } from "./use-in-view";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Gallery() {
  const { ref, isInView } = useInView();

  const galleries = [
    {
      title: "Clásicos",
      images: [
        "/gallery/gallery-classic-1.jpeg",
        "/gallery/gallery-classic-2.jpg",
        "/gallery/gallery-classic-3.jpeg",
      ],
    },
    {
      title: "Diseños",
      images: [
        "/gallery/gallery-designer-1.jpg",
        "/gallery/gallery-designer-2.mp4",
        "/gallery/gallery-designer-3.jpeg",
      ],
    },
    {
      title: "Ocasiones Especiales",
      images: [
        "/gallery/gallery-special-1.jpg",
        "/gallery/gallery-special-2.jpg",
        "/gallery/gallery-special-3.jpg",
      ],
    },
  ];

  return (
    <section ref={ref} className="py-24 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-primary mb-6">
            Nuestras Creaciones
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8" />
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
            Echa un vistazo a nuestro mundo de postres y pasteles exquisitos,
            elaborados con precisión y arte.
          </p>
        </motion.div>

        {/* Instagram-style grid by category */}
        <div className="space-y-12">
          {galleries.map((gallery, groupIndex) => (
            <motion.div
              key={gallery.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: groupIndex * 0.2 }}
            >
              {/* Category title */}
              <h3 className="text-2xl font-serif text-primary mb-4">
                {gallery.title}
              </h3>

              {/* Square image grid */}
              <div className="grid grid-cols-3 gap-1 md:gap-2">
                {gallery.images.map((image, imgIndex) => (
                  <motion.div
                    key={imgIndex}
                    whileHover={{ scale: 1.02 }}
                    className="relative aspect-square overflow-hidden cursor-pointer group"
                  >
                    {image.endsWith('.mp4') || image.endsWith('.webm') ? (
                      <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="none" // Importante: No carga el video hasta que la página esté lista
                        poster="/images/hero-placeholder.webp" // Muestra una imagen ligera mientras carga el video
                        className="w-full h-auto object-cover"
                      >
                        <source src={image} type="video/mp4" />
                        Tu navegador no soporta videos.
                      </video>
                    ) : (
                      <ImageWithFallback
                        src={image}
                        alt={`${gallery.title} ${imgIndex + 1}`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    )}
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
