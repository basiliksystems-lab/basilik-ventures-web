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
          ? "bg-white shadow-[0_1px_3px_rgba(0,40,100,0.08)]"
          : "bg-white/0"
      }`}
    >
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-6 lg:px-10">
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

        {/* Desktop */}
        <nav className="hidden md:flex items-center">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative px-5 py-2 text-[13px] font-medium text-foreground/60 transition-colors hover:text-primary"
            >
              {l.label}
            </a>
          ))}
          <a
            href="mailto:info@basilikventures.com"
            className="ml-6 inline-flex h-9 items-center px-5 bg-primary text-white text-[12px] font-semibold uppercase tracking-[0.05em] hover:bg-primary/90 transition-colors"
          >
            Contact
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-[5px] p-2"
          aria-label="Menu"
        >
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
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-primary/10">
          <nav className="flex flex-col px-6 py-5 gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-3 text-[15px] font-medium text-foreground border-b border-border/40 last:border-0"
              >
                {l.label}
              </a>
            ))}
            <a
              href="mailto:info@basilikventures.com"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex h-10 items-center justify-center bg-primary text-white text-[13px] font-semibold uppercase tracking-[0.05em]"
            >
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
