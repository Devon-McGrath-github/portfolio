import { cn } from 'lib/utils'

type MainProps = {
  children?: React.ReactNode
  className?: string
}

export default function Main({ children, className }: MainProps) {
  return <main className={cn('', className)}>{children}</main>
}
