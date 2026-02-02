import { BookingModal } from "@/components/booking/booking-modal";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";
import { Footer } from "@/components/layout/footer";
import { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { ServicesGrid } from "@/components/sections/services-grid";

export const metadata: Metadata = {
  title: "Servicios Dentales en Managua | Blossom Dental",
  description:
    "Descubre nuestra gama completa de servicios dentales en Managua, desde odontología general hasta ortodoncia e implantes. Tecnología moderna y atención personalizada.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen font-sans bg-white selection:bg-gray-200 selection:text-black">
      <Navbar />

      <section className="pt-32 pb-12 overflow-hidden bg-gray-50 lg:pt-40">
        <div className="container px-6 mx-auto md:px-12">
          <FadeIn className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6 font-serif text-4xl leading-tight text-gray-900 md:text-5xl lg:text-6xl">
              Servicios Dentales <br />
              <span className="italic text-gray-600">en Managua</span>
            </h1>
            <p className="mb-8 text-lg leading-relaxed text-gray-600 md:text-xl">
              En Blossom Dental, nos enorgullece ofrecer una atención integral
              para cuidar cada aspecto de tu salud bucal. Desde limpiezas
              preventivas hasta rehabilitaciones completas, nuestro equipo en
              Managua utiliza las mejores técnicas y tecnología para garantizar
              resultados excepcionales y duraderos.
            </p>
          </FadeIn>
        </div>
      </section>

      <ServicesGrid />

      <section className="py-24">
        <div className="container px-6 mx-auto text-center md:px-12">
          <FadeIn>
            <h2 className="mb-6 font-serif text-3xl md:text-4xl">
              ¿Listo para mejorar tu sonrisa?
            </h2>
            <p className="max-w-2xl mx-auto mb-8 text-lg text-gray-700">
              Agenda tu cita hoy y déjanos cuidar de tu salud dental con la
              calidez y profesionalismo que nos distingue.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <BookingModal
                trigger={
                  <Button
                    size="lg"
                    className="h-12 px-8 text-base rounded-full cursor-pointer transition-all"
                  >
                    Agendar Cita
                  </Button>
                }
              />
              <a
                href="https://wa.me/50557925341?text=Hola,%20me%20gustar%C3%ADa%20más%20información%20sobre%20sus%20servicios."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="h-12 px-8 text-base rounded-full cursor-pointer transition-all"
                >
                  Contactar por WhatsApp
                </Button>
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </main>
  );
}
