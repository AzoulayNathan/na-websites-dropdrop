import React from "react";
import { motion } from "framer-motion";
import WaitlistForm from "@/components/brand/WaitlistForm";
import { BRAND } from "@/lib/brand";

const BG_IMG = "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1400&q=80&fit=crop";

const WHY = [
  { label: "Accès prioritaire", copy: "Avant l'ouverture publique du premier drop." },
  { label: "Prix lancement", copy: "Tarif early access avant le prix public." },
  { label: "Mises à jour validation", copy: "Les coulisses du processus de tests." },
  { label: "Influencer le kit", copy: "Vos réponses façonnent le premier lot." },
];

export default function Waitlist() {
  return (
    <div className="min-h-screen" style={{ background: "#0E1E1A" }}>
      {/* Background photo — top half */}
      <div className="relative h-[45vh] overflow-hidden">
        <img
          src={BG_IMG}
          alt="Ocean horizon"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: "brightness(0.3) saturate(0.6)" }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(14,30,26,0.3), #0E1E1A)" }} />
        <div className="relative z-10 max-w-3xl mx-auto px-6 pt-32">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="font-body text-[10px] tracking-[0.35em] uppercase text-quartz/25 mb-5"
          >
            {BRAND.launchSeason} — Premier drop
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading text-4xl md:text-6xl font-light text-quartz/88 leading-[1.08]"
          >
            Rejoindre<br />
            <em className="not-italic" style={{ color: "rgba(175,200,209,0.7)" }}>le premier drop.</em>
          </motion.h1>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

          {/* LEFT — Why */}
          <div className="pt-10 lg:pt-4">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.8 }}
              className="font-body text-sm text-quartz/35 leading-relaxed mb-10 max-w-sm"
            >
              {BRAND.name} prépare son premier Beach Crossbody Kit pour les journées d'été près de l'eau. Rejoignez la liste pour un accès anticipé.
            </motion.p>

            <div className="h-px mb-10" style={{ background: "linear-gradient(to right, rgba(175,200,209,0.2), transparent)" }} />

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.9 }}
              className="space-y-6 mb-10"
            >
              {WHY.map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-1 h-1 rounded-full bg-sky-blue/40 mt-2.5 flex-shrink-0" />
                  <div>
                    <p className="font-heading text-base text-quartz/75">{item.label}</p>
                    <p className="font-body text-xs text-quartz/30 mt-0.5">{item.copy}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="font-heading text-xl italic text-quartz/20"
            >
              "Un objet silencieux. Une absence d'inquiétude."
            </motion.p>
          </div>

          {/* RIGHT — Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="rounded-sm p-8 md:p-10 border border-quartz/8"
            style={{ background: "rgba(246,243,237,0.04)", backdropFilter: "blur(12px)" }}
          >
            <p className="font-body text-[10px] tracking-[0.25em] uppercase text-quartz/25 mb-6">Votre accès prioritaire</p>
            <h2 className="font-heading text-2xl text-quartz/75 mb-1">Early access form</h2>
            <p className="font-body text-sm text-quartz/25 mb-7">
              Premier drop France et Espagne en préparation.
            </p>
            <div className="[&_label]:text-quartz/50 [&_input]:bg-quartz/5 [&_input]:border-quartz/15 [&_input]:text-quartz/80 [&_input::placeholder]:text-quartz/25 [&_button:not([type='submit'])]:border-quartz/15 [&_button:not([type='submit'])]:text-quartz/50 [&_p]:text-quartz/30">
              <WaitlistForm source="waitlist_page" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}