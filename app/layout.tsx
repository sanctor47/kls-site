import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

import localFont from 'next/font/local'

const avenir = localFont({
  src: [
    {
      path: '../public/fonts/Avenir Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/fonts/Avenir Regular.ttf',
      weight: '400', // "Book" or Regular
      style: 'normal',
    },
    {
      path: '../public/fonts/Avenir Heavy.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../public/fonts/Avenir Black.ttf',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-avenir' // This defines the CSS variable name
})

export const metadata: Metadata = {
  title: "KLS SIA | Excellence in Education | Opening 2026/2027",
  description:
    "KLS SIA is a premium international school in Egypt offering British IGCSE, American Diploma, and Finnish-inspired early years education. Setting a new global standard for excellence.",
  generator: "v0.app",
  keywords: [
    "international school Egypt",
    "IGCSE Egypt",
    "American Diploma Egypt",
    "premium education",
    "KLS SIA",
    "Cairo international school",
  ],
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${avenir.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
