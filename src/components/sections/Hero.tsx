'use client';

import { motion } from 'framer-motion';
import { Terminal, Code2, Database, Layout, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { Language } from '@/i18n/dictionaries';

interface HeroProps {
    dict: any;
    currentLang: Language;
}

export function Hero({ dict, currentLang }: HeroProps) {
    const containerVariants: any = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants: any = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut",
            },
        },
    };

    return (
        <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
            {/* Background glowing effects */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[128px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[128px] pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="max-w-2xl"
                    >
                        <motion.div variants={itemVariants} className="flex items-center gap-2 mb-4 text-emerald-400 font-medium tracking-wider uppercase text-sm">
                            <Sparkles className="w-4 h-4" />
                            {dict.hero.greeting}
                        </motion.div>

                        <motion.h1 variants={itemVariants} className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                            <span className="block text-slate-50">Jostin</span>
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                                Full Stack Developer
                            </span>
                        </motion.h1>

                        <motion.p variants={itemVariants} className="text-xl text-slate-400 mb-8 max-w-xl leading-relaxed">
                            {dict.hero.description}
                        </motion.p>

                        <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
                            <Link
                                href={`/${currentLang}#projects`}
                                className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold text-slate-900 bg-emerald-400 rounded-lg hover:bg-emerald-300 transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(52,211,153,0.3)]"
                            >
                                {dict.hero.viewProjects}
                            </Link>
                            <Link
                                href={`/${currentLang}#contact`}
                                className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 rounded-lg hover:bg-emerald-400/20 transition-all hover:scale-105 active:scale-95"
                            >
                                {dict.hero.contact}
                            </Link>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative hidden lg:block"
                    >
                        <div className="relative w-full aspect-square max-w-md mx-auto">
                            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 to-cyan-500/20 rounded-3xl rotate-6 blur-md" />
                            <div className="absolute inset-0 bg-slate-800 rounded-3xl border border-slate-700 shadow-2xl flex items-center justify-center overflow-hidden">
                                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-400 via-transparent to-transparent" />

                                {/* Floating Tech Icons */}
                                <motion.div animate={{ y: [0, -20, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute top-12 left-12 p-4 bg-slate-900/50 rounded-2xl border border-slate-700/50 backdrop-blur-md">
                                    <Terminal className="w-8 h-8 text-emerald-400" />
                                </motion.div>

                                <motion.div animate={{ y: [0, 20, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="absolute bottom-12 right-12 p-4 bg-slate-900/50 rounded-2xl border border-slate-700/50 backdrop-blur-md">
                                    <Database className="w-8 h-8 text-cyan-400" />
                                </motion.div>

                                <motion.div animate={{ x: [0, -15, 0] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }} className="absolute top-24 right-16 p-4 bg-slate-900/50 rounded-2xl border border-slate-700/50 backdrop-blur-md">
                                    <Layout className="w-8 h-8 text-blue-400" />
                                </motion.div>

                                <div className="text-center z-10">
                                    <Code2 className="w-24 h-24 text-emerald-500 mx-auto mb-6 opacity-80" />
                                    <div className="text-2xl font-bold text-slate-200">&lt;Code /&gt;</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
