import {Button} from 'app/components/ui/button'

export default function Home() {
  return (
    <div className='font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20'>
      <main className='flex flex-col gap-[32px] row-start-2 items-center sm:items-start'>
        <div className='flex flex-col gap-[16px] items-center sm:items-start'>
          <h1 className='text-4xl font-bold'>Welcome to My Page</h1>
          <Button className='bg-blue-500 text-white hover:bg-blue-600'>Click Me</Button>
        </div>
      </main>
      <footer className='row-start-3 flex gap-[24px] flex-wrap items-center justify-center'>
        <a
          href='https://www.linkedin.com/in/devon-mcgrath-17462558/'
          target='_blank'
          rel='noreferrer'
          className='underline hover:text-blue-500'
        >
          LinkedIn
        </a>
        <a
          href='https://github.com/Devon-McGrath-github'
          target='_blank'
          rel='noreferrer'
          className='underline hover:text-blue-500'
        >
          GitHub
        </a>
      </footer>
    </div>
  )
}
