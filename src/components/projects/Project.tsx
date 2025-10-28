import Image from 'next/image'
import { AspectRatio } from '@/components/ui/aspect-ratio'

export default function Project() {
  return (
    <AspectRatio ratio={16 / 9}>
      <Image
        src="/projects/cleanco-home.png"
        alt="Clean Collective Homepage"
        className="rounded-md object-cover"
        fill={true}
      />
    </AspectRatio>
  )
}
