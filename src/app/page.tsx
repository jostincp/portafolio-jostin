import { redirect } from 'next/navigation';
import { defaultLanguage } from '@/i18n/dictionaries';

export default function RootPage() {
    redirect(`/${defaultLanguage}`);
}
