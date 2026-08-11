import { Provider } from '@/components/provider';
import { cn } from '@/lib/utils';
import type { Viewport } from 'next';
import { sans, mono, serif, pixel } from '@/registry/lib/fonts';
import "../registry/globals.css";
import './global.css';

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
