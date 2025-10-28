import Image from 'next/image'
import { notFound } from 'next/navigation'
import { projects } from '@/data/projects'

type Props = { params: { id: string } }

export function generateStaticParams() {
  return projects.map(p => ({ id: p.id }))
}

export async function generateMetadata({ params }: Props) {
  const project = projects.find(p => p.id === params.id)
  if (!project) return {}
  return {
    title: `${project.title} — Projects`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: [{ url: project.imageUrl }],
    },
  }
}

export default function ProjectPage({ params }: Props) {
  const project = projects.find(p => p.id === params.id)
  if (!project) return notFound()

  return (
    <main className="mx-auto max-w-5xl px-6 py-12 space-y-8">
      <header className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">{project.title}</h1>
        <p className="text-neutral-600">{project.description}</p>
      </header>

      <section className="relative aspect-[16/10] overflow-hidden rounded-xl">
        <Image
          src={project.imageUrl}
          alt={project.altText}
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
      </section>
    </main>
  )
}
