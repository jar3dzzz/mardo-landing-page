import { motion } from "motion/react";
import { useInView } from "../hooks/use-in-view";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sophie Martin",
    role: "Regular Customer",
    content: "The croissants here are simply divine! They remind me of my grandmother's baking in Provence. The buttery layers and perfect flakiness are unmatched.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1610896011062-1df767af9f6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMGJha2VyJTIwc21pbGluZyUyMHdvbWFufGVufDF8fHx8MTc3NDAyODYwNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    name: "Jean-Pierre Dubois",
    role: "Food Critic",
    content: "Maison de Délice is a true gem. Their commitment to traditional techniques while maintaining exceptional quality is remarkable. A must-visit for any pastry lover.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1635139883269-5665b2647ce8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMGJha2VyJTIwc21pbGluZyUyMG1hbnxlbnwxfHx8fDE3NzQwMjg2MDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    name: "Emma Thompson",
    role: "Wedding Client",
    content: "They created the most beautiful and delicious wedding cake for us. Every guest was raving about it. The attention to detail and flavor combinations were extraordinary.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1610896011062-1df767af9f6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMGJha2VyJTIwc21pbGluZyUyMHdvbWFufGVufDF8fHx8MTc3NDAyODYwNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
];

export function Testimonials() {
  const { ref, inView } = useInView();

  return (
    <section ref={ref} className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl md:text-5xl text-[var(--burgundy)] mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            What Our Clients Say
          </h2>
          <div className="w-24 h-1 bg-[var(--gold)] mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-[var(--warm-gray)] p-8 rounded-sm"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-[var(--gold)] text-[var(--gold)]"
                  />
                ))}
              </div>

              <p
                className="text-[var(--dark-brown)]/80 mb-6 leading-relaxed italic"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4
                    className="text-[var(--burgundy)]"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {testimonial.name}
                  </h4>
                  <p
                    className="text-sm text-[var(--dark-brown)]/60"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
