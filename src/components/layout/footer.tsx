'use client';

import { Facebook, Instagram } from 'lucide-react';

import Image from 'next/image';
import Link from 'next/link';
import { WhatsAppCTA } from '@/components/cta/whatsapp-cta';

export function Footer() {
	return (
		<footer className="pt-16 pb-8 bg-gray-900 border-t border-gray-800">
			<div className="container px-6 mx-auto md:px-12">
				<div className="mb-12 grid grid-cols-1 gap-12 md:grid-cols-5">
					<div className="md:col-span-1">
						<Link
							href="/"
							className="block mb-4 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400"
						>
							<Image
								src="/logo.jpg"
								alt="Blossom Dental"
								width={120}
								height={120}
								className="object-contain w-auto h-12 border border-gray-800 rounded-full"
							/>
						</Link>
						<p className="mb-6 text-sm leading-relaxed text-gray-300">
							En Blossom Dental cuidamos tu sonrisa con profesionalismo, tecnología y un trato
							humano.
						</p>
					</div>

					<div>
						<h3 className="mb-4 font-semibold text-white">Enlaces Rápidos</h3>
						<ul className="space-y-3">
							<li>
								<Link
									href="/#about"
									className="text-sm text-gray-300 rounded-sm transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400"
								>
									Nosotros
								</Link>
							</li>
							<li>
								<Link
									href="/services"
									className="text-sm text-gray-300 rounded-sm transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400"
								>
									Servicios
								</Link>
							</li>
							<li>
								<WhatsAppCTA>
									<button className="text-sm text-left text-gray-300 rounded-sm cursor-pointer transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400">
										Agendar Cita
									</button>
								</WhatsAppCTA>
							</li>
						</ul>
					</div>

					<div>
						<h3 className="mb-4 font-semibold text-white">Contacto</h3>
						<div className="text-sm text-gray-300 space-y-4">
							<p className="leading-relaxed">
								Los Robles: de dónde fue la Vicky 2c al oeste, 1 al norte, media al este Managua,
								Nicaragua
							</p>
							<a
								href="https://wa.me/50557925341?text=Hola,%20me%20gustar%C3%ADa%20agendar%20una%20cita."
								target="_blank"
								rel="noopener noreferrer"
								className="block mt-2 text-sm text-gray-300 underline rounded-sm transition-colors hover:text-white underline-offset-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400"
							>
								Contáctanos por WhatsApp
							</a>
						</div>
					</div>

					<div>
						<h3 className="mb-4 font-semibold text-white">Horario</h3>
						<ul className="text-sm text-gray-300 space-y-3">
							<li className="flex justify-between">
								<span>Lun - Vie</span>
								<span>8:30 AM - 5:30 PM</span>
							</li>
							<li className="flex justify-between">
								<span>Sábado</span>
								<span>8:00 AM - 4:00 PM</span>
							</li>
							<li className="flex justify-between">
								<span>Domingo</span>
								<span>Cerrado</span>
							</li>
						</ul>
					</div>

					<div>
						<h3 className="mb-4 font-semibold text-white">Síguenos</h3>
						<ul className="space-y-3">
							<li>
								<Link
									href="https://www.instagram.com/blossomdental.ni/"
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center text-sm text-gray-300 rounded-sm gap-3 transition-colors hover:text-white group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400"
								>
									<div className="flex items-center justify-center w-8 h-8 bg-gray-800 rounded-full transition-colors group-hover:bg-gray-700">
										<Instagram size={16} />
									</div>
									<span className="underline underline-offset-2">Instagram</span>
								</Link>
							</li>
							<li>
								<Link
									href="https://www.facebook.com/p/Blossom-Dental-Nicaragua-100090086269090/"
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center text-sm text-gray-300 rounded-sm gap-3 transition-colors hover:text-white group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400"
								>
									<div className="flex items-center justify-center w-8 h-8 bg-gray-800 rounded-full transition-colors group-hover:bg-gray-700">
										<Facebook size={16} />
									</div>
									<span className="underline underline-offset-2">Facebook</span>
								</Link>
							</li>
						</ul>
					</div>
				</div>

				<div className="flex flex-col items-center justify-between pt-8 text-xs text-gray-300 border-t border-gray-800 gap-4 md:flex-row">
					<p>&copy; {new Date().getFullYear()} Blossom Dental. Todos los derechos reservados.</p>

					<p className="inline-flex items-center gap-2 rounded-full border border-gray-700/80 bg-white/3 px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.18em] text-gray-400">
						<a
							href="https://github.com/Charlesss-0"
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-2"
						>
							<span className="h-1.5 w-1.5 rounded-full bg-gray-500" aria-hidden="true" />
							Web services by Carlos Aragon
						</a>
					</p>
				</div>
			</div>
		</footer>
	);
}
