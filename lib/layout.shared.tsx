import { YZ13WithTextIcon } from '@/registry/components/logo/yz13';
import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { gitConfig } from './shared';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: <YZ13WithTextIcon className="h-9" />,
    },
    themeSwitch: {
      mode: 'light-dark-system',
    },
    links: [
      { text: 'Components', url: '/components' },
      { text: 'Blocks', url: '/blocks' },
      { text: 'Pages', url: '/pages' },
      { text: 'Docs', url: '/docs' },
    ],
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
  };
}
