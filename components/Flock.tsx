"use client";

import { useEffect, useRef } from "react";

// Tuned on a 1440×900 desktop; other screens scale from this
const REFERENCE_AREA = 1440 * 900;
const BIRD_COUNT = 500;
const MIN_SPEED = 1.4;        // speeds and distances are at the reference size
const MAX_SPEED = 2.6;
const VIEW_RADIUS = 70;       // how far a bird can see its flockmates
const SEPARATION_RADIUS = 22; // personal space
const EDGE_MARGIN = 90;       // start turning back this close to the edge
const OPACITY = 0.12;
const WIND_STRENGTH = 0;  // keep below ~0.12 or birds pile up at the edges

type Bird = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  phase: number;     // where it is in its wingbeat
  flapSpeed: number;
  size: number;
};

export default function Flock() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    // Keep the canvas matched to the window, sharp on retina screens
    let width = 0;
    let height = 0;
    let scale = 1;
    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      // Sizes, distances and speeds are lengths, so they scale with the square root of area
      scale = Math.sqrt((width * height) / REFERENCE_AREA);
    };
    resize();
    window.addEventListener("resize", resize);

    // Paint birds in the theme's gold, and follow light/dark mode changes
    let color = "";
    const readColor = () => {
      color = getComputedStyle(document.documentElement).getPropertyValue("--accent").trim();
    };
    readColor();
    const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");
    darkQuery.addEventListener("change", readColor);

    const birds: Bird[] = Array.from({ length: BIRD_COUNT }, () => {
      const angle = Math.random() * Math.PI * 2;
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        vx: Math.cos(angle) * MIN_SPEED * scale,
        vy: Math.sin(angle) * MIN_SPEED * scale,
        phase: Math.random() * Math.PI * 2,
        flapSpeed: 0.15 + Math.random() * 0.1,
        size: 5 + Math.random() * 4,
      };
    });

    const update = (t: number, dt: number) => {
      // A slowly shifting wind, plus faster gusts on top, pushes the whole flock around
      const windX = (Math.sin(t * 0.0003) + 0.5 * Math.sin(t * 0.0017)) * WIND_STRENGTH;
      const windY = (Math.cos(t * 0.00021) + 0.5 * Math.cos(t * 0.0013)) * WIND_STRENGTH * 0.7;
      const view = VIEW_RADIUS * scale;
      const separation = SEPARATION_RADIUS * scale;
      const margin = EDGE_MARGIN * scale;

      for (const b of birds) {
        let ax = windX;
        let ay = windY;
        let cx = 0, cy = 0, avx = 0, avy = 0, neighbors = 0;

        for (const o of birds) {
          if (o === b) continue;
          const dx = o.x - b.x;
          const dy = o.y - b.y;
          const d2 = dx * dx + dy * dy;
          if (d2 > view * view) continue;

          cx += o.x;
          cy += o.y;
          avx += o.vx;
          avy += o.vy;
          neighbors++;

          // Separation: push away from birds that are too close
          // (the push grows as distances shrink, so scale² keeps it in proportion)
          if (d2 > 0 && d2 < separation * separation) {
            ax -= (dx / d2) * 3 * scale * scale;
            ay -= (dy / d2) * 3 * scale * scale;
          }
        }

        if (neighbors > 0) {
          // Cohesion: drift toward the center of nearby birds
          ax += (cx / neighbors - b.x) * 0.0008;
          ay += (cy / neighbors - b.y) * 0.0008;
          // Alignment: match nearby birds' heading
          ax += (avx / neighbors - b.vx) * 0.05;
          ay += (avy / neighbors - b.vy) * 0.05;
        }

        // Turn back before reaching the edges
        if (b.x < margin) ax += (margin - b.x) * 0.002;
        if (b.x > width - margin) ax -= (b.x - (width - margin)) * 0.002;
        if (b.y < margin) ay += (margin - b.y) * 0.002;
        if (b.y > height - margin) ay -= (b.y - (height - margin)) * 0.002;

        b.vx += ax * dt;
        b.vy += ay * dt;

        // Keep speed within a natural range
        const speed = Math.hypot(b.vx, b.vy);
        const clamped = Math.min(MAX_SPEED * scale, Math.max(MIN_SPEED * scale, speed));
        b.vx = (b.vx / speed) * clamped;
        b.vy = (b.vy / speed) * clamped;

        b.x += b.vx * dt;
        b.y += b.vy * dt;

        // Hard walls as a safety net, so no bird ever leaves the screen
        if (b.x < 0 || b.x > width) {
          b.vx *= -1;
          b.x = Math.min(width, Math.max(0, b.x));
        }
        if (b.y < 0 || b.y > height) {
          b.vy *= -1;
          b.y = Math.min(height, Math.max(0, b.y));
        }

        b.phase += b.flapSpeed * dt;
      }
    };

    // A top-down bird silhouette pointing along +x; wing span follows the wingbeat
    const drawBird = (b: Bird) => {
      const s = b.size * scale;
      const span = s * (0.7 + 0.5 * Math.sin(b.phase));

      ctx.save();
      ctx.translate(b.x, b.y);
      ctx.rotate(Math.atan2(b.vy, b.vx));
      ctx.beginPath();
      ctx.moveTo(s * 0.9, 0);
      ctx.quadraticCurveTo(s * 0.2, -span * 0.5, -s * 0.3, -span);
      ctx.lineTo(-s * 0.5, -s * 0.1);
      ctx.lineTo(-s * 0.9, 0);
      ctx.lineTo(-s * 0.5, s * 0.1);
      ctx.lineTo(-s * 0.3, span);
      ctx.quadraticCurveTo(s * 0.2, span * 0.5, s * 0.9, 0);
      ctx.fill();
      ctx.restore();
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = color;
      ctx.globalAlpha = OPACITY;
      birds.forEach(drawBird);
    };

    // Respect "reduce motion": show a still flock instead of animating
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      draw();
      return () => {
        window.removeEventListener("resize", resize);
        darkQuery.removeEventListener("change", readColor);
      };
    }

    let frame = 0;
    let last = performance.now();
    const loop = (t: number) => {
      // dt keeps speed the same on 60Hz and 120Hz screens
      const dt = Math.min((t - last) / 16.67, 3);
      last = t;
      update(t, dt);
      draw();
      frame = requestAnimationFrame(loop);
    };
    frame = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      darkQuery.removeEventListener("change", readColor);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 h-full w-full"
    />
  );
}
