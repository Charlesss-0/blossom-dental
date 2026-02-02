import { BookingModal } from "@/components/booking/booking-modal";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";
import { StackedSlider } from "@/components/ui/stacked-slider";

const clinicImages = [
  "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1644353740797-b85ffb378b3a?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1598531228433-d9f0cb960816?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=2000&auto=format&fit=crop",
];

export function About() {
  return (
    <section id="about" className="relative py-24 overflow-hidden bg-gray-50">
      <div className="container px-6 mx-auto md:px-12">
        <div className="items-center grid grid-cols-1 gap-16 md:grid-cols-2">
          <FadeIn className="relative">
            <StackedSlider images={clinicImages} />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white rounded-full z-[-1]" />
          </FadeIn>

          <FadeIn delay={0.2}>
            <span className="block mb-4 text-sm font-semibold tracking-widest text-gray-500 uppercase">
              Nuestra Filosofía
            </span>
            <h2 className="mb-8 font-serif text-4xl leading-tight text-gray-900 md:text-5xl">
              Tratamientos Dentales
              <br />
              <span className="italic text-gray-600">
                con Enfoque Personalizado
              </span>
            </h2>

            <div className="leading-relaxed text-gray-700 space-y-6 md:text-lg">
              <p>
                Cada tratamiento en Blossom Dental comienza con una evaluación
                detallada y una explicación clara de las opciones disponibles,
                para que puedas tomar decisiones informadas sobre tu salud
                dental.
              </p>
              <p>
                Utilizamos tecnología moderna para garantizar diagnósticos
                precisos y tratamientos eficientes, siempre manteniendo un trato
                cercano y respetuoso.
              </p>
            </div>

            <div className="mt-10">
              <BookingModal
                trigger={
                  <Button
                    size="lg"
                    className="h-12 px-8 text-base text-white bg-gray-900 rounded-full transition-all hover:bg-black focus-visible:ring-2 focus-visible:ring-gray-900"
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
