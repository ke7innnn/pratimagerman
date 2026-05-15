import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
    <html lang="en">
      <body className={inter.className}>
        <CustomCursor />
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
