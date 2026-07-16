import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-sm">
              B
            </div>
            <span className="text-sm font-semibold tracking-tight">
              BASILIK VENTURES F.Z.E.
            </span>
          </div>
          <nav className="flex gap-6">
            <a
              href="#about"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              About
            </a>
            <a
              href="#services"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Services
            </a>
            <a
              href="#contact"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Contact
            </a>
          </nav>
        </div>
        <Separator className="my-8" />
        <div className="flex flex-col items-center gap-2 text-center text-xs text-muted-foreground sm:flex-row sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} Basilik Ventures F.Z.E. All rights
            reserved.
          </p>
          <p>Ajman Free Zone, United Arab Emirates</p>
        </div>
      </div>
    </footer>
  );
}
