import { FadeIn } from "@/components/ui/fade-in";
import { StackedSlider } from "@/components/ui/stacked-slider";
import { BookingModal } from "@/components/booking/booking-modal";
import { Button } from "@/components/ui/button";

const clinicImages = [
  "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1644353740797-b85ffb378b3a?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1598531228433-d9f0cb960816?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=2000&auto=format&fit=crop",
];

export function About() {
  return (
    <section id="about" className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <FadeIn className="relative">
            <StackedSlider images={clinicImages} />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gray-50 rounded-full z-[-1]" />
          </FadeIn>

          <FadeIn delay={0.2}>
            <span className="text-sm font-semibold tracking-widest text-gray-400 uppercase mb-4 block">
              Nuestra Filosofía
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-8 leading-tight">
              Cuidado Gentil para <br />
              <span className="italic text-gray-600">La Vida Moderna</span>
            </h2>

            <div className="space-y-6 text-gray-600 leading-relaxed md:text-lg">
              <p>
                En Blossom Dental, creemos que una visita al dentista debe ser
                un momento de cuidado personal. Hemos reimaginado la experiencia
                dental para que sea tranquila, transparente y empoderadora.
              </p>
              <p>
                Desde nuestra relajante área de recepción hasta nuestras salas
                de tratamiento de última generación, cada detalle está diseñado
                pensando en tu comodidad. Utilizamos la última tecnología para
                garantizar tratamientos precisos y mínimamente invasivos.
              </p>
            </div>

            <div className="mt-10">
              <BookingModal
                trigger={
                  <Button
                    size="lg"
                    className="h-12 px-8 rounded-full text-base bg-gray-900 text-white hover:bg-black transition-all"
                  >
                    Agendar Cita
                  </Button>
                }
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
