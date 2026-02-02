export interface ServiceData {
  id: string;
  slug: string;
  title: string;
  description: string;
  image: string;
  fullTitle: string;
  introduction: string[];
  whoIsItFor: string;
  whenToRecommend: string[];
  ourApproach: string;
  faqs: { question: string; answer: string }[];
}

export const services: ServiceData[] = [
  {
    id: "odontologia-general",
    slug: "odontologia-general",
    title: "Odontología General",
    description:
      "Atención dental preventiva y restauradora para mantener dientes y encías saludables en todas las etapas de la vida.",
    image:
      "https://images.unsplash.com/photo-1644353740797-b85ffb378b3a?q=80&w=800&auto=format&fit=crop",
    fullTitle: "Odontología General en Managua | Blossom Dental",
    introduction: [
      "La odontología general es la base fundamental de una sonrisa saludable y duradera. En Blossom Dental, entendemos que la prevención es la clave para evitar tratamientos costosos y complejos en el futuro. Nuestro servicio de odontología general en Managua está diseñado para atender las necesidades primarias de salud bucal de toda la familia, desde revisiones rutinarias hasta restauraciones esenciales.",
      "Nuestro objetivo es crear un ambiente donde te sientas cómodo y seguro, sabiendo que tu salud dental está en manos de profesionales comprometidos. Nos enfocamos en la detección temprana de problemas como caries, enfermedades de las encías y otras afecciones orales que, si se tratan a tiempo, pueden resolverse de manera sencilla y efectiva.",
      "Ya sea que necesites una limpieza dental profunda, una obturación (calza) o simplemente un chequeo general para asegurarte de que todo está en orden, nuestro equipo está listo para recibirte con la calidez y profesionalismo que nos caracteriza en Managua.",
    ],
    whoIsItFor:
      "Este servicio es ideal para personas de todas las edades que buscan mantener su salud oral en óptimas condiciones. Es el punto de partida para cualquier paciente, asegurando que la boca esté libre de infecciones y problemas funcionales antes de proceder con tratamientos estéticos o más complejos.",
    whenToRecommend: [
      "Si han pasado más de 6 meses desde tu última limpieza dental o revisión.",
      "Si experimentas sensibilidad dental leve al comer alimentos fríos o calientes.",
      "Cuando notas sangrado en las encías al cepillarte o usar hilo dental.",
      "Si tienes mal aliento persistente o sabor desagradable en la boca.",
      "Para la reparación de dientes con caries mediante obturaciones (calzas).",
      "Como paso previo indispensable antes de iniciar tratamientos de ortodoncia o estética.",
    ],
    ourApproach:
      "En Blossom Dental, nuestro enfoque hacia la odontología general se centra en la educación y la prevención. No solo tratamos el problema presente, sino que utilizamos tecnología de diagnóstico digital para mostrarte el estado real de tu boca y explicarte cómo mejorar tus hábitos de higiene en casa. Creemos en una odontología mínimamente invasiva, preservando la mayor cantidad de estructura dental natural posible. Cada cita se realiza con tiempo suficiente para escuchar tus inquietudes y garantizar que entiendas cada paso de tu tratamiento.",
    faqs: [
      {
        question:
          "¿Cada cuánto debo visitar al dentista para una revisión general?",
        answer:
          "Lo recomendado por estándares internacionales y nuestra práctica en Blossom Dental es realizar una visita cada 6 meses. Esto nos permite detectar problemas incipientes y realizar limpiezas profesionales que eliminan el sarro que el cepillado diario no puede remover.",
      },
      {
        question: "¿Duelen las limpiezas dentales?",
        answer:
          "Generalmente, una limpieza dental no debería ser dolorosa. Sin embargo, si tienes encías inflamadas o sensibilidad, podrías sentir una leve molestia. Utilizamos técnicas suaves y, si es necesario, anestesia tópica para asegurar tu comodidad durante todo el proceso.",
      },
      {
        question:
          "¿Qué diferencia hay entre una limpieza simple y una profunda?",
        answer:
          "Una limpieza simple o profilaxis se enfoca en la parte visible de los dientes (sobre la encía). Una limpieza profunda (raspado y alisado radicular) es necesaria cuando hay enfermedad de las encías y sarro acumulado debajo de la línea de la encía, requiriendo un procedimiento más detallado.",
      },
      {
        question: "¿La odontología general incluye radiografías?",
        answer:
          "Sí, las radiografías son una herramienta diagnóstica esencial. Nos permiten ver lo que sucede entre los dientes y debajo de las encías y hueso, áreas que no son visibles a simple vista, ayudándonos a diagnosticar con precisión.",
      },
    ],
  },
  {
    id: "ortodoncia",
    slug: "ortodoncia",
    title: "Ortodoncia",
    description:
      "Tratamientos de ortodoncia para corregir la alineación dental y mejorar la mordida, adaptados a niños, adolescentes y adultos.",
    image:
      "https://images.unsplash.com/photo-1598531228433-d9f0cb960816?q=80&w=800&auto=format&fit=crop",
    fullTitle: "Ortodoncia en Managua | Blossom Dental",
    introduction: [
      "La ortodoncia es mucho más que estética; es salud, función y confianza. En Blossom Dental, ofrecemos tratamientos de ortodoncia en Managua diseñados para corregir la mala posición de los dientes y los huesos, logrando una mordida armónica y una sonrisa que te encantará mostrar. Una mordida correctamente alineada facilita la higiene, reduce el desgaste dental y mejora la masticación.",
      "Nos especializamos en diagnosticar y tratar irregularidades dentofaciales en pacientes de todas las edades. Sabemos que cada sonrisa es única, por lo que planificamos cada movimiento dental con precisión, utilizando las técnicas más actuales para optimizar el tiempo de tratamiento y mejorar el confort del paciente.",
      "Ya sea que busques ortodoncia convencional con brackets metálicos o opciones más estéticas como brackets de zafiro o alineadores, en nuestra clínica en Managua encontrarás la solución perfecta adaptada a tu estilo de vida y necesidades clínicas.",
    ],
    whoIsItFor:
      "La ortodoncia es para cualquier persona que desee mejorar la alineación de sus dientes, independientemente de la edad. Es ideal para niños en crecimiento para guiar el desarrollo maxilar, adolescentes que buscan corregir su sonrisa definitiva, y adultos que desean resolver problemas de apiñamiento o espacios que no pudieron tratar anteriormente.",
    whenToRecommend: [
      "Dientes apiñados o 'chuecos' que dificultan la higiene dental.",
      "Espacios excesivos entre los dientes (diastemas).",
      "Mordida abierta (los dientes anteriores no contactan al cerrar la boca).",
      "Mordida profunda (los dientes superiores cubren demasiado a los inferiores).",
      "Mandíbula que suena, se traba o causa dolor (problemas de ATM relacionados con la mordida).",
      "Dientes que sobresalen (protrusión) y están expuestos a fracturas.",
    ],
    ourApproach:
      "Nuestro enfoque en ortodoncia combina la biomecánica avanzada con la estética facial. No solo movemos dientes; analizamos tu perfil, tus labios y tu estructura ósea para asegurar que el resultado final armonice con tu rostro. En Blossom Dental, utilizamos diagnósticos digitales completos (fotografías, radiografías y escaneos) para trazar un plan de tratamiento claro. Nos caracterizamos por la transparencia: sabrás la duración estimada y los objetivos desde la primera cita.",
    faqs: [
      {
        question:
          "¿A qué edad se debe llevar a un niño al ortodoncista por primera vez?",
        answer:
          "La Asociación Americana de Ortodoncia recomienda la primera evaluación a los 7 años. A esta edad, los dientes permanentes han comenzado a salir y es posible detectar problemas de crecimiento óseo que son más fáciles de corregir temprano.",
      },
      {
        question: "¿Cuánto tiempo dura un tratamiento de ortodoncia?",
        answer:
          "El tiempo varía según la complejidad del caso, pero generalmente oscila entre 18 y 24 meses. Casos leves pueden resolverse en menos tiempo, mientras que correcciones complejas de mordida pueden requerir más.",
      },
      {
        question: "¿Es doloroso usar brackets?",
        answer:
          "La colocación no duele. Sin embargo, es normal sentir presión o sensibilidad leve durante los primeros días después de los ajustes mensuales. Esto es señal de que los dientes se están moviendo y se alivia con analgésicos suaves y dieta blanda.",
      },
      {
        question: "¿Ofrecen ortodoncia invisible o estética?",
        answer:
          "Sí, contamos con opciones de ortodoncia estética como brackets de cerámica/zafiro que se mimetizan con el color del diente, ofreciendo una alternativa más discreta a los brackets metálicos tradicionales.",
      },
    ],
  },
  {
    id: "endodoncia",
    slug: "endodoncia",
    title: "Endodoncia",
    description:
      "Tratamientos de conducto enfocados en aliviar el dolor, eliminar infecciones y conservar tus dientes naturales siempre que sea posible.",
    image:
      "https://images.unsplash.com/photo-1626736985932-c0df2ae07a2e?q=80&w=800&auto=format&fit=crop",
    fullTitle: "Endodoncia en Managua | Blossom Dental",
    introduction: [
      "Cuando un diente está severamente dañado por caries profunda o traumatismo, la endodoncia (o tratamiento de conducto) es a menudo la única manera de salvarlo. En Blossom Dental, somos expertos en realizar endodoncias en Managua con un enfoque prioritario en eliminar el dolor y la infección de manera rápida y eficiente.",
      "Contrario a la creencia popular, la endodoncia moderna no es un proceso doloroso; es la solución al dolor. Nuestro objetivo es limpiar y desinfectar los conductos internos del diente para detener la infección bacteriana, permitiéndote conservar tu pieza dental natural, lo cual es siempre superior a cualquier reemplazo artificial en términos de funcionalidad y estética.",
      "Utilizamos tecnología rotatoria avanzada y localizadores de ápice que hacen que el procedimiento sea más preciso, rápido y cómodo para el paciente. Si tienes un dolor de muelas intenso, no esperes; nuestro equipo está preparado para brindarte el alivio que necesitas.",
    ],
    whoIsItFor:
      "Este tratamiento es para pacientes que presentan una infección o inflamación irreversible en la pulpa (nervio) del diente. Es la alternativa ideal a la extracción, permitiendo mantener la estructura dental y la capacidad masticatoria natural.",
    whenToRecommend: [
      "Dolor dental espontáneo, intenso y pulsátil.",
      "Sensibilidad prolongada al frío o al calor que persiste después de retirar el estímulo.",
      "Dolor al masticar o al tocar el diente.",
      "Hinchazón o sensibilidad en las encías cercanas al diente afectado.",
      "Oscurecimiento o cambio de color de un diente individual.",
      "Presencia de una 'fístula' o granito en la encía que drena pus.",
    ],
    ourApproach:
      "En Blossom Dental, abordamos la endodoncia con precisión microscópica. Entendemos la ansiedad que puede generar este tratamiento, por lo que nos esforzamos en explicar cada paso y garantizar una anestesia profunda para una experiencia libre de dolor. Utilizamos aislamiento absoluto para garantizar la asepsia y el éxito a largo plazo del tratamiento. Nuestro compromiso es salvar tu diente siempre que sea viable, devolviéndole su salud y función.",
    faqs: [
      {
        question: "¿Es dolorosa la endodoncia?",
        answer:
          "No debería serlo. Con las técnicas modernas de anestesia, el procedimiento es muy similar a recibir un empaste regular. El dolor que se asocia a la endodoncia generalmente es causado por la infección previa, no por el tratamiento en sí.",
      },
      {
        question: "¿Cuántas citas se necesitan?",
        answer:
          "La mayoría de las endodoncias se pueden completar en una o dos sesiones, dependiendo de la complejidad de la infección y la anatomía del diente. Nos aseguramos de que la infección esté controlada antes de sellar el diente definitivamente.",
      },
      {
        question: "¿El diente queda frágil después del tratamiento?",
        answer:
          "Un diente tratado endodónticamente puede volverse más frágil porque ya no tiene aporte sanguíneo vital. Por eso, casi siempre recomendamos restaurarlo con una corona o incrustación posterior para protegerlo de fracturas.",
      },
      {
        question: "¿Qué pasa si no me realizo la endodoncia?",
        answer:
          "Si la infección no se trata, puede extenderse al hueso circundante, causar un absceso severo e incluso poner en riesgo la salud sistémica. Finalmente, el dolor se volverá insoportable y la única opción restante será la extracción del diente.",
      },
    ],
  },
  {
    id: "periodoncia",
    slug: "periodoncia",
    title: "Periodoncia",
    description:
      "Diagnóstico y tratamiento de enfermedades de las encías para preservar la salud y el soporte de tus dientes a largo plazo.",
    image:
      "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=800&auto=format&fit=crop",
    fullTitle: "Periodoncia en Managua | Blossom Dental",
    introduction: [
      "La salud de tus dientes depende directamente de la salud de tus encías y el hueso que los soporta. La periodoncia es la especialidad dedicada a prevenir, diagnosticar y tratar las enfermedades periodontales (de las encías). En Blossom Dental, ofrecemos tratamientos especializados de periodoncia en Managua para combatir la gingivitis y la periodontitis, condiciones que son la causa principal de pérdida dental en adultos.",
      "Muchas veces, las enfermedades de las encías son silenciosas y no causan dolor hasta etapas avanzadas. Por eso, nuestro equipo realiza evaluaciones periodontales detalladas para detectar bolsas periodontales, sangrado o pérdida ósea incipiente. Nuestro objetivo es detener la progresión de la enfermedad y crear un ambiente oral saludable que permita conservar tus dientes toda la vida.",
      "Desde limpiezas profundas hasta cirugías regenerativas, contamos con las herramientas y el conocimiento para restaurar la salud de tus tejidos de soporte y mejorar la estética de tu sonrisa, como en casos de 'sonrisa gingival' o recesión de encías.",
    ],
    whoIsItFor:
      "Pacientes que han notado cambios en sus encías, como sangrado constante, o aquellos con antecedentes familiares de enfermedad periodontal. También es crucial para pacientes diabéticos o fumadores, quienes tienen mayor riesgo de desarrollar problemas severos en las encías.",
    whenToRecommend: [
      "Sangrado de las encías al cepillarse o espontáneamente (gingivitis).",
      "Encías rojas, inflamadas o sensibles.",
      "Encías que se retraen, haciendo que los dientes se vean más largos.",
      "Movilidad dental o dientes que se sienten flojos.",
      "Mal aliento persistente (halitosis) que no mejora con el cepillado.",
      "Formación de espacios nuevos entre los dientes.",
    ],
    ourApproach:
      "Nuestra filosofía periodontal en Blossom Dental es conservadora y regenerativa. Comenzamos con terapias básicas como el raspado y alisado radicular para eliminar las bacterias profundas. Si la enfermedad está avanzada, utilizamos técnicas quirúrgicas para acceder a las áreas difíciles y, cuando es posible, regenerar el hueso perdido. Educamos intensivamente a nuestros pacientes sobre técnicas de higiene, ya que el éxito del tratamiento periodontal depende en gran medida del cuidado diario en casa.",
    faqs: [
      {
        question: "¿La enfermedad de las encías se cura?",
        answer:
          "La gingivitis (etapa inicial) es reversible y se cura. La periodontitis (etapa avanzada con pérdida de hueso) no se cura, pero se controla. Con tratamiento y mantenimiento regular, podemos detener su avance y mantener tus dientes estables.",
      },
      {
        question: "¿Por qué me sangran las encías?",
        answer:
          "El sangrado es el primer signo de inflamación e infección bacteriana. No es normal que las encías sangren. Si ocurre, es señal de que necesitas una evaluación profesional y mejorar tu técnica de higiene.",
      },
      {
        question: "¿Qué es el raspado y alisado radicular?",
        answer:
          "Es una limpieza profunda realizada bajo anestesia local. Se limpian las raíces de los dientes debajo de la encía para eliminar sarro y bacterias, y se alisa la superficie para que la encía pueda volver a adherirse saludablemente.",
      },
      {
        question: "¿El tratamiento periodontal es costoso?",
        answer:
          "Invertir en periodoncia es invertir en salvar tus dientes. Es mucho menos costoso tratar la enfermedad de las encías a tiempo que reemplazar dientes perdidos con implantes o puentes en el futuro.",
      },
    ],
  },
  {
    id: "cirugia",
    slug: "cirugia-oral",
    title: "Cirugía",
    description:
      "Procedimientos quirúrgicos dentales realizados con planificación cuidadosa, priorizando la seguridad, el confort y una recuperación adecuada.",
    image:
      "https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=800&auto=format&fit=crop",
    fullTitle: "Cirugía Oral en Managua | Blossom Dental",
    introduction: [
      "La cirugía oral abarca una variedad de procedimientos necesarios para resolver problemas anatómicos, infecciosos o funcionales de la boca. En Blossom Dental, realizamos cirugía oral en Managua con los más altos estándares de esterilización y seguridad. Sabemos que la palabra 'cirugía' puede causar temor, por lo que nos enfocamos en hacer que tu experiencia sea lo más tranquila y atraumática posible.",
      "Nuestros procedimientos más comunes incluyen la extracción de cordales, extracciones de dientes complejos y cirugías pre-protésicas. Utilizamos técnicas mínimamente invasivas que favorecen una cicatrización más rápida y reducen el dolor postoperatorio. Cada caso se planifica minuciosamente, a menudo con ayuda de imágenes 3D, para evitar riesgos y asegurar resultados predecibles.",
      "Tu bienestar es nuestra prioridad. Desde el momento en que entras a la consulta hasta tu recuperación en casa, nuestro equipo te acompaña, brindándote instrucciones claras y seguimiento cercano para asegurar que todo marche perfectamente.",
    ],
    whoIsItFor:
      "Pacientes que requieren la extracción de dientes dañados sin posibilidad de restauración, personas con cordales impactadas que causan dolor o apiñamiento, o aquellos que necesitan preparaciones óseas antes de recibir prótesis o implantes.",
    whenToRecommend: [
      "Dolor o infección recurrente en las muelas cordales.",
      "Dientes fracturados por debajo de la línea de la encía.",
      "Dientes con infecciones extensas que no pueden salvarse con endodoncia.",
      "Necesidad de extraer dientes por indicaciones de ortodoncia (falta de espacio).",
      "Quistes o lesiones en los maxilares que requieren biopsia o remoción.",
    ],
    ourApproach:
      "En Blossom Dental, la cirugía es sinónimo de cuidado. Priorizamos la preservación de tejido: al extraer un diente, pensamos en el hueso que queda, utilizando técnicas que minimizan el trauma. Ofrecemos un protocolo farmacológico pre y postoperatorio completo para manejar el dolor y la inflamación eficazmente. Nuestro entorno estéril y controlado garantiza tu seguridad en todo momento.",
    faqs: [
      {
        question: "¿Es necesario sacarse las muelas cordales siempre?",
        answer:
          "No siempre. Si tienen espacio, salen rectas y puedes higienizarlas bien, pueden quedarse. Se recomienda extraerlas si están impactadas, causan dolor, infección, daños a los dientes vecinos o si no tienen espacio para erupcionar correctamente.",
      },
      {
        question: "¿Cuánto tiempo tarda la recuperación de una extracción?",
        answer:
          "La recuperación inicial de los tejidos blandos toma de 7 a 10 días. Sin embargo, podrás retomar tus actividades normales (sin esfuerzo físico intenso) generalmente 2 o 3 días después del procedimiento, dependiendo de la complejidad.",
      },
      {
        question: "¿Qué puedo comer después de una cirugía oral?",
        answer:
          "Recomendamos una dieta blanda y fría durante las primeras 24 horas (helado, yogur, gelatinas). Evita alimentos calientes, granos pequeños, pajillas (popotes) y fumar, ya que pueden afectar la cicatrización.",
      },
      {
        question: "¿Sentiré dolor durante la cirugía?",
        answer:
          "No. Utilizamos anestésicos locales potentes para asegurar que la zona esté completamente dormida. Sentirás presión y movimiento, pero no dolor agudo. Si tienes mucha ansiedad, podemos discutir opciones de sedación.",
      },
    ],
  },
  {
    id: "implantes",
    slug: "implantes-dentales",
    title: "Implantes",
    description:
      "Implantes dentales para reemplazar dientes perdidos y recuperar la función masticatoria y la estética de forma segura y duradera.",
    image:
      "https://images.unsplash.com/photo-1606811842243-af7e16970c1f?q=80&w=800&auto=format&fit=crop",
    fullTitle: "Implantes Dentales en Managua | Blossom Dental",
    introduction: [
      "Los implantes dentales son el estándar de oro actual para reemplazar dientes perdidos. Funcionan como raíces artificiales de titanio que se integran con tu hueso, proporcionando una base sólida para coronas o prótesis fijas. En Blossom Dental, somos especialistas en rehabilitación oral mediante implantes dentales en Managua, devolviéndote la capacidad de comer, hablar y sonreír con total confianza.",
      "A diferencia de los puentes tradicionales o las dentaduras removibles, los implantes no requieren desgastar dientes vecinos sanos y estimulan el hueso mandibular, evitando la pérdida ósea que ocurre naturalmente tras perder un diente. El resultado es una sensación y apariencia casi idéntica a tus dientes naturales.",
      "Trabajamos con marcas de implantes reconocidas mundialmente y utilizamos planificación digital para una colocación precisa. Ya sea que te falte un solo diente o necesites una rehabilitación completa, diseñamos una solución personalizada que transforma tu calidad de vida.",
    ],
    whoIsItFor:
      "Personas que han perdido uno o más dientes debido a caries, enfermedad periodontal o traumatismos y desean una solución fija y permanente. Es necesario tener una salud general adecuada y suficiente hueso disponible (o ser candidato para injertos óseos).",
    whenToRecommend: [
      "Ausencia de uno o varios dientes.",
      "Dificultad para masticar o hablar debido a la falta de piezas dentales.",
      "Incomodidad o inseguridad con prótesis removibles (placas) que se mueven.",
      "Deseo de no tallar dientes sanos para colocar un puente fijo.",
      "Necesidad de estabilizar una dentadura completa que se afloja.",
    ],
    ourApproach:
      "Nuestro enfoque en implantología es integral y planificado. Antes de cualquier procedimiento, realizamos un estudio tomográfico (CBCT) para evaluar la calidad y cantidad de tu hueso. Si es necesario, realizamos procedimientos de regeneración ósea. La colocación del implante es un procedimiento ambulatorio que realizamos con sumo cuidado en Blossom Dental. Nos aseguramos de que la rehabilitación final (la corona) sea estética y funcionalmente perfecta.",
    faqs: [
      {
        question: "¿Cuánto duran los implantes dentales?",
        answer:
          "Con una buena higiene y las visitas regulares de mantenimiento, los implantes dentales están diseñados para durar toda la vida. La tasa de éxito es superior al 95%.",
      },
      {
        question: "¿Es doloroso ponerse un implante?",
        answer:
          "Sorprendentemente, la mayoría de los pacientes reportan menos molestias que con una extracción dental. Se realiza bajo anestesia local y el postoperatorio suele ser muy llevadero con analgésicos comunes.",
      },
      {
        question: "¿Cuánto tiempo toma el proceso completo?",
        answer:
          "El proceso suele tomar de 3 a 6 meses. Primero se coloca el implante y se espera a que se 'os,teointegre' (se una al hueso). Luego de ese periodo de cicatrización, se coloca la corona definitiva. En algunos casos seleccionados, se puede colocar una carga inmediata (diente provisional el mismo día).",
      },
      {
        question: "¿Soy candidato para implantes si tengo poco hueso?",
        answer:
          "Posiblemente sí. Hoy en día contamos con técnicas de injerto óseo y elevación de seno maxilar que nos permiten crear el hueso necesario para colocar implantes incluso en casos complejos.",
      },
    ],
  },
];
