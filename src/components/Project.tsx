'use client'

import Image from 'next/image'
import { Parallax } from 'react-scroll-parallax'
import { ProjectItem } from '@/data/projects'
import Link from 'next/link'
import { cn } from '@/utils/utils'

type ProjectProps = Omit<ProjectItem, 'id'>

export default function Project({ title, textVariant, description, imageUrl, altText, projectUrl }: ProjectProps) {
  const textColorClass = textVariant === 'dark' ? 'text-foreground ' : 'text-white'

  return (
    <div className={cn('m-[1vw] overflow-hidden relative h-[100vh]', textVariant === 'dark' ? '' : 'bg-black')}>
      <Link href={`${projectUrl}`} className="block relative w-full h-full">
        <Parallax speed={-40} className="h-full w-full">
          <div className="relative h-full w-full">
            <Image src={imageUrl} alt={altText} fill className="object-cover" sizes="100vw" priority />
          </div>
        </Parallax>

        <div
          className={cn(
            'absolute inset-0 z-[11] flex flex-col justify-end items-start w-1/2 mb-[4vw] ml-[5vw] pb-0 pl-0',
            textColorClass,
          )}
        >
          <h2 className="mb-[1vw] text-[clamp(2rem,12vw,6.5rem)] font-bold">{title}</h2>
          <div>
            <p className="ml-[0.6vw] text-[1.1rem] font-medium">{description}</p>
          </div>
        </div>
      </Link>
    </div>
  )
}
