'use client'
import { useEffect, useRef } from 'react'

type Props = {
  children: React.ReactNode
  speed?: number
  className?: string
}

export function ParallaxSection({ children, speed = 0.5, className = '' }: Props) {
  const rootRef = useRef<HTMLDivElement>(null)
  const topRef = useRef(0) // element’s page Y at mount
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    const el = rootRef.current
    if (!el) return

    // Cache initial page offset of the element
    const rect = el.getBoundingClientRect()
    topRef.current = rect.top + window.scrollY

    const update = () => {
      if (!el) return
      const y = (window.scrollY - topRef.current) * speed
      // GPU-friendly transform
      el.style.transform = `translate3d(0, ${y}px, 0)`
    }

    const onScroll = () => {
      if (rafRef.current != null) return
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = null
        update()
      })
    }

    // Initial position
    update()

    window.addEventListener('scroll', onScroll, { passive: true })
    // Recompute on resize since layout can shift
    const onResize = () => {
      const r = el.getBoundingClientRect()
      topRef.current = r.top + window.scrollY
      update()
    }
    window.addEventListener('resize', onResize)

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
    }
  }, [speed])

  return (
    <div ref={rootRef} className={`relative h-full w-full will-change-transform ${className}`}>
      {children}
    </div>
  )
}
