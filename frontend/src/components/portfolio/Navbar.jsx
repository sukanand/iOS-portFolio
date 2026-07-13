import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "../../lib/portfolioData";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
      // Update active section
      const sections = NAV_LINKS.map((l) => l.href.slice(1));
      for (const id of sections) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom > 120) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
      data-testid="navbar"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div
          className={`flex items-center justify-between rounded-2xl px-5 md:px-6 py-3 transition-all duration-500 ${
            scrolled ? "glass-strong shadow-[0_10px_40px_-20px_rgba(0,0,0,0.8)]" : "bg-transparent"
          }`}
        >
          <a href="#home" className="flex items-center gap-2.5" data-testid="nav-logo">
            <span className="grid place-items-center h-8 w-8 rounded-xl bg-gradient-to-br from-[#0A84FF] to-[#7C3AED] text-white text-[13px] font-semibold tracking-tight">
              SY
            </span>
            <span className="text-sm md:text-[15px] font-medium tracking-tight text-white/90">
              Sukanand Yedle
            </span>
          </a>

          {/* Desktop */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((l) => {
              const id = l.href.slice(1);
              const isActive = active === id;
              return (
                <a
                  key={l.href}
                  href={l.href}
                  data-testid={`nav-link-${id}`}
                  className={`relative px-3.5 py-2 text-[13px] rounded-full transition-colors ${
                    isActive ? "text-white" : "text-white/60 hover:text-white"
                  }`}
                >
                  {l.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 -z-10 rounded-full bg-white/10"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          <div className="hidden lg:block">
            <a
              href="#contact"
              data-testid="nav-contact-btn"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-black text-[13px] font-medium hover:bg-white/90 transition-colors"
            >
              Get in touch
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden grid place-items-center h-10 w-10 rounded-full glass text-white"
            data-testid="mobile-menu-toggle"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.24 }}
              className="lg:hidden mt-2 rounded-2xl glass-strong overflow-hidden"
              data-testid="mobile-menu"
            >
              <div className="p-2">
                {NAV_LINKS.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    data-testid={`mobile-nav-link-${l.href.slice(1)}`}
                    className="block px-4 py-3 text-[15px] text-white/80 hover:text-white hover:bg-white/5 rounded-xl"
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
