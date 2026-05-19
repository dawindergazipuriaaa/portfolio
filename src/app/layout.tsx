import type { Metadata } from "next";
import { Manrope, Cormorant_Garamond, Playfair_Display } from "next/font/google";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const comorant = Cormorant_Garamond({
  variable: '--font-cormorant',
  subsets: ['latin']
})
const manrope = Manrope({
  subsets:['latin'],
  variable:'--font-manrope'
})
const playfair = Playfair_Display({
  subsets:['latin'],
  variable:'--font-playfair'
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://dawinder.online'),
  title: {
    default: "Dawinder Singh | Full Stack Web Developer",
    template: "%s | Dawinder Singh" 
  },
  description: "Portfolio of Dawinder Singh, a Full Stack Web Developer specializing in Next.js, React, TypeScript, and Tailwind CSS. Crafting modern, high-performance web applications and SaaS platforms.",
  keywords: ["Dawinder Singh", "Full Stack Developer", "Web Developer", "Software Engineer", "Next.js", "React", "Tailwind CSS", "TypeScript", "Brampton"],
  authors: [{ name: "Dawinder Singh" }],
  creator: "Dawinder Singh",
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://dawinder.online",
    title: "Dawinder Singh | Full Stack Web Developer",
    description: "Explore the web development portfolio of Dawinder Singh. Specializing in modern Next.js applications and dynamic user experiences.",
    siteName: "Dawinder Singh Portfolio",
    images: [
      {
        url: "/opengraph-image.png", 
        width: 1200,
        height: 630,
        alt: "Dawinder Singh - Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dawinder Singh | Full Stack Web Developer",
    description: "Explore the web development portfolio of Dawinder Singh. Specializing in modern Next.js applications.",
    images: ["/opengraph-image.png"],
  },
  robots: {
    index: true, 
    follow: true, 
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${manrope.variable} ${geistMono.variable} ${comorant.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}