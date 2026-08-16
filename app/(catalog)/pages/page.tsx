import { CatalogGrid } from '@/components/catalog-grid';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pages',
  description: 'Full pages composed from blocks.',
};

export default function PagesPage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-title font-medium">Pages</h1>
        <p className="text-lede text-muted-foreground">
          Full pages composed from blocks.
        </p>
      </div>
      <CatalogGrid kind="page" />
    </div>
  );
}
