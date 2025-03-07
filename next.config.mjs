/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            svgo: true,
            svgoConfig: {
              plugins: [
                "preset-default",
                { name: "removeViewBox", active: false },
                { name: "prefixIds", active: true },
              ],
            },
          },
        },
      ],
    });

    return config;
  },
};

export default nextConfig;
