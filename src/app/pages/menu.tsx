import { motion } from "motion/react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Menu() {
  const menuCategories = [
    {
      title: "Pasteles",
      description: "Nuestros pasteles artesanales para cada celebración",
      sectionImages: [
        "https://images.unsplash.com/photo-1763316727676-3f3b96188def?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaG9jb2xhdGUlMjBjYWtlJTIwbHV4dXJ5JTIwZGVzc2VydHxlbnwxfHx8fDE3NzQwMjkwMzJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1761110657716-1eb3cb62de97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwY2FrZSUyMGx1eHVyeSUyMHdoaXRlfGVufDF8fHx8MTc3NDAyOTAzNXww&ixlib=rb-4.1.0&q=80&w=1080",
      ],
      items: [
        {
          name: "Pastel Clásico de Chocolate",
          price: "$450",
          description: "Capas de chocolate intenso con ganache sedoso",
        },
        {
          name: "Pastel de Celebración",
          price: "Desde $600",
          description:
            "Personalizable en sabores, diseño y tamaño para tu evento",
        },
        {
          name: "Cupcakes Decorados",
          price: "$280 / docena",
          description: "Cupcakes gourmet con decoración artesanal",
        },
        {
          name: "Pastel Red Velvet",
          price: "$480",
          description: "Bizcocho aterciopelado con frosting de queso crema",
        },
        {
          name: "Pastel de Tres Leches",
          price: "$380",
          description:
            "Esponjoso bizcocho bañado en tres leches con crema batida",
        },
        {
          name: "Pastel de Zanahoria",
          price: "$420",
          description:
            "Con nueces pecanas y frosting de queso crema especiado",
        },
      ],
    },
    {
      title: "Postres",
      description: "Dulces tentaciones para cualquier momento",
      sectionImages: [
        "https://images.unsplash.com/photo-1566290194608-bb28b4e091a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVuY2glMjBwYXN0cnklMjBtYWNhcm9ucyUyMGVsZWdhbnR8ZW58MXx8fHwxNzc0MDI5MDMyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      ],
      items: [
        {
          name: "Tarta de Frutas",
          price: "$120",
          description: "Base crujiente con crema de vainilla y frutas frescas",
        },
        {
          name: "Macarons",
          price: "$180 / caja de 6",
          description:
            "Vainilla, chocolate, frambuesa, pistache, limón y rosa",
        },
        {
          name: "Éclair de Chocolate",
          price: "$85",
          description: "Masa choux rellena de crema de chocolate con ganache",
        },
        {
          name: "Crème Brûlée",
          price: "$95",
          description: "Cremosa natilla de vainilla con costra de caramelo",
        },
        {
          name: "Panna Cotta",
          price: "$90",
          description: "Sedosa panna cotta con coulis de frutos rojos",
        },
        {
          name: "Tiramisú",
          price: "$110",
          description:
            "Capas de mascarpone, café espresso y cacao en polvo",
        },
        {
          name: "Mousse de Chocolate",
          price: "$95",
          description: "Chocolate belga 70% con crema batida y frambuesas",
        },
      ],
    },
    {
      title: "Panadería",
      description: "Pan artesanal horneado fresco cada mañana",
      sectionImages: [
        "https://images.unsplash.com/photo-1723985007381-b3dd779fb8ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcm9pc3NhbnQlMjBwYWluJTIwYXUlMjBjaG9jb2xhdHxlbnwxfHx8fDE3NzQwMjkwMzh8MA&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1760681557187-78f31e4d6d29?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwcGFzdHJ5JTIwY3JvaXNzYW50JTIwYmFrZXJ5fGVufDF8fHx8MTc3NDAyOTAzMXww&ixlib=rb-4.1.0&q=80&w=1080",
      ],
      items: [
        {
          name: "Croissant de Mantequilla",
          price: "$45",
          description: "Hojaldrado y dorado a la perfección",
        },
        {
          name: "Pain au Chocolat",
          price: "$55",
          description: "Masa de croissant con relleno de chocolate",
        },
        {
          name: "Croissant de Almendra",
          price: "$60",
          description: "Relleno de crema de almendra con almendras laminadas",
        },
        {
          name: "Baguette Artesanal",
          price: "$40",
          description: "Corteza crujiente con miga suave y aireada",
        },
        {
          name: "Pan de Masa Madre",
          price: "$65",
          description: "Fermentación lenta de 48 horas con sabor profundo",
        },
        {
          name: "Brioche",
          price: "$50",
          description: "Pan dulce con abundante mantequilla y textura sedosa",
        },
        {
          name: "Danish de Frutas",
          price: "$55",
          description: "Hojaldre con crema pastelera y frutas de temporada",
        },
      ],
    },
    {
      title: "Bocadillos",
      description: "Delicias saladas y dulces para acompañar tu día",
      sectionImages: [
        "https://images.unsplash.com/photo-1710077801357-96fce895714a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YXJ0JTIwYmVycnklMjBkZXNzZXJ0JTIwZWxlZ2FudHxlbnwxfHx8fDE3NzQwMjkwMzN8MA&ixlib=rb-4.1.0&q=80&w=1080",
      ],
      items: [
        {
          name: "Colección Premium de Macarons",
          price: "$350 / caja de 12",
          description: "Sabores de temporada y ediciones exclusivas",
        },
        {
          name: "Tarta de Limón y Merengue",
          price: "$130",
          description: "Crema de limón cubierta con merengue tostado",
        },
        {
          name: "Quiche Lorraine",
          price: "$95",
          description: "Base hojaldrada con tocino, gruyère y cebolla",
        },
        {
          name: "Empanada de Espinaca",
          price: "$65",
          description: "Masa artesanal con espinaca, ricotta y nuez moscada",
        },
        {
          name: "Mini Sándwich de Salmón",
          price: "$85",
          description: "Pan brioche con salmón ahumado y queso crema",
        },
        {
          name: "Scone con Mermelada",
          price: "$55",
          description: "Scone de mantequilla con mermelada artesanal y crema",
        },
      ],
    },
    {
      title: "Bebidas",
      description: "El complemento perfecto para tus dulces favoritos",
      sectionImages: [],
      items: [
        {
          name: "Café Americano",
          price: "$45",
          description: "Espresso doble con agua caliente",
        },
        {
          name: "Cappuccino",
          price: "$55",
          description: "Espresso con leche vaporizada y espuma cremosa",
        },
        {
          name: "Latte de Vainilla",
          price: "$65",
          description: "Espresso con leche y jarabe de vainilla natural",
        },
        {
          name: "Chocolate Caliente",
          price: "$60",
          description: "Chocolate belga con leche espumada y marshmallows",
        },
        {
          name: "Té Artesanal",
          price: "$40",
          description: "Selección de tés de hoja suelta — Earl Grey, chamomile, matcha",
        },
        {
          name: "Limonada de Lavanda",
          price: "$55",
          description: "Limón fresco con infusión de lavanda y miel",
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
            <p className="text-accent tracking-[0.3em] uppercase text-sm mb-4 font-medium">
              Elaborado con Pasión
            </p>
            <h1 className="text-5xl md:text-6xl font-serif text-primary mb-6">
              Nuestro Menú
            </h1>
            <div className="w-24 h-[1px] bg-accent mx-auto mb-8" />
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed">
              Descubre nuestra selección de pasteles, postres y bocadillos
              artesanales, elaborados con los mejores ingredientes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Menu Categories */}
      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto">
          {menuCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.05 }}
              className="mb-20 last:mb-0"
            >
              {/* Section Header */}
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-serif text-primary mb-3">
                  {category.title}
                </h2>
                <p className="text-foreground/60 text-sm tracking-wide">
                  {category.description}
                </p>
                <div className="w-16 h-[1px] bg-accent/40 mx-auto mt-4" />
              </div>

              {/* Content: Items + Images */}
              <div
                className={`flex flex-col ${
                  category.sectionImages.length > 0
                    ? categoryIndex % 2 === 0
                      ? "lg:flex-row"
                      : "lg:flex-row-reverse"
                    : ""
                } gap-10 items-start`}
              >
                {/* Items List */}
                <div
                  className={`flex-1 w-full ${
                    category.sectionImages.length > 0 ? "lg:w-3/5" : ""
                  }`}
                >
                  {category.items.map((item, itemIndex) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.4,
                        delay: itemIndex * 0.05,
                      }}
                      className="group py-4 first:pt-0 last:pb-0"
                    >
                      {/* Name ··· Price row */}
                      <div className="flex items-baseline gap-2">
                        <h3 className="text-lg font-serif text-primary shrink-0 group-hover:text-accent transition-colors duration-300">
                          {item.name}
                        </h3>
                        <span className="flex-1 border-b border-dotted border-foreground/20 relative top-[-4px] min-w-[2rem]" />
                        <span className="text-accent font-serif text-base shrink-0 font-medium">
                          {item.price}
                        </span>
                      </div>
                      {/* Description */}
                      <p className="text-foreground/50 text-sm mt-1 leading-relaxed pl-0">
                        {item.description}
                      </p>
                    </motion.div>
                  ))}
                </div>

                {/* Section Images */}
                {category.sectionImages.length > 0 && (
                  <div className="w-full lg:w-2/5 flex flex-col gap-4">
                    {category.sectionImages.map((img, imgIndex) => (
                      <motion.div
                        key={imgIndex}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.6,
                          delay: 0.2 + imgIndex * 0.15,
                        }}
                        className="relative overflow-hidden rounded-lg"
                        style={{
                          aspectRatio:
                            category.sectionImages.length === 1
                              ? "4/3"
                              : "3/2",
                        }}
                      >
                        <ImageWithFallback
                          src={img}
                          alt={`${category.title}`}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Decorative divider before CTA */}
      <div className="flex items-center justify-center py-8">
        <div className="w-2 h-2 rounded-full bg-accent/30" />
        <div className="w-24 h-[1px] bg-accent/20 mx-3" />
        <div className="w-3 h-3 rounded-full bg-accent/50" />
        <div className="w-24 h-[1px] bg-accent/20 mx-3" />
        <div className="w-2 h-2 rounded-full bg-accent/30" />
      </div>

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
