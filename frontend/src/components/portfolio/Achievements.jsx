import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ACHIEVEMENTS } from "../../lib/portfolioData";

function AnimatedNumber({ value, suffix }) {
  // Parse numeric value; if not numeric, just render as text.
  const numeric = parseFloat(String(value).replace(/[^\d.]/g, ""));
  const isNumeric = !Number.isNaN(numeric) && /\d/.test(String(value));
  const decimals = String(value).includes(".") ? 1 : 0;

  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const [display, setDisplay] = useState(isNumeric ? 0 : value);

  useEffect(() => {
    if (!isNumeric || !inView) return;
    const duration = 1400;
    const start = performance.now();
    let raf;
    const tick = (now) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      const current = numeric * eased;
      setDisplay(current.toFixed(decimals));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, isNumeric, numeric, decimals]);

  const hasPlus = String(value).includes("+");

  return (
    <span ref={ref}>
      {isNumeric ? (
        <>
          {display}
          {hasPlus && "+"}
          {suffix}
        </>
      ) : (
        value
      )}
    </span>
  );
}

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

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-24 sm:py-32" data-testid="achievements-section">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Achievements"
          title="Numbers that tell the story."
          subtitle="Impact measured across performance, reliability, and leadership."
        />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5">
          {ACHIEVEMENTS.map((a, i) => (
            <motion.div
              key={a.label}
              initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4 }}
              className="relative rounded-[22px] glass p-6 overflow-hidden"
              data-testid={`achievement-card-${i}`}
            >
              <div className="text-3xl sm:text-4xl font-semibold tracking-[-0.02em] text-white">
                <AnimatedNumber value={a.value} suffix={a.suffix} />
              </div>
              <div className="mt-2 text-white/60 text-[13px]">{a.label}</div>

              <div
                className="pointer-events-none absolute -bottom-10 -right-10 h-28 w-28 rounded-full blur-2xl opacity-40"
                style={{
                  background:
                    i % 2 === 0
                      ? "radial-gradient(closest-side, #0A84FF, transparent 70%)"
                      : "radial-gradient(closest-side, #7C3AED, transparent 70%)",
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
