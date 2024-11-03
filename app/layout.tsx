import type { Metadata } from "next";
import "./globals.css";


import localFont from 'next/font/local'

const Metadata : Metadata = {
  title: "Moonshot",
  description: "Moonshot is a design system for building ambitious products.",
};

const satoshi = localFont({
  src: [
    {
      path: './fonts/Satoshi-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Satoshi-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/Satoshi-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-satoshi', 
})

const erode = localFont({
  src: [
    {
      path: './fonts/Erode-Italic.ttf',
      weight: '400',
      style: 'normal',
    }
  ],
  variable: '--font-erode',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${satoshi.variable} ${erode.variable}`}>

      <body className={satoshi.className}>{children}</body>
    
    </html>
  )
}
