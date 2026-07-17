"use client";

import Image from "next/image";
import { useLocale } from "@/i18n/locale-context";

export function GlobalReach() {
  const { t } = useLocale();

  return (
    <section id="markets" className="py-24 sm:py-32 relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex items-center gap-3 mb-5">
          <div className="h-px w-6 bg-primary" />
          <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-primary">
            {t.markets.label}
          </p>
        </div>
        <h2
          className="max-w-lg text-[clamp(1.6rem,3vw,2.4rem)] leading-[1.15] font-semibold tracking-[-0.02em]"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {t.markets.heading}
        </h2>
        <p className="mt-5 max-w-xl text-[16px] leading-[1.8] text-muted-foreground">
          {t.markets.subheading}
        </p>

        {/* Full-width logistics image */}
        <div className="mt-14 relative h-[200px] sm:h-[280px] overflow-hidden rounded-xl shadow-lg">
          <Image
            src="/logistics-truck.jpg"
            alt="Logistics and transport"
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r rtl:bg-gradient-to-l from-[oklch(0.22_0.05_250)]/70 to-transparent" />
          <div className="absolute bottom-0 start-0 p-8">
            <p className="text-[11px] uppercase tracking-[0.15em] font-medium text-white/70">
              {t.markets.trade_corridors}
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {t.markets.regions.map((r) => (
            <div
              key={r.name}
              className="relative overflow-hidden bg-[oklch(0.22_0.05_250)] rounded-lg p-10 lg:p-12 shadow-lg group"
            >
              <div className="absolute top-0 end-0 w-32 h-32 bg-[radial-gradient(circle,oklch(0.35_0.10_250_/_0.3),transparent_70%)]" />

              <div className="relative">
                <h3
                  className="text-[22px] font-semibold tracking-[-0.01em] text-white"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {r.name}
                </h3>
                <p className="mt-2 text-[12px] font-medium uppercase tracking-[0.12em] text-[oklch(0.65_0.10_250)]">
                  {r.markets}
                </p>
                <p className="mt-5 text-[15px] leading-[1.8] text-white/50">
                  {r.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
