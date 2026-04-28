import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";

const slides = [
  {
    id: 0,
    desktopImg: "/mom-1.webp",
    mobileImg: "/mother/mom-3.webp",
    text: "En MARDÓ celebramos a mamá.",
    buttonText: "Ver diseños",
    buttonHref: "/menu"
  },
  {
    id: 1,
    desktopImg: "/hero-bg-dsk.png",
    mobileImg: "/hero-bg-phn.webp",
    text: "Pasteles y postres para tus momentos más dulces.",
    buttonText: "Ver nuestro menú",
    buttonHref: "/menu"
  }
];

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [currentSlide]);

  return (
    <section className="relative h-[100svh] w-full flex items-center justify-start overflow-hidden">
      {/* Background Images Carousel */}
      <AnimatePresence initial={false}>
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full"
        >
          <picture>
            <source media="(max-width: 768px)" srcSet={slides[currentSlide].mobileImg} />
            <img
              src={slides[currentSlide].desktopImg}
              alt={`Slide ${currentSlide + 1}`}
              className="w-full h-full object-cover"
              fetchPriority={currentSlide === 0 ? "high" : "auto"}
            />
          </picture>
          <div className="absolute inset-0" />
        </motion.div>
      </AnimatePresence>

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

          <div className="min-h-[4rem] sm:min-h-[5rem] md:min-h-[6rem] mb-5 sm:mb-6 flex items-center">
            <AnimatePresence mode="wait">
              <motion.p
                key={currentSlide}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
                className="text-xs sm:text-base md:text-xl text-stone-600 py-3 sm:py-4 max-w-[260px] sm:max-w-sm md:max-w-md font-light text-left leading-relaxed drop-shadow-sm"
              >
                {slides[currentSlide].text}
              </motion.p>
            </AnimatePresence>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.5, type: "spring" }}
            className="flex justify-start"
          >
            <AnimatePresence mode="wait">
              <motion.a
                key={currentSlide}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                href={slides[currentSlide].buttonHref}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                target={slides[currentSlide].buttonHref.startsWith("http") ? "_blank" : undefined}
                rel={slides[currentSlide].buttonHref.startsWith("http") ? "noopener noreferrer" : undefined}
                className="relative overflow-hidden group px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 bg-accent text-accent-foreground rounded-full text-sm sm:text-base md:text-lg font-semibold tracking-wide shadow-xl hover:shadow-2xl transition-all"
              >
                <div className="absolute inset-0 w-[200%] bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-[150%] skew-x-[-45deg] group-hover:translate-x-[50%] transition-transform duration-700 ease-in-out pointer-events-none" />
                <span className="relative z-10 text-white drop-shadow-sm">{slides[currentSlide].buttonText}</span>
              </motion.a>
            </AnimatePresence>
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

      {/* Pagination Dots */}
      <div className="absolute bottom-8 md:bottom-12 right-8 md:right-16 z-30 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 md:w-4 md:h-4 rounded-full transition-all duration-300 ${currentSlide === index ? "bg-white scale-110 shadow-md" : "bg-white/40 hover:bg-white/80"
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

