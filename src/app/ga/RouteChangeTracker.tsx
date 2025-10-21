'use client'

import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

export default function RouteChangeTracker() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    const id = process.env.NEXT_PUBLIC_GA_ID
    if (!id || typeof window === 'undefined') return

    const url = pathname + (searchParams?.toString() ? `?${searchParams}` : '')
    // Send a GA4 page_view
    // gtag('event', 'page_view', {...}) is optional; GA4 also respects 'config' with page_path
    // @ts-expect-error
    window.gtag?.('event', 'page_view', {
      page_title: document.title,
      page_location: window.location.href,
      page_path: url,
    })
  }, [pathname, searchParams])

  return null
}
