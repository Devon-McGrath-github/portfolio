import Image from 'next/image'
import { ParallaxSection } from './Parralax'
import { ProjectItem } from '@/data/projects'

type ProjectProps = Omit<ProjectItem, 'id'>

export default function Project({ title, description, imageUrl, altText, projectUrl }: ProjectProps) {
  return (
    <div className="m-[1vw] overflow-hidden relative h-[100vh]">
      <a href={projectUrl} className="block relative w-full h-full">
        <ParallaxSection speed={0.5} className="">
          <Image src={imageUrl} alt={altText} className="object-cover" sizes="100vw" fill />
        </ParallaxSection>

        <div className="text-white absolute inset-0 z-[11] flex flex-col justify-end items-start w-1/2 mb-[4vw] ml-[5vw] pb-0 pl-0">
          <h2 className="mb-[1vw] text-[clamp(2rem,12vw,6.5rem)]">{title}</h2>
          <div>
            <p className="ml-[0.6vw] text-[1.1rem]">{description}</p>
          </div>
        </div>
      </a>
    </div>
  )
}
