import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
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
    <ClerkProvider
      afterSignOutUrl="/sign-in"
      appearance={{
        // Start from Clerk's dark theme, then repaint it with the Coauthr palette
        baseTheme: dark,
        variables: {
          colorPrimary: "#14B88A",
          colorBackground: "#101A17",
          colorInputBackground: "#16231F",
          colorInputText: "#FFFFFF",
          colorText: "#FFFFFF",
          colorTextSecondary: "#B7D9CC",
          borderRadius: "0.75rem",
          fontSize: "16px",
        },
      }}
    >
      <html lang="en" suppressHydrationWarning>
        <body
          className={`min-h-screen font-sans antialiased ${fontSans.variable}`}
        >
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
