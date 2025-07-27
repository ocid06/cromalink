import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Croma Official Links | Digital Art & Blockchain Innovation",
  description:
    "Discover the future of digital art and blockchain innovation with Croma Official. Access our social media, NFT collections, and official platforms.",
  keywords: "Croma, NFT, Digital Art, Blockchain, CromaChain, CromaArt, Crypto, Web3",
  authors: [{ name: "Croma Official" }],
  creator: "Croma Official",
  publisher: "Croma Official",
  icons: {
    icon: [
      {
        url: "/croma-logo-new.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/croma-logo-new.png",
        sizes: "16x16",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/croma-logo-new.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    shortcut: "/croma-logo-new.png",
  },
  openGraph: {
    title: "Croma Official Links",
    description: "Discover the future of digital art and blockchain innovation",
    url: "https://croma-official-links.vercel.app",
    siteName: "Croma Official",
    images: [
      {
        url: "/croma-logo-new.png",
        width: 1200,
        height: 630,
        alt: "Croma Official Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Croma Official Links",
    description: "Discover the future of digital art and blockchain innovation",
    images: ["/croma-logo-new.png"],
    creator: "@CromaChain",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/croma-logo-new.png" sizes="any" />
        <link rel="apple-touch-icon" href="/croma-logo-new.png" />
        <meta name="theme-color" content="#dc2626" />
        <meta name="msapplication-TileColor" content="#dc2626" />
        <meta name="msapplication-TileImage" content="/croma-logo-new.png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
