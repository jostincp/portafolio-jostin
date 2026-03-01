export type Language = 'es' | 'en' | 'fr';

export const defaultLanguage: Language = 'es';
export const languages: Language[] = ['es', 'en', 'fr'];

export const translations = {
    es: {
        nav: {
            home: 'Inicio',
            about: 'Sobre mí',
            skills: 'Tecnologías',
            projects: 'Proyectos',
            services: 'Servicios',
            contact: 'Contacto'
        },
        hero: {
            greeting: 'Hola, soy',
            role: 'Desarrollador Full Stack & Especialista en Automatización',
            description: 'Transformo ideas complejas en soluciones digitales elegantes y eficientes. Especializado en crear aplicaciones web modernas de alto rendimiento.',
            viewProjects: 'Ver Proyectos',
            contact: 'Contactar'
        },
        about: {
            title: 'Sobre mí',
            subtitle: 'Desarrollador apasionado por la innovación y la automatización',
            description1: 'Soy un desarrollador Full Stack con más de 4 años de experiencia especializado en crear soluciones web escalables y eficientes. Mi pasión es la automatización de procesos y mejorar la experiencia del usuario. Disfruto trabajando tanto en el frontend como en el backend, creando aplicaciones completas desde la concepción hasta el despliegue.',
            stats: {
                experience: 'Años de Experiencia',
                projects: 'Proyectos Completados',
                satisfaction: 'Satisfacción del Cliente'
            }
        },
        skills: {
            title: 'Stack Técnico',
            subtitle: 'Tecnologías y herramientas que domino',
            frontend: 'Frontend',
            backend: 'Backend',
            database: 'Bases de Datos',
            devops: 'DevOps',
            automation: 'Automatización'
        },
        projects: {
            title: 'Proyectos Destacados',
            subtitle: 'Algunos de mis trabajos más recientes',
            viewProject: 'Ver Proyecto',
            fittracker: {
                title: 'FitTracker Pro - App Fitness',
                description: 'Aplicación integral para seguimiento de rutinas de ejercicio y nutrición. Incluye dashboard personalizado, gráficos de progreso y planes de entrenamiento adaptables.'
            },
            taskmanager: {
                title: 'TaskFlow - Gestión de Proyectos',
                description: 'Plataforma colaborativa para la gestión de equipos y proyectos. Cuenta con tableros Kanban interactivos, chat en tiempo real y automatización de flujos de trabajo.'
            },
            stylehub: {
                title: 'StyleHub - E-commerce',
                description: 'Tienda online con carrito funcional y gestión de productos. E-commerce completo con pasarela de pagos y panel de administración.'
            }
        },
        services: {
            title: 'Servicios',
            subtitle: 'Soluciones tecnológicas adaptadas a tus necesidades',
            development: {
                title: 'Desarrollo web a medida',
                description: 'Creación de aplicaciones web personalizadas, desde landing pages hasta sistemas empresariales complejos.'
            },
            automation: {
                title: 'Automatización de procesos',
                description: 'Optimización de flujos de trabajo mediante la integración de herramientas y desarrollo de scripts personalizados.'
            },
            migration: {
                title: 'Migración y modernización',
                description: 'Actualización de sistemas legacy a tecnologías modernas, mejorando rendimiento, seguridad y mantenibilidad.'
            }
        },
        contact: {
            title: 'Contacto',
            subtitle: '¿Tienes un proyecto en mente? ¡Hablemos!',
            ready: {
                title: '¿Listo para comenzar tu proyecto?',
                description: 'Estoy disponible para trabajos freelance y nuevas oportunidades. Envíame un mensaje y te responderé lo antes posible.'
            },
            form: {
                name: 'Tu Nombre',
                email: 'Tu Correo Electrónico',
                message: 'Tu Mensaje',
                send: 'Enviar Mensaje',
                sending: 'Enviando...'
            }
        },
        footer: {
            copyright: '© 2024 Jostin - Full Stack Developer. Todos los derechos reservados.'
        }
    },
    en: {
        nav: {
            home: 'Home',
            about: 'About',
            skills: 'Technologies',
            projects: 'Projects',
            services: 'Services',
            contact: 'Contact'
        },
        hero: {
            greeting: 'Hi, I am',
            role: 'Full Stack Developer & Automation Specialist',
            description: 'I transform complex ideas into elegant and efficient digital solutions. Specialized in creating high-performance modern web applications.',
            viewProjects: 'View Projects',
            contact: 'Contact Me'
        },
        about: {
            title: 'About Me',
            subtitle: 'Developer passionate about innovation and automation',
            description1: 'I am a Full Stack developer with more than 4 years of experience specialized in creating scalable and efficient web solutions. My passion is process automation and improving the user experience. I enjoy working on both the frontend and backend, creating entire applications from conception to deployment.',
            stats: {
                experience: 'Years of Experience',
                projects: 'Completed Projects',
                satisfaction: 'Client Satisfaction'
            }
        },
        skills: {
            title: 'Technical Stack',
            subtitle: 'Technologies and tools I master',
            frontend: 'Frontend',
            backend: 'Backend',
            database: 'Databases',
            devops: 'DevOps',
            automation: 'Automation'
        },
        projects: {
            title: 'Featured Projects',
            subtitle: 'Some of my most recent work',
            viewProject: 'View Project',
            fittracker: {
                title: 'FitTracker Pro - Fitness App',
                description: 'Comprehensive application for tracking exercise routines and nutrition. Includes personalized dashboard, progress charts, and adaptable training plans.'
            },
            taskmanager: {
                title: 'TaskFlow - Project Management',
                description: 'Collaborative platform for team and project management. Features interactive Kanban boards, real-time chat, and workflow automation.'
            },
            stylehub: {
                title: 'StyleHub - E-commerce',
                description: 'Online store with functional cart and product management. Complete e-commerce with payment gateway and admin panel.'
            }
        },
        services: {
            title: 'Services',
            subtitle: 'Technology solutions tailored to your needs',
            development: {
                title: 'Custom web development',
                description: 'Creation of tailored web applications, from landing pages to complex corporate systems.'
            },
            automation: {
                title: 'Process automation',
                description: 'Workflow optimization through tool integration and development of custom scripts.'
            },
            migration: {
                title: 'Migration and modernization',
                description: 'Updating legacy systems to modern technologies, improving performance, security, and maintainability.'
            }
        },
        contact: {
            title: 'Contact',
            subtitle: 'Have a project in mind? Let\'s talk!',
            ready: {
                title: 'Ready to start your project?',
                description: 'I am available for freelance work and new opportunities. Send me a message and I\'ll get back to you as soon as possible.'
            },
            form: {
                name: 'Your Name',
                email: 'Your Email',
                message: 'Your Message',
                send: 'Send Message',
                sending: 'Sending...'
            }
        },
        footer: {
            copyright: '© 2024 Jostin - Full Stack Developer. All rights reserved.'
        }
    },
    fr: {
        nav: {
            home: 'Accueil',
            about: 'À propos',
            skills: 'Technologies',
            projects: 'Projets',
            services: 'Services',
            contact: 'Contact'
        },
        hero: {
            greeting: 'Bonjour, je suis',
            role: 'Développeur Full Stack & Spécialiste en Automatisation',
            description: 'Je transforme des idées complexes en solutions numériques élégantes et efficaces. Spécialisé dans la création d\'applications web modernes à haute performance.',
            viewProjects: 'Voir les Projets',
            contact: 'Me Contacter'
        },
        about: {
            title: 'À propos de moi',
            subtitle: 'Développeur passionné par l\'innovation et l\'automatisation',
            description1: 'Je suis un développeur Full Stack avec plus de 4 ans d\'expérience spécialisé dans la création de solutions web évolutives et efficaces. Ma passion est l\'automatisation des processus et l\'amélioration de l\'expérience utilisateur. J\'apprécie de travailler tant sur le frontend que sur le backend, en créant des applications complètes de la conception au déploiement.',
            stats: {
                experience: 'Années d\'Expérience',
                projects: 'Projets Réalisés',
                satisfaction: 'Satisfaction Client'
            }
        },
        skills: {
            title: 'Pile Technique',
            subtitle: 'Technologies et outils que je maîtrise',
            frontend: 'Frontend',
            backend: 'Backend',
            database: 'Bases de données',
            devops: 'DevOps',
            automation: 'Automatisation'
        },
        projects: {
            title: 'Projets en vedette',
            subtitle: 'Quelques-uns de mes travaux les plus récents',
            viewProject: 'Voir le projet',
            fittracker: {
                title: 'FitTracker Pro - App Fitness',
                description: 'Application complète de suivi des routines d\'exercices et de nutrition. Comprend un tableau de bord personnalisé, des graphiques de progression et des plans d\'entraînement adaptables.'
            },
            taskmanager: {
                title: 'TaskFlow - Gestion de Projets',
                description: 'Plateforme collaborative pour la gestion d\'équipes et de projets. Comprend des tableaux Kanban interactifs, un chat en temps réel et l\'automatisation des flux de travail.'
            },
            stylehub: {
                title: 'StyleHub - E-commerce',
                description: 'Boutique en ligne avec panier fonctionnel et gestion des produits. E-commerce complet avec passerelle de paiement et panneau d\'administration.'
            }
        },
        services: {
            title: 'Services',
            subtitle: 'Des solutions technologiques adaptées à vos besoins',
            development: {
                title: 'Développement web sur mesure',
                description: 'Création d\'applications web personnalisées, des landing pages aux systèmes d\'entreprise complexes.'
            },
            automation: {
                title: 'Automatisation des processus',
                description: 'Optimisation des flux de travail par l\'intégration d\'outils et le développement de scripts personnalisés.'
            },
            migration: {
                title: 'Migration et modernisation',
                description: 'Mise à jour des systèmes existants vers des technologies modernes, améliorant les performances, la sécurité et la maintenabilité.'
            }
        },
        contact: {
            title: 'Contact',
            subtitle: 'Vous avez un projet en tête ? Parlons-en !',
            ready: {
                title: 'Prêt à démarrer votre projet ?',
                description: 'Je suis disponible pour des missions en freelance et de nouvelles opportunités. Envoyez-moi un message et je vous répondrai dans les plus brefs délais.'
            },
            form: {
                name: 'Votre Nom',
                email: 'Votre Email',
                message: 'Votre Message',
                send: 'Envoyer le Message',
                sending: 'Envoi en cours...'
            }
        },
        footer: {
            copyright: '© 2024 Jostin - Développeur Full Stack. Tous droits réservés.'
        }
    }
} as const;

export type TranslationKey = keyof typeof translations.es;

export function getDictionary(lang: Language) {
    return translations[lang] ?? translations[defaultLanguage];
}
