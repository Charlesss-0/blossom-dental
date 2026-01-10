import Link from "next/link";
import { Facebook, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-50 pt-16 pb-8 border-t border-gray-100">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="mb-4 block">
              <img
                src="/logo.jpg"
                alt="Blossom Dental"
                className="h-12 w-auto object-contain rounded-full border"
              />
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Experimenta el cuidado dental de vanguardia en un ambiente
              relajante diseñado para tu comodidad.
            </p>
            <div className="flex gap-4">
              <Link
                href="https://www.instagram.com/blossomdental.ni/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200 hover:text-gray-900 transition-colors"
              >
                <Instagram size={20} />
              </Link>
              <Link
                href="https://www.facebook.com/p/Blossom-Dental-Nicaragua-100090086269090/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200 hover:text-gray-900 transition-colors"
              >
                <Facebook size={20} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">
              Enlaces Rápidos
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#about"
                  className="text-gray-500 hover:text-gray-900 text-sm transition-colors"
                >
                  Nosotros
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="text-gray-500 hover:text-gray-900 text-sm transition-colors"
                >
                  Servicios
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-gray-500 hover:text-gray-900 text-sm transition-colors"
                >
                  Agendar Cita
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Contacto</h3>
            <div className="text-sm text-gray-500 space-y-4">
              <p className="leading-relaxed">
                Los Robles: de dónde fue la Vicky 2c al oeste, 1 al norte, media
                al este Managua, Nicaragua
              </p>
              <a
                href="https://wa.me/50557925341?text=Hola,%20me%20gustar%C3%ADa%20agendar%20una%20cita."
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-900 text-sm transition-colors block mt-2"
              >
                WhatsApp: 5792 5341
              </a>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Horario</h3>
            <ul className="space-y-3 text-sm text-gray-500">
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
        </div>

        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Blossom Dental. Todos los derechos
            reservados.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-gray-900">
              Privacidad
            </Link>
            <Link href="#" className="hover:text-gray-900">
              Términos
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
