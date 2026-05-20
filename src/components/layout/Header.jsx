import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { BRAND, NAV_LINKS } from "@/lib/brand";


export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-md border-b border-white/8"
          : "bg-transparent"
      }`}
      style={scrolled ? { background: "rgba(14,30,26,0.88)" } : {}}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 md:h-20 flex items-center justify-between">
        {/* Wordmark */}
        <Link
          to="/"
          className="font-heading text-xl md:text-2xl font-semibold tracking-[0.12em] text-quartz/80 hover:text-quartz transition-colors"
        >
          {BRAND.name}
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-body text-sm tracking-wide transition-colors ${
                location.pathname === link.path
                  ? "text-sky-blue/80"
                  : "text-quartz/40 hover:text-quartz/80"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
              to="/waitlist"
              className="font-body text-xs tracking-[0.2em] uppercase px-5 py-2.5 border border-quartz/15 text-quartz/40 hover:border-sky-blue/40 hover:text-quartz/80 transition-all duration-400"
            >
              Premier drop
            </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-quartz/60 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden backdrop-blur-lg border-t border-white/8" style={{ background: "rgba(14,30,26,0.96)" }}>
          <nav className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="font-body text-base text-quartz/50 hover:text-quartz/90 py-1 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-white/8 space-y-3">
              <Link
                to="/waitlist"
                className="block text-center font-body text-sm tracking-[0.2em] uppercase px-6 py-3 border border-quartz/15 text-quartz/50 hover:border-sky-blue/40 hover:text-quartz/80 transition-all"
              >
                Premier drop
              </Link>
              <Link
                to="/survey"
                className="block text-center font-body text-xs text-quartz/25 hover:text-quartz/50 transition-colors"
              >
                Survey 60 secondes →
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}