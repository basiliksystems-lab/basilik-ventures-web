export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.03] to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-28 sm:pt-28 sm:pb-36 lg:px-10 lg:pt-36 lg:pb-44">
        <p className="text-[13px] font-medium uppercase tracking-[0.2em] text-primary/80 mb-8">
          Ajman Free Zone &mdash; United Arab Emirates
        </p>

        <h1
          className="max-w-3xl text-[clamp(2.2rem,5vw,4rem)] leading-[1.08] font-semibold tracking-[-0.03em] text-foreground"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          International trade
          <br />
          and business development
        </h1>

        <p className="mt-8 max-w-xl text-[17px] leading-[1.7] text-muted-foreground">
          We facilitate wholesale commerce and build strategic partnerships
          between Europe and the Middle East, providing our clients with
          reliable access to established and emerging markets.
        </p>

        <div className="mt-14 flex items-center gap-8">
          <a
            href="#services"
            className="inline-flex h-11 items-center justify-center bg-foreground text-background px-7 text-[13px] font-medium tracking-wide hover:bg-foreground/85 transition-colors"
          >
            Our services
          </a>
          <a
            href="#about"
            className="text-[13px] font-medium text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4 decoration-border hover:decoration-foreground/30"
          >
            Learn more
          </a>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="h-px bg-border" />
      </div>
    </section>
  );
}
