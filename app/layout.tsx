import { Provider } from '@/components/provider';
import { cn } from '@/lib/utils';
import type { Viewport } from 'next';
import localFont from "next/font/local";
import "../registry/globals.css";
import './global.css';


// const sans = Golos_Text({
//   weight: ["400", "500", "600", "700"],
//   style: ["normal"],
//   variable: "--font-sans",
//   preload: true,
//   fallback: ["system-ui", "Inter", "sans-serif"],
// })
const sans = localFont({
  src: [
    { path: "./fonts/golos-text-regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/golos-text-500.woff2", weight: "500", style: "normal" },
    { path: "./fonts/golos-text-600.woff2", weight: "600", style: "normal" },
    { path: "./fonts/golos-text-700.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-sans",
  preload: true,
  fallback: ["system-ui", "Inter", "sans-serif"],
});

const pixel = localFont({
  src: "./fonts/geist-pixel-square.woff2",
  variable: "--font-pixel",
  display: "optional",
  preload: false,
  fallback: ["system-ui"],
});
const mono = localFont({
  src: [
    { path: "./fonts/jetbrains-mono-regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/jetbrains-mono-500.woff2", weight: "500", style: "normal" },
  ],
  variable: "--font-mono",
  display: "optional",
  preload: false,
  fallback: ["mono"],
});
const serif = localFont({
  src: [
    { path: "./fonts/playfair-display-regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/playfair-display-italic.woff2", weight: "400", style: "italic" },
    { path: "./fonts/playfair-display-500.woff2", weight: "500", style: "normal" },
    { path: "./fonts/playfair-display-500-italic.woff2", weight: "500", style: "italic" },
    { path: "./fonts/playfair-display-600.woff2", weight: "600", style: "normal" },
    { path: "./fonts/playfair-display-600-italic.woff2", weight: "600", style: "italic" },
  ],
  variable: "--font-serif",
  display: "optional",
  preload: false,
  fallback: ["serif"],
});

export const viewport: Viewport = {
  colorScheme: "light dark",
  themeColor: [
    {
      media: "(prefers-color-scheme: light)",
      color: "#ffffff",
    },
    {
      media: "(prefers-color-scheme: dark)",
      color: "#000000",
    },
  ],
};

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang="ru"
      className={cn(sans.variable, mono.variable, serif.variable, pixel.variable)}
      suppressHydrationWarning
    >
      <body id="root" className="flex flex-col antialiased min-h-screen">
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
