import type { Metadata } from 'next';
import '../globals.css';
import { defaultLanguage, Language, languages } from '@/i18n/dictionaries';

export const metadata: Metadata = {
  title: 'Jostin | Full Stack Developer & Automation Specialist',
  description: 'Portfolio of Jostin, a Full Stack Developer specialized in web applications and process automation.',
};

export async function generateStaticParams() {
  return languages.map((lang) => ({ lang }));
}

export default async function RootLayout(
  props: {
    children: React.ReactNode;
    params: Promise<{ lang: string }>;
  }
) {
  const params = await props.params;
  const lang = (params?.lang as Language) || defaultLanguage;

  return (
    <html lang={lang} className="dark">
      <body className="antialiased font-sans text-slate-50 bg-slate-900 selection:bg-emerald-500/30">
        <main className="min-h-screen flex flex-col pt-16">
          {props.children}
        </main>
      </body>
    </html>
  );
}
