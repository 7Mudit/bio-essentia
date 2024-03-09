import type { Metadata } from "next";
import "./globals.css";

import { Noto_Sans } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { dark, neobrutalism } from "@clerk/themes";

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
      <body className={`${noto_sans.className} `}>
        <ClerkProvider
          appearance={{
            elements: {
              formButtonPrimary:
                "px-6 py-2 bg-black  text-white rounded-md shadow-sm hover:bg-blue-500 hover:text-white transition-colors duration-300",
            },
            variables: { colorPrimary: "black" },
          }}
        >
          {children}{" "}
        </ClerkProvider>
      </body>
    </html>
  );
}
