import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"]
});

export const metadata: Metadata = {
  title: "Precision - Clear Thinking. Better Outcomes.",
  description: "Clear thinking for builders who want better outcomes. Weekly frameworks. No fluff.",
  openGraph: {
    title: "Precision - Clear Thinking. Better Outcomes.",
    description: "Clear thinking for builders who want better outcomes.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
