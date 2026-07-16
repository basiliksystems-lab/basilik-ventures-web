export function Footer() {
  return (
    <footer className="border-t border-border bg-[oklch(0.975_0.003_250)]">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 sm:py-20">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <span
              className="text-[20px] font-semibold tracking-[-0.02em] text-foreground"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Basilik Ventures
            </span>
            <p className="mt-4 text-[13px] leading-[1.7] text-muted-foreground">
              International trade and business
              <br />
              development company.
            </p>
          </div>

          {/* Registered Office */}
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.15em] text-foreground mb-4">
              Registered Office
            </h4>
            <div className="space-y-1 text-[13px] leading-[1.7] text-muted-foreground">
              <p>Basilik Ventures F.Z.E.</p>
              <p>Ajman Free Zone</p>
              <p>Ajman, United Arab Emirates</p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.15em] text-foreground mb-4">
              Contact
            </h4>
            <div className="space-y-2 text-[13px] text-muted-foreground">
              <a
                href="mailto:info@basilikventures.com"
                className="block hover:text-foreground transition-colors"
              >
                info@basilikventures.com
              </a>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.15em] text-foreground mb-4">
              Business Hours
            </h4>
            <div className="space-y-1 text-[13px] leading-[1.7] text-muted-foreground">
              <p>Sunday &ndash; Thursday</p>
              <p>9:00 AM &ndash; 6:00 PM (GST)</p>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-[12px] text-muted-foreground/70">
            &copy; {new Date().getFullYear()} Basilik Ventures F.Z.E. All rights
            reserved.
          </p>
          <p className="text-[12px] text-muted-foreground/50">
            Ajman Free Zone, United Arab Emirates
          </p>
        </div>
      </div>
    </footer>
  );
}
