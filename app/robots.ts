import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const origin = process.env.NEXTAUTH_URL
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${origin}/sitemap.xml`,
  }
}
