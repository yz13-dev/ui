import { CatalogGrid } from '@/components/catalog-grid';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Components',
  description: 'Atomic building blocks of the design system.',
};

export default function ComponentsPage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-title font-medium">Components</h1>
        <p className="text-lede text-muted-foreground">
          Atomic building blocks of the design system.
        </p>
      </div>
      <CatalogGrid kind="component" />
    </div>
  );
}
