export type ProjectItem = {
  id: string
  title: string
  textVariant?: string
  description: string
  imageUrl: string
  altText: string
  projectUrl?: string
}

export const projects: ProjectItem[] = [
  {
    id: 'rinse-vodka',
    title: 'Rinse',
    description: 'Brand Website',
    imageUrl: '/projects/rinsevodka/rinse-product.jpg',
    altText: 'Rinse Vodka Homepage',
  },
  {
    id: 'clean-collective',
    title: 'Clean Collective',
    textVariant: 'dark',
    description: 'Brand Website',
    imageUrl: '/projects/cleanco/cleanco-home.jpg',
    altText: 'Clean Collective Homepage',
  },
]
