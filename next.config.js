/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config, { isServer }) {
    config.externals.push({
      sharp: "commonjs sharp",
    });
    return config;
  },
};

module.exports = nextConfig;
