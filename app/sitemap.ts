import type { MetadataRoute } from 'next'

function sitemap(): MetadataRoute.Sitemap {
  const origin = process.env.NEXTAUTH_URL
  return [
    {
      url: `${origin}`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: `${origin}/404`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.9,
    },
    {
      url: `${origin}/500`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.9,
    },
    {
      url: `${origin}/cars`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ]
}
export default sitemap
