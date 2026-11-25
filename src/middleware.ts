import { NextResponse, type NextRequest } from 'next/server'
import { CONSENT_REGIONS } from '@/constants/consentRegions'
import { CONSENT_REGION_COOKIE } from '@/components/consent/consent'

/**
 * Records whether the visitor is in a GDPR-style region in a cookie the consent banner reads.
 * Doing this at Netlify's edge (instead of reading headers in the layout) keeps every page
 * static, so the HTML is served straight from the CDN cache.
 */
export function middleware(request: NextRequest) {
  const country = getCountry(request)
  // Unknown country (e.g. local dev): assume consent is required, the safer default.
  const value = country && !(CONSENT_REGIONS as readonly string[]).includes(country) ? '0' : '1'

  const response = NextResponse.next()
  if (request.cookies.get(CONSENT_REGION_COOKIE)?.value !== value) {
    response.cookies.set(CONSENT_REGION_COOKIE, value, { path: '/', sameSite: 'lax', maxAge: 60 * 60 * 24 })
  }
  return response
}

/**
 * Netlify sends geo data in `x-nf-geo` as JSON (base64-encoded on some runtimes), with the
 * country either as a code string or as `{ code, name }`.
 */
function getCountry(request: NextRequest): string {
  const raw = request.headers.get('x-nf-geo')
  if (!raw) return ''
  for (const decode of [(s: string) => s, (s: string) => atob(s)]) {
    try {
      const country = JSON.parse(decode(raw))?.country
      const code = typeof country === 'string' ? country : country?.code
      if (typeof code === 'string' && code) return code.toUpperCase()
    } catch {}
  }
  return ''
}

export const config = {
  // Pages only: skip Next internals, the image optimiser and files with an extension.
  matcher: ['/((?!_next/|.*\\..*).*)'],
}
