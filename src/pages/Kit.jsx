import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { BRAND, KIT_ITEMS, VALIDATION_CHECKLIST } from "@/lib/brand";

// Real Unsplash photos — water / beach / product context
const HERO_IMG = "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&q=80&fit=crop"; // beach water
const UNDERWATER_IMG = "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&q=80&fit=crop"; // underwater
const BEACH_HAND_IMG = "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=900&q=80&fit=crop"; // hand beach
const POOL_IMG = "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=900&q=80&fit=crop"; // pool aerial
const BOAT_IMG = "https://images.unsplash.com/photo-1518399104258-d9a43f7f87b5?w=900&q=80&fit=crop"; // boat water

const KIT_VISUALS = [
  {
    id: "crossbody",
    name: "Waterproof Phone Pouch",
    tagline: "Votre téléphone avec vous. Toujours.",
    benefit: "La coque TPU mat protège. Le zip étanche tient. Vous oubliez que vous le portez.",
    validation: "Large phone compatibility — key selection criterion.",
    color: "#1F3D33",
    svgEl: (
      <svg viewBox="0 0 160 220" className="w-full h-full" fill="none">
        <rect x="10" y="20" width="140" height="190" rx="24" fill="#1F3D33" opacity="0.93" />
        <rect x="22" y="36" width="116" height="158" rx="16" fill="rgba(175,200,209,0.1)" />
        <ellipse cx="52" cy="68" rx="18" ry="26" fill="rgba(246,243,237,0.06)" transform="rotate(-15 52 68)" />
        <rect x="10" y="18" width="140" height="9" rx="4.5" fill="#3F5A4F" />
        <circle cx="80" cy="13" r="7" fill="#AFC8D1" opacity="0.7" />
        <circle cx="80" cy="13" r="3.5" fill="#1F3D33" opacity="0.6" />
        <path d="M 45 20 Q 25 -5 12 -22" stroke="#3F5A4F" strokeWidth="9" strokeLinecap="round" opacity="0.5" />
        <path d="M 115 20 Q 135 -5 148 -22" stroke="#3F5A4F" strokeWidth="9" strokeLinecap="round" opacity="0.5" />
        <line x1="22" y1="100" x2="138" y2="100" stroke="rgba(175,200,209,0.08)" strokeWidth="1" />
        <line x1="22" y1="140" x2="138" y2="140" stroke="rgba(175,200,209,0.08)" strokeWidth="1" />
      </svg>
    ),
  },
  {
    id: "strap",
    name: "Adjustable Crossbody Strap",
    tagline: "Mains libres. Regard libre.",
    benefit: "S'ajuste en une seconde. Reste en place dans l'eau. Se retire d'un clip.",
    validation: "Strap comfort and pull strength under validation.",
    color: "#3F5A4F",
    svgEl: (
      <svg viewBox="0 0 200 90" className="w-full h-full" fill="none">
        <path d="M 20 45 Q 100 12 180 45 Q 100 78 20 45 Z" fill="#3F5A4F" opacity="0.75" />
        <rect x="4" y="36" width="26" height="18" rx="5" fill="#3F5A4F" />
        <rect x="170" y="36" width="26" height="18" rx="5" fill="#3F5A4F" />
        <circle cx="17" cy="45" r="5" fill="#AFC8D1" opacity="0.65" />
        <circle cx="183" cy="45" r="5" fill="#AFC8D1" opacity="0.65" />
        <line x1="50" y1="32" x2="150" y2="32" stroke="rgba(175,200,209,0.2)" strokeWidth="1" strokeDasharray="6 5" />
      </svg>
    ),
  },
  {
    id: "valuables",
    name: "Valuables / Wet-Dry Pouch",
    tagline: "Cartes, clés, cash. Séparés du mouillé.",
    benefit: "Un compartiment sec, un compartiment humide. Tout dans une seule poche compacte.",
    validation: "Closure reliability testing in progress.",
    color: "#B5523B",
    svgEl: (
      <svg viewBox="0 0 160 120" className="w-full h-full" fill="none">
        <rect x="8" y="12" width="144" height="96" rx="18" fill="#B5523B" opacity="0.88" />
        <rect x="20" y="26" width="120" height="70" rx="11" fill="rgba(232,223,201,0.1)" />
        <rect x="8" y="10" width="144" height="9" rx="4.5" fill="#8B3D2A" opacity="0.7" />
        <line x1="8" y1="60" x2="152" y2="60" stroke="rgba(232,223,201,0.12)" strokeWidth="1.5" strokeDasharray="7 5" />
        <circle cx="80" cy="7" r="5" fill="#E8DFC9" opacity="0.5" />
      </svg>
    ),
  },
  {
    id: "storage",
    name: "Travel Storage Pouch",
    tagline: "Le kit rangé. Toujours prêt.",
    benefit: "Garde le kit ensemble entre les sessions. Compressible, ne prend pas de place.",
    validation: null,
    color: "#AFC8D1",
    svgEl: (
      <svg viewBox="0 0 160 130" className="w-full h-full" fill="none">
        <rect x="8" y="14" width="144" height="108" rx="20" fill="#AFC8D1" opacity="0.85" />
        <rect x="20" y="28" width="120" height="82" rx="13" fill="rgba(31,61,51,0.08)" />
        <line x1="8" y1="70" x2="152" y2="70" stroke="rgba(31,61,51,0.12)" strokeWidth="1.5" strokeDasharray="7 5" />
        <rect x="8" y="12" width="144" height="9" rx="4.5" fill="#8BADB6" opacity="0.75" />
      </svg>
    ),
  },
  {
    id: "testcard",
    name: "Pre-Use Test Card",
    tagline: "Tester avant le premier plongeon.",
    benefit: "Un rappel simple pour vérifier l'étanchéité avant la première utilisation.",
    validation: "Final instructions will ship with the product.",
    color: "#E8DFC9",
    svgEl: (
      <svg viewBox="0 0 160 100" className="w-full h-full" fill="none">
        <rect x="8" y="8" width="144" height="84" rx="12" fill="#E8DFC9" opacity="0.9" stroke="#C9C2B2" strokeWidth="1" />
        <rect x="20" y="22" width="50" height="6" rx="3" fill="#C9C2B2" opacity="0.5" />
        <rect x="20" y="35" width="80" height="4" rx="2" fill="#C9C2B2" opacity="0.3" />
        <rect x="20" y="46" width="60" height="4" rx="2" fill="#C9C2B2" opacity="0.3" />
        <circle cx="130" cy="55" r="16" fill="#1F3D33" opacity="0.08" />
        <path d="M 122 55 L 128 61 L 138 49" stroke="#1F3D33" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.4" />
      </svg>
    ),
  },
];

