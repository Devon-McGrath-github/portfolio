import Image from 'next/image'
import { notFound } from 'next/navigation'
import { projects } from '@/data/projects'
import Header from '@/components/Header'

type Params = { id: string }

export function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }))
}

// TODO: add metadata generation
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
    <div className="min-h-screen flex flex-col pt-[16vh]">
      <Header />

      <main className="mx-auto w-full max-w-[680px] px-6 space-y-8 flex-1">
        <section className="space-y-4">
          <h1 className="text-4xl md:text-7xl leading-[1.2] font-semibold">{project.title}</h1>
        </section>

        <section className="flex flex-col gap-10 ">
          <h3 className="text-[1.375rem] md:text-[1.75rem] font-medium md:font-normal leading-[1.4]">
            {project.heroText}
          </h3>

          {project.paragraphs.map((paragraph, i) => (
            <p
              key={`${project.id}-para-${i}`}
              className="text-[1.125rem] md:text-[1.375rem] leading-[1.6] font-normal text-[#333] normal-case no-underline"
            >
              {paragraph}
            </p>
          ))}
        </section>

        <section className="relative aspect-[16/10] overflow-hidden rounded-xl">
          <Image src={project.imageUrl} alt={project.altText} fill sizes="100vw" className="object-cover" priority />
        </section>
      </main>
    </div>
  )
}
