import { motion } from "motion/react";
import { Link } from "react-router";
import { ChevronDown } from "lucide-react";

export function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1751151856149-5ebf1d21586a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc2FuJTIwcGFzdHJ5JTIwY3JvaXNzYW50JTIwYmFrZXJ5fGVufDF8fHx8MTc3NDAyODYwMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Artisan pastries"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1
            className="text-5xl md:text-7xl text-white mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Where Tradition Meets
            <br />
            <span className="text-[var(--gold)]">Artistry</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-white/90 mb-8"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          Handcrafted pastries and breads made with love, passion, and the finest ingredients
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Link
            to="/menu"
            className="inline-block px-8 py-4 bg-[var(--burgundy)] text-white hover:bg-[var(--accent)] transition-colors rounded-sm"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Explore Our Menu
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="text-white" size={32} />
        </motion.div>
      </motion.div>
    </section>
  );
}
