import React from "react";

export default function ProtectionHalo({ className = "" }) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* Outer ring */}
      <div className="absolute w-64 h-64 rounded-full border border-sky-blue/20 animate-pulse" />
      {/* Middle ring */}
      <div className="absolute w-48 h-48 rounded-full border border-sky-blue/30" />
      {/* Inner ring */}
      <div className="absolute w-32 h-32 rounded-full border border-sea-green/20 bg-sea-green/5" />
      {/* Core dot */}
      <div className="w-4 h-4 rounded-full bg-sky-blue/40" />
    </div>
  );
}