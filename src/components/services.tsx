import Image from "next/image";

const services = [
  {
    title: "International Trade",
    description:
      "Full management of cross-border trade operations including sourcing, negotiation, and regulatory compliance across European and Middle Eastern jurisdictions.",
  },
  {
    title: "Wholesale & Distribution",
    description:
      "Large-volume procurement and distribution across diverse product categories, leveraging our supplier network and strategic positioning in the UAE.",
  },
  {
    title: "Business Development",
    description:
      "Market analysis, partnership facilitation, and expansion advisory for companies entering or growing within European and GCC markets.",
  },
  {
    title: "Strategic Partnerships",
    description:
      "Building long-term commercial relationships between manufacturers, distributors, and institutional buyers across our operating regions.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 sm:py-32 bg-[oklch(0.96_0.008_250)]">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex items-center gap-3 mb-5">
          <div className="h-px w-6 bg-primary" />
          <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-primary">
            Services
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-20 items-end mb-16">
          <h2
            className="text-[clamp(1.6rem,3vw,2.4rem)] leading-[1.15] font-semibold tracking-[-0.02em]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            What we do
          </h2>
          <p className="text-[16px] leading-[1.8] text-muted-foreground">
            Trading and business development services
            designed for seamless international commerce.
          </p>
        </div>

        {/* Image + cards layout */}
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Image column */}
          <div className="lg:col-span-2 relative h-[300px] sm:h-[400px] lg:h-auto overflow-hidden">
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
            {services.map((s) => (
              <div
                key={s.title}
                className="bg-white border border-border/50 p-8 group hover:border-primary/20 transition-colors duration-300"
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
