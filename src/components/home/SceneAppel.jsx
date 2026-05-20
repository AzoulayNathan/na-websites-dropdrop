import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Underwater caustic light animation via Canvas
function CausticCanvas() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let frame;
    let t = 0;
    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      const { width, height } = canvas;
      ctx.clearRect(0, 0, width, height);

      // Caustic ripples
      for (let i = 0; i < 8; i++) {
        const x = (Math.sin(t * 0.3 + i * 1.3) * 0.35 + 0.5) * width;
        const y = (Math.cos(t * 0.2 + i * 0.9) * 0.35 + 0.5) * height;
        const r = 80 + Math.sin(t * 0.4 + i) * 30;
        const grd = ctx.createRadialGradient(x, y, 0, x, y, r);
        grd.addColorStop(0, `rgba(175,200,209,${0.04 + i * 0.005})`);
        grd.addColorStop(1, "rgba(175,200,209,0)");
        ctx.fillStyle = grd;
        ctx.beginPath();
        ctx.ellipse(x, y, r, r * 0.6, t * 0.05 + i, 0, Math.PI * 2);
        ctx.fill();
      }

      // Light shafts
      for (let s = 0; s < 4; s++) {
        const sx = (0.2 + s * 0.2 + Math.sin(t * 0.1 + s) * 0.04) * width;
        const shaftGrd = ctx.createLinearGradient(sx, 0, sx + 30, height);
        shaftGrd.addColorStop(0, `rgba(246,243,237,${0.035 + Math.sin(t * 0.15 + s) * 0.015})`);
        shaftGrd.addColorStop(1, "rgba(246,243,237,0)");
        ctx.fillStyle = shaftGrd;
        ctx.beginPath();
        ctx.moveTo(sx, 0);
        ctx.lineTo(sx + 20 + s * 5, 0);
        ctx.lineTo(sx + 60 + s * 8, height);
        ctx.lineTo(sx - 10, height);
        ctx.closePath();
        ctx.fill();
      }

      t += 0.016;
      frame = requestAnimationFrame(draw);
    };
    draw();
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
    };
  }, []);
  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />;
}

// Floating pouch SVG with mouse parallax
function FloatingPouch({ mouseX, mouseY }) {
  const rotX = (mouseY - 0.5) * -12;
  const rotY = (mouseX - 0.5) * 12;
  return (
    <motion.div
      style={{ rotateX: rotX, rotateY: rotY, transformStyle: "preserve-3d" }}
      animate={{ y: [0, -18, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      className="relative w-48 h-64 md:w-64 md:h-80"
    >
      <svg viewBox="0 0 200 280" className="w-full h-full drop-shadow-2xl" fill="none">
        {/* Shadow */}
        <ellipse cx="100" cy="268" rx="60" ry="8" fill="rgba(31,61,51,0.15)" />
        {/* Body */}
        <rect x="20" y="30" width="160" height="220" rx="28" fill="#1F3D33" opacity="0.92" />
        {/* TPU window shimmer */}
        <rect x="30" y="50" width="140" height="180" rx="20" fill="rgba(175,200,209,0.08)" />
        {/* Specular highlight */}
        <ellipse cx="60" cy="75" rx="22" ry="30" fill="rgba(246,243,237,0.07)" transform="rotate(-20 60 75)" />
        {/* Zip line */}
        <rect x="20" y="28" width="160" height="8" rx="4" fill="#3F5A4F" opacity="0.8" />
        <rect x="90" y="22" width="20" height="14" rx="4" fill="#AFC8D1" opacity="0.7" />
        {/* Fidlock clasp */}
        <circle cx="100" cy="18" r="6" fill="#AFC8D1" opacity="0.6" />
        <circle cx="100" cy="18" r="3" fill="rgba(31,61,51,0.6)" />
        {/* Strap */}
        <path d="M 60 30 Q 40 0 20 -20" stroke="#3F5A4F" strokeWidth="8" strokeLinecap="round" opacity="0.5" />
        <path d="M 140 30 Q 160 0 180 -20" stroke="#3F5A4F" strokeWidth="8" strokeLinecap="round" opacity="0.5" />
        {/* Material texture lines */}
        <line x1="30" y1="100" x2="170" y2="100" stroke="rgba(175,200,209,0.06)" strokeWidth="1" />
        <line x1="30" y1="140" x2="170" y2="140" stroke="rgba(175,200,209,0.06)" strokeWidth="1" />
        <line x1="30" y1="180" x2="170" y2="180" stroke="rgba(175,200,209,0.06)" strokeWidth="1" />
      </svg>

      {/* Bubbles */}
      {[
        { x: "110%", y: "60%", size: 8, dur: 4, delay: 0 },
        { x: "115%", y: "75%", size: 5, dur: 3.2, delay: 0.8 },
        { x: "108%", y: "45%", size: 6, dur: 5, delay: 1.5 },
        { x: "-15%", y: "50%", size: 7, dur: 4.5, delay: 0.3 },
        { x: "-10%", y: "70%", size: 4, dur: 3.8, delay: 1.1 },
      ].map((b, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full border border-sky-blue/40"
          style={{ left: b.x, top: b.y, width: b.size, height: b.size }}
          animate={{ y: [0, -60, -120], opacity: [0.6, 0.4, 0] }}
          transition={{ duration: b.dur, repeat: Infinity, delay: b.delay, ease: "easeOut" }}
        />
      ))}
    </motion.div>
  );
}

export default function SceneAppel() {
  const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 });

  const handleMouse = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMouse({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    });
  };

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden cursor-none"
      style={{ background: "linear-gradient(to bottom, #0E1E1A 0%, #1A2E28 40%, #1F3D33 100%)" }}
      onMouseMove={handleMouse}
    >
      <CausticCanvas />

      {/* Sand floor glow */}
      <div className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
        style={{ background: "linear-gradient(to top, rgba(232,223,201,0.08), transparent)" }} />

      {/* Brand mark */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="absolute top-10 left-1/2 -translate-x-1/2 font-body text-xs tracking-[0.35em] uppercase text-quartz/30"
      >
        DROPDROP
      </motion.p>

      {/* Central floating pouch */}
      <div className="relative z-10 flex flex-col items-center gap-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          style={{ perspective: 800 }}
        >
          <FloatingPouch mouseX={mouse.x} mouseY={mouse.y} />
        </motion.div>

        {/* Emotional headline */}
        <div className="text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="font-heading text-3xl md:text-5xl font-light text-quartz/90 leading-[1.15] mb-3"
          >
            Rien ne presse.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.3 }}
            className="font-heading text-xl md:text-2xl italic text-sky-blue/60 mb-10"
          >
            Tout est protégé.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/waitlist"
              className="font-body text-sm tracking-widest uppercase px-8 py-3.5 border border-quartz/20 text-quartz/70 hover:border-sky-blue/50 hover:text-quartz transition-all duration-500"
            >
              Choisir la Sérénité
            </Link>
            <Link
              to="/kit"
              className="font-body text-sm tracking-widest uppercase px-8 py-3.5 text-quartz/30 hover:text-quartz/60 transition-all duration-500"
            >
              Découvrir
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-body text-[10px] tracking-[0.3em] uppercase text-quartz/25">Scroll</span>
        <motion.div
          className="w-px h-10 bg-gradient-to-b from-quartz/20 to-transparent"
          animate={{ scaleY: [1, 0.3, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}