import { motion } from "motion/react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Menu() {
  const menuCategories = [
    {
      title: "Pasteles",
      description: "Nuestros pasteles artesanales para cada celebración",
      items: [
        {
          name: "Pastel Clásico de Chocolate",
          price: "$450",
          description: "Capas de chocolate intenso con ganache sedoso",
          image:
            "https://images.unsplash.com/photo-1763316727676-3f3b96188def?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaG9jb2xhdGUlMjBjYWtlJTIwbHV4dXJ5JTIwZGVzc2VydHxlbnwxfHx8fDE3NzQwMjkwMzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        },
        {
          name: "Pastel de Celebración",
          price: "Desde $600",
          description:
            "Personalizable en sabores, diseño y tamaño para tu evento",
          image:
            "https://images.unsplash.com/photo-1761110657716-1eb3cb62de97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwY2FrZSUyMGx1eHVyeSUyMHdoaXRlfGVufDF8fHx8MTc3NDAyOTAzNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        },
        {
          name: "Cupcakes Decorados",
          price: "$280 / docena",
          description:
            "Docena de cupcakes gourmet con decoración artesanal",
          image:
            "https://images.unsplash.com/photo-1652419536043-8018aaeaf69c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXBjYWtlcyUyMGRlY29yYXRlZCUyMGVsZWdhbnR8ZW58MXx8fHwxNzc0MDI5MDM1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        },
      ],
    },
    {
      title: "Postres",
      description: "Dulces tentaciones para cualquier momento",
      items: [
        {
          name: "Tarta de Frutas",
          price: "$120",
          description:
            "Base crujiente con crema de vainilla y frutas frescas de temporada",
          image:
            "https://images.unsplash.com/photo-1710077801357-96fce895714a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YXJ0JTIwYmVycnklMjBkZXNzZXJ0JTIwZWxlZ2FudHxlbnwxfHx8fDE3NzQwMjkwMzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        },
        {
          name: "Macarons",
          price: "$180 / caja de 6",
          description:
            "Vainilla, chocolate, frambuesa, pistache, limón y rosa",
          image:
            "https://images.unsplash.com/photo-1566290194608-bb28b4e091a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVuY2glMjBwYXN0cnklMjBtYWNhcm9ucyUyMGVsZWdhbnR8ZW58MXx8fHwxNzc0MDI5MDMyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        },
        {
          name: "Éclair de Chocolate",
          price: "$85",
          description:
            "Masa choux rellena de crema de chocolate con ganache",
          image:
            "https://images.unsplash.com/photo-1763316727676-3f3b96188def?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaG9jb2xhdGUlMjBjYWtlJTIwbHV4dXJ5JTIwZGVzc2VydHxlbnwxfHx8fDE3NzQwMjkwMzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        },
      ],
    },
    {
      title: "Panadería",
      description: "Pan artesanal horneado fresco cada mañana",
      items: [
        {
          name: "Croissant",
          price: "$45",
          description: "Mantequilla, hojaldrado y dorado a la perfección",
          image:
            "https://images.unsplash.com/photo-1723985007381-b3dd779fb8ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcm9pc3NhbnQlMjBwYWluJTIwYXUlMjBjaG9jb2xhdHxlbnwxfHx8fDE3NzQwMjkwMzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        },
        {
          name: "Pain au Chocolat",
          price: "$55",
          description: "Masa de croissant con relleno de chocolate",
          image:
            "https://images.unsplash.com/photo-1760681557187-78f31e4d6d29?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwcGFzdHJ5JTIwY3JvaXNzYW50JTIwYmFrZXJ5fGVufDF8fHx8MTc3NDAyOTAzMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        },
        {
          name: "Croissant de Almendra",
          price: "$60",
          description:
            "Croissant relleno de crema de almendra con almendras laminadas",
          image:
            "https://images.unsplash.com/photo-1767379755386-1b213fb63c07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYW5pc2glMjBwYXN0cnklMjBmcmVzaCUyMGJha2VkfGVufDF8fHx8MTc3NDAyOTAzNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        },
      ],
    },
    {
      title: "Bocadillos",
      description: "Delicias saladas y dulces para acompañar tu día",
      items: [
        {
          name: "Colección Premium de Macarons",
          price: "$350 / caja de 12",
          description:
            "Incluye sabores de temporada y ediciones exclusivas",
          image:
            "https://images.unsplash.com/photo-1566290194608-bb28b4e091a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVuY2glMjBwYXN0cnklMjBtYWNhcm9ucyUyMGVsZWdhbnR8ZW58MXx8fHwxNzc0MDI5MDMyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        },
        {
          name: "Tarta de Limón y Merengue",
          price: "$130",
          description:
            "Crema de limón cubierta con merengue tostado",
          image:
            "https://images.unsplash.com/photo-1710077801357-96fce895714a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YXJ0JTIwYmVycnklMjBkZXNzZXJ0JTIwZWxlZ2FudHxlbnwxfHx8fDE3NzQwMjkwMzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-20 bg-secondary/50">
      {/* Hero Section */}
      <section className="relative py-20 px-6 bg-gradient-to-b from-secondary/50 to-background">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-serif text-primary mb-6">
              Nuestro Menú
            </h1>
            <div className="w-24 h-1 bg-accent mx-auto mb-8" />
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
              Descubre nuestra selección de pasteles, postres y bocadillos
              artesanales, elaborados con los mejores ingredientes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Menu Categories */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto space-y-20">
          {menuCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              <div className="text-center mb-12">
                <h2 className="text-4xl font-serif text-primary mb-4">
                  {category.title}
                </h2>
                <p className="text-foreground/70">{category.description}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.items.map((item, itemIndex) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: itemIndex * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all"
                  >
                    <div className="relative h-64 overflow-hidden">
                      <ImageWithFallback
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                      <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-4 py-2 rounded-full font-serif">
                        {item.price}
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-serif text-primary mb-2">
                        {item.name}
                      </h3>
                      <p className="text-foreground/70 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
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
            <h2 className="text-4xl font-serif mb-6">¿Listo para pedir?</h2>
            <p className="text-lg mb-8 text-primary-foreground/90">
              Haz tu pedido por WhatsApp o visítanos en cualquiera de nuestras
              sucursales. También aceptamos pedidos especiales para eventos y
              celebraciones.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="https://wa.me/message/T6HH3Y6V4TSUA1"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-transparent border-2 border-primary-foreground text-primary-foreground rounded-full text-lg hover:bg-primary-foreground/10 transition-colors"
              >
                Pedir por WhatsApp
              </motion.a>
              <motion.a
                href="/location"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-transparent border-2 border-primary-foreground text-primary-foreground rounded-full text-lg hover:bg-primary-foreground/10 transition-colors"
              >
                Ver ubicaciones
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
