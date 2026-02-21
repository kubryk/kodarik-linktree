"use client";

import { useCallback } from "react";

const ArrowIcon = () => (
    <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <line x1="5" y1="12" x2="19" y2="12" />
        <polyline points="12 5 19 12 12 19" />
    </svg>
);

export default function LinkCard({
    href = "#",
    icon,
    label,
    desc,
    accent = false,
    index = 0,
}) {
    const handleMouseMove = useCallback((e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        e.currentTarget.style.setProperty("--mouse-x", `${x}%`);
        e.currentTarget.style.setProperty("--mouse-y", `${y}%`);
    }, []);

    const handleClick = useCallback((e) => {
        const el = e.currentTarget;
        const rect = el.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        const ripple = document.createElement("span");
        ripple.style.cssText = `
      position: absolute;
      width: ${size}px;
      height: ${size}px;
      left: ${x}px;
      top: ${y}px;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(255, 215, 0, 0.15), transparent 70%);
      transform: scale(0);
      animation: rippleEffect 0.6s ease-out forwards;
      pointer-events: none;
      z-index: 10;
    `;
        el.appendChild(ripple);
        setTimeout(() => ripple.remove(), 600);
    }, []);

    const className = `link-card${accent ? " link-card--accent" : ""}`;

    return (
        <a
            href={href}
            className={className}
            data-index={index}
            onMouseMove={handleMouseMove}
            onClick={handleClick}
            target="_blank"
            rel="noopener noreferrer"
        >
            <div className="link-card__icon">{icon}</div>
            <div className="link-card__content">
                <span className="link-card__label">{label}</span>
                <span className="link-card__desc">{desc}</span>
            </div>
            <div className="link-card__arrow">
                <ArrowIcon />
            </div>
            <div className="link-card__glow" />
        </a>
    );
}
