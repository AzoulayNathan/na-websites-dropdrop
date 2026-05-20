import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { FAQ_DATA } from "@/lib/faqData";
import { Plus } from "lucide-react";

export default function FAQ() {
  const [open, setOpen] = useState({});
  const toggle = (key) => setOpen((prev) => ({ ...prev, [key]: !prev[key] }));

  return (
    <div className="min-h-screen" style={{ background: "#F6F3ED" }}>
      {/* Hero */}
      <section className="pt-32 pb-20 px-6 text-center" style={{ background: "#1F3D33" }}>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="font-body text-[10px] tracking-[0.35em] uppercase text-quartz/30 mb-6"
        >
          Avant le premier drop
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-heading text-4xl md:text-6xl font-light text-quartz/88 leading-[1.1] max-w-2xl mx-auto"
        >
          Questions pour<br />
          <em className="not-italic" style={{ color: "rgba(175,200,209,0.7)" }}>avoir confiance.</em>
        </motion.h1>
      </section>

      {/* FAQ accordion — minimal, typographic */}
      <section className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6">
          {FAQ_DATA.map((group, gi) => (
            <motion.div
              key={gi}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: gi * 0.06 }}
              className="mb-14"
            >
              <p className="font-body text-[10px] tracking-[0.2em] uppercase text-olive/40 mb-6">
                {group.category}
              </p>
              <div className="space-y-0">
                {group.items.map((item, i) => {
                  const key = `${gi}-${i}`;
                  const isOpen = !!open[key];
                  return (
                    <div key={i} className="border-b border-salt/30">
                      <button
                        className="w-full flex items-start justify-between py-5 gap-4 text-left group"
                        onClick={() => toggle(key)}
                      >
                        <span className="font-heading text-lg text-ink group-hover:text-sea-green transition-colors leading-snug">
                          {item.q}
                        </span>
                        <motion.div
                          animate={{ rotate: isOpen ? 45 : 0 }}
                          transition={{ duration: 0.25 }}
                          className="flex-shrink-0 mt-1"
                        >
                          <Plus className="w-4 h-4 text-sea-green/40" />
                        </motion.div>
                      </button>
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <p className="font-body text-sm text-foreground/55 leading-relaxed pb-5 max-w-xl">
                              {item.a}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}

          <div className="h-px mb-16" style={{ background: "linear-gradient(to right, transparent, rgba(175,200,209,0.4), transparent)" }} />

          <div className="text-center">
            <Link
              to="/waitlist"
              className="font-body text-sm tracking-[0.2em] uppercase px-8 py-3.5 border border-sea-green/20 text-sea-green/60 hover:border-sea-green/50 hover:text-sea-green transition-all duration-500"
            >
              Rejoindre le premier drop
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}