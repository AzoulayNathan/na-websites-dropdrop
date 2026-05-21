import React from "react";
import { motion } from "framer-motion";
import WaterlineAnimated from "@/components/brand/WaterlineAnimated.jsx";
import { VALIDATION_CHECKLIST } from "@/lib/brand";

export default function ValidationSection() {
  return (
    <section className="py-24 md:py-32 bg-sand relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="font-body text-xs tracking-[0.18em] uppercase text-olive/60 mb-5"
            >
              Validation
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="font-heading text-3xl md:text-4xl font-light text-ink leading-[1.15] mb-4"
            >
              Built around<br />what can fail.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="font-body text-sm text-foreground/55 leading-relaxed max-w-xs"
            >
              Before the first drop, the kit is validated around closure, fit, touch,
              floatation, material feel and real water use.
            </motion.p>
          </div>

          {/* Validation board */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-white/70 border border-salt/30 rounded-sm p-6"
          >
            <p className="font-body text-xs tracking-[0.15em] uppercase text-olive/40 mb-5">
              Validation process
            </p>
            <div className="space-y-3">
              {VALIDATION_CHECKLIST.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 + 0.3 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-4 h-4 rounded-full border border-sky-blue/40 flex items-center justify-center flex-shrink-0">
                    <div className="w-1.5 h-1.5 rounded-full bg-sky-blue/50" />
                  </div>
                  <span className="font-body text-sm text-foreground/60">{item}</span>
                </motion.div>
              ))}
            </div>
            <WaterlineAnimated className="mt-6" opacity={0.4} />
            <p className="font-body text-xs text-foreground/30 mt-3 italic">
              Documentation under review. Final status before checkout opens.
            </p>
          </motion.div>
        </div>
      </div>
      <WaterlineAnimated className="absolute bottom-0 left-0 right-0" opacity={0.25} />
    </section>
  );
}