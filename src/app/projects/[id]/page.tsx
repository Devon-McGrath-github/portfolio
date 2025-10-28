import Image from 'next/image'
import { notFound } from 'next/navigation'
import { projects } from '@/data/projects'
import Header from '@/components/Header'

type Props = { params: { id: string } }

export function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }))
}

export async function generateMetadata({ params }: Props) {
  const project = projects.find((p) => p.id === params.id)
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
  const project = projects.find((p) => p.id === params.id)
  if (!project) return notFound()

  return (
    <main className="mx-auto max-w-5xl px-6 space-y-8">
      <Header />

      <section className="relative aspect-[16/10] overflow-hidden rounded-xl">
        <Image src={project.imageUrl} alt={project.altText} fill sizes="100vw" className="object-cover" priority />
      </section>
    </main>
  )
}
