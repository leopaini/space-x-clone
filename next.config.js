/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.staticflickr.com",
        pathname: "/**"
      }
    ]
  }
};

module.exports = nextConfig;
