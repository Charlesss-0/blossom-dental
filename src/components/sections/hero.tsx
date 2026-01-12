"use client";

import { BookingModal } from "@/components/booking/booking-modal";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative min-h-dvh flex items-center overflow-hidden bg-gray-50">
      <div className="container mx-auto px-6 md:px-12 py-20 pt-26 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-2 lg:order-1"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-gray-900 leading-tight mb-6">
              Tu Sonrisa{" "}
              <span className="italic text-gray-600">
                Importa
                <br />
                Para Nosotros
              </span>
            </h1>

            <p className="text-base md:text-lg text-gray-600 mb-8 max-w-lg leading-relaxed">
              Diseñado especialmente para pacientes que buscan atención dental
              de calidad. Te ofrecemos experiencia profesional a un precio
              inmejorable.
            </p>

            <BookingModal
              trigger={
                <Button
                  size="lg"
                  className="h-12 px-8 rounded-full text-base bg-gray-900 text-white hover:bg-black transition-all"
                >
                  Agendar Cita
                </Button>
              }
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="order-1 lg:order-2"
          >
            <div className="grid grid-cols-2 gap-4 lg:gap-6">
              <div className="aspect-square rounded-2xl overflow-hidden bg-gray-100">
                <Image
                  src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=800&auto=format&fit=crop"
                  alt="Dental equipment"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="aspect-square rounded-2xl overflow-hidden bg-gray-100">
                <Image
                  src="https://images.unsplash.com/photo-1598531228433-d9f0cb960816?q=80&w=800&auto=format&fit=crop"
                  alt="Happy patient"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="col-span-2 aspect-16/10 rounded-2xl overflow-hidden bg-gray-100 relative">
                <Image
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1600&auto=format&fit=crop"
                  alt="Patient receiving dental care"
                  width={800}
                  height={500}
                  className="w-full h-full object-cover"
                />

                <div className="absolute bottom-4 left-4 right-4 bg-gray-900/90 backdrop-blur-sm rounded-xl p-4 md:p-6">
                  <h3 className="text-white font-serif text-lg md:text-xl mb-2">
                    Un Enfoque Moderno para el Cuidado de Clase Mundial
                  </h3>
                  <p className="text-gray-300 text-xs md:text-sm leading-relaxed">
                    Estamos aquí para brindar un servicio excepcional que
                    satisface tus necesidades y supera tus expectativas.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
