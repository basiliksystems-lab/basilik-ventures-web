"use client";

import Image from "next/image";
import { useLocale } from "@/i18n/locale-context";

export function Hero() {
  const { t } = useLocale();

  return (
    <section className="relative overflow-hidden bg-[oklch(0.20_0.05_250)]">
      {/* Background image */}
      <Image
        src="/hero-port.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover opacity-30"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-r rtl:bg-gradient-to-l from-[oklch(0.17_0.05_250)]/95 via-[oklch(0.20_0.05_250)]/80 to-[oklch(0.20_0.05_250)]/50" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 py-28 sm:py-36 lg:py-40">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: content */}
          <div>
            <Image
              src="/logo-white.png"
              alt="Basilik Ventures"
              width={280}
              height={60}
              className="h-8 sm:h-10 w-auto mb-10 opacity-90"
              priority
            />

            <p className="text-[12px] font-medium uppercase tracking-[0.2em] text-[oklch(0.65_0.12_250)] mb-6">
              {t.hero.location}
            </p>

            <h1
              className="text-3xl sm:text-4xl lg:text-[2.8rem] leading-[1.2] font-semibold tracking-[-0.02em] text-white"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {t.hero.heading}
            </h1>

            <p className="mt-7 max-w-lg text-[15px] leading-[1.8] text-white/50">
              {t.hero.subheading}
            </p>

            <div className="mt-10 flex items-center gap-5">
              <a
                href="#services"
                className="inline-flex h-11 items-center rounded-md bg-white text-[oklch(0.20_0.05_250)] px-7 text-[13px] font-semibold tracking-[0.01em] hover:bg-white/90 transition-colors"
              >
                {t.hero.cta_services}
              </a>
              <a
                href="#about"
                className="inline-flex h-11 items-center rounded-md border border-white/15 text-white/65 px-7 text-[13px] font-medium tracking-[0.01em] hover:border-white/30 hover:text-white/90 transition-all"
              >
                {t.hero.cta_about}
              </a>
            </div>
          </div>

          {/* Right: building image */}
          <div className="hidden lg:block relative h-[480px] rounded-2xl overflow-hidden shadow-2xl shadow-black/30 ring-1 ring-white/10">
            <Image
              src="/hero-building.jpg"
              alt="Modern business workspace"
              fill
              sizes="50vw"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-l rtl:bg-gradient-to-r from-transparent via-transparent to-[oklch(0.20_0.05_250)]/40 rounded-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
