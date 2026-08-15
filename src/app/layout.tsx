import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://gourd-and-garland.vercel.app"),
  title: "Gourd & Garland | Seasonal Porch Styling Near Boston",
  description: "Premium fall porch styling for Boston’s southwest suburbs. Delivery, design, installation, and optional removal—without the shopping or heavy lifting.",
  keywords: ["porch styling Boston", "fall porch decorating", "pumpkin delivery", "seasonal decorating Massachusetts"],
  openGraph: {
    title: "Gourd & Garland | Seasonal magic, styled at your doorstep.",
    description: "Premium fall porch styling for Boston’s southwest suburbs. Fall 2026 priority list now open.",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Gourd & Garland — Seasonal magic, styled at your doorstep." }]
  },
  twitter: { card: "summary_large_image", title: "Gourd & Garland", description: "Seasonal magic, styled at your doorstep.", images: ["/og.jpg"] },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
