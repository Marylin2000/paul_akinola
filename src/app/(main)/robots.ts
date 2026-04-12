import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin-growth-systems/', '/api/'],
    },
    sitemap: 'https://paulakinola.com/sitemap.xml',
  }
}