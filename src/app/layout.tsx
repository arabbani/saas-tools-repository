import { cn } from "@/lib/css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: {
    default: "Saas Tools - Find The Exact Saas Tool For Your Needs",
    template: "%s | Saas Tools"
  },
  description:
    "Saas Tools Collects & Organizes All The Best Saas Tools So You Can Find Them Easily In One Place",
  other: {
    google: "nositelinkssearchbox",
    googlebot: "notranslate"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "bg-background font-sans antialiased min-h-screen",
          fontSans.variable
        )}
      >
        <main className="py-6 max-w-7xl mx-2 md:mx-3 xl:mx-auto">
          {children}
        </main>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
