import React from "react";

export default function Waterline({ className = "", variant = "default" }) {
  const variants = {
    default: "h-px bg-sky-blue/40",
    bold: "h-[2px] bg-sky-blue/60",
    section: "h-px bg-salt/50",
    hero: "h-[2px] bg-sky-blue/30",
  };

  return (
    <div className={`relative w-full overflow-hidden ${className}`}>
      <div className={`w-full ${variants[variant] || variants.default}`} />
      <div
        className="absolute top-0 left-0 h-full w-1/3 bg-gradient-to-r from-transparent via-sky-blue/40 to-transparent animate-waterline"
        style={{ animationDuration: "6s" }}
      />
    </div>
  );
}