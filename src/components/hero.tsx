import Image from "next/image";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[oklch(0.20_0.05_250)]">
      {/* Background image */}
      <Image
        src="/hero-port.jpg"
        alt=""
        fill
        className="object-cover opacity-30"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.17_0.05_250)]/95 via-[oklch(0.20_0.05_250)]/80 to-[oklch(0.20_0.05_250)]/50" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 py-28 sm:py-36 lg:py-40">
        <div className="max-w-2xl">
          <p className="text-[12px] font-medium uppercase tracking-[0.2em] text-[oklch(0.65_0.12_250)] mb-6">
            Basilik Ventures F.Z.E. / Ajman Free Zone, UAE
          </p>

          <h1
            className="text-3xl sm:text-4xl lg:text-[2.8rem] leading-[1.2] font-semibold tracking-[-0.02em] text-white"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            International trade and business development between Europe and the Middle East
          </h1>

          <p className="mt-7 max-w-lg text-[15px] leading-[1.8] text-white/50">
            We facilitate wholesale commerce and build strategic partnerships,
            providing reliable access to established and emerging markets.
          </p>

          <div className="mt-10 flex items-center gap-5">
            <a
              href="#services"
              className="inline-flex h-11 items-center bg-white text-[oklch(0.20_0.05_250)] px-7 text-[13px] font-semibold tracking-[0.01em] hover:bg-white/90 transition-colors"
            >
              Our services
            </a>
            <a
              href="#about"
              className="inline-flex h-11 items-center border border-white/15 text-white/65 px-7 text-[13px] font-medium tracking-[0.01em] hover:border-white/30 hover:text-white/90 transition-all"
            >
              About us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
