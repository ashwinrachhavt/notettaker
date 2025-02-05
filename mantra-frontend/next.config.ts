import type { NextConfig } from "next";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

const nextConfig: NextConfig = {
  webpack: (config, { dev, isServer }) => {
    if (!dev) {
      config.plugins.push(new MiniCssExtractPlugin());
    }
    return config;
  },
  /* config options here */
};

export default nextConfig;
