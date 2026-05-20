import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function SurveyChoiceButton({ label, selected, onClick, multi = false }) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileTap={{ scale: 0.98 }}
      className={`w-full text-left px-5 py-4 rounded-sm border transition-all duration-200 cursor-pointer font-body text-sm leading-relaxed flex items-center justify-between gap-3 ${
        selected
          ? "bg-sea-green text-quartz border-sea-green shadow-sm"
          : "bg-quartz/60 border-salt/40 text-foreground/65 hover:border-sea-green/25 hover:bg-quartz/80"
      }`}
    >
      <span>{label}</span>
      <span
        className={`flex-shrink-0 w-5 h-5 rounded-full border flex items-center justify-center transition-all ${
          selected ? "bg-quartz/20 border-quartz/40" : "border-salt/40"
        }`}
      >
        {selected && <Check className="w-3 h-3 text-quartz" />}
      </span>
    </motion.button>
  );
}