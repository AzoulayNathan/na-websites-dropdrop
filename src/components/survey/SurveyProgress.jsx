import React from "react";
import { motion } from "framer-motion";

export default function SurveyProgress({ step, total }) {
  const pct = ((step + 1) / total) * 100;

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-2">
        <span className="font-body text-xs text-foreground/40 tracking-wide">
          Step {step + 1} of {total}
        </span>
        <span className="font-body text-xs text-foreground/30">
          {Math.round(pct)}%
        </span>
      </div>
      {/* Waterline progress */}
      <div className="relative h-[2px] bg-salt/30 rounded-full overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 h-full bg-sky-blue rounded-full"
          animate={{ width: `${pct}%` }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
        {/* Shimmer */}
        <motion.div
          className="absolute top-0 h-full w-12 bg-gradient-to-r from-transparent via-white/40 to-transparent"
          animate={{ left: [`${pct - 20}%`, `${pct}%`] }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}