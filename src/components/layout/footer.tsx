"use client";

import { Facebook, Instagram } from "lucide-react";

import { BookingModal } from "@/components/booking/booking-modal";
import Image from "next/image";
import Link from "next/link";
import { scrollToSection } from "@/lib/utils";

export function Footer() {
  return (
    <footer className="pt-16 pb-8 bg-gray-900 border-t border-gray-800">
      <div className="container px-6 mx-auto md:px-12">
        <div className="mb-12 grid grid-cols-1 md:grid-cols-5 gap-12">
          <div className="md:col-span-1">
            <Link
              href="/"
              className="block mb-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 rounded-lg"
            >
              <Image
                src="/logo.jpg"
                alt="Blossom Dental"
                width={120}
                height={120}
                className="object-contain w-auto h-12 border border-gray-800 rounded-full"
              />
            </Link>
            <p className="mb-6 text-sm leading-relaxed text-gray-300">
              En Blossom Dental cuidamos tu sonrisa con profesionalismo,
              tecnología y un trato humano.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-white">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#about"
                  className="text-sm text-gray-300 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 rounded-sm"
                  onClick={(e) => scrollToSection(e, "#about")}
                >
                  Nosotros
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="text-sm text-gray-300 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 rounded-sm"
                  onClick={(e) => scrollToSection(e, "#services")}
                >
                  Servicios
                </Link>
              </li>
              <li>
                <BookingModal
                  trigger={
                    <button className="text-sm text-left text-gray-300 cursor-pointer hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 rounded-sm">
                      Agendar Cita
                    </button>
                  }
                />
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-white">Contacto</h3>
            <div className="text-sm text-gray-300 space-y-4">
              <p className="leading-relaxed">
                Los Robles: de dónde fue la Vicky 2c al oeste, 1 al norte, media
                al este Managua, Nicaragua
              </p>
              <a
                href="https://wa.me/50557925341?text=Hola,%20me%20gustar%C3%ADa%20agendar%20una%20cita."
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-2 text-sm text-gray-300 underline hover:text-white transition-colors underline-offset-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 rounded-sm"
              >
                Contáctanos por WhatsApp
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-white">Horario</h3>
            <ul className="text-sm text-gray-300 space-y-3">
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
            <h3 className="mb-4 font-semibold text-white">Síguenos</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="https://www.instagram.com/blossomdental.ni/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-sm text-gray-300 gap-3 hover:text-white transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 rounded-sm"
                >
                  <div className="flex items-center justify-center w-8 h-8 bg-gray-800 rounded-full group-hover:bg-gray-700 transition-colors">
                    <Instagram size={16} />
                  </div>
                  <span className="underline underline-offset-2">
                    Instagram
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.facebook.com/p/Blossom-Dental-Nicaragua-100090086269090/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-sm text-gray-300 gap-3 hover:text-white transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 rounded-sm"
                >
                  <div className="flex items-center justify-center w-8 h-8 bg-gray-800 rounded-full group-hover:bg-gray-700 transition-colors">
                    <Facebook size={16} />
                  </div>
                  <span className="underline underline-offset-2">Facebook</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between pt-8 text-xs text-gray-300 border-t border-gray-800 md:flex-row gap-4">
          <p>
            &copy; {new Date().getFullYear()} Blossom Dental. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
