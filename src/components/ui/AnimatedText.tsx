'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface AnimatedTextProps {
    text: string;
    className?: string;
}

/** Revela el texto palabra por palabra a medida que la sección entra en pantalla. */
export function AnimatedText({ text, className = '' }: AnimatedTextProps) {
    const ref = useRef<HTMLParagraphElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start 0.85', 'start 0.25'],
    });

    const words = text.split(' ');

    return (
        <p ref={ref} className={className}>
            {words.map((word, i) => (
                <Word key={`${word}-${i}`} progress={scrollYProgress} range={[i / words.length, (i + 1) / words.length]}>
                    {word}
                </Word>
            ))}
        </p>
    );
}

function Word({
    children,
    progress,
    range,
}: {
    children: string;
    progress: ReturnType<typeof useScroll>['scrollYProgress'];
    range: [number, number];
}) {
    const opacity = useTransform(progress, range, [0.18, 1]);
    return (
        <motion.span style={{ opacity }} className="inline-block mr-[0.28em]">
            {children}
        </motion.span>
    );
}
