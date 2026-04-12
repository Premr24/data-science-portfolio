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
  title: "Prem Rawal | Data Science Portfolio",
  description: "Turning noise into signals.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth overflow-x-hidden`}
    >
      <body className="bg-background text-neutral-300 font-sans antialiased overflow-x-hidden min-h-screen cursor-none flex flex-col">
        <Cursor />
        <CommandPalette />
        
        {/* Main content wrapper */}
        <main className="flex-grow">
          {children}
        </main>
        
        <Footer />
      </body>
    </html>
  );
}