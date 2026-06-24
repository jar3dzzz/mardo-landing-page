import { motion } from "motion/react";
import { useInView } from "@/app/hooks/use-in-view";
import { Heart, Award, Users, School } from "lucide-react";
import { ImageWithFallback } from "@/app/components/shared/figma/ImageWithFallback";

export function Implementation() {
  const { ref, isInView } = useInView();

  const features = [
    {
      icon: Heart,
      title: "Hecho con amor",
      description:
        "Nuestros artesanos dan forma y decoran cada creación con atención meticulosa al detalle.",
    },
    {
      icon: Award,
      title: "Recetas de excelencia",
      description:
        "Nuestras recetas se perfeccionan constantemente para ofrecer sabores únicos e inolvidables.",
    },
    {
      icon: Users,
      title: "Enfoque en la comunidad",
      description:
        "Apoyamos a proveedores locales y participamos activamente en eventos de nuestra comunidad.",
    },
    {
      icon: School,
      title: "Apoyo en la formación de profesionales",
      description:
        "Aceptamos alumnos de diferentes universidades para realizar sus prácticas profesionales y desarrollarse en el ámbito académico y laboral.",
    },
  ];

  return (
    <section ref={ref} className="py-32 md:py-48 px-6 lg:px-12 bg-secondary/30 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center mb-24 md:mb-32"
        >
          <span className="text-accent uppercase tracking-[0.2em] text-xs font-medium block mb-6">Nuestra Filosofía</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-normal text-primary mb-8 tracking-tight">
            Cómo llevamos nuestra misión a la vida
          </h2>
          <div className="w-16 h-px bg-accent/30 mx-auto mb-10" />
          <p className="text-foreground/80 font-normal text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Nuestro compromiso va más allá de las palabras. Así es como
            implementamos nuestros valores cada día.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full relative"
          >
            <div className="aspect-[4/5] sm:aspect-square lg:aspect-[4/5] overflow-hidden rounded-[2px]">
              <ImageWithFallback
                src="/chef.jpg"
                mobileSrc="/chef.webp"
                alt="Repostera trabajando"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Features Flow */}
          <div className="relative border-l-[0.5px] border-accent/20 pl-8 md:pl-12 py-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 1, delay: 0.2 + index * 0.15, ease: "easeOut" }}
                className="mb-16 last:mb-0 relative"
              >
                {/* Connector line and dot to the main border */}
                <div className="absolute top-4 -left-[33px] md:-left-[49px] w-4 h-px bg-accent/40" />
                <div className="absolute top-[14px] -left-[35px] md:-left-[51px] w-[5px] h-[5px] rounded-full bg-accent" />
                
                <feature.icon className="text-primary mb-6" size={32} strokeWidth={1} />
                <h3 className="text-2xl font-serif text-primary mb-4 tracking-wide">
                  {feature.title}
                </h3>
                <p className="text-foreground/80 font-normal text-base leading-relaxed max-w-md">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
