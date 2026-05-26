import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "NEXUS | Premium 3D Digital Experience",
  description:
    "A premium futuristic 3D interactive website built with Next.js 15, React Three Fiber, Three.js, and Framer Motion. Explore the future of digital experiences.",
  keywords: ["3D", "Next.js", "Three.js", "Framer Motion", "WebGL", "Interactive"],
  authors: [{ name: "NEXUS Studio" }],
  openGraph: {
    title: "NEXUS | Premium 3D Digital Experience",
    description: "Explore the future of digital experiences with cutting-edge 3D technology.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="min-h-screen antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
