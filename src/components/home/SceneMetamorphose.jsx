import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PIECES = [
  {
    id: "crossbody",
    label: "Crossbody Pouch",
    tagline: "Votre téléphone contre vous. Toujours.",
    color: "#1F3D33",
    accent: "#AFC8D1",
    detail: "TPU mat · Zip étanche · Fidlock magnétique · Flottant",
    svgPath: (
      <svg viewBox="0 0 180 240" className="w-full h-full" fill="none">
        <rect x="20" y="30" width="140" height="195" rx="24" fill="#1F3D33" opacity="0.92" />
        <rect x="32" y="48" width="116" height="162" rx="16" fill="rgba(175,200,209,0.1)" />
        <ellipse cx="58" cy="78" rx="20" ry="28" fill="rgba(246,243,237,0.06)" transform="rotate(-15 58 78)" />
        <rect x="20" y="28" width="140" height="9" rx="4.5" fill="#3F5A4F" />
        <circle cx="90" cy="22" r="7" fill="#AFC8D1" opacity="0.7" />
        <circle cx="90" cy="22" r="3.5" fill="#1F3D33" opacity="0.6" />
        <path d="M 50 30 Q 30 5 15 -15" stroke="#3F5A4F" strokeWidth="9" strokeLinecap="round" opacity="0.5" />
        <path d="M 130 30 Q 150 5 165 -15" stroke="#3F5A4F" strokeWidth="9" strokeLinecap="round" opacity="0.5" />
      </svg>
    ),
    size: "lg",
  },
  {
    id: "valuables",
    label: "Valuables Pouch",
    tagline: "Cartes, clés, cash. Ensemble.",
    color: "#B5523B",
    accent: "#E8DFC9",
    detail: "Format portefeuille · Anti-RFID · Zip plat",
    svgPath: (
      <svg viewBox="0 0 160 110" className="w-full h-full" fill="none">
        <rect x="10" y="10" width="140" height="90" rx="16" fill="#B5523B" opacity="0.88" />
        <rect x="20" y="22" width="120" height="66" rx="10" fill="rgba(232,223,201,0.1)" />
        <rect x="10" y="8" width="140" height="8" rx="4" fill="#8B3D2A" opacity="0.7" />
        <line x1="10" y1="55" x2="150" y2="55" stroke="rgba(232,223,201,0.1)" strokeWidth="1" />
      </svg>
    ),
    size: "sm",
  },
  {
    id: "storage",
    label: "Wet/Dry Bag",
    tagline: "Mouillé dehors. Sec dedans.",
    color: "#AFC8D1",
    accent: "#1F3D33",
    detail: "Nylon balistique · Séparation wet/dry · Compressible",
    svgPath: (
      <svg viewBox="0 0 160 130" className="w-full h-full" fill="none">
        <rect x="10" y="15" width="140" height="105" rx="18" fill="#AFC8D1" opacity="0.85" />
        <rect x="20" y="28" width="120" height="80" rx="12" fill="rgba(31,61,51,0.08)" />
        <line x1="10" y1="68" x2="150" y2="68" stroke="rgba(31,61,51,0.15)" strokeWidth="1.5" strokeDasharray="6 4" />
        <rect x="10" y="13" width="140" height="9" rx="4.5" fill="#8BADB6" opacity="0.8" />
      </svg>
    ),
    size: "sm",
  },
  {
    id: "strap",
    label: "Crossbody Strap",
    tagline: "Ajustable. Mains libres.",
    color: "#3F5A4F",
    accent: "#E8DFC9",
    detail: "Longueur ajustable · Clip métal · Léger",
    svgPath: (
      <svg viewBox="0 0 200 80" className="w-full h-full" fill="none">
        <path d="M 20 40 Q 100 10 180 40 Q 100 70 20 40 Z" fill="#3F5A4F" opacity="0.7" />
        <rect x="5" y="33" width="24" height="14" rx="4" fill="#3F5A4F" opacity="0.9" />
        <rect x="171" y="33" width="24" height="14" rx="4" fill="#3F5A4F" opacity="0.9" />
        <circle cx="17" cy="40" r="4" fill="#AFC8D1" opacity="0.6" />
        <circle cx="183" cy="40" r="4" fill="#AFC8D1" opacity="0.6" />
      </svg>
    ),
    size: "xs",
  },
];

export default function SceneMetamorphose() {
  const [active, setActive] = useState(null);

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden py-24"
      style={{ background: "#F6F3ED" }}
    >
      {/* Driftwood texture suggestion */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: "repeating-linear-gradient(88deg, transparent, transparent 120px, rgba(201,194,178,0.06) 120px, rgba(201,194,178,0.06) 121px)",
      }} />

      <div className="relative z-10 max-w-5xl mx-auto px-6 w-full">
        {/* Section intro */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-body text-[10px] tracking-[0.25em] uppercase text-olive/40 mb-5"
          >
            Le système
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-heading text-4xl md:text-5xl font-light text-ink leading-tight"
          >
            Un objet silencieux.<br />
            <em className="not-italic text-sea-green/70">Plusieurs fonctions.</em>
          </motion.h2>
        </div>

        {/* Sculptural grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {PIECES.map((piece, i) => (
            <motion.div
              key={piece.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`relative group cursor-pointer ${piece.size === "lg" ? "col-span-2 row-span-2" : "col-span-1"}`}
              onClick={() => setActive(active === piece.id ? null : piece.id)}
            >
              <div
                className="relative h-full min-h-[160px] md:min-h-[200px] rounded-sm p-5 flex flex-col justify-between border transition-all duration-500 overflow-hidden"
                style={{
                  backgroundColor: active === piece.id ? "rgba(31,61,51,0.04)" : "rgba(246,243,237,0.8)",
                  borderColor: active === piece.id ? "rgba(31,61,51,0.2)" : "rgba(201,194,178,0.3)",
                }}
              >
                {/* Product illustration */}
                <div className={`${piece.size === "lg" ? "h-40 md:h-52" : "h-16 md:h-20"} flex items-center justify-center mb-4`}>
                  {piece.svgPath}
                </div>

                {/* Label */}
                <div>
                  <p className="font-heading text-base md:text-lg text-ink leading-snug mb-0.5">{piece.label}</p>
                  <p className="font-body text-xs text-foreground/40 leading-relaxed">{piece.tagline}</p>

                  {/* Detail on hover/tap */}
                  <AnimatePresence>
                    {active === piece.id && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="font-body text-xs text-sea-green/70 mt-3 leading-relaxed"
                      >
                        {piece.detail}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>

                {/* Tap indicator */}
                <div className="absolute top-4 right-4 w-5 h-5 flex items-center justify-center opacity-20 group-hover:opacity-50 transition-opacity">
                  <motion.div
                    className="w-3 h-3 border border-sea-green rounded-full"
                    animate={{ scale: active === piece.id ? 0.7 : 1 }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center font-body text-xs text-foreground/30 mt-10"
        >
          Touchez chaque pièce pour découvrir les matériaux.
        </motion.p>
      </div>
    </section>
  );
}