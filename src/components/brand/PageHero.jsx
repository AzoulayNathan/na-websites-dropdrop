import React from "react";
import { motion } from "framer-motion";
import WaterlineAnimated from "./WaterlineAnimated.jsx";

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  children,
  size = "default",
  className = "",
}) {
  const sizes = {
    small: "py-16 md:py-24",
    default: "py-24 md:py-32",
    large: "py-32 md:py-44",
    full: "min-h-screen flex items-center",
  };

  return (
    <section className={`relative ${sizes[size]} ${className}`}>
      <div className="max-w-4xl mx-auto px-6 text-center">
        {eyebrow && (
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-body text-xs tracking-[0.2em] uppercase text-olive mb-6"
          >
            {eyebrow}
          </motion.p>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-heading text-4xl md:text-5xl lg:text-6xl font-light text-ink leading-[1.15] mb-6"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="font-body text-base md:text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed mb-8"
          >
            {subtitle}
          </motion.p>
        )}
        {children && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {children}
          </motion.div>
        )}
      </div>
      <WaterlineAnimated className="absolute bottom-0 left-0 right-0" opacity={0.3} />
    </section>
  );
}