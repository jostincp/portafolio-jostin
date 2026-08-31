'use client';

import { Dict, stackGroups } from '@/i18n/dictionaries';
import { FadeIn } from '@/components/ui/FadeIn';

export function Stack({ dict }: { dict: Dict }) {
    return (
        <section id="stack" className="relative py-24 sm:py-32 px-5 sm:px-8 border-t border-line">
            <div className="max-w-7xl mx-auto">
                <FadeIn className="mb-14">
                    <span className="eyebrow text-accent">{dict.stack.eyebrow}</span>
                    <h2 className="display-heading text-5xl sm:text-6xl md:text-7xl mt-4 mb-5 max-w-[14ch]">
                        {dict.stack.title}
                    </h2>
                    <p className="text-fg-muted text-[15px] sm:text-base leading-relaxed max-w-2xl">
                        {dict.stack.subtitle}
                    </p>
                </FadeIn>

                <div className="border-t border-line">
                    {stackGroups.map((group, i) => (
                        <FadeIn
                            key={group.id}
                            delay={i * 0.06}
                            className="group border-b border-line py-7 sm:py-9 grid md:grid-cols-12 gap-4 md:gap-8 items-baseline"
                        >
                            <div className="md:col-span-4 flex items-baseline gap-4">
                                <span className="font-mono text-xs text-fg-dim">
                                    {String(i + 1).padStart(2, '0')}
                                </span>
                                <h3 className="font-display text-xl sm:text-2xl text-fg group-hover:text-accent transition-colors">
                                    {dict.stack.groups[group.id as keyof typeof dict.stack.groups]}
                                </h3>
                            </div>
                            <div className="md:col-span-8 flex flex-wrap gap-2">
                                {group.items.map((item) => (
                                    <span
                                        key={item}
                                        className="rounded-full border border-line px-3.5 py-1.5 text-[13px] text-fg-muted hover:border-line-strong hover:text-fg transition-colors"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
