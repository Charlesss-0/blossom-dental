import './globals.css';

import { Dentist, WithContext } from 'schema-dts';
import { Inter, Playfair_Display } from 'next/font/google';

import { GoogleTagManager } from '@next/third-parties/google';
import type { Metadata } from 'next';
import { Toaster } from '@/components/ui/sonner';

const inter = Inter({
	variable: '--font-sans',
	subsets: ['latin'],
});

const playfair = Playfair_Display({
	variable: '--font-serif',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Clínica Dental en Managua | Blossom Dental',
	description:
		'Blossom Dental es una clínica dental en Managua especializada en atención odontológica moderna y personalizada. Agenda tu cita hoy.',
	verification: {
		google: 'zkagBrTOB5Gf1AY9cA_vWbqZt1QpClKDJ_z4eq4z7hU',
	},
	metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://locahost:3000'),
	openGraph: {
		type: 'website',
		locale: 'es_ES',
		url: '/',
		siteName: 'Blossom Dental',
		title: 'Clínica Dental en Managua | Blossom Dental',
		description:
			'Blossom Dental es una clínica dental en Managua especializada en atención odontológica moderna y personalizada. Agenda tu cita hoy.',
		images: [
			{
				url: '/dentista-explicando-radiografia-dental-a-paciente-infantil.jpg',
				width: 1200,
				height: 630,
				alt: 'Dentista explicando una radiografía dental a un paciente infantil durante una consulta en una clínica dental moderna',
			},
		],
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const jsonLd: WithContext<Dentist> = {
		'@context': 'https://schema.org',
		'@type': 'Dentist',
		'@id': 'https://blossom-dental.vercel.app/#dentist',
		name: 'Blossom Dental',
		url: 'https://blossom-dental.vercel.app/',
		logo: 'https://blossom-dental.vercel.app/logo.png',
		image:
			'https://blossom-dental.vercel.app/dentista-explicando-radiografia-dental-a-paciente-infantil.jpg',
		description:
			'Blossom Dental es una clínica dental en Managua que ofrece atención odontológica profesional, moderna y personalizada para toda la familia.',
		telephone: '+50557925341',
		priceRange: '$$',
		address: {
			'@type': 'PostalAddress',
			streetAddress:
				'Módulo 1, Los Robles, semáforos de la Vicky, 2 cuadras al Oeste, 1 cuadra al Norte',
			addressLocality: 'Managua',
			addressRegion: 'Managua',
			addressCountry: 'NI',
			postalCode: '14033',
		},
		areaServed: {
			'@type': 'AdministrativeArea',
			name: 'Managua y zonas cercanas',
		},
		openingHoursSpecification: [
			{
				'@type': 'OpeningHoursSpecification',
				dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
				opens: '08:30',
				closes: '17:30',
			},
		],
		sameAs: [
			'https://www.instagram.com/blossomdental.ni/',
			'https://www.facebook.com/p/Blossom-Dental-Nicaragua-100090086269090/',
		],
		medicalSpecialty: ['Dentistry'],
		hasOfferCatalog: {
			'@type': 'OfferCatalog',
			name: 'Servicios Odontológicos',
			itemListElement: [
				{
					'@type': 'Offer',
					itemOffered: {
						'@type': 'Service',
						name: 'Odontología General',
					},
				},
				{
					'@type': 'Offer',
					itemOffered: {
						'@type': 'Service',
						name: 'Ortodoncia',
					},
				},
				{
					'@type': 'Offer',
					itemOffered: {
						'@type': 'Service',
						name: 'Endodoncia',
					},
				},
				{
					'@type': 'Offer',
					itemOffered: {
						'@type': 'Service',
						name: 'Periodoncia',
					},
				},
				{
					'@type': 'Offer',
					itemOffered: {
						'@type': 'Service',
						name: 'Implantes Dentales',
					},
				},
			],
		},
	};

	return (
		<html lang="es">
			<GoogleTagManager gtmId="GTM-5K32ZKJR" />
			<body className={`${inter.variable} ${playfair.variable} antialiased font-sans`}>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
					}}
				/>
				{children}
				<Toaster />
			</body>
		</html>
	);
}
