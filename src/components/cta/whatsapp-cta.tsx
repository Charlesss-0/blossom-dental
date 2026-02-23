"use client";

const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER as string;
const whatsappMessage = encodeURIComponent(
  process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE as string,
);
const WHATSAPP_URL = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

interface BookingModalProps {
  children?: React.ReactNode;
}

export function WhatsAppCTA({ children }: BookingModalProps) {
  const handleClick = () => {
    window.open(WHATSAPP_URL, "_blank", "noopener,noreferrer");
  };

  if (children) {
    return (
      <span onClick={handleClick} style={{ cursor: "pointer" }}>
        {children}
      </span>
    );
  }

  return <button onClick={handleClick}>Agendar Cita</button>;
}
