import { About } from "@/components/sections/about";
import { Button } from "@/components/ui/button";
import { Contact } from "@/components/sections/contact";
import { FAQ } from "@/components/sections/faq";
import { FadeIn } from "@/components/ui/fade-in";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import Link from "next/link";
import { LocationSection } from "@/components/sections/location-section";
import { Navbar } from "@/components/layout/navbar";
import { Services } from "@/components/sections/services";
import { Team } from "@/components/sections/team";

export default function Home() {
  return (
    <main className="min-h-screen font-sans bg-background selection:bg-gray-200 selection:text-black">
      <Navbar />
      <Hero />
      <LocationSection />
      <section id="services-summary" className="py-24 bg-white">
        <div className="container px-6 mx-auto md:px-12">
          <FadeIn className="max-w-3xl mx-auto mb-12 text-center">
            <span className="block mb-4 text-sm font-semibold tracking-widest text-gray-500 uppercase">
              Nuestros Servicios
            </span>
            <h2 className="mb-6 font-serif text-4xl text-gray-900 md:text-5xl">
              Soluciones Dentales <br />
              <span className="italic text-gray-600">Integrales</span>
            </h2>
            <p className="text-lg leading-relaxed text-gray-700">
              Ofrecemos tratamientos personalizados para cuidar de tu sonrisa.
            </p>
          </FadeIn>

          <Services
            showTitle={false}
            limit={3}
            className="py-0 bg-transparent"
          />

          <div className="mt-12 text-center">
            <Link href="/services">
              <Button
                size="lg"
                className="h-12 px-8 text-base text-white transition-all bg-gray-900 rounded-full cursor-pointer hover:bg-black focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-900"
              >
                Ver todos los servicios
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <About />
      <Team />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
