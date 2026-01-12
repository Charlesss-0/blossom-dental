"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";

import { FadeIn } from "@/components/ui/fade-in";
import Image from "next/image";
import { useState } from "react";

const services = [
  {
    title: "Odontología General",
    description:
      "Cuidado integral para mantener tu salud bucal en perfectas condiciones. Nuestro equipo de profesionales se dedica a proporcionar atención dental de primera clase en un ambiente cómodo y relajante.",
    image:
      "https://images.unsplash.com/photo-1644353740797-b85ffb378b3a?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Ortodoncia",
    description:
      "Alineación dental avanzada para una sonrisa perfecta y funcional. Utilizamos las últimas tecnologías para corregir la posición de tus dientes y mejorar tu mordida de manera eficiente.",
    image:
      "https://images.unsplash.com/photo-1598531228433-d9f0cb960816?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Endodoncia",
    description:
      "Tratamientos de conducto especializados para salvar tus dientes naturales. Utilizamos técnicas avanzadas para garantizar procedimientos precisos y aliviar el dolor de forma efectiva.",
    image:
      "https://images.unsplash.com/photo-1626736985932-c0df2ae07a2e?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Periodoncia",
    description:
      "Cuidado experto para la salud de tus encías y el soporte dental. Nuestros especialistas ofrecen tratamientos preventivos y correctivos para mantener una base sólida para tu sonrisa.",
    image:
      "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Cirugía",
    description:
      "Procedimientos quirúrgicos seguros y mínimamente invasivos. Nuestro equipo cuenta con la experiencia necesaria para realizar intervenciones complejas con la máxima precisión y cuidado.",
    image:
      "https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Implantes",
    description:
      "Soluciones duraderas y naturales para reemplazar dientes perdidos. Los implantes dentales son la opción más avanzada para restaurar la funcionalidad y estética de tu boca.",
    image:
      "https://images.unsplash.com/photo-1606811842243-af7e16970c1f?q=80&w=800&auto=format&fit=crop",
  },
];

export function Services() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="services" className="py-24 bg-gray-100">
      <div className="container mx-auto px-6 md:px-12">
        <FadeIn className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold tracking-widest text-gray-400 uppercase mb-4 block">
            Nuestros Servicios
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6">
            Cuidado Integral para <br />
            <span className="italic text-gray-600">Tu Bienestar</span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Ofrecemos una gama completa de tratamientos dentales de alta
            calidad, realizados con precisión y un enfoque humano centrado en tu
            comodidad.
          </p>
        </FadeIn>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-2">
              {services.map((service, index) => {
                const isActive = index === activeIndex;
                return (
                  <div
                    key={index}
                    className={`transition-all duration-300 ${
                      isActive
                        ? "bg-white rounded-2xl shadow-sm border border-gray-100 p-4 md:p-6"
                        : "p-4 md:p-6 border-b border-gray-200 last:border-0"
                    }`}
                  >
                    <button
                      onClick={() => setActiveIndex(index)}
                      className="w-full flex items-center justify-between text-left group"
                    >
                      <h3
                        className={`text-xl md:text-2xl font-serif font-medium transition-colors duration-300 ${
                          isActive
                            ? "text-gray-900"
                            : "text-gray-600 group-hover:text-gray-800"
                        }`}
                      >
                        {service.title}
                      </h3>
                      <div
                        className={`w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center transition-all duration-300 ${
                          isActive
                            ? "bg-gray-900 border-gray-900 rotate-180"
                            : "bg-white"
                        }`}
                      >
                        {isActive ? (
                          <Minus className="w-4 h-4 text-white" />
                        ) : (
                          <Plus className="w-4 h-4 text-gray-400 group-hover:text-gray-600" />
                        )}
                      </div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{
                            duration: 0.4,
                            ease: [0.04, 0.62, 0.23, 0.98],
                          }}
                        >
                          <p className="text-gray-600 leading-relaxed text-base pt-4 max-w-lg">
                            {service.description}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            <AnimatePresence mode="wait">
              <div className="relative aspect-square md:aspect-4/5 rounded-3xl overflow-hidden shadow-xl lg:shadow-2xl">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
                  className="absolute inset-0"
                >
                  <Image
                    src={services[activeIndex].image}
                    alt={services[activeIndex].title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent" />
                </motion.div>
              </div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
