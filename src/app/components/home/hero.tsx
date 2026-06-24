import { motion } from "motion/react";

export function Hero() {
  return (
    <section className="relative h-[100svh] w-full flex items-center justify-start overflow-hidden bg-background">
      {/* Full Background Image */}
      <motion.div
        initial={{ scale: 1.05, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
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
        {/* Subtle gradient overlay to ensure text readability without ruining the image */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent sm:bg-gradient-to-r sm:from-background/60 sm:via-background/10 sm:to-transparent" />
      </motion.div>

      {/* Text Content */}
      <div className="relative z-10 w-full px-8 translate-y-18 md:px-16 lg:px-24">
        <div className="max-w-xl">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
            className="mb-8"
          >
            <img
              src="/logo/logo.png"
              alt="MARDO Logo"
              className="w-auto h-36 sm:h-32 md:h-48 object-contain"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            className="text-foreground/90 font-normal text-lg sm:text-xl md:text-2xl leading-relaxed mb-12 max-w-sm sm:max-w-md"
          >
            Pasteles y postres para tus momentos más dulces.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            <a
              href="/menu"
              className="inline-block px-10 py-5 sm:px-12 sm:py-5 border-[0.5px] border-primary/30 text-primary text-xs sm:text-sm font-medium tracking-[0.2em] uppercase hover:bg-primary hover:text-primary-foreground transition-colors duration-500 backdrop-blur-sm shadow-sm"
            >
              Ver nuestro menú
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
