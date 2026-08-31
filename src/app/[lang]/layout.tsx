import type { Metadata } from 'next';
import '../globals.css';
import { defaultLanguage, Language, languages } from '@/i18n/dictionaries';

const SITE_URL = 'https://testjostin.pro';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Jostin Castillo — Ingeniero Full Stack | IA & Automatización',
  description:
    'Ingeniero Full Stack especializado en Python, Node.js y arquitecturas de microservicios, con foco en integración de modelos de IA y automatización de procesos B2B.',
  keywords: [
    'Full Stack Developer',
    'Python',
    'Node.js',
    'Next.js',
    'Automatización',
    'Inteligencia Artificial',
    'Microservicios',
    'Bogotá',
    'Colombia',
  ],
  authors: [{ name: 'Jostin Castillo' }],
  alternates: {
    canonical: '/es',
    languages: {
      es: '/es',
      en: '/en',
    },
  },
  openGraph: {
    type: 'website',
    siteName: 'Jostin Castillo',
    title: 'Jostin Castillo — Ingeniero Full Stack | IA & Automatización',
    description:
      'Sistemas en producción: plataformas SaaS con microservicios, agentes conversacionales con IA y automatización de procesos.',
    locale: 'es_CO',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jostin Castillo — Ingeniero Full Stack',
    description:
      'Ingeniero Full Stack: microservicios, IA aplicada y automatización de procesos.',
  },
  robots: { index: true, follow: true },
};

export async function generateStaticParams() {
  return languages.map((lang) => ({ lang }));
}

export default async function RootLayout(props: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const params = await props.params;
  const lang = (languages as string[]).includes(params?.lang)
    ? (params.lang as Language)
    : defaultLanguage;

  return (
    <html lang={lang} className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Space+Grotesk:wght@500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-bg text-fg antialiased">
        {props.children}
      </body>
    </html>
  );
}
