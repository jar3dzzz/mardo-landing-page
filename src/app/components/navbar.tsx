import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { motion } from "motion/react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Inicio", path: "/" },
    { name: "Menú", path: "/menu" },
    { name: "Ubicaciones", path: "/location" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "bg-background/95 backdrop-blur-md shadow-md"
        : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-4xl font-serif text-primary"
            >
              MARDÓ
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                <motion.div
                  whileHover={{ y: -2 }}
                  className={`relative py-2 transition-colors ${location.pathname === link.path
                    ? "text-primary"
                    : "text-foreground/70 hover:text-primary"
                    }`}
                >
                  {link.name}
                  {location.pathname === link.path && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </motion.div>
              </Link>
            ))}
            <motion.a
              href="https://wa.me/message/T6HH3Y6V4TSUA1"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-primary text-primary-foreground rounded-full"
            >
              Ordenar ahora
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-primary"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 pb-4"
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                <div
                  className={`py-3 px-4 rounded-lg transition-colors ${location.pathname === link.path
                    ? "text-primary bg-secondary"
                    : "text-foreground/70"
                    }`}
                >
                  {link.name}
                </div>
              </Link>
            ))}
            <a
              href="https://wa.me/message/T6HH3Y6V4TSUA1"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full mt-4 px-6 py-3 bg-primary text-primary-foreground rounded-full text-center"
            >
              Pedir ahora
            </a>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
