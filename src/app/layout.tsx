import type { Metadata } from "next";
import { DM_Sans, Space_Grotesk, IBM_Plex_Sans_Arabic } from "next/font/google";
import { LocaleProvider } from "@/i18n/locale-context";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const ibmPlexArabic = IBM_Plex_Sans_Arabic({
  variable: "--font-arabic",
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Basilik Ventures F.Z.E. | International Trade & Business Development",
  description:
    "Basilik Ventures F.Z.E. is an international trading and business development company based in the Ajman Free Zone, UAE. Specializing in wholesale, commodity trading, and cross-border commerce across Europe and the Middle East.",
  keywords: [
    "international trade",
    "wholesale",
    "business development",
    "UAE",
    "Ajman Free Zone",
    "commodity trading",
    "import export",
    "Europe",
    "Middle East",
  ],
  openGraph: {
    title: "Basilik Ventures F.Z.E.",
    description:
      "International Trade & Business Development — Ajman Free Zone, UAE",
    url: "https://basilikventures.com",
    siteName: "Basilik Ventures",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${dmSans.variable} ${spaceGrotesk.variable} ${ibmPlexArabic.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <LocaleProvider>{children}</LocaleProvider>
      </body>
    </html>
  );
}
