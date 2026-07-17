import Image from "next/image";

export function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Image strip */}
        <div className="relative h-[280px] sm:h-[360px] lg:h-[420px] mb-20 overflow-hidden">
          <Image
            src="/partnerships.jpg"
            alt="Business partnerships"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-40" />
        </div>

        <div className="grid gap-16 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-6 bg-primary" />
              <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-primary">
                About
              </p>
            </div>
            <h2
              className="text-[clamp(1.6rem,3vw,2.4rem)] leading-[1.15] font-semibold tracking-[-0.02em]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Built for
              <br />
              cross-border
              <br />
              commerce
            </h2>
          </div>

          <div className="lg:col-span-3 space-y-6">
            <p className="text-[16px] leading-[1.8] text-muted-foreground">
              Basilik Ventures F.Z.E. is a trading and business development
              company incorporated in the Ajman Free Zone, United Arab Emirates.
              We work with manufacturers, distributors, and institutional buyers
              to facilitate cross-border commercial operations between European
              and Middle Eastern markets.
            </p>
            <p className="text-[16px] leading-[1.8] text-muted-foreground">
              The UAE&apos;s position as a global trade corridor allows us to
              offer our partners efficient and compliant access to both regions,
              covering sourcing, documentation, logistics, and regulatory
              compliance.
            </p>

            <div className="pt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { value: "UAE", label: "Headquarters" },
                { value: "EU & ME", label: "Markets" },
                { value: "B2B", label: "Model" },
                { value: "FZE", label: "License" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="border-l-2 border-primary/30 pl-4 py-2"
                >
                  <div className="text-[18px] font-bold text-primary">
                    {s.value}
                  </div>
                  <div className="mt-0.5 text-[11px] text-muted-foreground uppercase tracking-[0.1em]">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
