'use client';

import { useRef, useState, useEffect, type ReactNode } from 'react';

interface MagnetProps {
    children: ReactNode;
    padding?: number;
    strength?: number;
    className?: string;
}

/** El elemento se desplaza suavemente hacia el cursor cuando entra en su radio. */
export function Magnet({ children, padding = 120, strength = 4, className = '' }: MagnetProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [pos, setPos] = useState({ x: 0, y: 0 });
    const [active, setActive] = useState(false);

    useEffect(() => {
        const onMove = (e: MouseEvent) => {
            const el = ref.current;
            if (!el) return;
            const rect = el.getBoundingClientRect();
            const cx = rect.left + rect.width / 2;
            const cy = rect.top + rect.height / 2;
            const dx = e.clientX - cx;
            const dy = e.clientY - cy;

            const inside =
                Math.abs(dx) < rect.width / 2 + padding && Math.abs(dy) < rect.height / 2 + padding;

            if (inside) {
                setActive(true);
                setPos({ x: dx / strength, y: dy / strength });
            } else if (active) {
                setActive(false);
                setPos({ x: 0, y: 0 });
            }
        };

        window.addEventListener('mousemove', onMove, { passive: true });
        return () => window.removeEventListener('mousemove', onMove);
    }, [padding, strength, active]);

    return (
        <div
            ref={ref}
            className={className}
            style={{
                transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`,
                transition: active ? 'transform 0.25s ease-out' : 'transform 0.6s ease-in-out',
                willChange: 'transform',
            }}
        >
            {children}
        </div>
    );
}
