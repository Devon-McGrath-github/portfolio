import {Button} from '@/components/ui/button'

export default function Page() {
  return (
    <section>
      <h1 className='mb-8 text-2xl font-semibold tracking-tighter'>My Portfolio</h1>
      <p className='mb-4'>{`This is a simple portfolio page.`}</p>
      <Button>Click me</Button>
    </section>
  )
}
