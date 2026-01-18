"use client";

import { Facebook, Instagram } from "lucide-react";

import { BookingModal } from "@/components/booking/booking-modal";
import Image from "next/image";
import Link from "next/link";
import { scrollToSection } from "@/lib/utils";

export function Footer() {
  return (
    <footer className="bg-gray-900 pt-16 pb-8 border-t border-gray-800">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-12">
          <div className="md:col-span-1">
            <Link href="/" className="mb-4 block">
              <Image
                src="/logo.jpg"
                alt="Blossom Dental"
                width={120}
                height={120}
                className="h-12 w-auto object-contain rounded-full border border-gray-800"
              />
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Experimenta el cuidado dental de vanguardia en un ambiente
              relajante diseñado para tu comodidad.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#about"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                  onClick={(e) => scrollToSection(e, "#about")}
                >
                  Nosotros
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                  onClick={(e) => scrollToSection(e, "#services")}
                >
                  Servicios
                </Link>
              </li>
              <li>
                <BookingModal
                  trigger={
                    <button className="text-gray-400 hover:text-white text-sm transition-colors text-left cursor-pointer">
                      Agendar Cita
                    </button>
                  }
                />
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Contacto</h3>
            <div className="text-sm text-gray-400 space-y-4">
              <p className="leading-relaxed">
                Los Robles: de dónde fue la Vicky 2c al oeste, 1 al norte, media
                al este Managua, Nicaragua
              </p>
              <a
                href="https://wa.me/50557925341?text=Hola,%20me%20gustar%C3%ADa%20agendar%20una%20cita."
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white text-sm transition-colors block mt-2 underline-offset-2 underline"
              >
                Contáctanos por WhatsApp
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Horario</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex justify-between">
                <span>Lun - Vie</span>
                <span>8:30 AM - 5:30 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sábado</span>
                <span>8:00 AM - 4:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Domingo</span>
                <span>Cerrado</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Síguenos</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="https://www.instagram.com/blossomdental.ni/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-400 hover:text-white text-sm transition-colors group"
                >
                  <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center group-hover:bg-gray-700 transition-colors">
                    <Instagram size={16} />
                  </div>
                  <span className="underline-offset-2 underline">
                    Instagram
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.facebook.com/p/Blossom-Dental-Nicaragua-100090086269090/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-400 hover:text-white text-sm transition-colors group"
                >
                  <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center group-hover:bg-gray-700 transition-colors">
                    <Facebook size={16} />
                  </div>
                  <span className="underline-offset-2 underline">Facebook</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Blossom Dental. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
