import { CatalogGrid } from '@/components/catalog-grid';
import { getRegistryIndex } from '@/lib/registry';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const index = getRegistryIndex();
  return [...index.byKindAndCategory.block.keys()].map((category) => ({
    category,
  }));
}

export async function generateMetadata(
  props: PageProps<'/blocks/[category]'>
): Promise<Metadata> {
  const { category } = await props.params;
  return { title: category };
}

export default async function BlocksCategoryPage(
  props: PageProps<'/blocks/[category]'>
) {
  const { category } = await props.params;
  const index = getRegistryIndex();
  if (!index.byKindAndCategory.block.has(category)) notFound();

  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-title font-medium capitalize">{category}</h1>
      <CatalogGrid kind="block" category={category} />
    </div>
  );
}
