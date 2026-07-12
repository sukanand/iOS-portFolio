import React from "react";
import { motion } from "framer-motion";
import { FileText, Download } from "lucide-react";

export default function Resume() {
  return (
    <section id="resume" className="relative py-24 sm:py-32" data-testid="resume-section">
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-[32px] glass overflow-hidden p-10 sm:p-16 text-center"
        >
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 h-56 w-[80%] rounded-full blur-3xl opacity-50"
            style={{
              background:
                "radial-gradient(closest-side, rgba(10,132,255,0.55), transparent 70%), radial-gradient(closest-side, rgba(124,58,237,0.45), transparent 70%)",
            }}
          />

          <div className="relative">
            <div className="mx-auto grid place-items-center h-16 w-16 rounded-2xl bg-white/5 border border-white/10 text-white">
              <FileText size={22} />
            </div>

            <div className="mt-6 text-[11px] tracking-[0.22em] uppercase text-white/45">
              Resume
            </div>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.02em] text-white text-balance">
              Take my experience with you.
            </h2>
            <p className="mt-3 text-white/60 text-[15px] max-w-lg mx-auto">
              A comprehensive summary of my work, projects, and impact — ready
              to share with your team.
            </p>

            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              data-testid="resume-download-btn"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white text-black px-6 py-3.5 text-[14px] font-medium hover:bg-white/90 transition-colors active:scale-[0.98] shadow-[0_10px_40px_-10px_rgba(255,255,255,0.5)]"
            >
              <Download size={16} />
              Download Resume (PDF)
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
