'use client';

import { motion } from 'framer-motion';
import { Briefcase, Code, Award } from 'lucide-react';

interface AboutProps {
    dict: any;
}

export function About({ dict }: AboutProps) {
    const stats = [
        {
            icon: <Briefcase className="w-6 h-6 text-emerald-400" />,
            value: "4+",
            label: dict.about.stats.experience
        },
        {
            icon: <Code className="w-6 h-6 text-cyan-400" />,
            value: "50+",
            label: dict.about.stats.projects
        },
        {
            icon: <Award className="w-6 h-6 text-emerald-400" />,
            value: "100%",
            label: dict.about.stats.satisfaction
        }
    ];

    return (
        <section id="about" className="py-24 bg-slate-900 relative">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-50">{dict.about.title}</h2>
                        <h3 className="text-xl text-emerald-400 mb-6 font-medium bg-emerald-500/10 inline-block px-4 py-2 rounded-full">{dict.about.subtitle}</h3>

                        <p className="text-slate-400 text-lg leading-relaxed mb-8">
                            {dict.about.description1}
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.2, duration: 0.5 }}
                                    className="p-6 bg-slate-800 rounded-2xl border border-slate-700 text-center hover:border-emerald-500/50 transition-colors"
                                >
                                    <div className="inline-flex justify-center items-center w-12 h-12 rounded-xl bg-slate-900/50 mb-4 ring-1 ring-slate-700">
                                        {stat.icon}
                                    </div>
                                    <div className="text-3xl font-bold text-slate-50 mb-2">{stat.value}</div>
                                    <div className="text-sm font-medium text-slate-400">{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Photo/Graphic representation */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative lg:h-[600px] rounded-3xl overflow-hidden bg-slate-800 border border-slate-700 hidden lg:block"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 mix-blend-overlay" />
                        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-slate-900 to-transparent" />

                        {/* Visual placeholder since we don't have the explicit img path handy, replaced with elegant abstract */}
                        <div className="flex items-center justify-center h-full w-full opacity-30">
                            <div className="w-[300px] h-[300px] rounded-full border-4 border-dashed border-emerald-500/50 animate-spin-slow" />
                            <div className="absolute w-[200px] h-[200px] rounded-full border-4 border-dashed border-cyan-500/50 animate-[spin_10s_linear_infinite_reverse]" />
                        </div>

                        <div className="absolute bottom-8 left-8 right-8 p-6 bg-slate-900/80 backdrop-blur-md rounded-2xl border border-slate-700/50">
                            <p className="text-sm text-slate-300 italic">
                                "El código es como el humor. Cuando tienes que explicarlo, es malo."
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
