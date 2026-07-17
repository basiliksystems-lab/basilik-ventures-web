"use client";

import Image from "next/image";
import { useLocale } from "@/i18n/locale-context";

export function Footer() {
  const { t } = useLocale();

  return (
    <footer className="bg-[oklch(0.18_0.04_250)] text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 sm:py-20">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Image
              src="/logo-white.png"
              alt="Basilik Ventures"
              width={180}
              height={40}
              className="h-5 w-auto opacity-70 mb-5"
            />
            <p className="text-[13px] leading-[1.7] text-white/40 whitespace-pre-line">
              {t.footer.tagline}
            </p>
          </div>

          {/* Registered Office */}
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.15em] text-white/60 mb-4">
              {t.footer.registered_office}
            </h4>
            <div className="space-y-1 text-[13px] leading-[1.7] text-white/40">
              <p>{t.footer.address.line1}</p>
              <p>{t.footer.address.line2}</p>
              <p>{t.footer.address.line3}</p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.15em] text-white/60 mb-4">
              {t.footer.contact}
            </h4>
            <a
              href="mailto:corporate@basilikventures.com"
              className="text-[13px] text-white/40 hover:text-white transition-colors"
            >
              corporate@basilikventures.com
            </a>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.15em] text-white/60 mb-4">
              {t.footer.business_hours}
            </h4>
            <div className="space-y-1 text-[13px] leading-[1.7] text-white/40">
              <p>{t.footer.hours_days}</p>
              <p>{t.footer.hours_time}</p>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-[12px] text-white/25">
            &copy; {new Date().getFullYear()} {t.footer.copyright}
          </p>
          <p className="text-[12px] text-white/20">
            {t.footer.location}
          </p>
        </div>
      </div>
    </footer>
  );
}
