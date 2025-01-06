import { CarService } from '@/services/cars.service';
import type { MetadataRoute } from 'next';

async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const origin = process.env.NEXTAUTH_URL || 'https://your-default-domain.com';

  const carsResponse = await CarService.getCars().catch(() => ({ data: [] }));
  const cars = carsResponse?.data || [];

  const baseUrls: MetadataRoute.Sitemap = [
    {
      url: `${origin}`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: `${origin}/404`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'yearly',
      priority: 0.9,
    },
    {
      url: `${origin}/500`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'yearly',
      priority: 0.9,
    },
    {
      url: `${origin}/cars`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ];

  const carUrls: MetadataRoute.Sitemap = cars.map((car: { documentId: string; updatedAt?: string }) => ({
    url: `${origin}/cars/${car.documentId}`,
    lastModified: car.updatedAt ? new Date(car.updatedAt).toISOString() : new Date().toISOString(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  return [...baseUrls, ...carUrls];
}

export default sitemap;
