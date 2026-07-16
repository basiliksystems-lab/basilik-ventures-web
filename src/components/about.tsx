export function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <p className="text-[13px] font-medium uppercase tracking-[0.2em] text-primary/80 mb-4">
              About
            </p>
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
            <p className="text-[16px] leading-[1.75] text-muted-foreground">
              Basilik Ventures F.Z.E. is a trading and business development
              company incorporated in the Ajman Free Zone, United Arab Emirates.
              We work with manufacturers, distributors, and institutional buyers
              to facilitate cross-border commercial operations between European
              and Middle Eastern markets.
            </p>
            <p className="text-[16px] leading-[1.75] text-muted-foreground">
              The UAE&apos;s position as a global trade corridor allows us to
              offer our partners efficient and compliant access to both regions,
              managing everything from sourcing and documentation to logistics
              and regulatory compliance.
            </p>

            <div className="pt-8 grid grid-cols-2 sm:grid-cols-4 gap-px bg-border">
              {[
                { value: "UAE", label: "Headquarters" },
                { value: "EU & ME", label: "Markets" },
                { value: "B2B", label: "Model" },
                { value: "FZE", label: "License" },
              ].map((s) => (
                <div key={s.label} className="bg-background p-5">
                  <div className="text-[18px] font-semibold text-foreground">
                    {s.value}
                  </div>
                  <div className="mt-1 text-[12px] text-muted-foreground uppercase tracking-wider">
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
