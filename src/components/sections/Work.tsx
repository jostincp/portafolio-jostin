'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Dict, site } from '@/i18n/dictionaries';
import { FadeIn } from '@/components/ui/FadeIn';

type CaseId = 'encore' | 'smartsavings';

const META: Record<CaseId, { stack: string[]; href?: string; accent: string }> = {
    encore: {
        stack: ['Next.js 15', 'React 19', 'Node.js', 'Express', 'PostgreSQL', 'Redis', 'Socket.IO', 'Docker', 'TypeScript'],
        href: site.encore,
        accent: '#D6FF3F',
    },
    smartsavings: {
        stack: ['n8n', 'WhatsApp Business API', 'Gemini 2.5 Flash', 'Whisper', 'DeepSeek', 'PostgreSQL', 'Supabase'],
        accent: '#7CC5FF',
    },
};

export function Work({ dict }: { dict: Dict }) {
    const cases: CaseId[] = ['encore', 'smartsavings'];

    return (
        <section id="work" className="relative py-24 sm:py-32 px-5 sm:px-8 border-t border-line">
            <div className="max-w-7xl mx-auto">
                <FadeIn className="mb-16">
                    <span className="eyebrow text-accent">{dict.work.eyebrow}</span>
                    <h2 className="display-heading text-5xl sm:text-6xl md:text-7xl mt-4 mb-5 max-w-[14ch]">
                        {dict.work.title}
                    </h2>
                    <p className="text-fg-muted text-[15px] sm:text-base leading-relaxed max-w-2xl">
                        {dict.work.subtitle}
                    </p>
                </FadeIn>

                <div className="flex flex-col gap-10">
                    {cases.map((id, i) => (
                        <CaseCard key={id} id={id} index={i} total={cases.length} dict={dict} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function CaseCard({
    id,
    index,
    total,
    dict,
}: {
    id: CaseId;
    index: number;
    total: number;
    dict: Dict;
}) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
    const targetScale = 1 - (total - 1 - index) * 0.04;
    const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

    const data = dict.work[id];
    const meta = META[id];

    return (
        <div ref={ref} className="relative h-auto lg:h-[92vh] flex items-start justify-center">
            <motion.article
                style={{ scale, top: `calc(5.5rem + ${index * 22}px)` }}
                className="lg:sticky w-full rounded-[28px] sm:rounded-[40px] border border-line-strong bg-bg-elev overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.55)]"
            >
                <div className="grid lg:grid-cols-12">
                    {/* Contenido */}
                    <div className="lg:col-span-7 p-7 sm:p-9 lg:p-10 flex flex-col">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="font-mono text-xs text-fg-dim">
                                {String(index + 1).padStart(2, '0')}
                            </span>
                            <span
                                className="rounded-full px-3 py-1 text-[11px] font-mono uppercase tracking-wider"
                                style={{ color: meta.accent, background: `${meta.accent}14` }}
                            >
                                {data.tag}
                            </span>
                        </div>

                        <h3 className="font-display text-4xl sm:text-5xl text-fg tracking-tight mb-4">
                            {data.name}
                        </h3>

                        <p className="text-[15px] sm:text-base text-fg-muted leading-relaxed mb-6 max-w-xl">
                            {data.summary}
                        </p>

                        <ul className="flex flex-col gap-2.5 mb-7 border-t border-line pt-5">
                            {data.bullets.map((b) => (
                                <li key={b} className="flex gap-3 text-[13.5px] sm:text-sm text-fg-muted leading-relaxed">
                                    <span
                                        aria-hidden
                                        className="mt-[0.55em] h-1 w-1 shrink-0 rounded-full"
                                        style={{ background: meta.accent }}
                                    />
                                    {b}
                                </li>
                            ))}
                        </ul>

                        <div className="mt-auto flex flex-wrap gap-2 mb-6">
                            {meta.stack.map((t) => (
                                <span
                                    key={t}
                                    className="rounded-md border border-line px-2.5 py-1 font-mono text-[11px] text-fg-dim"
                                >
                                    {t}
                                </span>
                            ))}
                        </div>

                        {meta.href && (
                            <a
                                href={meta.href}
                                target="_blank"
                                rel="noopener"
                                className="group inline-flex items-center gap-2 self-start rounded-full border border-line-strong px-5 py-2.5 text-sm font-medium text-fg hover:border-accent hover:text-accent transition-colors"
                            >
                                {dict.work.visit}
                                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                            </a>
                        )}
                    </div>

                    {/* Visual */}
                    <div className="lg:col-span-5 relative min-h-[280px] sm:min-h-[360px] lg:min-h-0 border-t lg:border-t-0 lg:border-l border-line bg-[#0C0C0E] flex flex-col">
                        <div className="flex-1 flex items-center justify-center p-8">
                            {id === 'encore' ? <EncoreDiagram /> : <SmartSavingsDiagram />}
                        </div>
                        <div className="border-t border-line px-6 py-4 font-mono text-[11px] uppercase tracking-wider text-fg-dim">
                            {data.metric}
                        </div>
                    </div>
                </div>
            </motion.article>
        </div>
    );
}

function EncoreDiagram() {
    const services = [
        { name: 'auth', port: '3001' },
        { name: 'music', port: '3002' },
        { name: 'queue', port: '3003' },
        { name: 'menu', port: '3005' },
        { name: 'points', port: '3006' },
        { name: 'stats', port: '3007' },
    ];
    const cols = [48, 160, 272];
    const A = '#D6FF3F';

    return (
        <svg viewBox="0 0 320 276" className="w-full max-w-[320px] h-auto" role="img" aria-label="Arquitectura de Encore: frontend Next.js sobre seis microservicios, PostgreSQL y Redis">
            {/* conexiones frontend -> servicios */}
            {cols.map((x, i) => {
                const d = `M160,46 C160,62 ${x},58 ${x},76`;
                return (
                    <g key={`t${i}`}>
                        <path d={d} fill="none" stroke="rgba(232,236,240,0.14)" strokeWidth="1" />
                        <path d={d} fill="none" stroke={A} strokeWidth="2" strokeLinecap="round" pathLength={100} className="beam" style={{ animationDelay: `${i * 0.45}s` }} />
                    </g>
                );
            })}

            {/* conexiones servicios -> datos */}
            {[76, 244].map((x, i) => {
                const d = `M160,196 C160,212 ${x},210 ${x},228`;
                return (
                    <g key={`b${i}`}>
                        <path d={d} fill="none" stroke="rgba(232,236,240,0.14)" strokeWidth="1" />
                        <path d={d} fill="none" stroke={A} strokeWidth="2" strokeLinecap="round" pathLength={100} className="beam" style={{ animationDelay: `${1.2 + i * 0.4}s` }} />
                    </g>
                );
            })}

            {/* frontend */}
            <rect x="60" y="0" width="200" height="46" rx="14" fill="#141416" stroke="rgba(232,236,240,0.14)" />
            <text x="160" y="18" textAnchor="middle" className="font-mono" fontSize="8" letterSpacing="1.6" fill="#5C636B">FRONTEND</text>
            <text x="160" y="34" textAnchor="middle" className="font-display" fontSize="12" fill="#E8ECF0">Next.js · PWA</text>

            {/* microservicios */}
            {services.map((s, i) => {
                const x = (i % 3) * 112;
                const y = i < 3 ? 76 : 144;
                return (
                    <g key={s.name}>
                        <rect x={x} y={y} width="96" height="52" rx="13" fill="#111113" stroke={i === 0 ? 'rgba(214,255,63,0.30)' : 'rgba(232,236,240,0.10)'} />
                        <text x={x + 48} y={y + 22} textAnchor="middle" className="font-mono" fontSize="10" fill="#8E969F">{s.name}</text>
                        <text x={x + 48} y={y + 37} textAnchor="middle" className="font-mono" fontSize="9" fill="#4E545B">{s.port}</text>
                    </g>
                );
            })}

            {/* almacenamiento */}
            {[{ x: 0, label: 'PostgreSQL' }, { x: 168, label: 'Redis' }].map((d) => (
                <g key={d.label}>
                    <rect x={d.x} y="228" width="152" height="40" rx="13" fill="#111113" stroke="rgba(232,236,240,0.10)" />
                    <text x={d.x + 76} y="252" textAnchor="middle" className="font-mono" fontSize="10" fill="#5C636B">{d.label}</text>
                </g>
            ))}
        </svg>
    );
}

function SmartSavingsDiagram() {
    const inputs = [
        { label: 'texto', model: 'DeepSeek' },
        { label: 'voz', model: 'Whisper' },
        { label: 'factura', model: 'Gemini' },
    ];
    const A = '#7CC5FF';

    return (
        <svg viewBox="0 0 320 250" className="w-full max-w-[320px] h-auto" role="img" aria-label="Pipeline de SmartSavings: entradas de texto, voz e imagen hacia n8n y PostgreSQL">
            {/* entradas -> orquestador */}
            {[50, 160, 270].map((x, i) => {
                const d = `M${x},52 C${x},74 160,80 160,104`;
                return (
                    <g key={`i${i}`}>
                        <path d={d} fill="none" stroke="rgba(232,236,240,0.14)" strokeWidth="1" />
                        <path d={d} fill="none" stroke={A} strokeWidth="2" strokeLinecap="round" pathLength={100} className="beam" style={{ animationDelay: `${i * 0.5}s` }} />
                    </g>
                );
            })}

            {/* orquestador -> base de datos */}
            <path d="M160,162 L160,196" fill="none" stroke="rgba(232,236,240,0.14)" strokeWidth="1" />
            <path d="M160,162 L160,196" fill="none" stroke={A} strokeWidth="2" strokeLinecap="round" pathLength={100} className="beam" style={{ animationDelay: '1.5s' }} />

            {/* entradas */}
            {inputs.map((inp, i) => {
                const x = i * 110;
                return (
                    <g key={inp.label}>
                        <rect x={x} y="0" width="100" height="52" rx="13" fill="#111113" stroke="rgba(232,236,240,0.10)" />
                        <text x={x + 50} y="22" textAnchor="middle" className="font-mono" fontSize="9" letterSpacing="1.2" fill="#8E969F">{inp.label.toUpperCase()}</text>
                        <text x={x + 50} y="38" textAnchor="middle" className="font-mono" fontSize="9" fill={A}>{inp.model}</text>
                    </g>
                );
            })}

            {/* orquestador */}
            <rect x="40" y="104" width="240" height="58" rx="16" fill="#141416" stroke="rgba(124,197,255,0.28)" />
            <text x="160" y="126" textAnchor="middle" className="font-mono" fontSize="8" letterSpacing="1.6" fill="#5C636B">ORQUESTADOR</text>
            <text x="160" y="146" textAnchor="middle" className="font-display" fontSize="13" fill="#E8ECF0">n8n · WhatsApp API</text>

            {/* persistencia */}
            <rect x="40" y="196" width="240" height="44" rx="13" fill="#111113" stroke="rgba(232,236,240,0.10)" />
            <text x="160" y="223" textAnchor="middle" className="font-mono" fontSize="10" fill="#5C636B">PostgreSQL · Supabase</text>
        </svg>
    );
}
