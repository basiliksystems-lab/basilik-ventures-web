"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

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
          ? "bg-white/95 backdrop-blur-md shadow-[0_1px_2px_rgba(0,30,80,0.06)]"
          : "bg-white"
      }`}
    >
      {/* Top accent bar */}
      <div className="h-[3px] bg-primary" />

      <div className="mx-auto flex h-[68px] max-w-7xl items-center justify-between px-6 lg:px-10">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <Image
            src="/logo-white.png"
            alt="Basilik Ventures"
            width={220}
            height={50}
            className="h-6 sm:h-7 w-auto brightness-0 opacity-90"
            priority
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative px-4 py-2 text-[13px] font-medium text-foreground/55 transition-colors hover:text-primary after:absolute after:bottom-0 after:left-4 after:right-4 after:h-[2px] after:bg-primary after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left"
            >
              {l.label}
            </a>
          ))}
          <div className="ml-3 h-4 w-px bg-border" />
          <a
            href="mailto:corporate@basilikventures.com"
            className="ml-3 inline-flex h-9 items-center gap-2 px-5 border border-primary text-primary text-[12px] font-semibold uppercase tracking-[0.05em] hover:bg-primary hover:text-white transition-all duration-200"
          >
            <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
            </svg>
            Contact
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2"
          aria-label="Menu"
        >
          <div className="flex flex-col gap-[5px]">
            <span
              className={`block h-[1.5px] w-5 bg-foreground transition-all duration-200 origin-center ${
                open ? "rotate-45 translate-y-[7px]" : ""
              }`}
            />
            <span
              className={`block h-[1.5px] w-5 bg-foreground transition-opacity duration-200 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-[1.5px] w-5 bg-foreground transition-all duration-200 origin-center ${
                open ? "-rotate-45 -translate-y-[7px]" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-80 border-t border-border/30" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col px-6 py-5 bg-white">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-3 text-[15px] font-medium text-foreground border-b border-border/30 last:border-0"
            >
              {l.label}
            </a>
          ))}
          <a
            href="mailto:corporate@basilikventures.com"
            onClick={() => setOpen(false)}
            className="mt-5 inline-flex h-10 items-center justify-center border border-primary text-primary text-[13px] font-semibold uppercase tracking-[0.05em]"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
