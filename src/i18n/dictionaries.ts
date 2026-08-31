export type Language = 'es' | 'en';

export const defaultLanguage: Language = 'es';
export const languages: Language[] = ['es', 'en'];

/** Datos de contacto y enlaces reales (no se traducen) */
export const site = {
    name: 'Jostin Castillo',
    email: 'jostincastillop@gmail.com',
    phoneDisplay: '+57 301 593 6081',
    whatsapp: 'https://wa.me/573015936081',
    linkedin: 'https://www.linkedin.com/in/jostin-castillo/',
    github: 'https://github.com/jostincp',
    encore: 'https://encorespace.app',
} as const;

/** Stack técnico: los nombres de tecnología no se traducen */
export const stackGroups = [
    {
        id: 'backend',
        items: ['Python', 'FastAPI', 'Flask', 'Node.js', 'Express', 'TypeScript', 'APIs REST', 'Webhooks'],
    },
    {
        id: 'frontend',
        items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    },
    {
        id: 'data',
        items: ['PostgreSQL', 'MySQL', 'Supabase', 'Redis', 'MongoDB', 'Firebase'],
    },
    {
        id: 'ai',
        items: ['LLMs', 'Gemini', 'DeepSeek', 'Whisper', 'n8n', 'MCP', 'OCR', 'NLP'],
    },
    {
        id: 'devops',
        items: ['Docker', 'Linux', 'Git / GitHub Actions', 'VPS Oracle Cloud', 'Nginx / Caddy', 'Postman'],
    },
] as const;

export const marqueeItems = [
    'Python', 'Next.js', 'Docker', 'PostgreSQL', 'n8n', 'TypeScript', 'Redis',
    'FastAPI', 'React', 'Supabase', 'LLMs', 'Node.js', 'WebSockets', 'Linux',
];

