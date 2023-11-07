// @ts-check
/**
 * @type {import('next').NextConfig}
 */

import createNextDocsMDX from 'next-docs-mdx/config';

const withFumaMDX = createNextDocsMDX();

const config = {
  reactStrictMode: true,
  poweredByHeader: false,
};

export default withFumaMDX(config);
