import { CatalogItemDetail } from '@/components/catalog-item-detail';
import { getRegistryIndex } from '@/lib/registry';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const index = getRegistryIndex();
  return index.byKind.component.map((item) => ({
    category: item.category,
    slug: item.slug,
  }));
}

export async function generateMetadata(
  props: PageProps<'/components/[category]/[slug]'>
): Promise<Metadata> {
  const { slug } = await props.params;
  const item = getRegistryIndex().byKindAndSlug.component.get(slug);
  if (!item) notFound();
  return { title: item.name, description: item.description };
}

export default async function ComponentDetailPage(
  props: PageProps<'/components/[category]/[slug]'>
) {
  const { category, slug } = await props.params;
  const item = getRegistryIndex().byKindAndSlug.component.get(slug);
  if (!item || item.category !== category) notFound();

  return <CatalogItemDetail item={item} />;
}
