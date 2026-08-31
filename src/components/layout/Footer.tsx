import { Github, Linkedin, Mail } from 'lucide-react';
import { Dict, site } from '@/i18n/dictionaries';

export function Footer({ dict }: { dict: Dict }) {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-bg border-t border-line px-5 sm:px-8 py-10">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <div className="font-display text-base text-fg mb-1">
                        {site.name}
                        <span className="text-accent">.</span>
                    </div>
                    <p className="text-[12px] text-fg-dim">{dict.footer.tagline}</p>
                </div>

                <div className="flex items-center gap-2">
                    <a
                        href={site.github}
                        target="_blank"
                        rel="noopener"
                        aria-label="GitHub"
                        className="p-2.5 rounded-xl border border-line text-fg-muted hover:text-accent hover:border-line-strong transition-colors"
                    >
                        <Github className="w-4 h-4" />
                    </a>
                    <a
                        href={site.linkedin}
                        target="_blank"
                        rel="noopener"
                        aria-label="LinkedIn"
                        className="p-2.5 rounded-xl border border-line text-fg-muted hover:text-accent hover:border-line-strong transition-colors"
                    >
                        <Linkedin className="w-4 h-4" />
                    </a>
                    <a
                        href={`mailto:${site.email}`}
                        aria-label="Email"
                        className="p-2.5 rounded-xl border border-line text-fg-muted hover:text-accent hover:border-line-strong transition-colors"
                    >
                        <Mail className="w-4 h-4" />
                    </a>
                </div>

                <p className="text-[12px] text-fg-dim">
                    &copy; {year} {site.name}. {dict.footer.rights}
                </p>
            </div>
        </footer>
    );
}
