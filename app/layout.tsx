import { Provider } from '@/components/provider';
import { cn } from '@/lib/utils';
import { mono, pixel, sans, serif } from '@/registry/lib/fonts';
import type { Viewport } from 'next';
import "../registry/globals.css";
import './global.css';

const isProduction = process.env.NODE_ENV === 'production';

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
      <head>
        {isProduction && (
          <script
            async
            src="https://c.analytics.yz13.dev/oa.js"
            data-key="oa_pk_Ky9h5OKmp22ydLxC2A_50zKRrVz5J1a3"
            data-collector="https://c.analytics.yz13.dev"
          />
        )}
      </head>
      <body id="root" className="flex flex-col antialiased min-h-screen">
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
