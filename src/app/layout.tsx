import type { Metadata } from 'next'
import Script from 'next/script'

import { SITE } from '@/config/site'

import GoogleAnalytics from '@/components/analytics/GoogleAnalytics'
import ConsentBanner from '../components/consent/ConsentBanner'
import { CONSENT_REGIONS } from '../constants/consentRegions'
// import RouteChangeTracker from './ga/RouteChangeTracker'

import 'styles/globals.css'
import { Geist, Geist_Mono, Inter } from 'next/font/google'
import Footer from '@/components/Footer'
import SmoothScroll from '@/components/SmoothScroll'

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
})

export const metadata: Metadata = {
  title: `${SITE.name}`,
  description: `${SITE.description}`,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${sansFont.variable} ${monoFont.variable} ${displayFont.variable}`}>
      <body>
        {/* --- Consent defaults only for GDPR-style regions --- */}
        <Script id="consent-defaults" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}

            // Deny ads everywhere (I don't run ads)
            gtag('consent', 'default', {
              ad_storage: 'denied',
              ad_user_data: 'denied',
              ad_personalization: 'denied'
            });

            // In GDPR-style regions, keep analytics off until user consents
            gtag('consent', 'default', { analytics_storage: 'denied' }, { region: ${JSON.stringify(CONSENT_REGIONS)} });

            // Outside those regions, allow analytics by default
            gtag('consent', 'default', { analytics_storage: 'granted' });
          `}
        </Script>

        {children}

        <SmoothScroll />

        {/* GA tracking */}
        <GoogleAnalytics />

        {/* Shows itself only in consent regions (see middleware.ts) */}
        <ConsentBanner />

        {/* Footer */}
        <Footer />
      </body>
    </html>
  )
}
