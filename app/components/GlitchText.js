"use client";

import { useEffect, useRef } from "react";

export default function GlitchText({ children, className }) {
    const ref = useRef(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const interval = setInterval(() => {
            el.style.textShadow = `
        ${(Math.random() - 0.5) * 2}px 0 rgba(255, 215, 0, 0.3),
        ${(Math.random() - 0.5) * 2}px 0 rgba(255, 184, 0, 0.3)
      `;
            setTimeout(() => {
                el.style.textShadow = "none";
            }, 50);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <h1 ref={ref} className={className}>
            {children}
        </h1>
    );
}
