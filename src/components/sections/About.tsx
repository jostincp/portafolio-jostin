'use client';

import { Dict } from '@/i18n/dictionaries';
import { FadeIn } from '@/components/ui/FadeIn';
import { AnimatedText } from '@/components/ui/AnimatedText';

export function About({ dict }: { dict: Dict }) {
    return (
        <section id="about" className="relative py-24 sm:py-32 px-5 sm:px-8">
            <div className="max-w-7xl mx-auto">
                <FadeIn className="mb-14">
                    <span className="eyebrow text-accent">{dict.about.eyebrow}</span>
                    <h2 className="display-heading text-5xl sm:text-7xl md:text-8xl mt-4">
                        {dict.about.title}
                    </h2>
                </FadeIn>

                <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
                    <div className="lg:col-span-7">
                        <FadeIn>
                            <p className="font-display text-xl sm:text-2xl md:text-[1.75rem] leading-snug text-fg mb-8">
                                {dict.about.lead}
                            </p>
                        </FadeIn>
                        <AnimatedText
                            text={dict.about.body}
                            className="text-[15px] sm:text-base leading-relaxed text-fg-muted"
                        />
                    </div>

                    <div className="lg:col-span-5">
                        <FadeIn delay={0.1}>
                            <div className="rounded-3xl border border-line bg-bg-elev p-7 sm:p-8">
                                <div className="eyebrow text-fg-dim mb-6">{dict.about.factsTitle}</div>
                                <dl className="flex flex-col">
                                    {dict.about.facts.map((f, i) => (
                                        <div
                                            key={f.k}
                                            className={`py-4 ${i === 0 ? 'pt-0' : ''} ${
                                                i === dict.about.facts.length - 1 ? 'pb-0' : 'border-b border-line'
                                            }`}
                                        >
                                            <dt className="text-[11px] font-mono uppercase tracking-wider text-fg-dim mb-1.5">
                                                {f.k}
                                            </dt>
                                            <dd className="text-sm text-fg leading-relaxed">{f.v}</dd>
                                        </div>
                                    ))}
                                </dl>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </div>
        </section>
    );
}
