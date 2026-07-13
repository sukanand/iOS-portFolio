import React from "react";
import { motion } from "framer-motion";

export default function BackgroundGradients() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* Ambient blobs */}
      <div className="absolute -top-40 -left-40 h-[560px] w-[560px] rounded-full blur-[140px] opacity-[0.35] animate-float-1"
        style={{ background: "radial-gradient(closest-side, #0A84FF, transparent 70%)" }}
      />
      <div className="absolute top-1/3 -right-32 h-[520px] w-[520px] rounded-full blur-[160px] opacity-[0.28] animate-float-2"
        style={{ background: "radial-gradient(closest-side, #7C3AED, transparent 70%)" }}
      />
      <div className="absolute bottom-[-200px] left-1/3 h-[600px] w-[600px] rounded-full blur-[180px] opacity-[0.22] animate-float-3"
        style={{ background: "radial-gradient(closest-side, #0A84FF, transparent 70%)" }}
      />

      {/* Subtle grid */}
      <div className="absolute inset-0 subtle-grid opacity-[0.5]" />

      {/* Vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(255,255,255,0.05), transparent 40%), radial-gradient(ellipse at 50% 100%, rgba(0,0,0,0.9), transparent 50%)",
        }}
      />
    </div>
  );
}
