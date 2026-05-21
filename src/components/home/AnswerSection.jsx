import React from "react";
import { motion } from "framer-motion";
import CTAButton from "@/components/brand/CTAButton";
import KitExplodedView from "@/components/brand/KitExplodedView.jsx";
import WaterlineAnimated from "@/components/brand/WaterlineAnimated.jsx";
// AnswerSection: shows kit exploded view and CTA

export default function AnswerSection() {
  return (
    <section className="py-24 md:py-32 bg-sand relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl pointer-events-none" style={{ backgroundColor: "rgba(175,200,209,0.05)" }} />

      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-body text-xs tracking-[0.18em] uppercase text-olive/60 mb-4"
          >
            The system
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="font-heading text-4xl md:text-5xl font-light text-ink leading-[1.1]"
          >
            One kit. Everything close.
          </motion.h2>
        </div>

        <KitExplodedView className="mb-14" />

        <div className="text-center">
          <CTAButton to="/waitlist">Join the waitlist</CTAButton>
        </div>
      </div>
      <WaterlineAnimated className="absolute bottom-0 left-0 right-0" opacity={0.25} />
    </section>
  );
}