import Footer from '@/components/Footer'
import HomeHeader from '@/components/home-page/HomeHeader'
import HomeNav from '@/components/home-page/HomeNav'
import Project from '@/components/projects/Project'
import { projects } from '@/data/projects'

export default function Home() {
  return (
    <div>
      <div className="min-h-dvh grid grid-rows-[auto_1fr_auto] w-full">
        {/* Header */}
        <div className="mx-auto max-w-[min(92vw,3200px)] py-6 w-full">
          <HomeHeader />
        </div>

        {/* Main */}
        <div></div>

        {/* Nav */}
        <div className="mx-auto max-w-[min(92vw,3200px)] px-[clamp(16px,4vw,80px)] py-8 w-full">
          <HomeNav />
        </div>
      </div>

      {/* Projects */}
      <section className="w-full flex flex-col">
        {projects.map(({ id, projectUrl, ...project }) => (
          <Project key={id} projectUrl={projectUrl ?? `/projects/${id}`} {...project} />
        ))}
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
