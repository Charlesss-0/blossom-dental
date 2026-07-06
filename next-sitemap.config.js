/** @type {import('next-sitemap').IConfig} */
const config = {
	siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://blossom-dental.vercel.app',
	generateRobotsTxt: true,
	generateIndexSitemap: false,
	transform: async (config, loc) => {
		const lastmod = new Date().toISOString();

		if (loc === '/') {
			return { loc, changefreq: 'daily', priority: 1.0, lastmod };
		}

		if (loc === '/services') {
			return { loc, changefreq: 'weekly', priority: 0.9, lastmod };
		}

		if (loc.startsWith('/services')) {
			return { loc, changefreq: 'monthly', priority: 0.8, lastmod };
		}

		return { loc, changefreq: 'monthly', priority: 0.5, lastmod };
	},
};

module.exports = config;
