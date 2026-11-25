export const CONSENT_KEY = 'consent.choice.v1' // change if you need to invalidate old choices

/** Fired on `window` when the visitor grants analytics consent, so GA can be loaded. */
export const ANALYTICS_GRANTED_EVENT = 'consent:analytics-granted'

/** Set by middleware.ts: '1' if the visitor is in a consent region, '0' if not. */
export const CONSENT_REGION_COOKIE = 'consent_region'

/** Defaults to true when the cookie is missing (e.g. local dev), the safer choice. */
export function isInConsentRegion(): boolean {
  const match = document.cookie.match(new RegExp(`(?:^|; )${CONSENT_REGION_COOKIE}=([^;]*)`))
  return match?.[1] !== '0'
}

export type ConsentChoice = Record<string, 'granted' | 'denied'>

export function readStoredConsent(): ConsentChoice | null {
  try {
    const stored = localStorage.getItem(CONSENT_KEY)
    return stored ? (JSON.parse(stored) as ConsentChoice) : null
  } catch {
    return null
  }
}
