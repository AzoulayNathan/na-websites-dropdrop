import React, { useState } from "react";
import { motion } from "framer-motion";
import { base44 } from "@/api/base44Client";
import PageHero from "@/components/brand/PageHero";
import CTAButton from "@/components/brand/CTAButton";
import WaterlineAnimated from "@/components/brand/WaterlineAnimated.jsx";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Camera, Handshake, Factory, Check } from "lucide-react";
import { BRAND } from "@/lib/brand";

const paths = [
  {
    icon: Camera,
    title: "Creator previews",
    desc: "Beach, travel, family, pool or boat content creators.",
    cta: "Ask about creator previews",
    type: "creator_preview",
  },
  {
    icon: Handshake,
    title: "Partnership enquiries",
    desc: "Beach clubs, hotels, paddle clubs, boat rentals, water parks, travel brands.",
    cta: "Start a partnership enquiry",
    type: "partnership",
  },
  {
    icon: Factory,
    title: "Supplier submissions",
    desc: "Manufacturers, product suppliers, material or packaging partners.",
    cta: "Submit supplier details",
    type: "supplier",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1 } }),
};

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", enquiry_type: "general", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.email || !form.message) {
      setError("Please fill in email and message.");
      return;
    }
    setLoading(true);
    setError("");
    await base44.entities.ContactMessage.create(form);
    base44.analytics.track({ eventName: "contact_submit", properties: { type: form.enquiry_type } });
    setLoading(false);
    setSuccess(true);
  };

  const selectPath = (type) => {
    setForm((prev) => ({ ...prev, enquiry_type: type }));
    document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-quartz">
      <PageHero
        title="Contact the launch team."
        subtitle={`For creator previews, partnerships, supplier submissions or general questions before the first drop.`}
        className="bg-sand"
      />

      {/* Contact paths */}
      <section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {paths.map((path, i) => (
              <motion.div
                key={i}
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}
                className="bg-sand/50 border border-salt/20 rounded-sm p-6 flex flex-col"
              >
                <path.icon className="w-5 h-5 text-sea-green mb-4" />
                <h3 className="font-heading text-xl text-ink mb-2">{path.title}</h3>
                <p className="font-body text-sm text-foreground/50 mb-4 flex-1">{path.desc}</p>
                <button
                  onClick={() => selectPath(path.type)}
                  className="font-body text-sm text-sea-green underline underline-offset-4 decoration-sky-blue/40 hover:decoration-sky-blue text-left cursor-pointer"
                >
                  {path.cta}
                </button>
              </motion.div>
            ))}
          </div>

          <WaterlineAnimated className="mb-16" opacity={0.4} />

          {/* General contact form */}
          <div id="contact-form" className="max-w-lg mx-auto">
            {success ? (
              <div className="text-center py-12">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-sea-green/10 mb-4">
                  <Check className="w-5 h-5 text-sea-green" />
                </div>
                <h3 className="font-heading text-2xl text-ink mb-2">Message sent.</h3>
                <p className="font-body text-sm text-foreground/50">
                  We will get back to you before the first drop.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 bg-sand/50 border border-salt/20 rounded-sm p-8">
                <h3 className="font-heading text-xl text-ink mb-2">Send us a message</h3>
                <div>
                  <Label className="font-body text-sm text-foreground/70 mb-1.5 block">Name</Label>
                  <Input
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="bg-quartz border-salt/60 h-11 font-body"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <Label className="font-body text-sm text-foreground/70 mb-1.5 block">Email</Label>
                  <Input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="bg-quartz border-salt/60 h-11 font-body"
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div>
                  <Label className="font-body text-sm text-foreground/70 mb-1.5 block">Enquiry type</Label>
                  <Select value={form.enquiry_type} onValueChange={(v) => setForm({ ...form, enquiry_type: v })}>
                    <SelectTrigger className="bg-quartz border-salt/60 h-11 font-body">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">General question</SelectItem>
                      <SelectItem value="creator_preview">Creator preview</SelectItem>
                      <SelectItem value="partnership">Partnership</SelectItem>
                      <SelectItem value="supplier">Supplier submission</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label className="font-body text-sm text-foreground/70 mb-1.5 block">Message</Label>
                  <Textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="bg-quartz border-salt/60 font-body min-h-[120px]"
                    placeholder="Tell us what you need…"
                    required
                  />
                </div>
                {error && <p className="text-sm text-terracotta font-body">{error}</p>}
                <CTAButton type="submit" disabled={loading} className="w-full">
                  {loading ? "Sending…" : "Send message"}
                </CTAButton>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}