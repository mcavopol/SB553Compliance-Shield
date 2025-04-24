import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Analytics from "@/components/analytics"
import { Suspense } from "react"

const inter = Inter({ subsets: ["latin"], display: "swap" })

export const metadata: Metadata = {
  title: "SB 553 Compliance Software | SB 553 Compliance Shield",
  description:
    "SB553Shield: Effortless SB 553 compliance for California employers. Generate plans, train staff, log incidents & audit-proof your WVPP.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sb553compliance-shield.com",
    title: "SB 553 Compliance Software | SB 553 Compliance Shield",
    description:
      "SB553Shield: Effortless SB 553 compliance for California employers. Generate plans, train staff, log incidents & audit-proof your WVPP.",
    siteName: "SB 553 Compliance Shield",
    images: [
      {
        url: "https://sb553compliance-shield.com/downtown-la-evening.png",
        width: 1200,
        height: 630,
        alt: "Los Angeles skyline - SB 553 Compliance Shield",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SB 553 Compliance Software | SB 553 Compliance Shield",
    description:
      "SB553Shield: Effortless SB 553 compliance for California employers. Generate plans, train staff, log incidents & audit-proof your WVPP.",
    images: ["https://sb553compliance-shield.com/downtown-la-evening.png"],
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
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <Suspense fallback={null}>{children}</Suspense>
        </ThemeProvider>
        <Suspense fallback={null}>
          <Analytics />
        </Suspense>
      </body>
    </html>
  )
}
