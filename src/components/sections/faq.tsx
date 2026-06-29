import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';

import { FadeIn } from '@/components/ui/fade-in';

const defaultFaqs = [
	{
		question: '¿Cuánto cuesta una consulta dental en Managua?',
		answer:
			'El costo de la consulta puede variar según la evaluación inicial y el tratamiento necesario. En Blossom Dental realizamos valoraciones claras y transparentes antes de iniciar cualquier procedimiento.',
	},
	{
		question: '¿Ofrecen planes de pago?',
		answer:
			'Sí, contamos con opciones de pago flexibles para tratamientos que lo requieran. Nuestro equipo administrativo puede ayudarte a encontrar una alternativa que se ajuste a tu presupuesto.',
	},
	{
		question: '¿Qué debo hacer en caso de una emergencia dental?',
		answer:
			'Si presentas una emergencia dental, contáctanos lo antes posible por teléfono o WhatsApp. Hacemos nuestro mayor esfuerzo por atender emergencias el mismo día y brindarte orientación inmediata.',
	},
	{
		question: '¿Cuánto tiempo dura una cita típica?',
		answer:
			'La duración de la cita depende del tipo de atención. Una consulta inicial suele durar entre 30 y 60 minutos, mientras que otros procedimientos pueden requerir más tiempo o varias visitas.',
	},
	{
		question: '¿Atienden a niños?',
		answer:
			'Sí, atendemos a niños y ofrecemos un ambiente tranquilo y amigable para que su experiencia dental sea cómoda y positiva desde la primera visita.',
	},
	{
		question: '¿Realizan tratamientos de ortodoncia?',
		answer:
			'Sí, ofrecemos tratamientos de ortodoncia para niños, adolescentes y adultos. Durante la evaluación inicial analizamos tu caso y te explicamos las opciones disponibles.',
	},
];

interface FAQProps {
	items?: { question: string; answer: string }[];
	title?: React.ReactNode;
	subtitle?: React.ReactNode;
	description?: string;
	className?: string;
}

export function FAQ({ items = defaultFaqs, title, subtitle, description, className }: FAQProps) {
	return (
		<section id="faq" className={`py-24 bg-gray-100 ${className}`}>
			<div className="container px-6 mx-auto md:px-12">
				<FadeIn className="max-w-2xl mx-auto mb-16 text-center">
					<span className="block mb-4 text-sm font-semibold tracking-widest text-gray-400 uppercase">
						{subtitle || '¿Tienes Preguntas?'}
					</span>
					<h2 className="mb-6 font-serif text-4xl text-gray-900">
						{title || (
							<>
								Preguntas Frecuentes Sobre Nuestra <br />
								<span className="italic text-gray-600">Clínica Dental</span>
							</>
						)}
					</h2>
					<p className="text-lg text-gray-600">
						{description ||
							'Aquí encontrarás respuestas a las preguntas más comunes sobre nuestros servicios, tratamientos y atención al paciente.'}
					</p>
				</FadeIn>

				<FadeIn delay={0.2} className="max-w-3xl mx-auto">
					<Accordion type="single" collapsible className="w-full">
						{items.map((faq, index) => (
							<AccordionItem key={index} value={`item-${index}`}>
								<AccordionTrigger className="text-left cursor-pointer">
									{faq.question}
								</AccordionTrigger>
								<AccordionContent className="text-gray-600">{faq.answer}</AccordionContent>
							</AccordionItem>
						))}
					</Accordion>
				</FadeIn>
			</div>
		</section>
	);
}
