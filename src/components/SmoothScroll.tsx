'use client'

import { useEffect } from 'react'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'

/**
 * Smooths mouse-wheel scrolling so each notch glides instead of stepping. Lenis still moves the
 * native page scroll position, so scroll-driven CSS (the project parallax) and scroll listeners
 * keep working. Touch scrolling stays native. Users who prefer reduced motion get plain
 * native scrolling.
 */
export default function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const lenis = new Lenis({
      autoRaf: true,
      // Don't let a glide carry over into the next page when a link is clicked mid-scroll.
      stopInertiaOnNavigate: true,
    })
    return () => lenis.destroy()
  }, [])

  return null
}
