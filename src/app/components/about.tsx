import { motion } from "motion/react";
import { useInView } from "./use-in-view";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function About() {
  const { ref, isInView } = useInView();

  return (
    <section ref={ref} id="about" className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-primary mb-6">
            Sobre Nosotros
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <ImageWithFallback
              src="/about.jpg"
              mobileSrc="/about.webp"
              alt="Interior de nuestra repostería"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-serif text-primary">
              Repostería con acento
            </h3>
            <p className="text-foreground/80 leading-relaxed">
              Bienvenido a MARDÓ, Repostería con acento.
              Somos el único taller en Tabasco especialistas en el
              Diseño de pasteles, también conocido como CAKE DESIGN desde el 2019
            </p>
            <p className="text-foreground/80 leading-relaxed">
              Nuestros pasteles son elaborados y diseñados desde cero, especiales
              para cualquier tipo de ocasión, siempre cuidando cada detalle y utilizando
              ingredientes de alta calidad para crear pasteles únicos e inolvidables.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              Como parte de nuestra identidad utilizamos como cobertura cada diseño
              exclusivamente crema de mantequilla/buttercream, así como decoraciones
              100% comestibles.
            </p>
            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="text-center">
                <p className="text-4xl font-serif text-primary">2</p>
                <p className="text-sm text-foreground/60">Sucursales</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-serif text-primary">100%</p>
                <p className="text-sm text-foreground/60">Artesanal</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-serif text-primary">∞</p>
                <p className="text-sm text-foreground/60">Momentos dulces</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
