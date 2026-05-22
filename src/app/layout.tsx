import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Outfit } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-heading",
});

import CustomCursor from "./components/CustomCursor";
import WhatsAppButton from "./components/WhatsAppButton";

export const metadata: Metadata = {
  title: "The Deutsch hub. | German Courses",
  description: "Learn German with The Deutsch hub. Online classes for Kids, Teens, Adults & Corporates. Goethe, TestDaF, TELC, ÖSD exam preparation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${outfit.variable}`}>
      <body>
        <CustomCursor />
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
