import { Facebook, Instagram, MapPin, Phone, MessageCircle } from "lucide-react";
import { Link } from "react-router";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-3xl font-serif mb-2">MARDÓ</h3>
            <p className="text-primary-foreground/60 italic mb-4">
              Repostería con acento
            </p>
            <p className="text-primary-foreground/80 mb-4 max-w-md">
              Pasteles, postres y bocadillos artesanales para tus momentos más
              dulces. Haz tu pedido por WhatsApp.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/mardo_reposteria/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.facebook.com/casasucrereposteria"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://wa.me/message/T6HH3Y6V4TSUA1"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
              >
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-xl mb-4">Navegación</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  to="/menu"
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Menú
                </Link>
              </li>
              <li>
                <Link
                  to="/location"
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Ubicaciones
                </Link>
              </li>
              <li>
                <a
                  href="https://wa.me/message/T6HH3Y6V4TSUA1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Pedir por WhatsApp
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-xl mb-4">Contacto</h4>
            <ul className="space-y-3 text-primary-foreground/80">
              <li className="flex items-start gap-2">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span>
                  Plaza Vía 2, Av. Vía 2 114-2, local #4, Villahermosa, Tab.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span>
                  Plaza Montecarlo, C. Ceiba local 7B, Villahermosa, Tab.
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={18} className="flex-shrink-0" />
                <span>993 278 6227 / 993 669 3508</span>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle size={18} className="flex-shrink-0" />
                <a
                  href="https://wa.me/message/T6HH3Y6V4TSUA1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                >
                  WhatsApp – Haz tu pedido
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/20 text-center text-primary-foreground/60">
          <p>
            &copy; {new Date().getFullYear()} MARDÓ — Repostería con acento.
            Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
