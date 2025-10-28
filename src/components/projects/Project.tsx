import Image from 'next/image'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { ParallaxSection } from './parralax'

export type ProjectItem = {
  id: string
  title: string
  description: string
  imageUrl: string
  altText: string
  projectUrl?: string
}

type ProjectProps = Omit<ProjectItem, 'id'>

export default function Project({ title, description, imageUrl, altText, projectUrl }: ProjectProps) {
  return (
    <div className="m-[1vw] overflow-hidden relative h-[100vh] bg-amber-200">
      <a href={projectUrl} className="block relative w-full h-full">
        <ParallaxSection speed={0.5} className="">
          {/* <AspectRatio ratio={16 / 9} className="w-full h-full relative"> */}
          <Image src={imageUrl} alt={altText} className="object-cover" fill />
          {/* </AspectRatio> */}
        </ParallaxSection>

        <div className="text-white absolute inset-0 z-[11] flex flex-col justify-end items-start w-1/2 mb-[4vw] ml-[5vw] pb-0 pl-0">
          <h2 className="">{title}</h2>
          <p className="">{description}</p>
        </div>
      </a>
    </div>
  )
}
