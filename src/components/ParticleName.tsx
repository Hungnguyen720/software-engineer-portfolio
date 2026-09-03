import { useEffect, useRef } from 'react';

interface Particle {
  x: number; y: number;   // current
  vx: number; vy: number; // velocity
  tx: number; ty: number; // target (a pixel of the text)
  color: string;
  size: number;
}

const CHALK = '#F4F1EA';
const AMBER = '#F5B731';
const RED = '#E3362B';
const FONT = '800 1px "Barlow Condensed", "Arial Narrow", sans-serif';

/**
 * The name, rendered as particles that assemble from noise, flee the cursor,
 * and burst apart on click. Falls back to plain text for reduced motion.
 */
export default function ParticleName({ lines }: { lines: string[] }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    if (!wrap || !canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const coarse = window.matchMedia('(pointer: coarse)').matches;

    let W = 0; let H = 0; let dpr = 1; let fontSize = 0; let lineGap = 0;
    let particles: Particle[] = [];
    let raf = 0;
    let disposed = false;
    const mouse = { x: -9999, y: -9999, active: false };
    let burst = 0; // frames of scatter left

    /** Fit the font so the widest line spans the canvas width. */
    const fitFont = () => {
      ctx.font = FONT;
      const widest = Math.max(...lines.map((l) => ctx.measureText(l).width)); // width at 1px
      fontSize = Math.min(165, Math.floor((W * 0.98) / widest));
      lineGap = fontSize * 0.88;
      H = Math.ceil(lineGap * lines.length + fontSize * 0.1);
    };

    const layout = () => {
      W = wrap.clientWidth;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      fitFont();
      canvas.width = W * dpr; canvas.height = H * dpr;
      canvas.style.height = `${H}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const drawText = (target: CanvasRenderingContext2D) => {
      target.font = `800 ${fontSize}px "Barlow Condensed", "Arial Narrow", sans-serif`;
      target.textBaseline = 'alphabetic';
      target.fillStyle = CHALK;
      lines.forEach((l, i) => target.fillText(l.toUpperCase(), 0, lineGap * (i + 1) - fontSize * 0.02));
    };

    /** Sample the rendered text into target points. */
    const sampleTargets = (): { x: number; y: number }[] => {
      const off = document.createElement('canvas');
      off.width = W; off.height = H;
      const octx = off.getContext('2d')!;
      drawText(octx);
      const data = octx.getImageData(0, 0, W, H).data;
      const step = coarse ? 4 : 3;
      const pts: { x: number; y: number }[] = [];
      for (let y = 0; y < H; y += step) {
        for (let x = 0; x < W; x += step) {
          if (data[(y * W + x) * 4 + 3] > 128) pts.push({ x, y });
        }
      }
      return pts;
    };

    const pick = () => {
      const r = Math.random();
      return r < 0.02 ? RED : r < 0.07 ? AMBER : CHALK;
    };

    const build = (first: boolean) => {
      const targets = sampleTargets();
      const next: Particle[] = targets.map((t, i) => {
        const prev = particles[i];
        return {
          x: prev ? prev.x : Math.random() * W,
          y: prev ? prev.y : (first ? H + Math.random() * H : Math.random() * H),
          vx: prev ? prev.vx : (Math.random() - 0.5) * 6,
          vy: prev ? prev.vy : (Math.random() - 0.5) * 6,
          tx: t.x, ty: t.y,
          color: prev ? prev.color : pick(),
          size: prev ? prev.size : (coarse ? 3.4 : 2.6) + Math.random() * 0.4,
        };
      });
      particles = next;
    };

    const frame = () => {
      if (disposed) return;
      ctx.clearRect(0, 0, W, H);
      const radius = coarse ? 70 : 90;
      const r2 = radius * radius;
      const scatter = burst > 0;
      if (scatter) burst--;

      for (const p of particles) {
        // spring toward target
        const dx = p.tx - p.x; const dy = p.ty - p.y;
        p.vx += dx * 0.045; p.vy += dy * 0.045;

        // cursor repulsion
        if (mouse.active) {
          const mx = p.x - mouse.x; const my = p.y - mouse.y;
          const d2 = mx * mx + my * my;
          if (d2 < r2 && d2 > 0.01) {
            const d = Math.sqrt(d2);
            const f = (1 - d / radius) * 9;
            p.vx += (mx / d) * f; p.vy += (my / d) * f;
          }
        }
        if (scatter) {
          p.vx += (Math.random() - 0.5) * 22;
          p.vy += (Math.random() - 0.5) * 22;
        }

        p.vx *= 0.82; p.vy *= 0.82;   // damping
        p.x += p.vx; p.y += p.vy;

        ctx.fillStyle = p.color;
        ctx.fillRect(p.x, p.y, p.size, p.size);
      }
      raf = requestAnimationFrame(frame);
    };

    const onMove = (e: PointerEvent) => {
      const r = canvas.getBoundingClientRect();
      mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top; mouse.active = true;
    };
    const onLeave = () => { mouse.active = false; };
    const onClick = () => { burst = 6; };

    let resizeTimer = 0;
    const onResize = () => {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(() => { layout(); reduce ? drawText(ctx) : build(false); }, 120);
    };

    const start = async () => {
      try { await document.fonts.ready; } catch { /* fall back to system font */ }
      if (disposed) return;
      layout();
      if (reduce) { drawText(ctx); return; }
      build(true);
      canvas.addEventListener('pointermove', onMove);
      canvas.addEventListener('pointerleave', onLeave);
      canvas.addEventListener('click', onClick);
      raf = requestAnimationFrame(frame);
    };

    window.addEventListener('resize', onResize);
    start();

    return () => {
      disposed = true;
      cancelAnimationFrame(raf);
      window.clearTimeout(resizeTimer);
      window.removeEventListener('resize', onResize);
      canvas.removeEventListener('pointermove', onMove);
      canvas.removeEventListener('pointerleave', onLeave);
      canvas.removeEventListener('click', onClick);
    };
  }, [lines]);

  return (
    <div className="particle-name" ref={wrapRef}>
      <h1 className="sr">{lines.join(' ')}</h1>
      <canvas ref={canvasRef} aria-hidden="true" />
    </div>
  );
}
