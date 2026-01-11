"use client";

import * as React from "react";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { BookingModal } from "@/components/booking/booking-modal";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#about", label: "Nosotros" },
  { href: "#services", label: "Servicios" },
  { href: "#contact", label: "Contacto" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-100 py-4"
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.jpg"
            alt="Blossom Dental"
            width={120}
            height={120}
            className="h-12 w-auto object-contain rounded-full border"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <BookingModal
            trigger={
              <Button className="rounded-full px-6 bg-gray-900 text-white hover:bg-gray-800">
                Agendar Cita
              </Button>
            }
          />
        </div>

        {/* Mobile Menu Sidebar */}
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-gray-900">
                <Menu size={24} />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[85vw] sm:w-100 flex flex-col bg-white p-0 gap-0"
            >
              <SheetHeader className="p-6 border-b border-gray-100 text-left">
                <SheetTitle>
                  <Image
                    src="/logo.jpg"
                    alt="Blossom Dental"
                    width={100}
                    height={100}
                    className="h-10 w-auto object-contain rounded-full"
                  />
                  <span className="sr-only">Blossom Dental</span>
                </SheetTitle>
              </SheetHeader>

              <div className="flex-1 overflow-y-auto py-8 px-6 flex flex-col gap-8">
                <div className="flex flex-col gap-6">
                  {navLinks.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="text-2xl font-serif font-medium text-gray-900 hover:text-gray-600 transition-colors"
                      onClick={() => setOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>

                <div className="mt-auto pt-8 border-t border-gray-100 space-y-6">
                  <BookingModal
                    trigger={
                      <Button className="w-full h-12 rounded-full bg-black text-white text-lg hover:bg-gray-800 transition-colors">
                        Agendar Cita
                      </Button>
                    }
                  />

                  <div className="space-y-4 text-sm text-gray-500">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">
                        Contacto
                      </h4>
                      <a
                        href="https://wa.me/50557925341?text=Hola,%20me%20gustar%C3%ADa%20agendar%20una%20cita."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-gray-900 text-sm transition-colors"
                      >
                        WhatsApp: 5792 5341
                      </a>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">
                        Ubicación
                      </h4>
                      <p className="leading-relaxed">
                        Los Robles: de dónde fue la Vicky 2c al oeste, 1 al
                        norte, media al este, Managua
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
