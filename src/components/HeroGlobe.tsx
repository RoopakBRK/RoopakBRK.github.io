"use client";

import { useEffect, useRef } from "react";

// Skills pinned to the globe.
const LABELS = [
  "LLMs",
  "RAG",
  "Agents",
  "CompGCN",
  "Vision",
  "OCR",
  "Voice AI",
  "MLOps",
  "PyTorch",
  "LangGraph",
  "FastAPI",
  "Next.js",
  "LangChain",
  "Qdrant",
  "Groq",
  "Kubeflow",
  "MLflow",
  "Docker",
  "AWS",
  "TensorFlow",
  "PEFT",
  "LoRA",
  "Fine-tuning",
  "Mistral",
  "Twilio",
  "Deepgram",
  "NLP",
  "GNNs",
  "Multi-agent",
  "React",
  "PostgreSQL",
  "Scikit-Learn",
];

const POINTS = 760;
const GOLDEN = Math.PI * (3 - Math.sqrt(5));

type Vec = { x: number; y: number; z: number };

// Evenly spaced points on a unit sphere.
function fibonacciSphere(count: number): Vec[] {
  return Array.from({ length: count }, (_, i) => {
    const y = 1 - (i / (count - 1)) * 2;
    const r = Math.sqrt(1 - y * y);
    const theta = GOLDEN * i;
    return { x: Math.cos(theta) * r, y, z: Math.sin(theta) * r };
  });
}

const sphere = fibonacciSphere(POINTS);
// Labels get their own evenly spread positions, slightly outside the dots, so they never bunch up.
const labelPoints = fibonacciSphere(LABELS.length).map((p) => ({ x: p.x * 1.04, y: p.y * 1.04, z: p.z * 1.04 }));

function hexToRgb(hex: string): [number, number, number] {
  const h = hex.trim().replace("#", "");
  const n = parseInt(h.length === 3 ? h.replace(/./g, "$&$&") : h, 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

export function HeroGlobe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const scheme = window.matchMedia("(prefers-color-scheme: dark)");

    let colors = { a: [0, 0, 0], mid: [0, 0, 0], b: [0, 0, 0], ink: [0, 0, 0], font: "sans-serif" };
    const readColors = () => {
      const styles = getComputedStyle(document.documentElement);
      colors = {
        a: hexToRgb(styles.getPropertyValue("--grad-a")),
        mid: hexToRgb(styles.getPropertyValue("--grad-mid")),
        b: hexToRgb(styles.getPropertyValue("--grad-b")),
        ink: hexToRgb(styles.getPropertyValue("--ink")),
        font: getComputedStyle(document.body).fontFamily,
      };
    };
    readColors();
    scheme.addEventListener("change", readColors);

    let width = 0;
    let height = 0;
    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    const ro = new ResizeObserver(() => {
      resize();
      // Resizing clears the canvas; the animation loop redraws, a static globe must redraw here.
      if (reduceMotion) draw();
    });
    ro.observe(canvas);

    // Pointer tilts the globe; spin keeps it alive.
    let spin = 0.6;
    let tiltX = -0.35;
    let tiltY = 0;
    let targetX = -0.35;
    let targetY = 0;
    const onPointer = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      targetY = px * 0.9;
      targetX = -0.35 + py * 0.7;
    };
    const onLeave = () => {
      targetX = -0.35;
      targetY = 0;
    };
    window.addEventListener("pointermove", onPointer);
    canvas.addEventListener("pointerleave", onLeave);

    let visible = true;
    const io = new IntersectionObserver(([entry]) => (visible = entry.isIntersecting));
    io.observe(canvas);

    // Blue to violet across the left half, violet to pink across the right.
    const mix = (t: number, alpha: number) => {
      const [from, to, u] = t < 0.5 ? [colors.a, colors.mid, t * 2] : [colors.mid, colors.b, t * 2 - 1];
      const r = Math.round(from[0] + (to[0] - from[0]) * u);
      const g = Math.round(from[1] + (to[1] - from[1]) * u);
      const b = Math.round(from[2] + (to[2] - from[2]) * u);
      return `rgba(${r},${g},${b},${alpha})`;
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      const radius = Math.min(width, height) * 0.4;
      const cx = width / 2;
      const cy = height / 2;
      const ry = spin + tiltY;
      const cosY = Math.cos(ry);
      const sinY = Math.sin(ry);
      const cosX = Math.cos(tiltX);
      const sinX = Math.sin(tiltX);

      const project = (p: Vec) => {
        const x1 = p.x * cosY + p.z * sinY;
        const z1 = -p.x * sinY + p.z * cosY;
        const y2 = p.y * cosX - z1 * sinX;
        const z2 = p.y * sinX + z1 * cosX;
        const scale = 2.6 / (2.6 - z2);
        return { x: cx + x1 * radius * scale, y: cy + y2 * radius * scale, z: z2, scale };
      };

      for (const p of sphere) {
        const q = project(p);
        const depth = (q.z + 1) / 2; // 0 back, 1 front
        const t = Math.min(1, Math.max(0, (q.x - (cx - radius)) / (radius * 2)));
        ctx.fillStyle = mix(t, 0.12 + depth * 0.78);
        ctx.beginPath();
        ctx.arc(q.x, q.y, 0.6 + depth * 1.5 * q.scale, 0, Math.PI * 2);
        ctx.fill();
      }

      const fontSize = Math.max(11, Math.min(14, radius * 0.075));
      ctx.font = `500 ${fontSize}px ${colors.font}`;
      ctx.textBaseline = "middle";
      labelPoints.forEach((point, i) => {
        const q = project(point);
        const depth = (q.z + 1) / 2;
        // Only labels facing the viewer; ones near the rim crowd together.
        if (depth < 0.62) return;
        const alpha = Math.min(1, (depth - 0.62) / 0.25);
        const t = Math.min(1, Math.max(0, (q.x - (cx - radius)) / (radius * 2)));
        ctx.strokeStyle = mix(t, alpha);
        ctx.lineWidth = 1.25;
        ctx.beginPath();
        ctx.arc(q.x, q.y, 4.5, 0, Math.PI * 2);
        ctx.stroke();
        ctx.fillStyle = `rgba(${colors.ink[0]},${colors.ink[1]},${colors.ink[2]},${alpha})`;
        // Labels on the right half read inward so they never run off the canvas.
        const onRight = q.x > cx;
        ctx.textAlign = onRight ? "right" : "left";
        ctx.fillText(LABELS[i], onRight ? q.x - 9 : q.x + 9, q.y);
      });
    };

    let frame = 0;
    const tick = () => {
      if (visible) {
        spin += 0.0022;
        tiltX += (targetX - tiltX) * 0.05;
        tiltY += (targetY - tiltY) * 0.05;
        draw();
      }
      frame = requestAnimationFrame(tick);
    };

    if (reduceMotion) draw();
    else frame = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frame);
      ro.disconnect();
      io.disconnect();
      scheme.removeEventListener("change", readColors);
      window.removeEventListener("pointermove", onPointer);
      canvas.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return <canvas ref={canvasRef} className="h-full w-full" aria-hidden="true" />;
}
