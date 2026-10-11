"use client";

import React, { useEffect, useRef } from "react";

interface PetalCanvasProps {
  density?: "gentle" | "normal" | "celebrate";
  className?: string;
}

interface Particle {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  angle: number;
  spinSpeed: number;
  swayFactor: number;
  opacity: number;
  type: "petal" | "heart" | "sparkle";
  color: string;
}

export function PetalCanvas({ density = "normal", className = "" }: PetalCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Respect user's motion preferences
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    // Particle count based on density
    const particleCount = density === "celebrate" ? 55 : density === "gentle" ? 18 : 28;

    const colors = [
      "#FFB3C1", // soft pink
      "#FFC2D1", // light blush
      "#FFE4E8", // delicate rose
      "#FDA4AF", // rose pastel
      "#A7CCA9", // soft sage petal
      "#FDE68A", // warm sparkle
    ];

    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      const rand = Math.random();
      const type: "petal" | "heart" | "sparkle" =
        rand < 0.7 ? "petal" : rand < 0.9 ? "heart" : "sparkle";

      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: type === "petal" ? Math.random() * 8 + 8 : type === "heart" ? Math.random() * 6 + 6 : Math.random() * 4 + 3,
        speedY: Math.random() * 0.8 + 0.4,
        speedX: Math.random() * 0.6 - 0.3,
        angle: Math.random() * Math.PI * 2,
        spinSpeed: (Math.random() - 0.5) * 0.02,
        swayFactor: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.45 + 0.35,
        type,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    let time = 0;

    const render = () => {
      time += 0.015;
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Motion physics: gentle downward drift with sinusoidal wind sway
        p.y += p.speedY;
        p.x += p.speedX + Math.sin(time + i) * 0.4 * p.swayFactor;
        p.angle += p.spinSpeed;

        // Wrap around viewport edges
        if (p.y > height + 20) {
          p.y = -20;
          p.x = Math.random() * width;
        }
        if (p.x > width + 20) p.x = -20;
        if (p.x < -20) p.x = width + 20;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.angle);
        ctx.globalAlpha = p.opacity;

        if (p.type === "petal") {
          // Draw soft sakura/rose petal
          ctx.beginPath();
          ctx.fillStyle = p.color;
          // Petal curve
          ctx.moveTo(0, -p.size);
          ctx.quadraticCurveTo(p.size * 0.8, -p.size * 0.3, 0, p.size);
          ctx.quadraticCurveTo(-p.size * 0.8, -p.size * 0.3, 0, -p.size);
          ctx.fill();

          // Subtle petal highlight
          ctx.strokeStyle = "rgba(255, 255, 255, 0.45)";
          ctx.lineWidth = 0.8;
          ctx.stroke();
        } else if (p.type === "heart") {
          // Draw tiny floating heart
          const s = p.size * 0.6;
          ctx.fillStyle = p.color;
          ctx.beginPath();
          ctx.moveTo(0, s * 0.3);
          ctx.bezierCurveTo(-s, -s * 0.7, -s * 1.5, s * 0.3, 0, s * 1.5);
          ctx.bezierCurveTo(s * 1.5, s * 0.3, s, -s * 0.7, 0, s * 0.3);
          ctx.fill();
        } else {
          // Draw sparkling star
          const s = p.size;
          ctx.fillStyle = p.color;
          ctx.beginPath();
          ctx.moveTo(0, -s);
          ctx.lineTo(s * 0.25, -s * 0.25);
          ctx.lineTo(s, 0);
          ctx.lineTo(s * 0.25, s * 0.25);
          ctx.lineTo(0, s);
          ctx.lineTo(-s * 0.25, s * 0.25);
          ctx.lineTo(-s, 0);
          ctx.lineTo(-s * 0.25, -s * 0.25);
          ctx.closePath();
          ctx.fill();
        }

        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [density]);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 pointer-events-none z-10 ${className}`}
      aria-hidden="true"
    />
  );
}