export const translations = {
    es: {
        nav: {
            about: 'Perfil',
            stack: 'Stack',
            work: 'Casos',
            experience: 'Experiencia',
            services: 'Servicios',
            contact: 'Contacto',
        },
        hero: {
            eyebrow: 'Ingeniero Full Stack · IA & Automatización',
            role: 'Ingeniero Full Stack',
            pitch: 'Construyo sistemas que aguantan producción: arquitecturas de microservicios, integraciones con modelos de IA y automatizaciones que le quitan trabajo manual a los equipos.',
            ctaWork: 'Ver casos',
            available: 'Disponible para proyectos',
            stats: [
                { value: '3+', label: 'Años en el sector tecnológico' },
                { value: '2', label: 'Productos propios en producción' },
                { value: '6', label: 'Microservicios operativos' },
            ],
        },
        about: {
            eyebrow: 'Perfil',
            title: 'Sobre mí',
            lead: 'Tecnólogo en sistemas y estudiante de Ingeniería de Software. Diseño soluciones backend con Python, orquesto flujos de automatización e implemento agentes y bots conversacionales con IA.',
            body: 'Hoy trabajo en Wolkvox, una plataforma de contact center, donde llevo casos de negocio críticos —PQRS, soporte, ventas y cobranzas— a IVRs y bots que resuelven en el primer contacto. En paralelo construyo mis propios productos: Encore, un SaaS para bares y restaurantes que ya corre en producción, y SmartSavings, un asistente financiero por WhatsApp. Me muevo en todo el ciclo: modelo la base de datos, escribo el backend, armo la interfaz y despliego con Docker en mi propia infraestructura.',
            factsTitle: 'En corto',
            facts: [
                { k: 'Ubicación', v: 'Bogotá, Colombia · remoto' },
                { k: 'Rol actual', v: 'Especialista en Soluciones & Automatización con IA' },
                { k: 'Formación', v: 'Ing. de Software — Politécnico Grancolombiano (en curso)' },
                { k: 'Idiomas', v: 'Español nativo · Inglés técnico' },
            ],
        },
        stack: {
            eyebrow: 'Capacidades',
            title: 'Stack técnico',
            subtitle: 'Lo que uso a diario para llevar una idea de la base de datos al servidor.',
            groups: {
                backend: 'Backend',
                frontend: 'Frontend',
                data: 'Datos',
                ai: 'IA & Automatización',
                devops: 'DevOps & Cloud',
            },
        },
        work: {
            eyebrow: 'Casos',
            title: 'Trabajo seleccionado',
            subtitle: 'Dos productos propios, en funcionamiento, con arquitectura y decisiones documentadas.',
            visit: 'Ver en vivo',
            encore: {
                tag: 'SaaS B2B · En producción',
                name: 'Encore',
                summary: 'Plataforma que convierte el celular de cada cliente en la rockola del local: piden canciones en tiempo real, exploran el menú en 3D y acumulan puntos por consumo.',
                metric: 'En producción · 6 microservicios · 2 entornos',
                bullets: [
                    'Seis microservicios en Node.js y Express —autenticación, música, cola, menú, puntos y analítica— contenedorizados con Docker sobre un VPS ARM64.',
                    'Cola musical en tiempo real con Socket.IO y caché en Redis sobre la YouTube Data API para no agotar la cuota diaria.',
                    'Frontend en Next.js 15 y React 19, con menú 3D vía Google model-viewer en lugar de Three.js para mantener el bundle liviano.',
                    'Entornos separados de producción y staging, con pipeline de CI en GitHub Actions.',
                ],
            },
            smartsavings: {
                tag: 'IA multimodal · Operativo',
                name: 'SmartSavings',
                summary: 'Un asistente financiero que registra tus gastos como se los contarías a una persona: escribiendo, mandando una nota de voz o una foto de la factura.',
                metric: 'Operativo · 3 modelos de IA · Multicanal',
                bullets: [
                    'Orquestación en n8n sobre la WhatsApp Business Cloud API, con vinculación multicanal entre Telegram y WhatsApp.',
                    'Gemini 2.5 Flash lee las facturas fotografiadas y las categoriza ítem por ítem; Whisper transcribe las notas de voz; DeepSeek clasifica la intención y extrae monto, categoría y moneda del lenguaje natural.',
                    'Persistencia en PostgreSQL sobre Supabase, con cierre diario automático y desglose por categoría.',
                    'Reintentos automáticos y aviso de error al usuario en cada nodo de IA, para que un fallo del modelo no se trague la transacción.',
                ],
            },
        },
        experience: {
            eyebrow: 'Trayectoria',
            title: 'Experiencia',
            present: 'Actualidad',
            items: [
                {
                    company: 'Wolkvox',
                    role: 'Especialista en Soluciones & Automatización con IA (Python)',
                    period: 'Feb 2025 — Actualidad',
                    bullets: [
                        'Diseño, desarrollo e implementación de IVRs y bots conversacionales con IA en Wolkvox Studio para PQRS, soporte técnico, ventas y cobranzas.',
                        'Integración de modelos de lenguaje, WhatsApp Business API y telefonía omnicanal con servicios backend y bases de datos corporativas.',
                        'Scripts y microservicios en Python para pipelines ETL y orquestación de tareas automáticas en entornos B2B.',
                        'Optimización de consultas SQL y arquitectura de integración, reduciendo tiempos operativos manuales.',
                    ],
                },
                {
                    company: 'Wolkvox',
                    role: 'Especialista de Soporte Técnico Avanzado & Integraciones (L1/L2)',
                    period: 'Jul 2022 — Ene 2025',
                    bullets: [
                        'Diagnóstico y resolución de incidencias complejas de telefonía IP y arquitectura de contact center.',
                        'Consumo de APIs REST en ambientes de producción y análisis de causa raíz en servidores Linux y bases de datos.',
                    ],
                },
            ],
            educationTitle: 'Formación',
            education: [
                { school: 'Politécnico Grancolombiano', detail: 'Ingeniería de Software — en curso' },
                { school: 'MinTIC', detail: 'Bootcamp Desarrollo Web Full Stack Avanzado — 2024' },
                { school: 'Universidad Distrital Francisco José de Caldas', detail: 'Bootcamp Full Stack intermedio — 2023' },
                { school: 'SENA', detail: 'Tecnólogo en mantenimiento de equipos de cómputo y cableado estructurado' },
            ],
        },
        services: {
            eyebrow: 'Servicios',
            title: 'Cómo puedo ayudar',
            items: [
                {
                    num: '01',
                    name: 'Desarrollo web y aplicaciones a medida',
                    description: 'Desde una landing de conversión hasta una plataforma con varios servicios, base de datos y panel de administración.',
                },
                {
                    num: '02',
                    name: 'Agentes y bots conversacionales con IA',
                    description: 'Bots de WhatsApp y Telegram con modelos de lenguaje, voz e imagen, conectados a tus sistemas y tu base de datos.',
                },
                {
                    num: '03',
                    name: 'Automatización de procesos e integraciones',
                    description: 'Flujos en n8n, APIs REST y webhooks para conectar CRM, telefonía y herramientas internas, y quitar tareas manuales del camino.',
                },
                {
                    num: '04',
                    name: 'Infraestructura y despliegue',
                    description: 'Contenedores Docker, servidores Linux en la nube, dominios, HTTPS y pipelines de CI/CD para que lo que se construye llegue a producción.',
                },
            ],
        },
        contact: {
            eyebrow: 'Contacto',
            title: 'Hablemos de tu proyecto',
            description: 'Estoy abierto a oportunidades como ingeniero full stack y a proyectos de automatización con IA. Escríbeme y respondo lo antes posible.',
            emailLabel: 'Correo',
            whatsappLabel: 'WhatsApp',
            locationLabel: 'Ubicación',
            location: 'Bogotá, Colombia · disponible en remoto',
            cta: 'Escríbeme',
            linkedinCta: 'Ver LinkedIn',
        },
        footer: {
            tagline: 'Ingeniero Full Stack · IA & Automatización',
            rights: 'Todos los derechos reservados.',
        },
    },

    en: {
        nav: {
            about: 'Profile',
            stack: 'Stack',
            work: 'Work',
            experience: 'Experience',
            services: 'Services',
            contact: 'Contact',
        },
        hero: {
            eyebrow: 'Full Stack Engineer · AI & Automation',
            role: 'Full Stack Engineer',
            pitch: 'I build systems that hold up in production: microservice architectures, AI model integrations, and automation that takes manual work off a team’s plate.',
            ctaWork: 'View work',
            available: 'Available for projects',
            stats: [
                { value: '3+', label: 'Years in tech' },
                { value: '2', label: 'Own products in production' },
                { value: '6', label: 'Microservices running' },
            ],
        },
        about: {
            eyebrow: 'Profile',
            title: 'About me',
            lead: 'Systems technologist and Software Engineering student. I design Python backends, orchestrate automation workflows, and ship AI-powered conversational agents.',
            body: 'I currently work at Wolkvox, a contact center platform, turning critical business cases — claims, support, sales and collections — into IVRs and bots that resolve on first contact. Alongside that I build my own products: Encore, a SaaS for bars and restaurants already running in production, and SmartSavings, a financial assistant on WhatsApp. I work across the whole cycle: I model the database, write the backend, build the interface, and deploy with Docker on my own infrastructure.',
            factsTitle: 'At a glance',
            facts: [
                { k: 'Location', v: 'Bogotá, Colombia · remote' },
                { k: 'Current role', v: 'AI Solutions & Automation Specialist' },
                { k: 'Education', v: 'Software Engineering — Politécnico Grancolombiano (in progress)' },
                { k: 'Languages', v: 'Native Spanish · Technical English' },
            ],
        },
        stack: {
            eyebrow: 'Capabilities',
            title: 'Technical stack',
            subtitle: 'What I use daily to take an idea from the database to the server.',
            groups: {
                backend: 'Backend',
                frontend: 'Frontend',
                data: 'Data',
                ai: 'AI & Automation',
                devops: 'DevOps & Cloud',
            },
        },
        work: {
            eyebrow: 'Case studies',
            title: 'Selected work',
            subtitle: 'Two products of my own, live, with documented architecture and decisions.',
            visit: 'View live',
            encore: {
                tag: 'B2B SaaS · In production',
                name: 'Encore',
                summary: 'A platform that turns every guest’s phone into the venue’s jukebox: they queue songs in real time, browse a 3D menu, and earn loyalty points.',
                metric: 'In production · 6 microservices · 2 environments',
                bullets: [
                    'Six Node.js and Express microservices — auth, music, queue, menu, points and analytics — containerized with Docker on an ARM64 VPS.',
                    'Real-time music queue over Socket.IO with a Redis cache in front of the YouTube Data API so the daily quota never runs dry.',
                    'Next.js 15 and React 19 frontend, with a 3D menu via Google model-viewer instead of Three.js to keep the bundle light.',
                    'Separate production and staging environments with a GitHub Actions CI pipeline.',
                ],
            },
            smartsavings: {
                tag: 'Multimodal AI · Live',
                name: 'SmartSavings',
                summary: 'A financial assistant that logs your spending the way you’d tell a person about it: by typing, sending a voice note, or snapping a photo of the receipt.',
                metric: 'Live · 3 AI models · Multichannel',
                bullets: [
                    'Orchestrated in n8n on top of the WhatsApp Business Cloud API, with multichannel linking between Telegram and WhatsApp.',
                    'Gemini 2.5 Flash reads photographed receipts and categorizes them item by item; Whisper transcribes voice notes; DeepSeek classifies intent and extracts amount, category and currency from free text.',
                    'PostgreSQL persistence on Supabase, with an automatic daily close and a per-category breakdown.',
                    'Automatic retries and user-facing error notices on every AI node, so a model failure never swallows a transaction.',
                ],
            },
        },
        experience: {
            eyebrow: 'Track record',
            title: 'Experience',
            present: 'Present',
            items: [
                {
                    company: 'Wolkvox',
                    role: 'AI Solutions & Automation Specialist (Python)',
                    period: 'Feb 2025 — Present',
                    bullets: [
                        'Design, development and rollout of AI-powered IVRs and conversational bots in Wolkvox Studio for claims, technical support, sales and collections.',
                        'Integration of language models, the WhatsApp Business API and omnichannel telephony with backend services and corporate databases.',
                        'Python scripts and microservices for ETL pipelines and automated task orchestration in B2B environments.',
                        'SQL query optimization and integration architecture, cutting manual operating time.',
                    ],
                },
                {
                    company: 'Wolkvox',
                    role: 'Advanced Technical Support & Integrations Specialist (L1/L2)',
                    period: 'Jul 2022 — Jan 2025',
                    bullets: [
                        'Diagnosis and resolution of complex IP telephony and contact center architecture incidents.',
                        'REST API consumption in production environments and root cause analysis on Linux servers and databases.',
                    ],
                },
            ],
            educationTitle: 'Education',
            education: [
                { school: 'Politécnico Grancolombiano', detail: 'Software Engineering — in progress' },
                { school: 'MinTIC', detail: 'Advanced Full Stack Web Development Bootcamp — 2024' },
                { school: 'Universidad Distrital Francisco José de Caldas', detail: 'Intermediate Full Stack Bootcamp — 2023' },
                { school: 'SENA', detail: 'Computer equipment maintenance and structured cabling technologist' },
            ],
        },
        services: {
            eyebrow: 'Services',
            title: 'How I can help',
            items: [
                {
                    num: '01',
                    name: 'Custom web and application development',
                    description: 'From a conversion landing page to a platform with multiple services, a database and an admin panel.',
                },
                {
                    num: '02',
                    name: 'AI agents and conversational bots',
                    description: 'WhatsApp and Telegram bots with language, voice and vision models, wired into your systems and your database.',
                },
                {
                    num: '03',
                    name: 'Process automation and integrations',
                    description: 'n8n workflows, REST APIs and webhooks connecting CRM, telephony and internal tools — and getting manual tasks out of the way.',
                },
                {
                    num: '04',
                    name: 'Infrastructure and deployment',
                    description: 'Docker containers, Linux cloud servers, domains, HTTPS and CI/CD pipelines so what gets built actually reaches production.',
                },
            ],
        },
        contact: {
            eyebrow: 'Contact',
            title: 'Let’s talk about your project',
            description: 'I’m open to full stack engineering roles and to AI automation projects. Drop me a line and I’ll get back to you as soon as I can.',
            emailLabel: 'Email',
            whatsappLabel: 'WhatsApp',
            locationLabel: 'Location',
            location: 'Bogotá, Colombia · available remotely',
            cta: 'Get in touch',
            linkedinCta: 'View LinkedIn',
        },
        footer: {
            tagline: 'Full Stack Engineer · AI & Automation',
            rights: 'All rights reserved.',
        },
    },
} as const;

export type Dict = (typeof translations)['es'];

export function getDictionary(lang: Language): Dict {
    return (translations[lang] ?? translations[defaultLanguage]) as Dict;
}
