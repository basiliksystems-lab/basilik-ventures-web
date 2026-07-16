"use client";

import { useState, useEffect } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#markets", label: "Markets" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-sm shadow-[0_1px_0_rgba(0,0,0,0.06)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-6 lg:px-10">
        <a href="#" className="flex items-center gap-3 group">
          <span className="font-[var(--font-heading)] text-[22px] font-semibold tracking-[-0.02em] text-foreground" style={{ fontFamily: "var(--font-heading)" }}>
            Basilik
          </span>
          <span className="hidden sm:inline text-[11px] font-medium uppercase tracking-[0.15em] text-muted-foreground/70 border-l border-border pl-3">
            Ventures
          </span>
        </a>

        {/* Desktop */}
        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-4 py-2 text-[13px] font-medium text-muted-foreground/80 transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
          <div className="ml-4 h-5 w-px bg-border" />
          <a
            href="mailto:info@basilikventures.com"
            className="ml-4 text-[13px] font-medium text-foreground hover:text-primary transition-colors"
          >
            info@basilikventures.com
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-[5px] p-2"
          aria-label="Menu"
        >
          <span
            className={`block h-[1.5px] w-5 bg-foreground transition-all duration-200 ${
              open ? "rotate-45 translate-y-[7px]" : ""
            }`}
          />
          <span
            className={`block h-[1.5px] w-5 bg-foreground transition-opacity duration-200 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-[1.5px] w-5 bg-foreground transition-all duration-200 ${
              open ? "-rotate-45 -translate-y-[7px]" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t bg-white/98 backdrop-blur-sm">
          <nav className="flex flex-col px-6 py-6 gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-3 text-[15px] font-medium text-foreground border-b border-border/50 last:border-0"
              >
                {l.label}
              </a>
            ))}
            <a
              href="mailto:info@basilikventures.com"
              onClick={() => setOpen(false)}
              className="mt-4 text-[13px] text-muted-foreground"
            >
              info@basilikventures.com
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
