import React from "react";
import { motion } from "framer-motion";
import PageHero from "@/components/brand/PageHero";
import CTAButton from "@/components/brand/CTAButton";
import WaterlineAnimated from "@/components/brand/WaterlineAnimated.jsx";
import { BRAND } from "@/lib/brand";
import { PackageOpen, UserRound, Waves, ShieldCheck } from "lucide-react";

const steps = [
  {
    icon: PackageOpen,
    title: "Pack your essentials.",
    copy: "Phone, cards, keys, cash. Keep what matters in one calm system.",
    journey: "Towel",
  },
  {
    icon: UserRound,
    title: "Wear it close.",
    copy: "The crossbody format keeps your hands free and your essentials with you.",
    journey: "Shoreline",
  },
  {
    icon: Waves,
    title: "Go into the water.",
    copy: "Swim, move, play or board the boat without keeping one eye on the towel.",
    journey: "Water",
  },
];

const usageCards = [
  "Test with paper towel before first use",
  "Check closure carefully each time",
  "Avoid sharp objects inside the pouch",
  "Rinse after salt water",
  "Rinse after chlorinated water",
  "Do not use for deep diving unless final instructions state otherwise",
  "Inspect closure before each use",
  "Follow final product instructions",
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1 } }),
};

export default function HowItWorks() {
  return (
    <div className="bg-quartz">
      <PageHero
        title={`How ${BRAND.name} works`}
        subtitle="A simple system for keeping essentials close when the day moves toward water."
        className="bg-sand"
      >
        <CTAButton to="/waitlist">Join the first drop</CTAButton>
      </PageHero>

      {/* Three steps */}
      <section className="py-20 md:py-28 bg-quartz relative">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Journey waterline */}
            <div className="hidden md:block absolute top-24 left-[15%] right-[15%]">
              <WaterlineAnimated opacity={0.5} />
            </div>

            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="relative z-10 text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-sand border border-salt/30 mb-6">
                  <step.icon className="w-6 h-6 text-sea-green" />
                </div>
                <p className="font-body text-xs tracking-[0.15em] uppercase text-sky-blue/70 mb-2">
                  {step.journey}
                </p>
                <h3 className="font-heading text-2xl text-ink mb-3">{step.title}</h3>
                <p className="font-body text-sm text-foreground/55 leading-relaxed max-w-xs mx-auto">
                  {step.copy}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Before first use */}
      <section className="py-20 md:py-28 bg-sand">
        <div className="max-w-3xl mx-auto px-6">
          <motion.h2
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
            className="font-heading text-3xl md:text-4xl font-light text-ink text-center mb-4"
          >
            Before the first swim
          </motion.h2>
          <motion.p
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}
            className="font-body text-sm text-foreground/50 text-center mb-12 max-w-md mx-auto"
          >
            A few simple steps to make sure everything works as intended. Final instructions will ship with the product.
          </motion.p>

          <div className="bg-quartz border border-salt/30 rounded-sm p-8">
            <div className="flex items-center gap-3 mb-6">
              <ShieldCheck className="w-5 h-5 text-sea-green" />
              <span className="font-body text-xs tracking-[0.15em] uppercase text-olive">
                Usage guidance
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {usageCards.map((card, i) => (
                <motion.div
                  key={i}
                  initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i + 2}
                  className="flex items-start gap-3 p-4 bg-sand/50 rounded-sm"
                >
                  <span className="w-5 h-5 rounded-full bg-sky-blue/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-body text-sky-blue/70">{i + 1}</span>
                  </span>
                  <p className="font-body text-sm text-foreground/60">{card}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-sea-green text-center">
        <div className="max-w-xl mx-auto px-6">
          <h2 className="font-heading text-3xl font-light text-quartz mb-6">
            Ready to keep your essentials close?
          </h2>
          <CTAButton to="/waitlist" variant="outline" className="border-quartz/30 text-quartz hover:border-quartz/60">
            Join the first drop
          </CTAButton>
        </div>
      </section>
    </div>
  );
}