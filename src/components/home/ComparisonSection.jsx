import React from "react";
import { motion } from "framer-motion";
import WaterlineAnimated from "@/components/brand/WaterlineAnimated.jsx";

const GENERIC = [
  "Cord lanyard",
  "Shiny plastic feel",
  "Unclear closure",
  "Awkward with large phones",
  "Something you hide",
];
const DROPDROP = [
  "Crossbody — hands free",
  "Soft-touch material direction",
  "Closure clarity by design",
  "Large phone fit target",
  "Part of the outfit",
];

export default function ComparisonSection() {
  return (
    <section className="py-24 md:py-32 bg-sand relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-heading text-4xl md:text-5xl font-light text-ink text-center mb-14 leading-tight"
        >
          Not a plastic bag<br className="hidden sm:block" /> with a cord.
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 overflow-hidden rounded-sm border border-salt/30">
          {/* Generic */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 md:p-10 bg-foreground/[0.025] border-b md:border-b-0 md:border-r border-salt/20"
          >
            <p className="font-body text-xs tracking-[0.15em] uppercase text-salt mb-6">Generic pouch</p>
            <ul className="space-y-3">
              {GENERIC.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-salt flex-shrink-0" />
                  <span className="font-body text-sm text-foreground/40">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* DROPDROP */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="p-8 md:p-10 bg-quartz relative"
          >
            {/* Waterline accent */}
            <div className="absolute top-0 left-0 bottom-0 w-[2px] bg-sky-blue/30 hidden md:block" />
            <p className="font-body text-xs tracking-[0.15em] uppercase text-sea-green mb-6">DROPDROP system</p>
            <ul className="space-y-3">
              {DROPDROP.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-sea-green/40 flex-shrink-0" />
                  <span className="font-body text-sm text-foreground/70">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
      <WaterlineAnimated className="absolute bottom-0 left-0 right-0" opacity={0.25} />
    </section>
  );
}