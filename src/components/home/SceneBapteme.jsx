import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// Animated water surface + dive
function WaterDiveScene({ progress }) {
  const y = useTransform(progress, [0.1, 0.7], ["-10%", "30%"]);
  const opacity = useTransform(progress, [0, 0.1, 0.8, 1], [0, 1, 1, 0.6]);
  const bubbleSpread = useTransform(progress, [0.1, 0.5], [0, 1]);

  return (
    <div className="relative w-64 h-96 md:w-80 md:h-[480px] mx-auto">
      {/* Water surface */}
      <div className="absolute top-1/3 left-0 right-0 h-px" style={{ background: "linear-gradient(to right, transparent, rgba(175,200,209,0.5), transparent)" }} />

      {/* Underwater gradient */}
      <div className="absolute top-1/3 left-0 right-0 bottom-0 rounded-b-3xl overflow-hidden">
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(31,61,51,0.15), rgba(14,30,26,0.4))" }} />
        {/* Caustic flickers */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: 40 + i * 15,
              height: 8,
              left: `${10 + i * 16}%`,
              top: `${20 + i * 14}%`,
              background: "rgba(175,200,209,0.12)",
              filter: "blur(4px)",
            }}
            animate={{ opacity: [0.3, 0.7, 0.3], x: [0, 8, 0], scaleX: [1, 1.2, 1] }}
            transition={{ duration: 2.5 + i * 0.5, repeat: Infinity, delay: i * 0.3 }}
          />
        ))}
      </div>

      {/* Falling pouch */}
      <motion.div className="absolute left-1/2 -translate-x-1/2" style={{ y, opacity }}>
        <svg viewBox="0 0 140 200" className="w-32 h-48 md:w-40 md:h-56 drop-shadow-2xl" fill="none">
          <rect x="10" y="20" width="120" height="170" rx="22" fill="#1F3D33" opacity="0.93" />
          <rect x="20" y="35" width="100" height="140" rx="16" fill="rgba(175,200,209,0.1)" />
          <ellipse cx="45" cy="58" rx="16" ry="22" fill="rgba(246,243,237,0.06)" transform="rotate(-15 45 58)" />
          <rect x="10" y="18" width="120" height="8" rx="4" fill="#3F5A4F" opacity="0.8" />
          <circle cx="70" cy="14" r="5" fill="#AFC8D1" opacity="0.7" />
          {/* Interior stays dry indicator */}
          <rect x="30" y="50" width="80" height="100" rx="10" fill="rgba(232,223,201,0.04)" />
          <circle cx="70" cy="100" r="12" fill="rgba(246,243,237,0.08)" />
        </svg>
      </motion.div>

      {/* Bubbles on entry */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute left-1/2 rounded-full border border-sky-blue/30"
          style={{
            width: 4 + (i % 4) * 4,
            height: 4 + (i % 4) * 4,
            top: "33%",
          }}
          animate={{
            x: [0, (i % 2 === 0 ? 1 : -1) * (20 + i * 8)],
            y: [-10, -40 - i * 8],
            opacity: [0, 0.6, 0],
            scale: [0.5, 1, 0.3],
          }}
          transition={{
            duration: 1.8 + i * 0.2,
            repeat: Infinity,
            delay: i * 0.15,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );
}

export default function SceneBapteme() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-24"
      style={{ background: "linear-gradient(to bottom, #E8DFC9, #D4CCBA 60%, #C9C2B2)" }}
    >
      {/* Top vignette */}
      <div className="absolute top-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, rgba(14,30,26,0.08), transparent)" }} />

      <div className="relative z-10 max-w-5xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left — animation */}
        <WaterDiveScene progress={scrollYProgress} />

        {/* Right — copy */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-body text-[10px] tracking-[0.25em] uppercase text-olive/50 mb-6"
          >
            Le baptême
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.05 }}
            className="font-heading text-4xl md:text-5xl font-light text-ink leading-[1.1] mb-6"
          >
            Il plonge.<br />
            <em className="not-italic text-sea-green">L'intérieur reste sec.</em>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-body text-base text-foreground/50 leading-relaxed mb-8 max-w-sm"
          >
            La coque TPU mat résiste. Le zip étanche tient. Le Fidlock magnétique ne s'ouvre que quand vous le voulez.
          </motion.p>

          {/* Material facts — visible, not technical */}
          <div className="space-y-4">
            {[
              { label: "Coque TPU mat", feel: "Douce au toucher. Imperméable." },
              { label: "Double zip étanche", feel: "Une résistance silencieuse." },
              { label: "Fidlock magnétique", feel: "S'ouvre d'une main." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 + 0.3 }}
                className="flex items-start gap-4"
              >
                <div className="w-1 h-1 rounded-full bg-sky-blue/50 mt-2.5 flex-shrink-0" />
                <div>
                  <p className="font-heading text-base text-ink">{item.label}</p>
                  <p className="font-body text-xs text-foreground/40">{item.feel}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}