import Image from "next/image";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[oklch(0.22_0.05_250)]">
      {/* Background image */}
      <Image
        src="/hero-port.jpg"
        alt=""
        fill
        className="object-cover opacity-20"
        priority
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.18_0.05_250)]/95 via-[oklch(0.22_0.05_250)]/85 to-[oklch(0.22_0.05_250)]/70" />

      <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-32 sm:pt-32 sm:pb-40 lg:px-10 lg:pt-40 lg:pb-48">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: text content */}
          <div>
            <div className="flex items-center gap-3 mb-10">
              <div className="h-px w-8 bg-white/30" />
              <p className="text-[12px] font-semibold uppercase tracking-[0.25em] text-white/50">
                Ajman Free Zone, UAE
              </p>
            </div>

            <h1
              className="max-w-xl text-[clamp(2.4rem,5.5vw,4.5rem)] leading-[1.05] font-semibold tracking-[-0.03em] text-white"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              International trade
              <br />
              <span className="text-[oklch(0.72_0.12_250)]">and business development</span>
            </h1>

            <p className="mt-8 max-w-lg text-[17px] leading-[1.75] text-white/55">
              We facilitate wholesale commerce and build strategic partnerships
              between Europe and the Middle East, providing reliable access to
              established and emerging markets.
            </p>

            <div className="mt-14 flex items-center gap-6">
              <a
                href="#services"
                className="inline-flex h-12 items-center justify-center bg-white text-[oklch(0.22_0.05_250)] px-8 text-[13px] font-semibold tracking-[0.02em] hover:bg-white/90 transition-colors"
              >
                Our services
              </a>
              <a
                href="#about"
                className="inline-flex h-12 items-center justify-center border border-white/20 text-white/80 px-8 text-[13px] font-medium tracking-[0.02em] hover:bg-white/5 hover:border-white/30 transition-all"
              >
                Learn more
              </a>
            </div>
          </div>

          {/* Right: logo */}
          <div className="hidden lg:flex items-center justify-end">
            <Image
              src="/logo-white.png"
              alt="Basilik Ventures"
              width={500}
              height={120}
              className="w-full max-w-md opacity-80"
              priority
            />
          </div>
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="h-1 bg-gradient-to-r from-primary via-[oklch(0.55_0.15_250)] to-primary/30" />
    </section>
  );
}
