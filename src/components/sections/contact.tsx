'use client';

import { Clock, MapPin, Phone } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { FadeIn } from '@/components/ui/fade-in';
import Image from 'next/image';
import { WhatsAppCTA } from '../cta/whatsapp-cta';

export function Contact() {
	return (
		<section id="contact" className="py-24 bg-white">
			<div className="container px-6 mx-auto md:px-12">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
					<FadeIn>
						<span className="block mb-4 text-sm font-semibold tracking-widest text-gray-500 uppercase">
							Contáctanos
						</span>
						<h2 className="font-serif text-4xl text-gray-900">Nos encantaría saber de ti</h2>
						<p className="mt-4 mb-8 leading-relaxed text-gray-600">
							¿Tienes alguna consulta o deseas agendar una cita? Escríbenos directamente por
							WhatsApp y con gusto te atenderemos.
						</p>

						<WhatsAppCTA>
							<Button className="inline-flex items-center gap-3 h-max px-8 py-3 text-white bg-[#25D366] hover:bg-[#1ebe5c] rounded-full transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 font-medium text-lg mb-12">
								<Image src="/whatsapp.svg" width={24} height={24} alt="WhatsApp" />
								Escríbenos por WhatsApp
							</Button>
						</WhatsAppCTA>

						<div className="space-y-6 mt-4">
							<div className="flex items-start gap-4">
								<div className="shrink-0 w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
									<Phone className="w-5 h-5 text-gray-600" />
								</div>
								<div>
									<p className="font-medium text-gray-900">Teléfono / WhatsApp</p>
									<p className="text-gray-600">+505 5792 5341</p>
								</div>
							</div>

							<div className="flex items-start gap-4">
								<div className="shrink-0 w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
									<Clock className="w-5 h-5 text-gray-600" />
								</div>
								<div>
									<p className="font-medium text-gray-900">Horario de atención</p>
									<p className="text-gray-600">Lunes – Viernes: 8:30 AM – 5:30 PM</p>
									<p className="text-gray-600">Sábados: 8:00 AM – 4:00 PM</p>
								</div>
							</div>

							<div className="flex items-start gap-4">
								<div className="shrink-0 w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
									<MapPin className="w-5 h-5 text-gray-600" />
								</div>
								<div>
									<p className="font-medium text-gray-900">Ubicación</p>
									<p className="text-gray-600">Managua, Nicaragua</p>
								</div>
							</div>
						</div>
					</FadeIn>

					<FadeIn
						delay={0.2}
						className="relative h-full overflow-hidden bg-gray-100 min-h-100 rounded-2xl"
					>
						<div className="absolute inset-0 bg-gray-200">
							<iframe
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15582.0123456789!2d-86.2584755!3d12.1207218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f7155f5a049621d%3A0xe41c57f55afbf2ea!2sCl%C3%ADnica+Blossom+Dental+-+ortodoncia!5e0!3m2!1ses!2sni!4v1700000000000!5m2!1ses!2sni"
								width="100%"
								height="100%"
								style={{ border: 0 }}
								allowFullScreen
								loading="lazy"
								referrerPolicy="no-referrer-when-downgrade"
								title="Ubicación de Clínica Blossom Dental en Google Maps"
							></iframe>
						</div>
					</FadeIn>
				</div>
			</div>
		</section>
	);
}
