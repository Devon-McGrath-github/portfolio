import Image from 'next/image'
import { AspectRatio } from '@/components/ui/aspect-ratio'

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
    <div className="m-[1vw]">
      <a href={projectUrl} className='h-[100vh]'>
        <div className="text-white">
          <h2 className="">{title}</h2>
          <p className="">{description}</p>
        </div>
        {/* <AspectRatio ratio={16 / 9} className="position-absolute">
          <Image src={imageUrl} alt={altText} className="object-cover" fill={true} />
        </AspectRatio> */}
      </a>
    </div>
  )
}
