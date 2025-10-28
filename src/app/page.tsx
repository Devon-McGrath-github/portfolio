import HomeHeader from '@/components/home-page/HomeHeader'
import HomeNav from '@/components/home-page/HomeNav'
import Project, { ProjectItem } from '@/components/projects/Project'

const projects: ProjectItem[] = [
  {
    id: 'clean-co',
    title: 'Clean Collective',
    description:
      'A platform connecting eco-conscious consumers with sustainable brands, promoting environmentally friendly products and practices.',
    imageUrl: '/projects/cleanco-home.png',
    altText: 'Clean Collective Homepage',
    // projectUrl: 'https://cleanco.io',
  },
  {
    id: 'rinse-vodka',
    title: 'Rinse Vodka',
    description:
      'A premium vodka brand that emphasizes purity and smoothness, crafted using a unique filtration process for an exceptional drinking experience.',
    imageUrl: '/projects/rinse-home.png',
    altText: 'Rinse Vodka Homepage',
    // projectUrl: 'https://rinsevodka.com',
  },
]

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
        {projects.map(({ id, ...project }) => (
          <Project key={id} {...project} />
        ))}
      </section>
    </div>
  )
}
