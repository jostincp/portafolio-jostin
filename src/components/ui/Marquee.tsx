'use client';

interface MarqueeProps {
    items: readonly string[];
}

/** Cinta tipográfica infinita, sin imágenes ni assets externos. */
export function Marquee({ items }: MarqueeProps) {
    const loop = [...items, ...items];

    return (
        <div className="relative border-y border-line bg-bg-elev py-6 sm:py-8 overflow-hidden marquee-mask">
            <div className="flex w-max animate-marquee">
                {loop.map((item, i) => (
                    <div key={`${item}-${i}`} className="flex items-center shrink-0">
                        <span className="font-display text-2xl sm:text-3xl md:text-4xl uppercase tracking-tight text-fg-muted px-6 sm:px-8">
                            {item}
                        </span>
                        <span aria-hidden className="text-accent text-lg sm:text-xl">
                            &#9679;
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}
