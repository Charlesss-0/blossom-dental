"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  formatPhoneNumber,
  validateEmail,
  validatePhone,
} from "@/lib/form-utils";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { CalendarIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { es } from "date-fns/locale";
import { format } from "date-fns";
import { submitForm } from "@/actions/submit-form";
import { toast } from "sonner";
import { useState } from "react";

interface BookingModalProps {
  trigger?: React.ReactNode;
}

export function BookingModal({ trigger }: BookingModalProps) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [date, setDate] = useState<Date>();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [time, setTime] = useState("");
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

    if (!name.trim()) newErrors.name = "El nombre es requerido";
    if (email && !validateEmail(email))
      newErrors.email = "El correo electrónico no es válido";
    if (!phone.trim()) {
      newErrors.phone = "El teléfono es requerido";
    } else if (!validatePhone(phone)) {
      newErrors.phone = "El teléfono debe tener 8 dígitos";
    }
    if (!date) newErrors.date = "La fecha es requerida";
    if (!time) newErrors.time = "La hora es requerida";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      toast.error("Por favor revisa los errores en el formulario.");
      return;
    }

    setLoading(true);
    setErrors({});

    toast.message("Agendando tu cita...", {
      description: "Por favor espera mientras confirmamos disponibilidad.",
    });

    try {
      await submitForm({
        name,
        phone,
        email,
        date,
        time,
      });

      toast.success("¡Solicitud Enviada!", {
        description: "Te contactaremos pronto para confirmar tu horario.",
      });
      setOpen(false);
      setName("");
      setEmail("");
      setPhone("");
      setDate(undefined);
      setTime("");
    } catch (error: unknown) {
      console.error("Submission error:", error);
      toast.error("Error al agendar la cita.", {
        description:
          "Hubo un problema al enviar tu solicitud. Por favor intenta de nuevo.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger || <Button>Agendar Cita</Button>}
      </DialogTrigger>
      <DialogContent className="sm:max-w-106.25">
        <DialogHeader>
          <DialogTitle>Agenda tu Visita</DialogTitle>
          <DialogDescription>
            Elige un horario para tu cuidado dental. Te contactaremos para
            confirmar.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="name">
              Nombre <span className="text-red-500">*</span>
            </Label>
            <Input
              id="name"
              placeholder="Juan Pérez"
              name="nombre"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                if (errors.name) setErrors((prev) => ({ ...prev, name: "" }));
              }}
              className={cn(
                errors.name && "border-red-500 focus-visible:ring-red-500"
              )}
            />
            {errors.name && (
              <p className="text-xs text-red-500">{errors.name}</p>
            )}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email (opcional)</Label>
            <Input
              id="email"
              type="email"
              placeholder="juan@ejemplo.com"
              name="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (errors.email) setErrors((prev) => ({ ...prev, email: "" }));
              }}
              className={cn(
                errors.email && "border-red-500 focus-visible:ring-red-500"
              )}
            />
            {errors.email && (
              <p className="text-xs text-red-500">{errors.email}</p>
            )}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="phone">
              Teléfono <span className="text-red-500">*</span>
            </Label>
            <Input
              id="phone"
              type="tel"
              placeholder="8888 8888"
              name="teléfono"
              value={phone}
              onChange={handlePhoneChange}
              className={cn(
                errors.phone && "border-red-500 focus-visible:ring-red-500"
              )}
            />
            {errors.phone && (
              <p className="text-xs text-red-500">{errors.phone}</p>
            )}
          </div>
          <div className="grid gap-2">
            <Label>
              Fecha Preferida <span className="text-red-500">*</span>
            </Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !date && "text-muted-foreground",
                    errors.date && "border-red-500 focus:ring-red-500"
                  )}
                  type="button"
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date
                    ? format(date, "PPP", { locale: es })
                    : "Selecciona una fecha"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={(d) => {
                    setDate(d);
                    if (errors.date)
                      setErrors((prev) => ({ ...prev, date: "" }));
                  }}
                  disabled={(date) =>
                    date < new Date(new Date().setHours(0, 0, 0, 0))
                  }
                  initialFocus
                />
              </PopoverContent>
            </Popover>
            {errors.date && (
              <p className="text-xs text-red-500">{errors.date}</p>
            )}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="time">
              Hora Preferida <span className="text-red-500">*</span>
            </Label>
            <Select
              name="time"
              value={time}
              onValueChange={(v) => {
                setTime(v);
                if (errors.time) setErrors((prev) => ({ ...prev, time: "" }));
              }}
            >
              <SelectTrigger
                id="time"
                className={cn(
                  errors.time && "border-red-500 focus:ring-red-500"
                )}
              >
                <SelectValue placeholder="Selecciona una hora" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="09:00">09:00 AM</SelectItem>
                <SelectItem value="10:00">10:00 AM</SelectItem>
                <SelectItem value="11:00">11:00 AM</SelectItem>
                <SelectItem value="13:00">01:00 PM</SelectItem>
                <SelectItem value="14:00">02:00 PM</SelectItem>
                <SelectItem value="15:00">03:00 PM</SelectItem>
                <SelectItem value="16:00">04:00 PM</SelectItem>
                <SelectItem value="17:00">05:00 PM</SelectItem>
              </SelectContent>
            </Select>
            {errors.time && (
              <p className="text-xs text-red-500">{errors.time}</p>
            )}
          </div>
          <Button
            type="submit"
            disabled={loading}
            className="w-full mt-2 cursor-pointer"
          >
            {loading ? "Agendando..." : "Solicitar Cita"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
