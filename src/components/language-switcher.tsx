"use client";

import { useLocale } from "@/i18n/locale-context";

export function LanguageSwitcher() {
  const { locale, setLocale } = useLocale();

  return (
    <button
      onClick={() => setLocale(locale === "en" ? "ar" : "en")}
      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[12px] font-medium text-foreground/55 hover:text-primary transition-colors rounded-md"
      aria-label={locale === "en" ? "Switch to Arabic" : "Switch to English"}
    >
      <svg
        className="h-3.5 w-3.5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
      {locale === "en" ? "العربية" : "English"}
    </button>
  );
}
