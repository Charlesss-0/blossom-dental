"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { formatPhoneNumber, validatePhone } from "@/lib/form-utils";

import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { submitForm } from "@/actions/submit-form";
import { toast } from "sonner";
import { useState } from "react";

export function Contact() {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    setPhone(formatted);
    if (errors.phone) {
      setErrors((prev) => ({ ...prev, phone: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newErrors: { [key: string]: string } = {};

    if (!name.trim()) {
      newErrors.name = "El nombre es requerido";
    } else if (name.trim().length < 3) {
      newErrors.name = "El nombre debe tener al menos 3 caracteres";
    }

    if (!phone.trim()) {
      newErrors.phone = "El teléfono es requerido";
    } else {
      const phoneValidation = validatePhone(phone);
      if (!phoneValidation.isValid) {
        newErrors.phone = `El teléfono ${phoneValidation.errors.join(" y ")}`;
      }
    }
    if (!service) newErrors.service = "El servicio es requerido";
    if (!message.trim()) {
      newErrors.message = "El mensaje es requerido";
    } else if (message.trim().length < 10) {
      newErrors.message = "El mensaje debe tener al menos 10 caracteres";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      toast.error("Por favor revisa los errores en el formulario.");
      return;
    }

    setLoading(true);
    setErrors({});

    toast.message("Enviando tu mensaje...", {
      description: "Por favor espera mientras procesamos tu solicitud.",
    });

    try {
      await submitForm(
        {
          name,
          phone,
          service,
          message,
        },
        "contact",
      );

      toast.success("¡Mensaje Enviado!", {
        description: "Gracias por contactarnos. Te responderemos pronto.",
      });

      setName("");
      setPhone("");
      setService("");
      setMessage("");
    } catch (error: unknown) {
      console.error("Submission error:", error);
      toast.error("Error al enviar el mensaje.", {
        description:
          "Hubo un problema al enviar tu mensaje. Por favor intenta de nuevo.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="container px-6 mx-auto md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <FadeIn>
            <span className="block mb-4 text-sm font-semibold tracking-widest text-gray-400 uppercase">
              Contáctanos
            </span>
            <h2 className="font-serif text-4xl text-gray-900">
              Nos encantaría saber de ti
            </h2>
            <p className="mt-4 mb-8 leading-relaxed text-gray-600">
              Si tienes alguna consulta o deseas agendar una cita, completa el
              formulario y nuestro equipo se pondrá en contacto contigo lo antes
              posible.
            </p>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2 md:col-span-2">
                  <label
                    htmlFor="contact-name"
                    className="text-sm font-medium text-gray-700"
                  >
                    Nombre <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="contact-name"
                    placeholder="Tu nombre"
                    className={cn(
                      "bg-gray-50 border-gray-200",
                      errors.name &&
                        "border-red-500 focus-visible:ring-red-500",
                    )}
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      if (errors.name)
                        setErrors((prev) => ({ ...prev, name: "" }));
                    }}
                    maxLength={40}
                  />
                  {errors.name && (
                    <p className="text-xs text-red-500">{errors.name}</p>
                  )}
                </div>
                <div className="space-y-2 col-span-1">
                  <label
                    htmlFor="contact-phone"
                    className="text-sm font-medium text-gray-700"
                  >
                    <span>Teléfono</span>{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="contact-phone"
                    type="tel"
                    placeholder="Tu número de teléfono"
                    translate="yes"
                    className={cn(
                      "bg-gray-50 border-gray-200 w-full",
                      errors.phone &&
                        "border-red-500 focus-visible:ring-red-500",
                    )}
                    value={phone}
                    onChange={handlePhoneChange}
                  />
                  {errors.phone && (
                    <p className="text-xs text-red-500">{errors.phone}</p>
                  )}
                </div>
                <div className="space-y-2 md:col-span-1">
                  <label
                    htmlFor="contact-service"
                    className="text-sm font-medium text-gray-700"
                  >
                    <span>Servicio de interés</span>{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <Select
                    value={service}
                    onValueChange={(v) => {
                      setService(v);
                      if (errors.service)
                        setErrors((prev) => ({ ...prev, service: "" }));
                    }}
                  >
                    <SelectTrigger
                      id="contact-service"
                      className={cn(
                        "bg-gray-50 border-gray-200 w-full",
                        errors.service && "border-red-500 focus:ring-red-500",
                      )}
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
                  {errors.service && (
                    <p className="text-xs text-red-500">{errors.service}</p>
                  )}
                </div>
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="contact-message"
                  className="text-sm font-medium text-gray-700"
                >
                  <span>Mensaje</span> <span className="text-red-500">*</span>
                </label>
                <Textarea
                  id="contact-message"
                  placeholder="¿Cómo podemos ayudarte?"
                  translate="yes"
                  className={cn(
                    "min-h-37.5 bg-gray-50 border-gray-200 resize-none",
                    errors.message &&
                      "border-red-500 focus-visible:ring-red-500",
                  )}
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                    if (errors.message)
                      setErrors((prev) => ({ ...prev, message: "" }));
                  }}
                  maxLength={300}
                />
                {errors.message && (
                  <p className="text-xs text-red-500">{errors.message}</p>
                )}
              </div>
              <Button
                type="submit"
                disabled={loading}
                className="w-full px-8 py-6 text-white bg-gray-900 rounded-full cursor-pointer md:w-auto hover:bg-black"
              >
                {loading ? "Enviando..." : "Enviar Mensaje"}
              </Button>
            </form>
          </FadeIn>

          <FadeIn
            delay={0.2}
            className="relative h-full overflow-hidden bg-gray-100 min-h-100 rounded-2xl"
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
