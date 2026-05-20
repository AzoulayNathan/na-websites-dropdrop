import React from "react";
import { motion } from "framer-motion";
import CTAButton from "@/components/brand/CTAButton";
import WaterlineAnimated from "@/components/brand/WaterlineAnimated.jsx";

const PILLARS = [
  {
    word: "Dry.",
    copy: "Sealed when you need it.",
    color: "text-sky-blue",
    bg: "bg-sky-blue/6",
    visual: (
      <svg viewBox="0 0 80 80" className="w-16 h-16 mx-auto mb-6" fill="none">
        {/* Water drops sliding off */}
        <ellipse cx="40" cy="55" rx="28" ry="14" fill="#AFC8D1" opacity="0.12" />
        <rect x="24" y="18" width="32" height="44" rx="12" fill="#1F3D33" opacity="0.85" />
        <ellipse cx="32" cy="25" rx="3" ry="5" fill="white" opacity="0.1" />
        {/* Droplets */}
        <circle cx="58" cy="32" r="3" fill="#AFC8D1" opacity="0.6" />
        <circle cx="62" cy="44" r="2" fill="#AFC8D1" opacity="0.4" />
        <circle cx="56" cy="50" r="1.5" fill="#AFC8D1" opacity="0.3" />
      </svg>
    ),
  },
  {
    word: "Safe.",
    copy: "Everything in one place.",
    color: "text-sea-green",
    bg: "bg-sea-green/6",
    visual: (
      <svg viewBox="0 0 80 80" className="w-16 h-16 mx-auto mb-6" fill="none">
        {/* Protection rings */}
        <circle cx="40" cy="40" r="30" stroke="#1F3D33" strokeWidth="1" opacity="0.15" />
        <circle cx="40" cy="40" r="22" stroke="#1F3D33" strokeWidth="1.5" opacity="0.25" />
        <circle cx="40" cy="40" r="14" fill="#1F3D33" opacity="0.8" />
        <circle cx="40" cy="40" r="6" fill="#AFC8D1" opacity="0.5" />
      </svg>
    ),
  },
  {
    word: "Free.",
    copy: "Hands free. Eyes forward.",
    color: "text-olive",
    bg: "bg-olive/6",
    visual: (
      <svg viewBox="0 0 80 80" className="w-16 h-16 mx-auto mb-6" fill="none">
        {/* Strap / movement arc */}
        <path d="M 15 60 Q 40 20 65 60" stroke="#3F5A4F" strokeWidth="8" strokeLinecap="round" opacity="0.75" />
        <path d="M 15 60 Q 40 20 65 60" stroke="#AFC8D1" strokeWidth="2" strokeLinecap="round" strokeDasharray="6 10" opacity="0.5" />
        <circle cx="40" cy="35" r="8" fill="#E8DFC9" stroke="#1F3D33" strokeWidth="1.5" opacity="0.7" />
      </svg>
    ),
  },
];

export default function PromiseSection() {
  return (
    <section className="py-24 md:py-32 bg-quartz relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-heading text-4xl md:text-5xl font-light text-ink text-center mb-16 leading-tight"
        >
          Dry. Safe. Free.
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {PILLARS.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="border border-salt/10 rounded-sm px-6 py-10 text-center"
              style={{ backgroundColor: i === 0 ? 'rgba(175,200,209,0.08)' : i === 1 ? 'rgba(31,61,51,0.06)' : 'rgba(63,90,79,0.06)' }}
            >
              {p.visual}
              <h3 className={`font-heading text-4xl font-light ${p.color} mb-2`}>{p.word}</h3>
              <p className="font-body text-sm text-foreground/50">{p.copy}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="text-center"
        >
          <CTAButton to="/waitlist">Join the first drop</CTAButton>
        </motion.div>
      </div>
      <WaterlineAnimated className="absolute bottom-0 left-0 right-0" opacity={0.25} />
    </section>
  );
}