import React, { useState } from "react";
import { motion } from "framer-motion";
import { base44 } from "@/api/base44Client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import CTAButton from "./CTAButton";
import WaterlineAnimated from "./WaterlineAnimated.jsx";
import { Check, MailCheck } from "lucide-react";
import { USE_CASES, BRAND } from "@/lib/brand";

const COUNTRIES = ["France", "Spain", "Portugal", "Italy", "Germany", "United Kingdom", "Other"];
const PROTECT_ITEMS = ["Phone", "Keys", "Cards / cash", "Passport", "All of it"];
const LANGUAGES = ["French", "English", "Spanish"];

function PillSelect({ options, value, onChange, multi = false }) {
  const toggle = (opt) => {
    if (!multi) {
      onChange(opt === value ? "" : opt);
      return;
    }
    const arr = Array.isArray(value) ? value : [];
    onChange(arr.includes(opt) ? arr.filter((v) => v !== opt) : [...arr, opt]);
  };
  const isSelected = (opt) => (multi ? (Array.isArray(value) ? value.includes(opt) : false) : value === opt);
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((opt) => (
        <button
          key={opt}
          type="button"
          onClick={() => toggle(opt)}
          className={`px-4 py-2 rounded-sm border font-body text-sm transition-all duration-200 cursor-pointer ${
            isSelected(opt)
              ? "bg-sea-green text-quartz border-sea-green"
              : "bg-quartz/60 border-salt/40 text-foreground/60 hover:border-sea-green/30 hover:text-foreground/80"
          }`}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}

export default function WaitlistForm({ source = "home", compact = false }) {
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [useCase, setUseCase] = useState("");
  const [protectFirst, setProtectFirst] = useState("");
  const [language, setLanguage] = useState("");
  const [consent, setConsent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [duplicate, setDuplicate] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !email.includes("@")) { setError("Please enter a valid email."); return; }
    if (!country && !compact) { setError("Please select a country."); return; }
    if (!useCase && !compact) { setError("Please select a use case."); return; }
    if (!consent && !compact) { setError("Please accept the consent checkbox."); return; }
    setLoading(true);
    setError("");
    const existing = await base44.entities.WaitlistEntry.filter({ email });
    if (existing && existing.length > 0) { setLoading(false); setDuplicate(true); return; }
    await base44.entities.WaitlistEntry.create({
      email, country, use_case: useCase, protect_first: protectFirst,
      language_preference: language, consent, source,
    });
    setLoading(false);
    setSuccess(true);
    base44.analytics.track({ eventName: "waitlist_submit", properties: { source } });
  };

  if (success) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="text-center py-6"
      >
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-sea-green/10 mb-5">
          <MailCheck className="w-6 h-6 text-sea-green" />
        </div>
        <h3 className="font-heading text-2xl text-ink mb-2">You're on the list.</h3>
        <p className="font-body text-sm text-foreground/55 mb-6 max-w-xs mx-auto leading-relaxed">
          You'll receive early access before the first drop opens. One more thing: help us shape the first kit in 60 seconds.
        </p>
        <CTAButton to="/survey" variant="secondary">
          Take the 60-second survey
        </CTAButton>
        <p className="font-body text-xs text-foreground/30 mt-4">No spam. Just the launch, the tests, and the first access.</p>
      </motion.div>
    );
  }

  if (duplicate) {
    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-6">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-sky-blue/10 mb-5">
          <Check className="w-6 h-6 text-sky-blue" />
        </div>
        <h3 className="font-heading text-xl text-ink mb-2">You're already on the list.</h3>
        <p className="font-body text-sm text-foreground/55 mb-5">
          You can still take the survey if you want to help shape the first drop.
        </p>
        <CTAButton to="/survey" variant="secondary">Take the 60-second survey</CTAButton>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Email */}
      <div>
        <Label className="font-body text-sm text-foreground/70 mb-1.5 block">Your email *</Label>
        <div className="relative">
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-quartz border-salt/50 focus:border-sea-green/50 focus:ring-0 h-12 font-body pr-4 transition-colors"
            placeholder="your@email.com"
            required
          />
          <div className="absolute bottom-0 left-0 right-0">
            <WaterlineAnimated opacity={0} color="#AFC8D1" className="transition-opacity focus-within:opacity-100" />
          </div>
        </div>
      </div>

      {!compact && (
        <>
          {/* Country */}
          <div>
            <Label className="font-body text-sm text-foreground/70 mb-2 block">Where will you mostly use it? *</Label>
            <PillSelect options={COUNTRIES} value={country} onChange={setCountry} />
          </div>

          {/* Use Case */}
          <div>
            <Label className="font-body text-sm text-foreground/70 mb-2 block">Where would you use DROPDROP first? *</Label>
            <PillSelect options={USE_CASES} value={useCase} onChange={setUseCase} />
          </div>

          {/* Protect first */}
          <div>
            <Label className="font-body text-sm text-foreground/70 mb-2 block">What would you protect first? <span className="text-foreground/35">(optional)</span></Label>
            <PillSelect options={PROTECT_ITEMS} value={protectFirst} onChange={setProtectFirst} />
          </div>

          {/* Language */}
          <div>
            <Label className="font-body text-sm text-foreground/70 mb-2 block">Language preference <span className="text-foreground/35">(optional)</span></Label>
            <PillSelect options={LANGUAGES} value={language} onChange={setLanguage} />
          </div>

          {/* Consent */}
          <div className="flex items-start gap-3 pt-1">
            <button
              type="button"
              onClick={() => setConsent(!consent)}
              className={`mt-0.5 w-5 h-5 rounded-sm border flex-shrink-0 flex items-center justify-center transition-all cursor-pointer ${
                consent ? "bg-sea-green border-sea-green" : "border-salt/60"
              }`}
            >
              {consent && <Check className="w-3 h-3 text-quartz" />}
            </button>
            <p className="font-body text-xs text-foreground/50 leading-relaxed">
              I agree to receive launch updates from DROPDROP. I can unsubscribe anytime.
            </p>
          </div>
        </>
      )}

      {error && (
        <p className="font-body text-sm text-terracotta">{error}</p>
      )}

      <CTAButton type="submit" disabled={loading} className="w-full">
        {loading ? "Joining…" : "Join the first drop"}
      </CTAButton>

      <p className="text-center font-body text-xs text-foreground/35">
        No spam. Just the launch, the tests, and the first access.
      </p>
    </form>
  );
}