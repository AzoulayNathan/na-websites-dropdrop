import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function SceneSeparation() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Left (chaos) fades out as user scrolls
  const chaosOpacity = useTransform(scrollYProgress, [0.2, 0.6], [1, 0]);
  const chaosScale = useTransform(scrollYProgress, [0.2, 0.6], [1, 0.95]);
  // Right (calm) expands
  const calmFlex = useTransform(scrollYProgress, [0.2, 0.65], ["50%", "100%"]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "#F0EBE0" }}
    >
      {/* Left — Chaos */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        style={{ opacity: chaosOpacity, scale: chaosScale }}
      >
        <div className="w-full max-w-2xl mx-auto px-6 grid grid-cols-2 gap-0 min-h-screen">
          {/* Chaos side */}
          <div className="relative flex flex-col items-center justify-center px-6 py-16" style={{ background: "rgba(181,82,59,0.04)" }}>
            <div className="absolute inset-0" style={{
              backgroundImage: "radial-gradient(circle at 60% 40%, rgba(181,82,59,0.05) 0%, transparent 60%)"
            }} />
            {/* Sand grains */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="absolute rounded-full bg-salt/40"
                  style={{
                    width: Math.random() * 3 + 1,
                    height: Math.random() * 3 + 1,
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                />
              ))}
            </div>
            <p className="font-body text-[10px] tracking-[0.2em] uppercase text-terracotta/50 mb-10 z-10">Sans DROPDROP</p>
            {/* Phone on towel SVG */}
            <div className="z-10 relative">
              <svg viewBox="0 0 160 120" className="w-48 h-36" fill="none">
                {/* Towel */}
                <rect x="0" y="60" width="160" height="60" rx="4" fill="#E8DFC9" />
                <line x1="0" y1="75" x2="160" y2="75" stroke="#C9C2B2" strokeWidth="2" strokeDasharray="8 4" opacity="0.4" />
                <line x1="0" y1="90" x2="160" y2="90" stroke="#C9C2B2" strokeWidth="2" strokeDasharray="8 4" opacity="0.4" />
                {/* Phone */}
                <rect x="55" y="10" width="50" height="88" rx="8" fill="#1A1A18" opacity="0.85" />
                <rect x="60" y="16" width="40" height="66" rx="4" fill="#AFC8D1" opacity="0.2" />
                {/* Keys */}
                <circle cx="120" cy="80" r="8" fill="#C9C2B2" opacity="0.8" />
                <rect x="124" y="76" width="20" height="5" rx="2" fill="#C9C2B2" opacity="0.6" />
                {/* Sand */}
                {[...Array(8)].map((_, i) => (
                  <circle key={i} cx={20 + i * 18} cy={65 + (i % 3) * 5} r={1.5} fill="#C9C2B2" opacity="0.5" />
                ))}
              </svg>
              <p className="font-heading text-base text-foreground/40 text-center mt-3">Laissé là.</p>
            </div>
          </div>

          {/* Calm side */}
          <div className="relative flex flex-col items-center justify-center px-6 py-16" style={{ background: "rgba(175,200,209,0.07)" }}>
            <p className="font-body text-[10px] tracking-[0.2em] uppercase text-sky-blue/60 mb-10">Avec DROPDROP</p>
            <div className="relative">
              <svg viewBox="0 0 160 120" className="w-48 h-36" fill="none">
                {/* Pouch body */}
                <rect x="30" y="10" width="100" height="100" rx="20" fill="#1F3D33" opacity="0.9" />
                {/* Window */}
                <rect x="40" y="22" width="80" height="76" rx="14" fill="rgba(175,200,209,0.12)" />
                {/* Phone visible inside */}
                <rect x="52" y="32" width="56" height="56" rx="6" fill="#1A1A18" opacity="0.5" />
                {/* Zip */}
                <rect x="30" y="8" width="100" height="6" rx="3" fill="#3F5A4F" opacity="0.8" />
                {/* Blur aura */}
                <ellipse cx="80" cy="60" rx="55" ry="45" fill="rgba(175,200,209,0.05)" />
              </svg>
              <p className="font-heading text-base text-sea-green/70 text-center mt-3">Avec vous.</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Narrative text overlay */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pointer-events-none">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-heading text-3xl md:text-5xl font-light text-ink leading-[1.1] mb-5"
        >
          L'eau ne devrait pas<br />
          <em className="not-italic text-sea-green/70">être une frontière.</em>
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-body text-base text-foreground/40 max-w-sm mx-auto leading-relaxed"
        >
          Vos affaires restent avec vous. Pas sur une serviette.
        </motion.p>
      </div>
    </section>
  );
}