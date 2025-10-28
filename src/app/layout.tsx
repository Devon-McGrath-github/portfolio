import { headers } from 'next/headers'
import type { Metadata } from 'next'
import Script from 'next/script'

import { SITE } from '@/config/site'

import GoogleAnalytics from '@/components/analytics/GoogleAnalytics'
import ConsentBanner from '../components/consent/ConsentBanner'
import { CONSENT_REGIONS } from '../constants/consentRegions'
// import RouteChangeTracker from './ga/RouteChangeTracker'

import 'styles/globals.css'
import { Geist, Geist_Mono, Inter } from 'next/font/google'

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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const h = await headers()

  // Netlify: x-nf-geo contains JSON with { country, subdivision, city, ... }
  // Fallbacks: if header missing (local dev), default to showing the banner (safer).
  let inConsentRegion = true
  try {
    const geoRaw = h.get('x-nf-geo') || '{}'
    const geo = JSON.parse(geoRaw)
    const cc = (geo?.country || '').toUpperCase()
    inConsentRegion = CONSENT_REGIONS.includes(cc) || cc === ''
  } catch {
    inConsentRegion = true
  }

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

        {/* GA load + SPA tracking (from your existing setup) */}
        <GoogleAnalytics />
        {/* <RouteChangeTracker /> */}

        {/* Show banner only where required */}
        {inConsentRegion && <ConsentBanner />}
      </body>
    </html>
  )
}
