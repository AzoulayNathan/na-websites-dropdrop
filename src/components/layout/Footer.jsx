import React from "react";
import { Link } from "react-router-dom";
import { BRAND, FOOTER_LINKS } from "@/lib/brand";
import WaterlineAnimated from "@/components/brand/WaterlineAnimated.jsx";

export default function Footer() {
  return (
    <footer className="text-quartz" style={{ background: "#0E1E1A", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
      <WaterlineAnimated opacity={0.2} color="#F6F3ED" />
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="font-heading text-2xl font-semibold tracking-wider text-quartz/70 hover:text-quartz transition-colors">
              {BRAND.name}
            </Link>
            <p className="font-body text-sm text-quartz/30 mt-3 leading-relaxed">
              {BRAND.promise}
            </p>
            <p className="font-heading text-lg italic text-quartz/20 mt-4">
              {BRAND.tagline}
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-body text-xs tracking-[0.15em] uppercase text-quartz/40 mb-4">
              Product
            </h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.product.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="font-body text-sm text-quartz/35 hover:text-quartz/70 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-body text-xs tracking-[0.15em] uppercase text-quartz/40 mb-4">
              Support
            </h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.support.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="font-body text-sm text-quartz/35 hover:text-quartz/70 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-body text-xs tracking-[0.15em] uppercase text-quartz/40 mb-4">
              Legal
            </h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.legal.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="font-body text-sm text-quartz/35 hover:text-quartz/70 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <WaterlineAnimated className="my-10" opacity={0.15} color="#F6F3ED" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-quartz/40">
            © {new Date().getFullYear()} {BRAND.name}. All rights reserved.
          </p>
          <p className="font-body text-xs text-quartz/30 text-center md:text-right max-w-md">
            {BRAND.name} is in pre-launch. Product details, materials and final instructions
            will be confirmed before checkout opens.
          </p>
        </div>
      </div>
    </footer>
  );
}