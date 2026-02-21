"use client";

import { useEffect, useRef } from "react";

export default function Particles() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        let particles = [];
        let animationId;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        class Particle {
            constructor() {
                this.reset();
            }

            reset() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 1.5 + 0.5;
                this.speedX = (Math.random() - 0.5) * 0.3;
                this.speedY = (Math.random() - 0.5) * 0.3;
                this.opacity = Math.random() * 0.4 + 0.1;
                this.pulse = Math.random() * Math.PI * 2;
                this.pulseSpeed = Math.random() * 0.02 + 0.005;

                const colors = [
                    "255, 215, 0", // gold
                    "255, 184, 0", // amber
                    "245, 158, 11", // dark amber
                ];
                this.color = colors[Math.floor(Math.random() * colors.length)];
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;
                this.pulse += this.pulseSpeed;

                const currentOpacity =
                    this.opacity * (0.6 + Math.sin(this.pulse) * 0.4);

                if (
                    this.x < 0 ||
                    this.x > canvas.width ||
                    this.y < 0 ||
                    this.y > canvas.height
                ) {
                    this.reset();
                }

                return currentOpacity;
            }

            draw(opacity) {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${this.color}, ${opacity})`;
                ctx.fill();
            }
        }

        const initParticles = () => {
            const count = Math.min(
                Math.floor((canvas.width * canvas.height) / 15000),
                80
            );
            particles = Array.from({ length: count }, () => new Particle());
        };

        const drawConnections = () => {
            const maxDist = 120;
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < maxDist) {
                        const opacity = (1 - dist / maxDist) * 0.08;
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.strokeStyle = `rgba(255, 215, 0, ${opacity})`;
                        ctx.lineWidth = 0.5;
                        ctx.stroke();
                    }
                }
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach((p) => {
                const opacity = p.update();
                p.draw(opacity);
            });
            drawConnections();
            animationId = requestAnimationFrame(animate);
        };

        resize();
        initParticles();
        animate();

        const handleResize = () => {
            resize();
            initParticles();
        };

        window.addEventListener("resize", handleResize);

        // Reduce animation on prefers-reduced-motion
        const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
        if (mq.matches) {
            cancelAnimationFrame(animationId);
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }

        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return <canvas ref={canvasRef} className="particles-canvas" />;
}
