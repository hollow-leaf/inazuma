/** @type {import('next').NextConfig} */
const nextConfig = {
  // exports: true,
  // reactStrictMode: true,
  // basePath:"/cacahack",
  webpack: config => {
    config.resolve.fallback = { fs: false, net: false, tls: false };
    return config;
  },
};

module.exports = nextConfig;
