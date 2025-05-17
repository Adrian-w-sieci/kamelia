import type { NextConfig } from "next";
/** @type {import('next').NextConfig}; */

const nextConfig: NextConfig = {
  /* config options here */
  devIndicators: false,
  images: {
    domains: ['cdn.sanity.io'],
  },
};

export default nextConfig;
