import { motion } from "motion/react";
import { Link } from "react-router";
import { Cookie, Croissant, ChefHat, Home, Compass } from "lucide-react";

export function NotFound() {
  const floatAnimation = (delay: number) => ({
    y: [0, -10, 0],
    rotate: [0, 8, -8, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      repeatType: "reverse" as const,
      ease: "easeInOut",
      delay: delay,
    },
  });

  return (
    <div className="flex-1 flex flex-col items-center justify-center min-h-[75vh] px-6 py-16 bg-gradient-to-b from-secondary/40 to-background relative overflow-hidden">
      {/* Decorative Floating Bakery Items in Background */}
      <motion.div
        animate={floatAnimation(0)}
        className="absolute top-20 left-12 md:left-24 text-accent/20 hidden sm:block"
      >
        <Cookie size={48} />
      </motion.div>
      <motion.div
        animate={floatAnimation(1.5)}
        className="absolute bottom-20 right-12 md:right-24 text-accent/20 hidden sm:block"
      >
        
        <Croissant size={52} />
      </motion.div>
      <motion.div
        animate={floatAnimation(0.7)}
        className="absolute top-1/3 right-16 md:right-32 text-accent/15 hidden md:block"
      >
        <ChefHat size={44} />
      </motion.div>
      <motion.div
        animate={floatAnimation(2.2)}
        className="absolute bottom-1/3 left-16 md:left-32 text-accent/15 hidden md:block"
      >
        <Compass size={40} />
      </motion.div>

      

      {/* Main Glassmorphism Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="p-12 md:p-12 max-w-lg w-full text-center relative z-10"
      >
        {/* Animated Icon Container */}
        {/* <div className="relative w-32 h-32 mx-auto mb-6 flex items-center justify-center bg-secondary/50 rounded-full border border-border">
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
              rotate: [0, 360],
            }}
            transition={{
              rotate: { duration: 25, repeat: Infinity, ease: "linear" },
              scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            }}
            className="absolute inset-0 border border-dashed border-accent/40 rounded-full"
          />
          <ChefHat size={56} className="text-accent" />
        </div> */}

        {/* 404 Text */}
        <p className="text-7xl md:text-7xl text-primary tracking-wide font-bold mb-2">
          Error 404
        </p>
        <p className="text-2xl md:text-3xl font-montserrat text-accent mb-4">
          ¡Ups! Página no encontrada
        </p>

        <div className="w-16 h-[1px] bg-accent/40 mx-auto mb-6" />

        <p className="text-foreground/80 text-base md:text-lg mb-8 max-w-md mx-auto leading-relaxed">
          Parece que esta página no se encuentra en nuestro menú. ¡Regresemos a la cocina!
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-full text-base font-medium shadow-md hover:bg-accent/90 transition-all cursor-pointer"
            >
              <Home size={18} />
              Volver al Inicio
            </motion.button>
          </Link>
          <Link to="/menu">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-transparent border-2 border-primary text-primary hover:bg-primary/5 rounded-full text-base font-medium transition-all cursor-pointer"
            >
              <Compass size={18} />
              Ver el Menú
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
