import { motion } from "motion/react";
import { useInView } from "../hooks/use-in-view";
import { Heart, Wheat, Clock, Award } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Passion & Care",
    description: "Every pastry is crafted with dedication and attention to detail, ensuring perfection in every bite.",
  },
  {
    icon: Wheat,
    title: "Premium Ingredients",
    description: "We source the finest organic flour, butter, and seasonal ingredients from trusted local suppliers.",
  },
  {
    icon: Clock,
    title: "Traditional Methods",
    description: "Time-honored techniques including slow fermentation and hand-lamination for superior flavor and texture.",
  },
  {
    icon: Award,
    title: "Master Craftsmanship",
    description: "Our team of experienced bakers brings decades of expertise to create exceptional baked goods.",
  },
];

export function Implementation() {
  const { ref, inView } = useInView();

  return (
    <section ref={ref} className="py-20 px-6 bg-[var(--warm-gray)]">
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
            How We Make It Happen
          </h2>
          <div className="w-24 h-1 bg-[var(--gold)] mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white p-8 rounded-sm shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[var(--burgundy)]/10 rounded-full flex items-center justify-center">
                    <Icon className="text-[var(--burgundy)]" size={24} />
                  </div>
                  <div>
                    <h3
                      className="text-2xl text-[var(--burgundy)] mb-3"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {value.title}
                    </h3>
                    <p
                      className="text-[var(--dark-brown)]/80 leading-relaxed"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      {value.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
