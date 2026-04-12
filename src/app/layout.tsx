import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Cursor from "@/components/Cursor";
import CommandPalette from "@/components/CommandPalette";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Prem Rawal | Data Science & Software Engineering Portfolio",
  description: "Official portfolio of Prem Rawal, a Data Scientist and Software Engineer based in Nepal.",
  keywords: ["Prem Rawal", "Data Scientist Nepal", "Software Developer"],
  authors: [{ name: "Prem Rawal" }],
  openGraph: {
    title: "Prem Rawal | Portfolio",
    description: "Turning noise into signals through Data Science and Backend Engineering.",
    url: "https://data-science-portfolio-dun.vercel.app", 
    siteName: "Prem Rawal Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}>
      <body className="bg-background text-neutral-300 font-sans antialiased min-h-screen cursor-none flex flex-col">
        <Cursor />
        <CommandPalette />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}