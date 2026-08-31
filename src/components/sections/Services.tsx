'use client';

import { Dict } from '@/i18n/dictionaries';
import { FadeIn } from '@/components/ui/FadeIn';

export function Services({ dict }: { dict: Dict }) {
    return (
        <section
            id="services"
            className="relative z-0 bg-light-bg text-light-fg rounded-t-[40px] sm:rounded-t-[60px] px-5 sm:px-8 py-24 sm:py-32"
        >
            <div className="max-w-6xl mx-auto">
                <FadeIn className="mb-16 sm:mb-20">
                    <span className="eyebrow text-light-fg/50">{dict.services.eyebrow}</span>
                    <h2 className="display-heading-dark text-5xl sm:text-7xl md:text-8xl mt-4">
                        {dict.services.title}
                    </h2>
                </FadeIn>

                <div className="border-t border-light-fg/15">
                    {dict.services.items.map((item, i) => (
                        <FadeIn
                            key={item.num}
                            delay={i * 0.07}
                            className="group border-b border-light-fg/15 py-8 sm:py-11 flex flex-col sm:flex-row sm:items-baseline gap-4 sm:gap-10 md:gap-16"
                        >
                            <div className="font-display font-bold leading-none text-light-fg/25 group-hover:text-light-fg/60 transition-colors text-4xl sm:text-6xl md:text-7xl sm:w-[18%] shrink-0">
                                {item.num}
                            </div>
                            <div className="flex-1">
                                <h3 className="font-display text-xl sm:text-2xl md:text-[1.75rem] text-light-fg mb-2.5">
                                    {item.name}
                                </h3>
                                <p className="text-[14.5px] sm:text-base leading-relaxed text-light-fg/65 max-w-2xl">
                                    {item.description}
                                </p>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
