import Link from 'next/link'
import { Button } from './ui/button'

export default function Header() {
  return (
    <header className="w-full max-w-[1200px] mx-auto flex items-center py-5 md:py-10 fixed top-0 left-0 right-0 z-10">
      <Button variant={'ghost'} className="text-3xl font-bold">
        <Link href="/">
          Devon McGrath
          <span
            role="presentation"
            aria-hidden="true"
            className="
              relative
              animate-blink
              after:content-['']
              after:inline-block
              after:w-[0.28em] after:h-[0.28em]
              after:rounded-full
              after:bg-destructive
              after:ml-[0.08em]
              after:align-baseline
              after:translate-y-[0.05em]            
              after:animate-blink
            "
          />
        </Link>
      </Button>
    </header>
  )
}
