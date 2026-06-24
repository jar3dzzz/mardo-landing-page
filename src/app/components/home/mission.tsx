import { motion } from "motion/react";
import { useInView } from "@/app/hooks/use-in-view";

export function Mission() {
  const { ref, isInView } = useInView();

  const values = [
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
  ];

  return (
    <section ref={ref} className="py-32 md:py-48 px-6 lg:px-12 bg-background relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
          
          {/* Header Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
            className="lg:col-span-5 flex flex-col justify-center"
          >
            <span className="text-accent uppercase tracking-[0.2em] text-xs font-medium block mb-6">Nuestra Misión</span>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif font-normal text-primary mb-10 tracking-tight leading-tight">
              Crear instantes <br className="hidden sm:block"/> inolvidables
            </h2>
            <div className="w-16 h-px bg-accent/30 mb-10" />
            <p className="text-foreground/80 font-normal text-lg md:text-xl leading-relaxed max-w-md">
              En MARDÓ, nuestra misión es crear repostería artesanal que haga
              especial cada momento. Creemos que cada postre cuenta una
              historia, y nos dedicamos a que cada uno sea inolvidable.
            </p>
          </motion.div>

          {/* Values Side */}
          <div className="lg:col-span-6 lg:col-start-7 flex flex-col justify-center">
            {values.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.3 + index * 0.2, ease: "easeOut" }}
                className="py-10 border-b-[0.5px] border-accent/20 last:border-0 relative group"
              >
                <h3 className="text-3xl font-serif text-primary mb-4 transition-colors duration-500 group-hover:text-accent tracking-wide">
                  {item.title}
                </h3>
                <p className="text-foreground/80 font-normal text-base leading-relaxed max-w-lg">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
