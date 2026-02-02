"use client";

import { BookingModal } from "@/components/booking/booking-modal";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative flex items-center pt-22 lg:p-0 bg-wite min-h-dvh">
      <div className="container relative px-6 mx-auto">
        <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-14">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-2 lg:order-1"
          >
            <h1 className="mb-6 font-serif text-4xl font-medium leading-tight text-gray-900 md:text-5xl lg:text-6xl md:mb-8">
              Clínica Dental{" "}
              <span className="italic text-gray-600">en Managua</span>
            </h1>

            <h2 className="mb-2 font-serif text-lg font-medium leading-relaxed text-gray-800 md:text-2xl">
              Atención dental profesional y confiable para toda la familia
            </h2>

            <p className="mb-12 leading-relaxed text-gray-700 md:text-lg">
              En Blossom Dental ofrecemos diagnósticos claros, tecnología
              moderna y un trato cercano para brindar tratamientos pensados para
              cada paciente.
            </p>

            <BookingModal
              trigger={
                <Button
                  size="lg"
                  className="h-12 px-8 text-base text-white transition-all bg-gray-900 rounded-full cursor-pointer hover:bg-black focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-900"
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
            <div className="relative overflow-hidden bg-gray-100 border border-gray-100 shadow-xl aspect-4/3 md:aspect-4/4 rounded-2xl">
              <Image
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1600&auto=format&fit=crop"
                alt="Patient receiving dental care"
                width={800}
                height={500}
                className="object-cover w-full h-full"
                priority
              />

              <div className="absolute p-4 shadow-sm bottom-4 left-4 right-4 bg-gray-900/95 backdrop-blur-sm rounded-xl md:p-6">
                <h3 className="mb-2 font-serif text-lg text-white md:text-xl">
                  Cuidado Odontológico Integral y Moderno
                </h3>
                <p className="text-xs leading-relaxed text-gray-200 md:text-sm">
                  Atendemos a pacientes de todas las edades con un enfoque
                  humano, tecnología avanzada y tratamientos diseñados para
                  cuidar tu salud bucal a largo plazo.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
