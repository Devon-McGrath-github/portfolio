import Link from 'next/link'
import { Button } from './ui/button'

export default function Header() {
  return (
    <header className="w-full flex items-center py-4">
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
