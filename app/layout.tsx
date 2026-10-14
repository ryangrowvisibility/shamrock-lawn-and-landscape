import type { Metadata } from "next";
import { Archivo, Hanken_Grotesk } from "next/font/google";
import "./globals.css";

const heading = Archivo({ variable: "--font-heading", subsets: ["latin"], weight: ["700", "800", "900"] });
const body = Hanken_Grotesk({ variable: "--font-body", subsets: ["latin"], weight: ["400", "600", "700"] });

export const metadata: Metadata = {
  title: "Shamrock Lawn and Landscape | Lawn Care & Snow Removal in Kitchener-Waterloo",
  description:
    "Family-run, fully insured grass cutting, lawn care, landscaping and snow removal for homes, businesses, student housing and property managers in Kitchener and Waterloo. 7 years in business, 5.0 on Google. Call (226) 929-3170.",
  openGraph: {
    title: "Shamrock Lawn and Landscape | Kitchener-Waterloo Lawn Care & Snow Removal",
    description: "Fully insured, family-run lawn care and snow removal in Kitchener-Waterloo. 5.0 on Google. Call (226) 929-3170.",
    type: "website",
    locale: "en_CA",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${heading.variable} ${body.variable} antialiased`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
