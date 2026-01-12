"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { useState } from "react";

export function Contact() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    toast.message("Enviando tu mensaje...", {
      description: "Por favor espera mientras procesamos tu solicitud.",
    });

    await new Promise((resolve) => setTimeout(resolve, 2000));

    setLoading(false);
    toast.success("¡Mensaje Enviado!", {
      description: "Gracias por contactarnos. Te responderemos pronto.",
    });

    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <FadeIn>
            <span className="text-sm font-semibold tracking-widest text-gray-400 uppercase mb-4 block">
              Contáctanos
            </span>
            <h2 className="text-4xl font-serif text-gray-900 mb-8">
              Nos encantaría saber de ti
            </h2>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2 md:col-span-2">
                  <label
                    htmlFor="contact-name"
                    className="text-sm font-medium text-gray-700"
                  >
                    Nombre
                  </label>
                  <Input
                    id="contact-name"
                    placeholder="Tu nombre"
                    className="bg-gray-50 border-gray-200"
                    required
                  />
                </div>
                <div className="space-y-2 col-span-1">
                  <label
                    htmlFor="contact-phone"
                    className="text-sm font-medium text-gray-700"
                  >
                    Teléfono
                  </label>
                  <Input
                    id="contact-phone"
                    type="tel"
                    placeholder="Tu número de teléfono"
                    className="bg-gray-50 border-gray-200 w-full"
                    required
                  />
                </div>
                <div className="space-y-2 md:col-span-1">
                  <label
                    htmlFor="contact-service"
                    className="text-sm font-medium text-gray-700"
                  >
                    Servicio de interés
                  </label>
                  <Select>
                    <SelectTrigger
                      id="contact-service"
                      className="bg-gray-50 border-gray-200 w-full"
                    >
                      <SelectValue placeholder="Selecciona un servicio" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">
                        Odontología General
                      </SelectItem>
                      <SelectItem value="ortodoncia">Ortodoncia</SelectItem>
                      <SelectItem value="endodoncia">Endodoncia</SelectItem>
                      <SelectItem value="periodoncia">Periodoncia</SelectItem>
                      <SelectItem value="cirugia">Cirugía</SelectItem>
                      <SelectItem value="implantes">Implantes</SelectItem>
                      <SelectItem value="otro">Otro</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="contact-message"
                  className="text-sm font-medium text-gray-700"
                >
                  Mensaje
                </label>
                <Textarea
                  id="contact-message"
                  placeholder="¿Cómo podemos ayudarte?"
                  className="min-h-37.5 bg-gray-50 border-gray-200"
                  required
                />
              </div>
              <Button
                type="submit"
                disabled={loading}
                className="w-full md:w-auto px-8 py-6 rounded-full bg-gray-900 text-white hover:bg-black"
              >
                {loading ? "Enviando..." : "Enviar Mensaje"}
              </Button>
            </form>
          </FadeIn>

          <FadeIn
            delay={0.2}
            className="relative h-full min-h-100 bg-gray-100 rounded-2xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gray-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15582.0123456789!2d-86.2584755!3d12.1207218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f7155f5a049621d%3A0xe41c57f55afbf2ea!2sCl%C3%ADnica+Blossom+Dental+-+ortodoncia!5e0!3m2!1ses!2sni!4v1700000000000!5m2!1ses!2sni"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de Clínica Blossom Dental en Google Maps"
              ></iframe>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
