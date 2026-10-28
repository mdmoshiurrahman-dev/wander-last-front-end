import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/nav/navbar";
import { Footer } from "@/components/footer/footer";
import { Suspense } from "react";
import NavSuspense from "@/components/nav/NavSuspense";
import { Toaster } from "@/components/ui/toast";
const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  variable: "--font-josefin-sans",
});

export const metadata: Metadata = {
  title: "Wanderlast — Discover Your Next Adventure",
  description:
    "Explore breathtaking destinations and create unforgettable memories with our curated travel experiences.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      theme-data="light"
      lang="en"
      className={`${josefinSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Suspense fallback={<NavSuspense />}>
          <Navbar />
        </Suspense>
        <Toaster />
        <main className="flex flex-1">
           {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
