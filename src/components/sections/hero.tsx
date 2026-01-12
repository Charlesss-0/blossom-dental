"use client";

import { BookingModal } from "@/components/booking/booking-modal";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative min-h-dvh flex items-center justify-center overflow-hidden bg-gray-50">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2800&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-white/40 backdrop-blur-xs" />
      </div>

      <div className="container relative z-10 px-6 md:px-12 text-center max-w-4xl mx-auto mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium text-gray-900 leading-tight tracking-tight mb-6 text-shadow-lg">
            Redefiniendo tu <br className="hidden md:block" />
            <span className="italic text-gray-700">Experiencia Dental</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-lg md:text-xl text-gray-700 mb-10 max-w-2xl mx-auto leading-relaxed text-shadow-md"
        >
          Combinamos tecnología avanzada con un trato gentil. Creamos sonrisas
          tan saludables como hermosas.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <BookingModal
            trigger={
              <Button
                size="lg"
                className="h-14 px-8 rounded-full text-base bg-gray-900 text-white hover:bg-black transition-all hover:scale-105 shadow-xl shadow-gray-200/50"
              >
                Agendar Cita
              </Button>
            }
          />
          <Button
            asChild
            variant="outline"
            size="lg"
            className="h-14 px-8 rounded-full text-base border-gray-300 text-gray-700 hover:bg-white/80 hover:text-black backdrop-blur-sm transition-all hover:scale-105"
          >
            <Link href="#services">Ver Servicios</Link>
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <Link href="#services">
          <div className="border-2 border-neutral-200 rounded-4xl w-6.5 h-9.5 relative">
            <motion.div
              className="absolute h-1.75 w-0.5 bg-white rounded-lg top-1.5 left-[50%] translate-x-[-50%]"
              initial={{ y: 0, opacity: 1 }}
              animate={{ y: 5, opacity: 0 }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
            />
          </div>
        </Link>
      </motion.div>
    </section>
  );
}
