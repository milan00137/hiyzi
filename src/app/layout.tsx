import localFont from "next/font/local";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import ViewCanvas from "@/components/ViewCanvas";
import Footer from "@/components/Footer";

const alpino = localFont({
  src: "../../public/fonts/Alpino-Variable.woff2",
  display: "swap",
  weight: "100 900",
  variable: "--font-alpino",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hiyzi – A Portfolio Creation by Milan Dhameliya (Code Kaarigari)",
  description:
    "A uniquely crafted fictional soda brand, designed to showcase creativity, branding, and design expertise. Created solely for portfolio and skill demonstration by Milan Dhameliya, founder of Code Kaarigari.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={alpino.variable}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-yellow-300 overflow-x-hidden`}
      >
        <Header />
        <main>
          {children}
          <ViewCanvas />
        </main>
        <Footer />
      </body>
    </html>
  );
}
