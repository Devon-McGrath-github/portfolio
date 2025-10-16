import type {Metadata} from 'next'
import {Geist, Geist_Mono} from 'next/font/google'
import 'styles/globals.css'

const primaryFont = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
})

const fallbackFont = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Devon McGrath',
  description: 'Devon Alexander McGrath Portfolio'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${primaryFont.variable} ${fallbackFont.variable} antialiased`}>{children}</body>
    </html>
  )
}
