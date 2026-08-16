import { getCatalogTree } from '@/lib/catalog-tree';
import { baseOptions } from '@/lib/layout.shared';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <DocsLayout tree={getCatalogTree()} {...baseOptions()}>
      <div className="mx-auto w-full max-w-[1168px] px-4 py-6 md:px-6 md:pt-8 xl:px-8 xl:pt-14">
        {children}
      </div>
    </DocsLayout>
  );
}
