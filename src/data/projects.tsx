export type ProjectItem = {
  id: string
  title: string
  description: string
  heroText?: string
  paragraphs: string[]
  imageUrl: string
  altText: string
  textVariant?: 'dark' // for light backgrounds
  projectUrl?: string
  images?: ImageItem[]
}

type ImageItem = {
  url: string
  altText: string
}

export const projects: ProjectItem[] = [
  {
    id: 'rinse-vodka',
    title: 'Rinse',
    description: 'Brand Website',
    heroText:
      'Rinse Vodka Soda is a New Zealand beverage brand built for creativity and fun: crafting clean, refreshing drinks with natural ingredients and a modern streetwear aesthetic. I designed and developed their public-facing website, creating a lightweight, flexible build with custom JavaScript enhancements for interactivity and compliance.',
    paragraphs: [
      'One of the core features I implemented was an age verification system, developed from scratch to ensure a seamless user experience while meeting regulatory standards. I also integrated the custom Google Maps store locator I had originally built for Clean Collective, allowing customers to easily find verified Rinse stockists across the country.',
      'Beyond development, I set up Google Analytics and refined SEO across the site, ensuring every page performed well both in search visibility and user engagement. These insights helped the marketing team understand user behavior, refine campaigns, and make data-informed decisions about content and promotions.',
      'Visually, the site was designed to feel as clean and uncomplicated as the product itself. I established the layout, typography, and imagery to reflect Rinse’s minimalist branding, collaborating with the creative team to shape photography and content that fit harmoniously within the design system. The result was a sleek, fast, and easily managed website that expressed the brand’s personality while supporting ongoing growth and marketing needs.',
    ],
    imageUrl: '/projects/rinsevodka/rinse-product.webp',
    altText: 'Rinse Vodka product shot',
    images: [
      {
        url: '/projects/rinsevodka/rinse-prod-line.webp',
        altText: 'Rinse Vodka Soda product line',
      },
      {
        url: '/projects/rinsevodka/rinse-home.webp',
        altText: 'Rinse Vodka Soda website homepage',
      },
      {
        url: '/projects/rinsevodka/rinse-prod-2.webp',
        altText: 'Rinse Vodka bottles',
      },
      {
        url: '/projects/rinsevodka/rinse-prod-1.webp',
        altText: 'Rinse Vodka hero image',
      },
      {
        url: '/projects/rinsevodka/rinse-website-gallery.webp',
        altText: 'Rinse Vodka website gallery view',
      },
      {
        url: '/projects/rinsevodka/rinse-prod-diamond.webp',
        altText: 'Rinse Vodka Soda diamond product shot',
      },
    ],
  },
  {
    id: 'clean-collective',
    title: 'Clean Collective',
    description: 'Brand Website',
    heroText:
      'Clean Collective is a New Zealand beverage brand built for conscious consumers — crafting sugar-free drinks made with natural ingredients and eco-friendly packaging. I developed their public-facing website, creating a performant and maintainable front end using React, Next.js, and SASS.',
    paragraphs: [
      'When I joined the company, the brand had strong values and a great product, but no online presence. My role was to design and build a website that embodied those values — one that looked beautiful, performed seamlessly, and could scale as the business grew.',
      'I led the design and front-end development of the site from the ground up, using React, Next.js, and SASS. Rather than working from an existing mockup, I created a visual language and layout system that reflected Clean Collective’s minimalist aesthetic and commitment to honesty — clean typography, generous white space, and natural imagery. I also collaborated closely with the marketing team to shape the brand’s visual storytelling online, often requesting specific image formats and compositions (“a narrow vertical product shot,” for example) to ensure the photography fit the design and layout harmoniously.',
      'The browsing experience was built to feel effortless — whether users were learning about the brand’s sustainability story, exploring the product range, or finding where to buy it. One of the most rewarding challenges was developing a custom Google Maps store locator, which dynamically fetched live stockist data, generated pins automatically, and used geolocation to help visitors discover their nearest retailer. This feature quickly became one of the site’s most-used tools.',
      'As the company expanded, we introduced e-commerce functionality using Stripe, allowing customers to purchase directly from the site. I handled the full setup and integration — from checkout flow to payment capture — ensuring a secure, frictionless buying experience consistent with the brand’s trust-based ethos.',
      'I also implemented Google Analytics to track user journeys and key conversion points, turning the website from a static marketing page into a measurable, data-informed platform. These insights helped guide future content strategy and product promotion, aligning the website’s performance with real business goals.',
      'What made this project stand out for me was the interplay between technical precision and brand expression. Every decision — from component structure to typography scale — served the dual purpose of communicating Clean Collective’s ethos and maintaining a high-performance, maintainable codebase.',
      'The result was a fast, modern, and data-driven brand website that clearly articulated Clean Collective’s identity while remaining adaptable for future growth. It was a project that reinforced how thoughtful front-end development and intentional design can work together to tell a brand’s story with clarity and confidence.',
    ],
    imageUrl: '/projects/cleanco/cleanco-product.webp',
    altText: 'Clean Collective product shot',
    textVariant: 'dark',
    images: [
      {
        url: '/projects/cleanco/cleanco-product-page.webp',
        altText: 'Clean Collective product page',
      },
      {
        url: '/projects/cleanco/cleanco-website-gallery.webp',
        altText: 'Clean Collective gallery view',
      },
      {
        url: '/projects/cleanco/cleanco-home.webp',
        altText: 'Clean Collective homepage',
      },
      {
        url: '/projects/cleanco/cleanco-stack.webp',
        altText: 'Stack of Clean Collective cans',
      },
    ],
  },
]
