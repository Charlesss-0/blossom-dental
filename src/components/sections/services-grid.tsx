"use client";

import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";
import Image from "next/image";
import Link from "next/link";
import { services } from "@/lib/services-data";

export function ServicesGrid() {
  return (
    <section className="py-24 bg-white">
      <div className="container px-6 mx-auto md:px-12">
        <div className="grid gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <FadeIn key={service.id} delay={index * 0.1}>
              <Link
                href={`/services/${service.slug}`}
                className="block h-full group"
              >
                <article className="flex flex-col h-full overflow-hidden bg-white border border-gray-200 rounded-2xl transition-all duration-300 hover:border-gray-300 hover:shadow-lg">
                  {/* Image Container */}
                  <div className="relative overflow-hidden bg-gray-100 aspect-3/2">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/5" />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-1 p-6 md:p-8">
                    <div className="flex-1">
                      <h3 className="mb-3 font-serif text-2xl text-gray-900 transition-colors group-hover:text-blue-900">
                        {service.title}
                      </h3>
                      <p className="mb-6 text-sm leading-relaxed text-gray-700 md:text-base line-clamp-3">
                        {service.description}
                      </p>
                    </div>

                    <div className="flex items-center pt-6 mt-auto text-sm font-semibold text-gray-900 border-t border-gray-100 group-hover:text-blue-700 transition-colors">
                      <span className="mr-2">Ver servicio</span>
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </div>
                </article>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
