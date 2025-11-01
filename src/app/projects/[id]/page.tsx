import Image from 'next/image'
import { notFound } from 'next/navigation'
import { projects } from '@/data/projects'
import Header from '@/components/Header'

type Params = { id: string }

// If you pre-render all ids, keep this:
export function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }))
}

// * Temporarily disabled metadata generation due to an issue with Next.js
// export async function generateMetadata({ params }: Props) {
//   const project = projects.find((p) => p.id === params.id)
//   if (!project) return {}
//   return {
//     title: `${project.title} — Projects`,
//     description: project.description,
//     openGraph: {
//       title: project.title,
//       description: project.description,
//       images: [{ url: project.imageUrl }],
//     },
//   }
// }

export default async function ProjectPage({ params }: { params: Promise<Params> }) {
  const { id } = await params
  const project = projects.find((p) => p.id === id)
  if (!project) notFound()

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="mx-auto w-full max-w-[680px] px-6 space-y-8 flex-1">
        <section className="space-y-4">
          <h1 className="text-4xl font-bold">{project.title}</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">{project.description}</p>
        </section>

        <section className="relative aspect-[16/10] overflow-hidden rounded-xl">
          <Image src={project.imageUrl} alt={project.altText} fill sizes="100vw" className="object-cover" priority />
        </section>
      </main>
    </div>
  )
}
