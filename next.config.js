const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config, { isServer }) {
    config.externals.push({
      sharp: "commonjs sharp",
    });
    config.resolve.alias["react"] = path.resolve("./node_modules/react");
    return config;
  },
};

module.exports = nextConfig;
