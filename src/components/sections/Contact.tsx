'use client';

import { Mail, MapPin, MessageCircle, Download, ArrowUpRight } from 'lucide-react';
import { Dict, site } from '@/i18n/dictionaries';
import { FadeIn } from '@/components/ui/FadeIn';
import { Magnet } from '@/components/ui/Magnet';

export function Contact({ dict }: { dict: Dict }) {
    return (
        <section
            id="contact"
            className="relative z-10 -mt-10 sm:-mt-14 bg-bg rounded-t-[40px] sm:rounded-t-[60px] px-5 sm:px-8 pt-24 sm:pt-32 pb-16 grain"
        >
            <div className="max-w-7xl mx-auto relative">
                <FadeIn className="mb-14 max-w-3xl">
                    <span className="eyebrow text-accent">{dict.contact.eyebrow}</span>
                    <h2 className="display-heading text-5xl sm:text-7xl md:text-[6.5rem] mt-4 mb-6">
                        {dict.contact.title}
                    </h2>
                    <p className="text-[15px] sm:text-base text-fg-muted leading-relaxed max-w-xl">
                        {dict.contact.description}
                    </p>
                </FadeIn>

                <FadeIn delay={0.08} className="mb-16">
                    <a
                        href={`mailto:${site.email}?subject=${encodeURIComponent('Proyecto / oportunidad')}`}
                        className="group inline-flex items-center gap-3 font-display text-2xl sm:text-4xl md:text-5xl text-fg hover:text-accent transition-colors break-all"
                    >
                        {site.email}
                        <ArrowUpRight className="w-6 h-6 sm:w-9 sm:h-9 shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </a>
                </FadeIn>

                <div className="grid sm:grid-cols-3 gap-4 mb-14">
                    {[
                        {
                            icon: <MessageCircle className="w-5 h-5" />,
                            label: dict.contact.whatsappLabel,
                            value: site.phoneDisplay,
                            href: site.whatsapp,
                        },
                        {
                            icon: <Mail className="w-5 h-5" />,
                            label: dict.contact.emailLabel,
                            value: site.email,
                            href: `mailto:${site.email}`,
                        },
                        {
                            icon: <MapPin className="w-5 h-5" />,
                            label: dict.contact.locationLabel,
                            value: dict.contact.location,
                        },
                    ].map((c, i) => {
                        const inner = (
                            <div className="h-full rounded-2xl border border-line bg-bg-elev p-6 hover:border-line-strong transition-colors">
                                <div className="text-accent mb-4">{c.icon}</div>
                                <div className="font-mono text-[10px] uppercase tracking-widest text-fg-dim mb-1.5">
                                    {c.label}
                                </div>
                                <div className="text-sm text-fg leading-relaxed break-words">{c.value}</div>
                            </div>
                        );
                        return (
                            <FadeIn key={c.label} delay={i * 0.06}>
                                {c.href ? (
                                    <a href={c.href} target="_blank" rel="noopener" className="block h-full">
                                        {inner}
                                    </a>
                                ) : (
                                    inner
                                )}
                            </FadeIn>
                        );
                    })}
                </div>

                <FadeIn delay={0.1} className="flex flex-wrap gap-3">
                    <Magnet padding={60} strength={8}>
                        <a
                            href={site.whatsapp}
                            target="_blank"
                            rel="noopener"
                            className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-[#0A0A0B] hover:bg-fg transition-colors"
                        >
                            {dict.contact.cta}
                            <ArrowUpRight className="w-4 h-4" />
                        </a>
                    </Magnet>
                    <a
                        href={site.cv}
                        target="_blank"
                        rel="noopener"
                        className="inline-flex items-center gap-2 rounded-full border border-line-strong px-7 py-3.5 text-sm font-medium text-fg hover:border-accent hover:text-accent transition-colors"
                    >
                        <Download className="w-4 h-4" />
                        {dict.contact.cvCta}
                    </a>
                </FadeIn>
            </div>
        </section>
    );
}
