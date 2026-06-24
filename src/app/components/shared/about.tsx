import { motion } from "motion/react";
import { useInView } from "@/app/hooks/use-in-view";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function About() {
  const { ref, isInView } = useInView();

  return (
    <section ref={ref} id="about" className="py-32 md:py-48 px-6 lg:px-12 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center relative">
          
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full lg:w-7/12 relative z-10"
          >
            <div className="aspect-[4/5] sm:aspect-[16/10] lg:aspect-[4/5] overflow-hidden rounded-[2px]">
              <ImageWithFallback
                src="/about.jpg"
                mobileSrc="/about.webp"
                alt="Interior de nuestra repostería"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Text Side - Overlapping the image slightly on desktop */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="w-full lg:w-6/12 relative z-20 mt-12 lg:mt-0 lg:-ml-24 xl:-ml-32"
          >
            <div className="bg-background/95 backdrop-blur-sm p-8 md:p-12 lg:p-16 border-[0.5px] border-accent/10">
              <span className="text-accent uppercase tracking-[0.2em] text-xs font-medium block mb-6">Sobre Nosotros</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal font-serif text-primary mb-10 tracking-tight leading-tight">
                Repostería <br className="hidden sm:block" /> con acento
              </h2>
              
              <div className="space-y-6 text-foreground/80 font-normal text-base leading-relaxed">
                <p>
                  Bienvenido a MARDÓ, Repostería con acento.
                  Somos el único taller en Tabasco especialistas en el
                  Diseño de pasteles, también conocido como CAKE DESIGN desde el 2019
                </p>
                <p>
                  Nuestros pasteles son elaborados y diseñados desde cero, especiales
                  para cualquier tipo de ocasión, siempre cuidando cada detalle y utilizando
                  ingredientes de alta calidad para crear pasteles únicos e inolvidables.
                </p>
                <p>
                  Como parte de nuestra identidad utilizamos como cobertura cada diseño
                  exclusivamente crema de mantequilla/buttercream, así como decoraciones
                  100% comestibles.
                </p>
              </div>

              <div className="flex flex-wrap gap-6 md:gap-10 pt-12 mt-12 border-t-[0.5px] border-accent/20">
                <div>
                  <p className="text-3xl md:text-4xl font-serif text-primary mb-1">2</p>
                  <p className="text-xs uppercase tracking-[0.15em] text-foreground/60 font-medium">Sucursales</p>
                </div>
                <div className="w-[1px] bg-accent/20" />
                <div>
                  <p className="text-3xl md:text-4xl font-serif text-primary mb-1">100%</p>
                  <p className="text-xs uppercase tracking-[0.15em] text-foreground/60 font-medium">Artesanal</p>
                </div>
                <div className="w-[1px] bg-accent/20" />
                <div>
                  <p className="text-3xl md:text-4xl font-serif text-primary mb-1">∞</p>
                  <p className="text-xs uppercase tracking-[0.15em] text-foreground/60 font-medium">Momentos dulces</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
