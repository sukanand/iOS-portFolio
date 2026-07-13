import React from "react";
import { PROFILE } from "../../lib/portfolioData";

export default function Footer() {
  return (
    <footer className="relative py-14" data-testid="footer">
      <div className="mx-auto max-w-7xl px-6">
        <div className="divider-line mb-10" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <span className="grid place-items-center h-8 w-8 rounded-xl bg-gradient-to-br from-[#0A84FF] to-[#7C3AED] text-white text-[13px] font-semibold">
              SY
            </span>
            <span className="text-white/60 text-[13px]">
              © 2026 {PROFILE.name}
            </span>
          </div>
          <div className="text-white/45 text-[12px] text-center md:text-right">
            Built with React, TypeScript, and Tailwind CSS.
          </div>
        </div>
      </div>
    </footer>
  );
}
