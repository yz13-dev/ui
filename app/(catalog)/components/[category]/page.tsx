import { CatalogGrid } from '@/components/catalog-grid';
import { getRegistryIndex } from '@/lib/registry';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const index = getRegistryIndex();
  return [...index.byKindAndCategory.component.keys()].map((category) => ({
    category,
  }));
}

export async function generateMetadata(
  props: PageProps<'/components/[category]'>
): Promise<Metadata> {
  const { category } = await props.params;
  return { title: category };
}

export default async function ComponentsCategoryPage(
  props: PageProps<'/components/[category]'>
) {
  const { category } = await props.params;
  const index = getRegistryIndex();
  if (!index.byKindAndCategory.component.has(category)) notFound();

  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-title font-medium capitalize">{category}</h1>
      <CatalogGrid kind="component" category={category} />
    </div>
  );
}
