import { YZ13WithTextIcon } from '@yz13/ui/components/logo/yz13';
import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { gitConfig } from './shared';


export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      // JSX supported
      title: <YZ13WithTextIcon className="h-9" />,
    },
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
  };
}
