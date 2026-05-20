import React from "react";
import { motion } from "framer-motion";
import WaterlineAnimated from "./WaterlineAnimated.jsx";
import { BRAND } from "@/lib/brand";

export default function LegalLayout({ title, children }) {
  return (
    <div className="min-h-screen bg-quartz">
      <section className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-body text-xs tracking-[0.15em] uppercase text-terracotta mb-4">
              Draft — final terms before checkout opens
            </p>
            <h1 className="font-heading text-3xl md:text-4xl font-light text-ink mb-4">
              {title}
            </h1>
            <WaterlineAnimated className="mb-10" opacity={0.4} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-stone max-w-none font-body text-foreground/80 leading-relaxed space-y-6"
          >
            <div className="bg-sand/50 border border-salt/40 rounded-sm p-5 mb-8">
              <p className="text-sm text-olive italic m-0">
                This is a draft page. {BRAND.name} is in pre-launch. Final legal terms
                will be completed before checkout opens.
              </p>
            </div>
            {children}
          </motion.div>
        </div>
      </section>
    </div>
  );
}