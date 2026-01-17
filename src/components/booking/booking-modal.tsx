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
    const input = e.target;
    const selectionStart = input.selectionStart || 0;
    const valueBefore = input.value;
    const digitsBeforeCursor = valueBefore
      .slice(0, selectionStart)
      .replace(/\D/g, "").length;

    const formatted = formatPhoneNumber(input.value);
    setPhone(formatted);

    if (errors.phone) {
      setErrors((prev) => ({ ...prev, phone: "" }));
    }

    requestAnimationFrame(() => {
      let newPos = 0;
      let digitCount = 0;
      for (
        let i = 0;
        i < formatted.length && digitCount < digitsBeforeCursor;
        i++
      ) {
        if (/\d/.test(formatted[i])) {
          digitCount++;
        }
        newPos = i + 1;
      }
      input.setSelectionRange(newPos, newPos);
    });
  };

  const [dateInput, setDateInput] = useState("");

  const AVAILABLE_HOURS = [
    { value: "09:00", label: "09:00 AM" },
    { value: "10:00", label: "10:00 AM" },
    { value: "11:00", label: "11:00 AM" },
    { value: "13:00", label: "01:00 PM" },
    { value: "14:00", label: "02:00 PM" },
    { value: "15:00", label: "03:00 PM" },
    { value: "16:00", label: "04:00 PM" },
    { value: "17:00", label: "05:00 PM" },
  ];

  const getFilteredHours = () => {
    if (!date) return AVAILABLE_HOURS;
    const today = new Date();
    const isToday = format(date, "yyyy-MM-dd") === format(today, "yyyy-MM-dd");
    const isSaturday = date.getDay() === 6;

    let hours = AVAILABLE_HOURS;

    if (isSaturday) {
      hours = hours.filter((h) => {
        const [hour] = h.value.split(":").map(Number);
        return hour <= 15;
      });
    }

    if (!isToday) return hours;

    const currentHour = today.getHours();
    const currentMinute = today.getMinutes();

    return hours.filter((hour) => {
      const [h] = hour.value.split(":").map(Number);
      return h > currentHour || (h === currentHour && 0 > currentMinute);
    });
  };

  const handleDateInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target;
    const selectionStart = input.selectionStart || 0;
    const valueBefore = input.value;
    const digitsBeforeCursor = valueBefore
      .slice(0, selectionStart)
      .replace(/\D/g, "").length;

    let val = input.value.replace(/\D/g, "");
    if (val.length > 8) val = val.slice(0, 8);

    let formatted = val;
    if (val.length > 2) formatted = val.slice(0, 2) + "/" + val.slice(2);
    if (val.length > 4)
      formatted = val.slice(0, 2) + "/" + val.slice(2, 4) + "/" + val.slice(4);

    setDateInput(formatted);

    requestAnimationFrame(() => {
      let newPos = 0;
      let digitCount = 0;
      for (
        let i = 0;
        i < formatted.length && digitCount < digitsBeforeCursor;
        i++
      ) {
        if (/\d/.test(formatted[i])) {
          digitCount++;
        }
        newPos = i + 1;
      }
      input.setSelectionRange(newPos, newPos);
    });

    if (val.length === 8) {
      const day = parseInt(val.slice(0, 2));
      const month = parseInt(val.slice(2, 4)) - 1;
      const year = parseInt(val.slice(4, 8));
      const d = new Date(year, month, day);

      if (
        !isNaN(d.getTime()) &&
        d.getFullYear() === year &&
        d.getMonth() === month &&
        d.getDate() === day
      ) {
        if (d.getDay() === 0) {
          setErrors((prev) => ({
            ...prev,
            date: "Estamos cerrados los domingos",
          }));
          return;
        }
        if (d >= new Date(new Date().setHours(0, 0, 0, 0))) {
          setDate(d);
          if (errors.date) setErrors((prev) => ({ ...prev, date: "" }));
        } else {
          setErrors((prev) => ({
            ...prev,
            date: "La fecha no puede ser en el pasado",
          }));
        }
      } else {
        setErrors((prev) => ({ ...prev, date: "Fecha inválida" }));
      }
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

    if (email && !validateEmail(email))
      newErrors.email = "El correo electrónico no es válido";
    if (!phone.trim()) {
      newErrors.phone = "El teléfono es requerido";
    } else {
      const phoneValidation = validatePhone(phone);
      if (!phoneValidation.isValid) {
        newErrors.phone = `El teléfono ${phoneValidation.errors.join(" y ")}`;
      }
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
      await submitForm(
        {
          name,
          phone,
          email,
          date,
          time,
        },
        "booking",
      );

      toast.success("¡Solicitud Enviada!", {
        description: "Te contactaremos pronto para confirmar tu horario.",
      });
      setOpen(false);
      setName("");
      setEmail("");
      setPhone("");
      setDate(undefined);
      setDateInput("");
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
              maxLength={40}
              className={cn(
                errors.name && "border-red-500 focus-visible:ring-red-500",
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
              maxLength={40}
              className={cn(
                errors.email && "border-red-500 focus-visible:ring-red-500",
              )}
            />
            {errors.email && (
              <p className="text-xs text-red-500">{errors.email}</p>
            )}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="phone">
              <span>Teléfono</span> <span className="text-red-500">*</span>
            </Label>
            <Input
              id="phone"
              type="tel"
              placeholder="Número de teléfono"
              translate="yes"
              name="teléfono"
              value={phone}
              onChange={handlePhoneChange}
              className={cn(
                errors.phone && "border-red-500 focus-visible:ring-red-500",
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
            <div className="flex gap-2">
              <Input
                placeholder="dd/mm/aaaa"
                value={dateInput}
                onChange={handleDateInputChange}
                className={cn(
                  "flex-1",
                  errors.date && "border-red-500 focus-visible:ring-red-500",
                )}
              />
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-10 p-0 hover:bg-transparent",
                      errors.date && "border-red-500",
                    )}
                    type="button"
                  >
                    <CalendarIcon className="h-4 w-4" />
                    <span className="sr-only">Seleccionar fecha</span>
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="end">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={(d) => {
                      setDate(d);
                      if (d) {
                        setDateInput(format(d, "dd/MM/yyyy"));
                      }
                      if (errors.date)
                        setErrors((prev) => ({ ...prev, date: "" }));
                    }}
                    disabled={(date) =>
                      date < new Date(new Date().setHours(0, 0, 0, 0)) ||
                      date.getDay() === 0
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
            {date && !errors.date && (
              <p className="text-sm text-gray-500 capitalize">
                {format(date, "EEEE, d 'de' MMMM 'de' yyyy", { locale: es })}
              </p>
            )}
            {errors.date && (
              <p className="text-xs text-red-500">{errors.date}</p>
            )}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="time-input">
              Hora Preferida <span className="text-red-500">*</span>
            </Label>
            <div className="grid gap-3">
              <Select
                name="time"
                value={time || ""}
                onValueChange={(v) => {
                  setTime(v);
                  if (errors.time) setErrors((prev) => ({ ...prev, time: "" }));
                }}
              >
                <SelectTrigger
                  id="time-dropdown"
                  className={cn(
                    "w-full",
                    errors.time && "border-red-500 focus:ring-red-500",
                  )}
                >
                  <SelectValue placeholder="Seleccionar de horarios comunes" />
                </SelectTrigger>
                <SelectContent>
                  {getFilteredHours().length > 0 ? (
                    getFilteredHours().map((hour) => (
                      <SelectItem key={hour.value} value={hour.value}>
                        {hour.label}
                      </SelectItem>
                    ))
                  ) : (
                    <p className="p-2 text-sm text-muted-foreground">
                      No hay horarios disponibles.
                    </p>
                  )}
                </SelectContent>
              </Select>
            </div>
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
