import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Notion-like Markdown Notes",
  description: "A Markdown-based note-taking app built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <nav className="bg-gray-800 p-4">
          <div className="container mx-auto flex justify-between items-center">
            <Link href="/" className="text-white text-lg font-bold">
              My Notes
            </Link>
            <Link href="/new">
              <button className="px-3 py-1 bg-blue-500 text-white rounded">
                Create Note
              </button>
            </Link>
          </div>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}
