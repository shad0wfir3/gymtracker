import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "GymTracker — BE STRONG. Track Your Gains.",
  description: "The intelligent workout tracker designed for serious lifters. Log workouts, track progress, and crush your goals.",
  keywords: ["gym tracker", "workout log", "fitness app", "lifting tracker", "workout journal"],
  openGraph: {
    title: "GymTracker — BE STRONG. Track Your Gains.",
    description: "The intelligent workout tracker designed for serious lifters.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${sans.variable} ${mono.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
