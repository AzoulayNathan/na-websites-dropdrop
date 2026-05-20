import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { base44 } from "@/api/base44Client";
import CTAButton from "@/components/brand/CTAButton";
import WaterlineAnimated from "@/components/brand/WaterlineAnimated.jsx";
import SurveyChoiceButton from "@/components/survey/SurveyChoiceButton.jsx";
import SurveyProgress from "@/components/survey/SurveyProgress.jsx";
import { BRAND } from "@/lib/brand";
import { ChevronLeft, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Check } from "lucide-react";

const QUESTIONS = [
  {
    id: "use_case",
    q: "Where would you use DROPDROP first?",
    type: "single",
    options: ["Beach", "Pool", "Boat trip", "Water park", "Solo travel", "Family holiday", "Festival / summer day out", "Other"],
  },
  {
    id: "protected_items",
    q: "What would you most want to protect?",
    type: "multi",
    options: ["Phone", "Keys", "Cards / cash", "Passport / ID", "Earbuds", "Jewelry", "Medication / small essentials", "All of it"],
  },
  {
    id: "stress_situation",
    q: "What is the most stressful situation for you?",
    type: "single",
    options: [
      "Leaving my phone under a towel",
      "Swimming alone while my stuff stays on the beach",
      "Going into the water with children and no free hands",
      "Keeping cards/keys dry on a boat",
      "Phone getting wet at a pool or water park",
      "Sand getting into everything",
      "Losing access to maps/tickets/payment while traveling",
      "Other",
    ],
  },
  {
    id: "preferred_format",
    q: "Which product format feels most useful?",
    type: "single",
    options: [
      "Phone pouch only",
      "Phone pouch + crossbody strap",
      "Full kit: phone pouch + strap + small valuables pouch",
      "Duo pack for couple / friend",
      "Family pack",
      "Not sure yet",
    ],
  },
  {
    id: "trust_drivers",
    q: "What would make you trust this product?",
    type: "multi",
    options: [
      "Real water test video",
      "Float test with heavy phone",
      "Large phone compatibility",
      "Clear closure system",
      "Material safety documentation",
      "Real customer reviews",
      "Return policy",
      "Creator test / UGC",
      "Before-use test card included",
    ],
  },
  {
    id: "acceptable_price",
    q: "What price would feel acceptable for a serious, well-designed kit?",
    type: "single",
    options: ["Under €39", "Around €49", "Around €59", "Around €69", "Around €79", "I would only buy with a discount", "I am not sure"],
  },
  {
    id: "preferred_style",
    q: "Which style would you choose first?",
    type: "single",
    options: ["Matte black", "Sand / stone", "Olive green", "Deep sea green", "Sky blue", "Terracotta accent", "Transparent minimal", "I want several color options"],
  },
  {
    id: "purchase_timing",
    q: "How soon would you consider buying?",
    type: "single",
    options: [
      "As soon as it launches",
      "Before my next trip",
      "Before summer holidays",
      "Only after seeing reviews",
      "Only if discounted",
      "I am just curious",
    ],
  },
  {
    id: "country",
    q: "Where are you based?",
    type: "single",
    options: ["France", "Spain", "Portugal", "Italy", "Germany", "United Kingdom", "Other Europe", "Outside Europe"],
  },
  {
    id: "email_capture",
    q: "Would you like early access?",
    type: "email",
    skip: true,
  },
];

