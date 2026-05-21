import React from "react";
import { motion } from "framer-motion";
import Waterline from "@/components/brand/Waterline";
import { BRAND } from "@/lib/brand";

export default function FounderSection() {
  return (
    <section className="py-24 md:py-32 bg-quartz relative">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-body text-xs tracking-[0.15em] uppercase text-olive/50 mb-6"
        >
          A note from the launch team
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-heading text-3xl md:text-4xl font-light italic text-ink leading-[1.2] mb-8"
        >
          Made for the swim you almost skipped.
        </motion.h2>
        <Waterline className="max-w-24 mx-auto mb-8" variant="bold" />
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-body text-base text-foreground/60 leading-relaxed max-w-lg mx-auto"
        >
          {BRAND.name} began with a simple observation: the best moments near water
          often start with a small hesitation — "where do I leave my phone?"
          We are building the answer with more care than this category usually gets.
        </motion.p>
      </div>
      <Waterline className="absolute bottom-0 left-0" variant="section" />
    </section>
  );
}