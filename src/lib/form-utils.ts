import { format } from "date-fns";

export const formatPhoneNumber = (value: string) => {
  if (!value) return "";

  const digits = value.replace(/\D/g, "");

  if (digits.length <= 4) {
    return digits;
  }

  if (digits.length <= 8) {
    return `${digits.slice(0, 4)} ${digits.slice(4)}`;
  }

  return `${digits.slice(0, 4)} ${digits.slice(4, 8)}`;
};

export interface PhoneValidationResult {
  isValid: boolean;
  errors: string[];
}

export const validatePhone = (phone: string): PhoneValidationResult => {
  const digits = phone.replace(/[^\d]/g, "");
  const result: PhoneValidationResult = {
    isValid: true,
    errors: [],
  };

  if (digits.length !== 8) {
    result.isValid = false;
    result.errors.push("debe tener exactamente 8 dígitos");
  }

  const firstDigit = digits[0];
  if (["0", "1", "3", "4"].includes(firstDigit)) {
    result.isValid = false;
    result.errors.push("no puede empezar con 0, 1, 3 o 4");
  }

  return result;
};

export interface TimeValidationResult {
  isValid: boolean;
  error?: string;
}

export const validateTime = (
  time: string,
  selectedDate?: Date,
): TimeValidationResult => {
  if (!time) {
    return { isValid: false, error: "La hora es requerida" };
  }

  const [hours, minutes] = time.split(":").map(Number);
  if (isNaN(hours) || isNaN(minutes)) {
    return { isValid: false, error: "Formato de hora inválido" };
  }

  if (selectedDate && selectedDate.getDay() === 0) {
    return { isValid: false, error: "Estamos cerrados los domingos" };
  }

  const isSaturday = selectedDate?.getDay() === 6;
  if (isSaturday) {
    if (hours < 9 || hours > 15 || (hours === 15 && minutes > 30)) {
      return {
        isValid: false,
        error: "Los sábados cerramos a las 4:00 PM, última cita a las 3:30 PM",
      };
    }
  } else {
    // Monday-Friday: 9:00 AM - 5:00 PM (09:00 - 17:00)
    if (hours < 9 || hours > 17) {
      return {
        isValid: false,
        error:
          "Horario fuera de nuestro horario de atención (9:00 AM - 5:00 PM)",
      };
    }
  }

  // Check if time is in the past for today
  if (selectedDate) {
    const today = new Date();
    const isToday =
      format(selectedDate, "yyyy-MM-dd") === format(today, "yyyy-MM-dd");

    if (isToday) {
      const now = new Date();
      const currentHours = now.getHours();
      const currentMinutes = now.getMinutes();

      if (
        hours < currentHours ||
        (hours === currentHours && minutes <= currentMinutes)
      ) {
        return {
          isValid: false,
          error: "Este horario ya pasó para hoy",
        };
      }
    }
  }

  return { isValid: true };
};

export const formatTimeInput = (value: string): string => {
  const digits = value.replace(/\D/g, "");

  if (digits.length <= 2) {
    return digits;
  }

  if (digits.length <= 4) {
    return `${digits.slice(0, 2)}:${digits.slice(2)}`;
  }

  return `${digits.slice(0, 2)}:${digits.slice(2, 4)}`;
};

export function formatTo12Hour(time24: string): string {
  const [hours, minutes] = time24.split(":").map(Number);
  const period = hours >= 12 ? "PM" : "AM";
  const hours12 = hours % 12 || 12;
  return `${hours12}:${minutes.toString().padStart(2, "0")} ${period}`;
}
