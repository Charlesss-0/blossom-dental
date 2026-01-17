export const validateEmail = (email: string) => {
  const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return re.test(email) && !email.includes("..");
};

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

export const validatePhone = (phone: string) => {
  const digits = phone.replace(/[^\d]/g, "");
  if (digits.length !== 8) return false;
  // Don't allow numbers starting with "0, 1, 3, 4"
  const firstDigit = digits[0];
  return !["0", "1", "3", "4"].includes(firstDigit);
};

export const formatTimeHHMM = (value: string) => {
  let digits = value.replace(/\D/g, "").slice(0, 4);
  if (digits.length === 0) return "";

  // Shift logic: if it's "0XY", treat as "XY" to allow typing (e.g., 01 -> 11)
  if (digits.length > 2 && digits.startsWith("0")) {
    digits = digits.slice(1);
  }

  if (digits.length === 1) return `0${digits}`;
  if (digits.length === 2) return digits;
  return `${digits.slice(0, 2)}:${digits.slice(2)}`;
};
