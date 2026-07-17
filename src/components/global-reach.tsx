import Image from "next/image";

const regions = [
  {
    name: "Middle East & GCC",
    markets: "UAE, Saudi Arabia, Oman, Bahrain, Kuwait, Qatar",
    description:
      "Headquartered in the Ajman Free Zone with direct operational access to all GCC member states. Our position allows for efficient trade facilitation, warehousing, and distribution across the Arabian Peninsula.",
  },
  {
    name: "Europe",
    markets: "EU, UK, Turkey, Eastern Europe",
    description:
      "Established trade corridors with European manufacturers, suppliers, and distributors. We connect European products and services with Middle Eastern demand, managing compliance and logistics throughout the entire process.",
  },
];

export function GlobalReach() {
  return (
    <section id="markets" className="py-24 sm:py-32 relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex items-center gap-3 mb-5">
          <div className="h-px w-6 bg-primary" />
          <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-primary">
            Markets
          </p>
        </div>
        <h2
          className="max-w-lg text-[clamp(1.6rem,3vw,2.4rem)] leading-[1.15] font-semibold tracking-[-0.02em]"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Where we operate
        </h2>
        <p className="mt-5 max-w-xl text-[16px] leading-[1.8] text-muted-foreground">
          Positioned in the UAE, at the intersection of European and Middle
          Eastern trade flows. We bridge both markets with reliable,
          compliant commerce.
        </p>

        {/* Full-width logistics image */}
        <div className="mt-14 relative h-[200px] sm:h-[280px] overflow-hidden">
          <Image
            src="/logistics-truck.jpg"
            alt="Logistics and transport"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.22_0.05_250)]/70 to-transparent" />
          <div className="absolute bottom-0 left-0 p-8">
            <p className="text-[11px] uppercase tracking-[0.15em] font-medium text-white/70">
              EU / MENA Trade Corridors
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {regions.map((r) => (
            <div
              key={r.name}
              className="relative overflow-hidden bg-[oklch(0.22_0.05_250)] p-10 lg:p-12 group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[radial-gradient(circle,oklch(0.35_0.10_250_/_0.3),transparent_70%)]" />

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
