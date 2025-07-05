import "@/styles/globals.css";
import { cn } from "@yz13/ui/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const sans = Inter({ subsets: ["latin", "cyrillic"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Docs",
  description: "UI components for React",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn("", sans.variable)}>
      <body>{children}</body>
    </html>
  );
}
