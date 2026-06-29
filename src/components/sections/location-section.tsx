import { FadeIn } from '@/components/ui/fade-in';

export function LocationSection() {
	return (
		<section className="py-20 bg-gray-50">
			<div className="container px-4 mx-auto">
				<FadeIn>
					<span className="block mb-4 text-sm font-semibold tracking-widest text-center text-gray-500 uppercase">
						Atención Dental en Managua
					</span>
					<h2 className="mb-6 font-serif text-4xl text-center text-gray-900 md:text-5xl">
						Atención Dental Profesional
						<br />
						<span className="italic text-gray-600">en Managua</span>
					</h2>
					<div className="max-w-5xl mx-auto space-y-4">
						<p className="text-lg leading-relaxed text-center text-gray-700 ">
							En Blossom Dental atendemos a pacientes de Managua con un enfoque claro: diagnósticos
							honestos, tratamientos responsables y atención cercana en cada consulta.
						</p>
					</div>
				</FadeIn>
			</div>
		</section>
	);
}
