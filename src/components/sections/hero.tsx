'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { WhatsAppCTA } from '@/components/cta/whatsapp-cta';
import { motion } from 'framer-motion';

export function Hero() {
	return (
		<section className="relative flex items-center justify-center min-h-dvh overflow-hidden w-full">
			<div className="absolute inset-0 z-0">
				<Image
					src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2000&auto=format&fit=crop"
					alt="Modern dental clinic background"
					fill
					className="object-cover"
					priority
					quality={90}
				/>
				<div className="absolute inset-0 bg-black/50" />
			</div>

			<div className="container relative z-10 px-6 mx-auto text-center">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, ease: 'easeOut' }}
					className="max-w-4xl mx-auto"
				>
					<h1 className="mb-6 font-serif text-4xl font-medium leading-tight text-white md:text-6xl lg:text-7xl drop-shadow-sm">
						Clínica Dental <span className="italic">en Managua</span>
					</h1>

					<h2 className="mb-8 font-serif text-xl font-light leading-relaxed text-gray-100 md:text-2xl lg:text-3xl max-w-2xl mx-auto drop-shadow-sm">
						Atención dental profesional y confiable para toda la familia
					</h2>

					<p className="mb-10 text-lg leading-relaxed text-gray-200 md:text-xl max-w-2xl mx-auto drop-shadow-sm">
						Diagnósticos claros, tecnología moderna y un trato cercano para brindar tratamientos
						pensados para cada paciente.
					</p>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
					>
						<WhatsAppCTA>
							<Button
								size="lg"
								className="h-14 px-10 text-lg font-medium text-gray-900 bg-white hover:bg-gray-100 rounded-full transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
							>
								Agendar Cita
							</Button>
						</WhatsAppCTA>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
}
