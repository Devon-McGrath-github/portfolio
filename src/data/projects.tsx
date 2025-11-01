export type ProjectItem = {
  id: string
  title: string
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
    // projectUrl: 'https://rinsevodka.com',
  },
  {
    id: 'clean-collective',
    title: 'Clean Collective',
    description: 'Brand Website',
    imageUrl: '/projects/cleanco/cleanco-home.jpg',
    altText: 'Clean Collective Homepage',
    // projectUrl: 'https://cleanco.io',
  },
]
