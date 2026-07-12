import React from "react";
import { motion } from "framer-motion";
import { ABOUT_EXPERTISE, PROFILE } from "../../lib/portfolioData";

const SectionHeader = ({ eyebrow, title, subtitle, testid }) => (
  <div data-testid={testid} className="max-w-2xl">
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

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32" data-testid="about-section">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="About"
          title="Crafting delightful iOS experiences."
          testid="about-header"
        />

        <div className="mt-14 grid lg:grid-cols-[420px,1fr] gap-12 lg:gap-16 items-start">
          {/* Left — portrait */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-[28px] overflow-hidden glass p-[1px]">
              <div className="relative h-full w-full rounded-[27px] overflow-hidden">
                <img
                  src={PROFILE.photoUrl}
                  alt={PROFILE.name}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(0,0,0,0.85) 100%)",
                  }}
                />
                <div className="absolute inset-0 noise-overlay" />
                <div className="absolute inset-0 flex items-end p-6">
                  <div className="glass rounded-2xl p-4 w-full">
                    <div className="text-[11px] uppercase tracking-widest text-white/60">
                      Based in
                    </div>
                    <div className="mt-1 text-white text-[15px] font-medium">
                      {PROFILE.location}
                    </div>
                  </div>
                </div>
                {/* Monogram */}
                <div className="absolute top-6 right-6 h-14 w-14 rounded-2xl bg-gradient-to-br from-[#0A84FF] to-[#7C3AED] grid place-items-center text-white text-xl font-semibold shadow-lg">
                  SY
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right — content */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="space-y-6"
          >
            <p className="text-white/75 text-lg leading-relaxed">
              I&apos;m an iOS developer with more than five years of experience
              building enterprise applications for Banking, FinTech, and
              Merchant Services.
            </p>
            <p className="text-white/60 text-[15px] leading-relaxed">
              I specialize in building scalable, secure, and high-performance
              mobile applications using modern Apple technologies.
            </p>

            <div className="pt-2">
              <div className="text-[11px] tracking-[0.22em] uppercase text-white/45 mb-4">
                Areas of expertise
              </div>
              <div className="flex flex-wrap gap-2">
                {ABOUT_EXPERTISE.map((item, i) => (
                  <motion.span
                    key={item}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.04 * i, duration: 0.5 }}
                    className="rounded-full glass px-3.5 py-1.5 text-[13px] text-white/85"
                    data-testid={`about-expertise-${i}`}
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </div>

            <div className="pt-4 relative">
              <div className="absolute -left-4 top-0 h-full w-[2px] bg-gradient-to-b from-[#0A84FF] to-[#7C3AED] rounded-full" />
              <p className="text-white/80 text-[15px] leading-relaxed italic">
                &ldquo;I enjoy solving complex engineering challenges, improving
                application performance, mentoring developers, and building
                delightful user experiences.&rdquo;
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
