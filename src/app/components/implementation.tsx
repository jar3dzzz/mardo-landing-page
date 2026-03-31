import { motion } from "motion/react";
import { useInView } from "./use-in-view";
import { Clock, Heart, Award, Users, School } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

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
        "Aceptamos alumnos de diferentes universidades para realizar sus prácticas profesionales y desarrollarse en el ámbito académico y laboral",
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
            Cómo llevamos nuestra misión a la vida
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8" />
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
            Nuestro compromiso va más allá de las palabras. Así es como
            implementamos nuestros valores cada día.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <ImageWithFallback
              src="/chef.jpg"
              alt="Repostera trabajando"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </motion.div>

          <div className="grid grid-cols-1 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="flex gap-4 items-start bg-card p-6 rounded-lg shadow-sm"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                  <feature.icon className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-serif text-primary mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-foreground/70">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
