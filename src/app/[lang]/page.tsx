import { getDictionary, Language, languages, marqueeItems } from '@/i18n/dictionaries';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Marquee } from '@/components/ui/Marquee';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Stack } from '@/components/sections/Stack';
import { Work } from '@/components/sections/Work';
import { Experience } from '@/components/sections/Experience';
import { Services } from '@/components/sections/Services';
import { Contact } from '@/components/sections/Contact';

export async function generateStaticParams() {
  return languages.map((lang) => ({ lang }));
}

export default async function Page(props: { params: Promise<{ lang: string }> }) {
  const params = await props.params;
  const lang = (languages as string[]).includes(params.lang)
    ? (params.lang as Language)
    : 'es';
  const dict = getDictionary(lang);

  return (
    <>
      <Navbar dict={dict} currentLang={lang} />
      <main className="w-full overflow-x-clip">
        <Hero dict={dict} />
        <Marquee items={marqueeItems} />
        <About dict={dict} />
        <Stack dict={dict} />
        <Work dict={dict} />
        <Experience dict={dict} />
        <Services dict={dict} />
        <Contact dict={dict} />
      </main>
      <Footer dict={dict} />
    </>
  );
}
