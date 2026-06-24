import { AnimatePresence, motion } from "motion/react";
import { X } from "lucide-react";
import { useState, useEffect } from "react";
import { ImageWithFallback } from "@/app/components/shared/figma/ImageWithFallback";

type MenuItem = {
  name: string;
  price?: string;
  description?: string;
  subDescription?: string;
  image?: string;
};

type MenuCategory = {
  title: string;
  description?: string;
  sectionImages: string[];
  items: MenuItem[];
};

function MenuItemCard({ item, itemIndex }: { item: MenuItem; itemIndex: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ duration: 0.8, delay: itemIndex * 0.05, ease: "easeOut" }}
      className="py-6 first:pt-0 last:pb-0"
    >
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="text-xl sm:text-2xl font-serif text-primary tracking-tight">
          {item.name}
        </h3>
        {item.price && (
          <>
            <span className="flex-1 border-b-[0.5px] border-dotted border-primary/20 relative top-[-6px] min-w-[2rem]" />
            <span className="text-primary font-serif text-lg sm:text-xl tracking-wide shrink-0">
              {item.price}
            </span>
          </>
        )}
      </div>

      {item.subDescription && (
        <p className="text-accent text-xs sm:text-sm uppercase tracking-[0.2em] mt-3 font-medium">
          {item.subDescription}
        </p>
      )}

      {item.description && (
        <p className="text-foreground/80 font-normal text-sm sm:text-base mt-3 leading-loose whitespace-pre-line max-w-2xl">
          {item.description}
        </p>
      )}
    </motion.div>
  );
}

