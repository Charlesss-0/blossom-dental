import "./globals.css";

import { Inter, Playfair_Display } from "next/font/google";

import { GoogleTagManager } from "@next/third-parties/google";
import type { Metadata } from "next";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Blossom Dental - Odontología General y Ortodoncia",
  description:
    "Experimenta el cuidado dental premium y gentil en Blossom Dental. Agenda tu cita hoy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-5K32ZKJR" />
      <body
        className={`${inter.variable} ${playfair.variable} antialiased font-sans`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
