'use client';
import { useState } from 'react';
import {
  SearchDialog,
  SearchDialogClose,
  SearchDialogContent,
  SearchDialogHeader,
  SearchDialogIcon,
  SearchDialogInput,
  SearchDialogList,
  SearchDialogOverlay,
  type SharedProps,
} from 'fumadocs-ui/components/dialog/search';
import { useDocsSearch } from 'fumadocs-core/search/client';
import { create } from '@orama/orama';
import { useI18n } from 'fumadocs-ui/contexts/i18n';

function initOrama() {
  return create({
    schema: { _: 'string' },
    // https://docs.orama.com/docs/orama-js/supported-languages
    language: 'english',
  });
}

export default function DefaultSearchDialog(props: SharedProps) {
  const { locale } = useI18n(); // (optional) for i18n
  const [search, setSearch] = useState('');

  const registry = useDocsSearch({
    type: 'static',
    from: '/api/registry-search',
    initOrama,
    locale,
  });
  const docs = useDocsSearch({
    type: 'static',
    initOrama,
    locale,
  });

  function onSearchChange(value: string) {
    setSearch(value);
    registry.setSearch(value);
    docs.setSearch(value);
  }

  const items = [
    ...(registry.query.data !== 'empty' ? (registry.query.data ?? []) : []),
    ...(docs.query.data !== 'empty' ? (docs.query.data ?? []) : []),
  ];

  return (
    <SearchDialog
      search={search}
      onSearchChange={onSearchChange}
      isLoading={registry.query.isLoading || docs.query.isLoading}
      {...props}
    >
      <SearchDialogOverlay />
      <SearchDialogContent>
        <SearchDialogHeader>
          <SearchDialogIcon />
          <SearchDialogInput />
          <SearchDialogClose />
        </SearchDialogHeader>
        <SearchDialogList items={items.length > 0 ? items : null} />
      </SearchDialogContent>
    </SearchDialog>
  );
}
