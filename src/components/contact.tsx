import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export function Contact() {
  return (
    <section id="contact" className="bg-muted/50 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <Badge variant="secondary" className="mb-4">
            Contact
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Get in touch
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Whether you&apos;re looking for a trading partner, exploring new
            markets, or seeking business development support, we&apos;d like to
            hear from you.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-4xl gap-12 lg:grid-cols-2">
          {/* Contact info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-primary">
                Registered Office
              </h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                Basilik Ventures F.Z.E.
                <br />
                Ajman Free Zone
                <br />
                Ajman, United Arab Emirates
              </p>
            </div>

            <Separator />

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-primary">
                Email
              </h3>
              <a
                href="mailto:info@basilikventures.com"
                className="mt-3 block text-muted-foreground hover:text-primary transition-colors"
              >
                info@basilikventures.com
              </a>
            </div>

            <Separator />

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-primary">
                Business Hours
              </h3>
              <p className="mt-3 text-muted-foreground">
                Sunday – Thursday: 9:00 AM – 6:00 PM (GST)
              </p>
            </div>
          </div>

          {/* Contact form */}
          <form
            className="space-y-5 rounded-xl border bg-white p-8 shadow-sm"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-foreground"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                className="mt-1.5 w-full rounded-lg border bg-background px-4 py-2.5 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                placeholder="Your name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-foreground"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1.5 w-full rounded-lg border bg-background px-4 py-2.5 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                placeholder="you@company.com"
              />
            </div>
            <div>
              <label
                htmlFor="company"
                className="block text-sm font-medium text-foreground"
              >
                Company
              </label>
              <input
                type="text"
                id="company"
                className="mt-1.5 w-full rounded-lg border bg-background px-4 py-2.5 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                placeholder="Your company name"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-foreground"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="mt-1.5 w-full rounded-lg border bg-background px-4 py-2.5 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary resize-none"
                placeholder="How can we help?"
              />
            </div>
            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
