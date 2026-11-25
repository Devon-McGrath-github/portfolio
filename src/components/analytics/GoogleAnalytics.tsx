'use client'

import { useEffect, useState } from 'react'
import Script from 'next/script'
import { ANALYTICS_GRANTED_EVENT, isInConsentRegion, readStoredConsent } from '@/components/consent/consent'

export default function GoogleAnalytics() {
  const id = process.env.NEXT_PUBLIC_GA_ID
  const [enabled, setEnabled] = useState(false)

  // In consent regions, gtag.js is only downloaded once the visitor allows analytics.
  useEffect(() => {
    if (!isInConsentRegion() || readStoredConsent()?.analytics_storage === 'granted') {
      setEnabled(true)
      return
    }
    const enable = () => setEnabled(true)
    window.addEventListener(ANALYTICS_GRANTED_EVENT, enable, { once: true })
    return () => window.removeEventListener(ANALYTICS_GRANTED_EVENT, enable)
  }, [])

  if (!id || !enabled) return null

  // lazyOnload: fetch gtag.js once the browser is idle after load, keeping it off the critical
  // path. Any gtag() calls made before then are queued in dataLayer by the stub in layout.tsx.
  return (
    <>
      <Script id="ga4" src={`https://www.googletagmanager.com/gtag/js?id=${id}`} strategy="lazyOnload" />
      <Script id="ga4-init" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${id}', {
            anonymize_ip: true,
            allow_google_signals: false
          });
        `}
      </Script>
    </>
  )
}
