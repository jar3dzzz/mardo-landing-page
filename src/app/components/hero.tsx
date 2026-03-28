import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";

export function Hero() {
  const title = "MARDÓ".split("");
  const subtitle = "Repostería con acento".split(" ");

  return (
    <section className="relative h-[100svh] flex items-center justify-start overflow-hidden">
      {/* Full Background Image */}
      <motion.div
        initial={{ scale: 1.2, filter: "blur(10px)" }}
        animate={{ scale: 1, filter: "blur(0px)" }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 w-full h-full"
      >
        <picture>
          <source media="(max-width: 768px)" srcSet="/hero-bg-phn.png" />
          <img
            src="/hero-bg-dsk.png"
            alt="Elegant pastries"
            className="w-full h-full object-cover"
          />
        </picture>
        <div className="absolute inset-0" />
      </motion.div>

      {/* Text Content – Overlaid */}
      <div className="relative z-10 flex flex-col items-start justify-center px-8 md:px-16 lg:px-24 mb-32 md:mb-0">
        <div className="max-w-xl text-left">
          <h1 className="flex flex-col mb-4 md:mb-6">
            <div className="flex justify-start overflow-hidden pt-4 pb-2 -mb-2">
              {title.map((letter, i) => (
                <motion.span
                  key={i}
                  initial={{ y: "100%", opacity: 0, rotateX: -90 }}
                  animate={{ y: 0, opacity: 1, rotateX: 0 }}
                  transition={{
                    duration: 0.9,
                    delay: 0.2 + i * 0.1,
                    type: "spring",
                    bounce: 0.4,
                  }}
                  className="inline-block text-6xl md:text-8xl lg:text-[8rem] font-cyrillic-ext font-bold tracking-tighter text-stone-900 origin-bottom drop-shadow-sm leading-none"
                >
                  {letter}
                </motion.span>
              ))}
            </div>

            <div className="flex flex-wrap justify-start gap-x-2 mt-2 md:mt-4 overflow-hidden">
              {subtitle.map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.7,
                    delay: 0.8 + i * 0.1,
                    ease: "easeOut",
                  }}
                  className="inline-block text-2xl md:text-4xl lg:text-5xl font-serif italic text-accent"
                >
                  {word}
                </motion.span>
              ))}
            </div>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="text-base md:text-xl text-stone-600 mb-8 max-w-sm md:max-w-md mx-auto font-light"
          >
            Pasteles, postres y bocadillos para tus momentos más dulces.
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
              className="relative overflow-hidden group px-10 py-4 md:py-5 bg-accent text-accent-foreground rounded-full text-lg font-semibold tracking-wide shadow-xl hover:shadow-2xl transition-all"
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
