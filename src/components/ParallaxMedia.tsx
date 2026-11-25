'use client'

import { useEffect, useRef } from 'react'
import { cn } from '@/utils/utils'

type ParallaxMediaProps = {
  children: React.ReactNode
  className?: string
}

/**
 * Full-bleed media that drifts slower than the page while its nearest `.parallax-frame`
 * ancestor scrolls through the viewport.
 *
 * The motion is a CSS scroll-driven animation (see `.parallax-media` in globals.css), which
 * runs on the compositor in lockstep with the scroll position, so it stays smooth with
 * stepped mouse-wheel scrolling. The effect below is only a fallback for browsers without
 * scroll-driven animations: it feeds the frame's scroll progress to the same CSS via
 * `--parallax-progress`.
 */
export default function ParallaxMedia({ children, className }: ParallaxMediaProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const media = ref.current
    const frame = media?.closest<HTMLElement>('.parallax-frame')
    if (!media || !frame) return
    if (CSS.supports('animation-timeline', 'view()')) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let raf = 0
    const update = () => {
      raf = 0
      const { top, height } = frame.getBoundingClientRect()
      const viewport = window.innerHeight
      // 0 as the frame's top enters the bottom of the viewport, 1 as its bottom leaves the top
      // (the same range as the CSS `view()` timeline's default `cover`).
      const progress = Math.min(1, Math.max(0, (viewport - top) / (viewport + height)))
      media.style.setProperty('--parallax-progress', progress.toFixed(4))
    }
    const schedule = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
    }
  }, [])

  return (
    <div ref={ref} className={cn('parallax-media', className)}>
      {children}
    </div>
  )
}
