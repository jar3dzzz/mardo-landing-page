import { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const handleClickOutside = (e: MouseEvent | TouchEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: "Inicio", path: "/" },
    { name: "Menú", path: "/menu" },
    { name: "Ubicaciones", path: "/location" },
  ];

  return (
    <motion.nav
      ref={navRef}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isMobileMenuOpen
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
              className="flex justify-start items-start overflow-hidden pt-2 pb-1 pr-2"
            >
              {"MARDÓ".split("").map((letter, i) => (
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
                  className="inline-block text-4xl font-bold tracking-tighter text-primary origin-bottom drop-shadow-md leading-none"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {letter}
                </motion.span>
              ))}
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="text-[0.65rem] font-bold text-primary ml-0.5 mt-0.5"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                ®
              </motion.span>
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
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              key="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              className="md:hidden overflow-hidden"
            >
              <div className="mt-4 pb-4">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{
                      duration: 0.25,
                      delay: index * 0.05,
                      ease: "easeOut",
                    }}
                  >
                    <Link
                      to={link.path}
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                      }}
                      className="block"
                    >
                      <div
                        className={`py-3 px-4 rounded-lg transition-colors cursor-pointer ${location.pathname === link.path
                          ? "text-primary bg-secondary"
                          : "text-foreground/70"
                          }`}
                      >
                        {link.name}
                      </div>
                    </Link>
                  </motion.div>
                ))}
                <motion.a
                  href="https://wa.me/message/T6HH3Y6V4TSUA1"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{
                    duration: 0.25,
                    delay: navLinks.length * 0.05,
                    ease: "easeOut",
                  }}
                  className="block w-full mt-4 px-6 py-3 bg-primary text-primary-foreground rounded-full text-center"
                >
                  Pedir ahora
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
