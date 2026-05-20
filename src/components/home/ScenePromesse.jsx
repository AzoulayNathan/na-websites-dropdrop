import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import WaitlistForm from "@/components/brand/WaitlistForm";

// Sunset horizon SVG
function SunsetHorizon() {
  return (
    <svg
      viewBox="0 0 1440 400"
      className="absolute inset-0 w-full h-full"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
    >
      {/* Sky gradient stops */}
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1A1A18" />
          <stop offset="45%" stopColor="#2D1F10" />
          <stop offset="70%" stopColor="#B5523B" stopOpacity="0.6" />
          <stop offset="85%" stopColor="#E8DFC9" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#AFC8D1" stopOpacity="0.2" />
        </linearGradient>
        <radialGradient id="sun" cx="50%" cy="75%" r="25%">
          <stop offset="0%" stopColor="#E8DFC9" stopOpacity="0.25" />
          <stop offset="60%" stopColor="#B5523B" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#B5523B" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="1440" height="400" fill="url(#sky)" />
      <rect width="1440" height="400" fill="url(#sun)" />
      {/* Horizon line */}
      <line x1="0" y1="310" x2="1440" y2="310" stroke="rgba(175,200,209,0.15)" strokeWidth="1" />
      {/* Water reflections */}
      {[...Array(8)].map((_, i) => (
        <rect
          key={i}
          x={i * 190 - 40}
          y={315}
          width={80 + i * 10}
          height={3}
          rx={1.5}
          fill={`rgba(181,82,59,${0.06 - i * 0.005})`}
        />
      ))}
      {/* Distant silhouette */}
      <ellipse cx="720" cy="310" rx="3" ry="18" fill="#1A1A18" opacity="0.5" />
    </svg>
  );
}

export default function ScenePromesse() {
  const [showForm, setShowForm] = useState(false);

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: "#1A1A18" }}
    >
      <SunsetHorizon />

      {/* Atmospheric grain */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E\")",
        opacity: 0.4,
      }} />

      <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
        {!showForm ? (
          <>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="font-body text-[10px] tracking-[0.3em] uppercase text-quartz/25 mb-12"
            >
              La promesse tenue
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="font-heading text-4xl md:text-6xl font-light text-quartz/85 leading-[1.1] mb-6"
            >
              Entrez dans l'eau.<br />
              <em className="not-italic" style={{ color: "rgba(175,200,209,0.7)" }}>
                Enfin libres.
              </em>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-heading text-lg md:text-xl italic text-quartz/25 mb-14"
            >
              "Un objet silencieux. Une absence d'inquiétude."
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="flex flex-col items-center gap-5"
            >
              {/* THE CTA — emotional, not transactional */}
              <button
                onClick={() => setShowForm(true)}
                className="group relative font-body text-sm tracking-[0.25em] uppercase px-10 py-4 border border-quartz/20 text-quartz/60 hover:border-sky-blue/40 hover:text-quartz/90 transition-all duration-700 overflow-hidden"
              >
                <span className="relative z-10">[ Choisir la Sérénité ]</span>
                <div className="absolute inset-0 bg-sky-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </button>
              <Link
                to="/kit"
                className="font-body text-xs tracking-widest uppercase text-quartz/20 hover:text-quartz/40 transition-colors duration-500"
              >
                Explorer le kit d'abord
              </Link>
            </motion.div>
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-body text-[10px] tracking-[0.3em] uppercase text-quartz/25 mb-8">Votre place dans le premier drop</p>
            <div className="border border-quartz/10 rounded-sm p-8" style={{ backgroundColor: "rgba(246,243,237,0.05)" }}>
              <WaitlistForm source="scene_promesse" />
            </div>
            <button
              onClick={() => setShowForm(false)}
              className="mt-6 font-body text-xs text-quartz/20 hover:text-quartz/40 transition-colors"
            >
              ← Revenir
            </button>
          </motion.div>
        )}
      </div>

      {/* Bottom waterline */}
      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: "linear-gradient(to right, transparent, rgba(175,200,209,0.2), transparent)" }} />
    </section>
  );
}