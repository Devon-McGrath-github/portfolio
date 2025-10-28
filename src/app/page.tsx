import Footer from '@/components/Footer'
import HomeHeader from '@/components/home-page/HomeHeader'
import HomeNav from '@/components/home-page/HomeNav'
import Project, { ProjectItem } from '@/components/projects/Project'

const projects: ProjectItem[] = [
  {
    id: 'clean-co',
    title: 'Clean Collective',
    description: 'Brand Website',
    imageUrl: '/projects/cleanco-home.png',
    altText: 'Clean Collective Homepage',
    // projectUrl: 'https://cleanco.io',
  },
  {
    id: 'rinse-vodka',
    title: 'Rinse',
    description: 'Brand Website',
    imageUrl: '/projects/rinse-product.jpg',
    altText: 'Rinse Vodka Homepage',
    // projectUrl: 'https://rinsevodka.com',
  },
]

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
        {projects.map(({ id, ...project }) => (
          <Project key={id} {...project} />
        ))}
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
