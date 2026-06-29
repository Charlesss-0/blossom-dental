import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: 'http://blossom-dental.vercel.app/',
			lastModified: new Date(),
			changeFrequency: 'daily',
			priority: 1,
		},
	];
}
