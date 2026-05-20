import React from "react";
import { motion } from "framer-motion";
import WaitlistForm from "@/components/brand/WaitlistForm";
import WaterlineAnimated from "@/components/brand/WaterlineAnimated.jsx";
import { BRAND } from "@/lib/brand";

export default function WaitlistSection() {
  return (
    <section className="py-24 md:py-32 bg-sea-green relative overflow-hidden">
      {/* Atmospheric depth */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-[100px] pointer-events-none" style={{ backgroundColor: 'rgba(175,200,209,0.05)' }} />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full blur-3xl pointer-events-none" style={{ backgroundColor: 'rgba(181,82,59,0.05)' }} />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Left — Copy */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="font-heading text-4xl md:text-5xl font-light text-quartz leading-[1.1] mb-4"
            >
              Join the first drop.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-body text-base text-quartz/55 leading-relaxed mb-8"
            >
              Early access, product testing updates and first-drop pricing
              before {BRAND.name} launches.
            </motion.p>
            <WaterlineAnimated opacity={0.3} color="#F6F3ED" className="max-w-xs mb-8" />
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-heading text-2xl italic text-quartz/40"
            >
              {BRAND.tagline}
            </motion.p>
          </div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="backdrop-blur-sm border border-white/10 rounded-sm p-8" style={{ backgroundColor: 'rgba(246,243,237,0.08)' }}
          >
            <WaitlistForm source="home_section" />
          </motion.div>
        </div>
      </div>
      <WaterlineAnimated className="absolute bottom-0 left-0 right-0 opacity-20" color="#F6F3ED" />
    </section>
  );
}