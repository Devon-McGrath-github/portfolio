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
    <AspectRatio ratio={16 / 9}>
      <Image src={imageUrl} alt={altText} className="rounded-md object-cover" fill={true} />
    </AspectRatio>
  )
}
