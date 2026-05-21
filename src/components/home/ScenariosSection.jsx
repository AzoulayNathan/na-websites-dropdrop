import React from "react";
import { motion } from "framer-motion";
import WaterlineAnimated from "@/components/brand/WaterlineAnimated.jsx";

const SCENARIOS = [
  {
    label: "Beach",
    copy: "Swim without checking the towel.",
    accent: "from-sea-green/10 to-sky-blue/5",
    tag: "bg-sea-green/8 text-sea-green",
  },
  {
    label: "Pool",
    copy: "Hands free when the day keeps moving.",
    accent: "from-sky-blue/10 to-transparent",
    tag: "bg-sky-blue/15 text-sea-green",
  },
  {
    label: "Boat",
    copy: "Keep essentials close from dock to water.",
    accent: "from-olive/8 to-sea-green/5",
    tag: "bg-olive/10 text-olive",
  },
  {
    label: "Travel day",
    copy: "Cards, phone and passport in one calm system.",
    accent: "from-terracotta/8 to-transparent",
    tag: "bg-terracotta/10 text-terracotta",
  },
];

export default function ScenariosSection() {
  return (
    <section className="py-24 md:py-32 bg-quartz relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-heading text-4xl md:text-5xl font-light text-ink leading-tight"
          >
            Made for the moments<br className="hidden sm:block" /> near water.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {SCENARIOS.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`relative border border-salt/10 rounded-sm p-8 overflow-hidden ${i === 0 ? "sm:row-span-2 flex flex-col justify-end min-h-[280px]" : "min-h-[160px] flex flex-col justify-end"}`}
              style={{ background: i === 0 ? 'linear-gradient(to bottom right, rgba(31,61,51,0.08), rgba(175,200,209,0.05))' : i === 1 ? 'linear-gradient(to bottom right, rgba(175,200,209,0.08), transparent)' : i === 2 ? 'linear-gradient(to bottom right, rgba(63,90,79,0.08), rgba(31,61,51,0.05))' : 'linear-gradient(to bottom right, rgba(181,82,59,0.07), transparent)' }}
            >
              {/* Atmospheric water ripple bg */}
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-sky-blue/5 blur-2xl pointer-events-none" />
              <span className="inline-block font-body text-xs px-3 py-1 rounded-full mb-3 w-fit text-sea-green" style={{ backgroundColor: 'rgba(31,61,51,0.08)' }}>
                {s.label}
              </span>
              <p className="font-heading text-xl md:text-2xl text-ink leading-snug">{s.copy}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <WaterlineAnimated className="absolute bottom-0 left-0 right-0" opacity={0.25} />
    </section>
  );
}