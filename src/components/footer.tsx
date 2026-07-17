import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-[oklch(0.18_0.04_250)] text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 sm:py-20">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Image
              src="/logo-white.png"
              alt="Basilik Ventures"
              width={180}
              height={40}
              className="h-5 w-auto opacity-70 mb-5"
            />
            <p className="text-[13px] leading-[1.7] text-white/40">
              International trade and business
              <br />
              development company.
            </p>
          </div>

          {/* Registered Office */}
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.15em] text-white/60 mb-4">
              Registered Office
            </h4>
            <div className="space-y-1 text-[13px] leading-[1.7] text-white/40">
              <p>Basilik Ventures F.Z.E.</p>
              <p>Ajman Free Zone</p>
              <p>Ajman, United Arab Emirates</p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.15em] text-white/60 mb-4">
              Contact
            </h4>
            <a
              href="mailto:corporate@basilikventures.com"
              className="text-[13px] text-white/40 hover:text-white transition-colors"
            >
              corporate@basilikventures.com
            </a>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.15em] text-white/60 mb-4">
              Business Hours
            </h4>
            <div className="space-y-1 text-[13px] leading-[1.7] text-white/40">
              <p>Monday to Friday</p>
              <p>9:00 AM to 6:00 PM</p>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-[12px] text-white/25">
            &copy; {new Date().getFullYear()} Basilik Ventures F.Z.E. All rights
            reserved.
          </p>
          <p className="text-[12px] text-white/20">
            Ajman Free Zone, United Arab Emirates
          </p>
        </div>
      </div>
    </footer>
  );
}
