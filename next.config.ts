import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  sassOptions: {
    // You can pass options to the sass render function here
    // For example, to silence deprecation warnings:
    silenceDeprecations: ['legacy-js-api'],
  },
  distDir: 'build',
  output: 'standalone',
};

export default nextConfig;