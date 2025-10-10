import type { Metadata } from "next";
import { Playfair_Display, Poppins, Pixelify_Sans } from "next/font/google";
import "./globals.css";


const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  style: ["normal", "italic"],
});

const pixelifySans = Pixelify_Sans({
  variable: "--font-pixelify",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal"],
});

export const metadata: Metadata = {
  title: "Bitcoin Research Day 2025",
  description: "A day dedicated to academic research that benefits Bitcoin. Join researchers, developers, and students in Midtown NYC on November 6, 2025 for presentations, lightning talks, and networking.",
  openGraph: {
    title: "Bitcoin Research Day 2025",
    description: "A day dedicated to academic research that benefits Bitcoin. Join researchers, developers, and students in Midtown NYC on November 6, 2025 for presentations, lightning talks, and networking.",
    type: "website",
    locale: "en_US",
    siteName: "Bitcoin Research Day",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bitcoin Research Day 2025",
    description: "A day dedicated to academic research that benefits Bitcoin. Join researchers, developers, and students in Midtown NYC on November 6, 2025.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfairDisplay.variable} ${poppins.variable} ${pixelifySans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
