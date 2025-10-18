import type { Metadata } from "next";
import "./globals.css";
import { ReactLenis } from '@/lib/lenis'

export const metadata: Metadata = {
  title: "Zion SEO – AI SEO Tools for Higher Rankings on Google and ChatGPT",
  description: "Zion SEO helps e-commerce brands boost visibility across Google and AI search platforms like ChatGPT. Use our AI-powered tools to find profitable keywords, optimize your pages, and grow traffic with smarter, data-driven SEO.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ReactLenis root>
          {children}
        </ReactLenis>
      </body>
    </html>
  );
}
