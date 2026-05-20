import React from "react";
import { motion } from "framer-motion";

const KIT_COMPONENTS = [
  {
    label: "Phone pouch",
    tagline: "Built for your most-used essential.",
    color: "#1F3D33",
    shape: "rect",
    w: 120,
    h: 160,
    rx: 16,
    offsetX: 0,
    offsetY: -90,
    delay: 0,
  },
  {
    label: "Crossbody strap",
    tagline: "Hands free. All day.",
    color: "#3F5A4F",
    shape: "strap",
    offsetX: 120,
    offsetY: -20,
    delay: 0.08,
  },
  {
    label: "Valuables pouch",
    tagline: "Cards, keys, cash. Together.",
    color: "#B5523B",
    shape: "rect",
    w: 90,
    h: 72,
    rx: 12,
    offsetX: -110,
    offsetY: -10,
    delay: 0.16,
  },
  {
    label: "Storage pouch",
    tagline: "Kit ready. Always.",
    color: "#AFC8D1",
    shape: "rect",
    w: 100,
    h: 80,
    rx: 14,
    offsetX: 0,
    offsetY: 90,
    delay: 0.24,
  },
  {
    label: "Test card",
    tagline: "Test before the first swim.",
    color: "#E8DFC9",
    shape: "card",
    w: 80,
    h: 50,
    rx: 6,
    offsetX: -90,
    offsetY: 90,
    delay: 0.32,
  },
];

export default function KitExplodedView({ className = "" }) {
  return (
    <div className={`relative ${className}`}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {KIT_COMPONENTS.map((comp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: comp.delay + 0.2 }}
            className="group flex flex-col items-center gap-3 p-5 rounded-sm border border-salt/20 bg-white/60 hover:bg-quartz transition-all duration-300"
          >
            {/* Visual component */}
            <div className="relative w-16 h-16 flex items-center justify-center">
              <div
                className="rounded-md shadow-sm"
                style={{
                  backgroundColor: comp.color,
                  width: comp.shape === "strap" ? "80%" : "65%",
                  height: comp.shape === "strap" ? "30%" : comp.shape === "card" ? "55%" : "85%",
                  borderRadius: comp.shape === "strap" ? "20px" : `${comp.rx || 8}px`,
                  opacity: 0.85,
                }}
              />
              {comp.shape === "strap" && (
                <div
                  className="absolute inset-0 rounded-full border-2"
                  style={{ borderColor: comp.color, opacity: 0.3 }}
                />
              )}
              {/* Seam line */}
              <div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-px"
                style={{ backgroundColor: "#AFC8D1", opacity: 0.4 }}
              />
            </div>
            {/* Number */}
            <span className="font-body text-xs text-foreground/30 tracking-wider">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h4 className="font-heading text-base text-ink text-center leading-snug">
              {comp.label}
            </h4>
            <p className="font-body text-xs text-foreground/50 text-center leading-relaxed">
              {comp.tagline}
            </p>
          </motion.div>
        ))}
      </div>
      {/* Connecting waterline */}
      <motion.div
        className="absolute top-1/2 left-0 right-0 h-px bg-sky-blue/20 hidden lg:block pointer-events-none"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 0.4 }}
        style={{ originX: 0 }}
      />
    </div>
  );
}