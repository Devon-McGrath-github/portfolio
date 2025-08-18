import {Button} from 'app/components/ui/button'

export default function Home() {
  return (
    <div className='font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20'>
      <main className='flex flex-col gap-[32px] row-start-2 items-center sm:items-start'>
        <div className='flex flex-col gap-[16px] items-center sm:items-start'>
          <h1 className='text-4xl font-bold'>Welcome to My Page</h1>
          <p className='text-lg text-gray-700'>This is a simple Next.js application.</p>
          <Button className='bg-blue-500 text-white hover:bg-blue-600'>Click Me</Button>
        </div>
      </main>
      <footer className='row-start-3 flex gap-[24px] flex-wrap items-center justify-center'></footer>
    </div>
  )
}
