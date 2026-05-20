import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { BRAND } from "@/lib/brand";

const IMG = "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=1200&q=80&fit=crop"; // calm beach horizon

const PILLARS = [
  {
    label: "L'observation",
    text: "Le meilleur moment en mer commence souvent par la même question : où est-ce que je laisse mon téléphone ?",
  },
  {
    label: "La conviction produit",
    text: "Un système de protection waterproof doit être simple à porter, facile à faire confiance, et assez beau pour faire partie de la journée.",
  },
  {
    label: "L'approche du lancement",
    text: "Le premier drop est préparé autour de la fermeture, du toucher, de la flottaison, de l'ergonomie en conditions réelles.",
  },
];

export default function About() {
  return (
    <div style={{ background: "#0E1E1A" }} className="min-h-screen">

      {/* Hero — full bleed calm beach */}
      <section className="relative h-[70vh] flex items-end overflow-hidden">
        <img
          src={IMG}
          alt="Calm beach horizon"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: "brightness(0.35) saturate(0.7)" }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(14,30,26,0.1), rgba(14,30,26,0.92))" }} />
        <div className="relative z-10 max-w-3xl mx-auto px-6 pb-20 w-full">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="font-body text-[10px] tracking-[0.35em] uppercase text-quartz/25 mb-6"
          >
            Notre intention
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading text-4xl md:text-6xl font-light text-quartz/88 leading-[1.1]"
          >
            L'eau devrait être<br />
            <em className="not-italic" style={{ color: "rgba(175,200,209,0.7)" }}>
              simple à nouveau.
            </em>
          </motion.h1>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-28 md:py-36" style={{ background: "#F6F3ED" }}>
        <div className="max-w-3xl mx-auto px-6">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-body text-base text-foreground/55 leading-relaxed text-center mb-20 max-w-xl mx-auto"
          >
            {BRAND.name} est construit autour d'une petite frustration estivale universelle : vouloir profiter de l'eau sans laisser l'essentiel derrière.
          </motion.p>

          <div className="space-y-16">
            {PILLARS.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="relative pl-7 border-l-2 border-sky-blue/20"
              >
                <p className="font-body text-[10px] tracking-[0.2em] uppercase text-olive/40 mb-3">{s.label}</p>
                <p className="font-heading text-2xl md:text-3xl font-light text-ink leading-snug">{s.text}</p>
              </motion.div>
            ))}
          </div>

          <div className="my-20 h-px" style={{ background: "linear-gradient(to right, transparent, rgba(175,200,209,0.4), transparent)" }} />

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-heading text-xl italic text-sea-green/50 text-center mb-10"
          >
            "Ne vendez pas une protection. Vendez une absence d'inquiétude."
          </motion.p>

          <div className="text-center">
            <Link
              to="/waitlist"
              className="font-body text-sm tracking-[0.2em] uppercase px-8 py-3.5 border border-sea-green/20 text-sea-green/60 hover:border-sea-green/50 hover:text-sea-green transition-all duration-500"
            >
              Rejoindre le premier drop
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}