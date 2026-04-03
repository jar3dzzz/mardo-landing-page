import { motion } from "motion/react";
import { useInView } from "./use-in-view";

export function Mission() {
  const { ref, isInView } = useInView();

  return (
    <section ref={ref} className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-primary mb-6">
            Nuestra Misión
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8" />
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            En MARDÓ, nuestra misión es crear repostería artesanal que haga
            especial cada momento. Creemos que cada postre cuenta una
            historia, y nos dedicamos a que cada uno sea inolvidable.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Autenticidad",
              description:
                "Honramos las técnicas Francesas que nos inspiran, asegurándonos de que cada bocado sea auténtico y lleno de sabor.",
            },
            {
              title: "Calidad",
              description:
                "Solo los mejores ingredientes llegan a nuestra cocina, seleccionados cuidadosamente de proveedores de confianza.",
            },
            {
              title: "Pasión",
              description:
                "Nuestros reposteros ponen el corazón en cada creación, tratando cada postre como una obra de arte.",
            },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-card p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-2xl font-serif text-primary mb-4">
                {item.title}
              </h3>
              <p className="text-foreground/70 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
