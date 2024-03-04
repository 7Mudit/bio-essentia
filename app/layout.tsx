import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import { Noto_Sans } from "next/font/google";
import Footer from "@/components/shared/Footer";

const noto_sans = Noto_Sans({ subsets: ["cyrillic"] });

export const metadata: Metadata = {
  title: "BioEssentials",
  description: "Next generation suplement seller",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${noto_sans.className}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
