import { getDictionary, Language, languages } from '@/i18n/dictionaries';
import { Navbar } from '@/components/layout/Navbar';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Skills } from '@/components/sections/Skills';
import { Projects } from '@/components/sections/Projects';
import { Services } from '@/components/sections/Services';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/layout/Footer';

export async function generateStaticParams() {
  return languages.map((lang) => ({ lang }));
}

export default async function Page(props: { params: Promise<{ lang: string }> }) {
  const params = await props.params;
  const lang = (params.lang as Language) || 'es';
  const dict = getDictionary(lang);

  return (
    <>
      <Navbar dict={dict} currentLang={lang} />

      <main className="w-full">
        <Hero dict={dict} currentLang={lang} />
        <About dict={dict} />
        <Skills dict={dict} />
        <Projects dict={dict} currentLang={lang} />
        <Services dict={dict} />
        <Contact dict={dict} />
      </main>

      <Footer dict={dict} />
    </>
  );
}
