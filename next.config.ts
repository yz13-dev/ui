import { createMDX } from 'fumadocs-mdx/next';
import type { NextConfig } from 'next';

const withMDX = createMDX();

const config: NextConfig = {
  output: 'export',
  reactStrictMode: true,
  devIndicators: false,
  experimental: {
    useTypeScriptCli: true,
  },
};

export default withMDX(config);
