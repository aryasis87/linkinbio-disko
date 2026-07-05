import { Bungee, Space_Mono } from "next/font/google";
import "./globals.css";

const bungee = Bungee({ subsets: ["latin"], variable: "--font-bungee", weight: "400" });
const spacemono = Space_Mono({ subsets: ["latin"], variable: "--font-spacemono", weight: ["400", "700"] });

export const metadata = {
  title: "DISKO PANDA — Dengarkan & Tonton",
  description: "Band funk-disco dari Bandung. Single baru, jadwal manggung, dan merch resmi.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={`${bungee.variable} ${spacemono.variable} antialiased`}>{children}</body>
    </html>
  );
}
