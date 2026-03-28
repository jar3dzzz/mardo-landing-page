import { motion } from "motion/react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Menu() {
  const menuCategories = [
    {
      title: "Pasteles",
      description: "Nuestros pasteles artesanales para cada celebración",
      sectionImages: [
        "/menu/menu-1.jpg",
        "/menu/menu-2.jpg",
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
          name: "Pastel de Cuatro Leches",
          price: "$380",
          description:
            "Esponjoso bizcocho bañado en cuatro leches con crema batida",
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
        "/menu/menu-3.jpg",
        "/menu/menu-7.jpg",
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
        "/menu/menu-4.jpg",
        "/menu/menu-5.jpg",
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
        "/menu/menu-6.jpg"
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
                className={`flex ${category.sectionImages.length > 0
                  ? categoryIndex % 2 === 0
                    ? "flex-row"
                    : "flex-row-reverse"
                  : ""
                  } gap-4 sm:gap-6 lg:gap-10 items-stretch`}
              >
                {/* Items List */}
                <div
                  className={`flex-1 min-w-0 ${category.sectionImages.length > 0 ? "" : "w-full"
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
                      className="group py-3 sm:py-4 first:pt-0 last:pb-0"
                    >
                      {/* Name + Price row */}
                      <div className="flex items-baseline gap-1 sm:gap-2">
                        <h3 className="text-base sm:text-lg font-serif text-primary shrink-0 group-hover:text-accent transition-colors duration-300">
                          {item.name}
                        </h3>
                        <span className="flex-1 border-b border-dotted border-foreground/20 relative top-[-4px] min-w-[1rem] sm:min-w-[2rem] hidden sm:block" />
                        <span className="text-accent font-serif text-sm sm:text-base shrink-0 font-medium ml-auto sm:ml-0">
                          {item.price}
                        </span>
                      </div>
                      {/* Description */}
                      <p className="text-foreground/50 text-xs sm:text-sm mt-1 leading-relaxed pl-0">
                        {item.description}
                      </p>
                    </motion.div>
                  ))}
                </div>

                {/* Section Images - always to the side, matching text height */}
                {category.sectionImages.length > 0 && (
                  <div className="w-[120px] sm:w-[160px] md:w-[200px] lg:w-2/5 shrink-0 flex flex-col gap-3 sm:gap-4">
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
                        className="relative overflow-hidden rounded-lg sm:rounded-xl flex-1 min-h-0"
                      >
                        <ImageWithFallback
                          src={img}
                          alt={`${category.title}`}
                          className="w-full h-full object-cover absolute inset-0"
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
