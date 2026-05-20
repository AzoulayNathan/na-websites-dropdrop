import React from "react";
import { motion } from "framer-motion";
import CTAButton from "@/components/brand/CTAButton";
import Waterline from "@/components/brand/Waterline";
import { BRAND } from "@/lib/brand";

export default function FinalCTASection() {
  return (
    <section className="py-24 md:py-32 bg-sand relative">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <Waterline className="max-w-32 mx-auto mb-10" variant="bold" />
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-heading text-4xl md:text-5xl font-light text-ink leading-[1.1] mb-6"
        >
          {BRAND.tagline}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="font-body text-base text-foreground/55 max-w-md mx-auto leading-relaxed mb-10"
        >
          Join the first drop and be first to see the kit as final materials,
          testing and launch details are confirmed.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <CTAButton to="/waitlist" size="large">
            Join the waitlist
          </CTAButton>
          <CTAButton to="/survey" variant="secondary" size="large">
            Take the survey
          </CTAButton>
        </motion.div>
      </div>
    </section>
  );
}