import HomeHeader from '@/components/home-page/HomeHeader'
import HomeNav from '@/components/home-page/HomeNav'
import Project from '@/components/projects/Project'

export default function Home() {
  return (
    <div className="min-h-dvh grid grid-rows-[auto_1fr_auto] w-full">
      {/* Header */}
      <div className="w-full">
        <div className="mx-auto max-w-[min(92vw,3200px)]  py-6">
          <HomeHeader />
        </div>
      </div>

      {/* Main */}
      <div className="w-full"></div>

      {/* Footer */}
      <div className="w-full">
        <div className="mx-auto max-w-[min(92vw,3200px)] px-[clamp(16px,4vw,80px)] py-8">
          <HomeNav />
        </div>
      </div>

      <section className="w-full">
        <Project />
      </section>
    </div>
  )
}
