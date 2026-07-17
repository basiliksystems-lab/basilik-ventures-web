import Image from "next/image";

const services = [
  {
    number: "01",
    title: "International Trade",
    description:
      "End-to-end management of cross-border trade operations including sourcing, negotiation, and regulatory compliance across European and Middle Eastern jurisdictions.",
  },
  {
    number: "02",
    title: "Wholesale & Distribution",
    description:
      "Large-volume procurement and distribution across diverse product categories, leveraging our supplier network and strategic positioning in the UAE.",
  },
  {
    number: "03",
    title: "Business Development",
    description:
      "Market analysis, partnership facilitation, and expansion advisory for companies entering or growing within European and GCC markets.",
  },
  {
    number: "04",
    title: "Compliance & Documentation",
    description:
      "Documentation support for international trade including letters of credit, certificates of origin, customs declarations, and multi-jurisdictional compliance.",
  },
  {
    number: "05",
    title: "Logistics Coordination",
    description:
      "Supply chain management with freight forwarding, customs brokerage, and delivery solutions tailored for EU-MENA trade corridors.",
  },
  {
    number: "06",
    title: "Strategic Partnerships",
    description:
      "Building long-term commercial relationships between manufacturers, distributors, and institutional buyers across our operating regions.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 sm:py-32 bg-[oklch(0.96_0.008_250)]">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: header + image */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-6 bg-primary" />
              <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-primary">
                Services
              </p>
            </div>
            <h2
              className="max-w-lg text-[clamp(1.6rem,3vw,2.4rem)] leading-[1.15] font-semibold tracking-[-0.02em]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              What we do
            </h2>
            <p className="mt-5 max-w-md text-[16px] leading-[1.8] text-muted-foreground">
              Comprehensive trading and business development services designed
              for seamless international commerce.
            </p>

            <div className="mt-10 relative h-[260px] sm:h-[320px] overflow-hidden">
              <Image
                src="/warehouse.jpg"
                alt="Distribution warehouse"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.22_0.05_250)]/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-[11px] uppercase tracking-[0.15em] font-medium text-white/70">
                  Wholesale & Distribution
                </p>
              </div>
            </div>
          </div>

          {/* Right: service cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {services.map((s) => (
              <div
                key={s.number}
                className="bg-white border border-border/60 p-7 group hover:border-primary/30 hover:shadow-[0_4px_20px_rgba(0,40,100,0.06)] transition-all duration-300"
              >
                <span className="inline-flex h-7 w-7 items-center justify-center bg-primary/8 text-[10px] font-bold text-primary tabular-nums">
                  {s.number}
                </span>
                <h3 className="mt-4 text-[15px] font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                  {s.title}
                </h3>
                <p className="mt-2 text-[13px] leading-[1.7] text-muted-foreground">
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
