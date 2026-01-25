"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useState } from "react";

const team = [
  {
    name: "Dra. Sofia Martinez",
    role: "Directora Clínica & Ortodoncista",
    bio: "La Dra. Sofía Martínez cuenta con amplia experiencia en ortodoncia y atención dental integral. Su enfoque se basa en la escucha activa, la precisión clínica y el acompañamiento cercano de cada paciente durante su tratamiento.",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=1000&auto=format&fit=crop",
  },
  {
    name: "Dr. Alejandro Ruiz",
    role: "Cirujano Dental & Implantólogo",
    bio: "Experto en rehabilitación oral e implantes, el Dr. Ruiz combina precisión técnica con un enfoque suave para restaurar funciones completas. Ha realizado cientos de procedimientos exitosos, devolviendo la confianza a sus pacientes.",
    image:
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1000&auto=format&fit=crop",
  },
  {
    name: "Dra. Elena Castillo",
    role: "Odontopediatra",
    bio: "Dedicada a hacer que las visitas al dentista sean divertidas y sin miedo para los niños, sentando las bases para una vida de salud oral. Su paciencia y carisma la convierten en la favorita de los más pequeños.",
    image:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=1000&auto=format&fit=crop",
  },
  {
    name: "Dr. Roberto Méndez",
    role: "Endodoncista",
    bio: "Especialista en salvar piezas dentales mediante tratamientos de conducto indoloros. Utiliza tecnología de punta para asegurar resultados precisos y duraderos en cada intervención.",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=1000&auto=format&fit=crop",
  },
  {
    name: "Dra. Lucía Torres",
    role: "Periodoncista",
    bio: "Experta en la salud de las encías y los tejidos de soporte. Se enfoca en la prevención y tratamiento de enfermedades periodontales para mantener la base de una sonrisa saludable.",
    image:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=1000&auto=format&fit=crop",
  },
  {
    name: "Dr. Javier Solis",
    role: "Odontología Estética",
    bio: "Apasionado por el diseño de sonrisas y carillas. El Dr. Solis utiliza un enfoque artístico para mejorar la estética dental de sus pacientes, logrando resultados naturales y deslumbrantes.",
    image:
      "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=1000&auto=format&fit=crop",
  },
  {
    name: "Dra. Marina Vega",
    role: "Rehabilitadora Oral",
    bio: "Especialista en casos complejos de reconstrucción dental. Su visión integral permite devolver no solo la estética, sino también la funcionalidad óptima a la mordida de sus pacientes.",
    image:
      "https://images.unsplash.com/photo-1527613426441-4da17471b66d?q=80&w=1000&auto=format&fit=crop",
  },
];

export function Team() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextMember = () => {
    setActiveIndex((prev) => (prev + 1) % team.length);
  };

  const prevMember = () => {
    setActiveIndex((prev) => (prev - 1 + team.length) % team.length);
  };

  const currentMember = team[activeIndex];

  return (
    <section id="team" className="py-24 bg-gray-50">
      <div className="container px-6 mx-auto md:px-12">
        <FadeIn>
          <div className="max-w-2xl mx-auto mb-20 text-center">
            <span className="block mb-4 text-sm font-semibold tracking-widest text-gray-400 uppercase">
              Profesionales Expertos
            </span>
            <h2 className="mb-6 font-serif text-4xl text-gray-900 md:text-5xl">
              Nuestro Equipo Dental
            </h2>
          </div>
        </FadeIn>

        <div className="relative max-w-6xl mx-auto">
          <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-12 min-h-125">
            <div className="order-2 lg:col-span-7 lg:order-1">
              <FadeIn key={`info-${activeIndex}`}>
                <div className="space-y-4 md:space-y-6">
                  <h3 className="font-serif text-4xl leading-tight text-gray-900 md:text-6xl">
                    {currentMember.name}
                  </h3>
                  <p className="text-sm font-medium tracking-widest text-blue-600 uppercase">
                    {currentMember.role}
                  </p>
                  <p className="max-w-xl text-sm leading-relaxed text-gray-600 md:text-lg md:block">
                    {currentMember.bio}
                  </p>

                  <div className="flex gap-4 pt-8">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={prevMember}
                      className="w-12 h-12 text-gray-400 transition-colors border-gray-200 rounded-full hover:text-gray-900 hover:border-gray-900"
                      aria-label="Anterior miembro"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={nextMember}
                      className="w-12 h-12 text-gray-400 transition-colors border-gray-200 rounded-full hover:text-gray-900 hover:border-gray-900"
                      aria-label="Siguiente miembro"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </Button>
                  </div>
                </div>
              </FadeIn>
            </div>

            <div className="order-1 lg:col-span-5 lg:order-2">
              <FadeIn key={`image-${activeIndex}`} className="relative">
                <div className="relative overflow-hidden shadow-2xl aspect-square md:aspect-4/5 rounded-3xl">
                  <Image
                    src={currentMember.image}
                    alt={currentMember.name}
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
                </div>
              </FadeIn>
            </div>
          </div>

          <div className="pt-12 mt-20 border-t border-gray-200">
            <div className="flex flex-wrap justify-center gap-6 md:gap-12">
              {team.map((member, index) => (
                <button
                  key={member.name}
                  onClick={() => setActiveIndex(index)}
                  className={cn(
                    "group flex flex-col items-center gap-3 transition-all duration-300",
                    activeIndex === index
                      ? "opacity-100"
                      : "opacity-40 hover:opacity-70",
                  )}
                >
                  <div
                    className={cn(
                      "relative h-16 w-16 md:h-20 md:w-20 rounded-full overflow-hidden transition-all duration-300 ring-2 ring-offset-4 ring-transparent",
                      activeIndex === index &&
                        "ring-blue-600 ring-offset-white scale-110",
                    )}
                  >
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="hidden text-center md:block">
                    <p className="text-xs font-bold tracking-tighter text-gray-900 uppercase">
                      {member.name.split(" ").slice(-2).join(" ")}
                    </p>
                    <p className="text-[10px] text-gray-600 uppercase tracking-widest mt-0.5">
                      {member.role.split(" ")[0]}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
