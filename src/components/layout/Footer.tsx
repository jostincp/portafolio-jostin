import { Github, Linkedin, Twitter } from 'lucide-react';

interface FooterProps {
    dict: any;
}

export function Footer({ dict }: FooterProps) {
    return (
        <footer className="bg-slate-950 py-12 border-t border-slate-800">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">

                    <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400">
                        Jostin
                    </div>

                    <p className="text-slate-500 text-sm text-center md:text-left">
                        {dict.footer.copyright}
                    </p>

                    <div className="flex gap-4">
                        <a href="#" className="p-2.5 bg-slate-900 rounded-lg border border-slate-800 text-slate-400 hover:text-emerald-400 hover:border-emerald-500/50 transition-all">
                            <Github className="w-5 h-5" />
                        </a>
                        <a href="#" className="p-2.5 bg-slate-900 rounded-lg border border-slate-800 text-slate-400 hover:text-blue-400 hover:border-blue-500/50 transition-all">
                            <Linkedin className="w-5 h-5" />
                        </a>
                        <a href="#" className="p-2.5 bg-slate-900 rounded-lg border border-slate-800 text-slate-400 hover:text-sky-400 hover:border-sky-500/50 transition-all">
                            <Twitter className="w-5 h-5" />
                        </a>
                    </div>

                </div>
            </div>
        </footer>
    );
}
