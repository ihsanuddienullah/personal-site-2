import { useEffect, useRef } from 'react';

type Point3D = { lat: number; lon: number; size: number };

const points: Point3D[] = Array.from({ length: 42 }, (_, i) => ({
  lat: -68 + ((i * 37) % 136),
  lon: (i * 83) % 360,
  size: 1.4 + (i % 4) * 0.45,
}));

const WireframeGlobe = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let frame = 0;
    let rotation = 0;

    const project = (latDeg: number, lonDeg: number, radius: number, cx: number, cy: number) => {
      const lat = latDeg * Math.PI / 180;
      const lon = lonDeg * Math.PI / 180 + rotation;
      const cosLat = Math.cos(lat);
      return { x: cx + radius * cosLat * Math.cos(lon), y: cy + radius * Math.sin(lat), z: cosLat * Math.sin(lon) };
    };

    const drawCurve = (samples: Array<{ x: number; y: number; z: number }>, front: boolean) => {
      ctx.beginPath();
      let drawing = false;
      samples.forEach((p) => {
        const visible = front ? p.z >= -0.03 : p.z < 0;
        if (!visible) { drawing = false; return; }
        if (!drawing) ctx.moveTo(p.x, p.y); else ctx.lineTo(p.x, p.y);
        drawing = true;
      });
      ctx.strokeStyle = front ? 'rgba(70, 232, 255, .58)' : 'rgba(49, 135, 171, .12)';
      ctx.lineWidth = front ? 1 : .65;
      ctx.stroke();
    };

    const render = () => {
      const bounds = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      if (canvas.width !== bounds.width * dpr || canvas.height !== bounds.height * dpr) {
        canvas.width = bounds.width * dpr; canvas.height = bounds.height * dpr;
      }
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, bounds.width, bounds.height);
      const cx = bounds.width / 2;
      const cy = bounds.height / 2;
      const radius = Math.min(bounds.width, bounds.height) * .405;

      const glow = ctx.createRadialGradient(cx, cy, radius * .15, cx, cy, radius * 1.25);
      glow.addColorStop(0, 'rgba(20, 155, 210, .09)'); glow.addColorStop(.7, 'rgba(7, 82, 135, .05)'); glow.addColorStop(1, 'transparent');
      ctx.fillStyle = glow; ctx.fillRect(cx - radius * 1.35, cy - radius * 1.35, radius * 2.7, radius * 2.7);

      for (const front of [false, true]) {
        for (let lat = -75; lat <= 75; lat += 15) drawCurve(Array.from({ length: 145 }, (_, i) => project(lat, i * 2.5, radius, cx, cy)), front);
        for (let lon = 0; lon < 360; lon += 15) drawCurve(Array.from({ length: 121 }, (_, i) => project(-90 + i * 1.5, lon, radius, cx, cy)), front);
      }

      ctx.strokeStyle = 'rgba(89, 237, 255, .72)'; ctx.lineWidth = 1.2; ctx.beginPath(); ctx.arc(cx, cy, radius, 0, Math.PI * 2); ctx.stroke();
      points.forEach((point) => {
        const p = project(point.lat, point.lon, radius, cx, cy);
        if (p.z < 0) return;
        const alpha = .35 + p.z * .65;
        ctx.beginPath(); ctx.fillStyle = `rgba(150, 247, 255, ${alpha})`; ctx.shadowColor = '#35dcff'; ctx.shadowBlur = 11;
        ctx.arc(p.x, p.y, point.size, 0, Math.PI * 2); ctx.fill(); ctx.shadowBlur = 0;
      });
      if (!reduceMotion) rotation += .0022;
      frame = requestAnimationFrame(render);
    };
    render();
    return () => cancelAnimationFrame(frame);
  }, []);

  return <canvas ref={canvasRef} className="h-full w-full" role="img" aria-label="Rotating cyan wireframe globe with data points" />;
};

export default WireframeGlobe;
