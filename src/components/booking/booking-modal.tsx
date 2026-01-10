"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

interface BookingModalProps {
  trigger?: React.ReactNode;
}

export function BookingModal({ trigger }: BookingModalProps) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    // Provide immediate feedback to the user
    toast.message("Agendando tu cita...", {
      description: "Por favor espera mientras confirmamos disponibilidad.",
    });

    // Simulate backend delay
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setLoading(false);
    setOpen(false);
    toast.success("¡Solicitud Enviada!", {
      description: "Te contactaremos pronto para confirmar tu horario.",
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger || <Button>Agendar Cita</Button>}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Agenda tu Visita</DialogTitle>
          <DialogDescription>
            Elige un horario para tu cuidado dental. Te contactaremos para
            confirmar.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="name">Nombre</Label>
            <Input id="name" placeholder="Juan Pérez" required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="juan@ejemplo.com"
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="phone">Teléfono</Label>
            <Input id="phone" type="tel" placeholder="8888 8888" required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="date">Fecha Preferida</Label>
            <Input id="date" type="date" required />
          </div>
          <Button type="submit" disabled={loading} className="w-full mt-2">
            {loading ? "Agendando..." : "Solicitar Cita"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
