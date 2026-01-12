import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { FadeIn } from "@/components/ui/fade-in";

const faqs = [
  {
    question: "¿Cuál es el horario de atención?",
    answer:
      "Estamos abiertos de lunes a viernes de 9:00 AM a 6:00 PM, y los sábados de 9:00 AM a 2:00 PM. Para emergencias dentales fuera de horario, por favor contáctanos por WhatsApp.",
  },
  {
    question: "¿Aceptan seguros dentales?",
    answer:
      "Sí, trabajamos con las principales aseguradoras del país. Te recomendamos verificar tu cobertura antes de tu cita. Nuestro equipo puede ayudarte con el proceso de facturación y reclamos.",
  },
  {
    question: "¿Ofrecen planes de pago?",
    answer:
      "Sí, ofrecemos planes de pago flexibles para tratamientos mayores. Podemos trabajar contigo para crear un plan que se ajuste a tu presupuesto. Consulta con nuestro personal administrativo para más detalles.",
  },
  {
    question: "¿Qué debo hacer en caso de una emergencia dental?",
    answer:
      "Para emergencias dentales, contáctanos inmediatamente por WhatsApp o llámanos. Hacemos todo lo posible para atender emergencias el mismo día. Si es fuera de horario, te daremos instrucciones sobre cómo manejar la situación hasta que podamos verte.",
  },
  {
    question: "¿Cuánto tiempo dura una cita típica?",
    answer:
      "Una consulta inicial generalmente dura entre 45-60 minutos. Las limpiezas dentales toman aproximadamente 30-45 minutos. Los tratamientos más complejos pueden requerir citas más largas o múltiples visitas.",
  },
  {
    question: "¿Atienden a niños?",
    answer:
      "¡Por supuesto! Ofrecemos servicios de odontología pediátrica en un ambiente amigable y acogedor. Nuestro equipo está capacitado para hacer que la experiencia dental de los niños sea positiva y libre de estrés.",
  },
  {
    question: "¿Qué debo llevar a mi primera cita?",
    answer:
      "Por favor trae tu identificación, tarjeta de seguro dental (si aplica), una lista de medicamentos que estés tomando, y cualquier radiografía dental reciente que tengas. Llega 10 minutos antes para completar el papeleo necesario.",
  },
  {
    question: "¿Realizan tratamientos de ortodoncia?",
    answer:
      "Sí, ofrecemos tratamientos de ortodoncia completos, incluyendo brackets tradicionales y opciones más estéticas. Durante tu consulta inicial, evaluaremos tu caso y te presentaremos las mejores opciones para ti.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <FadeIn className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold tracking-widest text-gray-400 uppercase mb-4 block">
            Preguntas Frecuentes
          </span>
          <h2 className="text-4xl font-serif text-gray-900 mb-6">
            ¿Tienes Preguntas?
          </h2>
          <p className="text-gray-600 text-lg">
            Encuentra respuestas a las preguntas más comunes sobre nuestros
            servicios y procedimientos.
          </p>
        </FadeIn>

        <FadeIn delay={0.2} className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left cursor-pointer">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeIn>
      </div>
    </section>
  );
}
