/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Enable static HTML export
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
