'use client';

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface FadeInProps {
    children: ReactNode;
    delay?: number;
    y?: number;
    x?: number;
    duration?: number;
    className?: string;
    once?: boolean;
}

export function FadeIn({
    children,
    delay = 0,
    y = 28,
    x = 0,
    duration = 0.7,
    className = '',
    once = true,
}: FadeInProps) {
    return (
        <motion.div
            className={className}
            initial={{ opacity: 0, y, x }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            viewport={{ once, margin: '-80px' }}
            transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
        >
            {children}
        </motion.div>
    );
}
