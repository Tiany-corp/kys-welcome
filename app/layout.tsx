import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KeepYourSeed — Journal Audio | Capturez vos idées instantanément",
  description:
    "KeepYourSeed est un journal audio mobile local-first. Enregistrez vos pensées instantanément, accédez-y hors-ligne, et synchronisez dans le cloud.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${outfit.variable} antialiased`}>{children}</body>
    </html>
  );
}
