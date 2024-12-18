/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.pexels.com",
      },
      {
        protocol: "https",
        hostname: "*.iconfinder.com",
      },
    ],
  },
};

export default nextConfig;
