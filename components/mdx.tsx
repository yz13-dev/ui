import defaultMdxComponents from 'fumadocs-ui/mdx';
import type { MDXComponents } from 'mdx/types';
import { cn } from '@/lib/utils';

const headingClassNames = {
  h1: 'text-title font-semibold',
  h2: 'text-heading-24 font-semibold',
  h3: 'text-heading-20 font-semibold',
  h4: 'text-heading-16 font-semibold',
  h5: 'text-heading-16 font-medium',
  h6: 'text-label font-medium',
} as const;

export function getMDXComponents(components?: MDXComponents) {
  return {
    ...defaultMdxComponents,
    h1: (props) => (
      <defaultMdxComponents.h1 {...props} className={cn(headingClassNames.h1, props.className)} />
    ),
    h2: (props) => (
      <defaultMdxComponents.h2 {...props} className={cn(headingClassNames.h2, props.className)} />
    ),
    h3: (props) => (
      <defaultMdxComponents.h3 {...props} className={cn(headingClassNames.h3, props.className)} />
    ),
    h4: (props) => (
      <defaultMdxComponents.h4 {...props} className={cn(headingClassNames.h4, props.className)} />
    ),
    h5: (props) => (
      <defaultMdxComponents.h5 {...props} className={cn(headingClassNames.h5, props.className)} />
    ),
    h6: (props) => (
      <defaultMdxComponents.h6 {...props} className={cn(headingClassNames.h6, props.className)} />
    ),
    p: (props) => <p {...props} className={cn('text-body', props.className)} />,
    ...components,
  } satisfies MDXComponents;
}

export const useMDXComponents = getMDXComponents;

declare global {
  type MDXProvidedComponents = ReturnType<typeof getMDXComponents>;
}
