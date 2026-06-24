import { motion, AnimatePresence } from "motion/react";
import { useInView } from "@/app/hooks/use-in-view";
import { useState, useEffect } from "react";

export function Testimonials() {
  const { ref, isInView } = useInView();
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Arturo Sánchez",
      role: "Novio satisfecho",
      text: "Fue increíble el dia de hoy y todos me hablan super bien de tu pastel, te queremos mucho la novia y yo. Dios bendiga su negocio y talento.",
    },
    {
      name: "Alejandro Betancourt",
      role: "Reseña de Google",
      text: "Pedí un pastel de chocolate, está riquísimo, el servicio fue muy bueno, el trato del personal también muy grato, recomiendo el lugar, los postres son muy sabrosos.",
    },
    {
      name: "Edward Isaac Ayala",
      role: "Reseña de Google",
      text: "Muy ricos y los precios son asequibles, les recomiendo mucho el de roles :).",
    },
  ];

  useEffect(() => {
    if (!isInView) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000); // 6 seconds per testimonial
    return () => clearInterval(interval);
  }, [isInView, testimonials.length]);

  return (
    <section ref={ref} className="py-32 md:py-48 px-6 lg:px-12 bg-secondary/30 relative">
      <div className="max-w-4xl mx-auto text-center">
        <span className="text-accent uppercase tracking-[0.2em] text-xs sm:text-sm font-medium block mb-16 md:mb-24">
          Lo que dicen nuestros clientes
        </span>

        {/* Contenedor fluido sin alturas absolutas */}
        <div className="relative grid grid-cols-1 grid-rows-1 max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="col-start-1 row-start-1 flex flex-col items-center justify-center min-h-[300px] md:min-h-[250px] bg-card/60 backdrop-blur-md p-8 sm:p-12 md:p-16 border-[0.5px] border-accent/20 rounded-[2px] shadow-[0_20px_60px_-15px_rgba(70,59,41,0.05)] relative overflow-hidden"
            >
              <div className="absolute top-2 left-6 text-accent/10 font-serif text-[120px] leading-none pointer-events-none select-none">
                &ldquo;
              </div>

              <p className="relative z-10 text-xl sm:text-2xl md:text-3xl font-serif font-normal leading-relaxed md:leading-relaxed text-foreground/90 mb-10 italic">
                "{testimonials[currentIndex].text}"
              </p>
              
              <div className="relative z-10 flex flex-col items-center justify-center mt-auto">
                <div className="w-12 h-[1px] bg-accent/40 mb-6" />
                <p className="text-base sm:text-lg text-foreground mb-2 font-medium tracking-wide">
                  {testimonials[currentIndex].name}
                </p>
                <p className="text-xs sm:text-sm uppercase tracking-[0.15em] text-foreground/60 font-medium">
                  {testimonials[currentIndex].role}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Custom Paginator Dots - Massive tap targets for accessibility */}
        <div className="flex justify-center gap-6 mt-16 md:mt-24">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className="p-3 group"
              aria-label={`Ver testimonio ${index + 1}`}
            >
              <span 
                className={`block w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-500 ${
                  index === currentIndex ? "bg-accent scale-150" : "bg-accent/30 group-hover:bg-accent/60"
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}