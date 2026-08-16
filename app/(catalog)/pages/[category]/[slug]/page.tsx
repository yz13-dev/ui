import { CatalogItemDetail } from '@/components/catalog-item-detail';
import { getRegistryIndex } from '@/lib/registry';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const index = getRegistryIndex();
  return index.byKind.page.map((item) => ({
    category: item.category,
    slug: item.slug,
  }));
}

export async function generateMetadata(
  props: PageProps<'/pages/[category]/[slug]'>
): Promise<Metadata> {
  const { slug } = await props.params;
  const item = getRegistryIndex().byKindAndSlug.page.get(slug);
  if (!item) notFound();
  return { title: item.name, description: item.description };
}

export default async function PageDetailPage(
  props: PageProps<'/pages/[category]/[slug]'>
) {
  const { category, slug } = await props.params;
  const item = getRegistryIndex().byKindAndSlug.page.get(slug);
  if (!item || item.category !== category) notFound();

  return <CatalogItemDetail item={item} />;
}
