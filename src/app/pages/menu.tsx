import { motion } from "motion/react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Menu() {
  const menuCategories = [
    {
      title: "Menu Tienda",
      description: "Dulces tentaciones para cualquier momento",
      sectionImages: [
        "/menu/menu-3.jpeg",
        "/menu/menu-7.jpg",
      ],
      items: [
        {
          name: "Pastel Carajillo",
          price: "$570",
          description: "Para 15-18 personas",
        },
        {
          name: "Pastel Ferrero",
          price: "$450",
          description:
            "Para 8-10 personas",
        },
        {
          name: "Pastel Cuatro Leches",
          price: "$570",
          description: "Para 15 personas",
        },
        {
          name: "Pastel Zanahoria",
          price: "$430",
          description: "Para 8-10 personas",
        },
        {
          name: "Pay de Macadamia",
          price: "$470",
          description: "Para 8-10 personas",
        },
        {
          name: "Cheesecake NY",
          price: "$570",
          description:
            "Para 8-10 personas",
        },
        {
          name: "Tarta Vasca Frutos Rojos",
          price: "$450",
          description:
            "Para 8 personas",
        },
      ],
    },
    {
      title: "Postres",
      description: "Postres individuales",
      sectionImages: [
        "/menu/menu-5.jpg",
        "/menu/menu-4.jpeg",
      ],
      items: [
        {
          name: "Rol 4 Leches",
          price: "$80",
          description: "Rol de canela mojado en 4 leches",
        },
        {
          name: "Brownie Rochier",
          price: "$80",
          description: "Individual",
        },
        {
          name: "Esfera Mardó",
          price: "$80",
          description: "Individual",
        },
        {
          name: "Galleta Red Velvet",
          price: "$55",
        },
        {
          name: "Galleta Triple Chocolate",
          price: "$60",
        },
        {
          name: "Galleta White Macadamia",
          price: "$65",
        },
        {
          name: "Brownie Tradicional",
          price: "$60",
        },
        {
          name: "Tiramisu",
          price: "$190",
          description: "290g",
        },
      ],
    },
    {
      title: "Rebanadas",
      description: "Nuestros pasteles en rebanadas",
      sectionImages: [
        "/menu/menu-6.jpeg",
        "/menu/menu-8.jpg",
      ],
      items: [
        {
          name: "Tarta Vasca",
          price: "$85",
          description: "Tarta vasca de frutos rojos",
        },
        {
          name: "4 Leches Queso de Bola",
          price: "$85",
          description: "Pan de 4 leches con relleno de crema de queso de bola",
        },
        {
          name: "Cheesecake NY",
          price: "$95",
          description: "Cheesecake NY con frutos rojos",
        },
        {
          name: "Ferrero",
          price: "$85",
          description: "Pan de chocolate con relleno de ferrero y crema de chocolate",
        },
        {
          name: "Carajillo",
          price: "$95",
          description: "Rebanda pastel Carajillo",
        },
        {
          name: "Beso de Zanahoria",
          price: "$130",
          description: "Un cuarto de pastel",
        },
        {
          name: "Pay de Macadamia",
          price: "$85",
          description: "Rebanada",
        },
        {
          name: "Cheesecake Lotus",
          price: "$115",
          description: "Rebanada",
        },
      ],
    },
    {
      title: "Pasteles",
      description: "Precios base, pueden variar según tamaño y decoración",
      sectionImages: [
        "/menu/menu-1.jpg",
      ],
      items: [
        {
          name: "10 - 15 personas",
          price: "$950",
        },
        {
          name: "20 - 25 personas",
          price: "$1,550",
        },
        {
          name: "30 - 35 personas",
          price: "$2,250",
        },
        {
          name: "40 - 50 personas",
          price: "$2,900",
        },
        {
          name: "60 - 70 personas",
          price: "$3,750",
        },
      ],
    },
    {
      title: "Sabores",
      description: "El signo $ representa un costo adicional sobre el precio base",
      sectionImages: [
        "/menu/menu-2.jpg",
        "/menu/menu-10.jpg",
        "/menu/menu-11.jpg",
      ],
      items: [
        {
          name: "Tradicional Queso de bola",
          description: "Pan de mantequilla con relleno de crema de queso de bola",
        },
        {
          name: "Pastel Framboisier",
          description: "Pan de mantequilla con relleno queso crema de frambuesa",
        },
        {
          name: "Dolce 4 leches",
          description: "Pan de 4 leches con relleno de dulce de leche y crema pastelera de vainilla",
        },
        {
          name: "Dolce Nuez",
          description: "Pan de 4 leches con relleno de crema pastelera de vainilla y nuez caramelizada",
        },
        {
          name: "Intenso Chocolate $",
          description: "Pan de chocolate con relleno de ganache de chocolate semi-oscuro",
        },
        {
          name: "Choco-Caramelo",
          description: "Pan de chocolate con relleno de queso crema y caramelo suave",
        },
        {
          name: "Intenso Ferrero $",
          description: "Pan de chocolate con relleno de ferrero y crema de chocolate",
        },
        {
          name: "Carajillo $",
          description: "Pan de chocolate con relleno de licor 43 con crema de café y ganache de chocolate oscuro",
        },
        {
          name: "Choco Delicia $",
          description: "Pan de chocolate con relleno de manjar de dulce de leche",
        },
      ],
    },
  ];

  return (
    <div className="flex-1 flex flex-col pt-20 bg-secondary/50 overflow-x-hidden">
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
                      <div className="flex items-baseline gap-2">
                        <h3 className="text-base sm:text-lg font-serif text-primary group-hover:text-accent transition-colors duration-300 shrink min-w-0">
                          {item.name}
                        </h3>
                        <span className="flex-1 border-b border-dotted border-foreground/20 relative top-[-4px] min-w-[2rem] hidden sm:block" />
                        <span className="text-accent font-serif text-sm sm:text-base font-medium shrink-0 whitespace-nowrap ml-auto sm:ml-0">
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
            <div className="w-36 h-[1px] bg-accent mx-auto mt-16" />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
