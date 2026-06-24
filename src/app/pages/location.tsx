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
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3794.2!2d-92.9416835!3d18.0009146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85eda4a48aef2ea7%3A0x0!2sPlaza+Via!5e0!3m2!1ses!2smx!4v1700000000000!5m2!1ses!2smx",
  },
  {
    name: "Mardó – Plaza Montecarlo",
    address: "Plaza Montecarlo, C. Ceiba local 7B, Primero de Mayo, 86190 Villahermosa, Tab.",
    phone: "993 669 3508",
    hours1: "Lun: Cerrado",
    hours: "Mar – Sáb: 10:00 AM – 7:00 PM",
    hours2: "Dom: 11:00 AM – 5:00 PM",
    mapsUrl: "https://maps.app.goo.gl/r5L15KDQQLZFXxKW9",
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3794.2!2d-92.9563462!3d17.9769507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85eda4a48aef2ea7%3A0x0!2sPlaza+Montecarlo!5e0!3m2!1ses!2smx!4v1700000000000!5m2!1ses!2smx",
  },
];

export function Location() {
  return (
    <div className="flex-1 flex flex-col pt-24 bg-background">
      {/* Hero Section */}
      <section className="relative py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-5xl font-serif text-foreground font-normal mb-8">
              Nuestras Ubicaciones
            </h1>
            <div className="w-16 h-[1px] bg-accent/40 mx-auto mb-8" />
            <p className="text-base sm:text-lg font-normal text-foreground/90 max-w-xl mx-auto">
              Visítanos en cualquiera de nuestras dos sucursales en Villahermosa, Tabasco.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="pb-32 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {locations.map((loc, index) => (
            <motion.div
              key={loc.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-card border border-border/40 rounded-sm overflow-hidden flex flex-col"
            >
              {/* Map Embed */}
              <div className="relative w-full aspect-video bg-muted/20">
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
              <div className="p-10 flex-1 flex flex-col justify-between">
                <div>
                  <h2 className="text-2xl font-serif font-normal text-foreground mb-8">{loc.name}</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <MapPin strokeWidth={2} size={20} className="mt-1 flex-shrink-0 text-accent" />
                      <span className="text-base font-normal text-foreground leading-relaxed">{loc.address}</span>
                    </div>

                    <div className="flex items-center gap-4">
                      <Phone strokeWidth={2} size={20} className="flex-shrink-0 text-accent" />
                      <a
                        href={`tel:+52${loc.phone.replace(/\s/g, "")}`}
                        className="text-base font-normal text-foreground hover:text-accent transition-colors py-2"
                      >
                        {loc.phone}
                      </a>
                    </div>

                    <div className="flex items-start gap-4">
                      <Clock strokeWidth={2} size={20} className="mt-1 flex-shrink-0 text-accent" />
                      <span className="text-base font-normal text-foreground whitespace-pre-line leading-relaxed">
                        {loc.hours1 && <>{loc.hours1}<br /></>}
                        {loc.hours}<br />{loc.hours2}
                      </span>
                    </div>
                  </div>
                </div>

                <a
                  href={loc.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-10 block"
                >
                  <motion.button
                    whileHover={{ backgroundColor: "var(--color-secondary)" }}
                    className="w-full flex items-center justify-center gap-3 px-8 py-5 border border-primary/20 text-sm font-medium text-foreground tracking-widest uppercase transition-colors shadow-sm hover:shadow-md"
                  >
                    <Navigation strokeWidth={2} size={16} />
                    Cómo llegar
                  </motion.button>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-32 px-6 bg-secondary/30">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-serif font-normal text-foreground mb-6">¿Tienes alguna pregunta?</h2>
            <p className="text-base font-normal text-foreground/90 mb-12 max-w-lg mx-auto">
              Contáctanos por teléfono o visítanos directamente en cualquiera de nuestras sucursales. ¡Te esperamos!
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="https://wa.me/message/T6HH3Y6V4TSUA1"
                className="px-10 py-5 bg-primary text-primary-foreground text-sm font-medium tracking-[0.2em] uppercase hover:bg-primary/90 transition-colors shadow-lg"
              >
                Ordenar – Plaza Vía 2
              </a>
              <a
                href="https://wa.me/message/WTXHPDKZK5VNO1"
                className="px-10 py-5 border border-primary text-primary text-sm font-medium tracking-[0.2em] uppercase hover:bg-primary/5 transition-colors shadow-sm"
              >
                Ordenar – Montecarlo
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}