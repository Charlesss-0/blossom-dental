"use client";

import { FadeIn } from "@/components/ui/fade-in";

const team = [
  {
    name: "Dra. Sofia Martinez",
    role: "Directora Clínica & Ortodoncista",
    bio: "Con más de 15 años de experiencia, la Dra. Martinez se especializa en crear sonrisas hermosas y funcionales mediante ortodoncia avanzada.",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=1000&auto=format&fit=crop",
  },
  {
    name: "Dr. Alejandro Ruiz",
    role: "Cirujano Dental & Implantólogo",
    bio: "Experto en rehabilitación oral e implantes, el Dr. Ruiz combina precisión técnica con un enfoque suave para restaurar funciones completas.",
    image:
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1000&auto=format&fit=crop",
  },
  {
    name: "Dra. Elena Castillo",
    role: "Odontopediatra",
    bio: "Dedicada a hacer que las visitas al dentista sean divertidas y sin miedo para los niños, sentando las bases para una vida de salud oral.",
    image:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=1000&auto=format&fit=crop",
  },
];

export function Team() {
  return (
    <section id="team" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12">
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-sm font-semibold tracking-widest text-gray-400 uppercase mb-4 block">
              Profesionales Expertos
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6">
              Nuestro Equipo
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              Conoce a los doctores apasionados dedicados a brindarte la mejor
              atención dental en un ambiente cálido y profesional.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {team.map((member, index) => (
            <FadeIn
              key={member.name}
              delay={index * 0.1}
              className="group h-full"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 h-full flex flex-col">
                <div className="aspect-[4/5] relative overflow-hidden shrink-0">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 flex-1">
                  <h3 className="text-xl font-serif font-medium text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm text-blue-600 font-medium mb-4 uppercase tracking-wide">
                    {member.role}
                  </p>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
