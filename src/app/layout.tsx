import type { Metadata, Viewport } from "next";
import { Fraunces, Outfit } from "next/font/google";
import { MetaPixel } from "@/components/MetaPixel";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://herbalcare.asia",
  ),
  title: {
    default:
      "TSAA NG HERBA LUDWIGIA PROSTRATA - Makabagong Solusyong Herbal para sa Kalusugan ng Sikmura",
    template: "%s | HerbalCare",
  },
  description:
    "Tsaa ng Herba Ludwigia Prostrata — 4 na natural na halaman para sa ulser, acid reflux, at panunaw. Hanggang 50% diskwento ngayon.",
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#6b2b12",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fil"
      className={`${fraunces.variable} ${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full font-sans">
        <MetaPixel />
        {children}
      </body>
    </html>
  );
}
