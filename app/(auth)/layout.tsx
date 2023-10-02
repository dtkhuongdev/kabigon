import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";

import "../globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kabigon",
  description: "Next JS 13",
};

const inter = Inter({ subsets: ["latin"] });

export const LayoutRoot = ({ children }: { children: React.ReactNode }) => {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} bg-dark-1`}>{children}</body>
      </html>
    </ClerkProvider>
  );
};
