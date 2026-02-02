import { ArrowLeft, CheckCircle2 } from "lucide-react";

import { BookingModal } from "@/components/booking/booking-modal";
import { Button } from "@/components/ui/button";
import { FAQ } from "@/components/sections/faq";
import { FadeIn } from "@/components/ui/fade-in";
import { Footer } from "@/components/layout/footer";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { notFound } from "next/navigation";
import { services } from "@/lib/services-data";

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: "Servicio no encontrado | Blossom Dental",
    };
  }

  return {
    title: service.fullTitle,
    description: service.description,
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <main className="min-h-screen font-sans bg-white selection:bg-gray-200 selection:text-black">
      <Navbar />

      <section className="relative pt-32 pb-20 overflow-hidden bg-gray-50 lg:pt-40 lg:pb-28">
        <div className="container px-6 mx-auto md:px-12">
          <div className="items-center grid gap-12 lg:grid-cols-2 lg:gap-20">
            <FadeIn>
              <Link
                href="/services"
                className="inline-flex items-center mb-8 text-sm font-medium text-gray-500 transition-colors hover:text-gray-900 group"
              >
                <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
                Volver a Servicios
              </Link>
              <h1 className="mb-6 font-serif text-4xl leading-tight text-gray-900 md:text-5xl lg:text-6xl">
                {service.title}
              </h1>
              <p className="mb-8 text-lg leading-relaxed text-gray-600 md:text-xl">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-4">
                <BookingModal
                  trigger={
                    <Button
                      size="lg"
                      className="px-8 text-base text-white bg-gray-900 rounded-full hover:bg-black"
                    >
                      Agendar Cita
                    </Button>
                  }
                />
                <Button
                  variant="outline"
                  size="lg"
                  className="px-8 text-base rounded-full"
                  asChild
                >
                  <a href="#intro">Saber más</a>
                </Button>
              </div>
            </FadeIn>

            <FadeIn delay={0.2} className="relative">
              <div className="relative overflow-hidden shadow-2xl aspect-4/3 rounded-3xl">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gray-900/10" />
              </div>
              <div className="absolute w-24 h-24 bg-gray-100 rounded-full -bottom-6 -left-6 -z-10" />
              <div className="absolute w-32 h-32 rounded-full -top-6 -right-6 bg-gray-200/50 -z-10" />
            </FadeIn>
          </div>
        </div>
      </section>

      <section id="intro" className="py-20 lg:py-28">
        <div className="container px-6 mx-auto md:px-12">
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <span className="block mb-4 text-sm font-semibold tracking-widest text-gray-400 uppercase">
                Sobre el tratamiento
              </span>
              <h2 className="mb-8 font-serif text-3xl text-gray-900 md:text-4xl">
                ¿Qué es {service.title}?
              </h2>
              <div className="text-lg leading-relaxed text-gray-600 space-y-6 settings-rich-text">
                {service.introduction.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </FadeIn>

            <div className="my-16 border-t border-gray-100" />

            <FadeIn delay={0.1}>
              <h3 className="mb-6 font-serif text-2xl text-gray-900">
                ¿Para quién es este servicio?
              </h3>
              <p className="p-6 text-lg leading-relaxed text-gray-700 bg-gray-100 border border-gray-200 rounded-2xl">
                {service.whoIsItFor}
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-20 text-white bg-gray-900">
        <div className="container px-6 mx-auto md:px-12">
          <div className="items-center grid gap-12 lg:grid-cols-2 lg:gap-24">
            <FadeIn>
              <h2 className="mb-6 font-serif text-3xl md:text-4xl">
                ¿Cuándo se recomienda este tratamiento?
              </h2>
              <p className="mb-8 text-lg text-gray-300">
                Si experimentas alguno de los siguientes síntomas o situaciones,
                es probable que este sea el tratamiento ideal para ti.
              </p>
              <BookingModal
                trigger={
                  <Button
                    size="lg"
                    className="h-12 px-8 text-base text-gray-900 bg-white rounded-full hover:bg-gray-100"
                  >
                    Consultar con un especialista
                  </Button>
                }
              />
            </FadeIn>

            <FadeIn delay={0.2}>
              <ul className="grid gap-4">
                {service.whenToRecommend.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start p-4 border border-gray-700 gap-4 rounded-xl bg-gray-800/50"
                  >
                    <CheckCircle2 className="w-6 h-6 text-white shrink-0 mt-0.5" />
                    <span className="text-gray-200">{item}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container px-6 mx-auto md:px-12">
          <FadeIn className="max-w-3xl mx-auto text-center">
            <h2 className="mb-8 font-serif text-3xl text-gray-900 md:text-4xl">
              Nuestro enfoque en Blossom Dental
            </h2>
            <p className="mb-12 text-lg leading-relaxed text-gray-600">
              {service.ourApproach}
            </p>
          </FadeIn>
        </div>
      </section>

      <FAQ
        items={service.faqs}
        title={
          <>
            Preguntas Frecuentes sobre <br />
            <span className="italic text-gray-600">{service.title}</span>
          </>
        }
        subtitle="Resuelve tus dudas"
        description={`Todo lo que necesitas saber antes de tu cita de ${service.title.toLowerCase()}.`}
        className="pt-0 pb-20 bg-white"
      />

      <section className="py-20">
        <div className="container px-6 mx-auto md:px-12">
          <div className="mb-12 text-center">
            <h3 className="font-serif text-3xl text-gray-900">
              Otros Servicios
            </h3>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {services
              .filter((s) => s.slug !== service.slug)
              .slice(0, 3)
              .map((s) => (
                <Link key={s.slug} href={`/services/${s.slug}`}>
                  <Button
                    size="lg"
                    variant="outline"
                    className="h-12 text-base border-gray-200 rounded-full hover:border-gray-300 hover:bg-white"
                  >
                    {s.title}
                  </Button>
                </Link>
              ))}
            <Link href="/services">
              <Button
                size="lg"
                variant="ghost"
                className="h-12 ml-2 text-base rounded-full hover:bg-gray-100"
              >
                Ver todos
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
