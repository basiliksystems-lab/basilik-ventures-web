import Image from "next/image";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[oklch(0.20_0.05_250)] min-h-[85vh] flex flex-col">
      {/* Background image */}
      <Image
        src="/hero-port.jpg"
        alt=""
        fill
        className="object-cover opacity-25"
        priority
      />
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.16_0.05_250)] via-[oklch(0.20_0.05_250)]/90 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.16_0.05_250)] via-transparent to-[oklch(0.20_0.05_250)]/50" />

      {/* Content */}
      <div className="relative flex-1 flex items-center">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-10 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <div>
              <p className="text-[12px] font-semibold uppercase tracking-[0.25em] text-[oklch(0.65_0.12_250)] mb-8">
                Ajman Free Zone, UAE
              </p>

              <h1
                className="text-[clamp(2.6rem,6vw,5rem)] leading-[1.02] font-bold tracking-[-0.035em] text-white"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                International
                <br />
                trade <span className="text-[oklch(0.62_0.14_250)]">&</span>
                <br />
                business
                <br />
                development
              </h1>

              <p className="mt-10 max-w-md text-[16px] leading-[1.8] text-white/50">
                We facilitate wholesale commerce and build strategic partnerships
                between Europe and the Middle East, providing reliable access to
                established and emerging markets.
              </p>

              <div className="mt-12 flex items-center gap-5">
                <a
                  href="#services"
                  className="group inline-flex h-12 items-center gap-2 bg-white text-[oklch(0.20_0.05_250)] px-7 text-[13px] font-semibold tracking-[0.02em] hover:bg-[oklch(0.62_0.14_250)] hover:text-white transition-all duration-300"
                >
                  Our services
                  <svg className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </a>
                <a
                  href="#about"
                  className="inline-flex h-12 items-center border border-white/15 text-white/70 px-7 text-[13px] font-medium tracking-[0.02em] hover:border-white/30 hover:text-white transition-all duration-300"
                >
                  Learn more
                </a>
              </div>
            </div>

            {/* Right: logo watermark */}
            <div className="hidden lg:flex items-center justify-end">
              <Image
                src="/logo-white.png"
                alt="Basilik Ventures"
                width={600}
                height={150}
                className="w-full max-w-md opacity-[0.08]"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom stats bar */}
      <div className="relative border-t border-white/[0.06]">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-white/[0.06]">
            {[
              { label: "Headquarters", value: "UAE" },
              { label: "Markets", value: "Europe & Middle East" },
              { label: "Focus", value: "Wholesale & B2B" },
              { label: "Entity", value: "Free Zone Establishment" },
            ].map((item) => (
              <div key={item.label} className="px-6 py-5 sm:py-6">
                <p className="text-[10px] uppercase tracking-[0.15em] text-white/25 mb-1">
                  {item.label}
                </p>
                <p className="text-[13px] font-medium text-white/60">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
