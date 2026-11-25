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
    <div className="min-h-screen flex flex-col gap-14 pt-[16vh]">
      <Header />

      <main className="mx-auto w-full max-w-[680px] px-6 flex-1">
        {/* Title */}
        <section className="space-y-10 mb-[60px]">
          <h1 className="text-4xl md:text-7xl leading-[1.2] font-semibold">{project.title}</h1>
        </section>

        {/* Project description paragraphs */}
        <section className="flex flex-col gap-10">
          {/* Lead paragraph, not a heading: an h3 straight after the h1 skips a heading level */}
          <p className="text-[1.375rem] md:text-[1.75rem] font-medium md:font-normal leading-[1.4]">
            {project.heroText}
          </p>

          {project.paragraphs.map((paragraph, index) => (
            <p
              key={`${project.id}-para-${index}`}
              className="text-[1.125rem] md:text-[1.375rem] leading-[1.6] font-normal text-[#333] normal-case no-underline"
            >
              {paragraph}
            </p>
          ))}
        </section>
      </main>

      {/* Project Gallery */}
      <section className="flex flex-col gap-[20px] w-full items-center">
        {project.images?.map((image, index) => (
          <div key={`${project.id}-image-${index}`} className="relative w-full max-w-[1200px] overflow-hidden">
            <Image
              src={image.url}
              alt={image.altText}
              width={1200}
              height={800}
              sizes="(min-width: 1200px) 1200px, 100vw"
              className="w-full h-auto"
            />
          </div>
        ))}
      </section>
    </div>
  )
}
