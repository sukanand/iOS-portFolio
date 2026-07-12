import React from "react";
import { motion } from "framer-motion";
import { Briefcase, CheckCircle2 } from "lucide-react";
import { EXPERIENCE } from "../../lib/portfolioData";

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

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32" data-testid="experience-section">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Experience"
          title="A journey of building things that ship."
          subtitle="Leading iOS engineering across banking, fintech, and merchant products."
        />

        <div className="mt-14 relative">
          {/* Vertical timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-white/0 via-white/15 to-white/0" />

          {EXPERIENCE.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative pl-14 md:pl-0 md:grid md:grid-cols-2 md:gap-12 mb-8"
              data-testid={`experience-item-${i}`}
            >
              {/* Node */}
              <div className="absolute left-[9px] md:left-1/2 md:-translate-x-1/2 top-6 h-4 w-4 rounded-full bg-gradient-to-br from-[#0A84FF] to-[#7C3AED] ring-4 ring-black" />

              {/* Left: date */}
              <div className="md:text-right md:pr-10">
                <div className="text-[11px] tracking-[0.22em] uppercase text-white/45">
                  Timeline
                </div>
                <div className="mt-1 text-2xl sm:text-3xl font-semibold tracking-tight text-white">
                  {exp.period}
                </div>
              </div>

              {/* Right: card */}
              <div className="md:pl-10 mt-4 md:mt-0">
                <div className="glass rounded-[22px] p-6 sm:p-7">
                  <div className="flex items-start gap-3">
                    <div className="grid place-items-center h-10 w-10 rounded-xl bg-white/5 border border-white/10 text-white">
                      <Briefcase size={18} />
                    </div>
                    <div>
                      <div className="text-white text-lg font-semibold tracking-tight">
                        {exp.role}
                      </div>
                      <div className="text-white/60 text-[14px]">
                        {exp.company}
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 grid sm:grid-cols-2 gap-x-6 gap-y-2.5">
                    {exp.responsibilities.map((r, idx) => (
                      <div
                        key={r}
                        className="flex items-start gap-2.5 text-[13.5px] text-white/75"
                        data-testid={`experience-resp-${idx}`}
                      >
                        <CheckCircle2 size={14} className="mt-1 text-[#0A84FF] flex-shrink-0" />
                        <span>{r}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
