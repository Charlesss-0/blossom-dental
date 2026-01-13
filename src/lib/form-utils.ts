export const validateEmail = (email: string) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
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
  return digits.length === 8;
};
