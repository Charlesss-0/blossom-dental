import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function scrollToSection(
  e: React.MouseEvent<HTMLAnchorElement>,
  href: string,
) {
  e.preventDefault();
  const targetId = href.replace("#", "");
  const elem = document.getElementById(targetId);
  if (elem) {
    elem.scrollIntoView({
      behavior: "smooth",
    });
  }
}

export function formatTo12Hour(time24: string): string {
  const [hours, minutes] = time24.split(":").map(Number);
  const period = hours >= 12 ? "PM" : "AM";
  const hours12 = hours % 12 || 12;
  return `${hours12}:${minutes.toString().padStart(2, "0")} ${period}`;
}
