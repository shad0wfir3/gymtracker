import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700", "800"],
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "GymTracker — Track Your Gains. Crush Your Goals.",
  description: "The intelligent workout tracker for serious lifters. Log workouts, track progress, and crush your goals.",
  keywords: ["gym tracker", "workout log", "fitness app", "lifting tracker", "workout journal"],
  openGraph: {
    title: "GymTracker — Track Your Gains. Crush Your Goals.",
    description: "The intelligent workout tracker for serious lifters.",
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
      <body className={`${sans.variable} ${mono.variable} font-sans antialiased bg-background text-foreground`}>
        {children}
      </body>
    </html>
  );
}
