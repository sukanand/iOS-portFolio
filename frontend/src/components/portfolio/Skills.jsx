import React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  LayoutGrid,
  Blocks,
  Network,
  Apple,
  Wrench,
} from "lucide-react";
import { SKILLS } from "../../lib/portfolioData";

const ICONS = { Code2, LayoutGrid, Blocks, Network, Apple, Wrench };

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

function SkillCard({ item, index }) {
  const Icon = ICONS[item.icon] || Code2;
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4 }}
      className="group relative rounded-[22px] glass p-6 overflow-hidden"
      data-testid={`skill-card-${item.title.toLowerCase().replace(/\s+/g, "-")}`}
    >
      {/* Hover glow */}
      <div className="pointer-events-none absolute -inset-px rounded-[22px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background:
            "radial-gradient(400px circle at var(--x,50%) var(--y,50%), rgba(10,132,255,0.15), transparent 40%)",
        }}
      />
      <div className="relative">
        <div className="flex items-center gap-3">
          <div className="grid place-items-center h-10 w-10 rounded-xl bg-white/5 border border-white/10 text-white">
            <Icon size={18} />
          </div>
          <div>
            <div className="text-white font-medium tracking-tight">
              {item.title}
            </div>
            <div className="text-white/45 text-[11px] uppercase tracking-widest">
              {item.chips.length} tools
            </div>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap gap-1.5">
          {item.chips.map((chip) => (
            <span
              key={chip}
              className="rounded-full bg-white/[0.04] border border-white/10 px-2.5 py-1 text-[12px] text-white/75"
            >
              {chip}
            </span>
          ))}
        </div>
      </div>

      {/* Corner accent */}
      <div className="absolute -bottom-8 -right-8 h-24 w-24 rounded-full blur-2xl opacity-40 group-hover:opacity-70 transition-opacity"
        style={{
          background:
            index % 2 === 0
              ? "radial-gradient(closest-side, #0A84FF, transparent 70%)"
              : "radial-gradient(closest-side, #7C3AED, transparent 70%)",
        }}
      />
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32" data-testid="skills-section">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Skills"
          title="Everything I use, every day."
          subtitle="A curated stack refined across five years of shipping iOS applications at scale."
        />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {SKILLS.map((s, i) => (
            <SkillCard key={s.title} item={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
