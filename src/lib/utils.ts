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
