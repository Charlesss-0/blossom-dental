import { FadeIn } from "@/components/ui/fade-in";
import Link from "next/link";

export function About() {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <FadeIn className="relative">
            <div className="aspect-4/5 bg-gray-100 rounded-2xl overflow-hidden relative">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=2000&auto=format&fit=crop')",
                }}
              />
            </div>
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
              <Link
                href="#team"
                className="inline-flex items-center text-xl font-serif text-gray-900 underline-offset-4 hover:text-gray-600 hover:underline transition-all"
              >
                Conoce a nuestro equipo &rarr;
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
