import React, { useRef, useEffect, useState } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";

function PouchSilhouette({ className = "" }) {
  return (
    <svg viewBox="0 0 200 260" className={className} fill="none" aria-hidden="true">
      <rect x="20" y="50" width="160" height="190" rx="20" fill="#1F3D33" opacity="0.9" />
      <rect x="15" y="40" width="170" height="22" rx="11" fill="#3F5A4F" />
      <rect x="80" y="44" width="40" height="14" rx="7" fill="#AFC8D1" opacity="0.6" />
      <rect x="40" y="80" width="120" height="140" rx="10" fill="none" stroke="#AFC8D1" strokeWidth="1.5" opacity="0.3" />
      <circle cx="100" cy="220" r="4" fill="#AFC8D1" opacity="0.2" />
      <ellipse cx="100" cy="155" rx="45" ry="8" fill="#AFC8D1" opacity="0.08" />
      <rect x="35" y="70" width="8" height="60" rx="4" fill="white" opacity="0.06" />
      <rect x="20" y="224" width="160" height="2" rx="1" fill="#AFC8D1" opacity="0.15" />
    </svg>
  );
}

function StrapCurve({ className = "" }) {
  return (
    <svg viewBox="0 0 300 120" className={className} fill="none" aria-hidden="true">
      <path
        d="M 10 100 Q 80 10 150 50 Q 220 90 290 20"
        stroke="#3F5A4F"
        strokeWidth="12"
        strokeLinecap="round"
        fill="none"
        opacity="0.8"
      />
      <path
        d="M 10 100 Q 80 10 150 50 Q 220 90 290 20"
        stroke="#AFC8D1"
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray="8 16"
        fill="none"
        opacity="0.4"
      />
    </svg>
  );
}

function ValuablesPouch({ className = "" }) {
  return (
    <svg viewBox="0 0 120 100" className={className} fill="none" aria-hidden="true">
      <rect x="5" y="20" width="110" height="75" rx="14" fill="#B5523B" opacity="0.75" />
      <rect x="5" y="15" width="110" height="16" rx="8" fill="#3F5A4F" opacity="0.9" />
      <rect x="45" y="17" width="30" height="12" rx="6" fill="#AFC8D1" opacity="0.5" />
      <rect x="20" y="40" width="35" height="4" rx="2" fill="white" opacity="0.12" />
      <rect x="20" y="52" width="55" height="4" rx="2" fill="white" opacity="0.08" />
    </svg>
  );
}

export default function ProductMockup3D({ className = "" }) {
  const containerRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const [isMobile, setIsMobile] = useState(true);

  const rotateX = useTransform(y, [-150, 150], [10, -10]);
  const rotateY = useTransform(x, [-150, 150], [-10, 10]);

  const springRotateX = useSpring(rotateX, { stiffness: 50, damping: 18 });
  const springRotateY = useSpring(rotateY, { stiffness: 50, damping: 18 });

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const handleMouseMove = (e) => {
    if (isMobile || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    x.set(e.clientX - cx);
    y.set(e.clientY - cy);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative select-none ${className}`}
      style={{ perspective: "800px" }}
    >
      <motion.div
        style={{
          rotateX: isMobile ? 0 : springRotateX,
          rotateY: isMobile ? 0 : springRotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative w-full h-full"
      >
        {/* Shadow base */}
        <motion.div
          className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-6 rounded-full blur-xl"
          style={{ backgroundColor: "rgba(26,26,24,0.1)" }}
          animate={{ scaleX: [1, 1.06, 1], opacity: [0.4, 0.65, 0.4] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Strap curve */}
        <motion.div
          className="absolute -top-6 -left-6 w-44 opacity-60"
          animate={{ rotate: [-2, 2, -2] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <StrapCurve />
        </motion.div>

        {/* Main pouch */}
        <motion.div
          className="relative z-20 w-40 mx-auto"
          animate={{ y: [-6, 6, -6] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <PouchSilhouette />
        </motion.div>

        {/* Valuables pouch */}
        <motion.div
          className="absolute bottom-4 -right-2 w-20 z-10"
          animate={{ y: [-3, 3, -3], rotate: [-3, 3, -3] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        >
          <ValuablesPouch />
        </motion.div>

        {/* Protection halo */}
        <motion.div
          className="absolute inset-0 rounded-full border border-sky-blue/20 pointer-events-none"
          animate={{ scale: [0.95, 1.02, 0.95], opacity: [0.25, 0.55, 0.25] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Water shimmer */}
        <motion.div
          className="absolute top-1/3 left-1/4 w-2/3 h-1/3 rounded-full blur-2xl pointer-events-none"
          style={{ backgroundColor: "rgba(175,200,209,0.08)" }}
          animate={{ opacity: [0.15, 0.45, 0.15], scale: [0.8, 1, 0.8] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </motion.div>
    </div>
  );
}