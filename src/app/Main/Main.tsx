import { cn } from 'lib/utils'

type MainProps = {
  children?: React.ReactNode
  className?: string
}

export default function Main({ children, className }: MainProps) {
  return <main className={cn('mx-auto max-w-4xl px-4 py-8', className)}>{children}</main>
}
