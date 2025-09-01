import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import AdobeFonts from "@/components/AdobeFonts";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KALERIIA STUDIO - Beauty Content Reimagined",
  description: "Creating stunning visual narratives that capture your authentic beauty and elevate your brand presence. Professional beauty content creation and photography services.",
  keywords: "beauty content, photography, makeup, beauty studio, professional photoshoot",
  authors: [{ name: "KALERIIA STUDIO" }],
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#5b6854" },
    { media: "(prefers-color-scheme: dark)", color: "#5b6854" },
  ],
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfairDisplay.variable} antialiased`}
      >
        <AdobeFonts />
        <div
          className="fixed top-0 left-0 right-0 bg-primary pointer-events-none z-50"
          style={{ height: "env(safe-area-inset-top)" }}
        />
        {children}
      </body>
    </html>
  );
}
