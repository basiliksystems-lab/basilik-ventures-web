import { Badge } from "@/components/ui/badge";

const regions = [
  {
    name: "Middle East & GCC",
    description:
      "Headquartered in the UAE with direct access to GCC markets including Saudi Arabia, Oman, Bahrain, Kuwait, and Qatar.",
  },
  {
    name: "Asia Pacific",
    description:
      "Established trade corridors with key markets in China, India, Southeast Asia, and the broader APAC region.",
  },
  {
    name: "Africa",
    description:
      "Growing presence in Sub-Saharan and North African markets, supporting trade flows in commodities and consumer goods.",
  },
  {
    name: "Europe",
    description:
      "Trade facilitation services connecting European manufacturers and suppliers with emerging market buyers.",
  },
];

export function GlobalReach() {
  return (
    <section id="global-reach" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <Badge variant="secondary" className="mb-4">
            Global Reach
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Strategically positioned for{" "}
            <span className="text-primary">global trade</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Based in the UAE — a crossroads of East and West — we connect
            businesses across continents with efficient, reliable trade
            solutions.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2">
          {regions.map((r) => (
            <div
              key={r.name}
              className="group rounded-xl border bg-card p-8 shadow-sm transition-all hover:border-primary/30 hover:shadow-md"
            >
              <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                {r.name}
              </h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">
                {r.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
