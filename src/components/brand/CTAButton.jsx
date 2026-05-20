import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function CTAButton({
  children,
  to,
  onClick,
  variant = "primary",
  size = "default",
  className = "",
  type = "button",
  disabled = false,
}) {
  const [ripple, setRipple] = useState(false);

  const base =
    "relative inline-flex items-center justify-center font-body font-medium tracking-wide transition-all duration-300 overflow-hidden";

  const sizes = {
    default: "px-8 py-3.5 text-sm",
    large: "px-10 py-4 text-base",
    small: "px-6 py-2.5 text-sm",
  };

  const variants = {
    primary:
      "bg-sea-green text-quartz hover:bg-olive rounded-sm",
    secondary:
      "bg-transparent text-sea-green border border-sea-green/30 hover:border-sea-green/60 rounded-sm",
    terracotta:
      "bg-terracotta text-quartz hover:bg-terracotta/90 rounded-sm",
    ghost:
      "bg-transparent text-sea-green hover:text-olive underline underline-offset-4 decoration-sky-blue/50 hover:decoration-sky-blue",
    outline:
      "bg-quartz text-sea-green border border-salt hover:border-sea-green/40 rounded-sm",
  };

  const handleClick = (e) => {
    setRipple(true);
    setTimeout(() => setRipple(false), 600);
    if (onClick) onClick(e);
  };

  const classes = `${base} ${sizes[size]} ${variants[variant]} ${
    disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
  } ${className}`;

  const content = (
    <>
      {ripple && (
        <span
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          aria-hidden="true"
        >
          <span className="w-2 h-2 rounded-full bg-sky-blue/30 animate-ping" />
        </span>
      )}
      <span className="relative z-10">{children}</span>
      {/* Waterline underline on hover */}
      <span className="absolute bottom-0 left-0 w-full h-[1px] bg-sky-blue/0 group-hover:bg-sky-blue/40 transition-colors duration-500" />
    </>
  );

  if (to) {
    return (
      <Link to={to} className={`group ${classes}`} onClick={handleClick}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={`group ${classes}`}
      onClick={handleClick}
      disabled={disabled}
    >
      {content}
    </button>
  );
}