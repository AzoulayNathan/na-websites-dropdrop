import React from "react";
import { motion } from "framer-motion";
import WaterlineAnimated from "@/components/brand/WaterlineAnimated.jsx";

const CARDS = [
  {
    label: "Solo swim",
    copy: "Phone stays. You hesitate.",
    style: { backgroundColor: "rgba(31,61,51,0.07)", borderColor: "rgba(31,61,51,0.1)" },
  },
  {
    label: "Kids in the water",
    copy: "Both hands taken. Bag unattended.",
    style: { backgroundColor: "rgba(181,82,59,0.06)", borderColor: "rgba(181,82,59,0.1)" },
  },
  {
    label: "Boat day",
    copy: "Dock, deck, water. Nowhere safe.",
    style: { backgroundColor: "rgba(175,200,209,0.08)", borderColor: "rgba(175,200,209,0.15)" },
  },
];

export default function ProblemSection() {
  return (
    <section className="py-24 md:py-32 bg-quartz relative overflow-hidden">
      {/* Subtle warm atmosphere */}
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl pointer-events-none" style={{ backgroundColor: 'rgba(181,82,59,0.04)' }} />

      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — Copy */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="font-body text-xs tracking-[0.18em] uppercase text-olive/60 mb-5"
            >
              The unwatchable gap
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="font-heading text-4xl md:text-5xl font-light text-ink leading-[1.1] mb-5"
            >
              Stop watching<br />your towel.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="font-body text-base text-foreground/55 leading-relaxed max-w-xs"
            >
              Beach, pool, boat, travel — the problem is always the same:
              your essentials stay behind when you want to go in.
            </motion.p>
          </div>

          {/* Right — Tension cards */}
          <div className="space-y-3">
            {CARDS.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="border rounded-sm px-6 py-5 flex items-center justify-between"
                style={card.style}
              >
                <div>
                  <p className="font-heading text-lg text-ink">{card.label}</p>
                  <p className="font-body text-sm text-foreground/50 mt-0.5">{card.copy}</p>
                </div>
                <div className="w-8 h-8 rounded-full border border-salt/30 flex items-center justify-center flex-shrink-0 ml-4">
                  <span className="text-xs font-body text-foreground/30">{String(i + 1).padStart(2, "0")}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="font-heading text-xl italic text-sea-green/60 text-center mt-16"
        >
          "The problem is not the water. It is the pause before entering it."
        </motion.p>
      </div>
      <WaterlineAnimated className="absolute bottom-0 left-0 right-0" opacity={0.25} />
    </section>
  );
}