import { Badge } from "@/components/ui/badge";

export function About() {
  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <Badge variant="secondary" className="mb-4">
              About Us
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              A trusted partner in{" "}
              <span className="text-primary">international commerce</span>
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Basilik Ventures F.Z.E. is a trading and business development
              company incorporated in the Ajman Free Zone, United Arab Emirates.
              We specialize in facilitating cross-border commercial operations,
              connecting suppliers and buyers across multiple industries and
              geographies.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Leveraging the UAE&apos;s strategic position as a global trade hub,
              we provide our partners with seamless access to emerging and
              established markets, ensuring efficient, compliant, and profitable
              trade flows.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {[
              { value: "UAE", label: "Headquarters" },
              { value: "Global", label: "Market Reach" },
              { value: "B2B", label: "Business Model" },
              { value: "FZE", label: "Licensed Entity" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border bg-card p-6 text-center shadow-sm"
              >
                <div className="text-2xl font-bold text-primary">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