export default function Survey() {
  const [started, setStarted] = useState(false);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [emailField, setEmailField] = useState("");
  const [socialHandle, setSocialHandle] = useState("");
  const [comment, setComment] = useState("");
  const [consent, setConsent] = useState(false);
  const [complete, setComplete] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const current = QUESTIONS[step];
  const isMulti = current.type === "multi";

  const toggleAnswer = (opt) => {
    if (isMulti) {
      const arr = Array.isArray(answers[current.id]) ? answers[current.id] : [];
      setAnswers((p) => ({
        ...p,
        [current.id]: arr.includes(opt) ? arr.filter((v) => v !== opt) : [...arr, opt],
      }));
    } else {
      setAnswers((p) => ({ ...p, [current.id]: opt }));
    }
  };

  const hasAnswer = () => {
    if (current.type === "email") return true; // always skippable
    if (isMulti) return (answers[current.id]?.length || 0) > 0;
    return !!answers[current.id];
  };

  const next = async () => {
    if (step < QUESTIONS.length - 1) {
      setStep(step + 1);
      base44.analytics.track({ eventName: "survey_question_answered", properties: { step: step + 1 } });
    } else {
      setSubmitting(true);
      const payload = {
        ...answers,
        email: emailField || null,
        social_handle: socialHandle || null,
        comment: comment || null,
        consent,
        source: "survey_page",
        protected_items: Array.isArray(answers.protected_items)
          ? answers.protected_items.join(", ")
          : answers.protected_items,
        trust_drivers: Array.isArray(answers.trust_drivers)
          ? answers.trust_drivers.join(", ")
          : answers.trust_drivers,
      };
      await base44.entities.SurveyResponse.create(payload);
      base44.analytics.track({ eventName: "survey_completed" });
      setSubmitting(false);
      setComplete(true);
    }
  };

  const prev = () => { if (step > 0) setStep(step - 1); };

  /* ── INTRO ── */
  if (!started) {
    return (
      <div className="min-h-screen bg-sand flex items-center justify-center px-6">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-[100px]" style={{ backgroundColor: 'rgba(175,200,209,0.05)' }} />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full blur-3xl" style={{ backgroundColor: 'rgba(181,82,59,0.05)' }} />
        </div>
        <div className="relative z-10 max-w-lg w-full text-center">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}
            className="font-body text-xs tracking-[0.2em] uppercase text-olive/60 mb-6">
            Product research — 60 seconds
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
            className="font-heading text-4xl md:text-5xl font-light text-ink leading-tight mb-4">
            Help shape<br />the first drop.
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="font-body text-base text-foreground/55 leading-relaxed mb-8 max-w-sm mx-auto">
            We are finalizing the first {BRAND.name} kit. Your answers help us choose the right format,
            price, style and launch priorities.
          </motion.p>
          <WaterlineAnimated className="max-w-xs mx-auto mb-8" opacity={0.5} />
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.35 }}>
            <CTAButton onClick={() => { setStarted(true); base44.analytics.track({ eventName: "survey_start" }); }} size="large">
              Start the survey
            </CTAButton>
            <p className="font-body text-xs text-foreground/30 mt-4">{QUESTIONS.length} questions. About 60 seconds.</p>
          </motion.div>
        </div>
      </div>
    );
  }

  /* ── COMPLETE ── */
  if (complete) {
    return (
      <div className="min-h-screen bg-sand flex items-center justify-center px-6">
        <div className="text-center max-w-md">
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-sea-green/10 mb-6">
            <Check className="w-7 h-7 text-sea-green" />
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="font-heading text-3xl font-light text-ink mb-3">
            Thank you. You just helped<br />shape the first drop.
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.4 }}
            className="font-body text-sm text-foreground/50 mb-8 max-w-xs mx-auto leading-relaxed">
            We'll use these answers to prioritize the first kit, test the right details and prepare launch access.
          </motion.p>
          <CTAButton to="/" variant="secondary">Back to the site</CTAButton>
        </div>
      </div>
    );
  }

  /* ── QUESTIONS ── */
  return (
    <div className="min-h-screen bg-sand flex flex-col">
      {/* Atmosphere */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-[120px]" style={{ backgroundColor: 'rgba(175,200,209,0.04)' }} />
      </div>

      {/* Top bar */}
      <div className="relative z-10 pt-24 md:pt-28 px-6 max-w-xl mx-auto w-full">
        <SurveyProgress step={step} total={QUESTIONS.length} />
      </div>

      {/* Question area */}
      <div className="relative z-10 flex-1 flex items-start justify-center px-6 pt-10 pb-20">
        <div className="max-w-xl w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="font-heading text-2xl md:text-3xl text-ink mb-6 leading-snug">
                {current.q}
              </h2>

              {/* Single / Multi */}
              {(current.type === "single" || current.type === "multi") && (
                <div className="space-y-2">
                  {current.options.map((opt) => (
                    <SurveyChoiceButton
                      key={opt}
                      label={opt}
                      selected={
                        isMulti
                          ? (Array.isArray(answers[current.id]) ? answers[current.id].includes(opt) : false)
                          : answers[current.id] === opt
                      }
                      onClick={() => toggleAnswer(opt)}
                      multi={isMulti}
                    />
                  ))}
                  {isMulti && (
                    <p className="font-body text-xs text-foreground/35 mt-2">Select all that apply</p>
                  )}
                </div>
              )}

              {/* Email capture */}
              {current.type === "email" && (
                <div className="space-y-4">
                  <div>
                    <Label className="font-body text-sm text-foreground/60 mb-2 block">Email address</Label>
                    <Input
                      type="email"
                      value={emailField}
                      onChange={(e) => setEmailField(e.target.value)}
                      placeholder="your@email.com"
                      className="bg-quartz border-salt/50 h-12 font-body focus:border-sea-green/40"
                    />
                  </div>
                  <div>
                    <Label className="font-body text-sm text-foreground/60 mb-2 block">Instagram or TikTok handle <span className="text-foreground/30">(optional)</span></Label>
                    <Input
                      type="text"
                      value={socialHandle}
                      onChange={(e) => setSocialHandle(e.target.value)}
                      placeholder="@handle"
                      className="bg-quartz border-salt/50 h-12 font-body focus:border-sea-green/40"
                    />
                  </div>
                  <div>
                    <Label className="font-body text-sm text-foreground/60 mb-2 block">Any other thoughts? <span className="text-foreground/30">(optional)</span></Label>
                    <Textarea
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      placeholder="Anything else you'd like us to know…"
                      className="bg-quartz border-salt/50 font-body min-h-[80px] focus:border-sea-green/40"
                    />
                  </div>
                  <div className="flex items-start gap-3">
                    <button
                      type="button"
                      onClick={() => setConsent(!consent)}
                      className={`mt-0.5 w-5 h-5 rounded-sm border flex-shrink-0 flex items-center justify-center transition-all cursor-pointer ${
                        consent ? "bg-sea-green border-sea-green" : "border-salt/60"
                      }`}
                    >
                      {consent && <Check className="w-3 h-3 text-quartz" />}
                    </button>
                    <p className="font-body text-xs text-foreground/45 leading-relaxed">
                      I agree to receive launch updates from DROPDROP. I can unsubscribe anytime.
                    </p>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            <button
              onClick={prev}
              disabled={step === 0}
              className="flex items-center gap-1 font-body text-sm text-foreground/35 hover:text-foreground/55 disabled:opacity-0 transition-all cursor-pointer disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-4 h-4" /> Back
            </button>

            <div className="flex items-center gap-3">
              {current.skip && (
                <button
                  onClick={next}
                  className="font-body text-sm text-foreground/35 hover:text-foreground/55 transition-colors cursor-pointer"
                >
                  Skip
                </button>
              )}
              <CTAButton
                onClick={next}
                disabled={!hasAnswer() && !current.skip}
                size="small"
              >
                <span className="flex items-center gap-2">
                  {step === QUESTIONS.length - 1 ? (submitting ? "Sending…" : "Finish") : "Next"}
                  {step < QUESTIONS.length - 1 && <ArrowRight className="w-3.5 h-3.5" />}
                </span>
              </CTAButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}