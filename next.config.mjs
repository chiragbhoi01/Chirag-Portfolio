/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // <--- Forces Next.js to build static HTML files
  images: {
    unoptimized: true, // <--- Required for static export
  },
  // This ensures 404s work correctly on Netlify
  trailingSlash: true,
};

export default nextConfig;