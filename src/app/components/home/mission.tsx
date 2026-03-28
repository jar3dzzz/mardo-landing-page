import { motion } from "motion/react";
import { useInView } from "../hooks/use-in-view";

export function Mission() {
  const { ref, inView } = useInView();

  return (
    <section ref={ref} className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2
            className="text-4xl md:text-5xl text-[var(--burgundy)] mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Our Mission
          </h2>
          <div className="w-24 h-1 bg-[var(--gold)] mx-auto mb-8" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-[var(--dark-brown)]/80 leading-relaxed mb-6"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          At Maison de Délice, our mission is to bring joy and warmth to every table through
          the art of traditional French baking. We believe that great pastries are more than
          just food—they're an experience that creates memories and brings people together.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl text-[var(--dark-brown)]/80 leading-relaxed"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          We are committed to using only the finest, locally-sourced ingredients and
          time-honored techniques passed down through generations of master bakers.
        </motion.p>
      </div>
    </section>
  );
}
