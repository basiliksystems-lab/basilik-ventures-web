import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Basilik Ventures F.Z.E. | International Trade & Business Development",
  description:
    "Basilik Ventures F.Z.E. is an international trading and business development company based in the Ajman Free Zone, UAE. Specializing in wholesale, commodity trading, and cross-border commerce.",
  keywords: [
    "international trade",
    "wholesale",
    "business development",
    "UAE",
    "Ajman Free Zone",
    "commodity trading",
    "import export",
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
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
