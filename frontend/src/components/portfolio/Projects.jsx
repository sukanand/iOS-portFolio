import React from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowUpRight } from "lucide-react";
import { PROJECTS } from "../../lib/portfolioData";

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

// Compact phone mockup used inside project cards
function PhoneMockup({ accent = "blue", label }) {
  const bg =
    accent === "blue"
      ? "radial-gradient(120% 80% at 30% 0%, rgba(10,132,255,0.55), transparent 55%), linear-gradient(180deg, #0b0f18, #050506)"
      : accent === "purple"
      ? "radial-gradient(120% 80% at 70% 0%, rgba(124,58,237,0.55), transparent 55%), linear-gradient(180deg, #100a1a, #050506)"
      : "radial-gradient(120% 80% at 30% 0%, rgba(10,132,255,0.55), transparent 55%), radial-gradient(120% 80% at 80% 100%, rgba(124,58,237,0.55), transparent 55%), linear-gradient(180deg, #0a0a0c, #050506)";

  return (
    <div className="relative w-full max-w-[240px] mx-auto aspect-[9/19]">
      <div className="absolute -inset-10 rounded-full blur-3xl opacity-50"
        style={{
          background:
            accent === "purple"
              ? "radial-gradient(closest-side, rgba(124,58,237,0.55), transparent 70%)"
              : "radial-gradient(closest-side, rgba(10,132,255,0.55), transparent 70%)",
        }}
      />
      <div className="relative h-full w-full rounded-[36px] p-[2px] bg-gradient-to-b from-white/25 via-white/10 to-white/5">
        <div
          className="h-full w-full rounded-[34px] overflow-hidden relative border border-white/5"
          style={{ background: bg }}
        >
          <div className="absolute left-1/2 top-2 -translate-x-1/2 h-5 w-20 rounded-full bg-black z-10 border border-white/10" />
          <div className="absolute inset-0 p-3 pt-9 flex flex-col gap-2">
            <div className="rounded-xl glass p-3">
              <div className="text-[9px] uppercase tracking-widest text-white/50">
                {label}
              </div>
              <div className="mt-1 text-white text-[12px] font-medium">
                Overview
              </div>
              <div className="mt-2 h-1 w-full rounded-full bg-white/10 overflow-hidden">
                <div className="h-full w-2/3 bg-gradient-to-r from-[#0A84FF] to-[#7C3AED]" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {[0, 1, 2, 3].map((k) => (
                <div key={k} className="rounded-lg h-12 bg-white/[0.04] border border-white/10" />
              ))}
            </div>
            <div className="rounded-xl glass p-2 flex items-center justify-between">
              <div className="text-[10px] text-white/60">Active</div>
              <div className="h-5 w-5 rounded-full bg-gradient-to-br from-[#0A84FF] to-[#7C3AED]" />
            </div>
            <div className="mt-auto mx-auto h-1 w-16 rounded-full bg-white/40" />
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project }) {
  const isFeatured = project.featured;

  return (
    <motion.article
      initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative rounded-[28px] glass overflow-hidden ${
        isFeatured ? "lg:col-span-2" : ""
      }`}
      data-testid={`project-card-${project.id}`}
    >
      <div
        className={`relative grid ${
          isFeatured ? "lg:grid-cols-[1fr,1fr]" : "md:grid-cols-[1fr,240px]"
        } gap-8 lg:gap-12 p-7 sm:p-10`}
      >
        {/* Content */}
        <div className="relative">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="rounded-full glass px-3 py-1 text-[11px] uppercase tracking-widest text-white/70">
              {project.category}
            </span>
            {project.badge && (
              <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] uppercase tracking-widest text-white bg-gradient-to-r from-[#0A84FF] to-[#7C3AED]">
                <Sparkles size={12} />
                {project.badge}
              </span>
            )}
          </div>

          <h3 className={`mt-5 font-semibold tracking-[-0.02em] text-white ${
            isFeatured ? "text-4xl sm:text-5xl" : "text-2xl sm:text-3xl"
          }`}>
            {project.name}
          </h3>

          <p className="mt-4 text-white/70 text-[15px] leading-relaxed max-w-2xl">
            {project.description}
          </p>

          <div className="mt-6">
            <div className="text-[11px] uppercase tracking-widest text-white/45 mb-2.5">
              Technologies
            </div>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-white/[0.04] border border-white/10 px-2.5 py-1 text-[12px] text-white/80"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <div className="text-[11px] uppercase tracking-widest text-white/45 mb-2.5">
              Key Features
            </div>
            <div className={`grid ${isFeatured ? "sm:grid-cols-2" : "grid-cols-1"} gap-x-6 gap-y-1.5`}>
              {project.features.map((f) => (
                <div
                  key={f}
                  className="flex items-center gap-2 text-[13.5px] text-white/75"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-br from-[#0A84FF] to-[#7C3AED]" />
                  {f}
                </div>
              ))}
            </div>
          </div>

          {/* Featured extras removed per request */}

          {project.appStoreUrl && (
            <div className="mt-8">
              <a
                href={project.appStoreUrl}
                target="_blank"
                rel="noreferrer"
                data-testid={`project-appstore-${project.id}`}
                className="group inline-flex items-center gap-2.5 rounded-full bg-white text-black px-5 py-3 text-[13.5px] font-medium hover:bg-white/90 transition-colors active:scale-[0.98] shadow-[0_10px_30px_-10px_rgba(255,255,255,0.35)]"
              >
                <svg
                  aria-hidden
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                </svg>
                <span>App Store</span>
                <ArrowUpRight
                  size={14}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </div>
          )}
        </div>

        {/* Visual */}
        <div className="relative flex items-center justify-center">
          <motion.div
            whileHover={{ scale: 1.03, rotate: -1.2 }}
            transition={{ type: "spring", stiffness: 200, damping: 22 }}
            className="w-full flex items-center justify-center"
          >
            <PhoneMockup accent={project.accent} label={project.name} />
          </motion.div>
        </div>
      </div>

      {/* Corner glow */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full blur-3xl opacity-30"
        style={{
          background:
            project.accent === "purple"
              ? "radial-gradient(closest-side, #7C3AED, transparent 70%)"
              : project.accent === "gradient"
              ? "radial-gradient(closest-side, #0A84FF, transparent 70%)"
              : "radial-gradient(closest-side, #0A84FF, transparent 70%)",
        }}
      />
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-32" data-testid="projects-section">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Featured Projects"
          title="Products loved by millions of merchants and customers."
          subtitle="A selection of iOS applications I've engineered — from secure banking to independent passion projects."
        />

        <div className="mt-14 grid lg:grid-cols-2 gap-5 sm:gap-6">
          {PROJECTS.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
