import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import ClientWrapper from "@/components/ClientWrapper";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sandur Polytechnic | Yeshwantnagar",
  description: "Welcome to Sandur Polytechnic (Sanpoly), one of the finest technical diploma engineering institutions in Karnataka. Established in 1988, offering high-quality technical education, placement, and holistic development.",
  keywords: "Sandur Polytechnic, Sanpoly, Ballari Diploma Colleges, Karnataka Polytechnic, Engineering Diploma Admissions 2026, Civil, Computer Science, EEE, ECE, Mechanical Engineering",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-slate-950 text-white">
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  );
}

