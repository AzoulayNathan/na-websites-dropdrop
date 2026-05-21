import React from "react";
import { motion } from "framer-motion";
import CTAButton from "@/components/brand/CTAButton";
import WaterlineAnimated from "@/components/brand/WaterlineAnimated.jsx";
import ProductMockup3D from "@/components/brand/ProductMockup3D.jsx";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-sand">
      {/* Warm atmospheric layers */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-sand via-sand to-quartz/80" />
        {/* Mediterranean sun glow */}
        <div className="absolute top-0 right-0 w-[60%] h-[60%] rounded-full blur-[120px]" style={{ backgroundColor: 'rgba(181,82,59,0.06)' }} />
        <div className="absolute bottom-0 left-0 w-[40%] h-[50%] rounded-full blur-[100px]" style={{ backgroundColor: 'rgba(175,200,209,0.08)' }} />
        {/* Stone texture suggestion */}
        <div className="absolute inset-0" style={{ opacity: 0.015, backgroundImage: "repeating-linear-gradient(0deg, #1A1A18 0px, transparent 1px, transparent 40px)", backgroundSize: "40px 40px" }} />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-6 items-center min-h-screen">

        {/* Left — Editorial copy */}
        <div className="flex flex-col items-start justify-center pt-8 lg:pt-0">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-body text-xs tracking-[0.22em] uppercase text-olive mb-8"
          >
            First France / Spain drop in preparation
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="font-heading text-5xl sm:text-6xl lg:text-7xl font-light text-ink leading-[1.08] mb-5"
          >
            Swim first.<br />
            <em className="not-italic text-sea-green">Worry never.</em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="font-body text-base text-foreground/60 leading-relaxed mb-10 max-w-sm"
          >
            Your phone, keys and cards stay with you —<br className="hidden sm:block" /> not under a towel.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-8"
          >
            <CTAButton to="/waitlist" size="large">
              Join the first drop
            </CTAButton>
            <CTAButton to="/kit" variant="ghost" size="large">
              See the kit
            </CTAButton>
          </motion.div>

          {/* Waterline */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="w-full max-w-xs"
          >
            <WaterlineAnimated opacity={0.5} />
          </motion.div>

          {/* Trust strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="flex flex-wrap gap-x-5 gap-y-2 mt-5"
          >
            {["Beach, pool, boat", "Keys, cards, cash, phone", "Materials under validation"].map((t, i) => (
              <span key={i} className="flex items-center gap-1.5 font-body text-xs text-foreground/35">
                <span className="w-1 h-1 rounded-full bg-sky-blue/50" />
                {t}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Right — 3D Product */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.3, ease: "easeOut" }}
          className="flex items-center justify-center lg:justify-end"
        >
          <div className="relative w-72 h-80 sm:w-80 sm:h-96">
            <ProductMockup3D className="w-full h-full" />
            {/* Warm stone base */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-6 bg-sand/80 rounded-full blur-md" />
          </div>
        </motion.div>
      </div>

      {/* Bottom waterline */}
      <div className="absolute bottom-0 left-0 right-0">
        <WaterlineAnimated opacity={0.3} />
      </div>
    </section>
  );
}