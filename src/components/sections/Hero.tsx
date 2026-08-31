'use client';

import { motion } from 'framer-motion';
import { ArrowDownRight, ArrowUpRight } from 'lucide-react';
import { Dict } from '@/i18n/dictionaries';
import { Magnet } from '@/components/ui/Magnet';

interface HeroProps {
    dict: Dict;
}

export function Hero({ dict }: HeroProps) {
    const container = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
    };
    const item = {
        hidden: { opacity: 0, y: 26 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] as const } },
    };

    return (
        <section
            id="home"
            className="relative min-h-[100svh] flex flex-col justify-between overflow-hidden grain pt-24 pb-8"
        >
            {/* halos de fondo */}
            <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-[radial-gradient(circle,rgba(214,255,63,0.07),transparent_62%)]" />
            <div className="pointer-events-none absolute bottom-0 right-0 w-[560px] h-[560px] rounded-full bg-[radial-gradient(circle,rgba(120,140,255,0.06),transparent_65%)]" />

            <motion.div
                variants={container}
                initial="hidden"
                animate="visible"
                className="relative z-10 flex-1 flex flex-col justify-center max-w-7xl mx-auto w-full px-5 sm:px-8"
            >
                <motion.div variants={item} className="flex items-center gap-3 mb-8">
                    <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-70 animate-ping" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                    </span>
                    <span className="eyebrow text-fg-muted">{dict.hero.available}</span>
                </motion.div>

                <motion.h1
                    variants={item}
                    className="display-heading text-[15vw] sm:text-[13vw] lg:text-[11.5vw] xl:text-[10.5vw]"
                >
                    Jostin
                    <br />
                    Castillo
                </motion.h1>

                <motion.div
                    variants={item}
                    className="mt-8 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 border-t border-line pt-8"
                >
                    <div className="max-w-xl">
                        <p className="font-display text-xl sm:text-2xl text-fg mb-4">
                            {dict.hero.role}
                            <span className="text-accent"> / </span>
                            <span className="text-fg-muted">AI &amp; Automation</span>
                        </p>
                        <p className="text-[15px] sm:text-base leading-relaxed text-fg-muted">
                            {dict.hero.pitch}
                        </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-3">
                        <Magnet padding={70} strength={7}>
                            <a
                                href="#work"
                                className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-[#0A0A0B] hover:bg-fg transition-colors"
                            >
                                {dict.hero.ctaWork}
                                <ArrowDownRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
                            </a>
                        </Magnet>
                        <a
                            href="#contact"
                            className="group inline-flex items-center gap-2 rounded-full border border-line-strong px-6 py-3.5 text-sm font-medium text-fg hover:border-accent hover:text-accent transition-colors"
                        >
                            {dict.contact.cta}
                            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </a>
                    </div>
                </motion.div>
            </motion.div>

            {/* franja de métricas */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55, duration: 0.8 }}
                className="relative z-10 max-w-7xl mx-auto w-full px-5 sm:px-8 mt-12"
            >
                <div className="grid grid-cols-3 border-t border-line">
                    {dict.hero.stats.map((s) => (
                        <div key={s.label} className="py-5 pr-4 border-r border-line last:border-r-0">
                            <div className="font-display text-3xl sm:text-4xl md:text-5xl text-fg leading-none mb-2">
                                {s.value}
                            </div>
                            <div className="text-[11px] sm:text-xs text-fg-dim leading-snug max-w-[16ch]">
                                {s.label}
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
