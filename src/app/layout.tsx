import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar"

export const metadata = {
  title: "阪大外語 文化部連絡協議会",
  desciption:"大阪大学の外国語学部の文化部・文化系サークルの連絡協議会です。",
  keywords: "大阪大学, 外国語学部, 文化部, 文化系サークル, 連絡協議会",
}

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "阪大外語 文化部連絡協議会",
  description: "大阪大学の外国語学部の文化部・文化系サークルの連絡協議会です。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-gray-500">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar/>
        <main className="pt-24 px-4 sm:px-6 lg:px-8">
          <div className="bg-white max-w-6xl mx-auto rounded-lg shadow-lg p-8">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
