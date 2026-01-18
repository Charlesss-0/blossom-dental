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
