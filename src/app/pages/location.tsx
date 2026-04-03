import { motion } from "motion/react";
import { MapPin, Phone, Clock, Navigation } from "lucide-react";

const locations = [
  {
    name: "Mardó – Plaza Vía 2",
    address: "Plaza Via 2, Av. Vía 2 114-2, local #4, Oropeza, 86035 Villahermosa, Tab.",
    phone: "993 278 6227",
    hours: "Lun – Sáb: 10:00 AM – 7:00 PM",
    hours2: "Dom: 11:00 AM – 5:00 PM",
    mapsUrl: "https://maps.app.goo.gl/Y39VQpTJcSd5aruJ8",
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3794.2!2d-92.9416835!3d18.0009146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85eda4a48aef2ea7%3A0x0!2sPlaza+Via!5e0!3m2!1ses!2smx!4v1700000000000!5m2!1ses!2smx",
  },
  {
    name: "Mardó – Plaza Montecarlo",
    address: "Plaza Montecarlo, C. Ceiba local 7B, Primero de Mayo, 86190 Villahermosa, Tab.",
    phone: "993 669 3508",
    hours1: "Lun: Cerrado",
    hours: "Mar – Sáb: 10:00 AM – 7:00 PM",
    hours2: "Dom: 11:00 AM – 5:00 PM",
    mapsUrl: "https://maps.app.goo.gl/r5L15KDQQLZFXxKW9",
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3794.2!2d-92.9563462!3d17.9769507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85eda4a48aef2ea7%3A0x0!2sPlaza+Montecarlo!5e0!3m2!1ses!2smx!4v1700000000000!5m2!1ses!2smx",
  },
];

export function Location() {
  return (
    <div className="flex-1 flex flex-col pt-20 bg-secondary/50">
      {/* Hero Section */}
      <section className="relative py-20 px-6 bg-gradient-to-b from-secondary/50 to-background">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-serif text-primary mb-6">
              Nuestras Ubicaciones
            </h1>
            <div className="w-24 h-[1px] bg-accent mx-auto mb-8" />
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
              Visítanos en cualquiera de nuestras dos sucursales en
              Villahermosa, Tabasco.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {locations.map((loc, index) => (
            <motion.div
              key={loc.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              {/* Map Embed */}
              <div className="relative w-full h-72">
                <iframe
                  title={loc.name}
                  src={loc.embedUrl}
                  className="absolute inset-0 w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  sandbox="allow-scripts allow-same-origin"
                />
              </div>

              {/* Details */}
              <div className="p-8 space-y-5">
                <h2 className="text-3xl font-serif text-primary">{loc.name}</h2>

                <div className="flex items-start gap-3 text-foreground/80">
                  <MapPin size={20} className="mt-1 flex-shrink-0 text-accent" />
                  <span>{loc.address}</span>
                </div>

                <div className="flex items-center gap-3 text-foreground/80">
                  <Phone size={20} className="flex-shrink-0 text-accent" />
                  <a
                    href={`tel:+52${loc.phone.replace(/\s/g, "")}`}
                    className="hover:text-accent transition-colors"
                  >
                    {loc.phone}
                  </a>
                </div>

                <div className="flex items-center gap-3 text-foreground/80">
                  <Clock size={20} className="flex-shrink-0 text-accent" />
                  <span className="whitespace-pre-line">{loc.hours1}<br />{loc.hours}<br />{loc.hours2}</span>
                </div>
                <a
                  href={loc.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="mt-4 w-full flex items-center justify-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-full text-lg hover:bg-accent/90 transition-colors"
                  >
                    <Navigation size={18} />
                    Cómo llegar
                  </motion.button>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-serif mb-6">¿Tienes alguna pregunta?</h2>
            <p className="text-lg mb-8 text-primary-foreground/90">
              Contáctanos por teléfono o visítanos directamente en cualquiera de
              nuestras sucursales. ¡Te esperamos!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="https://wa.me/message/T6HH3Y6V4TSUA1"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-transparent border-2 border-primary-foreground text-primary-foreground rounded-full text-lg hover:bg-primary-foreground/10 transition-colors"
              >
                Ordenar – Plaza Vía 2
              </motion.a>
              <motion.a
                href="https://wa.me/message/WTXHPDKZK5VNO1"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-transparent border-2 border-primary-foreground text-primary-foreground rounded-full text-lg hover:bg-primary-foreground/10 transition-colors"
              >
                Ordenar – Plaza Montecarlo
              </motion.a>
            </div>
            <div className="w-36 h-[1px] bg-accent mx-auto mt-16" />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
