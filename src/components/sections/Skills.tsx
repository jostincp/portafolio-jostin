'use client';

import { motion } from 'framer-motion';
import {
    Monitor,
    Server,
    Database,
    Cloud,
    Settings
} from 'lucide-react';

interface SkillsProps {
    dict: any;
}

export function Skills({ dict }: SkillsProps) {
    const skillCategories = [
        {
            title: dict.skills.frontend,
            icon: <Monitor className="w-6 h-6 text-emerald-400" />,
            skills: ['React', 'Next.js', 'Vue.js', 'Tailwind CSS', 'TypeScript', 'Framer Motion']
        },
        {
            title: dict.skills.backend,
            icon: <Server className="w-6 h-6 text-cyan-400" />,
            skills: ['Node.js', 'Express', 'NestJS', 'Python', 'Go', 'GraphQL']
        },
        {
            title: dict.skills.database,
            icon: <Database className="w-6 h-6 text-emerald-400" />,
            skills: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL', 'Prisma ORM']
        },
        {
            title: dict.skills.devops,
            icon: <Cloud className="w-6 h-6 text-cyan-400" />,
            skills: ['Docker', 'AWS', 'Vercel', 'Netlify', 'GitHub Actions']
        },
        {
            title: dict.skills.automation,
            icon: <Settings className="w-6 h-6 text-emerald-400" />,
            skills: ['Python Scripts', 'Puppeteer', 'Zapier', 'Webhooks', 'Cron Jobs']
        }
    ];

    return (
        <section id="skills" className="py-24 bg-slate-950 relative border-y border-white/5">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold mb-4 text-slate-50"
                    >
                        {dict.skills.title}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-slate-400 text-lg"
                    >
                        {dict.skills.subtitle}
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {skillCategories.map((category, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="p-8 bg-slate-900 rounded-3xl border border-slate-800 hover:border-emerald-500/30 transition-all hover:shadow-[0_0_30px_rgba(16,185,129,0.05)]"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-slate-800 rounded-xl ring-1 ring-slate-700">
                                    {category.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-slate-200">{category.title}</h3>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {category.skills.map(skill => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1.5 text-sm font-medium text-slate-300 bg-slate-800/80 border border-slate-700/50 rounded-lg hover:border-emerald-500/50 hover:text-emerald-300 transition-colors cursor-default"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
