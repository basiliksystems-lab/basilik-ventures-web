import Image from "next/image";

const services = [
  {
    number: "01",
    title: "International Trade",
    description:
      "Full management of cross-border trade operations including sourcing, negotiation, and regulatory compliance across European and Middle Eastern jurisdictions.",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5a17.92 17.92 0 0 1-8.716-2.247m0 0A9 9 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Wholesale & Distribution",
    description:
      "Large-volume procurement and distribution across diverse product categories, leveraging our supplier network and strategic positioning in the UAE.",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Business Development",
    description:
      "Market analysis, partnership facilitation, and expansion advisory for companies entering or growing within European and GCC markets.",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Compliance & Documentation",
    description:
      "Documentation support for international trade including letters of credit, certificates of origin, customs declarations, and multi-jurisdictional compliance.",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
  },
  {
    number: "05",
    title: "Logistics Coordination",
    description:
      "Supply chain management with freight forwarding, customs brokerage, and delivery solutions across EU and MENA trade corridors.",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    ),
  },
  {
    number: "06",
    title: "Strategic Partnerships",
    description:
      "Building long-term commercial relationships between manufacturers, distributors, and institutional buyers across our operating regions.",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
      </svg>
    ),
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 sm:py-32 bg-[oklch(0.22_0.05_250)] relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-end mb-16">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-6 bg-[oklch(0.65_0.10_250)]" />
              <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[oklch(0.65_0.10_250)]">
                Services
              </p>
            </div>
            <h2
              className="text-[clamp(1.6rem,3vw,2.6rem)] leading-[1.12] font-semibold tracking-[-0.02em] text-white"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              What we do
            </h2>
          </div>
          <p className="text-[16px] leading-[1.8] text-white/45 lg:text-right">
            Trading and business development services
            designed for seamless international commerce.
          </p>
        </div>

        {/* Featured image */}
        <div className="relative h-[220px] sm:h-[300px] mb-10 overflow-hidden">
          <Image
            src="/warehouse.jpg"
            alt="Distribution warehouse"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.22_0.05_250)] via-transparent to-[oklch(0.22_0.05_250)]/30" />
        </div>

        {/* Service grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.06]">
          {services.map((s) => (
            <div
              key={s.number}
              className="bg-[oklch(0.22_0.05_250)] p-8 lg:p-10 group relative"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 bg-white/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative">
                <div className="flex items-center justify-between mb-6">
                  <div className="h-11 w-11 flex items-center justify-center border border-white/10 text-[oklch(0.65_0.10_250)] group-hover:border-[oklch(0.55_0.12_250)]/40 group-hover:text-white transition-all duration-300">
                    {s.icon}
                  </div>
                  <span className="text-[11px] font-medium text-white/15 tabular-nums">
                    {s.number}
                  </span>
                </div>

                <h3
                  className="text-[17px] font-semibold text-white group-hover:text-[oklch(0.72_0.12_250)] transition-colors duration-300"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {s.title}
                </h3>
                <p className="mt-3 text-[13px] leading-[1.75] text-white/40 group-hover:text-white/55 transition-colors duration-300">
                  {s.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
