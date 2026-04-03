import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";

export function Hero() {
  const subtitle = "Repostería con acento".split(" ");

  return (
    <section className="relative h-[100svh] w-full flex items-center justify-start overflow-hidden">
      {/* Full Background Image */}
      <motion.div
        initial={{ scale: 1.2, filter: "blur(10px)" }}
        animate={{ scale: 1, filter: "blur(0px)" }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 w-full h-full"
      >
        <picture>
          <source media="(max-width: 768px)" srcSet="/hero-bg-phn.webp" />
          <img
            src="/hero-bg-dsk.png"
            alt="MARDO logo"
            className="w-full h-full object-cover"
            fetchPriority="high"
          />
        </picture>
        <div className="absolute inset-0" />
      </motion.div>

      {/* Text Content – Overlaid */}
      <div className="relative z-10 flex flex-col items-start justify-center px-8 md:px-16 lg:px-24 mb-32 md:mb-0">
        <div className="max-w-xl text-left">
          <h1 className="flex flex-col mb-4 md:mb-2">
            <div className="flex justify-start overflow-hidden pt-6 md:mb-0">
              <motion.img
                src="/logo/logo.png"
                alt="MARDO Logo"
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.9,
                  delay: 0.2,
                  ease: "easeOut",
                }}
                className="w-auto h-36 sm:h-48 md:h-64 lg:h-80 object-contain drop-shadow-md"
              />
            </div>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="text-xs sm:text-base md:text-xl text-stone-600 py-3 sm:py-4 mb-5 sm:mb-6 max-w-[260px] sm:max-w-sm md:max-w-md font-light text-left leading-relaxed"
          >
            Pasteles y postres para tus momentos más dulces.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.5, type: "spring" }}
            className="flex justify-start"
          >
            <motion.a
              href="/menu"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative overflow-hidden group px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 bg-accent text-accent-foreground rounded-full text-sm sm:text-base md:text-lg font-semibold tracking-wide shadow-xl hover:shadow-2xl transition-all"
            >
              <div className="absolute inset-0 w-[200%] bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-[150%] skew-x-[-45deg] group-hover:translate-x-[50%] transition-transform duration-700 ease-in-out pointer-events-none" />
              <span className="relative z-10 text-white drop-shadow-sm">Ver nuestro menú</span>
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 z-20 pointer-events-none"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="p-3 rounded-full bg-white/50 backdrop-blur-sm shadow-sm"
        >
          <ChevronDown className="text-stone-700" size={28} />
        </motion.div>
      </motion.div>
    </section>
  );
}
