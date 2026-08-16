import { CatalogGrid } from '@/components/catalog-grid';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blocks',
  description: 'Page sections composed from components.',
};

export default function BlocksPage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-title font-medium">Blocks</h1>
        <p className="text-lede text-muted-foreground">
          Page sections composed from components.
        </p>
      </div>
      <CatalogGrid kind="block" />
    </div>
  );
}
