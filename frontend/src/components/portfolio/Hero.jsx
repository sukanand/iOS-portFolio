import React from "react";
import { motion } from "framer-motion";
import { Download, ArrowRight, Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import { PROFILE } from "../../lib/portfolioData";

const fadeUp = {
  hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { delay: 0.08 * i, duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  }),
};

const PhoneVisual = () => (
  <motion.div
    initial={{ opacity: 0, y: 40, scale: 0.96 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
    className="relative w-[280px] sm:w-[320px] md:w-[360px] aspect-[9/19] mx-auto"
    data-testid="hero-phone-visual"
  >
    {/* Ambient glow */}
    <div className="absolute -inset-16 rounded-full blur-3xl opacity-60"
      style={{
        background:
          "radial-gradient(closest-side, rgba(10,132,255,0.55), transparent 70%), radial-gradient(closest-side, rgba(124,58,237,0.45), transparent 70%)",
      }}
    />

    {/* Phone frame */}
    <div className="relative h-full w-full rounded-[42px] p-[3px] bg-gradient-to-b from-white/25 via-white/10 to-white/5 shadow-[0_40px_120px_-20px_rgba(10,132,255,0.35)]">
      <div className="h-full w-full rounded-[38px] bg-black overflow-hidden relative border border-white/5">
        {/* Notch */}
        <div className="absolute left-1/2 top-2.5 -translate-x-1/2 h-6 w-24 rounded-full bg-black z-20 border border-white/10" />

        {/* Screen content */}
        <div className="absolute inset-0 p-4 pt-10 flex flex-col gap-3">
          {/* Status bar */}
          <div className="flex items-center justify-between text-[10px] text-white/70 px-2">
            <span>9:41</span>
            <span>Xcode</span>
          </div>

          {/* App tile stack */}
          <div className="flex-1 flex flex-col gap-3 mt-1">
            <motion.div
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="rounded-2xl p-3 glass"
            >
              <div className="text-[10px] text-white/50 uppercase tracking-widest">Swift</div>
              <div className="mt-2 text-white text-[13px] font-medium leading-tight">
                func build() → App
              </div>
              <div className="mt-3 flex gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-[#0A84FF]" />
                <span className="h-1.5 w-1.5 rounded-full bg-[#7C3AED]" />
                <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="rounded-2xl p-3 glass"
            >
              <div className="text-[10px] text-white/50 uppercase tracking-widest">SwiftUI</div>
              <div className="mt-2 text-white text-[13px] font-medium leading-tight">
                View · State · Bind
              </div>
              <div className="mt-2 h-[46px] rounded-lg bg-gradient-to-br from-[#0A84FF]/25 to-[#7C3AED]/25 border border-white/10" />
            </motion.div>

            <motion.div
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
              className="rounded-2xl p-3 glass"
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-[10px] text-white/50 uppercase tracking-widest">Firebase</div>
                  <div className="mt-1 text-white text-[13px] font-medium">Crash-free 99.9%</div>
                </div>
                <div className="h-8 w-8 rounded-full bg-gradient-to-br from-[#0A84FF] to-[#7C3AED] grid place-items-center text-white text-[10px] font-bold">
                  ↑
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom bar */}
          <div className="mx-auto h-1 w-24 rounded-full bg-white/40" />
        </div>
      </div>
    </div>

    {/* Floating chips */}
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      className="absolute -left-6 top-16 hidden sm:flex items-center gap-2 rounded-full glass px-3 py-1.5 text-[11px] text-white/80"
    >
      <span className="h-1.5 w-1.5 rounded-full bg-[#0A84FF]" /> Swift
    </motion.div>
    <motion.div
      animate={{ y: [0, 8, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      className="absolute -right-4 top-40 hidden sm:flex items-center gap-2 rounded-full glass px-3 py-1.5 text-[11px] text-white/80"
    >
      <span className="h-1.5 w-1.5 rounded-full bg-[#7C3AED]" /> SwiftUI
    </motion.div>
    <motion.div
      animate={{ y: [0, -6, 0] }}
      transition={{ duration: 5.4, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
      className="absolute -left-2 bottom-24 hidden sm:flex items-center gap-2 rounded-full glass px-3 py-1.5 text-[11px] text-white/80"
    >
      Firebase
    </motion.div>
    <motion.div
      animate={{ y: [0, 6, 0] }}
      transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      className="absolute -right-6 bottom-14 hidden sm:flex items-center gap-2 rounded-full glass px-3 py-1.5 text-[11px] text-white/80"
    >
      Xcode
    </motion.div>
  </motion.div>
);

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[100svh] flex items-center pt-32 pb-24"
      data-testid="hero-section"
    >
      <div className="mx-auto max-w-7xl px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0}
              className="inline-flex items-center gap-2 rounded-full glass px-3.5 py-1.5 text-[12px] text-white/70"
              data-testid="hero-eyebrow"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-[#0A84FF] opacity-75 animate-ping" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#0A84FF]" />
              </span>
              Hello, I&apos;m
            </motion.div>

            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={1}
              className="mt-5 text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-[-0.03em] leading-[0.98] brand-gradient-text text-balance"
              data-testid="hero-name"
            >
              {PROFILE.name}
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={2}
              className="mt-5 text-xl sm:text-2xl text-white/85 font-medium tracking-tight"
              data-testid="hero-role"
            >
              {PROFILE.role}
            </motion.p>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={3}
              className="mt-2 text-sm sm:text-base text-white/50 tracking-wide"
            >
              {PROFILE.tagline}
            </motion.p>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={4}
              className="mt-8 max-w-xl text-[15px] sm:text-base text-white/65 leading-relaxed"
              data-testid="hero-description"
            >
              {PROFILE.description}
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={5}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <a
                href="#resume"
                data-testid="hero-download-btn"
                className="group inline-flex items-center gap-2 rounded-full bg-[#0A84FF] px-5 py-3 text-[14px] font-medium text-white hover:brightness-110 transition-[filter,transform] active:scale-[0.98] glow-blue"
              >
                <Download size={16} />
                Download Resume
              </a>
              <a
                href="#projects"
                data-testid="hero-projects-btn"
                className="group inline-flex items-center gap-2 rounded-full glass px-5 py-3 text-[14px] font-medium text-white hover:bg-white/[0.08] transition-colors"
              >
                View Projects
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
              </a>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={6}
              className="mt-8 flex items-center gap-3"
            >
              {[
                { icon: Linkedin, href: PROFILE.linkedin, label: "LinkedIn", id: "linkedin" },
                { icon: Github, href: PROFILE.github, label: "GitHub", id: "github" },
                { icon: Mail, href: `mailto:${PROFILE.email}`, label: "Email", id: "email" },
              ].map(({ icon: Icon, href, label, id }) => (
                <a
                  key={label}
                  href={href}
                  target={id === "email" ? undefined : "_blank"}
                  rel="noreferrer"
                  aria-label={label}
                  data-testid={`hero-social-${id}`}
                  className="grid place-items-center h-10 w-10 rounded-full glass text-white/80 hover:text-white hover:bg-white/[0.08] transition-colors"
                >
                  <Icon size={16} />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right */}
          <div className="relative">
            <PhoneVisual />
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="absolute left-1/2 -translate-x-1/2 bottom-6 flex flex-col items-center gap-2 text-white/45 text-[11px] tracking-widest uppercase"
          data-testid="hero-scroll-indicator"
        >
          <span>Scroll</span>
          <div className="h-9 w-5 rounded-full border border-white/25 grid place-items-start p-1">
            <span className="block h-1.5 w-1.5 rounded-full bg-white/70 animate-scroll-dot" />
          </div>
        </motion.a>
      </div>
    </section>
  );
}
