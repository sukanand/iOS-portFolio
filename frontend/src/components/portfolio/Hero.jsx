import React from "react";
import { motion } from "framer-motion";
import { Download, ArrowRight, Github, Linkedin, Mail } from "lucide-react";
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

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[100svh] flex items-center pt-32 pb-24"
      data-testid="hero-section"
    >
      <div className="mx-auto max-w-4xl px-6 w-full text-center">
        {/* Profile pic top center */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto mb-8 h-40 w-40 sm:h-44 sm:w-44"
          data-testid="hero-profile-pic-wrapper"
        >
          {/* Ambient glow */}
          <div
            className="absolute -inset-8 rounded-full blur-3xl opacity-70"
            style={{
              background:
                "radial-gradient(closest-side, rgba(10,132,255,0.55), transparent 70%), radial-gradient(closest-side, rgba(124,58,237,0.45), transparent 70%)",
            }}
          />
          {/* Gradient ring */}
          <div className="relative h-full w-full rounded-full p-[3px] bg-gradient-to-br from-[#0A84FF] via-white/20 to-[#7C3AED] shadow-[0_20px_60px_-15px_rgba(10,132,255,0.5)]">
            <div className="h-full w-full rounded-full overflow-hidden bg-black">
              <img
                src={PROFILE.photoUrl}
                alt={PROFILE.name}
                loading="eager"
                className="h-full w-full object-cover"
                data-testid="hero-profile-pic"
              />
            </div>
          </div>
          {/* Availability dot */}
          <div className="absolute bottom-2 right-2 h-4 w-4 rounded-full bg-green-500 ring-4 ring-black" />
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={1}
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
          custom={2}
          className="mt-5 text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-[-0.03em] leading-[0.98] brand-gradient-text text-balance"
          data-testid="hero-name"
        >
          {PROFILE.name}
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={3}
          className="mt-5 text-xl sm:text-2xl text-white/85 font-medium tracking-tight"
          data-testid="hero-role"
        >
          {PROFILE.role}
        </motion.p>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={4}
          className="mt-2 text-sm sm:text-base text-white/50 tracking-wide"
        >
          {PROFILE.tagline}
        </motion.p>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={5}
          className="mt-7 mx-auto max-w-2xl text-[15px] sm:text-base text-white/65 leading-relaxed"
          data-testid="hero-description"
        >
          {PROFILE.description}
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={6}
          className="mt-9 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href={PROFILE.resumeUrl}
            target="_blank"
            rel="noreferrer"
            download
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
          custom={7}
          className="mt-8 flex items-center justify-center gap-3"
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
    </section>
  );
}
