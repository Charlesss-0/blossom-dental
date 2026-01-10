import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Sparkles,
  Heart,
  ShieldCheck,
  Clock,
  Stethoscope,
  Smile,
  Activity,
  Anchor,
  Syringe,
} from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";

const services = [
  {
    title: "Odontología General",
    description:
      "Cuidado integral para mantener tu salud bucal en perfectas condiciones.",
    icon: Stethoscope,
  },
  {
    title: "Ortodoncia",
    description:
      "Alineación dental avanzada para una sonrisa perfecta y funcional.",
    icon: Smile,
  },
  {
    title: "Endodoncia",
    description:
      "Tratamientos de conducto especializados para salvar tus dientes naturales.",
    icon: Activity,
  },
  {
    title: "Periodoncia",
    description:
      "Cuidado experto para la salud de tus encías y soporte dental.",
    icon: ShieldCheck,
  },
  {
    title: "Cirugía",
    description: "Procedimientos quirúrgicos seguros y mínimamente invasivos.",
    icon: Syringe,
  },
  {
    title: "Implantes",
    description:
      "Soluciones duraderas y naturales para reemplazar dientes perdidos.",
    icon: Anchor,
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-gray-50">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <Card className="border-none shadow-sm hover:shadow-md transition-all duration-300 bg-white h-full">
                <CardHeader className="p-8">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-6 text-gray-900">
                    <service.icon size={24} strokeWidth={1.5} />
                  </div>
                  <CardTitle className="text-xl font-serif mb-3 text-gray-900">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-500 leading-relaxed text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
