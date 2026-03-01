'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Globe } from 'lucide-react';
import { Language, languages } from '@/i18n/dictionaries';

interface NavbarProps {
    dict: any;
    currentLang: Language;
}

export function Navbar({ dict, currentLang }: NavbarProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: dict.nav.home, href: `/${currentLang}#home` },
        { name: dict.nav.about, href: `/${currentLang}#about` },
        { name: dict.nav.skills, href: `/${currentLang}#skills` },
        { name: dict.nav.projects, href: `/${currentLang}#projects` },
        { name: dict.nav.services, href: `/${currentLang}#services` },
        { name: dict.nav.contact, href: `/${currentLang}#contact` },
    ];

    const switchLanguage = (lang: Language) => {
        // Basic segment replacement to switch language while staying on same page conceptually
        const segments = pathname.split('/');
        segments[1] = lang;
        return segments.join('/');
    };

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/90 backdrop-blur-md border-b border-white/10 shadow-lg' : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex-shrink-0 flex items-center">
                        <Link href={`/${currentLang}`} className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400">
                            Jostin
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-slate-300 hover:text-emerald-400 transition-colors text-sm font-medium relative group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-400 to-cyan-400 transition-all duration-300 group-hover:w-full"></span>
                            </Link>
                        ))}

                        {/* Language Switcher */}
                        <div className="flex items-center space-x-2 bg-slate-800/50 rounded-full p-1 border border-white/5">
                            <Globe className="w-4 h-4 text-slate-400 ml-2" />
                            {languages.map((lang) => (
                                <Link
                                    key={lang}
                                    href={switchLanguage(lang)}
                                    className={`px-3 py-1 rounded-full text-xs font-semibold uppercase transition-all ${currentLang === lang
                                            ? 'bg-emerald-500 text-white shadow-md'
                                            : 'text-slate-400 hover:text-slate-200'
                                        }`}
                                >
                                    {lang}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-slate-300 hover:text-white p-2 focus:outline-none"
                            aria-expanded={isOpen}
                            aria-label="Toggle navigation menu"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-slate-900 border-b border-white/10 shadow-xl">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}

                        <div className="flex items-center space-x-2 px-3 py-4 mt-2 border-t border-slate-800">
                            <Globe className="w-5 h-5 text-slate-400" />
                            <div className="flex space-x-2">
                                {languages.map((lang) => (
                                    <Link
                                        key={lang}
                                        href={switchLanguage(lang)}
                                        className={`px-4 py-2 rounded-md text-sm font-semibold uppercase ${currentLang === lang
                                                ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                                                : 'text-slate-400 hover:text-slate-200 bg-slate-800'
                                            }`}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {lang}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
