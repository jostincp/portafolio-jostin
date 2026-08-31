'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Dict, Language, languages, site } from '@/i18n/dictionaries';

interface NavbarProps {
    dict: Dict;
    currentLang: Language;
}

export function Navbar({ dict, currentLang }: NavbarProps) {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const links = [
        { name: dict.nav.about, href: '#about' },
        { name: dict.nav.stack, href: '#stack' },
        { name: dict.nav.work, href: '#work' },
        { name: dict.nav.experience, href: '#experience' },
        { name: dict.nav.services, href: '#services' },
        { name: dict.nav.contact, href: '#contact' },
    ];

    return (
        <header
            className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
                scrolled ? 'bg-bg/80 backdrop-blur-xl border-b border-line' : 'bg-transparent'
            }`}
        >
            <nav className="max-w-7xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
                <Link
                    href={`/${currentLang}`}
                    className="font-display text-lg font-bold tracking-tight text-fg hover:text-accent transition-colors"
                >
                    JC<span className="text-accent">.</span>
                </Link>

                <div className="hidden md:flex items-center gap-7">
                    {links.map((l) => (
                        <a
                            key={l.href}
                            href={l.href}
                            className="text-[13px] font-medium text-fg-muted hover:text-fg transition-colors"
                        >
                            {l.name}
                        </a>
                    ))}
                </div>

                <div className="flex items-center gap-3">
                    <div className="hidden sm:flex items-center gap-1 rounded-full border border-line p-0.5">
                        {languages.map((l) => (
                            <Link
                                key={l}
                                href={`/${l}`}
                                className={`px-2.5 py-1 rounded-full text-[11px] font-mono uppercase tracking-wider transition-colors ${
                                    l === currentLang
                                        ? 'bg-accent text-[#0A0A0B]'
                                        : 'text-fg-dim hover:text-fg'
                                }`}
                            >
                                {l}
                            </Link>
                        ))}
                    </div>

                    <a
                        href="#contact"
                        className="hidden md:inline-flex items-center rounded-full bg-fg text-[#0A0A0B] px-4 py-2 text-[13px] font-semibold hover:bg-accent transition-colors"
                    >
                        {dict.contact.cta}
                    </a>

                    <button
                        type="button"
                        aria-label="Menú"
                        onClick={() => setOpen((v) => !v)}
                        className="md:hidden p-2 text-fg"
                    >
                        {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>
                </div>
            </nav>

            {open && (
                <div className="md:hidden border-t border-line bg-bg/95 backdrop-blur-xl">
                    <div className="px-5 py-4 flex flex-col gap-1">
                        {links.map((l) => (
                            <a
                                key={l.href}
                                href={l.href}
                                onClick={() => setOpen(false)}
                                className="py-2.5 text-sm text-fg-muted hover:text-fg transition-colors"
                            >
                                {l.name}
                            </a>
                        ))}
                        <div className="flex items-center gap-2 pt-3 mt-2 border-t border-line">
                            {languages.map((l) => (
                                <Link
                                    key={l}
                                    href={`/${l}`}
                                    className={`px-3 py-1.5 rounded-full text-[11px] font-mono uppercase tracking-wider ${
                                        l === currentLang ? 'bg-accent text-[#0A0A0B]' : 'text-fg-dim border border-line'
                                    }`}
                                >
                                    {l}
                                </Link>
                            ))}
                            <a
                                href={site.linkedin}
                                target="_blank"
                                rel="noopener"
                                className="ml-auto text-[12px] text-fg-muted underline underline-offset-4"
                            >
                                LinkedIn
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
