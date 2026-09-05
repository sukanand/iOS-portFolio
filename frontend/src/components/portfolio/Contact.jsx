import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Github, Send, Loader2, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import { PROFILE } from "../../lib/portfolioData";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const SectionHeader = ({ eyebrow, title, subtitle }) => (
  <div className="max-w-2xl">
    <div className="text-[11px] tracking-[0.22em] uppercase text-white/45">{eyebrow}</div>
    <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.02em] text-white text-balance">
      {title}
    </h2>
    {subtitle && (
      <p className="mt-3 text-white/60 text-[15px] leading-relaxed max-w-xl">
        {subtitle}
      </p>
    )}
  </div>
);

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | loading | success

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Please fill in all fields");
      return;
    }
    setStatus("loading");
    try {
      await axios.post(`${API}/contact`, form);
      setStatus("success");
      toast.success("Message sent — I'll get back to you.");
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 3000);
    } catch (err) {
      setStatus("idle");
      const msg = err?.response?.data?.detail || "Something went wrong. Try again.";
      toast.error(typeof msg === "string" ? msg : "Something went wrong.");
    }
  };

  const contactItems = [
    { icon: Mail, label: "Email", value: PROFILE.email, href: `mailto:${PROFILE.email}`, id: "email" },
    { icon: Phone, label: "Phone", value: PROFILE.phone, href: `tel:${PROFILE.phone.replace(/\s+/g, "")}`, id: "phone" },
    { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/sukanand-yedle", href: PROFILE.linkedin, id: "linkedin" },
    { icon: Github, label: "GitHub", value: "github.com/sukanand-yedle", href: PROFILE.github, id: "github" },
    { icon: MapPin, label: "Location", value: PROFILE.location, href: null, id: "location" },
  ];

  return (
    <section id="contact" className="relative py-24 sm:py-32" data-testid="contact-section">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Contact"
          title="Let's build something remarkable."
          subtitle="Reach out for roles, collaborations, or a friendly Swift chat."
        />

        <div className="mt-14 grid lg:grid-cols-[1fr,1.1fr] gap-6">
          {/* Contact card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative rounded-[28px] glass p-7 sm:p-9 overflow-hidden"
          >
            <div className="absolute -top-16 -right-16 h-52 w-52 rounded-full blur-3xl opacity-40"
              style={{ background: "radial-gradient(closest-side, #0A84FF, transparent 70%)" }}
            />

            <div className="relative">
              <div className="text-white text-lg font-semibold tracking-tight">
                Get in touch
              </div>
              <p className="mt-2 text-white/55 text-[14px]">
                Based in {PROFILE.location}. Open to remote and hybrid roles worldwide.
              </p>

              <div className="mt-7 space-y-3">
                {contactItems.map(({ icon: Icon, label, value, href, id }) => {
                  const Wrap = href ? "a" : "div";
                  return (
                    <Wrap
                      key={label}
                      {...(href ? { href, target: id === "linkedin" || id === "github" ? "_blank" : undefined, rel: "noreferrer" } : {})}
                      data-testid={`contact-item-${id}`}
                      className="group flex items-center gap-4 rounded-2xl bg-white/[0.03] border border-white/10 px-4 py-3.5 hover:bg-white/[0.06] transition-colors"
                    >
                      <div className="grid place-items-center h-10 w-10 rounded-xl bg-white/[0.04] border border-white/10 text-white/85">
                        <Icon size={16} />
                      </div>
                      <div className="min-w-0">
                        <div className="text-[11px] uppercase tracking-widest text-white/45">{label}</div>
                        <div className="text-white text-[14px] truncate">{value}</div>
                      </div>
                    </Wrap>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
