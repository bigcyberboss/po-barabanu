/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "standalone", // включить для деплоя на VPS
  images: {
    formats: ["image/webp", "image/avif"],
  },
};

export default nextConfig;
