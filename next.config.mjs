/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    // typedRoutes: true,
    mdxRs: true
  },
  images: {
    formats: ['image/avif', 'image/webp']
  }
};

export default nextConfig;
