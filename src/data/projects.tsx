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
    id: 'clean-collective',
    title: 'Clean Collective',
    description: 'Brand Website',
    imageUrl: '/projects/cleanco-home.png',
    altText: 'Clean Collective Homepage',
    // projectUrl: 'https://cleanco.io',
  },
  {
    id: 'rinse-vodka',
    title: 'Rinse',
    description: 'Brand Website',
    imageUrl: '/projects/rinse-product.jpg',
    altText: 'Rinse Vodka Homepage',
    // projectUrl: 'https://rinsevodka.com',
  },
]
