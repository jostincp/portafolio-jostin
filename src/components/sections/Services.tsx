'use client';

import { motion } from 'framer-motion';
import { LayoutTemplate, Lightbulb, RefreshCw } from 'lucide-react';

interface ServicesProps {
    dict: any;
}

export function Services({ dict }: ServicesProps) {
    const services = [
        {
            title: dict.services.development.title,
            description: dict.services.development.description,
            icon: <LayoutTemplate className="w-10 h-10 text-emerald-400" />
        },
        {
            title: dict.services.automation.title,
            description: dict.services.automation.description,
            icon: <Lightbulb className="w-10 h-10 text-cyan-400" />
        },
        {
            title: dict.services.migration.title,
            description: dict.services.migration.description,
            icon: <RefreshCw className="w-10 h-10 text-emerald-400" />
        }
    ];

    return (
        <section id="services" className="py-24 bg-slate-900 relative">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-900 to-black pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold mb-4 text-slate-50"
                    >
                        {dict.services.title}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-slate-400 text-lg"
                    >
                        {dict.services.subtitle}
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="p-8 bg-slate-800/50 backdrop-blur-sm rounded-3xl border border-white/5 text-center group"
                        >
                            <div className="inline-flex items-center justify-center w-20 h-20 bg-slate-900 rounded-2xl mb-6 shadow-inner ring-1 ring-white/10 group-hover:ring-emerald-500/50 transition-all">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-slate-100 mb-4">{service.title}</h3>
                            <p className="text-slate-400 leading-relaxed text-sm">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
