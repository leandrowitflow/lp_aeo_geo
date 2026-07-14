import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Why Isn't AI Recommending Your Business? | Flow Productions",
  description:
    "Discover how to prepare your website to be found, understood and recommended by search engines and AI-powered platforms.",
  icons: {
    icon: [
      { url: "/logos/L_02.png" },
      {
        url: "/logos/L_02.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/logos/L_01.png",
        media: "(prefers-color-scheme: dark)",
      },
    ],
    apple: "/logos/L_02.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${plusJakarta.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
