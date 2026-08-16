import { buildRegistryIndexes } from '@/lib/registry-search-index';
import { createSearchAPI } from 'fumadocs-core/search/server';

export const revalidate = false;

export const { staticGET: GET } = createSearchAPI('advanced', {
  indexes: buildRegistryIndexes(),
  language: 'english',
});
