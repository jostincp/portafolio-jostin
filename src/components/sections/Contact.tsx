'use client';

import { motion } from 'framer-motion';
import { Mail, MapPin, Send } from 'lucide-react';

interface ContactProps {
    dict: any;
}

export function Contact({ dict }: ContactProps) {
    return (
        <section id="contact" className="py-24 bg-slate-950 relative border-t border-white/5">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold mb-4 text-slate-50"
                    >
                        {dict.contact.title}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-slate-400 text-lg"
                    >
                        {dict.contact.subtitle}
                    </motion.p>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 max-w-5xl mx-auto">

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h3 className="text-2xl font-bold text-slate-100 mb-6">{dict.contact.ready.title}</h3>
                        <p className="text-slate-400 mb-8 leading-relaxed">
                            {dict.contact.ready.description}
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="flex items-center justify-center w-12 h-12 bg-emerald-500/10 rounded-xl text-emerald-400">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <div className="text-sm font-medium text-slate-500">Email</div>
                                    <a href="mailto:hello@example.com" className="text-lg text-slate-200 hover:text-emerald-400 transition-colors">
                                        hello@jostin.dev
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="flex items-center justify-center w-12 h-12 bg-cyan-500/10 rounded-xl text-cyan-400">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <div className="text-sm font-medium text-slate-500">Ubicación</div>
                                    <div className="text-lg text-slate-200">
                                        Remoto, Global
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.form
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="bg-slate-900 p-8 rounded-3xl border border-slate-800 shadow-xl"
                        onSubmit={(e) => e.preventDefault()}
                    >
                        <div className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-slate-400 mb-2">{dict.contact.form.name}</label>
                                <input
                                    type="text"
                                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all"
                                    placeholder="John Doe"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-400 mb-2">{dict.contact.form.email}</label>
                                <input
                                    type="email"
                                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all"
                                    placeholder="john@example.com"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-400 mb-2">{dict.contact.form.message}</label>
                                <textarea
                                    rows={4}
                                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all resize-none"
                                    placeholder="Tell me about your project..."
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold py-4 rounded-xl transition-colors hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] active:scale-[0.98]"
                            >
                                <span>{dict.contact.form.send}</span>
                                <Send className="w-5 h-5" />
                            </button>
                        </div>
                    </motion.form>

                </div>
            </div>
        </section>
    );
}
