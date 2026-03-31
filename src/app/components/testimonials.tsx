import { motion } from "motion/react";
import { useInView } from "./use-in-view";
import { Star, Quote } from "lucide-react";

export function Testimonials() {
  const { ref, isInView } = useInView();

  const testimonials = [
    {
      name: "Arturo Sánchez",
      role: "Novio satisfecho",
      text: "Fue increíble el dia de hoy y todos me hablan super bien de tu pastel, Te queremos mucho la novia y yo. Dios bendiga su negocio tu talento.",
      rating: 5,
    },
    {
      name: "Alejandro Betancourt",
      role: "Reseña de Google",
      text: "Pedí un pastel de chocolate, está riquísimo, el servicio fue muy bueno, el trato del personal también muy grato, recomiendo el lugar, los postres son muy sabrosos.",
      rating: 5,
    },
    {
      name: "Edward Isaac Ayala",
      role: "Reseña de Google",
      text: "Muy ricos y los precios son asequibles, les recomiendo mucho el de roles :).",
      rating: 5,
    },
  ];

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
            Lo que dicen nuestros clientes
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8" />
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
            No solo lo decimos nosotros. Esto es lo que nuestros clientes
            opinan de su experiencia.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-card p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow relative"
            >
              <Quote
                className="absolute top-6 right-6 text-accent/20"
                size={40}
              />

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="text-accent fill-accent"
                    size={18}
                  />
                ))}
              </div>

              <p className="text-foreground/80 mb-6 italic leading-relaxed">
                "{testimonial.text}"
              </p>

              <div>
                <p className="font-serif text-lg text-primary">
                  {testimonial.name}
                </p>
                <p className="text-sm text-foreground/60">
                  {testimonial.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