export function Menu() {
  const today = new Date().getDay();

  const dailyPromos = [
    "/promo-1.jpg",
    "/promo-1.jpg",
    "/promo-1.jpg",
    "/promo-2.jpg",
    "/promo-2.jpg",
    "/promo-1.jpg",
    "/promo-1.jpg"
  ];

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setShowModal(true);
  }, []);

  const menuCategories: MenuCategory[] = [
    {
      title: "Menu Tienda",
      description: "Dulces tentaciones para cualquier momento",
      sectionImages: [
        "/menu/menu-22.jpg",
        "/menu/menu-111.jpg",
        "/menu/menu-100.jpg",
        "/menu/menu-7.jpg",
      ],
      items: [
        {
          name: "Pastel Carajillo",
          price: "$670",
          subDescription: "Para 15-18 personas",
          description: "Pastel Carajillo\nPan de chocolate embebido con almibar de vainilla y licor 43 , relleno de chocolate semiamargo y crema de café.\nRECOMENDACIONES : Conservar en refrigeración hasta 2 hrs antes de partir y consumir a temperatura ambiente.",
        },
        {
          name: "Pastel Intenso Ferrero",
          price: "$450",
          subDescription: "Para 8-10 personas",
          description: "Pastel Intenso Ferrero\nPan humedo y chocolatoso con relleno de crema de avellanas y chocolate de leche con toque de trozos de avellanas naturales.\nRECOMENDACIÓN : Conservar en refrigeración y consumir siempre frío.",
        },
        {
          name: "Pastel Cuatro Leches",
          price: "$570",
          subDescription: "Para 15 personas",
          description: "4 Leches Queso de Bola\nPastel insignia de la casa, pan suave y húmedo en 4 leches con relleno de queso de bola Gallo Azul y dulce de leche.\nRECOMENDACIONES : Conservar en refrigeración y consumir siempre frío.\nTip de la chef : Se puede semi-congelar para que sepa a pastel helado.",
        },
        {
          name: "Pastel Zanahoria",
          price: "$430",
          subDescription: "Para 8-10 personas",
          description: "Beso de zanahoria\nPan especiado de zanahoria ligeramente húmedo, con toques de nuez pecana y 3 capas de relleno de mousse de queso crema.\nRECOMENDACIÓN : Conservar en refrigeración y consumir semi-frío.",
        },
        {
          name: "Pay de Macadamia",
          price: "$470",
          subDescription: "Para 8-10 personas",
          description: "Pay de Macadamia\nPay tipo tarta con base de galleta horneada y caramelizada, con relleno cremoso de vainilla, mantequilla y nuez de macadamia coronado con salsa de caramelo.\nRECOMENDACIONES : Conservar en refrigeración y consumir siempre frío.\nTip de la chef : Meter al microondas unos cuantos segundos para reactivar el sabor de la mantequilla y acompañar con una bola de helado de vainilla encima ",
        },
        {
          name: "Cheesecake New York",
          price: "$570",
          subDescription: "Para 8-10 personas",
          description: "Cheesecake estilo New York extra cremoso con base de galleta de vainilla y harina de almendras, cubierto con crema batida de nata.\n* NO CONTIENE FRUTOS\nRECOMENDACIÓN : Conservar en refrigeración y consumir siempre frío.",
        },
        {
          name: "Tarta Vasca Frutos Rojos",
          price: "$450",
          subDescription: "Para 8 personas",
          description: "Tarta de queso suave con topping de compota de frutos rojos hecha en casa.\nNuestros productos son hechos con ingredientes naturales y sin conservadores.\nRECOMENDACIÓN : Conservar en refrigeración y consumir siempre fría",
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
          name: "Brownie Rocher",
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
          name: "Tarta Vasca Frutos Rojos",
          price: "$85",
          description: "Tarta de queso suave con topping de compota de frutos rojos hecha en casa.\nNuestros productos son hechos con ingredientes naturales y sin conservadores.\nRECOMENDACIÓN : Conservar en refrigeración y consumir siempre fría",
        },
        {
          name: "Pastel Cuatro Leches",
          price: "$85",
          description: "4 Leches Queso de Bola\nPastel insignia de la casa, pan suave y húmedo en 4 leches con relleno de queso de bola Gallo Azul y dulce de leche.\nRECOMENDACIONES : Conservar en refrigeración y consumir siempre frío.\nTip de la chef : Se puede semi-congelar para que sepa a pastel helado.",
        },
        {
          name: "Cheesecake New York",
          price: "$95",
          description: "Cheesecake estilo New York extra cremoso con base de galleta de vainilla y harina de almendras, cubierto con crema batida de nata.\n* NO CONTIENE FRUTOS\nRECOMENDACIÓN : Conservar en refrigeración y consumir siempre frío.",
        },
        {
          name: "Pastel Intenso Ferrero",
          price: "$85",
          description: "Pastel Intenso Ferrero\nPan humedo y chocolatoso con relleno de crema de avellanas y chocolate de leche con toque de trozos de avellanas naturales.\nRECOMENDACIÓN : Conservar en refrigeración y consumir siempre frío.",
        },
        {
          name: "Pastel Carajillo",
          price: "$95",
          description: "Pastel Carajillo\nPan de chocolate embebido con almibar de vainilla y licor 43 , relleno de chocolate semiamargo y crema de café.\nRECOMENDACIONES : Conservar en refrigeración hasta 2 hrs antes de partir y consumir a temperatura ambiente.",
        },
        {
          name: "Pastel Zanahoria",
          price: "$130",
          description: "Beso de zanahoria\nPan especiado de zanahoria ligeramente húmedo, con toques de nuez pecana y 3 capas de relleno de mousse de queso crema.\nRECOMENDACIÓN : Conservar en refrigeración y consumir semi-frío.",
        },
        {
          name: "Pay de Macadamia",
          price: "$85",
          description: "Pay de Macadamia\nPay tipo tarta con base de galleta horneada y caramelizada, con relleno cremoso de vainilla, mantequilla y nuez de macadamia coronado con salsa de caramelo.\nRECOMENDACIONES : Conservar en refrigeración y consumir siempre frío.\nTip de la chef : Meter al microondas unos cuantos segundos para reactivar el sabor de la mantequilla y acompañar con una bola de helado de vainilla encima ",
        },
        {
          name: "Cheesecake Lotus",
          price: "$115",
          description: "Cheesecake Lotus\nCrema de queso suave con base de galleta de Lotus, coronado con crema batida y galleta Lotus desmoronada.\nRECOMENDACIÓN : Conservar en refrigeración y consumir siempre frío.",
        },
      ],
    },
    {
      title: "Pasteles de diseño especial",
      description: "Precios base, pueden variar según tamaño y decoración. Disponibles solo sobre pedido con 5 días de anticipación",
      sectionImages: [
        "/menu/menu-1.jpeg",
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
      title: "Sabores para pasteles de diseño personalizado",
      description: "El signo $ representa un costo adicional sobre el precio base",
      sectionImages: [
        "/menu/menu-2.jpeg",
        "/menu/menu-10.jpeg",
        "/menu/menu-11.jpeg",
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
          name: "Intenso Chocolate",
          price: "$",
          description: "Pan de chocolate con relleno de ganache de chocolate semi-oscuro",
        },
        {
          name: "Choco-Caramelo",
          description: "Pan de chocolate con relleno de queso crema y caramelo suave",
        },
        {
          name: "Intenso Ferrero",
          price: "$",
          description: "Pan de chocolate con relleno de ferrero y crema de chocolate",
        },
        {
          name: "Carajillo",
          price: "$",
          description: "Pan de chocolate con relleno de licor 43 con crema de café y ganache de chocolate oscuro",
        },
        {
          name: "Choco Delicia",
          price: "$",
          description: "Pan de chocolate con relleno de manjar de dulce de leche",
        },
      ],
    },
    {
      title: "Sobre pedido / Por temporada",
      sectionImages: [
        "/menu/menu-12.jpeg",
        "/menu/menu-13.jpeg",
        "/menu/menu-14.jpeg",
      ],
      items: [
        {
          name: "Pastel de tiramisú",
          price: "$690",
          description: "-Tiramisú Cake - húmedo en espresso, licor y crema ligera de vainilla.",
        },
        {
          name: "Pastel Framboisier",
          price: "$560",
          description: "Pastel de frambuesa - Humedo, cremoso y lleno de frambuesas naturales",
        },
        {
          name: "Tarta vasca de cremee brûlée",
          price: "$650",
          description: "Cremosa tarta vasca de Queso, cubierta de crema de vainilla y azúcar Bruleada",
        },
      ],
    }
  ];

  return (
    <div className="flex-1 flex flex-col bg-background overflow-x-hidden">
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-primary/40 backdrop-blur-md"
              onClick={() => setShowModal(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.98, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: 10 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="relative w-full max-w-sm bg-card p-1 shadow-2xl z-10">
              <button
                onClick={() => setShowModal(false)}
                className="absolute -top-4 -right-4 w-10 h-10 bg-primary text-primary-foreground flex items-center justify-center rounded-full hover:bg-accent transition-colors shadow-lg z-20"
                aria-label="Cerrar modal">
                <X size={18} />
              </button>
              <div className="border-[0.5px] border-accent/20 p-2 pb-6">
                <div className="relative w-full max-h-[60vh] sm:max-h-[65vh] flex justify-center items-center bg-muted/40 mb-6 overflow-hidden rounded-[2px]">
                  <img
                    src={dailyPromos[today]}
                    alt="Especial del día"
                    className="max-h-[60vh] sm:max-h-[65vh] w-auto h-auto object-contain"
                  />
                </div>
                <div className="text-center px-6">
                  <h4 className="text-2xl font-serif text-primary mb-2">Especial del día</h4>
                  <div className="w-12 h-[1px] bg-accent/40 mx-auto mb-6" />
                  <button
                    onClick={() => setShowModal(false)}
                    className="inline-block px-8 py-3 border-[0.5px] border-primary text-primary text-[10px] tracking-[0.2em] uppercase hover:bg-primary hover:text-primary-foreground transition-colors duration-500"
                  >
                    Entendido
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )} 
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative pt-40 pb-24 px-6 bg-secondary/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <p className="text-accent tracking-[0.3em] uppercase text-xs sm:text-sm mb-6 font-medium">
              Elaborado con Pasión
            </p>
            <h1 className="text-5xl md:text-7xl font-serif font-light text-primary mb-8 tracking-tight">
              Nuestro Menú
            </h1>
            <div className="w-16 h-[1px] bg-accent/50 mx-auto mb-10" />
            <p className="text-lg text-foreground/80 max-w-xl mx-auto font-normal leading-relaxed">
              Descubre nuestros pasteles y postres de autor elaborados con los
              mejores ingredientes.
            </p>
            <p className="text-xs sm:text-sm text-accent uppercase tracking-widest mt-8 font-medium">
              Disponibles siempre en tienda*
            </p>
          </motion.div>
        </div>
      </section>

      {/* Menu Categories */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {menuCategories.map((category, categoryIndex) => (
            <div key={category.title} className="mb-32 md:mb-48 last:mb-0">
              
              {/* Category Header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="mb-16 md:mb-24 flex flex-col items-center text-center"
              >
                <h2 className="text-4xl md:text-6xl font-serif text-primary font-normal tracking-tight mb-4">
                  {category.title}
                </h2>
                {category.description && (
                  <p className="text-foreground/60 text-sm sm:text-base font-medium uppercase tracking-[0.15em] max-w-2xl mt-4">
                    {category.description}
                  </p>
                )}
                <div className="w-px h-16 bg-accent/30 mt-10" />
              </motion.div>

              {/* Category Content: Items + Editorial Images */}
              <div className={`flex flex-col ${categoryIndex % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-16 lg:gap-24 items-start`}>
                
                {/* Items List */}
                <div className={`w-full ${category.sectionImages.length > 0 ? "lg:w-6/12 xl:w-7/12" : "max-w-4xl mx-auto"}`}>
                  <div className="space-y-6">
                    {category.items.map((item, itemIndex) => (
                      <MenuItemCard key={item.name} item={item} itemIndex={itemIndex} />
                    ))}
                  </div>
                </div>

                {/* Editorial Image Collage */}
                {category.sectionImages.length > 0 && (
                  <div className="w-full lg:w-6/12 xl:w-5/12 grid gap-4 grid-cols-2 relative sticky top-32">
                    {category.sectionImages.map((img, imgIndex) => {
                      // Organic Masonry Logic
                      const isLarge = imgIndex === 0;
                      const isOffset = imgIndex % 2 !== 0;

                      return (
                        <motion.div
                          key={imgIndex}
                          initial={{ opacity: 0, y: 30 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2 + imgIndex * 0.1, ease: "easeOut" }}
                          className={`
                            ${isLarge ? "col-span-2 aspect-[4/3] sm:aspect-[16/9] lg:aspect-[4/3]" : "col-span-1 aspect-[3/4]"}
                            ${isOffset && !isLarge ? "mt-12" : ""}
                            relative overflow-hidden rounded-[2px] shadow-[0_10px_40px_-15px_rgba(70,59,41,0.05)]
                          `}
                        >
                          <ImageWithFallback
                            src={img}
                            alt={`${category.title} - imagen ${imgIndex + 1}`}
                            className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
                          />
                        </motion.div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Decorative footer text */}
      <div className="flex flex-col items-center justify-center pb-24 text-center">
        <div className="w-px h-16 bg-accent/30 mb-8" />
        <p className="text-foreground/40 text-[10px] sm:text-xs uppercase tracking-[0.2em]">
          * Todos los precios incluyen IVA
        </p>
      </div>

      {/* Call to Action - Magazine Style */}
      <section className="py-32 px-6 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h2 className="text-5xl md:text-7xl font-serif font-light mb-10 tracking-tight">¿Listo para pedir?</h2>
            <p className="text-lg md:text-xl font-light mb-16 text-primary-foreground/70 max-w-2xl mx-auto leading-relaxed">
              Haz tu pedido por WhatsApp o visítanos en cualquiera de nuestras
              sucursales. También aceptamos pedidos especiales para eventos y
              celebraciones.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <motion.a
                href="https://wa.me/message/T6HH3Y6V4TSUA1"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-5 sm:px-10 sm:py-5 bg-accent text-white rounded-full text-xs sm:text-sm font-medium uppercase tracking-[0.2em] shadow-2xl hover:shadow-accent/20 transition-all w-full sm:w-auto"
              >
                Pedir por WhatsApp
              </motion.a>
              <motion.a
                href="/location"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-5 sm:px-10 sm:py-5 bg-transparent border-[0.5px] border-primary-foreground/30 text-primary-foreground rounded-full text-xs sm:text-sm font-medium uppercase tracking-[0.2em] hover:bg-primary-foreground/5 transition-all w-full sm:w-auto"
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
