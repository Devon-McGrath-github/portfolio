import HomeHeader from '@/components/home-page/HomeHeader'
import HomeNav from '@/components/home-page/HomeNav'
import Project, { ProjectItem } from '@/components/projects/Project'

const projects: ProjectItem[] = [
  {
    id: 'clean-co',
    title: 'Clean Collective',
    description:
      'Led the design and development of the Clean Collective brand website, showcasing their eco-friendly, health-conscious ready-to-drink cocktails.',
    imageUrl: '/projects/cleanco-home.png',
    altText: 'Clean Collective Homepage',
    // projectUrl: 'https://cleanco.io',
  },
  {
    id: 'rinse-vodka',
    title: 'Rinse Vodka',
    description:
      'Designed and built the marketing site for Rinse Vodka Soda, a New Zealand beverage brand. Implemented a clean, performance-focused React build highlighting the product’s key selling points — low sugar, natural ingredients, and real fruit juice.',
    imageUrl: '/projects/rinse-home.png',
    altText: 'Rinse Vodka Homepage',
    // projectUrl: 'https://rinsevodka.com',
  },
]

export default function Home() {
  return (
    <div>
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
      </div>

      <section className="w-full flex flex-col">
        {projects.map(({ id, ...project }) => (
          <Project key={id} {...project} />
        ))}
      </section>
    </div>
  )
}
