import React from "react";

export default function WaterlineAnimated({ className = "", opacity = 0.4 }) {
  return (
    <div className={`relative w-full overflow-hidden h-px ${className}`} style={{ opacity }}>
      <div className="w-full h-full bg-sky-blue/40" />
      <div
        className="absolute top-0 left-0 h-full w-1/3 bg-gradient-to-r from-transparent via-sky-blue/60 to-transparent animate-waterline"
        style={{ animationDuration: "6s" }}
      />
    </div>
  );
}