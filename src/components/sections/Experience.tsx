'use client';

import { Dict } from '@/i18n/dictionaries';
import { FadeIn } from '@/components/ui/FadeIn';

export function Experience({ dict }: { dict: Dict }) {
    return (
        <section id="experience" className="relative py-24 sm:py-32 px-5 sm:px-8 border-t border-line">
            <div className="max-w-7xl mx-auto">
                <FadeIn className="mb-14">
                    <span className="eyebrow text-accent">{dict.experience.eyebrow}</span>
                    <h2 className="display-heading text-5xl sm:text-7xl md:text-8xl mt-4">
                        {dict.experience.title}
                    </h2>
                </FadeIn>

                <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
                    <div className="lg:col-span-8 flex flex-col">
                        {dict.experience.items.map((job, i) => (
                            <FadeIn
                                key={job.period}
                                delay={i * 0.08}
                                className="relative border-t border-line py-8 sm:py-10 pl-0 sm:pl-8"
                            >
                                <span
                                    aria-hidden
                                    className="hidden sm:block absolute left-0 top-[2.9rem] h-2 w-2 rounded-full bg-accent"
                                />
                                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 mb-3">
                                    <h3 className="font-display text-lg sm:text-xl text-fg">{job.role}</h3>
                                    <span className="font-mono text-[11px] uppercase tracking-wider text-accent">
                                        {job.company}
                                    </span>
                                </div>
                                <div className="font-mono text-[11px] uppercase tracking-wider text-fg-dim mb-5">
                                    {job.period}
                                </div>
                                <ul className="flex flex-col gap-2.5">
                                    {job.bullets.map((b) => (
                                        <li
                                            key={b}
                                            className="flex gap-3 text-[13.5px] sm:text-sm text-fg-muted leading-relaxed"
                                        >
                                            <span
                                                aria-hidden
                                                className="mt-[0.6em] h-px w-3 shrink-0 bg-line-strong"
                                            />
                                            {b}
                                        </li>
                                    ))}
                                </ul>
                            </FadeIn>
                        ))}
                    </div>

                    <div className="lg:col-span-4">
                        <FadeIn delay={0.12}>
                            <div className="rounded-3xl border border-line bg-bg-elev p-7 sm:p-8 lg:sticky lg:top-24">
                                <div className="eyebrow text-fg-dim mb-6">
                                    {dict.experience.educationTitle}
                                </div>
                                <ul className="flex flex-col">
                                    {dict.experience.education.map((e, i) => (
                                        <li
                                            key={e.school}
                                            className={`py-4 ${i === 0 ? 'pt-0' : ''} ${
                                                i === dict.experience.education.length - 1
                                                    ? 'pb-0'
                                                    : 'border-b border-line'
                                            }`}
                                        >
                                            <div className="text-sm text-fg mb-1">{e.school}</div>
                                            <div className="text-[13px] text-fg-dim leading-relaxed">
                                                {e.detail}
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </div>
        </section>
    );
}
