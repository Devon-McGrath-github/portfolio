import type { Metadata } from 'next'
import { Geist, Geist_Mono, Inter } from 'next/font/google'
import 'styles/globals.css'

const sansFont = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const monoFont = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

const displayFont = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: '900',
})

export const metadata: Metadata = {
  title: 'Devon McGrath',
  description: 'Devon Alexander McGrath Portfolio',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${sansFont.variable} ${monoFont.variable} ${displayFont.variable}`}>
      <body className="font-mono">{children}</body>
    </html>
  )
}
