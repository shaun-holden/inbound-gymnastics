import type { Metadata } from "next";
import { Josefin_Sans, Righteous } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  variable: "--font-josefin",
  display: "swap",
});

const righteous = Righteous({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-righteous",
  display: "swap",
});

export const metadata: Metadata = {
  title: "In Bound Gymnastics | Albany, GA",
  description:
    "In Bound Gymnastics has served Albany, Georgia since 2005 with recreational classes, competitive team training, camps, birthday parties, and more.",
  keywords: [
    "gymnastics Albany GA",
    "gymnastics classes",
    "competitive gymnastics Georgia",
    "birthday parties Albany",
    "gymnastics camps",
  ],
  authors: [{ name: "In Bound Gymnastics" }],
  openGraph: {
    title: "In Bound Gymnastics | Albany, GA",
    description:
      "Recreational and competitive gymnastics for all ages. Serving Albany, Georgia since 2005.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${josefin.variable} ${righteous.variable}`}>
      <body className="bg-[var(--background)] text-[var(--foreground)] antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
