"use client";

import Image from "next/image";
import { useLocale } from "@/i18n/locale-context";

export function Services() {
  const { t } = useLocale();

  return (
    <section id="services" className="py-24 sm:py-32 bg-[oklch(0.96_0.008_250)]">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex items-center gap-3 mb-5">
          <div className="h-px w-6 bg-primary" />
          <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-primary">
            {t.services.label}
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-20 items-end mb-16">
          <h2
            className="text-[clamp(1.6rem,3vw,2.4rem)] leading-[1.15] font-semibold tracking-[-0.02em]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {t.services.heading}
          </h2>
          <p className="text-[16px] leading-[1.8] text-muted-foreground">
            {t.services.subheading}
          </p>
        </div>

        {/* Image + cards layout */}
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Image column */}
          <div className="lg:col-span-2 relative h-[300px] sm:h-[400px] lg:h-auto overflow-hidden rounded-xl shadow-lg">
            <Image
              src="/warehouse.jpg"
              alt="Distribution warehouse"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
          </div>

          {/* Cards column */}
          <div className="lg:col-span-3 grid sm:grid-cols-2 gap-5">
            {t.services.items.map((s) => (
              <div
                key={s.title}
                className="bg-white border border-border/50 rounded-lg p-8 shadow-sm group hover:border-primary/20 hover:shadow-md transition-all duration-300"
              >
                <h3
                  className="text-[16px] font-semibold text-foreground group-hover:text-primary transition-colors duration-300"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {s.title}
                </h3>
                <p className="mt-3 text-[14px] leading-[1.75] text-muted-foreground">
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
