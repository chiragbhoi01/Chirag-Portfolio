import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://chiragbhoimarshal.netlify.app' 
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]
}