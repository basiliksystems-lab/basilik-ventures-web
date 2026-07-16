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
      "Established trade corridors with European manufacturers, suppliers, and distributors. We connect European products and services with Middle Eastern demand, managing compliance and logistics end-to-end.",
  },
];

export function GlobalReach() {
  return (
    <section id="markets" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <p className="text-[13px] font-medium uppercase tracking-[0.2em] text-primary/80 mb-4">
          Markets
        </p>
        <h2
          className="max-w-lg text-[clamp(1.6rem,3vw,2.4rem)] leading-[1.15] font-semibold tracking-[-0.02em]"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Where we operate
        </h2>
        <p className="mt-5 max-w-xl text-[16px] leading-[1.75] text-muted-foreground">
          Positioned in the UAE — at the intersection of European and Middle
          Eastern trade flows — we bridge both markets with reliable,
          compliant commerce.
        </p>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {regions.map((r) => (
            <div key={r.name} className="border border-border p-8 lg:p-10">
              <h3
                className="text-[20px] font-semibold tracking-[-0.01em]"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {r.name}
              </h3>
              <p className="mt-2 text-[12px] font-medium uppercase tracking-[0.1em] text-primary/70">
                {r.markets}
              </p>
              <p className="mt-5 text-[15px] leading-[1.75] text-muted-foreground">
                {r.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
