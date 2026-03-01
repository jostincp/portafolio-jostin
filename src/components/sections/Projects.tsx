'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, FolderGit2 } from 'lucide-react';
import { Language } from '@/i18n/dictionaries';

interface ProjectsProps {
    dict: any;
    currentLang: Language;
}

export function Projects({ dict }: ProjectsProps) {
    const projects = [
        {
            id: 'fittracker',
            title: dict.projects.fittracker.title,
            description: dict.projects.fittracker.description,
            tech: ['React', 'Node.js', 'MongoDB', 'Tailwind'],
            link: '#',
            github: '#'
        },
        {
            id: 'taskmanager',
            title: dict.projects.taskmanager.title,
            description: dict.projects.taskmanager.description,
            tech: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL'],
            link: '#',
            github: '#'
        },
        {
            id: 'stylehub',
            title: dict.projects.stylehub.title,
            description: dict.projects.stylehub.description,
            tech: ['Vue.js', 'Express', 'Stripe', 'Redis'],
            link: '#',
            github: '#'
        }
    ];

    return (
        <section id="projects" className="py-24 bg-slate-900/50 relative">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold mb-4 text-slate-50"
                    >
                        {dict.projects.title}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-slate-400 text-lg"
                    >
                        {dict.projects.subtitle}
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative bg-slate-800 rounded-2xl border border-slate-700 overflow-hidden hover:border-emerald-500/50 transition-colors"
                        >
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-6">
                                    <div className="p-3 bg-emerald-500/10 text-emerald-400 rounded-lg">
                                        <FolderGit2 className="w-8 h-8" />
                                    </div>
                                    <div className="flex gap-3">
                                        <a href={project.github} className="text-slate-400 hover:text-emerald-400 transition-colors">
                                            <Github className="w-5 h-5" />
                                        </a>
                                        <a href={project.link} className="text-slate-400 hover:text-emerald-400 transition-colors">
                                            <ExternalLink className="w-5 h-5" />
                                        </a>
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-slate-100 mb-3 group-hover:text-emerald-400 transition-colors">
                                    {project.title}
                                </h3>

                                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tech.map(tech => (
                                        <span
                                            key={tech}
                                            className="text-xs font-mono text-cyan-400 bg-cyan-400/10 px-2 py-1 rounded-md"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
