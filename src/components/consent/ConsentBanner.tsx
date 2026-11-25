'use client'

import { Button } from '@/components/ui/button'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { useEffect, useState } from 'react'
import { ANALYTICS_GRANTED_EVENT, CONSENT_KEY, isInConsentRegion, readStoredConsent } from './consent'

export default function ConsentBanner() {
  const [mounted, setMounted] = useState(false) // renders the banner
  const [shown, setShown] = useState(false) // controls slide-in animation

  useEffect(() => {
    if (!isInConsentRegion()) return
    const stored = readStoredConsent()
    if (!stored) {
      // No previous choice → mount banner, then animate in after a small delay
      setMounted(true) // render
      const t = setTimeout(() => setShown(true), 400) // delay before slide-in
      return () => clearTimeout(t)
    }
    // If there is a stored choice, apply it on mount
    window.gtag?.('consent', 'update', stored)
  }, [])

  const slideOutAndUnmount = () => {
    setShown(false)
    setTimeout(() => setMounted(false), 500) // match duration-500
  }

  // const acceptAll = () => {
  //   const choice = {
  //     ad_storage: 'granted',
  //     ad_user_data: 'granted',
  //     ad_personalization: 'granted',
  //     analytics_storage: 'granted',
  //   }
  //   localStorage.setItem(CONSENT_KEY, JSON.stringify(choice))
  //   window.gtag?.('consent', 'update', choice)

  //   // Optional immediate page_view
  //   window.gtag?.('event', 'page_view', {
  //     page_title: document.title,
  //     page_location: window.location.href,
  //     page_path: window.location.pathname + window.location.search,
  //   })

  //   slideOutAndUnmount()
  // }

  const rejectAll = () => {
    const choice = {
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
      analytics_storage: 'denied',
    }
    localStorage.setItem(CONSENT_KEY, JSON.stringify(choice))
    window.gtag?.('consent', 'update', choice)
    slideOutAndUnmount()
  }

  const acceptAnalyticsOnly = () => {
    const choice = {
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
      analytics_storage: 'granted',
    }
    localStorage.setItem(CONSENT_KEY, JSON.stringify(choice))
    window.gtag?.('consent', 'update', choice)

    // Loads GA, whose config call sends this page's page_view
    window.dispatchEvent(new Event(ANALYTICS_GRANTED_EVENT))

    slideOutAndUnmount()
  }

  if (!mounted) return null

  return (
    <Alert
      role="region"
      aria-label="Cookie preferences"
      aria-live="polite"
      variant="default"
      className={[
        // positioning & look
        'border-none bg-neutral-700 font-mono fixed inset-x-0 sm:inset-x-auto bottom-2 sm:bottom-[2vw] sm:left-[2vw] z-50 text-white backdrop-blur border-t flex flex-col gap-4 w-[90vw] max-w-sm mx-auto',
        // animation
        'transition-all duration-500 ease-out',
        // start off-screen then slide up when `shown` is true
        shown ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0',
      ].join(' ')}
    >
      <AlertDescription className="text-white">
        I use cookies to analyze traffic. You may opt in or out of these:
      </AlertDescription>

      <div className="ml-auto flex gap-2 justify-end">
        <Button onClick={rejectAll} variant="default" className="font-medium">
          Reject
        </Button>
        <Button onClick={acceptAnalyticsOnly} variant="secondary" className="font-medium">
          Allow analytics
        </Button>
      </div>
    </Alert>
  )
}
