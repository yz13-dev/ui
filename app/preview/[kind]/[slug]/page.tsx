import { PREVIEW_ROOT_ID, PreviewHeightReporter } from '@/components/preview-height-reporter';
import { getRegistryIndex } from '@/lib/registry';
import { blockPreviews, pagePreviews } from '@/lib/preview-registry';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export async function generateStaticParams() {
  const index = getRegistryIndex();
  return [
    ...index.byKind.block.map((item) => ({ kind: 'block', slug: item.slug })),
    ...index.byKind.page.map((item) => ({ kind: 'page', slug: item.slug })),
  ];
}

export default async function PreviewPage(
  props: PageProps<'/preview/[kind]/[slug]'>
) {
  const { kind, slug } = await props.params;
  const registry = kind === 'block' ? blockPreviews : kind === 'page' ? pagePreviews : null;
  const Preview = registry?.[slug];
  if (!Preview) notFound();

  return (
    <>
      <div id={PREVIEW_ROOT_ID}>
        <Preview />
      </div>
      <PreviewHeightReporter />
    </>
  );
}