const SCENARIOS = [
  { label: "Plage", img: BEACH_HAND_IMG, copy: "Nager sans regarder en arrière." },
  { label: "Piscine", img: POOL_IMG, copy: "Mains libres. Journée libre." },
  { label: "Bateau", img: BOAT_IMG, copy: "Du ponton à l'eau. Rien ne se perd." },
];

export default function Kit() {
  const [activeItem, setActiveItem] = useState(null);

  return (
    <div style={{ background: "#0E1E1A" }} className="min-h-screen">

      {/* ── HERO — full bleed underwater ── */}
      <section className="relative h-screen flex items-end overflow-hidden">
        <img
          src={HERO_IMG}
          alt="Ocean beach horizon"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: "brightness(0.45) saturate(0.8)" }}
        />
        {/* gradient overlay */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(14,30,26,0.2) 0%, rgba(14,30,26,0.9) 100%)" }} />

        <div className="relative z-10 max-w-5xl mx-auto px-6 pb-20 md:pb-28 w-full">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="font-body text-[10px] tracking-[0.35em] uppercase text-quartz/30 mb-6"
          >
            Le premier kit — Summer 2026
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading text-5xl md:text-7xl font-light text-quartz/90 leading-[1.05] mb-6"
          >
            The Beach<br />
            <em className="not-italic" style={{ color: "rgba(175,200,209,0.8)" }}>Crossbody Kit.</em>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="font-body text-base text-quartz/40 max-w-md leading-relaxed mb-10"
          >
            Un système de protection waterproof pour la plage, la piscine et le bateau. Cinq pièces. Une seule intention.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.1 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              to="/waitlist"
              className="font-body text-sm tracking-[0.2em] uppercase px-8 py-4 border border-quartz/20 text-quartz/70 hover:border-sky-blue/50 hover:text-quartz transition-all duration-500 text-center"
            >
              [ Rejoindre le premier drop ]
            </Link>
            <Link
              to="/how-it-works"
              className="font-body text-sm tracking-widest uppercase px-8 py-4 text-quartz/25 hover:text-quartz/50 transition-all duration-500 text-center"
            >
              Comment ça marche →
            </Link>
          </motion.div>
        </div>

        {/* scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
          <motion.div className="w-px h-10 bg-quartz" animate={{ scaleY: [1, 0.3, 1] }} transition={{ duration: 2, repeat: Infinity }} />
        </div>
      </section>

      {/* ── KIT PIECES — interactive sculptures ── */}
      <section className="py-28 md:py-36" style={{ background: "#F6F3ED" }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="font-body text-[10px] tracking-[0.3em] uppercase text-olive/40 mb-5"
            >
              Ce qui est inclus
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-heading text-4xl md:text-5xl font-light text-ink leading-tight"
            >
              Cinq pièces.<br />
              <em className="not-italic text-sea-green/70">Une seule intention.</em>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {KIT_VISUALS.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.09 }}
                className={`relative group cursor-pointer rounded-sm border transition-all duration-500 overflow-hidden ${
                  i === 0 ? "md:col-span-2 lg:col-span-1 lg:row-span-2" : ""
                }`}
                style={{
                  backgroundColor: activeItem === item.id ? "rgba(31,61,51,0.04)" : "rgba(255,255,255,0.6)",
                  borderColor: activeItem === item.id ? "rgba(31,61,51,0.25)" : "rgba(201,194,178,0.4)",
                  backdropFilter: "blur(4px)",
                }}
                onClick={() => setActiveItem(activeItem === item.id ? null : item.id)}
              >
                {/* Visual */}
                <div className={`flex items-center justify-center p-8 ${i === 0 ? "h-52 md:h-64" : "h-36"}`}>
                  {item.svgEl}
                </div>

                {/* Info */}
                <div className="px-6 pb-6">
                  <p className="font-heading text-lg text-ink mb-1">{item.name}</p>
                  <p className="font-body text-xs text-foreground/40 leading-relaxed mb-0">{item.tagline}</p>

                  <AnimatePresence>
                    {activeItem === item.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden"
                      >
                        <p className="font-body text-sm text-sea-green/70 mt-3 leading-relaxed">{item.benefit}</p>
                        {item.validation && (
                          <p className="font-body text-xs text-olive/40 mt-2 italic">{item.validation}</p>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Expand dot */}
                <div className="absolute top-4 right-4 w-5 h-5 flex items-center justify-center opacity-20 group-hover:opacity-60 transition-opacity">
                  <motion.div
                    className="w-3 h-3 border border-sea-green rounded-full"
                    animate={{ scale: activeItem === item.id ? 0.6 : 1, rotate: activeItem === item.id ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center font-body text-xs text-foreground/25 mt-8"
          >
            Touchez chaque pièce pour découvrir les détails.
          </motion.p>
        </div>
      </section>

      {/* ── UNDERWATER PROOF SECTION ── */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center overflow-hidden">
        <img
          src={UNDERWATER_IMG}
          alt="Underwater light"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: "brightness(0.4) saturate(0.7)" }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(14,30,26,0.85) 40%, transparent)" }} />
        <div className="relative z-10 max-w-5xl mx-auto px-6 w-full">
          <motion.p
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-body text-[10px] tracking-[0.3em] uppercase text-sky-blue/50 mb-5"
          >
            La matière
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="font-heading text-4xl md:text-6xl font-light text-quartz/85 leading-[1.1] mb-6 max-w-xl"
          >
            Il plonge.<br />
            <em className="not-italic text-sky-blue/70">L'intérieur reste sec.</em>
          </motion.h2>
          <div className="space-y-4">
            {[
              { label: "Coque TPU mat", note: "Douce au toucher. Imperméable à l'usage." },
              { label: "Double zip étanche", note: "Une résistance silencieuse." },
              { label: "Fidlock magnétique", note: "S'ouvre d'une main mouillée." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 + 0.3 }}
                className="flex items-center gap-4"
              >
                <div className="w-1 h-1 rounded-full bg-sky-blue/40 flex-shrink-0" />
                <p className="font-heading text-base text-quartz/70">{item.label}</p>
                <p className="font-body text-xs text-quartz/30">{item.note}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SCENARIOS — real photos ── */}
      <section className="py-28 md:py-36" style={{ background: "#E8DFC9" }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-heading text-4xl md:text-5xl font-light text-ink leading-tight"
            >
              Fait pour les moments<br />
              <em className="not-italic text-sea-green/60">près de l'eau.</em>
            </motion.h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {SCENARIOS.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="relative rounded-sm overflow-hidden group"
                style={{ height: 340 }}
              >
                <img
                  src={s.img}
                  alt={s.label}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  style={{ filter: "brightness(0.55) saturate(0.8)" }}
                />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(14,30,26,0.85) 0%, transparent 55%)" }} />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="font-body text-[10px] tracking-[0.2em] uppercase text-sky-blue/60 mb-2">{s.label}</p>
                  <p className="font-heading text-xl text-quartz/85 leading-snug">{s.copy}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING — elegant, minimal ── */}
      <section className="py-28 md:py-36" style={{ background: "#1F3D33" }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-body text-[10px] tracking-[0.3em] uppercase text-quartz/25 mb-8"
          >
            Tarification attendue
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-heading text-4xl md:text-5xl font-light text-quartz/85 mb-14 leading-tight"
          >
            L'accès prioritaire<br />
            <em className="not-italic text-sky-blue/60">a un prix différent.</em>
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            {[
              { label: "Prix public", price: BRAND.expectedPrice, note: "Attendu" },
              { label: "Premier drop", price: BRAND.firstDropPrice, note: "Accès prioritaire", highlight: true },
              { label: "Kit duo", price: BRAND.duoPrice, note: "Planifié plus tard" },
            ].map((tier, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`p-8 rounded-sm border ${
                  tier.highlight
                    ? "border-sky-blue/30 bg-quartz/5"
                    : "border-quartz/10 bg-transparent"
                }`}
              >
                <p className="font-body text-xs tracking-widest uppercase text-quartz/30 mb-3">{tier.label}</p>
                <p className={`font-heading text-4xl font-light mb-1 ${tier.highlight ? "text-quartz" : "text-quartz/50"}`}>{tier.price}</p>
                <p className="font-body text-xs italic text-quartz/25">{tier.note}</p>
                {tier.highlight && (
                  <div className="mt-4 h-px bg-sky-blue/20" />
                )}
              </motion.div>
            ))}
          </div>
          <p className="font-body text-xs text-quartz/20 italic">
            Tarification indicative. Le checkout n'est pas encore ouvert.
          </p>
        </div>
      </section>

      {/* ── VALIDATION ── */}
      <section className="py-24 md:py-32" style={{ background: "#F0EBE0" }}>
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="font-body text-[10px] tracking-[0.25em] uppercase text-olive/40 mb-5"
              >
                Validation
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="font-heading text-3xl md:text-4xl font-light text-ink leading-[1.15] mb-5"
              >
                Construit autour<br />
                <em className="not-italic text-sea-green/70">de ce qui peut échouer.</em>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="font-body text-sm text-foreground/50 leading-relaxed"
              >
                Avant le premier drop, le kit est validé autour de la fermeture, du toucher, de la flottaison, de l'ergonomie en mains mouillées.
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="border border-salt/30 rounded-sm p-7"
              style={{ background: "rgba(255,255,255,0.5)" }}
            >
              <div className="space-y-3">
                {VALIDATION_CHECKLIST.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.05 + 0.2 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-4 h-4 rounded-full border border-sky-blue/40 flex items-center justify-center flex-shrink-0">
                      <div className="w-1.5 h-1.5 rounded-full bg-sky-blue/50" />
                    </div>
                    <span className="font-body text-sm text-foreground/60">{item}</span>
                  </motion.div>
                ))}
              </div>
              <div className="mt-6 h-px" style={{ background: "linear-gradient(to right, rgba(175,200,209,0.3), transparent)" }} />
              <p className="font-body text-xs text-foreground/25 mt-3 italic">
                Documentation under review. Final status before checkout opens.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section
        className="relative py-36 md:py-48 flex items-center justify-center overflow-hidden"
        style={{ background: "#0E1E1A" }}
      >
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 50% 60%, rgba(175,200,209,0.06) 0%, transparent 70%)" }} />
        <div className="relative z-10 text-center max-w-xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading text-4xl md:text-6xl font-light text-quartz/85 leading-[1.1] mb-10"
          >
            Votre place dans<br />
            <em className="not-italic" style={{ color: "rgba(175,200,209,0.7)" }}>le premier drop.</em>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <Link
              to="/waitlist"
              className="font-body text-sm tracking-[0.25em] uppercase px-10 py-4 border border-quartz/20 text-quartz/60 hover:border-sky-blue/40 hover:text-quartz transition-all duration-700"
            >
              [ Choisir la Sérénité ]
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}