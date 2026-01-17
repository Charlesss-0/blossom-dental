import "./globals.css";

import { Inter, Playfair_Display } from "next/font/google";

import { GoogleTagManager } from "@next/third-parties/google";
import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
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
  verification: {
    google: "zkagBrTOB5Gf1AY9cA_vWbqZt1QpClKDJ_z4eq4z7hU",
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://blossom-dental.vercel.app/",
    siteName: "Blossom Dental",
    title: "Blossom Dental - Odontología General y Ortodoncia",
    description:
      "Experimenta el cuidado dental premium y gentil en Blossom Dental. Agenda tu cita hoy.",
    images: [
      {
        url: "/dentist-explaining-dental-xray-to-child-patient.jpg",
        width: 1200,
        height: 630,
        alt: "Dentist explaining a dental X-ray to a child patient during a consultation in a modern dental clinic",
      },
    ],
  },
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
        <SpeedInsights />
        <Toaster />
      </body>
    </html>
  );
}
