import BundleAnalyzer from '@next/bundle-analyzer';

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    // Enable the AVIF format for image optimization for even smaller images, see https://nextjs.org/docs/pages/api-reference/components/image#formats
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
        port: '',
        pathname: '**',
      },
      { protocol: 'http', hostname: 'localhost', port: '1337', pathname: '**' },
    ],
  },
  eslint: {
    dirs: ['.'],
  },
};

const withBundleAnalyzer = BundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

export default withBundleAnalyzer(nextConfig);
