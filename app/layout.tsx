import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

// Exposed as a CSS variable so Tailwind's `font-sans` can pick it up
// (see `fontFamily.sans` in tailwind.config.ts)
const fontSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Coauthr",
  description: "Write together, in real time.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`min-h-screen font-sans antialiased ${fontSans.variable}`}>
        {children}
      </body>
    </html>
  );
}