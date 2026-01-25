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
      "Atención dental preventiva y restauradora para mantener dientes y encías saludables en todas las etapas de la vida.",
    image:
      "https://images.unsplash.com/photo-1644353740797-b85ffb378b3a?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Ortodoncia",
    description:
      "Tratamientos de ortodoncia para corregir la alineación dental y mejorar la mordida, adaptados a niños, adolescentes y adultos.",
    image:
      "https://images.unsplash.com/photo-1598531228433-d9f0cb960816?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Endodoncia",
    description:
      "Tratamientos de conducto enfocados en aliviar el dolor, eliminar infecciones y conservar tus dientes naturales siempre que sea posible.",
    image:
      "https://images.unsplash.com/photo-1626736985932-c0df2ae07a2e?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Periodoncia",
    description:
      "Diagnóstico y tratamiento de enfermedades de las encías para preservar la salud y el soporte de tus dientes a largo plazo.",
    image:
      "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Cirugía",
    description:
      "Procedimientos quirúrgicos dentales realizados con planificación cuidadosa, priorizando la seguridad, el confort y una recuperación adecuada.",
    image:
      "https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Implantes",
    description:
      "Implantes dentales para reemplazar dientes perdidos y recuperar la función masticatoria y la estética de forma segura y duradera.",
    image:
      "https://images.unsplash.com/photo-1606811842243-af7e16970c1f?q=80&w=800&auto=format&fit=crop",
  },
];

export function Services() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="container px-6 mx-auto md:px-12">
        <FadeIn className="max-w-3xl mx-auto mb-16 text-center">
          <span className="block mb-4 text-sm font-semibold tracking-widest text-gray-400 uppercase">
            Nuestros Servicios
          </span>
          <h2 className="mb-6 font-serif text-4xl text-gray-900 md:text-5xl">
            Servicios Odontológicos <br />
            <span className="italic text-gray-600">de Alta Calidad</span>
          </h2>
          <p className="text-lg leading-relaxed text-gray-600">
            Ofrecemos una gama completa de tratamientos dentales adaptados a las
            necesidades de cada paciente, desde cuidados preventivos hasta
            procedimientos especializados.
          </p>
        </FadeIn>

        <div className="max-w-6xl mx-auto">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
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
                      className="flex items-center justify-between w-full text-left cursor-pointer group"
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
                          <p className="max-w-lg pt-4 text-base leading-relaxed text-gray-600">
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
              <div className="relative overflow-hidden shadow-xl aspect-4/3 md:aspect-4/5 rounded-3xl lg:shadow-2xl md:block">
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
