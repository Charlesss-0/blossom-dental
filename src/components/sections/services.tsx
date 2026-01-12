import { FadeIn } from "@/components/ui/fade-in";
import Image from "next/image";

const services = [
  {
    title: "Odontología General",
    description:
      "Cuidado integral para mantener tu salud bucal en perfectas condiciones.",
    image:
      "https://images.unsplash.com/photo-1644353740797-b85ffb378b3a?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Ortodoncia",
    description:
      "Alineación dental avanzada para una sonrisa perfecta y funcional.",
    image:
      "https://images.unsplash.com/photo-1598531228433-d9f0cb960816?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Endodoncia",
    description:
      "Tratamientos de conducto especializados para salvar tus dientes naturales.",
    image:
      "https://images.unsplash.com/photo-1626736985932-c0df2ae07a2e?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Periodoncia",
    description:
      "Cuidado experto para la salud de tus encías y soporte dental.",
    image:
      "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Cirugía",
    description: "Procedimientos quirúrgicos seguros y mínimamente invasivos.",
    image:
      "https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Implantes",
    description:
      "Soluciones duraderas y naturales para reemplazar dientes perdidos.",
    image:
      "https://images.unsplash.com/photo-1606811842243-af7e16970c1f?q=80&w=800&auto=format&fit=crop",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-gray-100">
      <div className="container mx-auto px-6 md:px-12">
        <FadeIn className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold tracking-widest text-gray-400 uppercase mb-4 block">
            Nuestros Servicios
          </span>
          <h2 className="text-4xl font-serif text-gray-900 mb-6">
            Cuidado Integral
          </h2>
          <p className="text-gray-600 text-lg">
            Ofrecemos una gama completa de tratamientos dentales bajo un mismo
            techo, realizados con precisión y cuidado.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <FadeIn key={index} delay={index * 0.1} className="h-full">
              <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                <div className="relative h-48 sm:h-56 overflow-hidden bg-gray-100">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="text-xl font-serif font-medium text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed">
                    {service.description}
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
