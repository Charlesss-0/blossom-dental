"use client";

import * as React from "react";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn, scrollToSection } from "@/lib/utils";

import { BookingModal } from "@/components/booking/booking-modal";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";

const navLinks = [
  { href: "/#about", label: "Nosotros" },
  { href: "/services", label: "Servicios" },
  { href: "/#contact", label: "Contacto" },
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
          ? "bg-white/80 backdrop-blur-md shadow-sm py-4"
          : "bg-transparent py-6",
      )}
    >
      <div className="container flex items-center justify-between px-6 mx-auto md:px-12">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.jpg"
            alt="Blossom Dental"
            width={120}
            height={120}
            className="object-contain w-auto h-12 border rounded-full"
          />
        </Link>

        <div className="items-center hidden gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={cn(
                "text-sm font-medium text-gray-50 transition-colors hover:text-gray-900",
                isScrolled ? "text-gray-600" : "text-gray-50",
              )}
            >
              {link.label}
            </Link>
          ))}
          <BookingModal
            trigger={
              <Button className="px-6 text-white bg-gray-900 rounded-full hover:bg-gray-800">
                Agendar Cita
              </Button>
            }
          />
        </div>

        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className={cn("text-gray-900 transition-colors")}
              >
                <Menu size={24} />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[85vw] sm:w-100 flex flex-col bg-white p-0 gap-0"
            >
              <SheetHeader className="p-6 text-left border-b border-gray-100">
                <SheetTitle>
                  <Image
                    src="/logo.jpg"
                    alt="Blossom Dental"
                    width={100}
                    height={100}
                    className="object-contain w-auto h-10 rounded-full"
                  />
                  <span className="sr-only">Blossom Dental</span>
                </SheetTitle>
              </SheetHeader>

              <div className="flex flex-col flex-1 px-6 py-8 overflow-y-auto gap-8">
                <div className="flex flex-col gap-6">
                  {navLinks.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="font-serif text-2xl font-medium text-gray-900 transition-colors hover:text-gray-600"
                      onClick={(e) => {
                        scrollToSection(e, link.href);
                        setOpen(false);
                      }}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>

                <div className="pt-8 mt-auto border-t border-gray-100 space-y-6">
                  <BookingModal
                    trigger={
                      <Button className="w-full h-12 text-lg text-white bg-black rounded-full transition-colors hover:bg-gray-800">
                        Agendar Cita
                      </Button>
                    }
                  />

                  <div className="text-sm text-gray-500 space-y-4">
                    <div>
                      <h4 className="mb-2 font-medium text-gray-900">
                        Contacto
                      </h4>
                      <a
                        href="https://wa.me/50557925341?text=Hola,%20me%20gustar%C3%ADa%20agendar%20una%20cita."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-gray-500 underline transition-colors hover:text-gray-900 underline-offset-2"
                      >
                        Contáctanos por WhatsApp
                      </a>
                    </div>
                    <div>
                      <h4 className="mb-2 font-medium text-gray-900">
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
