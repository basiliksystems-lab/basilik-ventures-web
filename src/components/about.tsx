"use client";

import Image from "next/image";
import { useLocale } from "@/i18n/locale-context";

export function About() {
  const { t } = useLocale();

  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Image strip */}
        <div className="relative h-[280px] sm:h-[360px] lg:h-[420px] mb-20 overflow-hidden rounded-xl shadow-lg">
          <Image
            src="/partnerships.jpg"
            alt="Business partnerships"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-40" />
        </div>

        <div className="grid gap-16 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-6 bg-primary" />
              <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-primary">
                {t.about.label}
              </p>
            </div>
            <h2
              className="text-[clamp(1.6rem,3vw,2.4rem)] leading-[1.15] font-semibold tracking-[-0.02em]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {t.about.heading_line1}
              <br />
              {t.about.heading_line2}
              <br />
              {t.about.heading_line3}
            </h2>
          </div>

          <div className="lg:col-span-3 space-y-6">
            <p className="text-[16px] leading-[1.8] text-muted-foreground">
              {t.about.paragraph1}
            </p>
            <p className="text-[16px] leading-[1.8] text-muted-foreground">
              {t.about.paragraph2}
            </p>

            <div className="pt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { value: "UAE", label: t.about.stats.headquarters },
                { value: "EU & ME", label: t.about.stats.markets },
                { value: "B2B", label: t.about.stats.model },
                { value: "FZE", label: t.about.stats.license },
              ].map((s) => (
                <div
                  key={s.label}
                  className="border-s-2 border-primary/30 ps-4 py-2"
                >
                  <div className="text-[18px] font-bold text-primary">
                    {s.value}
                  </div>
                  <div className="mt-0.5 text-[11px] text-muted-foreground uppercase tracking-[0.1em]">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
