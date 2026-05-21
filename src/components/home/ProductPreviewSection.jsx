import React from "react";
import { motion } from "framer-motion";
import Waterline from "@/components/brand/Waterline";
import { BRAND, KIT_ITEMS } from "@/lib/brand";
import { Package, StretchHorizontal, Wallet, Briefcase, FileCheck } from "lucide-react";

const icons = [Package, StretchHorizontal, Wallet, Briefcase, FileCheck];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1 },
  }),
};

export default function ProductPreviewSection() {
  return (
    <section className="py-24 md:py-32 bg-quartz relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            custom={0}
            className="font-heading text-3xl md:text-4xl lg:text-5xl font-light text-ink leading-[1.15] mb-3"
          >
            {BRAND.product}
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            custom={1}
            className="font-body text-base text-foreground/60"
          >
            One kit. Phone, keys, cards, cash. Covered.
          </motion.p>
        </div>

        {/* Kit items — exploded diagram style */}
        <div className="space-y-1">
          {KIT_ITEMS.map((item, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                variants={fadeUp}
                custom={i + 2}
                className="flex items-start gap-6 p-6 md:p-8 bg-sand/50 border border-salt/20 rounded-sm"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-sea-green/8 flex items-center justify-center mt-0.5">
                  <Icon className="w-4 h-4 text-sea-green" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-heading text-lg text-ink mb-1">{item.name}</h3>
                  <p className="font-body text-sm text-foreground/55 leading-relaxed">
                    {item.benefit}
                  </p>
                  {item.validation && (
                    <p className="font-body text-xs text-olive/60 mt-2 italic">
                      {item.validation}
                    </p>
                  )}
                </div>
                {/* Annotation line */}
                <div className="hidden md:block w-px h-12 bg-sky-blue/20 self-center" />
                <div className="hidden md:flex items-center">
                  <span className="font-body text-xs text-foreground/30 tracking-wide">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={7}
          className="font-body text-sm text-foreground/50 text-center mt-10 max-w-lg mx-auto leading-relaxed"
        >
          The first drop is being finalized with a focus on the details that matter:
          closure, fit, touch, floatation, material feel and reliability.
        </motion.p>
      </div>
      <Waterline className="absolute bottom-0 left-0" variant="section" />
    </section>
  );
}